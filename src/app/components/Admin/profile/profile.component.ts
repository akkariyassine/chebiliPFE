import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/confirmed.validator';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any
data:any
form: FormGroup = new FormGroup({});
form2: FormGroup = new FormGroup({});
form3: FormGroup = new FormGroup({});

submitted =false;

constructor( private dataservice: DataService,private formBuilder : FormBuilder,
  config: NgbModalConfig, private router:Router,  

  private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProfileData();
    this.createForm2();
    this.createForm();
    this.createForm3();
  }

  getProfileData(){
    this.dataservice.getProfile().subscribe(res=>{
      this.profile=JSON.parse(res);
      console.log(JSON.parse(res))
    })
  }
  /*****************edit about */
  createForm(){
    this.form=this.formBuilder.group({
     
      about: [null ,Validators.required],
     
    });
  }
  get f(){
    return this.form.controls
  }
  Editabout(){
    this.submitted=true
    if (this.form.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.updateAboutAdmin(this.form.value).subscribe(res=>{
          this.data=res
          if(this.data.status == 1){
            this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
            this.submitted =false;
            this.form.reset();
            this.ngOnInit();
            this.modalService.dismissAll();
           // this.router.navigate(['/admin/specialities'])
          }
          else{
            this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
          }
          
        
          });
    }
  }

  Edit(mod:any){
   this.modalService.open(mod);
  
  }
  /**************************Edit personal profile********************************* */
  createForm3(){
    this.form3=this.formBuilder.group({
      firstname: [null ,Validators.required],
      lastname: [null ,Validators.required],
      cin: [null ,Validators.required],
      date_birth: [null ,Validators.required],
      phone: [null ,Validators.required],
      address: [null ,Validators.required],
      pays: [null ,Validators.required],
      ville: [null ,Validators.required],
      gouvernerat: [null ,Validators.required],
      code_postale: [null ,Validators.required],
      email:['',[Validators.required,Validators.email]],
      
     
    });
  }
  get f3(){
    return this.form3.controls
  }
  EditPersonalprofile(){
    this.submitted=true
    if (this.form3.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.updateprofileAdmin(this.form3.value).subscribe(res=>{
          this.data=res
          if(this.data.status == 1){
            this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
            this.submitted =false;
            this.form3.reset();
            this.ngOnInit();
            this.modalService.dismissAll();
           // this.router.navigate(['/admin/specialities'])
          }
          else{
            this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
          }
          
        
          });
    }
  }

  EditPersonal(mod:any){
   this.modalService.open(mod);
  
  }

  /*********************Change Password */
  createForm2(){
    this.form2=this.formBuilder.group({
      old_password:['' ,[Validators.required , Validators.minLength(6)]],
      new_password:['' ,[Validators.required , Validators.minLength(6)]],
      passwordconfirmation :['' ,Validators.required ],
      
    },{
      validator : MustMatch('new_password', 'passwordconfirmation')
  
    });
  }
 
get f2(){
  return this.form2.controls
}


  changepassword(){
    this.submitted=true
    if (this.form2.invalid) {return  console.log('erreur'); }
    else{
       
        this.dataservice.changeAdminPassword(this.form2.value).subscribe(res=>{
          this.data=res
          if(this.data.status == 1){
            this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
            this.submitted =false;
            this.form2.reset();
          }
          else{
            this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
          }
          
        
          });
    }
  
    
  }
 


}
