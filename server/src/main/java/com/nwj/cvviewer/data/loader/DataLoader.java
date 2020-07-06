package com.nwj.cvviewer.data.loader;

import java.util.List;

public interface DataLoader {

    <T> T loadDataItem(String path, Class<T> itemCLass);

    <T> List<T> loadData(String path, Class<T> itemCLass);

}