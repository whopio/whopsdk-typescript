// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Wallets extends APIResource {
  /**
   * Lists every crypto wallet linked to the authenticated resource.
   */
  list(options?: RequestOptions): APIPromise<WalletListResponse> {
    return this._client.get('/wallets', options);
  }

  /**
   * Unauthenticated health check for the native wallet routes.
   */
  ping(options?: RequestOptions): APIPromise<WalletPingResponse> {
    return this._client.get('/wallets/ping', options);
  }

  /**
   * Returns per-token balances held in an account's wallet.
   */
  balance(accountID: string, options?: RequestOptions): APIPromise<WalletBalanceResponse> {
    return this._client.get(path`/wallets/${accountID}/balance`, options);
  }

  /**
   * Sends USDT from an account's wallet to another Whop user or business.
   */
  send(accountID: string, body: WalletSendParams, options?: RequestOptions): APIPromise<WalletSendResponse> {
    return this._client.post(path`/wallets/${accountID}/sends`, { body, ...options });
  }
}

export interface AccountWallet {
  /**
   * The ID of the wallet, which will look like wallet\_******\*******
   */
  id: string;

  /**
   * The on-chain address of the wallet
   */
  address: string;

  /**
   * The blockchain network the wallet lives on
   */
  network: 'solana' | 'ethereum' | 'bitcoin';
}

export interface WalletListResponse {
  wallets: Array<WalletListResponse.Wallet>;
}

export namespace WalletListResponse {
  export interface Wallet {
    address: string;

    balance_usd: string;

    network: string;
  }
}

export interface WalletBalanceResponse {
  object: 'balance';

  tokens: Array<WalletBalanceResponse.Token>;

  total_usd: string;
}

export namespace WalletBalanceResponse {
  export interface Token {
    balance: string;

    icon_url: string | null;

    name: string;

    price_usd: number;

    symbol: string;

    token_address: string | null;

    value_usd: string;
  }
}

export interface WalletPingResponse {
  status: 'ok';
}

export interface WalletSendResponse {
  amount: string;

  currency: string;

  destination: WalletSendResponse.Destination;

  object: 'send';

  source: WalletSendResponse.Source;

  tx_hash: string;
}

export namespace WalletSendResponse {
  export interface Destination {
    account_id: string;

    address: string;
  }

  export interface Source {
    account_id: string;

    address: string;
  }
}

export interface WalletSendParams {
  /**
   * USDT amount to send.
   */
  amount: string;

  /**
   * Recipient user ID, business account ID, ledger account ID, or email.
   */
  to: string;
}

export declare namespace Wallets {
  export {
    type AccountWallet as AccountWallet,
    type WalletListResponse as WalletListResponse,
    type WalletBalanceResponse as WalletBalanceResponse,
    type WalletPingResponse as WalletPingResponse,
    type WalletSendResponse as WalletSendResponse,
    type WalletSendParams as WalletSendParams,
  };
}
