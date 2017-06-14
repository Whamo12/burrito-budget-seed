import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
//import { Budget } from './budget';
//import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //Initialize budget, budget[], and categories[]
  error: Error;
  totalBurritos: number = 0;

  constructor(private appService: AppService) { }

  //Lifecycle hook that is called after data-bound properties of a directive are initialized.
  ngOnInit(): void {
    //this.getAllBudgets();
    //this.getCategories();
  }

  //Gets all categories from the database
  //and displays them in select box.
  getCategories(): void {

  }

  //Gets all budgets already saved in Database
  //returns budgets: Budget[]
  getAllBudgets(): void {

  }

  //A JSON representation of the form value
  //Validity state of the entire form
  onSubmit(): void {

  }

  //Iterates through budget arrary
  //grabs budget.id
  //deletes each 
  /*
  reset(): void {
    if (confirm("Are you sure to reset your burrito budget?")) {
      for (let budget of this.budgets) {
        this.appService.resetBudget(budget.id)
          .then(success => {
            this.getAllBudgets();
            this.totalBurritos = 0;
          })
          .catch(error => this.error = error);
      }
    }
  }
  */

  //If category is income == green
  //else category == red
  getStyle(id: number) {
    if (id != 1) {
      return "red";
    }
    else {
      return "green";
    }
  }

}
