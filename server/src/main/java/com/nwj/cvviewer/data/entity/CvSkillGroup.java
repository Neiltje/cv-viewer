package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CvSkillGroup extends CvBaseItem {

	private static final long serialVersionUID = 5739124655740656457L;

    private CvSkills skills;
	private Long seq;
	private String heading;
	private Set<CvSkillGroupItem> skillSet;

	/**
	 * @return the skills
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "skills_id", nullable = false)
	@JsonIgnore
	public CvSkills getSkills() {
		return skills;
	}

	/**
	 * @return the seq
	 */
	@Column
	public Long getSeq() {
		return seq;
	}

	/**
	 * @param aSeq the seq to set
	 */
	public void setSeq(Long aSeq) {
		seq = aSeq;
	}

	/**
	 * @param aSkills the skills to Set
	 */
	public void setSkills(CvSkills aSkills) {
		skills = aSkills;
	}

	/**
	 * @return the notes
	 */
	@Column(columnDefinition = "TEXT")
	public String getHeading() {
		return heading;
	}

	/**
	 * @param aHeading the heading to Set
	 */
	public void setHeading(String aHeading) {
		heading = aHeading;
	}

	/**
	 * @return the skillSet
	 */
    @Column
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "skillGroup", cascade = CascadeType.ALL)
	@OrderBy("seq")
	public Set<CvSkillGroupItem> getSkillSet() {
		return skillSet;
	}

	/**
	 * @param aSkillSet the skillSet to Set
	 */
	public void setSkillSet(Set<CvSkillGroupItem> aSkillSet) {
		skillSet = aSkillSet;
	}

}