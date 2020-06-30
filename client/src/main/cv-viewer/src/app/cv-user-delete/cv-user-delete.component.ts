import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-cv-user-delete',
  templateUrl: './cv-user-delete.component.html',
  styleUrls: ['./cv-user-delete.component.scss']
})
export class CvUserDeleteComponent implements OnInit {

  userForm: FormGroup;
  availableUserNames = [];
  showErrors = false;

  constructor(
    private dialogRef: MatDialogRef<CvUserDeleteComponent>,
    public authenticationService: AuthenticationService,
    private userDetailsService: UserDetailsService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      userName: ''
    },
    { validator: Validators.compose([
        userDetailsService.userNameValidator()
      ])}
    );
  }

  get userErrors() {
    return this.userDetailsService.userErrors(this.userForm, this.showErrors);
  }

  setUserName(event) {
    this.userForm.controls['userName'].setValue(event.currentTarget.value);
  }

  deleteUser(userFormData) {
    this.showErrors = true;
    if (!this.userDetailsService.hasErrors(this.userForm)) {
      this.userDetailsService.deleteUser(userFormData['userName']);
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.userDetailsService.getAllUserNames().subscribe((response) => {
      this.availableUserNames = response;
      const index = this.availableUserNames.indexOf(this.authenticationService.userName, 0);
      if (index > -1) {
        this.availableUserNames.splice(index, 1);
      }
      if (this.availableUserNames.length > 0) {
        this.userForm.controls['userName'].setValue(this.availableUserNames[0]);
      }
    });
  }

}