import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddDepartmentComponent, ListDepartmentComponent, DepartmentDetailsComponent],
   imports: [
    RouterModule.forChild([
      { path: 'department', component: ListDepartmentComponent },
       { path: 'addDepartment', component: AddDepartmentComponent },
      {
        path: 'department/:id',
        component: DepartmentDetailsComponent
      },
       {
        path: 'updateDepartment/:id',
        component: AddDepartmentComponent
      },
    ]),
    CommonModule , FormsModule
  ]
})
export class DepartmentModule { }
