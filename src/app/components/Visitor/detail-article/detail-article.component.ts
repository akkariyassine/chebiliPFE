import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  id :any
  articles:any =[]
    constructor( private dataService: DataService, 
                 private auth:AuthGuard,
                 private router:ActivatedRoute) { }
  
    ngOnInit(): void {
    this.id =this.router.snapshot.paramMap.get('id');
    this.getArticle();
    
    }
  
    getArticle(){
      this.dataService.getdetailArticle(this.id).subscribe(res=>{
       this.articles=res;
        console.log(res);

      })
    }
}
