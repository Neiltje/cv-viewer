package com.nwj.cvviewer.service.impl;

import com.nwj.cvviewer.conversion.CvConversionService;
import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.data.entity.CvPermissions;
import com.nwj.cvviewer.data.entity.UserDetails;
import com.nwj.cvviewer.data.loader.DataLoader;
import com.nwj.cvviewer.data.repository.CvPermissionsRepository;
import com.nwj.cvviewer.data.repository.CvRepository;
import com.nwj.cvviewer.service.CvService;
import com.nwj.cvviewer.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CvServiceImpl implements CvService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CvServiceImpl.class);

    @Autowired
    private CvRepository cvRepository;

    @Autowired
    private CvPermissionsRepository cvPermissionsRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CvConversionService cvConversionService;

    @Value("${load.default.data}")
    private boolean loadDefaultData;

    @Autowired
    private DataLoader dataLoader;

    @PostConstruct
    public void initialise() {
        long cvCount = cvRepository.count();
        if (cvCount == 0
            && loadDefaultData) {
            LOGGER.info("No CVs loaded from repository. Loading CVs from default file ...");
            try {
                List<CvData> cvDataList = cvDataList = dataLoader.loadData("data/defaultCvs.json", CvData.class);
                cvConversionService.updateReferences(cvDataList);
                cvRepository.saveAll(cvDataList);
                LOGGER.info("{} CVs loaded from the default file.", cvDataList.size());
            } catch (Exception ex) {
                LOGGER.error("Unable to load CVs from default file.", ex);
                throw new RuntimeException("Unable to load CVs from default file.", ex);
            }
        } else {
            LOGGER.info("Repository contains {} CVs.", cvCount);
        }
        cvRepository.findAll().forEach(c -> {
            if (cvPermissionsRepository.findByCvName(c.getName()) == null) {
                CvPermissions cvPermissions = new CvPermissions();
                cvPermissions.setCvData(c);
                cvPermissions.setOwner(userService.getUserDetails("Neil"));
                cvPermissionsRepository.save(cvPermissions);
            }
        });
    }

    @Override
    public List<CvData> getAllCvs() {
        LOGGER.info("Getting all CVs from repository ...");
        List<CvData> cvDataList = cvRepository.findAll();
        LOGGER.info("{} CVs retrieved from the repository.", cvDataList.size());
        return cvDataList;
    }

    @Override
    @Transactional
    public CvData getCvByName(String cvName) {
        LOGGER.info("Getting CV from repository with name = \"{}\".", cvName);
        return cvRepository.findByName(cvName);
    }

    @Override
    public CvData getNewCvTemplate() {
        return dataLoader.loadDataItem("data/newUserCv.json", CvData.class);
    }

    @Override
    @Transactional
    public void deleteCvByName(String cvName) {
        LOGGER.info("Deleting CV from repository with name = \"{}\".", cvName);
        CvData existingCvData = getCvByName(cvName);
        if (existingCvData != null) {
            LOGGER.info("Deleting existing CV with name = \"{}\" ...", cvName);
            cvRepository.delete(existingCvData);
            LOGGER.info("Existing CV with name = \"{}\" deleted.", cvName);
        } else {
            throw new RuntimeException("Cannot delete CV with name \"" + cvName + "\" - CV does not exist.");
        }
        CvPermissions existingCvPermissions = getCvPermissions(cvName);
        if (existingCvPermissions != null) {
            LOGGER.info("Deleting existing CV permissions with name = \"{}\" ...", cvName);
            cvPermissionsRepository.delete(existingCvPermissions);
            LOGGER.info("Existing CV permissions with name = \"{}\" deleted.", cvName);
        }
    }

    @Override
    @Transactional
    public void postCv(CvData cvData) {
        LOGGER.info("Saving CV with name = \"{}\".", cvData.getName());
        CvData existingCvData = getCvByName(cvData.getName());
        if (existingCvData != null) {
            LOGGER.info("Deleting existing CV with name = \"{}\" ...", cvData.getName());
            cvRepository.delete(existingCvData);
            LOGGER.info("Existing CV with name = \"{}\" deleted.", cvData.getName());
        }
        cvRepository.save(cvData);
        LOGGER.info("CV with name = \"{}\" saved.", cvData.getName());
    }

    @Override
    @Transactional
    public CvPermissions getCvPermissions(String cvName) {
        LOGGER.info("Getting CV permissions from repository for CV with name = \"{}\".", cvName);
        CvPermissions cvPermissions = cvPermissionsRepository.findByCvName(cvName);
        LOGGER.info("CV permissions retrieved: {}", cvPermissions);
        return cvPermissions;
    }

    @Override
    @Transactional
    public void postCvPermissions(CvPermissions cvPermissions) {
        LOGGER.info("Saving CV permissions: \"{}\".", cvPermissions);
        CvPermissions existingCvPermissions = cvPermissionsRepository.findByCvName(cvPermissions.getCvData().getName());
        if (existingCvPermissions != null) {
            existingCvPermissions.setOwner(cvPermissions.getOwner());
            existingCvPermissions.setUsers(cvPermissions.getUsers());
            cvPermissionsRepository.save(existingCvPermissions);
            LOGGER.info("CV permissions to repository for CV with name = \"{}\" updated.", cvPermissions.getCvData().getName());
        } else {
            cvPermissionsRepository.save(cvPermissions);
            LOGGER.info("CV permissions to repository for CV with name = \"{}\" created.", cvPermissions.getCvData().getName());
        }
    }

    @Override
    @Transactional
    public void deleteCvPermissionsForUser(String userName) {
        List<CvPermissions> cvPermissionsOwnerList = cvPermissionsRepository.findByOwnerUserName(userName);
        if (!CollectionUtils.isEmpty(cvPermissionsOwnerList)) {
            String cvNames = cvPermissionsOwnerList.stream()
                                .map(CvPermissions::getCvData)
                                .map(CvData::getName)
                                .collect(Collectors.joining());
            throw new RuntimeException("Cannot delete user \"" + userName + "\" - user owns the following CVs: " + cvNames);
        }
        cvPermissionsRepository.findAll()
            .forEach(p -> {
                Optional<UserDetails> userDetailsOpt = findMatch(p.getUsers(), userName);
                if (userDetailsOpt.isPresent()) {
                    p.getUsers().remove(userDetailsOpt.get());
                    cvPermissionsRepository.save(p);
                }
            });
    }

    private Optional<UserDetails> findMatch(Set<UserDetails> userDetails, String userName) {
        return Optional.ofNullable(userDetails).stream()
                .flatMap(Collection::stream)
                .filter(u -> userName.equals(u.getUserName()))
                .findFirst();
    }

}