import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Doctor } from 'src/app/models/doctor';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard-doc',
  templateUrl: './dashboard-doc.component.html',
  styleUrls: ['./dashboard-doc.component.css']
})
export class DashboardDocComponent implements OnInit {
  isLoggedin= false;
  id :any 
  doctor : any

  constructor(
    public router: Router,
    public activerouteur:ActivatedRoute,
    public servicedata:DataService
    
  ) {
    this.activerouteur.params.subscribe(
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
  }

  ngOnInit() {
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("JWT_TOKEN"));
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
