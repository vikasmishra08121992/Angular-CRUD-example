import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {EmployeeserviceService } from '../employeeservice.service'


@Component({
  selector: 'pm-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

   constructor(private route: ActivatedRoute,
    private router: Router,private employeeService: EmployeeserviceService) { }

  ngOnInit() {
     const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getDepartmentEmployee(id);
    }else{
      this.getEmployee();
    }
  }

  pageTitle = 'Employee List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  maxEmployeeDepartmentName = 'Java';
  filteredEmployee =  [];
  employees:any = [];

  getDepartmentEmployee(id){

    this.employeeService.getEmployeeList(id).subscribe(
      employees => {
        console.log(employees);
        this.employees = employees;
      },
      error => this.errorMessage = <any>error
    );
  }

  getEmployee(){

    this.employeeService.getEmployees().subscribe(
      employees => {
        console.log(employees);
        this.employees = employees;
      },
      error => this.errorMessage = <any>error
    );
  }
}
