import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gere-aboutpage',
  templateUrl: './gere-aboutpage.component.html',
  styleUrls: ['./gere-aboutpage.component.css']
})
export class GereAboutpageComponent implements OnInit {
about:any
data:any
submitted =false;
form: FormGroup = new FormGroup({});
  constructor( private dataservice: DataService,private formBuilder : FormBuilder,
    private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAbout();
    this.createForm()
  }
  createForm(){
    this.form=this.formBuilder.group({
      titre1:[null ,Validators.required],
      soustitre1:[null ,Validators.required],
      soustitre1_2:[null ,Validators.required],
      image_bg: [null ,Validators.required],
      titre2: [null,Validators.required ],
      soustitre2:[null ,Validators.required],
      paragraphe2:[null ,Validators.required],
      titre3: [null ,Validators.required],
      paragraphe3:[null ,Validators.required],
      image_3:[null ,Validators.required],
      titre4: [null ,Validators.required],
      paragraphe4:[null ,Validators.required],
      image_4:[null ,Validators.required],
      titre5: [null ,Validators.required],
      paragraphe5:[null ,Validators.required],
      image_5:[null ,Validators.required],
    });
  }

  get f(){
    return this.form.controls
  }

  getAbout(){
    this.dataservice.getAbout().subscribe(res=>{
      this.about=JSON.parse(res);

    })
  }

  Editabout(){
    this.submitted=true
    if (this.form.invalid) {return  console.log('erreur'); }
    else{
        this.dataservice.updateabout(this.form.value).subscribe(res=>{
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

  Editer(mod:any){
    this.modalService.open(mod);
  }
}
