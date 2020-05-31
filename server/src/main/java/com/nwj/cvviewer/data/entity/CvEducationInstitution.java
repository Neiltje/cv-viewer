package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
public class CvEducationInstitution extends CvBaseItem {

	private static final long serialVersionUID = -4221547891658307346L;

    private CvEducation education;
	private String institution;
	private LocalDate startDate;
	private LocalDate endDate;
	private Set<CvEducationQualification> qualifications;

	/**
	 * @return the education
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "education_id", nullable = false)
	@JsonIgnore
	public CvEducation getEducation() {
		return education;
	}

	/**
	 * @param anEducation the education to Set
	 */
	public void setEducation(CvEducation anEducation) {
		education = anEducation;
	}

	/**
	 * @return the institution
	 */
    @Column
	public String getInstitution() {
		return institution;
	}

	/**
	 * @param anInstitution the institution to Set
	 */
	public void setInstitution(String anInstitution) {
		institution = anInstitution;
	}

	/**
	 * @return the startDate
	 */
    @Column
	public LocalDate getStartDate() {
		return startDate;
	}

	/**
	 * @param aStartDate the startDate to Set
	 */
	public void setStartDate(LocalDate aStartDate) {
		startDate = aStartDate;
	}

	/**
	 * @return the endDate
	 */
    @Column
	public LocalDate getEndDate() {
		return endDate;
	}

	/**
	 * @param anEndDate the endDate to Set
	 */
	public void setEndDate(LocalDate anEndDate) {
		endDate = anEndDate;
	}

	/**
	 * @return the qualifications
	 */
    @Column
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "educationInstitution", cascade = CascadeType.ALL)
	public Set<CvEducationQualification> getQualifications() {
		return qualifications;
	}

	/**
	 * @param aQualifications the qualifications to Set
	 */
	public void setQualifications(Set<CvEducationQualification> aQualifications) {
		qualifications = aQualifications;
	}

}