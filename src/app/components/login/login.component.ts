import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  form: FormGroup = new FormGroup({}); // = new FormGroup;
  submitted =false;
  data:any;
  token:any;
  role:any;
  userData:any;
  email:any;
  firstname:any;
  lastname:any;
  errors = null;

  constructor( private formBuilder : FormBuilder, 
                private http:HttpClient, 
                private dataService :DataService,
                private router:Router, 
              private authService:AuthService,
                private toastr: ToastrService,
               ){}


    loginForm(){
      this.form=this.formBuilder.group({
        
        email:['',[Validators.required,Validators.email]],
        password:['' ,[Validators.required ]],
      
      });
    }

    ngOnInit(): void {
      this.loginForm();
     this.token=localStorage.getItem('token');
      this.userData =jwt_decode(this.token);
      this.email=this.userData.email;
      this.role=this.userData.role;
    }
  
    get f(){
      return this.form.controls
    }
    

    onSubmiti() {
      this.submitted=true;
      if (this.form.invalid)
      {
        return ;
      }

      this.dataService.loginAll(this.form.value).subscribe(res=>{
        this.data=res
       console.log(res);
       console.warn(this.form.value);

       if(this.data.status === 1){
            if(this.data.data1.role=="doctor"){
              this.form.reset();
              this.router.navigate(['/doctor-dashboard',this.data.data1.id])//.id
            }
            if(this.data.data1.role=="patient"){
              this.router.navigate(['/home',this.data.data1.id])
            }
            if(this.data.data1.role=="admin"){
              this.router.navigate(['/articles',this.data.data1.id])
            }

         this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
         {
           timeOut :5000,
           progressBar :true
         });

       }
       else if (this.data.status === 0)
       {
         this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
         {
           timeOut :5000,
           progressBar :true
         });
       }
     });
    }
  
     // Handle response

     onSubmit() {
      this.submitted=true;
      if (this.form.invalid)
      {
        return ;
      }
      this.authService.login(this.form.value).subscribe(res=>{
        this.data=res
       console.log(res);
       console.warn(this.form.value);
      
       if(this.data.status === 1){
            if(this.data.data1.role=="doctor"){
              this.form.reset();
              this.router.navigate(['/doctor-dashboard'])//.id
            }
            if(this.data.data1.role=="patient"){
              this.router.navigate(['/home'])
            }
            if(this.data.data1.role=="admin"){
              this.router.navigate(['/articles'])
            }

         this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
         {
           timeOut :5000,
           progressBar :true
         });

       }
       else if (this.data.status === 0)
       {
         this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
         {
           timeOut :5000,
           progressBar :true
         });
       }
     });
    }
  

}