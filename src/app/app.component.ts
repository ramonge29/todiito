import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';



@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'todiito-root',
  template: `
    <header class="py-8">
      <h1 class="text-5xl text-center mb-4">Hola Mundo</h1>
      <div class="flex justify-center">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
    </header>
  `,
})
export class AppComponent {
  title = 'todiito';
}
