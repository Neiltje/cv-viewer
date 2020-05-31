package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CvSkills extends CvBaseItem {

	private static final long serialVersionUID = -9152601810989683539L;

    private CvData cvData;
	private String notes;
	private Set<CvSkillGroup> skillGroups;

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
	 * @return the skillGroups
	 */
    @Column
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "skills", cascade = CascadeType.ALL)
	@OrderBy("seq")
	public Set<CvSkillGroup> getSkillGroups() {
		return skillGroups;
	}

	/**
	 * @param aSkillGroups the skillGroups to Set
	 */
	public void setSkillGroups(Set<CvSkillGroup> aSkillGroups) {
		skillGroups = aSkillGroups;
	}

}