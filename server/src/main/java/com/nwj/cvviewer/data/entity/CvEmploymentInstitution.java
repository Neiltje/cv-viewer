package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
public class CvEmploymentInstitution extends CvBaseItem {

	private static final long serialVersionUID = -1604703576887449042L;

    private CvEmployment employment;
	private String employer;
	private LocalDate startDate;
	private LocalDate endDate;
	private List<String> notes;
	private Set<CvEmploymentRole> roles;

	/**
	 * @return the employment
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "employment_id", nullable = false)
	@JsonIgnore
	public CvEmployment getEmployment() {
		return employment;
	}

	/**
	 * @param anEmployment the employment to Set
	 */
	public void setEmployment(CvEmployment anEmployment) {
		employment = anEmployment;
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

	/**
	 * @return the roles
	 */
    @Column
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "employmentInstitution", cascade = CascadeType.ALL)
	public Set<CvEmploymentRole> getRoles() {
		return roles;
	}

	/**
	 * @param aRoles the roles to Set
	 */
	public void setRoles(Set<CvEmploymentRole> aRoles) {
		roles = aRoles;
	}

}