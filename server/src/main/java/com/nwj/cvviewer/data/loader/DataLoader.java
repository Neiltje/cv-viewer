package com.nwj.cvviewer.data.loader;

import java.util.List;

public interface DataLoader {

    <T> List<T> loadData(String path, Class<T> itemCLass);

}