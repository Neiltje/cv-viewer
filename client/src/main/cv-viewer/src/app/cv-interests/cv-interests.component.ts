import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cv-interests',
  templateUrl: './cv-interests.component.html',
  styleUrls: ['./cv-interests.component.scss']
})
export class CvInterestsComponent implements OnInit {

  title = "Interests";
  @Input() name;
  @Input() text;
  @Input() image;
  @Input() interests;

  @Output() textNotify = new EventEmitter<string>();
  @Output() nameNotify = new EventEmitter<string>();
  
  updateText(text: string) {
    this.interests = text;
    this.textNotify.emit(this.interests);
  }
  
  updateName(name: string) {
    this.name = name;
    this.nameNotify.emit(this.name);
  }
  
  constructor() { }

  ngOnInit() {
  }

}