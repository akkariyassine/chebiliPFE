import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.css']
})
export class DoctorSearchComponent implements OnInit {

  constructor(private dataService: DataService) { }
  //doctors:new Doctor();
  doctors:any;
  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor(){
    this.dataService.getallDoctor().subscribe(res=>{
      this.doctors=res
      console.log(this.doctors=res)   ;
    })
  }
}
