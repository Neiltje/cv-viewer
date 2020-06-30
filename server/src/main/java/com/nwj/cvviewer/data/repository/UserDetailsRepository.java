package com.nwj.cvviewer.data.repository;

import com.nwj.cvviewer.data.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserDetailsRepository extends JpaRepository<UserDetails, String> {

    @Query("SELECT u FROM UserDetails u LEFT JOIN FETCH u.permissions WHERE u.userName = :name")
    UserDetails findByUserName(String name);

}