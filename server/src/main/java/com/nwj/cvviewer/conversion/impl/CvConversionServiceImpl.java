package com.nwj.cvviewer.conversion.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nwj.cvviewer.conversion.CvConversionService;
import com.nwj.cvviewer.data.entity.*;
import com.nwj.cvviewer.model.Cv;
import com.nwj.cvviewer.model.CvSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CvConversionServiceImpl implements CvConversionService {

    @Autowired
    ObjectMapper objectMapper;

    @Override
    public Cv convert(CvData cvData) {
        try {
            String cvJson = objectMapper.writeValueAsString(cvData);
            return objectMapper.readValue(cvJson, Cv.class);
        } catch (JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public CvSummary convertSummary(CvData cvData) {
        try {
            String cvJson = objectMapper.writeValueAsString(cvData);
            return objectMapper.readValue(cvJson, CvSummary.class);
        } catch (JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public List<CvSummary> convert(List<CvData> cvDataList) {
        return Optional.ofNullable(cvDataList)
                .stream()
                .flatMap(Collection::stream)
                .map(this::convertSummary)
                .collect(Collectors.toList());
    }

    @Override
    public void updateReferences(List<CvData> cvDataList) {
        Optional.ofNullable(cvDataList)
                .stream()
                .flatMap(Collection::stream)
                .forEach(this::updateReferences);
    }

    @Override
    public CvData convert(Cv cv) {
        try {
            String cvJson = objectMapper.writeValueAsString(cv);
            CvData cvData =  objectMapper.readValue(cvJson, CvData.class);
            updateReferences(cvData);
            return cvData;
        } catch (JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public void updateReferences(CvData cvData) {
        Optional.ofNullable(cvData.getHeader()).ifPresent(h -> updateReferences(cvData, h));
        Optional.ofNullable(cvData.getEducation()).ifPresent(e -> updateReferences(cvData, e));
        Optional.ofNullable(cvData.getEmployment()).ifPresent(e -> updateReferences(cvData, e));
        Optional.ofNullable(cvData.getSkills()).ifPresent(s -> updateReferences(cvData, s));
    }

    private void updateReferences(CvData cvData, CvHeader cvHeader) {
        cvHeader.setCvData(cvData);
        Optional.ofNullable(cvHeader.getRecentWorkExperience())
                .stream()
                .flatMap(Collection::stream)
                .forEach(r -> updateReferences(cvHeader, r));
        Optional.ofNullable(cvHeader.getKeySkills())
                .stream()
                .flatMap(Collection::stream)
                .forEach(k -> updateReferences(cvHeader, k));
    }

    private void updateReferences(CvHeader cvHeader, CvRecentWorkExperienceItem cvRecentWorkExperienceItem) {
        cvRecentWorkExperienceItem.setHeader(cvHeader);
    }


    private void updateReferences(CvHeader cvHeader, CvKeySkill cvKeySkill) {
        cvKeySkill.setHeader(cvHeader);
    }

    private void updateReferences(CvData cvData, CvEducation cvEducation) {
        cvEducation.setCvData(cvData);
        Optional.ofNullable(cvEducation.getInstitutions())
                .stream()
                .flatMap(Collection::stream)
                .forEach(i -> updateReferences(cvEducation, i));
    }

    private void updateReferences(CvEducation cvEducation, CvEducationInstitution cvEducationInstitution) {
        cvEducationInstitution.setEducation(cvEducation);
        Optional.ofNullable(cvEducationInstitution.getQualifications())
                .stream()
                .flatMap(Collection::stream)
                .forEach(q -> updateReferences(cvEducationInstitution, q));
    }

    private void updateReferences(CvEducationInstitution cvEducationInstitution, CvEducationQualification cvEducationQualification) {
        cvEducationQualification.setEducationInstitution(cvEducationInstitution);
    }

    private void updateReferences(CvData cvData, CvEmployment cvEmployment) {
        cvEmployment.setCvData(cvData);
        Optional.ofNullable(cvEmployment.getInstitutions())
                .stream()
                .flatMap(Collection::stream)
                .forEach(i -> updateReferences(cvEmployment, i));
    }

    private void updateReferences(CvEmployment cvEmployment, CvEmploymentInstitution cvEmploymentInstitution) {
        cvEmploymentInstitution.setEmployment(cvEmployment);
        Optional.ofNullable(cvEmploymentInstitution.getRoles())
                .stream()
                .flatMap(Collection::stream)
                .forEach(r -> updateReferences(cvEmploymentInstitution, r));
    }

    private void updateReferences(CvEmploymentInstitution cvEmploymentInstitution, CvEmploymentRole cvEmploymentRole) {
        cvEmploymentRole.setEmploymentInstitution(cvEmploymentInstitution);
    }

    private void updateReferences(CvData cvData, CvSkills cvSkills) {
        cvSkills.setCvData(cvData);
        Optional.ofNullable(cvSkills.getSkillGroups())
                .stream()
                .flatMap(Collection::stream)
                .forEach(s -> updateReferences(cvSkills, s));
    }

    private void updateReferences(CvSkills cvSkills, CvSkillGroup cvSkillGroup) {
        cvSkillGroup.setSkills(cvSkills);
        Optional.ofNullable(cvSkillGroup.getSkillSet())
                .stream()
                .flatMap(Collection::stream)
                .forEach(s -> updateReferences(cvSkillGroup, s));
    }

    private void updateReferences(CvSkillGroup cvSkillGroup, CvSkillGroupItem cvSkillGroupItem) {
        cvSkillGroupItem.setSkillGroup(cvSkillGroup);
    }

}