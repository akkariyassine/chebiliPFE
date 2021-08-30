import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
appointments:any
p:any
  constructor(private dataservice: DataService ,private router: Router)  {}

  ngOnInit(): void {
    this.getAppointment();
  }
doctor(doc:any){

    this.router.navigate(['/doctor-profile', doc.id]);
  }
  patient(patient:any){
    this.router.navigate(['/patient/profile/search', patient.id]);
  }

  getAppointment(){
    this.dataservice.getAppointment().subscribe(res=>{
      this.appointments=JSON.parse( res);
   //   console.log(res)
        })
  }
}
