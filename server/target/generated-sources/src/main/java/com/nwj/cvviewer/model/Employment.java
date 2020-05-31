package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.EmploymentInstitution;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Employment
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class Employment   {
  @JsonProperty("notes")
  private String notes = null;

  @JsonProperty("institutions")
  @Valid
  private List<EmploymentInstitution> institutions = null;

  public Employment notes(String notes) {
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

  public Employment institutions(List<EmploymentInstitution> institutions) {
    this.institutions = institutions;
    return this;
  }

  public Employment addInstitutionsItem(EmploymentInstitution institutionsItem) {
    if (this.institutions == null) {
      this.institutions = new ArrayList<>();
    }
    this.institutions.add(institutionsItem);
    return this;
  }

  /**
   * Get institutions
   * @return institutions
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<EmploymentInstitution> getInstitutions() {
    return institutions;
  }

  public void setInstitutions(List<EmploymentInstitution> institutions) {
    this.institutions = institutions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Employment employment = (Employment) o;
    return Objects.equals(this.notes, employment.notes) &&
        Objects.equals(this.institutions, employment.institutions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(notes, institutions);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Employment {\n");
    
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    institutions: ").append(toIndentedString(institutions)).append("\n");
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

