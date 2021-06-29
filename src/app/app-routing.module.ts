import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { ArticleComponent } from './components/article/article.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { DoctorSearchComponent } from './components/doctor-search/doctor-search.component';
import { ChangePasswordComponent } from './components/Doctor/change-password/change-password.component';
import { DashboardDocComponent } from './components/Doctor/dashboard-doc/dashboard-doc.component';
import { InvoicesComponent } from './components/Doctor/invoices/invoices.component';
import { MyPatientComponent } from './components/Doctor/my-patient/my-patient.component';
import { ProfileSettingComponent } from './components/Doctor/profile-setting/profile-setting.component';
import { RendezVousDocComponent } from './components/Doctor/rendez-vous-doc/rendez-vous-doc.component';
import { TimesDocComponent } from './components/Doctor/times-doc/times-doc.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { Page404Component } from './components/page404/page404.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { TestComponent } from './components/test/test.component';
import { newAuthGuard } from './guards/newAuth.guard';



const routes: Routes = [

 { path: 'home', component: HomeComponent },
 { path: '', pathMatch:'full', redirectTo:'/home' },
 { path: 'login', component: LoginComponent},
 { path: 'new', component: NewComponent},

 { path: 'doctor-register', component: DoctorRegisterComponent},
 { path: 'patient-register', component: PatientRegisterComponent},
 { path: 'search-Doctor', component: DoctorSearchComponent},
 { path: 'doctor-profile', component: DoctorProfileComponent},
 { path: 'articles', component: ArticleComponent},
 { path: 'tarif', component: TarifComponent},
 { path: 'contact-us', component: ContactUsComponent},
 { path: 'test', component: TestComponent},
 { path: 'admin-dashboard', component: DashboardComponent},
 { path: 'doctor-dashboard', component: DashboardDocComponent},
 { path: 'rendez-vous', component: RendezVousDocComponent},
 { path: 'my-patients', component: MyPatientComponent},
 { path: 'shedule-Timings', component: TimesDocComponent},
 { path: 'invoices', component: InvoicesComponent},
 { path: 'profile-setting', component: ProfileSettingComponent},
 { path: 'change-password', component: ChangePasswordComponent},
 { path: '**', component: Page404Component},


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
