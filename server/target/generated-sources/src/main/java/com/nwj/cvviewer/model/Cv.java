package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.Education;
import com.nwj.cvviewer.model.Employment;
import com.nwj.cvviewer.model.Header;
import com.nwj.cvviewer.model.Skills;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Cv
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class Cv   {
  @JsonProperty("name")
  private String name = null;

  @JsonProperty("firstName")
  private String firstName = null;

  @JsonProperty("oneLineSummary")
  private String oneLineSummary = null;

  @JsonProperty("summary")
  private String summary = null;

  @JsonProperty("footnote")
  private String footnote = null;

  @JsonProperty("sourceURL")
  private String sourceURL = null;

  @JsonProperty("interests")
  @Valid
  private List<String> interests = null;

  @JsonProperty("image")
  private String image = null;

  @JsonProperty("header")
  private Header header = null;

  @JsonProperty("education")
  private Education education = null;

  @JsonProperty("skills")
  private Skills skills = null;

  @JsonProperty("employment")
  private Employment employment = null;

  public Cv name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Cv firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Get firstName
   * @return firstName
  **/
  @ApiModelProperty(value = "")


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public Cv oneLineSummary(String oneLineSummary) {
    this.oneLineSummary = oneLineSummary;
    return this;
  }

  /**
   * Get oneLineSummary
   * @return oneLineSummary
  **/
  @ApiModelProperty(value = "")


  public String getOneLineSummary() {
    return oneLineSummary;
  }

  public void setOneLineSummary(String oneLineSummary) {
    this.oneLineSummary = oneLineSummary;
  }

  public Cv summary(String summary) {
    this.summary = summary;
    return this;
  }

  /**
   * Get summary
   * @return summary
  **/
  @ApiModelProperty(value = "")


  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public Cv footnote(String footnote) {
    this.footnote = footnote;
    return this;
  }

  /**
   * Get footnote
   * @return footnote
  **/
  @ApiModelProperty(value = "")


  public String getFootnote() {
    return footnote;
  }

  public void setFootnote(String footnote) {
    this.footnote = footnote;
  }

  public Cv sourceURL(String sourceURL) {
    this.sourceURL = sourceURL;
    return this;
  }

  /**
   * Get sourceURL
   * @return sourceURL
  **/
  @ApiModelProperty(value = "")


  public String getSourceURL() {
    return sourceURL;
  }

  public void setSourceURL(String sourceURL) {
    this.sourceURL = sourceURL;
  }

  public Cv interests(List<String> interests) {
    this.interests = interests;
    return this;
  }

  public Cv addInterestsItem(String interestsItem) {
    if (this.interests == null) {
      this.interests = new ArrayList<>();
    }
    this.interests.add(interestsItem);
    return this;
  }

  /**
   * Get interests
   * @return interests
  **/
  @ApiModelProperty(value = "")


  public List<String> getInterests() {
    return interests;
  }

  public void setInterests(List<String> interests) {
    this.interests = interests;
  }

  public Cv image(String image) {
    this.image = image;
    return this;
  }

  /**
   * Get image
   * @return image
  **/
  @ApiModelProperty(value = "")


  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public Cv header(Header header) {
    this.header = header;
    return this;
  }

  /**
   * Get header
   * @return header
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Header getHeader() {
    return header;
  }

  public void setHeader(Header header) {
    this.header = header;
  }

  public Cv education(Education education) {
    this.education = education;
    return this;
  }

  /**
   * Get education
   * @return education
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Education getEducation() {
    return education;
  }

  public void setEducation(Education education) {
    this.education = education;
  }

  public Cv skills(Skills skills) {
    this.skills = skills;
    return this;
  }

  /**
   * Get skills
   * @return skills
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Skills getSkills() {
    return skills;
  }

  public void setSkills(Skills skills) {
    this.skills = skills;
  }

  public Cv employment(Employment employment) {
    this.employment = employment;
    return this;
  }

  /**
   * Get employment
   * @return employment
  **/
  @ApiModelProperty(value = "")

  @Valid

  public Employment getEmployment() {
    return employment;
  }

  public void setEmployment(Employment employment) {
    this.employment = employment;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Cv cv = (Cv) o;
    return Objects.equals(this.name, cv.name) &&
        Objects.equals(this.firstName, cv.firstName) &&
        Objects.equals(this.oneLineSummary, cv.oneLineSummary) &&
        Objects.equals(this.summary, cv.summary) &&
        Objects.equals(this.footnote, cv.footnote) &&
        Objects.equals(this.sourceURL, cv.sourceURL) &&
        Objects.equals(this.interests, cv.interests) &&
        Objects.equals(this.image, cv.image) &&
        Objects.equals(this.header, cv.header) &&
        Objects.equals(this.education, cv.education) &&
        Objects.equals(this.skills, cv.skills) &&
        Objects.equals(this.employment, cv.employment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, firstName, oneLineSummary, summary, footnote, sourceURL, interests, image, header, education, skills, employment);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Cv {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    oneLineSummary: ").append(toIndentedString(oneLineSummary)).append("\n");
    sb.append("    summary: ").append(toIndentedString(summary)).append("\n");
    sb.append("    footnote: ").append(toIndentedString(footnote)).append("\n");
    sb.append("    sourceURL: ").append(toIndentedString(sourceURL)).append("\n");
    sb.append("    interests: ").append(toIndentedString(interests)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    header: ").append(toIndentedString(header)).append("\n");
    sb.append("    education: ").append(toIndentedString(education)).append("\n");
    sb.append("    skills: ").append(toIndentedString(skills)).append("\n");
    sb.append("    employment: ").append(toIndentedString(employment)).append("\n");
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

