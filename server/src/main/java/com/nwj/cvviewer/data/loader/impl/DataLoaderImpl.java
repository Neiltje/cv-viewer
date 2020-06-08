package com.nwj.cvviewer.data.loader.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nwj.cvviewer.data.entity.CvData;
import com.nwj.cvviewer.data.loader.DataLoader;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.lang.reflect.Array;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;

@Service
public class DataLoaderImpl implements DataLoader {

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public <T> List<T> loadData(String path, Class<T> itemClass) {
        try {
            ClassPathResource classPathResource = new ClassPathResource(path);
            InputStream inputStream = classPathResource.getInputStream();
            String jsonString = IOUtils.toString(inputStream, StandardCharsets.UTF_8);
            Class arrayClass = Array.newInstance(itemClass, 0).getClass();
            T[] cvDataArray = (T[]) objectMapper.readValue(jsonString, arrayClass);
            return Arrays.asList(cvDataArray);
        } catch (Exception ex) {
            throw new RuntimeException("Unable to load data from file.", ex);
        }
    }

}