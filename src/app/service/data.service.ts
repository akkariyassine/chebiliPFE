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

    getallDoctor(){
      return this.http.get(environment.apiUrl+'/api/welcome/listDoctor' /*,{ responseType: 'text' }*/)
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
    
    getDoctorbyId(id :number):Observable<[]> {
      return this.http.post<[]>(environment.apiUrl+'/api/getby', {id:id});
    }

    
}
