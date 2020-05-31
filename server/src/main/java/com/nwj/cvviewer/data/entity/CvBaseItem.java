package com.nwj.cvviewer.data.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public abstract class CvBaseItem implements Serializable {

    private Long id;

    /**
     * Retrieves the value of id.
     *
     * @return the id
     */
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name = "id", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    /**
     * Modifies the value of id.
     *
     * @param anId the id to Set
     */
    public void setId(Long anId) {
        id = anId;
    }

}