import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.css']
})
export class DoctorSearchComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) 
    { }
  //doctors:new Doctor();
  doctors:any;

  ngOnInit(): void {
    this.getDoctor();
  }
  onClicked(doc:any){

    this.router.navigate(['/doctor-profile', doc.id]);
  }

  getDoctor(){
    this.dataService.getallDoctorVisitor().subscribe(res=>{
      this.doctors=JSON.parse(res);
      console.log(JSON.parse(res))
    //  console.log(res)
     
    })
  }
}
