import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-cv-user-password',
  templateUrl: './cv-user-password.component.html',
  styleUrls: ['./cv-user-password.component.scss']
})
export class CvUserPasswordComponent implements OnInit {

  userForm: FormGroup;
  availableUserNames = [];
  showErrors = false;

  constructor(
    private dialogRef: MatDialogRef<CvUserPasswordComponent>,
    public authenticationService: AuthenticationService,
    private userDetailsService: UserDetailsService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      userName: '',
      userPassword: '',
      confirmUserPassword: ''
    },
    { validator: Validators.compose([
        userDetailsService.userNameValidator(),
        userDetailsService.userPasswordValidator(),
        userDetailsService.userConfirmPasswordValidator()
      ])}
    );
  }

  get userErrors() {
    return this.userDetailsService.userErrors(this.userForm, this.showErrors);
  }

  setUserName(event) {
    this.userForm.controls['userName'].setValue(event.currentTarget.value);
  }

  updateUserPassword(userFormData) {
    this.showErrors = true;
    if (!this.userDetailsService.hasErrors(this.userForm)) {
      this.userDetailsService.updateUserPassword(userFormData['userName'], userFormData['userPassword']);
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.userDetailsService.getAllUserNames().subscribe(
      (response) => {
        this.availableUserNames = response;
        const index = this.availableUserNames.indexOf(this.authenticationService.userName, 0);
        if (index > -1) {
          this.availableUserNames.splice(index, 1);
        }
        this.availableUserNames.splice(0, 0, this.authenticationService.userName);
        this.userForm.controls['userName'].setValue(this.authenticationService.userName);
      },
      (error) => {
          window.alert("Unable to retrieve user names - see server logs for more details: " + error.error);
          this.close();
      }
    );
  }

}