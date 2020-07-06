package com.nwj.cvviewer.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class CustomWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

    @Autowired
    private CvBasicAuthenticationEntryPoint authenticationEntryPoint;

    @Autowired
    private UserDetailsService userService;

    private static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.GET, "/cv/getAllCVSummaries", "/cv/*", "/cv/getNewCvTemplate").permitAll()
            .antMatchers(HttpMethod.POST, "/cv").authenticated()
            .antMatchers(HttpMethod.DELETE, "/cv/*").authenticated()
            .antMatchers(HttpMethod.GET, "/cv/permissions/*").authenticated()
            .antMatchers(HttpMethod.POST, "/cv/permissions").authenticated()
            .antMatchers(HttpMethod.POST, "/user/login/*").authenticated()
            .antMatchers(HttpMethod.POST, "/user").authenticated()
            .antMatchers(HttpMethod.POST, "/user/roles").authenticated()
            .antMatchers(HttpMethod.POST, "/user/password").authenticated()
            .antMatchers(HttpMethod.GET, "/user/getAllUserNames").authenticated()
            .antMatchers(HttpMethod.GET, "/user/getUserRoles").authenticated()
            .antMatchers(HttpMethod.OPTIONS, "/user/*").permitAll()
            .antMatchers(HttpMethod.DELETE, "/user/*").authenticated()
            .antMatchers( "/cvs/*").permitAll()
            .antMatchers("/**").anonymous()
            .anyRequest().authenticated()
        .and()
            .httpBasic()
            .authenticationEntryPoint(authenticationEntryPoint)
        .and()
            .logout()
        .and()
            .cors();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        final DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userService);
        authProvider.setPasswordEncoder(PASSWORD_ENCODER);
        return authProvider;
    }

}