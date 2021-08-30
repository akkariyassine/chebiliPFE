import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-notvalid-doctor',
  templateUrl: './notvalid-doctor.component.html',
  styleUrls: ['./notvalid-doctor.component.css']
})
export class NotvalidDoctorComponent implements OnInit {
  doctors:any
  data:any
  p:any
    constructor(private dataservice: DataService, private router: Router, private toastr: ToastrService) { }
  
    ngOnInit(): void {
  this.getnotValidDoctors();
    }
  
  getnotValidDoctors(){
  this.dataservice.getNotValidDoctors().subscribe(res=>
   { this.doctors=JSON.parse(res);
    console.log(JSON.parse(res))
    })
   }
   GoInfoDoctor(id:any){
    this.router.navigate(['admin/doctor/info_doctor', id]);
   }
  
   GoProfileDoctor(id:any){
    this.router.navigate(['doctor-profile/', id]);
   }
  
   validate(id:any){
     this.dataservice.validateDoctor(id).subscribe(res=>{
        this.data=res 
        if(this.data.status == 1){
          this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
          this.ngOnInit();
         
        }
        else{
          this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
        }
     })
   }
   Cancel(id:any){
    this.dataservice.CancelDoctor(id).subscribe(res=>{
       this.data=res 
       if(this.data.status == 1){
         this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
         this.ngOnInit();
        
       }
       else{
         this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
       }
    })
  }


  }
  