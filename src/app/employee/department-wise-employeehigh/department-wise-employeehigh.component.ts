import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {EmployeeserviceService } from '../employeeservice.service'



@Component({
  selector: 'pm-department-wise-employeehigh',
  templateUrl: './department-wise-employeehigh.component.html',
  styleUrls: ['./department-wise-employeehigh.component.css']
})
export class DepartmentWiseEmployeehighComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,
    private router: Router,private employeeService: EmployeeserviceService) { }

    employees:any;
    errorMessage='';

  ngOnInit() {
     this.employeeService.getEmployeeshighDepartment().subscribe(
      employees => {
        console.log(employees);
        this.employees = employees;
      },
      error => this.errorMessage = <any>error
    );
  }

}
