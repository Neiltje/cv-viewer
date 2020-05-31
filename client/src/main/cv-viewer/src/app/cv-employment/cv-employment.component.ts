import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-employment',
  templateUrl: './cv-employment.component.html',
  styleUrls: ['./cv-employment.component.scss']
})
export class CvEmploymentComponent implements OnInit {

  title = "Employment";
  @Input() name;
  @Input() text;
  @Input() image;
  @Input() employment;

  @Output() textNotify = new EventEmitter<string>();
  
  updateText(text: string) {
    this.text = text;
    this.textNotify.emit(this.text);
  }

  addInstitution() {
    this.employment.institutions.push({ institution: "New institution", roles: []} );
    this.addRole(this.employment.institutions.length -1);
  }

  removeInstitution(i) {
    if (this.employment.institutions.length == 1) {
      this.employment.institutions[0] = { institution: "New institution", roles: [] };
      this.addRole(0);
    } else {
      this.employment.institutions.splice(i, 1);
    }
  }

  updateNote(note, i, j) {
    this.employment.institutions[i].notes[j] = note;
  }

  addNote(i, j) {
    this.employment.institutions[i].notes.splice(j + 1, 0, "");
  }

  removeNote(i, j) {
    if (this.employment.institutions[i].notes.length == 1) {
      this.employment.institutions[i].notes[0] = "";
    } else {
      this.employment.institutions[i].notes.splice(j, 1);
    }
  }
 
  addRole(i) {
    this.employment.institutions[i].roles.push({ notes: []});
    this.addRoleNote(i, this.employment.institutions[i].roles.length - 1, 0);
  }

  removeRole(i, j) {
    if (this.employment.institutions[i].roles.length == 1) {
      this.employment.institutions[i].roles[0] = { notes: []};
      this.addRoleNote(i, 0, 0);
    } else {
      this.employment.institutions[i].roles.splice(j, 1);
    }
  }

  updateRoleNote(note, i, j, k) {
    this.employment.institutions[i].roles[j].notes[k] = note;
  }

  addRoleNote(i, j, k) {
    if (k ==0){
      this.employment.institutions[i].roles[j].notes.push("");
    } else {
      this.employment.institutions[i].roles[j].notes.splice(k + 1, 0, "");
    }
  }

  removeRoleNote(i, j, k) {
    if (this.employment.institutions[i].roles[j].notes.length == 1) {
      this.employment.institutions[i].roles[j].notes[0] = "";
    } else {
      this.employment.institutions[i].roles[j].notes.splice(k, 1);
    }
  }

  updateStartDate(i, date: Date) {
    this.employment.institutions[i].startDate = date;
  }

  updateEndDate(i, date: Date) {
    this.employment.institutions[i].endDate = date;
  }
 
  updateRoleStartDate(i, j, date: Date) {
    this.employment.institutions[i].roles[j].startDate = date;
  }

  updateRoleEndDate(i, j, date: Date) {
    this.employment.institutions[i].roles[j].endDate = date;
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