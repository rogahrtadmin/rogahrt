import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DiseaseComponent } from './disease/disease.component';
import { ViewComponent } from './view/view.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { PricingComponent } from './pricing/pricing.component';
import { UserRegistationService } from './user-registation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SerachDeleteComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    PrescriptionComponent,
    ViewComponent,
    DiseaseComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserRegistationService,
  ViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
