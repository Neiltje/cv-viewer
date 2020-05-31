package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CvEmployment extends CvBaseItem {

	private static final long serialVersionUID = -8949447968698126272L;

    private CvData cvData;
	private String notes;
	private Set<CvEmploymentInstitution> institutions;

	/**
	 * @return the cvData
	 */
    @OneToOne
	@JoinColumn(name = "cv_data_id")
	@JsonIgnore
    public CvData getCvData() {
		return cvData;
	}

	/**
	 * @param aCvData the cvData to Set
	 */
	public void setCvData(CvData aCvData) {
		cvData = aCvData;
	}

	/**
	 * @return the notes
	 */
	@Column(columnDefinition = "TEXT")
	public String getNotes() {
		return notes;
	}

	/**
	 * @param aNotes the notes to Set
	 */
	public void setNotes(String aNotes) {
		notes = aNotes;
	}

	/**
	 * @return the institutions
	 */
    @Column
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "employment", cascade = CascadeType.ALL)
	public Set<CvEmploymentInstitution> getInstitutions() {
		return institutions;
	}

	/**
	 * @param anInstitutions the institutions to Set
	 */
	public void setInstitutions(Set<CvEmploymentInstitution> anInstitutions) {
		institutions = anInstitutions;
	}

}