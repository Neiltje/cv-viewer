package com.nwj.cvviewer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.nwj.cvviewer.model.Skill;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * SkillGroup
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class SkillGroup   {
  @JsonProperty("seq")
  private Long seq = null;

  @JsonProperty("heading")
  private String heading = null;

  @JsonProperty("skillSet")
  @Valid
  private List<Skill> skillSet = null;

  public SkillGroup seq(Long seq) {
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

  public SkillGroup heading(String heading) {
    this.heading = heading;
    return this;
  }

  /**
   * Get heading
   * @return heading
  **/
  @ApiModelProperty(value = "")


  public String getHeading() {
    return heading;
  }

  public void setHeading(String heading) {
    this.heading = heading;
  }

  public SkillGroup skillSet(List<Skill> skillSet) {
    this.skillSet = skillSet;
    return this;
  }

  public SkillGroup addSkillSetItem(Skill skillSetItem) {
    if (this.skillSet == null) {
      this.skillSet = new ArrayList<>();
    }
    this.skillSet.add(skillSetItem);
    return this;
  }

  /**
   * Get skillSet
   * @return skillSet
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<Skill> getSkillSet() {
    return skillSet;
  }

  public void setSkillSet(List<Skill> skillSet) {
    this.skillSet = skillSet;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SkillGroup skillGroup = (SkillGroup) o;
    return Objects.equals(this.seq, skillGroup.seq) &&
        Objects.equals(this.heading, skillGroup.heading) &&
        Objects.equals(this.skillSet, skillGroup.skillSet);
  }

  @Override
  public int hashCode() {
    return Objects.hash(seq, heading, skillSet);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SkillGroup {\n");
    
    sb.append("    seq: ").append(toIndentedString(seq)).append("\n");
    sb.append("    heading: ").append(toIndentedString(heading)).append("\n");
    sb.append("    skillSet: ").append(toIndentedString(skillSet)).append("\n");
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

