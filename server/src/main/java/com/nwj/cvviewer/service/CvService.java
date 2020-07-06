package com.nwj.cvviewer.service;

import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.data.entity.CvPermissions;

import java.util.List;

public interface CvService {

    List<CvData> getAllCvs();

    CvData getCvByName(String cvName);

    CvData getNewCvTemplate();

    void deleteCvByName(String cvName);

    void postCv(CvData cvData);

    CvPermissions getCvPermissions(String cvName);

    void postCvPermissions(CvPermissions cvPermissions);

    void deleteCvPermissionsForUser(String userName);

}