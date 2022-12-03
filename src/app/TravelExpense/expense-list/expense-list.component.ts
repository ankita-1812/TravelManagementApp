import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelExpenseService } from 'src/app/Services/travel-expense.service';
import swal from 'sweetalert';
import { TravelExpense } from '../TravelExpense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expList:TravelExpense[]=[];
  empid:any;
  reqExpid:any;
  constructor(private expService:TravelExpenseService,private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.reqExpid=sessionStorage.getItem('expenseReqId');
    this.empid=sessionStorage.getItem('empId');
    this.expService.getExpenseList(this.empid,this.reqExpid).subscribe(
    data=>{
      this.expList=data;

    }
    )
  }
  updateExpense(expid:number){
    sessionStorage.setItem('updateExpId',JSON.stringify(expid));
    this.router.navigate(['/updateExpense']);
    
  }

  deleteExpense(expid:number){
    this.expService.deleteExp(expid).subscribe(
      data=>{
        swal("Deleted Succesfully ","","success");
         this.loadData(); 
      }
    )
  }

}
