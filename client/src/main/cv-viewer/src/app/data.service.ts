import { Injectable, ViewContainerRef } from '@angular/core';
import { Cv } from './api/index';
import { CvService } from './api/index'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CvJsonComponent } from './cv-json/cv-json.component';

@Injectable()
export class DataService {

  public editMode: boolean = false;
  cv: Cv;


  constructor(
      private cvService: CvService,
      private dialog: MatDialog
  ) { }

  switchMode() {
    this.editMode = !this.editMode;
  }

  setEditOff() {
    this.editMode = false;
  }

  hasCv() {
    return this.cv != null;
  }

  setCv(cv: Cv) {
    this.cv = cv;
  }

  unsetCv() {
    this.setCv(null);
    this.editMode = false;
  }

  copyCv() {
    this.openDialog();
  }

  saveCv() {
    this.cvService.putCv(this.cv).subscribe(response => {});
    this.editMode = false;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "1000px";
    dialogConfig.data = this.cv;
    this.dialog.open(CvJsonComponent, dialogConfig);
  }

}
