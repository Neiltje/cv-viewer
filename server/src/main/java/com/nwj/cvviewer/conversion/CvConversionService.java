package com.nwj.cvviewer.conversion;

import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.model.Cv;

import java.util.List;

public interface CvConversionService {

    Cv convert(CvData cvData);

    List<Cv> convert(List<CvData> cvDataList);

    void updateReferences(CvData cvData);

    void updateReferences(List<CvData> cvDataList);

    CvData convert(Cv cv);

}