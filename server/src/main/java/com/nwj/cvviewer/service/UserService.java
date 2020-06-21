package com.nwj.cvviewer.service;

import com.nwj.cvviewer.data.entity.UserDetails;

public interface UserService {

    void createUser(UserDetails userDetails);

    void updateUserRoles(String userName, String userRoles);

    void updateUserPassword(String userName, String userPassword);

    void deleteUser(String userName);
}