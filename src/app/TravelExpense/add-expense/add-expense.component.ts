import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelExpenseService } from 'src/app/Services/travel-expense.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  empExpenseForm:any;
  empid:any;
  reqExpid:any;
  constructor(private travelExpenseService:TravelExpenseService,private fb:FormBuilder,private router:Router) { }
 
   ngOnInit(): void {
     this.empExpenseForm=this.fb.group({
      
       travelExpenseDate:['',Validators.required],
     
       travelDetails:['',Validators.required],
       travelCostExpense:['',Validators.required]
 
     })
   }
   onSubmit(){
    this.reqExpid=sessionStorage.getItem('expenseReqId');
    this.empid=sessionStorage.getItem('empId');
     this.travelExpenseService.addExpense(this.empid,this.reqExpid,this.empExpenseForm.value).subscribe(data=>{
      swal("Expense Added Succesfully ","","success");
      this.router.navigate(['/expList']);
     });
   }
 
 
 }
 