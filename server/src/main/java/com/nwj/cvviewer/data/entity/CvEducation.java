package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CvEducation  extends CvBaseItem {

	private static final long serialVersionUID = -475903260897835967L;

    private CvData cvData;
	private String notes;
	private Set<CvEducationInstitution> institutions;

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
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "education", cascade = CascadeType.ALL)
    public Set<CvEducationInstitution> getInstitutions() {
		return institutions;
	}

	/**
	 * @param anInstitutions the institutions to Set
	 */
	public void setInstitutions(Set<CvEducationInstitution> anInstitutions) {
		institutions = anInstitutions;
	}

}