import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Import library module
//import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './components/home/home.component';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorSearchComponent } from './components/doctor-search/doctor-search.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { ArticleComponent } from './components/article/article.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { DashboardDocComponent } from './components/Doctor/dashboard-doc/dashboard-doc.component';
import { RendezVousDocComponent } from './components/Doctor/rendez-vous-doc/rendez-vous-doc.component';
import { MyPatientComponent } from './components/Doctor/my-patient/my-patient.component';
import { TimesDocComponent } from './components/Doctor/times-doc/times-doc.component';
import { InvoicesComponent } from './components/Doctor/invoices/invoices.component';
import { ProfileSettingComponent } from './components/Doctor/profile-setting/profile-setting.component';
import { ChangePasswordComponent } from './components/Doctor/change-password/change-password.component';
import { NewComponent } from './components/new/new.component';
import { Page404Component } from './components/page404/page404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from 'src/interceptor/TokenInterceptor';



@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
        HeaderComponent,
        TestComponent,
        LoginComponent,
        DoctorRegisterComponent,
        PatientRegisterComponent,
        FooterComponent,
        DoctorSearchComponent,
        DoctorProfileComponent,
        ArticleComponent,
        TarifComponent,
        ContactUsComponent,
        DashboardComponent,
        DashboardDocComponent,
        RendezVousDocComponent,
        MyPatientComponent,
        TimesDocComponent,
        InvoicesComponent,
        ProfileSettingComponent,
        ChangePasswordComponent,
        NewComponent,
        Page404Component,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule ,
     ReactiveFormsModule,
     HttpClientModule,
     NgbModule,
    // NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
