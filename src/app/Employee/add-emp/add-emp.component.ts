import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  empForm:any;
  constructor(private empSer:EmployeeService,private fb:FormBuilder,private router:Router) { 

  }

  ngOnInit(): void {
    this.empForm=this.fb.group({
    
      empName:['',Validators.required],
      empMail:['',Validators.required],
      empAddr:['',Validators.required],
      empDept:['',Validators.required],
      empContactNo:['',Validators.required],
    })
  }
  onSubmit(){
    this.empSer.addEmployee(this.empForm.value).subscribe(data=>{
      swal("Employee Added Succesfully ","","success");
      this.router.navigate(['/empList'])
    });
  }

}
