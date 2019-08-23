import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './dashboard/components/home/home.component';
import {RegisterComponent} from './dashboard/components/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatDialogModule,
  MatSelectModule, MatSnackBarModule, MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxCaptchaModule} from 'ngx-captcha';
import {CountUpModule} from 'countup.js-angular2';
import {ProfileCardComponent} from './dashboard/components/profile-card/profile-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MedaltallyComponent} from './dashboard/components/medaltally/medaltally.component';
import {FacebookComponent} from './dashboard/components/facebook/facebook.component';
import {FacebookCardComponent} from './dashboard/components/facebook-card/facebook-card.component';
import {NavbarComponent} from './dashboard/components/navbar/navbar.component';
import {TeamComponent} from './dashboard/components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileCardComponent,
    MedaltallyComponent,
    FacebookComponent,
    FacebookCardComponent,
    NavbarComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    NgxCaptchaModule,
    CountUpModule,
    FlexLayoutModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MedaltallyComponent]
})
export class AppModule {
}
