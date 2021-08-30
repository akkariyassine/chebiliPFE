import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  data:any;
  dataCountry:any;
  dataState:any;
  speciality:any
  form: FormGroup = new FormGroup({}); // = new FormGroup;
  specialities:any
  doctor=new Doctor()
   submitted =false;
   email:any
   id:any
  constructor(  private formBuilder : FormBuilder, 
    private dataService :DataService, 
    private router:Router , private toastr: ToastrService , private route:ActivatedRoute) { }

    ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get('id');
    this.getDoctorbyid(this.id);
    this.createForm();
   
  }
  getDoctorbyid(id:any){
    this.dataService.getDoctorId(id).subscribe(res=>{
      this.data=JSON.parse(res);
      console.log(JSON.parse(res))
    })
  }
 
  get f(){
    return this.form.controls
  }
  createForm(){
    this.form=this.formBuilder.group({
      tarif:[null ,Validators.required],
     
     
     
    });
  }
  onSubmit() {
    this.submitted=true
    if (this.form.invalid)
    {
      return  console.log('erreur');;
    }
    
    this.dataService.updateDoctor(this.form.value, this.id).subscribe(res=>{
     this.data=res
     console.warn(this.form.value);
     
    if(this.data.status == 1){
      console.log('entrain de registrer')
      this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), {
        timeOut :2000,
       progressBar :true
      });this.router.navigate(['/doctor/register/stepsfive',this.data.data1.id])////,this.data.data1.id
      
      console.log('/doctor/register/stepsfive')
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

