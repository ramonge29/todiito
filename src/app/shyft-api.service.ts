import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable ({ providedIn: 'root'})
export class ShyftApiService {
    private readonly _httpClient = inject(HttpClient);
    private readonly _headers = { 'x-api.key': 'W4R1KCcjtVgbPFdC'};
    private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

    getAccount(publicKey: string | null | undefined) {
        if (!publicKey){
            return of (null);
        }
        const url = new URL ('https://api.shyft.to/sol/v1/wallet/token_balance');

        url.searchParams.append('network', 'mainnet-beta');
        url.searchParams.append('wallet', publicKey);
        url.searchParams.append('token', this._mint);

        return this._httpClient.get<{ result: {balance: number; info: {image: string } }}>(
            url.toString(),
            { headers: this._headers }
        )
        .pipe(map(({ result }) => result));
    }
}