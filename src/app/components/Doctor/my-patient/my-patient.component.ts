import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.css']
})
export class MyPatientComponent implements OnInit {
  patients: any= [];

  constructor(  public servicedata:DataService,) { }

  ngOnInit(): void {
    this.getmypatient();
  }

  getmypatient(){
    this.servicedata.getMyPatient().subscribe(res=>{
      this.patients =JSON.parse(res)
      console.log(JSON.parse(res))   ;
    })
  }
}
