// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FeeMarkups extends APIResource {
  /**
   * Create or update a fee markup for a company. If a markup for the specified fee
   * type already exists, it will be updated with the new values.
   *
   * Required permissions:
   *
   * - `company:update_child_fees`
   *
   * @example
   * ```ts
   * const feeMarkup = await client.feeMarkups.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   fee_type: 'crypto_withdrawal_markup',
   * });
   * ```
   */
  create(body: FeeMarkupCreateParams, options?: RequestOptions): APIPromise<FeeMarkupCreateResponse> {
    return this._client.post('/fee_markups', { body, ...options });
  }

  /**
   * Returns a paginated list of fee markups configured for a company. If the company
   * is a platform account, returns the platform default markups.
   *
   * Required permissions:
   *
   * - `company:update_child_fees`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const feeMarkupListResponse of client.feeMarkups.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FeeMarkupListParams,
    options?: RequestOptions,
  ): PagePromise<FeeMarkupListResponsesCursorPage, FeeMarkupListResponse> {
    return this._client.getAPIList('/fee_markups', CursorPage<FeeMarkupListResponse>, { query, ...options });
  }

  /**
   * Delete a fee markup configuration for a company. This removes the custom fee
   * override and reverts to the parent company's default fees.
   *
   * Required permissions:
   *
   * - `company:update_child_fees`
   *
   * @example
   * ```ts
   * const feeMarkup = await client.feeMarkups.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<FeeMarkupDeleteResponse> {
    return this._client.delete(path`/fee_markups/${id}`, options);
  }
}

export type FeeMarkupListResponsesCursorPage = CursorPage<FeeMarkupListResponse>;

/**
 * The types of fee markups that can be configured
 */
export type FeeMarkupType =
  | 'crypto_withdrawal_markup'
  | 'rtp_withdrawal_markup'
  | 'next_day_bank_withdrawal_markup'
  | 'bank_wire_withdrawal_markup'
  | 'digital_wallet_withdrawal_markup';

/**
 * A fee markup configuration that defines additional charges applied to
 * transactions for a company.
 */
export interface FeeMarkupCreateResponse {
  /**
   * The unique identifier for the fee markup.
   */
  id: string;

  /**
   * The datetime the fee markup was created.
   */
  created_at: string;

  /**
   * The category of fee this markup applies to.
   */
  fee_type: FeeMarkupType;

  /**
   * A flat fee charged per transaction, in USD. Ranges from 0 to 50. Null if no
   * fixed fee is configured.
   */
  fixed_fee_usd: number | null;

  /**
   * Internal notes about this fee markup, visible only to administrators. Null if no
   * notes have been added.
   */
  notes: string | null;

  /**
   * A percentage-based fee charged per transaction. Ranges from 0 to 25. Null if no
   * percentage fee is configured.
   */
  percentage_fee: number | null;

  /**
   * The datetime the fee markup was last updated.
   */
  updated_at: string;
}

/**
 * A fee markup configuration that defines additional charges applied to
 * transactions for a company.
 */
export interface FeeMarkupListResponse {
  /**
   * The unique identifier for the fee markup.
   */
  id: string;

  /**
   * The datetime the fee markup was created.
   */
  created_at: string;

  /**
   * The category of fee this markup applies to.
   */
  fee_type: FeeMarkupType;

  /**
   * A flat fee charged per transaction, in USD. Ranges from 0 to 50. Null if no
   * fixed fee is configured.
   */
  fixed_fee_usd: number | null;

  /**
   * Internal notes about this fee markup, visible only to administrators. Null if no
   * notes have been added.
   */
  notes: string | null;

  /**
   * A percentage-based fee charged per transaction. Ranges from 0 to 25. Null if no
   * percentage fee is configured.
   */
  percentage_fee: number | null;

  /**
   * The datetime the fee markup was last updated.
   */
  updated_at: string;
}

/**
 * Represents `true` or `false` values.
 */
export type FeeMarkupDeleteResponse = boolean;

export interface FeeMarkupCreateParams {
  /**
   * The unique identifier of the company to create or update the fee markup for.
   */
  company_id: string;

  /**
   * The type of fee this markup applies to, such as processing or platform fees.
   */
  fee_type: FeeMarkupType;

  /**
   * The fixed fee amount in USD to charge per transaction. Must be between 0 and 50.
   */
  fixed_fee_usd?: number | null;

  /**
   * Custom key-value metadata to attach to this fee markup.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Internal notes about this fee markup for record-keeping purposes.
   */
  notes?: string | null;

  /**
   * The percentage fee to charge per transaction. Must be between 0 and 25.
   */
  percentage_fee?: number | null;
}

export interface FeeMarkupListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list fee markups for. Pass a platform
   * account identifier to retrieve platform default markups.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace FeeMarkups {
  export {
    type FeeMarkupType as FeeMarkupType,
    type FeeMarkupCreateResponse as FeeMarkupCreateResponse,
    type FeeMarkupListResponse as FeeMarkupListResponse,
    type FeeMarkupDeleteResponse as FeeMarkupDeleteResponse,
    type FeeMarkupListResponsesCursorPage as FeeMarkupListResponsesCursorPage,
    type FeeMarkupCreateParams as FeeMarkupCreateParams,
    type FeeMarkupListParams as FeeMarkupListParams,
  };
}
