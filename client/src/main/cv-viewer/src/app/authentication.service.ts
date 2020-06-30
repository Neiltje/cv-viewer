import { Injectable, Output, EventEmitter } from '@angular/core';
import { CvService } from './api/index';
import { UserService } from './api/index';
import { ApiModule } from './api/index';

@Injectable()
export class AuthenticationService {

  authenticated = false;
  userName = undefined;
  userRoles: string[];

  @Output() authenticatedNotify = new EventEmitter<boolean>();

  constructor(
    private cvService: CvService,
    private userService: UserService
  ) { }

  login(userName: string, userPassword: string) {
    this.userService.configuration.username = userName;
    this.userService.configuration.password = userPassword;
    this.userService.login(userName).subscribe(
      (response) => {
        this.authenticated = true;
        this.userName = userName;
        this.userRoles = response;
        this.cvService.configuration.username = userName;
        this.cvService.configuration.password = userPassword;
        this.authenticatedNotify.emit(this.authenticated);
      },
      (error) => {
        this.authenticated = false;
        this.userName = undefined;
        this.userRoles = undefined;
        this.authenticatedNotify.emit(this.authenticated);
      });
  }

  isAdmin() {
    return this.userRoles.indexOf("ROLE_ADMIN") > -1;
  }

  logout() {
    this.authenticated = false;
    this.userName = undefined;
    this.cvService.configuration.username = undefined;
    this.cvService.configuration.password = undefined;
    this.userService.configuration.username = undefined;
    this.userService.configuration.password = undefined;
  }

  getAuthenticationEventEmitter() {
    return this.authenticatedNotify;
  }

}
