package com.nwj.cvviewer.api;

import com.nwj.cvviewer.data.entity.UserDetails;
import com.nwj.cvviewer.model.User;
import com.nwj.cvviewer.model.UserPassword;
import com.nwj.cvviewer.model.UserRoles;
import com.nwj.cvviewer.service.UserService;
import com.nwj.cvviewer.utils.ServiceUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class UserApiController implements UserApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserApiController.class);

    @Autowired
    private UserService userService;

    @Override
    public ResponseEntity<Void> login(String name) {
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<String> createUser(User user) {
        try {
            UserDetails userDetails = new UserDetails();
            userDetails.setUserName(user.getUserName());
            userDetails.setUserPassword(user.getUserPassword());
            userDetails.setUserRoles(String.join(",", user.getUserRoles()));
            userService.createUser(userDetails);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            LOGGER.error("Error encountered while saving user name = \"{}\"", user.getUserName(), ex);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ServiceUtils.getUnderlyingCause(ex).getMessage());
        }
    }

    @Override
    public ResponseEntity<String> updateUserRoles(UserRoles userRoles) {
        try {
            userService.updateUserRoles(userRoles.getUserName(), String.join(",", userRoles.getUserRoles()));
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            LOGGER.error("Error encountered while updating roles for user name = \"{}\"", userRoles.getUserName(), ex);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ServiceUtils.getUnderlyingCause(ex).getMessage());
        }
    }

    @Override
    public ResponseEntity<String> updateUserPassword(UserPassword userPassword) {
        try {
            userService.updateUserPassword(userPassword.getUserName(), userPassword.getUserPassword());
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            LOGGER.error("Error encountered while updating password for user name = \"{}\"", userPassword.getUserName(), ex);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ServiceUtils.getUnderlyingCause(ex).getMessage());
        }
    }

    @Override
    public ResponseEntity<String> deleteUser(String userName) {
        try {
            userService.deleteUser(userName);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            LOGGER.error("Error encountered while deleting user withe name = \"{}\"", userName, ex);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ServiceUtils.getUnderlyingCause(ex).getMessage());
        }
    }

}