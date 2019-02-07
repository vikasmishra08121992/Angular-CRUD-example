import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { IEmployee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'pm-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  
   pageTitle = 'Employee Detail';
  errorMessage = '';
  employee: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeserviceService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getEmployee(id);
    }
  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      employee => { this.employee = employee
        console.log(this.employee)
      },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/employee']);
  }


  delete(){
     this.employeeService.delete(this.employee.empId).subscribe(
      employee => { this.employee = employee
        console.log(this.employee)
      },
      error => this.errorMessage = <any>error);
    this.router.navigate(['/employee']);
  }

  update(){
  this.router.navigate(['/updateEmployee', this.employee.empId]);
 }


}
