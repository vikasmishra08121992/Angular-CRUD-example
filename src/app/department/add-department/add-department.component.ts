import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {DepartmentService } from '../department.service'
import {IDepartment } from '../department'

@Component({
  selector: 'pm-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentName = "";
  department:any;
  deptID:any;
  errorMessage='';
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
       this.deptID =   this.department.deptID;
       this.departmentName =  this.department.deptName

      },
      error => this.errorMessage = <any>error
    );
  }
  save(){
   if(!this.deptID){
    let  department  = {
    deptName:  this.departmentName
    };
    this.departmentservice.save(department).subscribe((response) => {
      console.log(response);
    });
    }else{
        let department  = {
        deptName:  this.departmentName,
        deptID: this.deptID
    };
    this.departmentservice.save(department).subscribe((response) => {
      console.log(response);
    });
    }

    this.router.navigate(['/department']);
  }
}
