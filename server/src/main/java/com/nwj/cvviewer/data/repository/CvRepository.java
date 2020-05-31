package com.nwj.cvviewer.data.repository;

import com.nwj.cvviewer.data.entity.CvData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CvRepository extends JpaRepository<CvData, String> {

    CvData findByName(String name);

}