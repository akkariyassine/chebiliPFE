import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {PaginatePipe,  PaginationService} from 'ng2-pagination';
import { Pharmacie } from 'src/app/models/pharmacie';

@Component({
  selector: 'app-admin-pharmacie',
  templateUrl: './admin-pharmacie.component.html',
  styleUrls: ['./admin-pharmacie.component.css']
})
export class AdminPharmacieComponent implements OnInit {
  Pharmacies: any
  data:any
  files:any
  imageSrc: any
  form: FormGroup = new FormGroup({});
  form2: FormGroup = new FormGroup({});
  form3: FormGroup = new FormGroup({});
  submitted =false;
  searchFilter:any
  imagePath:any = 'http://127.0.0.1:8000/'
  p:any
  dataCountry: any;
  dataState: any;
  pharmacie=new Pharmacie();
  
    constructor( private dataservice: DataService,private formBuilder : FormBuilder,
      config: NgbModalConfig, private router:Router,  
  
      private modalService: NgbModal, private toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.getPharmacies();
      this.createForm();
      this.createForm2()
      this.getCountry();
    }
    isOpen = true;
  
    toggle() {
      this.isOpen = !this.isOpen;
    }
    getCountry(){
      this.dataservice.getPays().subscribe(res=>{
        this.dataCountry=JSON.parse(res)
        console.log(JSON.parse(res) )  ;
      })
    }
   
    getGouvernorat(e:any){
      console.log( e.target.value,)
      var obj={
        name_pays: e.target.value,
      }
          this.dataservice.getGouvernorat(obj).subscribe(res=>{
            this.dataState=res;
            console.log(res);
          });
           console.log("country change")
    }
  
    getPharmacies(){
      this.dataservice.getAllPharmacie().subscribe(res=>{
        this.Pharmacies= JSON.parse(res);
        console.log( JSON.parse(res));
      })
    }
  /**  Add pharmacie* */
    createForm(){
      this.form=this.formBuilder.group({
        Name_pharmacie:[null ,Validators.required],
        type: [null ,Validators.required],
        address: [null ,Validators.required],
        city: [null ,Validators.required],
        gouvernerat: [null ,Validators.required],
        pays: [null ,Validators.required],
        phone: [null ,Validators.required],
        image:[null ,Validators.required],
        fileSource:[null ,Validators.required],
     
      });
    }
    onFileChange(event:any) {
      const reader = new FileReader();
      
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
     
          this.imageSrc = reader.result as string;
       
          this.form.patchValue({
            fileSource: reader.result
          });
     
        };
     
      }
    }
  
    get f(){
      return this.form.controls
    }
    Addpharmacie(){
      this.submitted=true
      if (this.form.invalid) {
        console.log('erreur'); 
        console.log(this.form.invalid); 
      }
      else{
       
          this.dataservice.AddPharmacie(this.form.value).subscribe(res=>{
            this.data=res
            if(this.data.status == 1){
              this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
              this.submitted =false;
              this.form.reset();
              this.ngOnInit();
              this.modalService.dismissAll();
             // this.router.navigate(['/admin/Pharmacies'])
            }
            else{
              this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), { timeOut : 5000,progressBar :true});
            }
            
          
            });
      }
    }
  
  
    AddPharmacies(mod:any){
      this.modalService.open(mod);
    }
    uploadImage(event :any){
      this.files=event.target.files[0];
      console.log(this.files)
    }
  
  
  /** ********* Edite pharmacie********* */
    createForm2(){
      this.form2=this.formBuilder.group({
        Name_pharmacie:[null ,Validators.required],
        type: [null ,Validators.required],
        address: [null ,Validators.required],
        city: [null ,Validators.required],
        gouvernerat: [null ,Validators.required],
        pays: [null ,Validators.required],
        phone: [null ,Validators.required],
       
      });
    }
    get f2(){
      return this.form2.controls
    }
   
  
    Editpharmacie(id:any){
      this.submitted=true
      if (this.form2.invalid) {return  console.log('erreur'); }
      else{
          this.dataservice.Editepharmacie(id,this.form2.value).subscribe(res=>{
            this.data=res
            if(this.data.status == 1){
              this.toastr.success(JSON.stringify(this.data.message) , JSON.stringify(this.data.code), { timeOut :2000,progressBar :true });
              this.submitted =false;
              this.form2.reset();
              this.ngOnInit();
              this.modalService.dismissAll();
             // this.router.navigate(['/admin/Pharmacies'])
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
  /**************Delete pharmacie************** */
    Delete(model:any,id:any){
      this.modalService.open(model).result.then((res: any)=>{
        this.dataservice.Deletepharmacie(id).subscribe(res=>{
         this.toastr.success("pharmacie deleted successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
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
  