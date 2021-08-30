import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {PaginatePipe,  PaginationService} from 'ng2-pagination';


@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
specialities: any
data:any
files:any
form: FormGroup = new FormGroup({});
form2: FormGroup = new FormGroup({});
form3: FormGroup = new FormGroup({});
submitted =false;
searchFilter:any
imagePath:any = 'http://127.0.0.1:8000/'
p:any

  constructor( private dataservice: DataService,private formBuilder : FormBuilder,
    config: NgbModalConfig, private router:Router,  

    private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSpecialities();
    this.createForm();
    this.createForm2()
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getSpecialities(){
    this.dataservice.getallSpecialities().subscribe(res=>{
      this.specialities= JSON.parse(res);
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
  AddSpeciality(){
    this.submitted=true
    if (this.form.invalid) {return  console.log('erreur'); }
    else{
      const formm= new FormData();
      formm.append("image", this.files);
      formm.append("name", "syrine" );

        this.dataservice.AddSpeciality(formm).subscribe(res=>{
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


  Addspecialities(mod:any){
    this.modalService.open(mod);
  }
  uploadImage(event :any){
    this.files=event.target.files[0];
    console.log(this.files)
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
 

  EditSpeciality(id:any){
    this.submitted=true
    if (this.form2.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.EditeSpeciality(id,this.form2.value).subscribe(res=>{
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
