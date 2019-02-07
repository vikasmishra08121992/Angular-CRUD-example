import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {IDepartment } from './department'
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';;

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private productUrl = 'api/products/department.json';
  API_URL  =  'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProducts(){

  return  this.http.get(`${this.API_URL}/department/get`);
  }

  getDepartment(id: number){
    console.log('test')
  return  this.http.get(`${this.API_URL}/department/${id}`);
  }


  delete(id: number){
    console.log('test')
  return  this.http.get(`${this.API_URL}/department/deleteDepartment/${id}`);
  }
save(department){
  return this.http.post(`http://localhost:8080/department/create`,department);
}

getHighest(){
 return this.http.get(`${this.API_URL}/department/getDepartmentWithMaxEmployee`);
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
