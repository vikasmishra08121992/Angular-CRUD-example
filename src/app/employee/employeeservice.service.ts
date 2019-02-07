import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {IEmployee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

API_URL  =  'http://localhost:8080';
  constructor(private http: HttpClient) { }


  delete(id: number){
    console.log('test')
  return  this.http.get(`${this.API_URL}/department/deleteEmployee/${id}`);
  }

  getEmployees(){

  return  this.http.get(`${this.API_URL}/department/getEmployee`);
  }

  getEmployeeshighDepartment(){
    return  this.http.get(`${this.API_URL}/department/getEmployeeHigherSalaryDepartment`);
  }

  getEmployeeshighINJan(){

  return  this.http.get(`${this.API_URL}/department/getEmployeeHigherSalary`);
  }

  getEmployeeList(id: number){
    console.log('test')
  return  this.http.get(`${this.API_URL}/department/getEmployeeList/${id}`);
  }
  getEmployee(id: number){
    console.log('test')
  return  this.http.get(`${this.API_URL}/department/employee/${id}`);
  }
save(employee){
  return this.http.post(`http://localhost:8080/department/createEmployee`,employee);
}

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private extractData(res: Response) {
	    let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }
}
