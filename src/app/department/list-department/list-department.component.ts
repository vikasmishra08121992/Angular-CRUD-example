import { Component, OnInit } from '@angular/core';
import {DepartmentService } from '../department.service'
import {IDepartment } from '../department'


@Component({
  selector: 'pm-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

   pageTitle = 'Department List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  maxEmployeeDepartmentName = 'Java';


  _listFilter = '';

  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
     }

  filteredDepartments:any;
  departments : any;
  maxEmployeeDepart:any;
  constructor(private departmentservice: DepartmentService) {

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.departmentservice.getProducts().subscribe(
      departments => {
        console.log(departments);
        this.departments = departments;
        this.filteredDepartments = this.departments;
      },
      error => this.errorMessage = <any>error
    );


    this.departmentservice.getHighest().subscribe(
      departments => {
        console.log(departments);
        this.maxEmployeeDepart = departments
      },
      error => this.errorMessage = <any>error
    );
  }}
