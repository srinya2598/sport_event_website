import {
  MatAutocompleteModule,
  MatCardModule,
  MatChipsModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatSelectModule, MatSnackBarModule, MatTableModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/dashboard/components/home/home.component';
import { RegisterComponent } from './app/dashboard/components/register/register.component';
import { ProfileCardComponent } from './app/dashboard/components/profile-card/profile-card.component';
import { MedaltallyComponent } from './app/dashboard/components/medaltally/medaltally.component';
import { FacebookComponent } from './app/dashboard/components/facebook/facebook.component';
import { FacebookCardComponent } from './app/dashboard/components/facebook-card/facebook-card.component';
import { NavbarComponent } from './app/dashboard/components/navbar/navbar.component';
import { TeamComponent } from './app/dashboard/components/team/team.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CountUpModule } from 'countup.js-angular2';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [

  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatDialogModule,
  MatMenuModule,
  MatTableModule
];


@NgModule({
  declarations: [],
  imports: [...MODULES
  ],
  exports: [...MODULES]
})
export class MaterialModule {
}
