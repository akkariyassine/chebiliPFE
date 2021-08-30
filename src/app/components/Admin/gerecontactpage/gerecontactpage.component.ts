import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gerecontactpage',
  templateUrl: './gerecontactpage.component.html',
  styleUrls: ['./gerecontactpage.component.css']
})
export class GerecontactpageComponent implements OnInit {
  patients:any
  p:  any
  data:any
  contactt:any
  searchFilter:any
    constructor(private dataservice: DataService) { }
  
  ngOnInit(): void {
    this.getContact();
  }

  getContact(){
    this.dataservice.getContact().subscribe(res=>{
      this.data=JSON.parse(res);
    })
  }

  getbyid(id:any){
    this.dataservice.getContactId(id).subscribe(res=>{
      this.contactt=JSON.parse(res);
    })
  }
}
