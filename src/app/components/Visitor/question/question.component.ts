import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
comments:any
replies:any
id:any
  constructor( public dataService: DataService) { }

  ngOnInit(): void {
    this.getComment();
  //  this.getreply(this.id);
  }

  getComment(){
    this.dataService.getCommentaire().subscribe(res=>{
      this.comments=JSON.parse(res);
      console.log(JSON.parse(res))   ;
    //  console.log(this.comments.id);
    })
  }

  getreply(id :number){
    console.log(id);
    this.dataService.getReplyCommentaire(id).subscribe(res=>{
      this.replies=JSON.parse(res);
      console.log(JSON.parse(res))   ;
     
    })
  }
}
