// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Swaps convert value between supported tokens, chains, or wallet destinations for an account. A swap quote describes the expected output, fees, and approval requirements before you create the swap.
 *
 * Use the Swaps API to quote a conversion, create the swap, list recent swaps, and retrieve status until the transaction completes.
 */
export class Swaps extends APIResource {
  /**
   * Returns a stateless swap price preview. No funds move and nothing is persisted.
   */
  createQuote(params: SwapCreateQuoteParams, options?: RequestOptions): APIPromise<SwapCreateQuoteResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/swaps/quote', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Executes a swap from the account's wallet. Crypto swaps run asynchronously; poll
   * GET /swaps/{id} for status. A pair of fiat currency codes instead converts
   * ledger balances to repay a negative to_token balance: by default the conversion
   * brings that balance exactly to zero, or pass amount to repay part of the debt.
   * Fiat conversions complete synchronously, except when funding from USD on a
   * stablecoin-rails account, which starts an asynchronous repayment (status
   * "processing"). The id on a pending repayment is a reference to the repayment
   * workflow; GET /swaps/{id} reports status for crypto swaps only, so watch the
   * account balance for settlement instead of polling.
   */
  create(params: SwapCreateParams, options?: RequestOptions): APIPromise<SwapCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/swaps', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the account's swaps. Currently returns the in-flight or most recent swap,
   * so zero or one rows.
   */
  list(query: SwapListParams, options?: RequestOptions): APIPromise<SwapListResponse> {
    return this._client.get('/swaps', { query, ...options });
  }

  /**
   * Returns the status of a specific swap, by the id returned from POST /swaps.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SwapRetrieveResponse> {
    return this._client.get(path`/swaps/${id}`, options);
  }
}

export interface SwapCreateResponse {
  /**
   * Account ID that owns the wallet used for the swap.
   */
  account_id: string;

  object: 'swap';

  /**
   * Initial swap status.
   */
  status: string;

  /**
   * Swap ID. Poll `GET /swaps/:id` for status.
   */
  id?: string;

  /**
   * Fiat pairs only: amount of the funding currency converted. Null while a
   * stablecoin repayment is processing.
   */
  amount_in?: number | null;

  /**
   * Fiat pairs only: amount credited in the repaid currency. Null while a stablecoin
   * repayment is processing.
   */
  amount_out?: number | null;

  /**
   * Expected destination token amount.
   */
  amount_out_expected?: string;

  /**
   * Minimum destination amount after slippage.
   */
  amount_out_min?: string;

  /**
   * Fiat pairs only: the funding currency.
   */
  from_token?: SwapCreateResponse.FromToken | null;

  /**
   * Quoted exchange rate used to create the swap.
   */
  rate?: string;

  /**
   * Destination chain for the swap.
   */
  to_chain?: string;

  /**
   * Fiat pairs only: the repaid currency.
   */
  to_token?: SwapCreateResponse.ToToken | null;
}

export namespace SwapCreateResponse {
  /**
   * Fiat pairs only: the funding currency.
   */
  export interface FromToken {
    symbol?: string;
  }

  /**
   * Fiat pairs only: the repaid currency.
   */
  export interface ToToken {
    symbol?: string;
  }
}

export interface SwapRetrieveResponse {
  /**
   * Swap ID.
   */
  id: string;

  /**
   * Account ID that owns the wallet used for the swap.
   */
  account_id: string;

  object: 'swap';

  /**
   * Current swap status.
   */
  status: string;

  /**
   * On-chain transaction hashes produced by the swap.
   */
  tx_hashes: Array<string>;

  /**
   * Latest error returned for a failed swap.
   */
  error?: string | null;
}

export interface SwapListResponse {
  /**
   * Swaps returned for this account.
   */
  data: Array<SwapListResponse.Data>;
}

export namespace SwapListResponse {
  export interface Data {
    /**
     * Swap ID.
     */
    id: string;

    /**
     * Account ID that owns the wallet used for the swap.
     */
    account_id: string;

    object: 'swap';

