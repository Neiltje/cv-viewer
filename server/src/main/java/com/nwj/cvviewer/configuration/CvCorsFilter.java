package com.nwj.cvviewer.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CvCorsFilter implements Filter {

    @Value("${app.http.filter.cors.origin:*}")
    private String originList;

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest)req;
        HttpServletResponse httpResponse = (HttpServletResponse) res;
        String origin = httpRequest.getHeader("Origin");
        if (origin == null) {
            httpResponse.setHeader("Access-Control-Allow-Origin", "*");
        } else if (originList.contains(origin)) {
            httpResponse.setHeader("Access-Control-Allow-Origin", origin);
        } else {
            httpResponse.setHeader("Access-Control-Allow-Origin", "https://cv-viewer.co.uk");
        }
        httpResponse.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
        httpResponse.setHeader("Access-Control-Max-Age", "3600");
        httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Origin, Referer");
        chain.doFilter(req, res);
    }

}