import { Component, OnInit } from '@angular/core';
import { from} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MustMatch} from '../../confirmed.validator';
import{DataService} from 'src/app/service/data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router}  from'@angular/router';
import { enableRipple } from '@syncfusion/ej2-base';
import { Ajax } from '@syncfusion/ej2-base';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  data:any;
  dataCountry:any;
  dataState:any;
  form: FormGroup = new FormGroup({}); // = new FormGroup;
  patient=new Patient();
   submitted =false;
    constructor(private formBuilder : FormBuilder, 
      private http:HttpClient, 
      private dataService :DataService, 
      private router:Router , private toastr: ToastrService
      ) { }
  
    ngOnInit(): void {
  
      this.getCountry();
      this.createForm();
      
    }
    getCountry(){
      this.dataService.getPays().subscribe(res=>{
        this.dataCountry=res
        console.log(this.dataCountry=res)   ;
      })
    }
   
    getGouvernorat(e:any){
      console.log( e.target.value,)
      var obj={
        name_pays: e.target.value,
      }
          this.dataService.getGouvernorat(obj).subscribe(res=>{
            this.dataState=res;
            console.log(res);
          });
           console.log("country change")
    }
    
    createForm(){
      this.form=this.formBuilder.group({
        firstname:[null ,Validators.required],
        lastname: [null ,Validators.required],
        age:[null ,Validators.required],
        phone: [null ,Validators.required],
        genre:[null ,Validators.required],
        address:[null ,Validators.required],
        pays:[null ,Validators.required],
        gouvernorat:[null ,Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['' ,[Validators.required , Validators.minLength(6)]],
        passwordconfirmation :['' ,Validators.required ],
        
      },{
        validator : MustMatch('password', 'passwordconfirmation')
  
      });
    }
  
    get f(){
      return this.form.controls
    }
    
    onSubmit() {
      this.submitted=true
      if (this.form.invalid)
      {
        return  console.log('erreur');;
      }
      
      this.dataService.registerPatient(this.form.value).subscribe(res=>{
       this.data=res
       console.log('jkl');
       console.warn(this.form.value);
       this.router.navigate(['/tab']);
      if(this.data.status == 1){
        console.log('entrain de registrer')
        this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), {
          timeOut :2000,
         progressBar :true
        });
      }
      else{
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut : 5000,
          progressBar :true
        });
      }
      this.submitted =false;
      this.form.reset();
    
      });
    }
  
  
}



