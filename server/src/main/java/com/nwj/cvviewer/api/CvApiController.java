package com.nwj.cvviewer.api;

import com.nwj.cvviewer.conversion.CvConversionService;
import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.model.Cv;
import com.nwj.cvviewer.service.CvService;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@Controller
public class CvApiController implements CvApi {

    @Autowired
    private CvService cvService;

    @Autowired
    private CvConversionService cvConversionService;

    @Override
    public ResponseEntity<List<Cv>> getAllCVs() {
        List<CvData> cvList = cvService.getAllCvs();
        return ResponseEntity.ok(cvConversionService.convert(cvList));
    }

    @Override
    public ResponseEntity<Cv> getCvByName(String name) {
        CvData cvData = cvService.getCvByName(name);
        return ResponseEntity.ok(cvConversionService.convert(cvData));
    }

    @Override
    public ResponseEntity<Void> putCv(Cv cv) {
        cvService.putCv(cvConversionService.convert(cv));
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> login(String name) {
        return ResponseEntity.ok().build();
    }

}