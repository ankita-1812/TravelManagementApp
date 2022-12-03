import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin/Admin';


import { Employee } from 'src/app/Employee/Employee';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import swal from 'sweetalert';
import { Login } from '../Login';
import { LoginType } from '../LoginType';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:any;
  login:Login =new Login();
  loginType = [
    new LoginType(1, 'admin'),
    new LoginType(2, 'employee')
    
] 
 emp:Employee | undefined;
 admin:any;
  constructor(private authSer:AuthenticationService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      loginType:['',Validators.required]
    })
  }
 
  onSubmit(){
    this.login.userName=this.loginForm.value.userName;
    this.login.password=this.loginForm.value.password;
    this.login.userType=this.loginForm.value.loginType.userType;
    sessionStorage.setItem('username', (this.login.userName).toString()); 
    sessionStorage.setItem('usertype', JSON.stringify(this.login.userType)); 
    console.log(this.loginForm.value)
    if(this.loginForm.value.loginType.userType=='employee'){
     console.log("sffs");
   
     
      this.authSer.loginEmployee(this.login).subscribe(data=>{
       this.emp=data;
       sessionStorage.setItem('empId', JSON.stringify(this.emp.empId)); 
       swal("Welcome back ",this.emp.empName,"success");
       if(data!=null)
       this.router.navigate(['/empProfile']).then(()=>{window.location.reload();
       console.log(data)
      if(data==null)
      console.log('sfjdlffa');
       
       },
      
      
       );
         
       
    //     if(data!=null)
   
  
      
      },
      error=>{
       
        // if(err.error.msg)
        console.log('fsff');
        swal ( "Invalid Credentials" ,  "Please try again" ,  "error" );
      }
      
   
      )
    }
    else{
      this.authSer.loginAdmin(this.login).subscribe(data=>{
        this.admin=data;
        sessionStorage.setItem('adminId', JSON.stringify(this.admin.adminId)); 
         console.log(this.admin);
         swal("Welcome back ",this.admin.adminName,"success");
         if(data!=null)
         this.router.navigate(['/empList']).then(()=>{window.location.reload(); });
       

         
       },
       error=>{
       
        // if(err.error.msg)
        console.log('fsff');
        swal ( "Oops" ,  "Please Try Again :(" ,  "error" );
      }
      
       )
    }
  
  //   this.authSer.login(this.loginForm.value).subscribe(data=>{
  //     console.log(typeof(data));
  //     if(data ==null){
  //       this.router.navigate(['/empHome'])
  //     }
  //     else if(data instanceof Admin){
  //       this.router.navigate(['/empHome'])
  //     }
  //   });
  }

}
