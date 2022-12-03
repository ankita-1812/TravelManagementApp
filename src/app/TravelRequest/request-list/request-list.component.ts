import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelRequestService } from 'src/app/Services/travel-request.service';
import swal from 'sweetalert';
import { TravelRequest } from '../TravelRequest';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
reqList:TravelRequest[]=[];
btnactive:boolean=false;

  constructor(private reqService:TravelRequestService,private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.reqService.getRequestlist().subscribe(
      data=>{
        this.reqList=data;
        console.log(this.reqList);
        
      }
    )
  }
  updateRequest(reqId:number){
    sessionStorage.setItem('updateReqId',JSON.stringify(reqId));
    this.router.navigate(['/updateReq']);
  }
  checkExpense(reqId:number){
    sessionStorage.setItem('expenseReqId',JSON.stringify(reqId));
    this.router.navigate(['/expList']);
  }
  deleteRequest(reqId:number){
    this.reqService.deleteReq(reqId).subscribe(data=>{
      swal("Delete Succesfully ","","success");
      this.loadData();
    });
  }
  checkfun(reqStatus:string){
    console.log(reqStatus)
    if(reqStatus=='approved')
    return false;
    else
    return true;
  }
}
