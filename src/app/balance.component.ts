import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { TransactionSectionComponent } from './transaction-section.component';

@Component({
  selector: 'todiito-balance-page',
  standalone: true,
  imports: [BalanceSectionComponent, TransactionSectionComponent],
  template: `
    <div class="">
      <todiito-balance-section></todiito-balance-section>
      Esto es una prueba
      <todiito-transaction-section></todiito-transaction-section>
    </div>
  `,
})
export class BalancePageComponent {}
