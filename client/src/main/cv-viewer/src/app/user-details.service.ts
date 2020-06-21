import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { UserService } from './api/index';
import { User } from './api/index';

@Injectable()
export class UserDetailsService {

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }


  hasUserRole(formGroup: FormGroup) {
    if (formGroup != undefined && this.userRoles != undefined) {
      for (var i = 0; i < this.userRoles.length; i++) {
        if (this.userRoles(formGroup).at(i).value != '') return true;
      }
    }
    return false;
  }

  userRoles(formGroup: FormGroup) {
    return formGroup.get('userRoles') as FormArray;
  }

  addUserRole(formGroup: FormGroup) {
    this.userRoles(formGroup).controls = this.userRoles(formGroup).controls
      .filter((c, i) => c.value != '' && !this.hasDuplicateUserRole(formGroup, c.value, i));
    this.userRoles(formGroup).push(this.formBuilder.control(''));
  }

  hasDuplicateUserRole(formGroup: FormGroup, userRole, index) {
    for (var i = 0; i < this.userRoles(formGroup).length; i++) {
      if (i < index && this.userRoles(formGroup).at(i).value == userRole) return true;
    }
    return false;
  }

  userErrors(formGroup: FormGroup, showErrors: boolean) {
    var errors = [];
    if (showErrors) {
      for (let key in formGroup.controls) {
        var error = formGroup.controls[key].errors;
        if (error != undefined) {
          errors.push(error['error']);
        }
      }
    }
    return errors;
  }

  hasErrors(formGroup: FormGroup) {
    return this.userErrors(formGroup, true).length > 0;
  }

  public userNameValidator() : ValidatorFn{
       return (group: FormGroup): ValidationErrors => {
          const userNameControl = group.controls['userName'];
          const currentUser = this.authenticationService.userName;
          if (userNameControl.value == '') {
            userNameControl.setErrors({'error': 'User cannot be blank'});
          } else if (userNameControl.value == currentUser) {
            userNameControl.setErrors({'error': 'User name cannot be current user "' + currentUser + '"'});
          } else {
            userNameControl.setErrors(null);
          }
          return;
    };
  }

  public userPasswordValidator() : ValidatorFn{
       return (group: FormGroup): ValidationErrors => {
          const userNameControl = group.controls['userPassword'];
          if (userNameControl.value == '') {
            userNameControl.setErrors({'error': 'User password cannot be blank'});
          } else {
            userNameControl.setErrors(null);
          }
          return;
    };
  }

  public userConfirmPasswordValidator() : ValidatorFn{
       return (group: FormGroup): ValidationErrors => {
          const userNameControl = group.controls['userPassword'];
          const userConfirmNameControl = group.controls['confirmUserPassword'];
          if (userNameControl.value != '') {
            if (userConfirmNameControl.value != userNameControl.value) {
              userConfirmNameControl.setErrors({'error': 'Confirm user password must match user password'});
            } else {
              userConfirmNameControl.setErrors(null);
            }
          } else {
            userConfirmNameControl.setErrors(null);
          }
          return;
    };
  }

  public userRolesValidator() : ValidatorFn{
       return (group: FormGroup): ValidationErrors => {
          const userRolesControl = group.controls['userRoles'];
          if (!this.hasUserRole(group)) {
            userRolesControl.setErrors({'error': 'At least one user role must be defined'});
          } else {
            userRolesControl.setErrors(null);
          }
          return;
    };
  }

  createUser(userName: string, userPassword: string, userRoles: string[]) {
    var user: User = {
      userName: userName,
      userPassword: userPassword,
      userRoles: userRoles
    };
    this.userService.createUser(user).subscribe(
      (response) => {
      },
      (error) => {
        window.alert("Unable to save User - see server logs for more details:" + error.error);
      });
  }

}