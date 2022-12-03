import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import swal from 'sweetalert';
import { Employee } from '../Employee';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
empUpdateForm:any;
  constructor(private empSer:EmployeeService,private fb:FormBuilder,private router:Router) { }
  empId:any;
  emp:Employee=new Employee();
  ngOnInit(): void {
    this.empUpdateForm=this.fb.group({
     
       empName:['',Validators.required],
       empMail:['',Validators.required],
       empAddr:['',Validators.required],
       empDept:['',Validators.required],
       empContactNo:['',Validators.required],
     });
     this.onload();
    
    
  }
  onload(){
    this.empId=sessionStorage.getItem('empId');
    this.empSer.findEmpByid(this.empId).subscribe(data=>{
    this.emp=data;
    this.empUpdateForm.get('empName').setValue(this.emp.empName);
    this.empUpdateForm.get('empMail').setValue(this.emp.empMail);
    this.empUpdateForm.get('empAddr').setValue(this.emp.empAddr);
    this.empUpdateForm.get('empDept').setValue(this.emp.empDept);
    this.empUpdateForm.get('empContactNo').setValue(this.emp.empContactNo);
    })
    
  }
  onSubmit(){
    this.empId=sessionStorage.getItem('empId');
    this.empSer.updateEmp(this.empId,this.empUpdateForm.value).subscribe(data=>{
      if(data!=null)
      {
        swal("Updated Succesfully ","","success");
        this.router.navigate(['/empProfile'])
      }
    });
   }
}
