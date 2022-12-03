import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminExpense } from '../Admin/AdminExpense';
import { TravelExpense } from '../TravelExpense/TravelExpense';

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseService {

  constructor(private httpService:HttpClient) { }
  getExpenseList(empid:string,reqexpid:string){
    return this.httpService.get<TravelExpense[]>('http://localhost:8282/employee/getalltravelexpense/'+empid+'/'+reqexpid);
  }
  public addExpense(empid:string,reqid:string,travelExpense:TravelExpense):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    console.log(travelExpense);
    return this.httpService.post('http://localhost:8282/employee/addempexpense/'+empid+'/'+reqid,JSON.stringify(travelExpense),{'headers':headers});
  }

  public updateExpense(expid:string,travelExpense:TravelExpense){
    return this.httpService.put('http://localhost:8282/employee/updateempexpense/'+expid,travelExpense);
  }

  public updateExpenseStatus(admin:string,resid:string,status:string){
    return this.httpService.get('http://localhost:8282/admin/updaterequestexpensestatus/'+admin+'/'+resid+'/'+status);
  }

  public getExpById(expid:number){
    return this.httpService.get<TravelExpense>('http://localhost:8282/travelexpense/findexpbyid/'+expid);
  }
  public deleteExp(expId:number){
    return this.httpService.delete('http://localhost:8282/employee/deleteempexpense/'+expId);
  }

  public getAllExpense(){
    return this.httpService.get<AdminExpense[]>('http://localhost:8282/travelexpense/findallreq');
  }
  public findExpenseByStatus(status:string){
    return this.httpService.get<AdminExpense[]>('http://localhost:8282/travelexpense/findbystatus/'+status);
  }
  public findExpenseByDate(date:string){
    return this.httpService.get<AdminExpense[]>('http://localhost:8282/travelexpense/findbydate/'+date);
  }
}
