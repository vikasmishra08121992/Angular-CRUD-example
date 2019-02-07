import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FormsModule } from '@angular/forms';
import { HighSalaryJanComponent } from './high-salary-jan/high-salary-jan.component';
import { DepartmentWiseEmployeehighComponent } from './department-wise-employeehigh/department-wise-employeehigh.component';

@NgModule({
  declarations: [AddemployeeComponent, ListemployeeComponent, EmployeedetailsComponent, HighSalaryJanComponent, DepartmentWiseEmployeehighComponent],
  imports: [
    RouterModule.forChild([
      { path: 'employee', component: ListemployeeComponent },
      { path: 'highjan', component: HighSalaryJanComponent },

      { path: 'departmentWise', component: DepartmentWiseEmployeehighComponent },
      
      { path: 'addEmployee', component: AddemployeeComponent },
      {
        path: 'employee/:id',
        component: EmployeedetailsComponent
      },
      {
        path: 'updateEmployee/:id',
        component: AddemployeeComponent
      },
       {
        path: 'employeeDepartment/:id',
        component: ListemployeeComponent
      },
    
    ]),
    CommonModule ,FormsModule
  ]
})
export class EmployeeModule { }
