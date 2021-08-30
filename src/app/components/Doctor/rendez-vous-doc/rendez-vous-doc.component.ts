import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rendez-vous-doc',
  templateUrl: './rendez-vous-doc.component.html',
  styleUrls: ['./rendez-vous-doc.component.css']
})
export class RendezVousDocComponent implements OnInit {
rdvs:any
  constructor(public servicedata:DataService, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRDvupcoming()
  }

  getRDvupcoming(){
    this.servicedata.getAllRDVPatient().subscribe(res=>{
      this.rdvs =JSON.parse(res)
    //  res.array();
      console.log(JSON.parse(res) )  ;
    })
  }
  cancelRDV(id:any){
    
      this.servicedata.cancelRDV(id).subscribe(res=>{
       this.toastr.success("appointment canced successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
       this.ngOnInit();
      },
      err =>{
        this.toastr.error(err, 'Error',{timeOut:3000, closeButton:true, progressBar:true});

      });
   
     
  }

  confirmRDV(id:any){
      this.servicedata.confirmRDV(id).subscribe(res=>{
       this.toastr.success("appointment comfirmed successfuly", 'Success',{timeOut:3000, closeButton:true, progressBar:true});
       this.ngOnInit();
      },
      err =>{
        this.toastr.error(err.statusText, 'Error!',{timeOut:3000, closeButton:true, progressBar:true});

      });
   
  }
 
  showDetail(mod:any){
    this.modalService.open(mod).result.then(res=>{
      console.log(res);
    });
  }
}
