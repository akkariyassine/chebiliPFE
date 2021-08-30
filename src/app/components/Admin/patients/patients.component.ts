import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
patients:any
p:  any
searchFilter:any
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(){
    this.dataservice.getpatient().subscribe(res=>{
      this.patients=JSON.parse(res);
    })
  }
}
