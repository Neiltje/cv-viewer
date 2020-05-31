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
 * KeySkill
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-05-31T09:46:08.894+01:00")

public class KeySkill   {
  @JsonProperty("skill")
  private String skill = null;

  @JsonProperty("ability")
  private Integer ability = null;

  public KeySkill skill(String skill) {
    this.skill = skill;
    return this;
  }

  /**
   * Get skill
   * @return skill
  **/
  @ApiModelProperty(value = "")


  public String getSkill() {
    return skill;
  }

  public void setSkill(String skill) {
    this.skill = skill;
  }

  public KeySkill ability(Integer ability) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KeySkill keySkill = (KeySkill) o;
    return Objects.equals(this.skill, keySkill.skill) &&
        Objects.equals(this.ability, keySkill.ability);
  }

  @Override
  public int hashCode() {
    return Objects.hash(skill, ability);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KeySkill {\n");
    
    sb.append("    skill: ").append(toIndentedString(skill)).append("\n");
    sb.append("    ability: ").append(toIndentedString(ability)).append("\n");
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

