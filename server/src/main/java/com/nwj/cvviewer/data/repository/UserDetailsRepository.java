package com.nwj.cvviewer.data.repository;

import com.nwj.cvviewer.data.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetails, String> {

    UserDetails findByUserName(String name);

}