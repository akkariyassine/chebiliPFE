import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// Import library module
//import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgSelectModule } from '@ng-select/ng-select';

import { HomeComponent } from './components/home/home.component';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorRegisterComponent } from './components/Register_Doc/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorSearchComponent } from './components/doctor-search/doctor-search.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { ArticleComponent } from './components/Visitor/article/article.component';
import { TarifComponent } from './components/Visitor/tarif/tarif.component';
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
import { SocialMediaComponent } from './components/Doctor/social-media/social-media.component';
import { DashboardPaComponent } from './components/Patient/dashboard-pa/dashboard-pa.component';
import { FavoriteComponent } from './components/Patient/favorite/favorite.component';
import { ContactnowComponent } from './components/contactnow/contactnow.component';
import { AboutComponent } from './components/Visitor/about/about.component';
import { QuestionComponent } from './components/Visitor/question/question.component';
import { MyArticleComponent } from './components/Doctor/my-article/my-article.component';
import { DetailArticleComponent } from './components/Visitor/detail-article/detail-article.component';
import { CalendarComponent } from './components/Doctor/calendar/calendar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AppointmentsComponent } from './components/Admin/appointments/appointments.component';
import { SpecialitiesComponent } from './components/Admin/specialities/specialities.component';
import { DoctorsComponent } from './components/Admin/doctors/doctors.component';
import { PatientsComponent } from './components/Admin/patients/patients.component';
import { ProfileComponent } from './components/Admin/profile/profile.component';
import { ProfileSerachComponent } from './patient/profile-serach/profile-serach.component';
import { DoctorInfoComponent } from './components/Admin/doctor-info/doctor-info.component';
import { ArticlComponent } from './components/Admin/articl/articl.component';
import { PharmacieComponent } from './components/Visitor/pharmacie/pharmacie.component';
import { ArticleDoctorComponent } from './components/Admin/article-doctor/article-doctor.component';
import { NotvalidDoctorComponent } from './components/Admin/notvalid-doctor/notvalid-doctor.component';
import { BlacklistDoctorComponent } from './components/Admin/blacklist-doctor/blacklist-doctor.component';
import { CategoriesComponent } from './components/Admin/categories/categories.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { SettingsAdminComponent } from './components/Admin/settings-admin/settings-admin.component';
import { DoctorRegister2Component } from './components/Register_Doc/doctor-register2/doctor-register2.component';
import { EssaiComponent } from './components/Admin/essai/essai.component';
import { Step2Component } from './components/Register_Doc/step2/step2.component';
import { Step3Component } from './components/Register_Doc/step3/step3.component';
import { Step4Component } from './components/Register_Doc/step4/step4.component';
import { Step5Component } from './components/Register_Doc/step5/step5.component';
import { Step6Component } from './components/Register_Doc/step6/step6.component';
import { Step7Component } from './components/Register_Doc/step7/step7.component';
import { StepfinalComponent } from './components/Register_Doc/stepfinal/stepfinal.component';
import { GerecontactpageComponent } from './components/Admin/gerecontactpage/gerecontactpage.component';
import { GereAboutpageComponent } from './components/Admin/gere-aboutpage/gere-aboutpage.component';
import { BookingComponent } from './components/visitor/booking/booking.component';
import { ReserverComponent } from './components/visitor/reserver/reserver.component';
import { AdminPharmacieComponent } from './components/Admin/admin-pharmacie/admin-pharmacie.component';
import { HospitalComponent } from './components/Admin/hospital/hospital.component';
import { StaffComponent } from './components/Doctor/staff/staff.component';



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
        SocialMediaComponent,
        DashboardPaComponent,
        FavoriteComponent,
        ContactnowComponent,
        AboutComponent,
        QuestionComponent,
        MyArticleComponent,
        DetailArticleComponent,
        CalendarComponent,
        BreadcrumbComponent,
        AppointmentsComponent,
        SpecialitiesComponent,
        DoctorsComponent,
        PatientsComponent,
        ProfileComponent,
        ProfileSerachComponent,
        DoctorInfoComponent,
        ArticlComponent,
        PharmacieComponent,
        ArticleDoctorComponent,
        NotvalidDoctorComponent,
        BlacklistDoctorComponent,
        CategoriesComponent,
        LoginAdminComponent,
        SettingsAdminComponent,
        DoctorRegister2Component,
        EssaiComponent,
        Step2Component,
        Step3Component,
        Step4Component,
        Step5Component,
        Step6Component,
        Step7Component,
        StepfinalComponent,
        GerecontactpageComponent,
        GereAboutpageComponent,
        BookingComponent,
        ReserverComponent,
        AdminPharmacieComponent,
        HospitalComponent,
        StaffComponent,
       

   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule ,
    NgSelectModule,
     ReactiveFormsModule,
     HttpClientModule,
     NgbModule,
     Ng2SearchPipeModule, 
     Ng2OrderModule,
     NgxPaginationModule
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
