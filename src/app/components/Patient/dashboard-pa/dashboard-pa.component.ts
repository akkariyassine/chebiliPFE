import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard-pa',
  templateUrl: './dashboard-pa.component.html',
  styleUrls: ['./dashboard-pa.component.css']
})
export class DashboardPaComponent implements OnInit {
favorite:any
  constructor(    public servicedata:DataService
    ) { }

  ngOnInit(): void {
  }

  
  
}
