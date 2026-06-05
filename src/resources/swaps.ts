// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Swaps extends APIResource {
  /**
   * Returns a stateless swap price preview. No funds move and nothing is persisted.
   */
  createQuote(body: SwapCreateQuoteParams, options?: RequestOptions): APIPromise<SwapCreateQuoteResponse> {
    return this._client.post('/swaps/quote', { body, ...options });
  }

  /**
   * Executes a swap from the account's wallet. Runs asynchronously — poll GET
   * /swaps/{account_id} for status.
   */
  create(body: SwapCreateParams, options?: RequestOptions): APIPromise<SwapCreateResponse> {
    return this._client.post('/swaps', { body, ...options });
  }

  /**
   * Returns the status of the account's in-flight or most recent swap.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<SwapRetrieveResponse> {
    return this._client.get(path`/swaps/${accountID}`, options);
  }
}

export interface SwapCreateResponse {
  account_id: string;

  object: 'swap';

  status: string;

  amount_out_expected?: string;

  amount_out_min?: string;

  rate?: string;

  to_chain?: string;
}

export interface SwapRetrieveResponse {
  account_id: string;

  object: 'swap';

  status: string;

  tx_hashes: Array<string>;

  error?: string | null;
}

export interface SwapCreateQuoteResponse {
  amount_in: string;

  amount_out: string;

  fee_bps: number;

  from_token: { [key: string]: unknown };

  metadata: { [key: string]: unknown };

  object: 'swap_quote';

  rate: string;

  to_token: { [key: string]: unknown };

  amount_out_min?: string;

  bridge_fee?: string | null;

  estimated_duration_seconds?: number | null;

  from_address?: string | null;

  requires_token_approval?: boolean | null;

  to_address?: string | null;
}

export interface SwapCreateQuoteParams {
  /**
   * Input token amount.
   */
  amount: string;

  /**
   * Source token contract address.
   */
  from_token: string;

  /**
   * Destination token contract address.
   */
  to_token: string;

  from_address?: string | null;

  from_chain?: string | number | null;

  metadata?: { [key: string]: unknown };

  slippage_bps?: number | null;

  to_address?: string | null;

  to_chain?: string | number | null;
}

export interface SwapCreateParams {
  /**
   * Business or user account ID (biz*\* / user*\*).
   */
  account_id: string;

  /**
   * Input token amount.
   */
  amount: string;

  /**
   * Source token contract address.
   */
  from_token: string;

  /**
   * Destination token contract address.
   */
  to_token: string;

  from_chain?: string | number | null;

  slippage_bps?: number | null;

  to_chain?: string | number | null;
}

export declare namespace Swaps {
  export {
    type SwapCreateResponse as SwapCreateResponse,
    type SwapRetrieveResponse as SwapRetrieveResponse,
    type SwapCreateQuoteResponse as SwapCreateQuoteResponse,
    type SwapCreateQuoteParams as SwapCreateQuoteParams,
    type SwapCreateParams as SwapCreateParams,
  };
}
