import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.scss']
})
export class CvEducationComponent implements OnInit {

  title = "Education";
  @Input() name;
  @Input() text;
  @Input() image;
  @Input() education;

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
  
  updateStartDate(i, date: Date) {
    this.education.institutions[i].startDate = date;
  }

  updateEndDate(i, date: Date) {
    this.education.institutions[i].endDate = date;
  }

  addInstitution() {
    this.education.institutions.push({ institution: "New institution", qualifications: [{}]} );
  }

  removeInstitution(i) {
    if (this.education.institutions.length == 1) {
      this.education.institutions[0] = { institution: "New institution", qualifications: [{}] };
    } else {
      this.education.institutions.splice(i, 1);
    }
  }

  addQualification(i) {
    this.education.institutions[i].qualifications.push({});
  }

  removeQualification(i, j) {
    if (this.education.institutions[i].qualifications.length == 1) {
      this.education.institutions[i].qualifications[0] = {};
    } else {
      this.education.institutions[i].qualifications.splice(j, 1);
    }
  }
  
  moveQualificationUp(i, j) {
    this.education.institutions[i].qualifications.splice(j - 1, 0, this.education.institutions[i].qualifications.splice(j, 1)[0]);
  }

  moveQualificationDown(i, j) {
    this.education.institutions[i].qualifications.splice(j + 1, 0, this.education.institutions[i].qualifications.splice(j, 1)[0]);
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

}