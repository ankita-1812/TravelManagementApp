import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelRequestService } from 'src/app/Services/travel-request.service';
import  swal from 'sweetalert';
import { TravelRequest } from '../TravelRequest';

@Component({
  selector: 'app-update-req-status',
  templateUrl: './update-req-status.component.html',
  styleUrls: ['./update-req-status.component.css']
})
export class UpdateReqStatusComponent implements OnInit {
  adminId:any;
  reqId:any;
  empRequestForm:any;
  travelRequestUpdate:TravelRequest=new TravelRequest();
  constructor(private travelRequest:TravelRequestService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.empRequestForm=this.fb.group({
      travelRequestStatus:['',Validators.required],
    })
    this.onload();
  }
  onload(){
    this.reqId=sessionStorage.getItem('updateReqStatusId');
    this.travelRequest.getReqById(this.reqId).subscribe(data=>{
      this.travelRequestUpdate=data;
      this.empRequestForm.get('travelRequestStatus').setValue(data.travelRequestStatus);
    })
  }
  onSubmit(){
    this.reqId=sessionStorage.getItem('updateReqStatusId');
    this.adminId=sessionStorage.getItem('adminId');
    console.log(this.empRequestForm.value.travelRequestStatus);
    this.travelRequest.updateStatus(this.adminId,this.reqId,this.empRequestForm.value.travelRequestStatus).subscribe(data=>{
      swal("Status Updated Succesfully ","","success");
      this.router.navigate(['/AdminRequestList'])
    })
  }

}
