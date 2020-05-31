package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class CvEducationQualification extends CvBaseItem {

	private static final long serialVersionUID = -8915600339771812991L;

    private CvEducationInstitution educationInstitution;
	private String type;
	private String subject;
	private String grade;
	private String notes;

	/**
	 * @return the educationInstitution
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "education_institution_id", nullable = false)
	@JsonIgnore
	public CvEducationInstitution getEducationInstitution() {
		return educationInstitution;
	}

	/**
	 * @param anEducationInstitution the educationInstitution to Set
	 */
	public void setEducationInstitution(CvEducationInstitution anEducationInstitution) {
		educationInstitution = anEducationInstitution;
	}

	/**
	 * @return the type
	 */
    @Column
	public String getType() {
		return type;
	}

	/**
	 * @param aType the type to Set
	 */
	public void setType(String aType) {
		type = aType;
	}

	/**
	 * @return the subject
	 */
    @Column
	public String getSubject() {
		return subject;
	}

	/**
	 * @param aSubject the subject to Set
	 */
	public void setSubject(String aSubject) {
		subject = aSubject;
	}

	/**
	 * @return the grade
	 */
    @Column
	public String getGrade() {
		return grade;
	}

	/**
	 * @param aGrade the grade to Set
	 */
	public void setGrade(String aGrade) {
		grade = aGrade;
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

}