import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.css']
})
export class EmpHomeComponent implements OnInit {
  empId:any="";
  emp:Employee=new Employee();
  constructor(private empSer:EmployeeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.empId=sessionStorage.getItem("empId");
    this.empSer.findEmpByid(this.empId).subscribe(
      data=>{
        this.emp=data;
      }
    )
  }



}


