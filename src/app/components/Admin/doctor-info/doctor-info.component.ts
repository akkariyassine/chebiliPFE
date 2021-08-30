import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
id:any
doctor :any 
  constructor(private router:ActivatedRoute, private dataservice: DataService) {
    
   }

  ngOnInit(): void {
    this.id =this.router.snapshot.paramMap.get('id');
    this.getDoctorInfo()
  }

  getDoctorInfo(){
    this.dataservice.getDoctorId(this.id).subscribe(res=>{
      this.doctor=JSON.parse(res)
     console.log(res)
    })
  }
  validate(){
    
  }


  
}
