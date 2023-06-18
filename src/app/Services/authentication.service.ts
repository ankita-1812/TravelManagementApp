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

  private baseUrl="https://travel-management-api-kf5h.onrender.com";

  constructor(private httpClient:HttpClient) { }
  loginEmployee(login:Login){
  console.log(login)
    return this.httpClient.get<Employee>(this.baseUrl+'/login/checkidentity/employee/'+login.userName+'/'+login.password+'/'+login.userType);

  }
  loginAdmin(login:Login){
    return this.httpClient.get<Admin>(this.baseUrl+'/login/checkidentity/admin/'+login.userName+'/'+login.password+'/'+login.userType);
  }

  updatePassword(usename:string,login:Login){
    return this.httpClient.put(this.baseUrl+'/login/updatepassword/'+usename,login);
  }
}
