import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { FooterSectionComponent } from './footer-sections.component';
import { TransactionSectionComponent } from './transaction-section.component';

@Component({
  selector: 'todiito-home-page',
  standalone: true,
  template: `
    <todiito-balance-section></todiito-balance-section>
    <todiito-transaction-section></todiito-transaction-section>
    <todiito-footer-section></todiito-footer-section>
  `,
  imports: [
    BalanceSectionComponent,
    FooterSectionComponent,
    TransactionSectionComponent,
  ],
})
export class HomePageComponent {}
