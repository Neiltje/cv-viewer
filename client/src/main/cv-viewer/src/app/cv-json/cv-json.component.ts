import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Cv } from '../api/index';

@Component({
  selector: 'app-cv-json',
  templateUrl: './cv-json.component.html',
  styleUrls: ['./cv-json.component.scss']
})
export class CvJsonComponent implements OnInit {

  cv: Cv;
  cvJson: string;

  constructor(
    private dialogRef: MatDialogRef<CvJsonComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.cv = data;
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.cvJson = JSON.stringify(this.cv, null, 2);
  }

}
