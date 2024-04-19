import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './music/music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MusicComponent,
    WishlistComponent,
    HomepageComponent,
    HeadersComponent,
    FootersComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule, FontAwesomeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
