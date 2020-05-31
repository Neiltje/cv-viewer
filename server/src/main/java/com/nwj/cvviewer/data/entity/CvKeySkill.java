package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class CvKeySkill extends CvBaseItem {

	private static final long serialVersionUID = -469930766273758809L;

	private CvHeader header;
	private String skill;
	private Integer ability;

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
	 * @return the skill
	 */
    @Column
	public String getSkill() {
		return skill;
	}

	/**
	 * @param aSkill the skill to Set
	 */
	public void setSkill(String aSkill) {
		skill = aSkill;
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

}