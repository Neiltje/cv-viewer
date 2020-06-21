import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DataService } from '../data.service'
import { AuthenticationService } from '../authentication.service'
import { CvLoginComponent } from '../cv-login/cv-login.component';
import { CvUserCreateComponent } from '../cv-user-create/cv-user-create.component';

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
    this.openLoginDialog();
  }

  createUser() {
    this.openCreateUserDialog();
  }

  changePassword() {
    window.alert("Change password function not implemented yet");
  }

  changeRoles() {
    window.alert("Change roles function not implemented yet");
  }

  deleteUser() {
    window.alert("Delete user function not implemented yet");
  }

  logout() {
    this.authenticationService.logout();
    this.dataService.setEditOff();
  }

  ngOnInit() {
  }

  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "220px";
    dialogConfig.width = "450px";
    this.dialog.open(CvLoginComponent, dialogConfig);
  }

  openCreateUserDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "320px";
    dialogConfig.width = "450px";
    this.dialog.open(CvUserCreateComponent, dialogConfig);
  }

}
