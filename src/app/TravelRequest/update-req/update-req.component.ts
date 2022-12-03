import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelRequestService } from 'src/app/Services/travel-request.service';
import  swal from 'sweetalert';
import { TravelRequest } from '../TravelRequest';

@Component({
  selector: 'app-update-req',
  templateUrl: './update-req.component.html',
  styleUrls: ['./update-req.component.css']
})


export class UpdateReqComponent implements OnInit {
  empRequestForm:any;
  constructor(private travelRequest:TravelRequestService,private fb:FormBuilder,private router:Router) { }
  empId:any;
  reqId:any;
  btnstate:boolean=false;
  travelReqToUpdate:TravelRequest=new TravelRequest() ;
  ngOnInit(): void {
   
    this.empRequestForm=this.fb.group({
      travelRequestId:['',Validators.required],
      travelRequestDate:['',Validators.required],
      travelRequestStatus:['',Validators.required],
      travelRequestStartDate:['',Validators.required],
      travelRequestEndDate:['',Validators.required],
      travelRequestReason:['',Validators.required],
      destinationFrom:['',Validators.required],
      destinationTo:['',Validators.required],
      estimatedExpense:['',Validators.required],
      modeOfTravel:['',Validators.required],
  })
  this.onload();
  }
  onload(){
    this.reqId=sessionStorage.getItem('updateReqId');
    this.travelRequest.getReqById(this.reqId).subscribe(data=>{
      console.log(data);

      this.travelReqToUpdate=data;
      this.empRequestForm.get('travelRequestId').setValue(this.travelReqToUpdate.travelRequestId);
      this.empRequestForm.get('travelRequestDate').setValue(this.travelReqToUpdate.travelRequestDate);
      this.empRequestForm.get('travelRequestStatus').setValue(this.travelReqToUpdate.travelRequestStatus);
      this.empRequestForm.get('travelRequestStartDate').setValue(this.travelReqToUpdate.travelRequestStartDate);
      this.empRequestForm.get('travelRequestEndDate').setValue(this.travelReqToUpdate.travelRequestEndDate);
      this.empRequestForm.get('travelRequestReason').setValue(this.travelReqToUpdate.travelRequestReason);
      this.empRequestForm.get('destinationFrom').setValue(this.travelReqToUpdate.destinationFrom);
      this.empRequestForm.get('destinationTo').setValue(this.travelReqToUpdate.destinationTo);
      this.empRequestForm.get('estimatedExpense').setValue(this.travelReqToUpdate.estimatedExpense);
      this.empRequestForm.get('modeOfTravel').setValue(this.travelReqToUpdate.modeOfTravel);
      if(this.travelReqToUpdate.travelRequestStatus=='approved'){
        this.btnstate=true;
      }

    })
   
   
  }
  onSubmit(){
    this.empId=sessionStorage.getItem('empId');
    this.reqId=sessionStorage.getItem('updateReqId');
    this.travelRequest.updateRequest(this.empId,this.reqId,this.empRequestForm.value).subscribe(date=>{
      swal("Updated Succesfully ","","success");
      this.router.navigate(['/reqList'])
    });
  }

}

