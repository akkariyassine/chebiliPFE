import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/confirmed.validator';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  data:any;
  dataCountry:any;
  dataState:any;
  form: FormGroup = new FormGroup({}); // = new FormGroup;
   submitted =false;

  constructor(private formBuilder : FormBuilder, 
      private http:HttpClient, 
      private dataService :DataService, 
      private router:Router , private toastr: ToastrService
      ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form=this.formBuilder.group({
      firstname:[null ,Validators.required],
      lastname: [null ,Validators.required],
      objet: [null ,Validators.required],
      email:['',[Validators.required,Validators.email]],
      msg: [null ,Validators.required],
     
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
      
      this.dataService.SendContact(this.form.value).subscribe(res=>{
       this.data=res
       console.log('jkl');
       console.warn(this.form.value);
       this.submitted =false;
      this.form.reset();
    
      });
  }

}
