import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-bottom-bar',
  templateUrl: './cv-bottom-bar.component.html',
  styleUrls: ['./cv-bottom-bar.component.scss']
})
export class CvBottomBarComponent implements OnInit {

  @Input() footnote;
  @Input() sourceURL;

  @Output() footnoteNotify = new EventEmitter<string>();
  @Output() sourceURLNotify = new EventEmitter<string>();

  constructor(
    public dataService: DataService
  ) { }

  changeFootnote() {
    this.footnoteNotify.emit(this.footnote);
  }

  changeSourceURL() {
    this.sourceURLNotify.emit(this.sourceURL);
  }

  ngOnInit() {
  }

}
