import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelExpenseService } from 'src/app/Services/travel-expense.service';
import  swal from 'sweetalert';
import { TravelExpense } from '../TravelExpense';

@Component({
  selector: 'app-update-expense-status',
  templateUrl: './update-expense-status.component.html',
  styleUrls: ['./update-expense-status.component.css']
})
export class UpdateExpenseStatusComponent implements OnInit {
  empExpenseForm:any;
  resId:any;
  adminId:any;
  travelExpense:TravelExpense=new TravelExpense();
  constructor(private travelExpenseService:TravelExpenseService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.empExpenseForm=this.fb.group({
      travelExpenseStatus:['',Validators.required],
    })
    this.onload();
  }
  onload(){
    this.resId=sessionStorage.getItem('updateExpStatusId');
    this.travelExpenseService.getExpById(this.resId).subscribe(data=>{
      this.travelExpense=data;
      this.empExpenseForm.get('travelExpenseStatus').setValue(data.travelExpenseStatus);
    })
  }
  onSubmit(){
    this.resId=sessionStorage.getItem('updateExpStatusId');
    this.adminId=sessionStorage.getItem('adminId');
    this.travelExpenseService.updateExpenseStatus(this.adminId,this.resId,this.empExpenseForm.value.travelExpenseStatus).subscribe(data=>{
      swal("Status Updated Succesfully ","","success");
      this.router.navigate(['/AdminExpenseList'])
    })
  }

}
