import { computed, Injectable, input, signal } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseCategory } from '../models/expense';

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

  addExpense(name: string, amount: number, cat: ExpenseCategory) {
    const newExpense: Expense = {
      id: this.generateId(), //generate Id function 
      title: name,
      amount: amount,
      category: cat
    }
    this.expenses.update(expenses => [...expenses, newExpense]);
  }

  delete(expenseId: string) {
    this.expenses.update(expenses => expenses.filter(expense =>
      expense.id != expenseId
    ))
  }

  private generateId = () => {
    return 'expence' + Date.now + '-' + Math.floor(Math.random() * 1000);
  }

  // edit() {

  // }

  // getExpenseById() {

  // }
}
