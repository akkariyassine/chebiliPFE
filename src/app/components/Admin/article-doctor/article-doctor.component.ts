import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-article-doctor',
  templateUrl: './article-doctor.component.html',
  styleUrls: ['./article-doctor.component.css']
})
export class ArticleDoctorComponent implements OnInit {
  searchFilter:any
  DocArticles:any
  p:any
  m:any
  noValids:any
  data:any
  constructor(private dataservice:DataService,private router: Router,private toastr: ToastrService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.getDoctorArticle();
    this.GetNotValidArticle();
  }

  getDoctorArticle(){
    this.dataservice.getDoctorArticles().subscribe(res=>{
      this.DocArticles=JSON.parse(res);
    })
  }

  GetNotValidArticle(){
    this.dataservice.GetNotValidArticle().subscribe(res=>{
      this.noValids=JSON.parse(res)
    })
  }

  
  GoPageArticle(id :any){
    this.router.navigate(['articles/detail-article', id]);
  }

  validate(id:any){
    this.dataservice.ValidateArticle(id).subscribe(res=>{
      this.data=res
      if(this.data.status == 1){
        this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
        this.ngOnInit();
       
      }
      else{
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
      }
    })
  }

  /************show detail not valid article*********** */
  showDetail(mod:any){
    this.modalService.open(mod);
  }/******go to doctor profile */
  GotoDoctorProfile(id:any){
    this.router.navigate(['admin/doctor/info_doctor', id]);
  }
  /**************delete article********** */
  Delete(model:any,id:any){
    this.modalService.open(model).result.then((res: any)=>{
      this.dataservice.deleteArticle(id).subscribe(res=>{
       this.toastr.success("Article deleted successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
       this.ngOnInit();
       this.modalService.dismissAll();
      },
      err =>{
        this.toastr.error(err, 'Error',{timeOut:3000, closeButton:true, progressBar:true});

      });
    }, (reason: any)=>{
      console.log(reason);
    })
      this.ngOnInit();
     
    }
}
