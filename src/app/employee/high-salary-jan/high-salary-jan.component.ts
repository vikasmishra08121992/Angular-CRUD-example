import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {EmployeeserviceService } from '../employeeservice.service'


@Component({
  selector: 'pm-high-salary-jan',
  templateUrl: './high-salary-jan.component.html',
  styleUrls: ['./high-salary-jan.component.css']
})
export class HighSalaryJanComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,private employeeService: EmployeeserviceService) { }

    employees:any;
    errorMessage='';

  ngOnInit() {
     this.employeeService.getEmployeeshighINJan().subscribe(
      employees => {
        console.log(employees);
        this.employees = employees;
      },
      error => this.errorMessage = <any>error
    );
  }

}
