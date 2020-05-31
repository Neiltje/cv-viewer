package com.nwj.cvviewer.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * TODO: Load user details from a DB repository.
 */
@Component
public class UserService implements UserDetailsService {

    @Value("${user.name}")
    private String userName;

    @Value("${user.password}")
    private String userPassword;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new User(
                userName,
                userPassword,
                AuthorityUtils.createAuthorityList()
        );
    }

}