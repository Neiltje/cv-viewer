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
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
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
import { CvLoginComponent } from './cv-login/cv-login.component';
import { AuthenticationService } from './authentication.service';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
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
  declarations: [
     AppComponent,
     TopBarComponent,
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
     CvLoginComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    DataService,
    CvService,
    AuthenticationService
  ],
  entryComponents: [
    CvJsonComponent,
    CvLoginComponent
  ]
})
export class AppModule { }
