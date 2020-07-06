import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.scss']
})
export class CvSkillsComponent implements OnInit {

  title = "Skills";
  @Input() name;
  @Input() text;
  @Input() image;
  @Input() skills;

  @Output() textNotify = new EventEmitter<string>();
  @Output() nameNotify = new EventEmitter<string>();

  updateText(text: string) {
    this.text = text;
    this.textNotify.emit(this.text);
  }
  
  updateName(name: string) {
    this.name = name;
    this.nameNotify.emit(this.name);
  }

  reSequenceSkillsGroup() {
    var index = 0;
    this.skills.skillGroups.forEach( (skillGroup) => { skillGroup.seq = index++ } );
  }

  addSkillGroup() {
    this.skills.skillGroups.push({ heading: "New skill group", skillSet: [{}]} );
    this.reSequenceSkillsGroup();
  }

  removeSkillGroup(i) {
    if (this.skills.skillGroups.length == 1) {
      this.skills.skillGroups[0] = { heading: "New skill group", skillSet: [{}] };
    } else {
      this.skills.skillGroups.splice(i, 1);
    }
    this.reSequenceSkillsGroup();
  }

  moveSkillGroupUp(i) {
    this.skills.skillGroups.splice(i - 1, 0, this.skills.skillGroups.splice(i, 1)[0]);
    this.reSequenceSkillsGroup();
  }

  moveSkillGroupDown(i) {
    this.skills.skillGroups.splice(i + 1, 0, this.skills.skillGroups.splice(i, 1)[0]);
    this.reSequenceSkillsGroup();
  }

  reSequenceSkills(i) {
    var index = 0;
    this.skills.skillGroups[i].skillSet.forEach( (skill) => { skill.seq = index++ } );
  }

  addSkill(i) {
    this.skills.skillGroups[i].skillSet.push({});
    this.reSequenceSkills(i);
  }

  removeSkill(i, j) {
    if (this.skills.skillGroups[i].skillSet.length == 1) {
      this.skills.skillGroups[i].skillSet[0] = {};
    } else {
      this.skills.skillGroups[i].skillSet.splice(j, 1);
    }
    this.reSequenceSkills(i);
  }

  moveSkillUp(i, j) {
    this.skills.skillGroups[i].skillSet.splice(j - 1, 0, this.skills.skillGroups[i].skillSet.splice(j, 1)[0]);
    this.reSequenceSkills(i);
  }

  moveSkillDown(i, j) {
    this.skills.skillGroups[i].skillSet.splice(j + 1, 0, this.skills.skillGroups[i].skillSet.splice(j, 1)[0]);
    this.reSequenceSkills(i);
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

}
