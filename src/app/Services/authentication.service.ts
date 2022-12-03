import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Admin } from '../Admin/Admin';
import { Employee } from '../Employee/Employee';
import { Login } from '../Login/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  loginEmployee(login:Login){
  console.log(login)
    return this.httpClient.get<Employee>('http://localhost:8282/login/checkidentity/employee/'+login.userName+'/'+login.password+'/'+login.userType);

  }
  loginAdmin(login:Login){
    return this.httpClient.get<Admin>('http://localhost:8282/login/checkidentity/admin/'+login.userName+'/'+login.password+'/'+login.userType);
  }

  updatePassword(usename:string,login:Login){
    return this.httpClient.put('http://localhost:8282/login/updatepassword/'+usename,login);
  }
}
