import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';


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
      @if (account()){
        <div>
          <img [src]="account()?.info?.image" class="w-8"/>
          <p>{{account()?.balance}}</p>
        </div>
      }

    </header>
  `,
})
export class AppComponent {
  title = 'todiito';
  private readonly _ShyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._ShyftApiService.getAccount(this._publicKey()?.toBase58()), { requireSync: true },
  );
}
