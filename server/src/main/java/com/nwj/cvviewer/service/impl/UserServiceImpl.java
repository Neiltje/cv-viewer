package com.nwj.cvviewer.service.impl;

import com.nwj.cvviewer.data.entity.UserDetails;
import com.nwj.cvviewer.data.loader.DataLoader;
import com.nwj.cvviewer.data.repository.UserDetailsRepository;
import com.nwj.cvviewer.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    private static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private DataLoader dataLoader;

    @Value("${load.default.data}")
    private boolean loadDefaultData;

    @PostConstruct
    public void initialise() {
        if (userDetailsRepository.count() == 0
                && loadDefaultData) {
            try {
                List<UserDetails> userDetailsList =
                        dataLoader.loadData("data/defaultUsers.json",
                                com.nwj.cvviewer.data.entity.UserDetails.class);
                userDetailsRepository.saveAll(userDetailsList);
                LOGGER.info("{} Users loaded from the default file.", userDetailsList.size());
            } catch (Exception ex) {
                LOGGER.error("Unable to load Users from default file.", ex);
                throw new RuntimeException("Unable to load Users from default file.", ex);
            }
        }
    }

    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        com.nwj.cvviewer.data.entity.UserDetails userDetails = userDetailsRepository.findByUserName(userName);
        if (userDetails == null) {
            throw new UsernameNotFoundException("User \"" + userName + "\" not found in repository.");
        }
        String[] userRoles;
        if (userDetails.getUserRoles() != null) {
            userRoles = userDetails.getUserRoles().split(",");
        } else{
            userRoles = new String[]{};
        }
        return new org.springframework.security.core.userdetails.User(
                userDetails.getUserName(),
                userDetails.getUserPassword(),
                AuthorityUtils.createAuthorityList(userRoles)
        );
    }

    @Override
    public void createUser(UserDetails userDetails) {
        LOGGER.info("Saving user with name = \"{}\".", userDetails.getUserName());
        UserDetails existingUserDetails = userDetailsRepository.findByUserName(userDetails.getUserName());
        if (existingUserDetails != null) {
            throw new RuntimeException("User \"" + userDetails.getUserName() + "\" already exists.");
        } else {
            userDetails.setUserPassword(PASSWORD_ENCODER.encode(userDetails.getUserPassword()));
            userDetailsRepository.save(userDetails);
            LOGGER.info("User with name = \"{}\" inserted.", userDetails.getUserName());
        }
    }

    @Override
    public void updateUserRoles(String userName, String userRoles) {
        LOGGER.info("Updating roles for user with name = \"{}\".", userName);
        UserDetails existingUserDetails = userDetailsRepository.findByUserName(userName);
        if (existingUserDetails == null) {
            throw new RuntimeException("User \"" + userName + "\" does not exist.");
        } else {
            existingUserDetails.setUserRoles(userRoles);
            userDetailsRepository.save(existingUserDetails);
            LOGGER.info("Roles for user with name = \"{}\" updated to {}.", userName, userRoles);
        }
    }

    @Override
    public void updateUserPassword(String userName, String userPassword) {
        LOGGER.info("Updating password for user with name = \"{}\".", userName);
        UserDetails existingUserDetails = userDetailsRepository.findByUserName(userName);
        if (existingUserDetails == null) {
            throw new RuntimeException("User \"" + userName + "\" does not exist.");
        } else {
            existingUserDetails.setUserPassword(PASSWORD_ENCODER.encode(userPassword));
            userDetailsRepository.save(existingUserDetails);
            LOGGER.info("Password for user with name = \"{}\" updated.", userName);
        }
    }

    @Override
    public void deleteUser(String userName) {
        LOGGER.info("Deleting user with name = \"{}\".", userName);
        UserDetails existingUserDetails = userDetailsRepository.findByUserName(userName);
        if (existingUserDetails == null) {
            throw new RuntimeException("User \"" + userName + "\" does not exist.");
        } else {
            userDetailsRepository.delete(existingUserDetails);
            LOGGER.info("User with name = \"{}\" deleted.", userName);
        }
    }

}