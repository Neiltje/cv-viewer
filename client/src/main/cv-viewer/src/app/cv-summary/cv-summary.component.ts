import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.scss']
})
export class CvSummaryComponent implements OnInit {

  title = "Summary";
  @Input() name;
  @Input() oneLineSummary;
  @Input() text;
  @Input() image;
  @Input() header;

  @Output() textNotify = new EventEmitter<string>();
  @Output() nameNotify = new EventEmitter<string>();
  @Output() oneLineSummaryNotify = new EventEmitter<string>();

  datePicker;

  updateDate(date: Date) {
    this.header.dateOfBirth = date;
  }
  
  updateText(text: string) {
    this.text = text;
    this.textNotify.emit(this.text);
  }
  
  updateName(name: string) {
    this.name = name;
    this.nameNotify.emit(this.name);
  }
  
  updateOneLineSummary() {
    this.oneLineSummaryNotify.emit(this.oneLineSummary);
  }

  updateAddressLine(addressLine, i) {
    this.header.addressLines[i] = addressLine;
  }

  addAddressLine(i) {
    this.header.addressLines.splice(i + 1, 0, "");
  }

  removeAddressLine(i) {
    if (this.header.addressLines.length == 1) {
      this.header.addressLines[0] = "";
    } else {
      this.header.addressLines.splice(i, 1);
    }
  }

  updateStartDate(i, date: Date) {
    this.header.recentWork[i].startDate = date;
  }

  updateEndDate(i, date: Date) {
    this.header.recentWork[i].endDate = date;
  }

  updateRole(role, i, j) {
    this.header.recentWorkExperience[i].roles[j] = role;
  }

  addRole(i, j) {
    this.header.recentWorkExperience[i].roles.splice(j + 1, 0, "");
  }

  removeRole(i, j) {
    if (this.header.recentWorkExperience[i].roles.length == 1) {
      this.header.recentWorkExperience[i].roles[0] = "";
    } else {
      this.header.recentWorkExperience[i].roles.splice(j, 1);
    }
  }

  addSkill() {
    this.header.keySkills.push({});
  }

  removeSkill(i) {
    if (this.header.keySkills.length == 1) {
      this.header.keySkills[0] = "";
    } else {
      this.header.keySkills.splice(i, 1);
    }
  }

  moveSkillUp(i) {
    this.header.keySkills.splice(i - 1, 0, this.header.keySkills.splice(i, 1)[0]);
  }

  moveSkillDown(i) {
    this.header.keySkills.splice(i + 1, 0, this.header.keySkills.splice(i, 1)[0]);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  
  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

}