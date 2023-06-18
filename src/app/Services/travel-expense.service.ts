import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminExpense } from '../Admin/AdminExpense';
import { TravelExpense } from '../TravelExpense/TravelExpense';

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseService {
  private baseUrl="https://travel-management-api-kf5h.onrender.com";

  constructor(private httpService:HttpClient) { }
  getExpenseList(empid:string,reqexpid:string){
    return this.httpService.get<TravelExpense[]>(this.baseUrl+'/employee/getalltravelexpense/'+empid+'/'+reqexpid);
  }
  public addExpense(empid:string,reqid:string,travelExpense:TravelExpense):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    console.log(travelExpense);
    return this.httpService.post(this.baseUrl+'/employee/addempexpense/'+empid+'/'+reqid,JSON.stringify(travelExpense),{'headers':headers});
  }

  public updateExpense(expid:string,travelExpense:TravelExpense){
    return this.httpService.put(this.baseUrl+'/employee/updateempexpense/'+expid,travelExpense);
  }

  public updateExpenseStatus(admin:string,resid:string,status:string){
    return this.httpService.get(this.baseUrl+'/admin/updaterequestexpensestatus/'+admin+'/'+resid+'/'+status);
  }

  public getExpById(expid:number){
    return this.httpService.get<TravelExpense>(this.baseUrl+'/travelexpense/findexpbyid/'+expid);
  }
  public deleteExp(expId:number){
    return this.httpService.delete(this.baseUrl+'/employee/deleteempexpense/'+expId);
  }

  public getAllExpense(){
    return this.httpService.get<AdminExpense[]>(this.baseUrl+'/travelexpense/findallreq');
  }
  public findExpenseByStatus(status:string){
    return this.httpService.get<AdminExpense[]>(this.baseUrl+'/travelexpense/findbystatus/'+status);
  }
  public findExpenseByDate(date:string){
    return this.httpService.get<AdminExpense[]>(this.baseUrl+'/findbydate/'+date);
  }
}
