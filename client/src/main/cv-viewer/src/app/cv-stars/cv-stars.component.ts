import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-stars',
  templateUrl: './cv-stars.component.html',
  styleUrls: ['./cv-stars.component.scss']
})
export class CvStarsComponent implements OnInit {

  @Input() inputLevel;
  @Input() inputMax;
  @Input() count = 5;
  level;

  constructor() { }

  ngOnInit() {
    this.level = this.count * this.inputLevel / this.inputMax;
  }

}