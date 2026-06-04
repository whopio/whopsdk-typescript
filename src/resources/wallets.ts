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

  /**
   * Produces a personal_sign or EIP-712 signature from the account's wallet. Nothing
   * is broadcast on-chain.
   */
  signMessage(
    params: WalletSignMessageParams,
    options?: RequestOptions,
  ): APIPromise<WalletSignMessageResponse> {
    const { account_id, ...body } = params;
    return this._client.post('/wallets/sign-message', { query: { account_id }, body, ...options });
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

export interface WalletSignMessageResponse {
  address: string;

  chain_id: number;

  object: 'signature';

  signature: string;

  type: string;
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

export interface WalletSignMessageParams {
  /**
   * Query param: The business or user account ID whose wallet signs.
   */
  account_id: string;

  /**
   * Body param: EIP-155 chain ID the signature is intended for (e.g. 9745 for
   * Plasma).
   */
  chain_id: number;

  /**
   * Body param: A UTF-8 string for personal_sign, or an EIP-712 object (domain,
   * types, primaryType, message) for typed_data.
   */
  message: unknown;

  /**
   * Body param: Signature scheme.
   */
  type: 'personal_sign' | 'typed_data';
}

export declare namespace Wallets {
  export {
    type AccountWallet as AccountWallet,
    type WalletListResponse as WalletListResponse,
    type WalletBalanceResponse as WalletBalanceResponse,
    type WalletSendResponse as WalletSendResponse,
    type WalletSignMessageResponse as WalletSignMessageResponse,
    type WalletSendParams as WalletSendParams,
    type WalletSignMessageParams as WalletSignMessageParams,
  };
}
