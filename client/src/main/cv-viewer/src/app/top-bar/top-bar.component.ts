import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DataService } from '../data.service'
import { AuthenticationService } from '../authentication.service'
import { CvLoginComponent } from '../cv-login/cv-login.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

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
    this.openDialog();
  }

  logout() {
    this.authenticationService.logout();
    this.dataService.setEditOff();
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "220px";
    dialogConfig.width = "450px";
    this.dialog.open(CvLoginComponent, dialogConfig);
  }

}
