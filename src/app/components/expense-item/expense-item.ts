import { Component, inject, input } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-item',
  imports: [],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expenseService = inject(ExpenseService);
  expense = input.required<Expense>();

  onDeleteTask() {
    this.expenseService.delete(this.expense().id);
  }
}
