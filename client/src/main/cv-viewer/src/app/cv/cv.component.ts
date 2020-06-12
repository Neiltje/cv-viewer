import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cv } from '../api/index';
import { CvService } from '../api/index'
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  cv: Cv;

  constructor(
    private route: ActivatedRoute,
    private cvService: CvService,
    public dataService: DataService
  ) { }

  updateSummaryText(text: string) {
    this.cv.summary = text;
  }

  updateEducationText(text: string) {
    this.cv.education.notes = text;
  }

  updateSkillsText(text: string) {
    this.cv.skills.notes = text;
  }

  updateEmploymentText(text: string) {
    this.cv.employment.notes = text;
  }

  updateInterestsText(text: string) {
    this.cv.interests = [];
    this.cv.interests.push(text);
  }

  updateFootnote(footnote: string) {
    this.cv.footnote = footnote;
  }

  updateSourceURL(sourceURL: string) {
    this.cv.sourceURL = sourceURL;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cvService.getCvByName(params.get('cvName')).subscribe((cv) => {
        this.cv = cv;
        this.dataService.setCv(this.cv);
      });
    });
    this.dataService.getImageNotify().subscribe(image => {
      this.cv.image = image;
    });
  }

}
