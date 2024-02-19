import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { FooterSectionComponent } from './footer-sections.component';

@Component({
  selector: 'todiito-home-page',
  standalone: true,
  template: `
    <todiito-balance-section></todiito-balance-section>
    <todiito-footer-section></todiito-footer-section>
  `,
  imports: [BalanceSectionComponent, FooterSectionComponent],
})
export class HomePageComponent {}
