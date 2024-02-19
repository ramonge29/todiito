import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';

@Component({
  selector: 'todiito-transaction-section',
  standalone: true,
  template: `
    <section>
      <p class="text-center">Tu balance actual es:</p>
      @if (account()) {
        <div>
          <img [src]="account()?.info?.image" class="w-8" />
          <p>{{ account()?.balance }}</p>
        </div>
      }
    </section>
  `,
})
export class TransactionSectionComponent {
  private readonly _ShyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._ShyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
}
