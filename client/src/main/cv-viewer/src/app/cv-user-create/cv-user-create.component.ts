import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-cv-user-create',
  templateUrl: './cv-user-create.component.html',
  styleUrls: ['./cv-user-create.component.scss']
})
export class CvUserCreateComponent implements OnInit {

  userForm;
  availableUserRoles = ['', 'ROLE_ADMIN', 'ROLE_USER'];
  showErrors = false;

  constructor(
    private dialogRef: MatDialogRef<CvUserCreateComponent>,
    public authenticationService: AuthenticationService,
    private userDetailsService:UserDetailsService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      userName: '',
      userPassword: '',
      confirmUserPassword: '',
      userRoles: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    },
    { validator: Validators.compose([
        userDetailsService.userNameCreateValidator(),
        userDetailsService.userPasswordValidator(),
        userDetailsService.userConfirmPasswordValidator(),
        userDetailsService.userRolesValidator()
      ])}
    );
  }

  get userRoles() {
    return this.userDetailsService.userRoles(this.userForm);
  }

  get userErrors() {
    return this.userDetailsService.userErrors(this.userForm, this.showErrors);
  }

  addUserRole() {
    this.userDetailsService.addUserRole(this.userForm);
  }

  createUser(userFormData) {
    this.showErrors = true;
    if (!this.userDetailsService.hasErrors(this.userForm)) {
      this.userDetailsService.createUser(userFormData['userName'], userFormData['userPassword'], userFormData['userRoles']);
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}