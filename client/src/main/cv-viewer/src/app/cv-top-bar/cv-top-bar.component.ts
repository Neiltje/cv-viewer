import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DataService } from '../data.service'
import { AuthenticationService } from '../authentication.service'
import { CvLoginComponent } from '../cv-login/cv-login.component';
import { CvUserCreateComponent } from '../cv-user-create/cv-user-create.component';
import { CvUserPasswordComponent } from '../cv-user-password/cv-user-password.component';
import { CvUserRolesComponent } from '../cv-user-roles/cv-user-roles.component';
import { CvUserDeleteComponent } from '../cv-user-delete/cv-user-delete.component';
import { CvPermissionsComponent } from '../cv-permissions/cv-permissions.component';

@Component({
  selector: 'cv-top-bar',
  templateUrl: './cv-top-bar.component.html',
  styleUrls: ['./cv-top-bar.component.scss']
})
export class CvTopBarComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public authenticationService: AuthenticationService,
    private dialog: MatDialog
  ) { }

  switchMode() {
    this.dataService.switchMode();
  }

  copyCv() {
    this.dataService.copyCv();
  }

  saveCv() {
    this.dataService.saveCv();
  }

  login() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "240px";
    dialogConfig.width = "450px";
    this.dialog.open(CvLoginComponent, dialogConfig);
  }

  createUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "320px";
    dialogConfig.width = "450px";
    this.dialog.open(CvUserCreateComponent, dialogConfig);
  }

  changePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "450px";
    this.dialog.open(CvUserPasswordComponent, dialogConfig);
  }

  changeRoles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "450px";
    this.dialog.open(CvUserRolesComponent, dialogConfig);
  }

  deleteUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "180px";
    dialogConfig.width = "450px";
    this.dialog.open(CvUserDeleteComponent, dialogConfig);
  }

  changeCvPermissions() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "450px";
    this.dialog.open(CvPermissionsComponent, dialogConfig);
  }

  logout() {
    this.authenticationService.logout();
    this.dataService.setEditOff();
  }

  ngOnInit() {
  }

}
