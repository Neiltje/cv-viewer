package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class CvRecentWorkExperienceItem extends CvBaseItem {

	private static final long serialVersionUID = -1876050027007433788L;

    private CvHeader header;
	private String employer;
	private LocalDate startDate;
	private LocalDate endDate;
	private String notes;
	private List<String> roles;

	/**
	 * @return the header
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "header_id", nullable = false)
	@JsonIgnore
	public CvHeader getHeader() {
		return header;
	}

	/**
	 * @param aHeader the header to Set
	 */
	public void setHeader(CvHeader aHeader) {
		header = aHeader;
	}

	/**
	 * @return the employer
	 */
	@Column
	public String getEmployer() {
		return employer;
	}

	/**
	 * @param anEmployer the employer to Set
	 */
	public void setEmployer(String anEmployer) {
		employer = anEmployer;
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
	 * @return the roles
	 */
	@Column(columnDefinition = "TEXT")
	@Fetch(value = FetchMode.SUBSELECT)
    @ElementCollection(targetClass=String.class, fetch= FetchType.EAGER)
	public List<String> getRoles() {
		return roles;
	}

	/**
	 * @param aRoles the roles to Set
	 */
	public void setRoles(List<String> aRoles) {
		roles = aRoles;
	}

}