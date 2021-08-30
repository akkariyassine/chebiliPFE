import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import {config} from '../config/api.config';
//import {JwtHelper} from 'angular2-jwt';
import {tap} from 'rxjs/operators';
import { Doctor } from '../models/doctor';


// =============' KEY IN LOCALSTORAGE '==============
const TOKEN_KEY   = 'auth-token';
const USER_KEY    = 'auth-user';
const ROLES_KEY   = 'auth-roles';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  constructor(private http:HttpClient) { }

    registerDoctor(data:any){
    
      return this.http.post(environment.apiUrl+'/api/auth/registerDoctor', data, httpOptions);
    }
    updateDoctor(data:any, id:any){
      return this.http.put(environment.apiUrl+'/api/auth/updateDoctorr/'+id, data, httpOptions);
    }

    registerPatient(data:any){
    
      return this.http.post(environment.apiUrl+'/api/auth/registerPatient', data, httpOptions);
    }

    loginDoctor(data: any){
    
      return this.http.post(environment.apiUrl+'/api/auth/login/doctor', data/*, httpOptions*/);
    }

    loginUser(data: any){
    
      return this.http.post(environment.apiUrl+'/api/auth/login', data, httpOptions);}

    loginAll(data: any){
    
      return this.http.post(environment.apiUrl+'/api/login', data, httpOptions);
    }

    getCurrentDocotor(){
      return this.http.get(environment.apiUrl+'/api/doctor/get'/*, { responseType: 'text' }*/)
    }

    getallDoctorVisitor(){
      return this.http.get(environment.apiUrl+'/api/welcome/listDoctor' ,{ responseType: 'text' })
    }

    getPays(){
      return this.http.get(environment.apiUrl+'/api/Tabib/research/pays', { responseType: 'text' });
    }

    getGouvernorat(data: any){
    
      return this.http.post(environment.apiUrl+'/api/Tabib/research/gouvernorat', data, httpOptions);
    }
    
    getState(data: any){
    
      return this.http.post(environment.apiUrl+'/api/Tabib/research/delegation', data, httpOptions);
    }

    getSpeciality(){
      return this.http.get(environment.apiUrl+'/api/tabib/speciality', { responseType: 'text' });
    }
    getRDVtoDay(){
      return this.http.get(environment.apiUrl+'/api/doctor/getRDVToday', { responseType: 'text' });
    }
    getRDVupcomming(){
      return this.http.get(environment.apiUrl+'/api/doctor/getRdvUpComing', { responseType: 'text' });
    }
    getMyPatient(){
      return this.http.get(environment.apiUrl+'/api/doctor/getMyPatient', { responseType: 'text' });
    }
    
    getFavorites(){
      return this.http.get(environment.apiUrl+'/api/patient/showFavorite', { responseType: 'text' });
    }

    
    getdetailDoctor(id:number):Observable<[]> {
      return this.http.get<[]>(environment.apiUrl+'/api/Tabib/detail/'+{id} );
    }
    
    
   getDoctorbyId(id :number):Observable<[]> {
      return this.http.post<[]>(environment.apiUrl+'/api/getby', {id:id});
    }
    
    
    SendContact(data: any){
    
      return this.http.post(environment.apiUrl+'/api/doccure/Contacter', data, httpOptions);
    }

 getAbout(){
      return this.http.get(environment.apiUrl+'/api/doccure/GetAbout', { responseType: 'text' });
    }
  
    Commenter(data: any){
    
      return this.http.post(environment.apiUrl+'/api/question/Commenter', data, httpOptions);
    }
    
    getCommentaire(){
      return this.http.get(environment.apiUrl+'/api/question/getComment', { responseType: 'text' });
    }
    getReplyCommentaire(id:any){
      return this.http.get(environment.apiUrl+'/api/doctor/getreply/'+id, { responseType: 'text' });
    }
    cancelRDV(id:any){
      return this.http.post(environment.apiUrl+'/api/doctor/cancel-appointment/'+id,  httpOptions);
    }
    confirmRDV(id:any){
      return this.http.put(environment.apiUrl+'/api/doctor/validate-appointment/'+id,  httpOptions);
    }
    getAllRDVPatient(){
      return this.http.get(environment.apiUrl+'/api/doctor/RdvAllwithInfoPatient', { responseType: 'text' });
    }
    getAlldoctor(){
      return this.http.get(environment.apiUrl+'/api/Tabib/research/search', { responseType: 'text' });
    }
    getAllArticle(){
      return this.http.get(environment.apiUrl+'/api/doccure/GetValidateArticles', { responseType: 'text' });
    }

    getdetailArticle(id:any) {
      return this.http.get(environment.apiUrl+'/api/doccure/getArticlebyId/'+id );
    }
   
    getSearchDoctor(data :any){
      return this.http.post(environment.apiUrl+'/api/Tabib/search', data, httpOptions);
    }


    /******admin****/
                     /*********admin/speciality**************** */

    getallSpecialities(){
      return this.http.get(environment.apiUrl+'/api/admin/geSpeciality', { responseType: 'text' });
    }

    AddSpeciality(data :any){
      return this.http.post(environment.apiUrl+'/api/admin/addSpeciality', data, httpOptions);
    }
    DeleteSpeciality(id:any){
      return this.http.delete(environment.apiUrl+'/api/admin/deleteSpeciality/'+id,  httpOptions);
    }
    
    EditeSpeciality(id:any, data:any){
      return this.http.put(environment.apiUrl+'/api/admin/updateSpeciality/'+id, data, httpOptions);
    }
    getSpecialityById(id:any){
      return this.http.get(environment.apiUrl+'/api/admin/getSpeciality/'+id, { responseType: 'text' });
    }
                      /*******admin/profile*********** */
    getProfile(){
      return this.http.get(environment.apiUrl+'/api/admin/getProfile', { responseType: 'text' });
    }
    changeAdminPassword(data:any){
      return this.http.put(environment.apiUrl+'/api/admin/changepassword', data, httpOptions);
    }
    updateAboutAdmin(data:any){
      return this.http.post(environment.apiUrl+'/api/admin/UpadetAboutAdmin', data, httpOptions);
    }
    updateabout(data:any){
      return this.http.put(environment.apiUrl+'/api/admin/updateAbout', data, httpOptions)
    }
    updateprofileAdmin(data:any){
      return this.http.post(environment.apiUrl+'/api/admin/UpadetPersonalAdmin', data, httpOptions);
    }
    getAppointment(){
      return this.http.get(environment.apiUrl+'/api/admin/getAppointment', { responseType: 'text' });
    }
    getpatient(){
      return this.http.get(environment.apiUrl+'/api/admin/getallPatient', { responseType: 'text' });
    }
    
                           /****admin/doctor*/
    getAllDoctor(){
      return this.http.get(environment.apiUrl+'/api/admin/getAllDoctor', { responseType: 'text' });
    }
    getDoctorId(id:any){
      return this.http.get(environment.apiUrl+'/api/admin/getDoctorById/'+id, { responseType: 'text' });
    }
    getAllValidDoctors(){
      return this.http.get(environment.apiUrl+'/api/admin/getValidDocotr', { responseType: 'text' });
    }
    getNotValidDoctors(){
      return this.http.get(environment.apiUrl+'/api/admin/getNotValidDocotr', { responseType: 'text' });
    }
 
  gethistoriqueDoctors(id:any){
    return this.http.get(environment.apiUrl+'/api/admin/HistoriqueDoctor/'+id, { responseType: 'text' });
  }
  validateDoctor(id:any){
      return this.http.put(environment.apiUrl+'/api/admin/ValidateDoctor/'+id, httpOptions);
    }
  CancelDoctor(id:any){
      return this.http.put(environment.apiUrl+'/api/admin/AnnulerDoctor/'+id,  httpOptions);
    }
 ActivateDoctorAccount(id:any){
      return this.http.put(environment.apiUrl+'/api/admin/activate/'+id, httpOptions);
    }
    getBlackListDoctor(){
      return this.http.get(environment.apiUrl+'/api/admin/getBlackListDoctor', { responseType: 'text' });
    }
    
                        /********admin/articles***********/
    getAllArticles(){
      return this.http.get(environment.apiUrl+'/api/admin/GetArticles', { responseType: 'text' });
    }
    getArticleById(id:any){
      return this.http.get(environment.apiUrl+'/api/admin/GetArticleByID/'+id, { responseType: 'text' });
    }
    getAdminArticles(){
      return this.http.get(environment.apiUrl+'/api/admin/GetAdminArticles', { responseType: 'text' });
    }
    getDoctorArticles(){
      return this.http.get(environment.apiUrl+'/api/admin/GetDoctorArticles', { responseType: 'text' });
    }
    AddArticles(data :any){
      return this.http.post(environment.apiUrl+'/api/admin/AddArticles', data, httpOptions);
    }
    EditArticle(id:any,data:any){
      return this.http.put(environment.apiUrl+'/api/admin/EditArticle/'+id, data, httpOptions);
    }
    deleteArticle(id:any){
      return this.http.delete(environment.apiUrl+'/api/admin/deletearticle/'+id, httpOptions);
    }
    ValidateArticle(id:any){
      return this.http.put(environment.apiUrl+'/api/admin/ValidateArtcile/'+id,  httpOptions);
    }
    GetNotValidArticle(){
      return this.http.get(environment.apiUrl+'/api/admin/GetNotValidArticle', { responseType: 'text' });
    }
    getContact(){
      return this.http.get(environment.apiUrl+'/api/admin/getContact', { responseType: 'text' });
    }
    getContactId(id:any){
      return this.http.get(environment.apiUrl+'/api/admin/getContactbyId/'+id, { responseType: 'text' });
    }
    getCategorie(){
      return this.http.get(environment.apiUrl+'/api/admin/geCategorie', { responseType: 'text' });
    }
    addCategorie(data:any){
      return this.http.post(environment.apiUrl +'admin/addCategorie', data,httpOptions);
    }
    editerCategorie(data:any, id:any){
      return this.http.put(environment.apiUrl+'/api/admin/ValidateArtcile/'+id,data,  httpOptions);
    }
    deleteCategorie( id:any){
      return this.http.delete(environment.apiUrl+'/api/admin/deleteCategorie/'+id, httpOptions);
    }


    AddPharmacie(data:any){
      return this.http.post(environment.apiUrl +'/api/admin/addPharmacie', data,httpOptions);
    }
    Editepharmacie(id:any, data:any){
      return this.http.put(environment.apiUrl+'/api/admin/EditPharmacie/'+id,data,  httpOptions);
    }
    Deletepharmacie( id:any){
      return this.http.delete(environment.apiUrl+'/api/admin/deletePharmacie/'+id, httpOptions);
    }
    getAllPharmacie(){
      return this.http.get(environment.apiUrl+'/api/admin/getAllPharmacie', { responseType: 'text' });
    }
    getbyPharmacie(id:any){
      return this.http.get(environment.apiUrl+'/api/admin/getPharmacieById/'+id, { responseType: 'text' });
    }


    Addhospital(data:any){
      return this.http.post(environment.apiUrl +'/api/admin/addHospital', data,httpOptions);
    }
    Editehospital(id:any, data:any){
      return this.http.put(environment.apiUrl+'/api/admin/EditHospital/'+id,data,  httpOptions);
    }
    Deletehospital( id:any){
      return this.http.delete(environment.apiUrl+'/api/admin/deleteHospital/'+id, httpOptions);
    }
    getAllhospital(){
      return this.http.get(environment.apiUrl+'/api/admin/getAllHospital', { responseType: 'text' });
    }
    getbyhospital(id:any){
      return this.http.get(environment.apiUrl+'/api/admin/getHospitalById/'+id, { responseType: 'text' });
    }
    

