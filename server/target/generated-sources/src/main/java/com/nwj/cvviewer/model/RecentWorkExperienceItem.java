package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * RecentWorkExperienceItem
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class RecentWorkExperienceItem   {
  @JsonProperty("employer")
  private String employer = null;

  @JsonProperty("startDate")
  private LocalDate startDate = null;

  @JsonProperty("endDate")
  private LocalDate endDate = null;

  @JsonProperty("notes")
  private String notes = null;

  @JsonProperty("roles")
  @Valid
  private List<String> roles = null;

  public RecentWorkExperienceItem employer(String employer) {
    this.employer = employer;
    return this;
  }

  /**
   * Get employer
   * @return employer
  **/
  @ApiModelProperty(value = "")


  public String getEmployer() {
    return employer;
  }

  public void setEmployer(String employer) {
    this.employer = employer;
  }

  public RecentWorkExperienceItem startDate(LocalDate startDate) {
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

  public RecentWorkExperienceItem endDate(LocalDate endDate) {
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

  public RecentWorkExperienceItem notes(String notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Get notes
   * @return notes
  **/
  @ApiModelProperty(value = "")


  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  public RecentWorkExperienceItem roles(List<String> roles) {
    this.roles = roles;
    return this;
  }

  public RecentWorkExperienceItem addRolesItem(String rolesItem) {
    if (this.roles == null) {
      this.roles = new ArrayList<>();
    }
    this.roles.add(rolesItem);
    return this;
  }

  /**
   * Get roles
   * @return roles
  **/
  @ApiModelProperty(value = "")


  public List<String> getRoles() {
    return roles;
  }

  public void setRoles(List<String> roles) {
    this.roles = roles;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RecentWorkExperienceItem recentWorkExperienceItem = (RecentWorkExperienceItem) o;
    return Objects.equals(this.employer, recentWorkExperienceItem.employer) &&
        Objects.equals(this.startDate, recentWorkExperienceItem.startDate) &&
        Objects.equals(this.endDate, recentWorkExperienceItem.endDate) &&
        Objects.equals(this.notes, recentWorkExperienceItem.notes) &&
        Objects.equals(this.roles, recentWorkExperienceItem.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(employer, startDate, endDate, notes, roles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RecentWorkExperienceItem {\n");
    
    sb.append("    employer: ").append(toIndentedString(employer)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
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

