import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  names:any
  data:any
  doctors:any
  specialities :any
  pays:any
  formm:any
  cities:any
  form: FormGroup = new FormGroup({});
   
    constructor(public service : DataService,private formBuilder : FormBuilder, 
      private http:HttpClient, 
      private dataService :DataService, 
      private router:Router , private toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.getSpeciality();
     this.getallDoctors();
     this.getpay();
     this.createForm();
    }
    getallDoctors(){
      this.service.getallDoctorVisitor().subscribe(res=>{
        this.doctors=res;
      })
    }
  
    getSpeciality(){
      this.service.getSpeciality().subscribe(resu=>{
        this.specialities=JSON.parse(resu);
       /// console.log(resu)
      })
    }
  
    getpay(){
      this.service.getPays().subscribe(res=>{
        this.pays=JSON.parse(res);
      })
    }
    getGouvernorat(e:any){
      console.log( e.target.value,)
      var obj={
        name_pays: e.target.value,
      }
          this.service.getGouvernorat(obj).subscribe(res=>{
            this.cities=res;
            console.log(res);
          });
           console.log("country change")
    }
    createForm(){
      this.form=this.formBuilder.group({
        name: '', //new FormControl(''),
        speciality: '',//new FormControl(''),
        pays:'',
        gouvernorat: ''//new FormControl('')
      })
        
      }
      Doctors(){
  
        this.formm=this.form.value;
        this.router.navigate(['/about',this.formm ]);
      }
    Doctorss(){
      this.service.getSearchDoctor(this.form.value).subscribe(res=>{
        this.data=res
        console.log('jkl');
        console.warn(this.form.value);
        console.warn(res)
      //  this.router.navigate(['/search-Doctor']);
      })
    }

}
