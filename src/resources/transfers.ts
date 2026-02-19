// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transfers extends APIResource {
  /**
   * Transfer funds between two ledger accounts, such as from a company balance to a
   * user balance.
   *
   * Required permissions:
   *
   * - `payout:transfer_funds`
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.create({
   *   amount: 6.9,
   *   currency: 'usd',
   *   destination_id: 'destination_id',
   *   origin_id: 'origin_id',
   * });
   * ```
   */
  create(body: TransferCreateParams, options?: RequestOptions): APIPromise<Shared.Transfer> {
    return this._client.post('/transfers', { body, ...options });
  }

  /**
   * Retrieves the details of an existing transfer.
   *
   * Required permissions:
   *
   * - `payout:transfer:read`
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.retrieve(
   *   'ctt_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Transfer> {
    return this._client.get(path`/transfers/${id}`, options);
  }

  /**
   * Returns a paginated list of fund transfers, filtered by origin or destination
   * account, with optional sorting and date filtering.
   *
   * Required permissions:
   *
   * - `payout:transfer:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transferListResponse of client.transfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransferListResponsesCursorPage, TransferListResponse> {
    return this._client.getAPIList('/transfers', CursorPage<TransferListResponse>, { query, ...options });
  }
}

export type TransferListResponsesCursorPage = CursorPage<TransferListResponse>;

/**
 * A transfer of credit between two ledger accounts.
 */
export interface TransferListResponse {
  /**
   * The unique identifier for the credit transaction transfer.
   */
  id: string;

  /**
   * The transfer amount in the currency specified by the currency field. For
   * example, 10.43 represents $10.43 USD.
   */
  amount: number;

  /**
   * The datetime the credit transaction transfer was created.
   */
  created_at: string;

  /**
   * The currency in which this transfer amount is denominated.
   */
  currency: Shared.Currency;

  /**
   * The unique identifier of the ledger account receiving the funds.
   */
  destination_ledger_account_id: string;

  /**
   * The flat fee amount deducted from this transfer, in the transfer's currency.
   * Null if no flat fee was applied.
   */
  fee_amount: number | null;

  /**
   * Custom key-value pairs attached to this transfer. Maximum 50 keys, 500
   * characters per key, 5000 characters per value.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * A free-text note attached to this transfer by the sender. Null if no note was
   * provided.
   */
  notes: string | null;

  /**
   * The unique identifier of the ledger account that sent the funds.
   */
  origin_ledger_account_id: string;
}

export interface TransferCreateParams {
  /**
   * The amount to transfer in the specified currency. For example, 25.00 for $25.00
   * USD.
   */
  amount: number;

  /**
   * The currency of the transfer amount, such as 'usd'.
   */
  currency: Shared.Currency;

  /**
   * The identifier of the account receiving the funds. Accepts a user ID
   * ('user_xxx'), company ID ('biz_xxx'), or ledger account ID ('ldgr_xxx').
   */
  destination_id: string;

  /**
   * The identifier of the account sending the funds. Accepts a user ID ('user_xxx'),
   * company ID ('biz_xxx'), or ledger account ID ('ldgr_xxx').
   */
  origin_id: string;

  /**
   * A unique key to prevent duplicate transfers. Use a UUID or similar unique
   * string.
   */
  idempotence_key?: string | null;

  /**
   * A JSON object of custom metadata to attach to the transfer for tracking
   * purposes.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * A short note describing the transfer, up to 50 characters.
   */
  notes?: string | null;
}

export interface TransferListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return transfers created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return transfers created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Filter to transfers received by this account. Accepts a user, company, or ledger
   * account ID.
   */
  destination_id?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * Which columns can be used to sort.
   */
  order?: 'amount' | 'created_at' | null;

  /**
   * Filter to transfers sent from this account. Accepts a user, company, or ledger
   * account ID.
   */
  origin_id?: string | null;
}

export declare namespace Transfers {
  export {
    type TransferListResponse as TransferListResponse,
    type TransferListResponsesCursorPage as TransferListResponsesCursorPage,
    type TransferCreateParams as TransferCreateParams,
    type TransferListParams as TransferListParams,
  };
}
