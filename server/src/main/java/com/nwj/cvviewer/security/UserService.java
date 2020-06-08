package com.nwj.cvviewer.security;

import com.nwj.cvviewer.data.loader.DataLoader;
import com.nwj.cvviewer.data.repository.UserDetailsRepository;
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
import java.util.List;

@Component
public class UserService implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

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
                List<com.nwj.cvviewer.data.entity.UserDetails> userDetailsList =
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