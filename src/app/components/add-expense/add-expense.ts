import { Component, inject } from '@angular/core';
import { ExpenseCategory } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-add-expense',
  imports: [],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseService = inject(ExpenseService);

  onAddExpence(input: HTMLInputElement, amount: HTMLInputElement, category: HTMLSelectElement) { //bind to #id that is set in the html input 
    let expenseName = input.value;
    let expenseAmount = Number(amount.value);
    let expenseCat = category.value;

    if (!expenseName) {
      console.warn("please input an expense");
    }

    this.expenseService.addExpense(expenseName, expenseAmount, expenseCat as ExpenseCategory);
  }
}
