package com.nwj.cvviewer.service;

import com.nwj.cvviewer.data.entity.UserDetails;

import java.util.List;

public interface UserService {

    List<String> login(String userName);

    List<String> getUserRoles(String userName);

    List<String> getAllUserNames();

    UserDetails getUserDetails(String userName);

    void createUser(UserDetails userDetails);

    void updateUserRoles(String userName, String userRoles);

    void updateUserPassword(String userName, String userPassword);

    void deleteUser(String userName);
}