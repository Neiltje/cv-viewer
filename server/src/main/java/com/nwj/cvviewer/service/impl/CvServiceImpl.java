package com.nwj.cvviewer.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nwj.cvviewer.conversion.CvConversionService;
import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.data.repository.CvRepository;
import com.nwj.cvviewer.service.CvService;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.io.FileInputStream;
import java.util.Arrays;
import java.util.List;

@Service
public class CvServiceImpl implements CvService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CvServiceImpl.class);

    @Autowired
    private CvRepository cvRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private CvConversionService cvConversionService;

    @Value("${load.default.data}")
    private boolean loadDefaultData;

    @Override
    public List<CvData> getAllCvs() {
        LOGGER.info("Getting all CVs from repository ...");
        List<CvData> cvDataList = cvRepository.findAll();
        if (CollectionUtils.isEmpty(cvDataList)
            && loadDefaultData) {
            LOGGER.info("No CVs loaded from repository. Loading CVs from default file ...");
            try {
                FileInputStream fis = new FileInputStream("src/main/resources/data/defaultCvs.json");
                String cvJsonString = IOUtils.toString(fis, "UTF-8");
                CvData[] cvDataArray = objectMapper.readValue(cvJsonString, CvData[].class);
                cvDataList = Arrays.asList(cvDataArray);
                cvConversionService.updateReferences(cvDataList);
                cvRepository.saveAll(cvDataList);
                LOGGER.info("{} CVs loaded from the default file.", cvDataList.size());
            } catch (Exception ex) {
                LOGGER.error("Unable to load CVs from default file.", ex);
                throw new RuntimeException("Unable to load CVs from default file.", ex);
            }
        } else {
            LOGGER.info("{} CVs retrieved from the repository.", cvDataList.size());
        }
        return cvDataList;
    }

    @Override
    public CvData getCvByName(String cvName) {
        LOGGER.info("Getting CV from repository with name = \"{}\".", cvName);
        return cvRepository.findByName(cvName);
    }

    @Override
    public void putCv(CvData cvData) {
        LOGGER.info("Saving CV with name = \"{}\".", cvData.getName());
        CvData existingCvData = getCvByName(cvData.getName());
        if (existingCvData != null) {
            cvRepository.delete(existingCvData);
        }
        cvRepository.save(cvData);
    }

}