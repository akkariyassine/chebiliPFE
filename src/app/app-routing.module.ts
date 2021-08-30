import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './components/Admin/appointments/appointments.component';
import { ArticlComponent } from './components/Admin/articl/articl.component';
import { ArticleDoctorComponent } from './components/Admin/article-doctor/article-doctor.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { DoctorInfoComponent } from './components/Admin/doctor-info/doctor-info.component';
import { DoctorsComponent } from './components/Admin/doctors/doctors.component';
import { PatientsComponent } from './components/Admin/patients/patients.component';
import { ProfileComponent } from './components/Admin/profile/profile.component';
import { SpecialitiesComponent } from './components/Admin/specialities/specialities.component';
import { ArticleComponent } from './components/Visitor/article/article.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorRegisterComponent } from './components/Register_Doc/doctor-register/doctor-register.component';
import { DoctorSearchComponent } from './components/doctor-search/doctor-search.component';
import { CalendarComponent } from './components/Doctor/calendar/calendar.component';
import { ChangePasswordComponent } from './components/Doctor/change-password/change-password.component';
import { DashboardDocComponent } from './components/Doctor/dashboard-doc/dashboard-doc.component';
import { InvoicesComponent } from './components/Doctor/invoices/invoices.component';
import { MyArticleComponent } from './components/Doctor/my-article/my-article.component';
import { MyPatientComponent } from './components/Doctor/my-patient/my-patient.component';
import { ProfileSettingComponent } from './components/Doctor/profile-setting/profile-setting.component';
import { RendezVousDocComponent } from './components/Doctor/rendez-vous-doc/rendez-vous-doc.component';
import { SocialMediaComponent } from './components/Doctor/social-media/social-media.component';
import { TimesDocComponent } from './components/Doctor/times-doc/times-doc.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { Page404Component } from './components/page404/page404.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { DashboardPaComponent } from './components/Patient/dashboard-pa/dashboard-pa.component';
import { FavoriteComponent } from './components/Patient/favorite/favorite.component';
import { TarifComponent } from './components/Visitor/tarif/tarif.component';
import { TestComponent } from './components/test/test.component';
import { AboutComponent } from './components/Visitor/about/about.component';
import { DetailArticleComponent } from './components/Visitor/detail-article/detail-article.component';
import { PharmacieComponent } from './components/Visitor/pharmacie/pharmacie.component';
import { QuestionComponent } from './components/Visitor/question/question.component';
import { newAuthGuard } from './guards/newAuth.guard';
import { NotvalidDoctorComponent } from './components/Admin/notvalid-doctor/notvalid-doctor.component';
import { BlacklistDoctorComponent } from './components/Admin/blacklist-doctor/blacklist-doctor.component';
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
import { CategoriesComponent } from './components/Admin/categories/categories.component';
import { ReserverComponent } from './components/reserver/reserver.component';
import { AdminPharmacieComponent } from './components/Admin/admin-pharmacie/admin-pharmacie.component';
import { HospitalComponent } from './components/Admin/hospital/hospital.component';
import { StaffComponent } from './components/Doctor/staff/staff.component';




const routes: Routes = [

 { path: 'home', component: HomeComponent },
 //{ path: '', pathMatch:'full', redirectTo:'/home' },
 { path: 'login', component: LoginComponent},
 { path: 'new', component: NewComponent},
 { path: 'doctor-register', component: DoctorRegisterComponent},
 { path: 'doctor/register/steps/:id', component: DoctorRegister2Component},
 { path: 'doctor/register/stepstwo/:id', component: Step2Component},
 { path: 'doctor/register/stepstwo/:id', component: Step2Component},
 { path: 'doctor/register/stepsthree/:id', component: Step3Component},
 { path: 'doctor/register/stepsfour/:id', component: Step4Component},
 { path: 'doctor/register/stepsfive/:id', component: Step5Component},
 { path: 'doctor/register/stepsSix/:id', component: Step6Component},
 { path: 'doctor/register/stepsSeven/:id', component: Step7Component},
 { path: 'doctor/register/stepsfinal', component: StepfinalComponent},

 { path: 'patient-register', component: PatientRegisterComponent},
 { path: 'search-Doctor', component: DoctorSearchComponent},
 { path: 'search-Doctor/booking', component: ReserverComponent},
 { path: 'search-Pharmacie', component: PharmacieComponent},
 { path: 'doctor-profile/:id', component: DoctorProfileComponent},
 { path: 'about/:formm', component: AboutComponent},
 { path: 'articles', component: ArticleComponent},

 { path: 'articles/detail-article/:id', component: DetailArticleComponent},
 //{ path: 'articles/detail-article', component: DetailArticleComponent},
 { path: 'calendar', component: CalendarComponent},

 { path: 'tarif', component: TarifComponent},
 { path: 'contact-us', component: ContactUsComponent},
 { path: 'test', component: TestComponent},
 { path: 'about', component: AboutComponent},
 //{ path: 'admin-dashboard', component: DashboardComponent},
 { path: 'doctor-dashboard', component: DashboardDocComponent},
 { path: 'rendez-vous', component: RendezVousDocComponent},
 { path: 'my-patients', component: MyPatientComponent},
 { path: 'social', component: SocialMediaComponent},
 { path: 'shedule-Timings', component: TimesDocComponent},
 { path: 'invoices', component: InvoicesComponent},
 { path: 'question', component: QuestionComponent},
 { path: 'profile-setting', component: ProfileSettingComponent},
 { path: 'change-password', component: ChangePasswordComponent},
 { path: 'patient-dashboard', component: DashboardPaComponent},
 { path: 'favorite', component: FavoriteComponent},
 { path: 'doctor/myArticle', component: MyArticleComponent},
 { path: 'doctor/staff', component: StaffComponent},

 { path: 'admin/dashboard', component: DashboardComponent},
 { path: 'admin/appointments', component: AppointmentsComponent},
 { path: 'admin/specialities', component: SpecialitiesComponent},
 { path: 'admin/pharmacies', component: AdminPharmacieComponent},
 { path: 'admin/hospitals', component: HospitalComponent},

 { path: 'admin/doctors', component: DoctorsComponent},
 { path: 'admin/doctors/notvaliddoctors', component: NotvalidDoctorComponent},
 { path: 'admin/doctors/blackListDoctor', component: BlacklistDoctorComponent},
 { path: 'admin/patients', component: PatientsComponent},
 { path: 'admin/profile', component: ProfileComponent},
 { path: 'admin/login', component: LoginAdminComponent},
 { path: 'admin/doctor/info_doctor/:id', component: DoctorInfoComponent},
 { path: 'admin/articles', component: ArticlComponent},
 { path: 'admin/doctorarticles', component: ArticleDoctorComponent},
 { path: 'admin/settings', component: SettingsAdminComponent},
 { path: 'admin/essai', component: EssaiComponent},
 { path: 'admin/contactpage', component: GerecontactpageComponent},
 { path: 'admin/aboutpage', component: GereAboutpageComponent},
 { path: 'admin/categorie', component: CategoriesComponent},

 
 { path: '**', component: Page404Component},
 
 

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
