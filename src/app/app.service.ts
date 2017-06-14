import { Injectable } from '@angular/core';

import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

//import { Budget } from './budget';
//import { Category } from './category';

@Injectable()
export class AppService {

  private jsonServerAPI = 'http://localhost:3000';
  error: Error;

  constructor(private http: Http) { }


  saveBudget(): void {

  }

  getAllBudgets(): void {

  }

  resetBudget(id: number): void {

  }

  getCategories(): void{

  }

}
