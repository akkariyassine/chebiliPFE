import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
id :any
doctor:any
request:any
data :any
  constructor( private dataService: DataService, 
               private auth:AuthGuard,
               private router:ActivatedRoute) { }

  ngOnInit(): void {
  this.id =this.router.snapshot.paramMap.get('id');
  this.getDoctor();
 // this.Doctorss()
  
  }

  getDoctor(){
    this.dataService.getDoctorbyId(this.id).subscribe(res=>{
      //this.dataService.getdetailDoctor(this.id).subscribe(res=>{
      this.doctor=res;
      console.log(res);
    })
  }

  Doctorss(){
    //this.dataService.getSearchDoctor(this.request).subscribe(res=>{
    //  this.data=res
    //  console.log('jkl');
   //   console.warn(this.request);
     // console.warn(res)
    //  this.router.navigate(['/search-Doctor']);
  //  })
  }

}
