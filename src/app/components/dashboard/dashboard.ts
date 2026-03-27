import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
expenceService = inject(ExpenseService);

}
