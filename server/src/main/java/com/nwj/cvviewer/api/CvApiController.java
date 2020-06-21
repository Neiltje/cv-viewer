package com.nwj.cvviewer.api;

import com.nwj.cvviewer.conversion.CvConversionService;
import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.model.Cv;
import com.nwj.cvviewer.model.CvSummary;
import com.nwj.cvviewer.service.CvService;
import com.nwj.cvviewer.utils.ServiceUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CvApiController implements CvApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(CvApiController.class);

    @Autowired
    private CvService cvService;

    @Autowired
    private CvConversionService cvConversionService;

    @Override
    public ResponseEntity<List<CvSummary>> getAllCVSummaries() {
        List<CvData> cvList = cvService.getAllCvs();
        return ResponseEntity.ok(cvConversionService.convert(cvList));
    }

    @Override
    public ResponseEntity<Cv> getCvByName(String name) {
        CvData cvData = cvService.getCvByName(name);
        return ResponseEntity.ok(cvConversionService.convert(cvData));
    }

    @Override
    public ResponseEntity<String> postCv(Cv cv) {
        try {
            cvService.postCv(cvConversionService.convert(cv));
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            LOGGER.error("Error encountered while saving CV name = \"{}\"", cv.getName(), ex);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ServiceUtils.getUnderlyingCause(ex).getMessage());
        }
    }


}