import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { CvTopBarComponent } from './cv-top-bar/cv-top-bar.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { CvEducationComponent } from './cv-education/cv-education.component';
import { CvSkillsComponent } from './cv-skills/cv-skills.component';
import { CvEmploymentComponent } from './cv-employment/cv-employment.component';
import { CvInterestsComponent } from './cv-interests/cv-interests.component';
import { CvSummaryComponent } from './cv-summary/cv-summary.component';
import { CvBottomBarComponent } from './cv-bottom-bar/cv-bottom-bar.component';
import { CvHeadingComponent } from './cv-heading/cv-heading.component';
import { CallbackPipe } from './callback.pipe';
import { OrderByPipe } from './order-by.pipe';
import { OrderByDatePipe } from './order-by-date.pipe';
import { CvStarsComponent } from './cv-stars/cv-stars.component';
import { DataService } from './data.service';
import { DatePickerComponent } from './common/datepicker/datepicker.component';
import { CvJsonComponent } from './cv-json/cv-json.component'

import { CvService } from './api/index';
import { UserService } from './api/index';
import { CvLoginComponent } from './cv-login/cv-login.component';
import { AuthenticationService } from './authentication.service';
import { CvUserCreateComponent } from './cv-user-create/cv-user-create.component';
import { UserDetailsService } from './user-details.service';
import { CvUserPasswordComponent } from './cv-user-password/cv-user-password.component';
import { CvUserRolesComponent } from './cv-user-roles/cv-user-roles.component';
import { CvUserDeleteComponent } from './cv-user-delete/cv-user-delete.component';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    ClipboardModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CvListComponent },
      { path: 'cvs/:cvName', component: CvComponent }
    ])
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
  ],
  declarations: [
     AppComponent,
     CvTopBarComponent,
     CvListComponent,
     CvComponent,
     CvEducationComponent,
     CvSkillsComponent,
     CvEmploymentComponent,
     CvInterestsComponent,
     CvSummaryComponent,
     CvBottomBarComponent,
     CvHeadingComponent,
     CallbackPipe,
     OrderByPipe,
     OrderByDatePipe,
     CvStarsComponent,
     DatePickerComponent,
     CvJsonComponent,
     CvLoginComponent,
     CvUserCreateComponent,
     CvUserPasswordComponent,
     CvUserRolesComponent,
     CvUserDeleteComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    DataService,
    CvService,
    UserService,
    AuthenticationService,
    UserDetailsService
  ],
  entryComponents: [
    CvJsonComponent,
    CvLoginComponent,
    CvUserCreateComponent,
    CvUserPasswordComponent,
    CvUserRolesComponent,
    CvUserDeleteComponent
  ]
})
export class AppModule { }
