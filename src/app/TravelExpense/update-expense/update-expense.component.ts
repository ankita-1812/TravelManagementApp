import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TravelExpenseService } from 'src/app/Services/travel-expense.service';
import swal from 'sweetalert';
import { TravelExpense } from '../TravelExpense';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  empExpenseForm:any;
  expid:any;
  travelExpense:TravelExpense=new TravelExpense();
  constructor(private travelExpenseService:TravelExpenseService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.empExpenseForm=this.fb.group({
    
      travelExpenseDate:['',Validators.required],
      travelExpenseStatus:['',Validators.required],
      travelDetails:['',Validators.required],
      travelCostExpense:['',Validators.required]

    })
    this.onload();

  }
  onload(){
    this.expid=sessionStorage.getItem('updateExpId');
    this.travelExpenseService.getExpById(this.expid).subscribe(data=>{
      this.travelExpense=data;
     
      this.empExpenseForm.get('travelExpenseDate').setValue(this.travelExpense.travelExpenseDate);
      this.empExpenseForm.get('travelExpenseStatus').setValue(this.travelExpense.travelExpenseStatus);
      this.empExpenseForm.get('travelDetails').setValue(this.travelExpense.travelDetails);
      this.empExpenseForm.get('travelCostExpense').setValue(this.travelExpense.travelCostExpense);

    })
  }
  onSubmit(){
    this.expid=sessionStorage.getItem('updateExpId');
    this.travelExpenseService.updateExpense(this.expid,this.empExpenseForm.value).subscribe(data=>{
      if(data!=null)
      swal("Updated Succesfully ","","success");
      this.router.navigate(['/expList']);
    });
   
  }

}
