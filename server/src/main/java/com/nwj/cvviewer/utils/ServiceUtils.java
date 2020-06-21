package com.nwj.cvviewer.utils;

public final class ServiceUtils {

    private ServiceUtils() {}

    public static Throwable getUnderlyingCause(Throwable ex) {
        if (ex.getCause() != null
                && ex.getCause() != ex) {
            ex = getUnderlyingCause(ex.getCause());
        }
        return ex;
    }

}
