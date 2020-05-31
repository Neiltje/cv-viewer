package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.Qualification;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * EducationInstitution
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class EducationInstitution   {
  @JsonProperty("institution")
  private String institution = null;

  @JsonProperty("startDate")
  private LocalDate startDate = null;

  @JsonProperty("endDate")
  private LocalDate endDate = null;

  @JsonProperty("qualifications")
  @Valid
  private List<Qualification> qualifications = null;

  public EducationInstitution institution(String institution) {
    this.institution = institution;
    return this;
  }

  /**
   * Get institution
   * @return institution
  **/
  @ApiModelProperty(value = "")


  public String getInstitution() {
    return institution;
  }

  public void setInstitution(String institution) {
    this.institution = institution;
  }

  public EducationInstitution startDate(LocalDate startDate) {
    this.startDate = startDate;
    return this;
  }

  /**
   * Get startDate
   * @return startDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getStartDate() {
    return startDate;
  }

  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  public EducationInstitution endDate(LocalDate endDate) {
    this.endDate = endDate;
    return this;
  }

  /**
   * Get endDate
   * @return endDate
  **/
  @ApiModelProperty(value = "")

  @Valid

  public LocalDate getEndDate() {
    return endDate;
  }

  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }

  public EducationInstitution qualifications(List<Qualification> qualifications) {
    this.qualifications = qualifications;
    return this;
  }

  public EducationInstitution addQualificationsItem(Qualification qualificationsItem) {
    if (this.qualifications == null) {
      this.qualifications = new ArrayList<>();
    }
    this.qualifications.add(qualificationsItem);
    return this;
  }

  /**
   * Get qualifications
   * @return qualifications
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<Qualification> getQualifications() {
    return qualifications;
  }

  public void setQualifications(List<Qualification> qualifications) {
    this.qualifications = qualifications;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EducationInstitution educationInstitution = (EducationInstitution) o;
    return Objects.equals(this.institution, educationInstitution.institution) &&
        Objects.equals(this.startDate, educationInstitution.startDate) &&
        Objects.equals(this.endDate, educationInstitution.endDate) &&
        Objects.equals(this.qualifications, educationInstitution.qualifications);
  }

  @Override
  public int hashCode() {
    return Objects.hash(institution, startDate, endDate, qualifications);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EducationInstitution {\n");
    
    sb.append("    institution: ").append(toIndentedString(institution)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    qualifications: ").append(toIndentedString(qualifications)).append("\n");
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

