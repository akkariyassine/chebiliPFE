import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {PaginatePipe,  PaginationService} from 'ng2-pagination';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  specialities: any
data:any
categories:any
form: FormGroup = new FormGroup({});
form2: FormGroup = new FormGroup({});
form3: FormGroup = new FormGroup({});
submitted =false;
searchFilter:any
p:any

  constructor( private dataservice: DataService,private formBuilder : FormBuilder,
    config: NgbModalConfig, private router:Router,  

    private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getcategorie();
    this.createForm();
    this.createForm2()
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getcategorie(){
    this.dataservice.getCategorie().subscribe(res=>{
      this.categories= JSON.parse(res);
      console.log( JSON.parse(res));
    })
  }
/**  Add Speciality* */
  createForm(){
    this.form=this.formBuilder.group({
      name:[null ,Validators.required],
      image: [null ,Validators.required],
     
    });
  }

  get f(){
    return this.form.controls
  }
  AddCategorie(){
    this.submitted=true
    if (this.form.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.addCategorie(this.form.value).subscribe(res=>{
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


  Addcategories(mod:any){
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
 

  Editcategoroies(id:any){
    this.submitted=true
    if (this.form2.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.editerCategorie(this.form2.value,id).subscribe(res=>{
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
      this.dataservice.deleteCategorie(id).subscribe(res=>{
       this.toastr.success("categorie deleted successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
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
