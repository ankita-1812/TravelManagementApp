import { Employee } from "../Employee/Employee";

export class AdminTravelRequest{
    travelRequestId:number=0;
    travelRequestDate:string="";
    travelRequestStatus:string="";
    travelRequestStartDate:string="";
    travelRequestEndDate:string="";
    travelRequestReason:string="";
    destinationFrom:string="";
    destinationTo:string="";
    estimatedExpense:string="";
    modeOfTravel:string="";
    employee:Employee=new Employee();
}