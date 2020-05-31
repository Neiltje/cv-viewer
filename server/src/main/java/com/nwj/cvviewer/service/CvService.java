package com.nwj.cvviewer.service;

import com.nwj.cvviewer.data.entity.CvData;

import java.util.List;

public interface CvService {

    List<CvData> getAllCvs();

    CvData getCvByName(String cvName);

    void putCv(CvData cvData);

}