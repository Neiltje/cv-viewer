package com.nwj.cvviewer.conversion;

import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.model.Cv;
import com.nwj.cvviewer.model.CvSummary;

import java.util.List;

public interface CvConversionService {

    Cv convert(CvData cvData);

    CvSummary convertSummary(CvData cvData);

    List<CvSummary> convert(List<CvData> cvDataList);

    void updateReferences(CvData cvData);

    void updateReferences(List<CvData> cvDataList);

    CvData convert(Cv cv);

}