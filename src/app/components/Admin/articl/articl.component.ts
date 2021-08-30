import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {PaginatePipe,  PaginationService} from 'ng2-pagination';


@Component({
  selector: 'app-articl',
  templateUrl: './articl.component.html',
  styleUrls: ['./articl.component.css']
})
export class ArticlComponent implements OnInit {
  data:any
  articles:any
  form: FormGroup = new FormGroup({});
  form2: FormGroup = new FormGroup({});
  form3: FormGroup = new FormGroup({});
  submitted =false;
  searchFilter:any
  p:any
  d:any
  doctorArticles:any
  myArticles:any
    constructor( private dataservice: DataService,private formBuilder : FormBuilder,
      config: NgbModalConfig, private router:Router,  
  
      private modalService: NgbModal, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getAdminArticles();
    this.getAllArticles();
    this.createForm();
    
  }

  getAllArticles(){
    this.dataservice.getAllArticles().subscribe(res=>{
      this.articles=res
    })
  }

  getDoctorArticle(){
    this.dataservice.getAllDoctor().subscribe(res=>{
      this.doctorArticles=res
    })
  }
  getAdminArticles(){
    this.dataservice.getAdminArticles().subscribe(res=>{
      this.myArticles=JSON.parse(res)
    })
  }
  /**  Add Articles* */
  createForm(){
    this.form=this.formBuilder.group({
      titre:[null ,Validators.required],
      contenu:[null ,Validators.required],
      categorie:[null ,Validators.required],
      image1: [null ,Validators.required],
      image2: [null ],
     
    });
  }

  get f(){
    return this.form.controls
  }
  AddRtciles(){
    this.submitted=true
    if (this.form.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.AddArticles(this.form.value).subscribe(res=>{
          this.data=res
          if(this.data.status == 1){
            this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
            this.submitted =false;
            this.form.reset();
            this.ngOnInit();
            this.modalService.dismissAll();
           // this.router.navigate(['/admin/specialities'])
          }
          else{
            this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
          }
          
        
          });
    }
  }


  AddArticles(mod:any){
    this.modalService.open(mod);
  }
/** ********* Edite Speciality********* */
createForm2(){
  this.form2=this.formBuilder.group({
    name:[null ,Validators.required],
    image: [null ,Validators.required],
   
  });
}
get f2(){
  return this.form2.controls
}


Editarticle(id:any){
  this.submitted=true
  if (this.form2.invalid) {return  console.log('erreur'); }
  else{
      this.dataservice.EditArticle(id,this.form2.value).subscribe(res=>{
        this.data=res
        if(this.data.status == 1){
          this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
          this.submitted =false;
          this.form2.reset();
          this.ngOnInit();
          this.modalService.dismissAll();
         // this.router.navigate(['/admin/specialities'])
        }
        else{
          this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
        }
        
      
        });
  }
}

Edit(mod:any,id:any){
 this.modalService.open(mod);

}
/**************Delete Speciality************** */
Delete(model:any,id:any){
  this.modalService.open(model).result.then((res: any)=>{
    this.dataservice.DeleteSpeciality(id).subscribe(res=>{
     this.toastr.success("speciality deleted successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
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
