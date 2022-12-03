import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelExpenseService } from 'src/app/Services/travel-expense.service';
import { TravelExpense } from 'src/app/TravelExpense/TravelExpense';
import { AdminExpense } from '../AdminExpense';

@Component({
  selector: 'app-admin-expense-list',
  templateUrl: './admin-expense-list.component.html',
  styleUrls: ['./admin-expense-list.component.css']
})
export class AdminExpenseListComponent implements OnInit {
  fbs:string="";
  fbd:string="";
  expList:AdminExpense[]=[];
  constructor(private expService:TravelExpenseService,private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
  
    this.expService.getAllExpense().subscribe(
    data=>{
      this.expList=data;

    }
    )
  }
  updateExpenseStatus(expid:number){
    sessionStorage.setItem('updateExpStatusId',JSON.stringify(expid));
    this.router.navigate(['/updateAdminExpense']);
    
  }
  findByStatus(){
    this.expService.findExpenseByStatus(this.fbs).subscribe(data=>{
        this.expList=data;
      
    });
  }
  findByDate(){
    this.expService.findExpenseByDate(this.fbd).subscribe(data=>{
      this.expList=data;
    })
  }

}
