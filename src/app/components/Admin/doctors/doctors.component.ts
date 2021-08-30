import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
doctors:any
data:any
p:any
histoire:any
  constructor( public router: Router,
    public activerouteur:ActivatedRoute,
    public dataservice:DataService,
    config: NgbModalConfig, 
    private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
this.getDoctors();
  }

getDoctors(){
this.dataservice.getAllValidDoctors().subscribe(res=>
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
 gotoblacklist(){
  this.router.navigate(['admin/doctors/blackListDoctor']);
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


 showDetail(mod:any, id:any){
   this.getHistorique(id);
  this.modalService.open(mod);
}
getHistorique(id:any){
  this.dataservice.gethistoriqueDoctors(id).subscribe(res=>{
    this.histoire=JSON.parse(res)
  })
}
desactiver(id:any){
this.dataservice.ActivateDoctorAccount(id).subscribe(res=>{
  this.data=res
  if(this.data.status == 1){
    this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
    this.ngOnInit();
    this.modalService.dismissAll();
  }
  else{
    this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
  }
})
}
}
