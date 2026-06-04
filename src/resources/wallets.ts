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
   * Returns the account's wallet address for receiving crypto, plus the EVM networks
   * that share that address.
   */
  depositAddress(
    accountID: string,
    query: WalletDepositAddressParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WalletDepositAddressResponse> {
    return this._client.get(path`/wallets/${accountID}/deposit-address`, { query, ...options });
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

export interface WalletDepositAddressResponse {
  address: string;

  object: 'deposit_address';

  supported_networks: Array<WalletDepositAddressResponse.SupportedNetwork>;

  /**
   * Echo of the validated asset filter, present when the caller passed ?asset=.
   */
  asset?: string;

  /**
   * Echo of the validated network filter, present when the caller passed ?network=.
   */
  network?: string;
}

export namespace WalletDepositAddressResponse {
  export interface SupportedNetwork {
    chain_id: number;

    name: string;
  }
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

export interface WalletDepositAddressParams {
  /**
   * Optional asset symbol the caller intends to deposit (e.g. USDT). Unsupported
   * assets are rejected with a 400 rather than silently ignored.
   */
  asset?: string;

  /**
   * Optional network the caller intends to deposit on (e.g. plasma). Unsupported
   * networks are rejected with a 400 rather than silently ignored.
   */
  network?: 'plasma' | 'base' | 'ethereum';
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
    type WalletDepositAddressResponse as WalletDepositAddressResponse,
    type WalletSendResponse as WalletSendResponse,
    type WalletDepositAddressParams as WalletDepositAddressParams,
    type WalletSendParams as WalletSendParams,
  };
}
