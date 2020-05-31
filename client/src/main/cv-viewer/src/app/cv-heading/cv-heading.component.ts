import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-heading',
  templateUrl: './cv-heading.component.html',
  styleUrls: ['./cv-heading.component.scss']
})
export class CvHeadingComponent implements OnInit {

  @Input() name;
  @Input() title;
  @Input() text;
  @Input() image;

  @Output() textNotify = new EventEmitter<string>();

  constructor(
    public dataService: DataService
  ) { }
  
  changeMessage() {
    this.textNotify.emit(this.text);
  }

  ngOnInit() {
  }

}