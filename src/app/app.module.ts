import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { EmpHomeComponent } from './Employee/emp-home/emp-home.component';
import { RequestListComponent } from './TravelRequest/request-list/request-list.component';
import { EmpProfileComponent } from './Employee/emp-profile/emp-profile.component';
import { AddReqComponent } from './TravelRequest/add-req/add-req.component';
import { UpdateReqComponent } from './TravelRequest/update-req/update-req.component';
import { ExpenseListComponent } from './TravelExpense/expense-list/expense-list.component';
import { AddExpenseComponent } from './TravelExpense/add-expense/add-expense.component';
import { UpdateExpenseComponent } from './TravelExpense/update-expense/update-expense.component';
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';
import { EmpListComponent } from './Employee/emp-list/emp-list.component';
import { UpdateReqStatusComponent } from './TravelRequest/update-req-status/update-req-status.component';
import { UpdateExpenseStatusComponent } from './TravelExpense/update-expense-status/update-expense-status.component';
import { AdminExpenseListComponent } from './Admin/admin-expense-list/admin-expense-list.component';
import { AdminRequestListComponent } from './Admin/admin-request-list/admin-request-list.component';
import { UpdateEmpComponent } from './Employee/update-emp/update-emp.component';
import { HeaderComponent } from './Header/header/header.component';
import { UpdatePassComponent } from './Login/update-pass/update-pass.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminHomeComponent,
    EmpHomeComponent,
    RequestListComponent,
    EmpProfileComponent,
    AddReqComponent,
    UpdateReqComponent,
    ExpenseListComponent,
    AddExpenseComponent,
    UpdateExpenseComponent,
    AddEmpComponent,
    EmpListComponent,
    UpdateReqStatusComponent,
    UpdateExpenseStatusComponent,
    AdminExpenseListComponent,
    AdminRequestListComponent,
    UpdateEmpComponent,
    HeaderComponent,
    UpdatePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
