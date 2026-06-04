// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Ledger lines
 */
export class LedgerLines extends APIResource {
  /**
   * Returns a paginated list of ledger lines for a ledger account.
   *
   * Required permissions:
   *
   * - `company:balance:read`
   */
  list(
    query: LedgerLineListParams,
    options?: RequestOptions,
  ): PagePromise<LedgerLinesCursorPage, LedgerLine> {
    return this._client.getAPIList('/ledger_lines', CursorPage<LedgerLine>, { query, ...options });
  }
}

export type LedgerLinesCursorPage = CursorPage<LedgerLine>;

/**
 * A ledger line represents a single debit or credit entry on a ledger account.
 */
export interface LedgerLine {
  /**
   * The unique identifier of the ledger line.
   */
  id: string;

  /**
   * A human-readable identifier derived from the account path (e.g. a release date
   * or 'available').
   */
  account_identifier: string | null;

  /**
   * The amount of the ledger line in the currency's smallest precision units.
   */
  amount: string;

  /**
   * Currency information including code and precision.
   */
  currency: LedgerLine.Currency;

  /**
   * The semantic transaction category of the line (e.g. 'payment_payout', 'refund').
   * Matches the line_category filter.
   */
  line_category: string | null;

  /**
   * The timestamp when the ledger line was posted.
   */
  posted_at: string | null;

  /**
   * The tag of the resource this line originated from (e.g. a receipt or transfer),
   * if available.
   */
  source_id: string | null;
}

export namespace LedgerLine {
  /**
   * Currency information including code and precision.
   */
  export interface Currency {
    /**
     * The currency code (e.g. 'usd', 'eur').
     */
    code: string | null;

    /**
     * The precision factor for this currency (e.g. 100000000 for USD, 1 for
     * zero-decimal currencies).
     */
    precision: string;
  }
}

export interface LedgerLineListParams extends CursorPageParams {
  /**
   * The account to list ledger lines for. Accepts a user ID ('user_xxx'), company ID
   * ('biz_xxx'), or ledger account ID ('ldgr_xxx').
   */
  account_id: string;

  /**
   * Cursor for backward pagination to fetch the previous page.
   */
  before?: string | null;

  /**
   * Filter lines by currency code (e.g. 'usd').
   */
  currency?: string | null;

  /**
   * The maximum number of ledger lines to return per page, up to 200.
   */
  first?: number | null;

  /**
   * Filter lines by transaction type (e.g. 'payment_payout').
   */
  line_category?: string | null;

  /**
   * Filter lines posted after this timestamp.
   */
  posted_after?: string | null;

  /**
   * Filter lines posted before this timestamp.
   */
  posted_before?: string | null;
}

export declare namespace LedgerLines {
  export {
    type LedgerLine as LedgerLine,
    type LedgerLinesCursorPage as LedgerLinesCursorPage,
    type LedgerLineListParams as LedgerLineListParams,
  };
}
