package com.nwj.cvviewer.data.repository;

import com.nwj.cvviewer.data.entity.CvPermissions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CvPermissionsRepository extends JpaRepository<CvPermissions, String> {

    @Query("SELECT p FROM CvPermissions p LEFT JOIN FETCH p.users WHERE p.cvData.name = :cvName")
    CvPermissions findByCvName(@Param("cvName") String cvName);

    @Query("SELECT p FROM CvPermissions p LEFT JOIN FETCH p.users WHERE p.owner.userName = :userName")
    List<CvPermissions> findByOwnerUserName(@Param("userName") String userName);

}