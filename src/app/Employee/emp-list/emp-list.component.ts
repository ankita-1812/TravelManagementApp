import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import  swal from 'sweetalert';
import { Employee } from '../Employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empList:Employee[]=[];
  constructor(private empSer:EmployeeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.empSer.getEmplist().subscribe(
      data=>{
        this.empList=data;
        console.log(this.empList);
      }
    )
  }
  deleteEmp(empid:number){
    this.empSer.deleteEmp(empid).subscribe(data=>{
      swal("Employee Deleted Succesfully ","","success");
      this.loadData();
    })
  }
}
