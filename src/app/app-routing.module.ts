import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminExpenseListComponent } from './Admin/admin-expense-list/admin-expense-list.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminRequestListComponent } from './Admin/admin-request-list/admin-request-list.component';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';
import { EmpHomeComponent } from './Employee/emp-home/emp-home.component';
import { EmpListComponent } from './Employee/emp-list/emp-list.component';
import { EmpProfileComponent } from './Employee/emp-profile/emp-profile.component';
import { UpdateEmpComponent } from './Employee/update-emp/update-emp.component';
import { HeaderComponent } from './Header/header/header.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { UpdatePassComponent } from './Login/update-pass/update-pass.component';
import { AddExpenseComponent } from './TravelExpense/add-expense/add-expense.component';
import { ExpenseListComponent } from './TravelExpense/expense-list/expense-list.component';
import { UpdateExpenseStatusComponent } from './TravelExpense/update-expense-status/update-expense-status.component';
import { UpdateExpenseComponent } from './TravelExpense/update-expense/update-expense.component';
import { AddReqComponent } from './TravelRequest/add-req/add-req.component';
import { RequestListComponent } from './TravelRequest/request-list/request-list.component';
import { UpdateReqStatusComponent } from './TravelRequest/update-req-status/update-req-status.component';
import { UpdateReqComponent } from './TravelRequest/update-req/update-req.component';

const routes: Routes = [
   {path:'app-route',component:AppComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'Home',component:EmpHomeComponent},
  {path:'login',component:LoginPageComponent},
  {path:'empProfile',component:EmpProfileComponent},
  {path:'reqList',component:RequestListComponent},
  {path:'addReq',component:AddReqComponent},
  {path:'updateReq',component:UpdateReqComponent},
  {path:'expList',component:ExpenseListComponent},
  {path:'addExpense',component:AddExpenseComponent},
  {path:'updateExpense',component:UpdateExpenseComponent},
  {path:'empList',component:EmpListComponent},
  {path:'addEmp',component:AddEmpComponent},
  {path:'AdminExpenseList',component:AdminExpenseListComponent},
  {path:'AdminRequestList',component:AdminRequestListComponent},
  {path:'updateAdminExpense',component:UpdateExpenseStatusComponent},
  {path:'updateAdminRequest',component:UpdateReqStatusComponent},
  {path:'updateEmp',component:UpdateEmpComponent},
  {path:'header',component:HeaderComponent},
  {path:'updatePassword',component:UpdatePassComponent},  
  { path: '**', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
