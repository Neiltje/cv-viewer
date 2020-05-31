package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Skill
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class Skill   {
  @JsonProperty("seq")
  private Long seq = null;

  @JsonProperty("type")
  private String type = null;

  @JsonProperty("experience")
  private Integer experience = null;

  @JsonProperty("ability")
  private Integer ability = null;

  @JsonProperty("notes")
  private String notes = null;

  public Skill seq(Long seq) {
    this.seq = seq;
    return this;
  }

  /**
   * Get seq
   * @return seq
  **/
  @ApiModelProperty(value = "")


  public Long getSeq() {
    return seq;
  }

  public void setSeq(Long seq) {
    this.seq = seq;
  }

  public Skill type(String type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(value = "")


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Skill experience(Integer experience) {
    this.experience = experience;
    return this;
  }

  /**
   * Get experience
   * @return experience
  **/
  @ApiModelProperty(value = "")


  public Integer getExperience() {
    return experience;
  }

  public void setExperience(Integer experience) {
    this.experience = experience;
  }

  public Skill ability(Integer ability) {
    this.ability = ability;
    return this;
  }

  /**
   * Get ability
   * @return ability
  **/
  @ApiModelProperty(value = "")


  public Integer getAbility() {
    return ability;
  }

  public void setAbility(Integer ability) {
    this.ability = ability;
  }

  public Skill notes(String notes) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Skill skill = (Skill) o;
    return Objects.equals(this.seq, skill.seq) &&
        Objects.equals(this.type, skill.type) &&
        Objects.equals(this.experience, skill.experience) &&
        Objects.equals(this.ability, skill.ability) &&
        Objects.equals(this.notes, skill.notes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(seq, type, experience, ability, notes);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Skill {\n");
    
    sb.append("    seq: ").append(toIndentedString(seq)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    experience: ").append(toIndentedString(experience)).append("\n");
    sb.append("    ability: ").append(toIndentedString(ability)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
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

