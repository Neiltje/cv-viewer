import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { AuthenticationService } from '../authentication.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cv-login',
  templateUrl: './cv-login.component.html',
  styleUrls: ['./cv-login.component.scss']
})
export class CvLoginComponent implements OnInit {

  loginError = false;
  loginForm;

  constructor(
    private dialogRef: MatDialogRef<CvLoginComponent>,
    public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      userName: '',
      userPassword: ''
    });
  }

  login(loginFormData) {
    this.authenticationService.login(loginFormData.userName, loginFormData.userPassword);
  }

  close() {
    this.loginError = false;
    this.dialogRef.close();
  }

  ngOnInit() {
    this.authenticationService.getAuthenticationEventEmitter().subscribe((authenticated) => {
      if (authenticated) {
        this.close();
      } else {
        this.loginError = true;
      }
    });
  }

}
