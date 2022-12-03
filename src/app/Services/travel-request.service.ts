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
  private baseUrl="http://localhost:8282/admin";
  constructor(private httpService:HttpClient) { }
  getRequestlist(){
    this.empId=sessionStorage.getItem("empId");
    return this.httpService.get<TravelRequest[]>('http://localhost:8282/employee/getalltravelrequest/'+this.empId);
  }

  public addRequest(empId:string,travelRequest:TravelRequest):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    console.log(JSON.stringify(travelRequest));
    return this.httpService.post('http://localhost:8282/employee/addemprequest/'+empId,JSON.stringify(travelRequest),{'headers':headers});
  }
  
  public updateRequest(empId:string,reqId:string,travelRequest:TravelRequest){
    return this.httpService.put('http://localhost:8282/employee/updateemprequest/'+reqId,travelRequest);
  }

  public updateRequestStatus(status:string){
    return this.httpService.get('http://localhost:8282/admin/updaterequeststatus/111/1103/'+status);
  }

  public  getReqById(reqId:number){
    
    return this.httpService.get<TravelRequest>('http://localhost:8282/travelrequest/getreqbyid/'+reqId);
  }

  public deleteReq(reqId:number){
    return this.httpService.delete('http://localhost:8282/employee/deleteemprequest/'+reqId);
  }
  
  public getAllRequest(){
    return this.httpService.get<AdminTravelRequest[]>('http://localhost:8282/travelrequest/findallreq');
  }
  public updateStatus(adminId:string,reqid:string,status:string){
    return  this.httpService.get('http://localhost:8282/admin/updaterequeststatus/'+adminId+'/'+reqid+'/'+status); 
   }

   public findRequestByStatus(status:string){
    return this.httpService.get<AdminTravelRequest[]>('http://localhost:8282/travelrequest/findbystatus/'+status);
   }
   public findRequestByDate(date:string){
    return this.httpService.get<AdminTravelRequest[]>('http://localhost:8282/travelrequest/findbydate/'+date);
   }
}

