import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-cv-user-roles',
  templateUrl: './cv-user-roles.component.html',
  styleUrls: ['./cv-user-roles.component.scss']
})
export class CvUserRolesComponent implements OnInit {

  userForm;
  availableUserNames = [];
  availableUserRoles = ['', 'ROLE_ADMIN', 'ROLE_USER'];
  showErrors = false;

  constructor(
    private dialogRef: MatDialogRef<CvUserRolesComponent>,
    public authenticationService: AuthenticationService,
    private userDetailsService:UserDetailsService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      userName: '',
      userRoles: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    },
    { validator: Validators.compose([
        userDetailsService.userNameValidator(),
        userDetailsService.userRolesValidator()
      ])}
    );
    this.initialiseUserRoles(this.authenticationService.userName);
  }

  get userRoles() {
    return this.userDetailsService.userRoles(this.userForm);
  }

  get userErrors() {
    return this.userDetailsService.userErrors(this.userForm, this.showErrors);
  }

  setUserName(event) {
    this.userForm.controls['userName'].setValue(event.currentTarget.value);
    this.initialiseUserRoles(event.currentTarget.value);
  }

  initialiseUserRoles(userName: string) {
    this.userDetailsService.getUserRoles(userName).subscribe((response) => {
      this.userRoles.clear();
      for (var i = 0; i < response.length; i++) {
        this.userRoles.push(this.formBuilder.control(response[i]));
      }
      this.userRoles.push(this.formBuilder.control(''));
    });
  }

  addUserRole() {
    this.userDetailsService.addUserRole(this.userForm);
  }

  updateUserRoles(userFormData) {
    this.showErrors = true;
    if (!this.userDetailsService.hasErrors(this.userForm)) {
      this.userDetailsService.updateUserRoles(userFormData['userName'], userFormData['userRoles']);
      if (userFormData['userName'] == this.authenticationService.userName) {
        this.authenticationService.userRoles = this.userRoles.value;
      }
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