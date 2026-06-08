// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Wallets extends APIResource {
  /**
   * Lists every crypto wallet linked to the authenticated resource.
   */
  list(options?: RequestOptions): APIPromise<WalletListResponse> {
    return this._client.get('/wallets', options);
  }

  /**
   * Returns the platform catalog of swap-enabled tokens (from TokenRegistry). Public
   * — no API key required.
   */
  supportedAssets(options?: RequestOptions): APIPromise<WalletSupportedAssetsResponse> {
    return this._client.get('/wallets/supported-assets', options);
  }

  /**
   * Returns per-token balances held in an account's wallet.
   */
  balance(query: WalletBalanceParams, options?: RequestOptions): APIPromise<WalletBalanceResponse> {
    return this._client.get('/wallets/balance', { query, ...options });
  }

  /**
   * Sends USDT from an account's wallet to another Whop user or business.
   */
  send(params: WalletSendParams, options?: RequestOptions): APIPromise<WalletSendResponse> {
    const { account_id, ...body } = params;
    return this._client.post('/wallets/send', { query: { account_id }, body, ...options });
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

export interface WalletSupportedAssetsResponse {
  assets: Array<WalletSupportedAssetsResponse.Asset>;

  object: 'supported_assets';
}

export namespace WalletSupportedAssetsResponse {
  export interface Asset {
    chain_id: number;

    decimals: number;

    name: string;

    network: string;

    symbol: string;

    token_address: string;

    tradable: boolean;
  }
}

export interface WalletBalanceParams {
  /**
   * The business or user account ID whose wallet balance should be returned.
   */
  account_id: string;
}

export interface WalletSendParams {
  /**
   * Query param: The sending account ID.
   */
  account_id: string;

  /**
   * Body param: USDT amount to send.
   */
  amount: string;

  /**
   * Body param: Recipient user ID, business account ID, ledger account ID, or email.
   */
  to: string;
}

export declare namespace Wallets {
  export {
    type AccountWallet as AccountWallet,
    type WalletListResponse as WalletListResponse,
    type WalletBalanceResponse as WalletBalanceResponse,
    type WalletSendResponse as WalletSendResponse,
    type WalletSupportedAssetsResponse as WalletSupportedAssetsResponse,
    type WalletBalanceParams as WalletBalanceParams,
    type WalletSendParams as WalletSendParams,
  };
}
