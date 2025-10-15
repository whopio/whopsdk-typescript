// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transfers extends APIResource {
  /**
   * Creates a new transfer between ledger accounts
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
   * Retrieves a transfer by ID
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
   * Lists transfers
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
 * Credit Transaction Transfer
 */
export interface TransferListResponse {
  /**
   * The unique identifier of the credit transaction transfer
   */
  id: string;

  /**
   * The amount of the credit transaction transfer
   */
  amount: number;

  /**
   * The timestamp when the credit transaction transfer was created
   */
  created_at: string;

  /**
   * The currency of the credit transaction transfer
   */
  currency: Shared.Currency;

  /**
   * The ID of the destination ledger account
   */
  destination_ledger_account_id: string;

  /**
   * The decimal fee of the credit transaction transfer
   */
  fee_amount: number | null;

  /**
   * The notes of the credit transaction transfer
   */
  notes: string | null;

  /**
   * The ID of the origin ledger account
   */
  origin_ledger_account_id: string;
}

export interface TransferCreateParams {
  /**
   * The amount to withdraw
   */
  amount: number;

  /**
   * The currency that is being withdrawn.
   */
  currency: Shared.Currency;

  /**
   * The ID of the destination account which will receive the funds (either a User
   * ID, Company ID, or LedgerAccount ID)
   */
  destination_id: string;

  /**
   * The ID of the origin account which will send the funds (either a User ID,
   * Company ID, or LedgerAccount ID)
   */
  origin_id: string;

  /**
   * A unique key to ensure idempotence. Use a UUID or similar.
   */
  idempotence_key?: string | null;

  /**
   * Notes for the transfer. Maximum of 50 characters.
   */
  notes?: string | null;
}

export interface TransferListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter transfers to only those that were sent to this destination account.
   * (user_xxx, biz_xxx, ldgr_xxx)
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
   * Filter transfers to only those that were sent from this origin account.
   * (user_xxx, biz_xxx, ldgr_xxx)
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
