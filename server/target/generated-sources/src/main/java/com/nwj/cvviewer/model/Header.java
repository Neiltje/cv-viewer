package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.KeySkill;
import com.nwj.cvviewer.model.RecentWorkExperienceItem;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Header
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class Header   {
  @JsonProperty("dateOfBirth")
  private LocalDate dateOfBirth = null;

  @JsonProperty("currentPosition")
  private String currentPosition = null;

  @JsonProperty("addressLines")
  @Valid
  private List<String> addressLines = null;

  @JsonProperty("phoneMobile")
  private String phoneMobile = null;

  @JsonProperty("emailAddress")
  private String emailAddress = null;

  @JsonProperty("maritalStatus")
  private String maritalStatus = null;

  @JsonProperty("nationality")
  private String nationality = null;

  @JsonProperty("recentWorkExperience")
  @Valid
  private List<RecentWorkExperienceItem> recentWorkExperience = null;

  @JsonProperty("keySkills")
  @Valid
  private List<KeySkill> keySkills = null;

  public Header dateOfBirth(LocalDate dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }

  /**
   * Get dateOfBirth
   * @return dateOfBirth
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(LocalDate dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public Header currentPosition(String currentPosition) {
    this.currentPosition = currentPosition;
    return this;
  }

  /**
   * Get currentPosition
   * @return currentPosition
  **/
  @ApiModelProperty(value = "")


  public String getCurrentPosition() {
    return currentPosition;
  }

  public void setCurrentPosition(String currentPosition) {
    this.currentPosition = currentPosition;
  }

  public Header addressLines(List<String> addressLines) {
    this.addressLines = addressLines;
    return this;
  }

  public Header addAddressLinesItem(String addressLinesItem) {
    if (this.addressLines == null) {
      this.addressLines = new ArrayList<>();
    }
    this.addressLines.add(addressLinesItem);
    return this;
  }

  /**
   * Get addressLines
   * @return addressLines
  **/
  @ApiModelProperty(value = "")


  public List<String> getAddressLines() {
    return addressLines;
  }

  public void setAddressLines(List<String> addressLines) {
    this.addressLines = addressLines;
  }

  public Header phoneMobile(String phoneMobile) {
    this.phoneMobile = phoneMobile;
    return this;
  }

  /**
   * Get phoneMobile
   * @return phoneMobile
  **/
  @ApiModelProperty(value = "")


  public String getPhoneMobile() {
    return phoneMobile;
  }

  public void setPhoneMobile(String phoneMobile) {
    this.phoneMobile = phoneMobile;
  }

  public Header emailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
    return this;
  }

  /**
   * Get emailAddress
   * @return emailAddress
  **/
  @ApiModelProperty(value = "")


  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public Header maritalStatus(String maritalStatus) {
    this.maritalStatus = maritalStatus;
    return this;
  }

  /**
   * Get maritalStatus
   * @return maritalStatus
  **/
  @ApiModelProperty(value = "")


  public String getMaritalStatus() {
    return maritalStatus;
  }

  public void setMaritalStatus(String maritalStatus) {
    this.maritalStatus = maritalStatus;
  }

  public Header nationality(String nationality) {
    this.nationality = nationality;
    return this;
  }

  /**
   * Get nationality
   * @return nationality
  **/
  @ApiModelProperty(value = "")


  public String getNationality() {
    return nationality;
  }

  public void setNationality(String nationality) {
    this.nationality = nationality;
  }

  public Header recentWorkExperience(List<RecentWorkExperienceItem> recentWorkExperience) {
    this.recentWorkExperience = recentWorkExperience;
    return this;
  }

  public Header addRecentWorkExperienceItem(RecentWorkExperienceItem recentWorkExperienceItem) {
    if (this.recentWorkExperience == null) {
      this.recentWorkExperience = new ArrayList<>();
    }
    this.recentWorkExperience.add(recentWorkExperienceItem);
    return this;
  }

  /**
   * Get recentWorkExperience
   * @return recentWorkExperience
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<RecentWorkExperienceItem> getRecentWorkExperience() {
    return recentWorkExperience;
  }

  public void setRecentWorkExperience(List<RecentWorkExperienceItem> recentWorkExperience) {
    this.recentWorkExperience = recentWorkExperience;
  }

  public Header keySkills(List<KeySkill> keySkills) {
    this.keySkills = keySkills;
    return this;
  }

  public Header addKeySkillsItem(KeySkill keySkillsItem) {
    if (this.keySkills == null) {
      this.keySkills = new ArrayList<>();
    }
    this.keySkills.add(keySkillsItem);
    return this;
  }

  /**
   * Get keySkills
   * @return keySkills
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<KeySkill> getKeySkills() {
    return keySkills;
  }

  public void setKeySkills(List<KeySkill> keySkills) {
    this.keySkills = keySkills;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Header header = (Header) o;
    return Objects.equals(this.dateOfBirth, header.dateOfBirth) &&
        Objects.equals(this.currentPosition, header.currentPosition) &&
        Objects.equals(this.addressLines, header.addressLines) &&
        Objects.equals(this.phoneMobile, header.phoneMobile) &&
        Objects.equals(this.emailAddress, header.emailAddress) &&
        Objects.equals(this.maritalStatus, header.maritalStatus) &&
        Objects.equals(this.nationality, header.nationality) &&
        Objects.equals(this.recentWorkExperience, header.recentWorkExperience) &&
        Objects.equals(this.keySkills, header.keySkills);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dateOfBirth, currentPosition, addressLines, phoneMobile, emailAddress, maritalStatus, nationality, recentWorkExperience, keySkills);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Header {\n");
    
    sb.append("    dateOfBirth: ").append(toIndentedString(dateOfBirth)).append("\n");
    sb.append("    currentPosition: ").append(toIndentedString(currentPosition)).append("\n");
    sb.append("    addressLines: ").append(toIndentedString(addressLines)).append("\n");
    sb.append("    phoneMobile: ").append(toIndentedString(phoneMobile)).append("\n");
    sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
    sb.append("    maritalStatus: ").append(toIndentedString(maritalStatus)).append("\n");
    sb.append("    nationality: ").append(toIndentedString(nationality)).append("\n");
    sb.append("    recentWorkExperience: ").append(toIndentedString(recentWorkExperience)).append("\n");
    sb.append("    keySkills: ").append(toIndentedString(keySkills)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

