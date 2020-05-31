package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class CvEmploymentRole extends CvBaseItem {

	private static final long serialVersionUID = -1876050027007433784L;

    private CvEmploymentInstitution employmentInstitution;
	private LocalDate startDate;
	private LocalDate endDate;
	private String title;
	private List<String> notes;

	/**
	 * @return the employmentInstitution
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "employment_institution_id", nullable = false)
	@JsonIgnore
	public CvEmploymentInstitution getEmploymentInstitution() {
		return employmentInstitution;
	}

	/**
	 * @param anEmploymentInstitution the employmentInstitution to Set
	 */
	public void setEmploymentInstitution(CvEmploymentInstitution anEmploymentInstitution) {
		employmentInstitution = anEmploymentInstitution;
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
	 * @return the title
	 */
    @Column
	public String getTitle() {
		return title;
	}

	/**
	 * @param aTitle the title to Set
	 */
	public void setTitle(String aTitle) {
		title = aTitle;
	}

	/**
	 * @return the notes
	 */
	@Column(columnDefinition = "TEXT")
	@Fetch(value = FetchMode.SUBSELECT)
    @ElementCollection(targetClass=String.class, fetch= FetchType.EAGER)
	public List<String> getNotes() {
		return notes;
	}

	/**
	 * @param aNotes the notes to Set
	 */
	public void setNotes(List<String> aNotes) {
		notes = aNotes;
	}

}