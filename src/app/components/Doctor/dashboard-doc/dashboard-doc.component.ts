import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-dashboard-doc',
  templateUrl: './dashboard-doc.component.html',
  styleUrls: ['./dashboard-doc.component.css']
})
export class DashboardDocComponent implements OnInit {
  isLoggedin= false;
  id :any 
  doctor : any
  p:any
  appoi:any
  patt:any
  currentUser:any
  appointments :any;
  upcomings:any
  constructor(
    public router: Router,private http: HttpClient,
    public activerouteur:ActivatedRoute,
    public servicedata:DataService, public authsrvice:AuthService,
    config: NgbModalConfig, 
    private modalService: NgbModal, private toastr: ToastrService
    
  ) {
  //  console.log(authsrvice.getJwtToken());
    //this.currentUser = this.currentUserSubject.asObservable();
    //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  } 
  /*  this.activerouteur.params.subscribe(
      data=>{
        this.id=data['id']
        console.log(data)
      }
    )
    this.servicedata.getDoctorbyId(this.id).subscribe(
      data=>{
        this.doctor= data
        console.log(this.doctor)       
      }
    )
  }*/

  ngOnInit(): void  {
    this.getRDvupcoming();
    this.getRDv(); this.getappointment();this.getpatients();
   // console.log(localStorage.getItem('currentUser')); 
  //  console.log(localStorage.getItem("JWT_TOKEN"));
  }
 
  getRDv(){
    this.servicedata.getRDVtoDay().subscribe(res=>{
      this.appointments =JSON.parse(res)
      console.log(JSON.parse(res))   ;
    })
  }

  getappointment(){
    this.servicedata.getcountappointments().subscribe(res=>{
      this.appoi=JSON.parse(res)
      console.log(this.appoi)
    })
  }
  getpatients(){
    this.servicedata.getcountpatients().subscribe(res=>{
      this.patt=JSON.parse(res)
    })
  }
  getRDvupcoming(){
    this.servicedata.getRDVupcomming().subscribe(res=>{
      this.upcomings =JSON.parse(res)
    //  res.array();
      console.log(JSON.parse(res) )  ;
    })
  }
  goStaff(){
    this.router.navigate(['/doctor/staff']);
  }
  goArticle(){
    this.router.navigate(['/doctor/myArticle']);
  }

  cancelRDV(model:any, id:any){
    this.modalService.open(model).result.then(res=>{
      this.servicedata.cancelRDV(id).subscribe(res=>{
       this.toastr.success("appointment canced successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
      },
      err =>{
        this.toastr.error(err, 'Error',{timeOut:3000, closeButton:true, progressBar:true});

      });
    }, reason=>{
      console.log(reason);
    })
      this.ngOnInit();
  }

  confirmRDV(model:any,id:any){
    this.modalService.open(model).result.then(res=>{
      this.servicedata.confirmRDV(id).subscribe(res=>{
       this.toastr.success("appointment comfirmed successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
      },
      err =>{
        this.toastr.error(err.statusText, 'Error!',{timeOut:3000, closeButton:true, progressBar:true});

      });
    }, reason=>{
      console.log(reason);
    })
      this.getRDvupcoming();
  }
 
  showDetail(mod:any){
    this.modalService.open(mod).result.then(res=>{
      console.log(res);
    });
  }

  /** constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  } */
/*  doctor:any;
  constructor(private auth:AuthGuard, private dataService: DataService) { 
 
    this.dataService.getCurrentDocotor().subscribe((data:any) => {
      this.doctor = data;
    });
  }

  ngOnInit(): void {
    
  }*/

}
