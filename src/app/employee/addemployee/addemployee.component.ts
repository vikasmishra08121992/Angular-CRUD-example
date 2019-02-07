import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {EmployeeserviceService } from '../employeeservice.service'


@Component({
  selector: 'pm-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
empId:any;
employeeName = "";
address = "";
email = "";
city = "";
phone = "";
deptId:any;
departments:any;

  constructor(private route: ActivatedRoute,
    private router: Router,private employeeService: EmployeeserviceService) { }
    errorMessage = '';
    employee:any;
    
  ngOnInit() {



     const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getEmployee(id);
    }
  }

  getEmployee(id){
      this.employeeService.getEmployee(id).subscribe(
      employee => {
        console.log(employee);
        this.employee = employee
        this.empId =  this.employee.empId
        this.employeeName=  this.employee.employeeName
        this.address=  this.employee.address
        this.email=  this.employee.email
        this.city=  this.employee.city
        this.phone=  this.employee.phone
        this.deptId = this.employee.deptId
      },
      error => this.errorMessage = <any>error
    );
  }
  save(){
   if(!this.empId){
    let  employee  = {
        deptId :  this.deptId,
       employeeName :  this.employeeName,
        address : this.address,
       email :this.email,
       city : this.city,
       phone :  this.phone,
    };
    this.employeeService.save(employee).subscribe((response) => {
      console.log(response);
    });
    }else{
        let employee  = {
            deptId :  this.deptId,
          empId :  this.empId,
       employeeName :  this.employeeName,
        address : this.address,
       email :this.email,
       city : this.city,
       phone :  this.phone,
    };
    this.employeeService.save(employee).subscribe((response) => {
      console.log(response);

    });

    }

    this.router.navigate(['/employee']);
  }

}
