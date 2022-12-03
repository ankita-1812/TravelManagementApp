
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from '../Employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8282/admin";


  constructor(private httpService:HttpClient) { }

  getEmplist(){
    console.log(this.httpService.get<any[]>(this.baseUrl+'/findallemp'));
    return this.httpService.get<Employee[]>('http://localhost:8282/admin/findallemp');
  }

  public addEmployee(employee:Employee):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    console.log(JSON.stringify(employee));
    return this.httpService.post('http://localhost:8282/admin/addemp',JSON.stringify(employee),{'headers':headers});
    }
    
    public updateEmp(empid:string,emp:Employee){
      return this.httpService.put('http://localhost:8282/employee/updateemp/'+empid,emp);
    }
  
    public findEmpByid(empid:string){
      return this.httpService.get<Employee>('http://localhost:8282/employee/findempbyid/'+empid);
    }
    public deleteEmp(empid:number){
      return this.httpService.delete('http://localhost:8282/admin/deleteemp/'+empid);
    }

}