    /**
     * Current swap status.
     */
    status: string;

    /**
     * On-chain transaction hashes produced by the swap.
     */
    tx_hashes: Array<string>;

    /**
     * Latest error returned for a failed swap.
     */
    error?: string | null;
  }
}

export interface SwapCreateQuoteResponse {
  /**
   * Source token amount used for the quote.
   */
  amount_in: string;

  /**
   * Estimated destination token amount.
   */
  amount_out: string;

  /**
   * Whop fee in basis points.
   */
  fee_bps: number;

  /**
   * Resolved source token details.
   */
  from_token: { [key: string]: unknown };

  /**
   * Metadata from the request.
   */
  metadata: { [key: string]: unknown };

  object: 'swap_quote';

  /**
   * Quoted exchange rate.
   */
  rate: string;

  /**
   * Resolved destination token details.
   */
  to_token: { [key: string]: unknown };

  /**
   * Minimum destination amount after slippage.
   */
  amount_out_min?: string;

  /**
   * Estimated bridge fee for cross-chain swaps.
   */
  bridge_fee?: string | null;

  /**
   * Estimated time for the swap to complete.
   */
  estimated_duration_seconds?: number | null;

  /**
   * Source wallet address used for the quote.
   */
  from_address?: string | null;

  /**
   * Whether the source token needs approval before swapping.
   */
  requires_token_approval?: boolean | null;

  /**
   * Destination wallet address used for the quote.
   */
  to_address?: string | null;
}

export interface SwapCreateQuoteParams {
  /**
   * Body param: Source token amount.
   */
  amount: string;

  /**
   * Body param: Source token contract address or ticker symbol, such as "USDT".
   */
  from_token: string;

  /**
   * Body param: Destination token contract address or ticker symbol, such as "XAUT".
   */
  to_token: string;

  /**
   * Body param: Source wallet address used for the quote.
   */
  from_address?: string | null;

  /**
   * Body param: Source chain name or chain ID. Defaults to the source token's chain
   * when omitted.
   */
  from_chain?: string | number | null;

  /**
   * Body param: Metadata to include with the quote response.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Maximum slippage tolerance in basis points.
   */
  slippage_bps?: number | null;

  /**
   * Body param: Destination wallet address used for the quote.
   */
  to_address?: string | null;

  /**
   * Body param: Destination chain name or chain ID. Defaults to the destination
   * token's chain when omitted.
   */
  to_chain?: string | number | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface SwapCreateParams {
  /**
   * Body param: Business or user account ID (biz*\* / user*\*).
   */
  account_id: string;

  /**
   * Body param: Source token contract address or ticker symbol, such as "USDT".
   */
  from_token: string;

  /**
   * Body param: Destination token contract address or ticker symbol, such as "XAUT".
   */
  to_token: string;

  /**
   * Body param: Source token amount. Required for crypto swaps. Optional for fiat
   * pairs: the portion of the negative to_token balance to repay, which must not
   * exceed the debt; omit to repay the full debt.
   */
  amount?: string | null;

  /**
   * Body param: Source chain name or chain ID. Defaults to the source token's chain
   * when omitted.
   */
  from_chain?: string | number | null;

  /**
   * Body param: Maximum slippage tolerance in basis points.
   */
  slippage_bps?: number | null;

  /**
   * Body param: Destination chain name or chain ID. Defaults to the destination
   * token's chain when omitted.
   */
  to_chain?: string | number | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface SwapListParams {
  /**
   * Business or user account ID (biz*\* / user*\*).
   */
  account_id: string;
}

export declare namespace Swaps {
  export {
    type SwapCreateResponse as SwapCreateResponse,
    type SwapRetrieveResponse as SwapRetrieveResponse,
    type SwapListResponse as SwapListResponse,
    type SwapCreateQuoteResponse as SwapCreateQuoteResponse,
    type SwapCreateQuoteParams as SwapCreateQuoteParams,
    type SwapCreateParams as SwapCreateParams,
    type SwapListParams as SwapListParams,
  };
}