/*************************************doctor********************** */
/************************shedule */
  getMyshedule(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetSchedule', { responseType: 'text' });
  }
  getshedulebymonday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleBymonday',  { responseType: 'text' });

  }
  getshedulebytuesday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleBytuesday',  { responseType: 'text' });
  }
  getshedulebywednesday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleBywednesday',  { responseType: 'text' });
  }
  getshedulebythirsday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleBythursday',  { responseType: 'text' });
  }
  getshedulebyfriday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleByfriday',  { responseType: 'text' });
  }
  getshedulebysaturday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleBysaturday',  { responseType: 'text' });
  }
  getshedulebysunday(){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleBysunday',  { responseType: 'text' });
  }
  deleteSlot1(id:any){
    return this.http.put(environment.apiUrl+'/api/doctor/DeleteShedduleSlot1/'+id,  httpOptions);
  }
  deleteSlot2(id:any){
    return this.http.put(environment.apiUrl+'/api/doctor/DeleteShedduleSlot2/'+id,  httpOptions);
  }
  addSlot(id:any, data:any/*, day:any*/){
    return this.http.put(environment.apiUrl+'/api/doctor/AddScheduleByDay/'+id, data,httpOptions);
  }
  getDaybyId(id:any){
    return this.http.get(environment.apiUrl+'/api/doctor/GetScheduleByid/'+id,  { responseType: 'text' });
  }
  updateSlot(id:any, data:any){
    return this.http.put(environment.apiUrl+'/api/doctor/updateScheduleById/'+id,data,  httpOptions);
  }
  getcountappointments(){
    return this.http.get(environment.apiUrl+'/api/Doctor/CountAppointment',  { responseType: 'text' });
  }
  getcountpatients(){
    return this.http.get(environment.apiUrl+'/api/Doctor/CountPatients',  { responseType: 'text' });
  }
}
