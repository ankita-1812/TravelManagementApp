import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminExpense } from '../Admin/AdminExpense';
import { AdminTravelRequest } from '../Admin/AdminTravelRequest';
import { TravelRequest } from '../TravelRequest/TravelRequest';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {
  empId:any;
  private baseUrl="https://travel-management-api-kf5h.onrender.com";
  constructor(private httpService:HttpClient) { }
  getRequestlist(){
    this.empId=sessionStorage.getItem("empId");
    return this.httpService.get<TravelRequest[]>(this.baseUrl+'/employee/getalltravelrequest/'+this.empId);
  }

  public addRequest(empId:string,travelRequest:TravelRequest):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    console.log(JSON.stringify(travelRequest));
    return this.httpService.post(this.baseUrl+'/employee/addemprequest/'+empId,JSON.stringify(travelRequest),{'headers':headers});
  }
  
  public updateRequest(empId:string,reqId:string,travelRequest:TravelRequest){
    return this.httpService.put(this.baseUrl+'/employee/updateemprequest/'+reqId,travelRequest);
  }

  public updateRequestStatus(status:string){
    return this.httpService.get(this.baseUrl+'/admin/updaterequeststatus/111/1103/'+status);
  }

  public  getReqById(reqId:number){
    
    return this.httpService.get<TravelRequest>(this.baseUrl+'/travelrequest/getreqbyid/'+reqId);
  }

  public deleteReq(reqId:number){
    return this.httpService.delete(this.baseUrl+'/employee/deleteemprequest/'+reqId);
  }
  
  public getAllRequest(){
    return this.httpService.get<AdminTravelRequest[]>(this.baseUrl+'/travelrequest/findallreq');
  }
  public updateStatus(adminId:string,reqid:string,status:string){
    return  this.httpService.get(this.baseUrl+'/admin/updaterequeststatus/'+adminId+'/'+reqid+'/'+status); 
   }

   public findRequestByStatus(status:string){
    return this.httpService.get<AdminTravelRequest[]>(this.baseUrl+'/travelrequest/findbystatus/'+status);
   }
   public findRequestByDate(date:string){
    return this.httpService.get<AdminTravelRequest[]>(this.baseUrl+'/travelrequest/findbydate/'+date);
   }
}

