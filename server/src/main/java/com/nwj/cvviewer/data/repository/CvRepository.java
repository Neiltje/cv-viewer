package com.nwj.cvviewer.data.repository;

import com.nwj.cvviewer.data.entity.CvData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CvRepository extends JpaRepository<CvData, String> {

    @Query("SELECT c FROM CvData c LEFT JOIN FETCH c.permissions WHERE c.name = :name")
    CvData findByName(String name);

}