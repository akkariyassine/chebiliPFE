import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
info:any
request: any
  constructor(public dataService:DataService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAbout();
    this.request=this.router.snapshot.paramMap.get('formm');
    //console.warn(this.router.snapshot.paramMap.get('form'))
    this.forms();
  }

  getAbout(){
    this.dataService.getAbout().subscribe(res=>{
      this.info=JSON.parse(res);
      console.log(JSON.parse(res))   ;
    })
  }
  forms(){
    console.log(this.router.snapshot.paramMap.get('formm'))
  }

}
