import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-blacklist-doctor',
  templateUrl: './blacklist-doctor.component.html',
  styleUrls: ['./blacklist-doctor.component.css']
})
export class BlacklistDoctorComponent implements OnInit {
data:any
p:any
  constructor(private dataservice:DataService, private router: Router,) { }

  ngOnInit(): void {
    this.getblacklist();
  }

  getblacklist(){
    this.dataservice.getBlackListDoctor().subscribe(res=>{
      this.data=JSON.parse(res)
    })
  }
  GoInfoDoctor(id:any){
    this.router.navigate(['admin/doctor/info_doctor', id]);
   }
  
   GoProfileDoctor(id:any){
    this.router.navigate(['doctor-profile/', id]);
   }
}
