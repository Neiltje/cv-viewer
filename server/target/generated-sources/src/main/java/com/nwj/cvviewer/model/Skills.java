package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.SkillGroup;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Skills
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class Skills   {
  @JsonProperty("notes")
  private String notes = null;

  @JsonProperty("skillGroups")
  @Valid
  private List<SkillGroup> skillGroups = null;

  public Skills notes(String notes) {
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

  public Skills skillGroups(List<SkillGroup> skillGroups) {
    this.skillGroups = skillGroups;
    return this;
  }

  public Skills addSkillGroupsItem(SkillGroup skillGroupsItem) {
    if (this.skillGroups == null) {
      this.skillGroups = new ArrayList<>();
    }
    this.skillGroups.add(skillGroupsItem);
    return this;
  }

  /**
   * Get skillGroups
   * @return skillGroups
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<SkillGroup> getSkillGroups() {
    return skillGroups;
  }

  public void setSkillGroups(List<SkillGroup> skillGroups) {
    this.skillGroups = skillGroups;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Skills skills = (Skills) o;
    return Objects.equals(this.notes, skills.notes) &&
        Objects.equals(this.skillGroups, skills.skillGroups);
  }

  @Override
  public int hashCode() {
    return Objects.hash(notes, skillGroups);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Skills {\n");
    
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    skillGroups: ").append(toIndentedString(skillGroups)).append("\n");
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

