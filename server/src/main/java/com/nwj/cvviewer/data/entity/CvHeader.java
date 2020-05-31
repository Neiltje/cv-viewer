package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
public class CvHeader extends CvBaseItem {

	private static final long serialVersionUID = 4150357176753278283L;

	private CvData cvData;
	private LocalDate dateOfBirth;
	private String currentPosition;
	private List<String> addressLines;
	private String phoneHome;
	private String phoneMobile;
	private String emailAddress;
	private String maritalStatus;
	private String nationality;
	private Set<CvRecentWorkExperienceItem> recentWorkExperience;
	private Set<CvKeySkill> keySkills;

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
	 * @return the dateOfBirth
	 */
	@Column
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	/**
	 * @param aDateOfBirth the dateOfBirth to Set
	 */
	public void setDateOfBirth(LocalDate aDateOfBirth) {
		dateOfBirth = aDateOfBirth;
	}

	/**
	 * @return the currentPosition
	 */
	@Column
	public String getCurrentPosition() {
		return currentPosition;
	}

	/**
	 * @param aCurrentPosition the currentPosition to Set
	 */
	public void setCurrentPosition(String aCurrentPosition) {
		currentPosition = aCurrentPosition;
	}

	/**
	 * @return the addressLines
	 */
	@Column(columnDefinition = "TEXT")
	@Fetch(value = FetchMode.SUBSELECT)
	@ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
	public List<String> getAddressLines() {
		return addressLines;
	}

	/**
	 * @param anAddressLines the addressLines to Set
	 */
	public void setAddressLines(List<String> anAddressLines) {
		addressLines = anAddressLines;
	}

	/**
	 * @return the phoneHome
	 */
	@Column
	public String getPhoneHome() {
		return phoneHome;
	}

	/**
	 * @param aPhoneHome the phoneHome to Set
	 */
	public void setPhoneHome(String aPhoneHome) {
		phoneHome = aPhoneHome;
	}

	/**
	 * @return the phoneMobile
	 */
	@Column
	public String getPhoneMobile() {
		return phoneMobile;
	}

	/**
	 * @param aPhoneMobile the phoneMobile to Set
	 */
	public void setPhoneMobile(String aPhoneMobile) {
		phoneMobile = aPhoneMobile;
	}

	/**
	 * @return the emailAddress
	 */
	@Column
	public String getEmailAddress() {
		return emailAddress;
	}

	/**
	 * @param anEmailAddress the emailAddress to Set
	 */
	public void setEmailAddress(String anEmailAddress) {
		emailAddress = anEmailAddress;
	}

	/**
	 * @return the maritalStatus
	 */
	@Column
	public String getMaritalStatus() {
		return maritalStatus;
	}

	/**
	 * @param aMaritalStatus the maritalStatus to Set
	 */
	public void setMaritalStatus(String aMaritalStatus) {
		maritalStatus = aMaritalStatus;
	}

	/**
	 * @return the nationality
	 */
	@Column
	public String getNationality() {
		return nationality;
	}

	/**
	 * @param aNationality the nationality to Set
	 */
	public void setNationality(String aNationality) {
		nationality = aNationality;
	}

	/**
	 * @return the recentWorkExperience
	 */
	@Column
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "header", cascade = CascadeType.ALL)
	public Set<CvRecentWorkExperienceItem> getRecentWorkExperience() {
		return recentWorkExperience;
	}

	/**
	 * @param aRecentWorkExperienceItem the recentWorkExperience to Set
	 */
	public void setRecentWorkExperience(Set<CvRecentWorkExperienceItem> aRecentWorkExperienceItem) {
		recentWorkExperience = aRecentWorkExperienceItem;
	}

	/**
	 * @return the keySkills
	 */
	@Column
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "header", cascade = CascadeType.ALL)
	public Set<CvKeySkill> getKeySkills() {
		return keySkills;
	}

	/**
	 * @param aKeySkills the recentWorkExperience to Set
	 */
	public void setKeySkills(Set<CvKeySkill> aKeySkills) {
		this.keySkills = aKeySkills;
	}

}