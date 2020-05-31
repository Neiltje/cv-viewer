import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-bottom-bar',
  templateUrl: './cv-bottom-bar.component.html',
  styleUrls: ['./cv-bottom-bar.component.scss']
})
export class CvBottomBarComponent implements OnInit {

  @Input() footnote;
  @Input() sourceURL;

  constructor() { }

  ngOnInit() {
  }

}