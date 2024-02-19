import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HdWalletMultiButtonComponent,
    MatAnchor,
    RouterOutlet,
  ],
  selector: 'todiito-root',
  template: `
    <header class="py-8">
      <h1 class="text-5xl text-center mb-4">Todiito APP</h1>
      <div class="flex justify-center mb-4">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
      <nav>
        <ul class="flex justify-center items-center gap-4">
          <li>
            <a [routerLink]="['']" mat-raised-button> Home</a>
          </li>
          <li>
            <a
              [routerLink]="['src/app/balance.component.ts']"
              mat-raised-button
            >
              Balance</a
            >
          </li>
          <li>
            <a
              [routerLink]="['src/app/transaction-history.component']"
              mat-raised-button
              >transaction history</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
