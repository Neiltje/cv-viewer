import { Injectable, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { Cv } from './api/index';
import { CvPermissions } from './api/index';
import { CvService } from './api/index'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CvJsonComponent } from './cv-json/cv-json.component';
import { AuthenticationService } from './authentication.service'

@Injectable()
export class DataService {

  public editMode: boolean = false;
  cv: Cv;

  @Output() imageNotify = new EventEmitter<string>();

  constructor(
      private cvService: CvService,
      private dialog: MatDialog,
      private authenticationService: AuthenticationService
  ) { }

  switchMode() {
    this.editMode = !this.editMode;
  }

  setEditOff() {
    this.editMode = false;
  }

  setEditOn() {
    this.editMode = true;
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
    this.cvService.postCv(this.cv).subscribe(
      response => {
        this.cvService.getCvPermissions(this.cv.name).subscribe(
          response => {
            if (response == undefined) {
              let cvPermissions = {
                cvName: this.cv.name,
                cvOwner: this.authenticationService.userName
              };
              this.cvService.postCvPermissions(cvPermissions).subscribe();
            }
          },
          error => {
              let cvPermissions = {
                cvName: this.cv.name,
                cvOwner: this.authenticationService.userName
              };
              this.cvService.postCvPermissions(cvPermissions).subscribe();
          }
        );
      },
      error => {
        window.alert("Unable to save CV - see server logs for more details:" + error.error);
      });
    this.editMode = false;
  }

  deleteCv(cvName: string) {
    this.cvService.deleteCvByName(cvName).subscribe(
      response => {},
      error => {
        window.alert("Unable to delete CV - see server logs for more details:" + error.error);
      });
    this.editMode = false;
  }

  getNewCvTemplate() {
    return this.cvService.getNewCvTemplate();
  }

  setImage(image: string) {
    this.cv.image = image;
    this.imageNotify.emit(image);
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

  getImageNotify() {
    return this.imageNotify;
  }

}
