import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { Slot } from 'src/app/models/slot';

@Component({
  selector: 'app-times-doc',
  templateUrl: './times-doc.component.html',
  styleUrls: ['./times-doc.component.css']
})
export class TimesDocComponent implements OnInit {
time:any
values = [];
value:any
Monday:any
Tuesdayy:any
Wednesday:any
Thursday:any
Friday:any
Saturday:any 
Sunday :any
timy:any
form: FormGroup = new FormGroup({});
form2: FormGroup = new FormGroup({});
submitted =false;
take:any
data:any
slot=new Slot();
  constructor(private dataservice: DataService,private formBuilder : FormBuilder,
    config: NgbModalConfig, private router:Router,  
    private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMyshedule();
    this.getTuesday();this.getWednesday();this.getFriday();this.getThirsday();
    this.getsaturday();this.getSunday(); this.getMonday();
    this.createForm(); this.createForm2();
  }
  toDisplay = false;
  
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
  fermer(){
    this.toDisplay = false
  }
  
  deleteSlot1(id:any){
  this.dataservice.deleteSlot1(id).subscribe(res=>{
    this.timy=res;
    if(this.timy.status == 1){
      this.toastr.success(JSON.stringify(this.timy.message) , JSON.stringify(this.timy.code), { timeOut :2000,progressBar :true });
      this.form.reset();
      this.ngOnInit();
    
     // this.router.navigate(['/admin/specialities'])
    }
    else{
      this.toastr.error(JSON.stringify(this.timy.message), JSON.stringify(this.timy.code), { timeOut : 5000,progressBar :true});
    }
    
  })
  }

  deleteSlot2(id:any){
    this.dataservice.deleteSlot2(id).subscribe(res=>{
      this.timy=res;
     
    })
    }
  /*************************edit slot******************************** */
  createForm(){
    this.form=this.formBuilder.group({
      start_time1:[null ,Validators.required],
      end_time1:[null ,Validators.required],
      start_time2: [null ,Validators.required],
      end_time2:[null ,Validators.required],
      
    });
  }

  get f(){
    return this.form.controls
  }
  
  goEdit(mod:any, id:any){
    this.modalService.open(mod);
    this.take=id;
    console.log(this.take);
    this.dataservice.getDaybyId(id).subscribe(res=>{
      this.data=JSON.parse(res);
    })
  }
  onSubmit(id:any){
    this.dataservice.updateSlot(id, this.form.value).subscribe(res=>{
      this.timy=res;
      console.log(this.form.value)
      if(this.timy.status == 1){
        this.toastr.success(JSON.stringify(this.timy.message) , JSON.stringify(this.timy.code), { timeOut :2000,progressBar :true });
        
        
        this.modalService.dismissAll();
        this.reloadCurrentRoute();
       // this.router.navigate(['/admin/specialities'])
      }
      else{
        this.toastr.error(JSON.stringify(this.timy.message), JSON.stringify(this.timy.code), { timeOut : 5000,progressBar :true});
      }
      
    })
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
/*************************add slot******************** */

createForm2(){
  this.form2=this.formBuilder.group({
    start_time1:[null ,Validators.required],
    end_time1:[null ,Validators.required],
    start_time2: [null ],
    end_time2:[null],
    
  });
}


get f2(){
  return this.form2.controls
}

goAdd(mod:any, id:any){
  this.modalService.open(mod);
  this.take=id;
  console.log(this.take);
  this.dataservice.getDaybyId(id).subscribe(res=>{
    this.data=JSON.parse(res);
    console.log(this.data)
  })
}

onSubmit2(id:any){
  console.log('cc')
  this.submitted=true
      
      if (this.form2.invalid)
      {
        return  console.log('erreur');
      }
  this.dataservice.addSlot(id, this.form2.value).subscribe(res=>{
    console.log('ici')
    this.timy=res;
    console.log(this.form2.value)
    if(this.timy.status == 1){
      this.toastr.success(JSON.stringify(this.timy.message) , JSON.stringify(this.timy.code), { timeOut :2000,progressBar :true });
      
      this.modalService.dismissAll();
      this.reloadCurrentRoute();
    }
    else{
      this.toastr.error(JSON.stringify(this.timy.message), JSON.stringify(this.timy.code), { timeOut : 5000,progressBar :true});
    }
    
  })
}


/**************************************** */
  getMyshedule(){
    this.dataservice.getMyshedule().subscribe(res=>{
      this.time=JSON.parse(res)
    })
  }


  getMonday(){
    this.dataservice.getshedulebymonday().subscribe(res=>{
      this.Monday=JSON.parse(res);
    })
  }
  getTuesday(){
    this.dataservice.getshedulebytuesday().subscribe(res=>{
      this.Tuesdayy=JSON.parse(res);

    })
  }
  getWednesday(){
    this.dataservice.getshedulebywednesday().subscribe(res=>{
      this.Wednesday=JSON.parse(res);
    })
  }
  getThirsday(){
    this.dataservice.getshedulebythirsday().subscribe(res=>{
      this.Thursday=JSON.parse(res);
    })
  }
  getFriday(){
    this.dataservice.getshedulebyfriday().subscribe(res=>{
      this.Friday=JSON.parse(res);
    })
  }
  getsaturday(){
    this.dataservice.getshedulebysaturday().subscribe(res=>{
      this.Saturday=JSON.parse(res);
    })
  }
  getSunday(){
    this.dataservice.getshedulebysunday().subscribe(res=>{
      this.Sunday=JSON.parse(res);
    })
  }

}
