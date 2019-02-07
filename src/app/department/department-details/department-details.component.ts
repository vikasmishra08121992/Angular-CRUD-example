import { Component, OnInit } from '@angular/core';

import {DepartmentService } from '../department.service'

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-department-details',
  templateUrl: './department-details.component.html'
})
export class DepartmentDetailsComponent implements OnInit {

department:any;
  errorMessage ='';
  constructor(private route: ActivatedRoute,
    private router: Router,private departmentservice: DepartmentService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getDepartment(id);
    }
  } 

  getDepartment(id){

    this.departmentservice.getDepartment(id).subscribe(
      departments => {
        console.log(departments);
        this.department = departments
      },
      error => this.errorMessage = <any>error
    );
  }
 update(){
  this.router.navigate(['/updateDepartment', this.department.deptID]);
 }
onBack(): void {
    this.router.navigate(['/department']);
  }

  delete(){
     this.departmentservice.delete( this.department.deptID).subscribe(
      departments => {
        console.log(departments);
        this.department = departments
      },
      error => this.errorMessage = <any>error
    );
    this.router.navigate(['/department']);
  }
}
