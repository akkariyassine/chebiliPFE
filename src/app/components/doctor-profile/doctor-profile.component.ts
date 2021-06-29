import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  constructor( private dataService: DataService, private auth:AuthGuard) { }

  ngOnInit(): void {
  
  }


}
