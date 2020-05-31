import { Injectable, Output, EventEmitter } from '@angular/core';
import { CvService } from './api/index';
import { ApiModule } from './api/index';

@Injectable()
export class AuthenticationService {

  authenticated = false;
  userName = undefined;

  @Output() authenticatedNotify = new EventEmitter<boolean>();

  constructor(
    private cvService: CvService
  ) { }

  login(userName: string, userPassword: string) {
    this.cvService.configuration.username = userName;
    this.cvService.configuration.password = userPassword;
    this.cvService.login(userName).subscribe(
      (response) => {
        this.authenticated = true;
        this.userName = userName;
        this.authenticatedNotify.emit(this.authenticated);
      },
      (error) => {
        this.authenticated = false;
        this.userName = undefined;
        this.authenticatedNotify.emit(this.authenticated);
      });
  }

  logout() {
    this.authenticated = false;
    this.userName = undefined;
    this.cvService.configuration.username = undefined;
    this.cvService.configuration.password = undefined;
  }

  getAuthenticationEventEmitter() {
    return this.authenticatedNotify;
  }

}
