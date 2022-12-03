import { Employee } from "../Employee/Employee";
import { TravelRequest } from "../TravelRequest/TravelRequest";

export class AdminExpense{
    travelExpenseId:number=0;
    travelExpenseDate:string="";
    travelExpenseStatus:string="";
    travelDetails:string="";
    travelCostExpense:string="";
    employee:Employee=new Employee();
    travelRequest:TravelRequest=new TravelRequest();
}