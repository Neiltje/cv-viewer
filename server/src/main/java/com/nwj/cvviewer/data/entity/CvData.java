package com.nwj.cvviewer.data.entity;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Entity
public class CvData extends CvBaseItem {

	private static final long serialVersionUID = 5929027118260036155L;

	private String name;
	private String firstName;
	private String footnote;
	private String oneLineSummary;
	private String summary;
	private String sourceURL;
	private byte[] image;
	private CvHeader header;
	private CvEducation education;
	private CvSkills skills;
	private CvEmployment employment;
	private List<String> interests;

	/**
	 * @return the name
	 */
    @Column
	public String getName() {
		return name;
	}

	/**
	 * @param aName the name to Set
	 */
	public void setName(String aName) {
		name = aName;
	}

	/**
	 * @return the firstName
	 */
	@Column
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param aFirstName the firstName to Set
	 */
	public void setFirstName(String aFirstName) {
		firstName = aFirstName;
	}

	/**
	 * @return the footnote
	 */
    @Column
	public String getFootnote() {
		return footnote;
	}

	/**
	 * @param aFootnote the footnote to Set
	 */
	public void setFootnote(String aFootnote) {
		footnote = aFootnote;
	}

	@Column(columnDefinition = "TEXT")
	public String getOneLineSummary() {
		return oneLineSummary;
	}

	public void setOneLineSummary(String oneLineSummary) {
		this.oneLineSummary = oneLineSummary;
	}

	@Column(columnDefinition = "TEXT")
	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	@Column
	public String getSourceURL() {
		return sourceURL;
	}

	public void setSourceURL(String sourceURL) {
		this.sourceURL = sourceURL;
	}

	/**
	 * @return the image
	 */
	@Column
	@Lob
	public String getImage() {
		return image == null ? null : new String(image, StandardCharsets.UTF_8);
	}

	/**
	 * @param anImage the image to Set
	 */
	public void setImage(String anImage) {
		image = anImage == null
			? null
			: anImage.getBytes(StandardCharsets.UTF_8);
	}

	/**
	 * @return the header
	 */
    @OneToOne(mappedBy="cvData", cascade= CascadeType.ALL)
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
	 * @return the education
	 */
    @OneToOne(mappedBy="cvData", cascade= CascadeType.ALL)
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
	 * @return the skills
	 */
    @OneToOne(mappedBy="cvData", cascade= CascadeType.ALL)
	public CvSkills getSkills() {
		return skills;
	}

	/**
	 * @param aSkills the skills to Set
	 */
	public void setSkills(CvSkills aSkills) {
		skills = aSkills;
	}

	/**
	 * @return the employment
	 */
    @OneToOne(mappedBy="cvData", cascade= CascadeType.ALL)
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
	 * @return the interests
	 */
	@Column(columnDefinition = "TEXT")
	@Fetch(value = FetchMode.SUBSELECT)
    @ElementCollection(targetClass=String.class, fetch= FetchType.EAGER)
	public List<String> getInterests() {
		return interests;
	}

	/**
	 * @param anInterests the interests to Set
	 */
	public void setInterests(List<String> anInterests) {
		interests = anInterests;
	}

}