import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee/Employee';

import { TravelRequestService } from 'src/app/Services/travel-request.service';

@Component({
  selector: 'app-add-req',
  templateUrl: './add-req.component.html',
  styleUrls: ['./add-req.component.css']
})
export class AddReqComponent implements OnInit {
  empRequestForm:any;
  emp:Employee=new Employee();
  empId:any;
  constructor(private reqService:TravelRequestService,private fb:FormBuilder,private router:Router) { }


  ngOnInit(): void {
    
    this.empRequestForm=this.fb.group({

      travelRequestDate:['',Validators.required],
    
      travelRequestStartDate:['',Validators.required],
      travelRequestEndDate:['',Validators.required],
      travelRequestReason:['',Validators.required],
      destinationFrom:['',Validators.required],
      destinationTo:['',Validators.required],
      estimatedExpense:['',Validators.required],
      modeOfTravel:['',Validators.required],
    })
  }

 
  onSubmit(){
    
    this.empId=sessionStorage.getItem("empId");
    this.reqService.addRequest(this.empId,this.empRequestForm.value).subscribe(data=>{
      this.emp=data;
      
      if(this.emp.empId==this.empId){
        this.router.navigate(['/reqList'])
      }
    });
  }

}
