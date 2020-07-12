import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormArray, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';
import { CvService } from "../api/index";
import { CvPermissions } from "../api/index";

@Component({
  selector: 'app-cv-permissions',
  templateUrl: './cv-permissions.component.html',
  styleUrls: ['./cv-permissions.component.scss']
})
export class CvPermissionsComponent implements OnInit {

  userForm;
  canEdit: boolean = false;
  availableCvNames = [];
  allUsers = [];
  availableUserNames = [];
  showErrors = false;
  cvPermissions: CvPermissions = {};

  constructor(
    private dialogRef: MatDialogRef<CvPermissionsComponent>,
    public authenticationService: AuthenticationService,
    private userDetailsService:UserDetailsService,
    private cvService: CvService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      cvName: '',
      cvOwner: '',
      cvUsers: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    },
    { validator: Validators.compose([
        this.cvOwnerValidator
      ])}
    );
  }

  public cvOwnerValidator() : ValidatorFn{
       return (group: FormGroup): ValidationErrors => {
          const cvOwnerControl = group.controls['cvOwner'];
          if (cvOwnerControl.value == '') {
            cvOwnerControl.setErrors({'error': 'CV Owner cannot be blank'});
          } else {
            cvOwnerControl.setErrors(null);
          }
          return;
    };
  }

  get cvUsers() {
    return this.userForm.get('cvUsers') as FormArray;
  }

  removeDuplicateUsers() {
    this.cvPermissions.cvUsers = [];
    this.cvUsers.controls = this.cvUsers.controls
      .filter((c, i) => c.value != "" && !this.hasDuplicateCvUser(c.value, i));
    this.cvUsers.controls.forEach(c => this.cvPermissions.cvUsers.push(c.value));
    this.cvUsers.push(this.formBuilder.control(''));
  }

  hasDuplicateCvUser(cvUser, index) {
    for (var i = 0; i < this.cvUsers.length; i++) {
      if (i < index && this.cvUsers.at(i).value == cvUser) return true;
    }
    return false;
  }

  removeCvUser(cvName: string) {
    this.cvUsers.controls = this.cvUsers.controls
      .filter((c, i) => c.value != cvName);
  }

  get userErrors() {
    return this.userDetailsService.userErrors(this.userForm, this.showErrors);
  }

  close() {
    this.dialogRef.close();
  }

  setCvName(event) {
    if (event.currentTarget.value != "") {
      this.cvService.getCvPermissions(event.currentTarget.value).subscribe((cvPermissions: CvPermissions) => {
        this.cvPermissions = cvPermissions;
        this.resetAvailableUsers();
        this.removeAvailableUser(cvPermissions.cvOwner);
        this.canEdit = this.authenticationService.isAdmin()
                    || this.cvPermissions.cvOwner == this.authenticationService.userName;
        this.userForm.controls['cvName'].setValue(cvPermissions.cvName);
        this.userForm.controls['cvOwner'].setValue(cvPermissions.cvOwner);
        this.cvUsers.clear();
        for (var i = 0; i < cvPermissions.cvUsers.length; i++) {
          this.cvUsers.push(this.formBuilder.control(cvPermissions.cvUsers[i]));
        }
        this.cvUsers.push(this.formBuilder.control(''));
      });
    } else {
        this.cvPermissions = {};
        this.resetAvailableUsers();
        this.userForm.controls['cvName'].setValue("");
        this.userForm.controls['cvOwner'].setValue("");
        this.cvUsers.clear();
        this.cvUsers.push(this.formBuilder.control(''));
        this.canEdit = false;
    }
  }

  setCvOwner(event) {
    this.cvPermissions.cvOwner = event.currentTarget.value;
    this.resetAvailableUsers();
    this.removeAvailableUser(event.currentTarget.value);
    this.removeCvUser(event.currentTarget.value);
    this.removeDuplicateUsers();
  }
  
  resetAvailableUsers() {
    this.availableUserNames = [];
    this.availableUserNames = this.allUsers.slice();
  }

  removeAvailableUser(userName: string) {
    const index = this.availableUserNames.indexOf(userName, 0);
    if (index > -1) {
      this.availableUserNames.splice(index, 1);
    }
  }

  updatePermissions(userFormData) {
    console.log("NWJ: cvOwner = " + this.userForm.controls['cvOwner'].value);
    console.log("NWJ: this.cvPermissions.cvOwner = " + this.cvPermissions.cvOwner);
    this.showErrors = true;
    if (!this.userDetailsService.hasErrors(this.userForm)) {
      this.cvService.postCvPermissions(this.cvPermissions).subscribe(
        (response) => {},
        (error) => {
          window.alert("Unable to update CV permissions - see server logs for more details: " + error.error);
        }
      );
      this.close();
    }
  }

  ngOnInit() {
    this.cvService.getAllCVSummaries().subscribe(
      (response) => {
        this.availableCvNames = response.map(function (cv) {
          return cv.name;
        });
        this.availableCvNames.unshift("");
      },
      (error) => {
          window.alert("Unable to retrieve CV names - see server logs for more details: " + error.error);
          this.close();
    });
    this.userDetailsService.getAllUserNames().subscribe(
      (response) => {
        this.allUsers = response;
        this.allUsers.unshift("");
        this.resetAvailableUsers();
      },
      (error) => {
          window.alert("Unable to retrieve user names - see server logs for more details: " + error.error);
          this.close();
    });
  }

}