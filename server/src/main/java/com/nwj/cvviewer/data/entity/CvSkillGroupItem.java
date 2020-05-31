package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class CvSkillGroupItem extends CvBaseItem {

	private static final long serialVersionUID = -469930766273758803L;

    private CvSkillGroup skillGroup;
	private Long seq;
	private String type;
	private Integer experience;
	private Integer ability;
	private String notes;

	/**
	 * @return the skillGroup
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "skill_group_id", nullable = false)
	@JsonIgnore
	public CvSkillGroup getSkillGroup() {
		return skillGroup;
	}

	/**
	 * @param aSkillGroup the skillGroup to Set
	 */
	public void setSkillGroup(CvSkillGroup aSkillGroup) {
		skillGroup = aSkillGroup;
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
	 * @return the experience
	 */
    @Column
	public Integer getExperience() {
		return experience;
	}

	/**
	 * @param anExperience the experience to Set
	 */
	public void setExperience(Integer anExperience) {
		experience = anExperience;
	}

	/**
	 * @return the ability
	 */
    @Column
	public Integer getAbility() {
		return ability;
	}

	/**
	 * @param anAbility the ability to Set
	 */
	public void setAbility(Integer anAbility) {
		ability = anAbility;
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