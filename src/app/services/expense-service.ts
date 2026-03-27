import { computed, Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  categories = signal<string[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food',
  ]);
  transactionCount = computed(() => this.expenses().length);

  totalExpense = computed(() => {
    let sum = 0;

    for (const expense of this.expenses()) {
      sum += expense.amount;
    }
    return sum;
  })
  
  highestExpense = computed(() => {
    let highest = 0;

    for (const expense of this.expenses()) {
      if (expense.amount > highest) {
        highest = expense.amount;
      }
    }

    return highest;
  });

  averageExpense = computed(() => {
    let sum = 0;
    let total = this.transactionCount();

    for (const expense of this.expenses()) {
      sum += expense.amount;
    }
    return sum/total;
  });

  add() {

  }

  delete() {

  }

  edit() {

  }

  getExpenseById() {

  }
}
