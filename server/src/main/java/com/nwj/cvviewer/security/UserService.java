package com.nwj.cvviewer.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.data.repository.UserDetailsRepository;
import com.nwj.cvviewer.service.impl.CvServiceImpl;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.util.Arrays;

@Component
public class UserService implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Value("${load.default.data}")
    private boolean loadDefaultData;

    @PostConstruct
    public void initialise() {
        if (userDetailsRepository.count() == 0
            && loadDefaultData) {
            try {
                FileInputStream fis = new FileInputStream("src/main/resources/data/defaultUsers.json");
                String userDetailsString = IOUtils.toString(fis, "UTF-8");
                com.nwj.cvviewer.data.entity.UserDetails[] cvDataArray = objectMapper.readValue(userDetailsString, com.nwj.cvviewer.data.entity.UserDetails[].class);
                userDetailsRepository.saveAll(Arrays.asList(cvDataArray));
                LOGGER.info("{} Users loaded from the default file.", cvDataArray.length);
            } catch (Exception ex) {
                LOGGER.error("Unable to load Users from default file.", ex);
                throw new RuntimeException("Unable to load Users from default file.", ex);
            }
        }
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
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
        return new User(
                userDetails.getUserName(),
                userDetails.getUserPassword(),
                AuthorityUtils.createAuthorityList(userRoles)
        );
    }

}