package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.EmploymentRole;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * EmploymentInstitution
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class EmploymentInstitution   {
  @JsonProperty("employer")
  private String employer = null;

  @JsonProperty("startDate")
  private LocalDate startDate = null;

  @JsonProperty("endDate")
  private LocalDate endDate = null;

  @JsonProperty("notes")
  @Valid
  private List<String> notes = null;

  @JsonProperty("roles")
  @Valid
  private List<EmploymentRole> roles = null;

  public EmploymentInstitution employer(String employer) {
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

  public EmploymentInstitution startDate(LocalDate startDate) {
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

  public EmploymentInstitution endDate(LocalDate endDate) {
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

  public EmploymentInstitution notes(List<String> notes) {
    this.notes = notes;
    return this;
  }

  public EmploymentInstitution addNotesItem(String notesItem) {
    if (this.notes == null) {
      this.notes = new ArrayList<>();
    }
    this.notes.add(notesItem);
    return this;
  }

  /**
   * Get notes
   * @return notes
  **/
  @ApiModelProperty(value = "")


  public List<String> getNotes() {
    return notes;
  }

  public void setNotes(List<String> notes) {
    this.notes = notes;
  }

  public EmploymentInstitution roles(List<EmploymentRole> roles) {
    this.roles = roles;
    return this;
  }

  public EmploymentInstitution addRolesItem(EmploymentRole rolesItem) {
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

  @Valid

  public List<EmploymentRole> getRoles() {
    return roles;
  }

  public void setRoles(List<EmploymentRole> roles) {
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
    EmploymentInstitution employmentInstitution = (EmploymentInstitution) o;
    return Objects.equals(this.employer, employmentInstitution.employer) &&
        Objects.equals(this.startDate, employmentInstitution.startDate) &&
        Objects.equals(this.endDate, employmentInstitution.endDate) &&
        Objects.equals(this.notes, employmentInstitution.notes) &&
        Objects.equals(this.roles, employmentInstitution.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(employer, startDate, endDate, notes, roles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmploymentInstitution {\n");
    
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

