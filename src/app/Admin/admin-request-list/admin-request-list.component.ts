import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelRequestService } from 'src/app/Services/travel-request.service';
import { AdminTravelRequest } from '../AdminTravelRequest';

@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.css']
})
export class AdminRequestListComponent implements OnInit {
  fbs:string="";
  fbd:string="";
  reqList:AdminTravelRequest[]=[];


  constructor(private reqService:TravelRequestService,private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }
   loadData(){
    this.reqService.getAllRequest().subscribe(
      data=>{
        this.reqList=data;
        console.log(this.reqList);
        
      }
    )
  }
  updateRequestStatus(reqid:number){
    sessionStorage.setItem('updateReqStatusId',JSON.stringify(reqid));
    this.router.navigate(['/updateAdminRequest']);
  }
  findByStatus(){
    this.reqService.findRequestByStatus(this.fbs).subscribe(data=>{
        this.reqList=data;
      
    });
  }
  findByDate(){
    this.reqService.findRequestByDate(this.fbd).subscribe(data=>{
      this.reqList=data;
    })
  }

}
