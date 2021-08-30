import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
articles:any
searchFilter:any
p:any
  constructor(private dataservice: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    this.dataservice.getAllArticle().subscribe(res=>{
      this.articles=JSON.parse(res);
    })
  }

  goDetail(article:any){
    this.router.navigate(['articles/detail-article',article.id])
  }

  goDoctor(doctor:any){
    this.router.navigate(['doctor-profile',doctor.doc_id]);
   
  }

}
