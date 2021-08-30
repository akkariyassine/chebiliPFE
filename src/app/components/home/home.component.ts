import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
names:any
data:any
doctors:any
specialities :any
pays:any
formm:any
cities:any
form: FormGroup = new FormGroup({});
 
 // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
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
  /*search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.doctors.filter(res=> v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )*/
   
      
 


}
