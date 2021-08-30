import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/confirmed.validator';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {
  data:any;
  dataCountry:any;
  dataState:any;
  speciality:any
  form: FormGroup = new FormGroup({}); // = new FormGroup;
  //patient=new Patient();
  doctor=new Doctor()
   submitted =false;
    constructor(private formBuilder : FormBuilder, 
      
      private dataService :DataService, 
      private router:Router , private toastr: ToastrService
      ) { }
  
    ngOnInit(): void {
  
      this.getCountry();
      this.createForm();
      this.getSpeciality();
      
    }
    getCountry(){
      this.dataService.getPays().subscribe(res=>{
        this.dataCountry=JSON.parse(res)
        console.log(JSON.parse(res) )  ;
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
        firstname_doc:[null ,Validators.required],
        lastname_doc: [null ,Validators.required],
        principale_speciality: [null ,Validators.required],
        phone_mobile: [null ,Validators.required],
        address:[null ,Validators.required],
        pays:[null ,Validators.required],
        delegation:[null ,Validators.required],
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
      
      this.dataService.registerDoctor(this.form.value).subscribe(res=>{
       this.data=res
       console.warn(this.form.value);
      
      if(this.data.status == 1){
        this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), {
          timeOut :2000,
         progressBar :true
        });
        this.router.navigate(['/doctor/register/steps',this.data.data1.id])////,this.data.data1.id
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

    getSpeciality(){
      this.dataService.getSpeciality().subscribe(res=>{
        this.speciality=JSON.parse(res)
      })
    }


  
    
  
  
}





