// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Payouts represent money sent from an account or user balance to an external destination, such as a bank account, wallet, or other saved payout method.
 *
 * Use the Payouts API to create payouts from stablecoin accounts, list payout history for accounts or users, monitor payout statuses, and show expected arrival details for funds leaving Whop.
 */
export class Methods extends APIResource {
  /**
   * Lists the saved payout methods (bank accounts, digital wallets, crypto
   * addresses) that an account or user can withdraw to, most recently added first.
   * Pass exactly one of account*id (a biz* identifier) or user*id (a user*
   * identifier). Pass an amount to additionally get a fee and delivery quote per
   * method for withdrawing that amount.
   */
  list(
    query: MethodListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MethodListResponsesCursorPage, MethodListResponse> {
    return this._client.getAPIList('/payouts/methods', CursorPage<MethodListResponse>, { query, ...options });
  }

  /**
   * Saves a new payout method for an account or user by submitting the destination's
   * required fields, keyed by field id (list them with GET
   * /payouts/methods?destination_id=...). Sensitive values are vaulted in transit
   * and never stored raw; a Basis Theory token id may be passed in place of a raw
   * value. The created method is immediately usable as payout_method_id on POST
   * /payouts. A field validation failure returns the destination's full
   * required_fields schema alongside the error.
   */
  create(params: MethodCreateParams, options?: RequestOptions): APIPromise<MethodCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/payouts/methods', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type MethodListResponsesCursorPage = CursorPage<MethodListResponse>;

export interface MethodCreateResponse {
  /**
   * Payout method ID, usable as payout_method_id on POST /payouts.
   */
  id: string;

  /**
   * Masked identifier for the destination.
   */
  account_reference: string | null;

  created_at: string;

  destination_currency: string;

  institution_name: string | null;

  is_default: boolean;

  nickname: string | null;

  object: 'payout_method';

  payer_name: string | null;

  payout_destination: MethodCreateResponse.PayoutDestination | null;

  /**
   * Always null on create.
   */
  quote: unknown | null;

  status: 'created' | 'active' | 'broken';
}

export namespace MethodCreateResponse {
  export interface PayoutDestination {
    delivery_type: string;

    icon_url: string | null;

    name: string | null;

    supports_instant_delivery: boolean;

    supports_standard_delivery: boolean;
  }
}

export interface MethodListResponse {
  /**
   * Payout method ID.
   */
  id: string;

  /**
   * Masked identifier for the destination, such as the last four digits of a bank
   * account.
   */
  account_reference: string | null;

  /**
   * When the payout method was added.
   */
  created_at: string;

  /**
   * Currency payouts are delivered in for this method.
   */
  destination_currency: string;

  /**
   * Name of the bank or institution receiving payouts.
   */
  institution_name: string | null;

  /**
   * Whether this is the default payout method for the account.
   */
  is_default: boolean;

  /**
   * User-defined label for the payout method.
   */
  nickname: string | null;

  object: 'payout_method';

  /**
   * Display name of the payout rail, such as `ACH Bank Deposit`.
   */
  payer_name: string | null;

  /**
   * The payout rail this method delivers through.
   */
  payout_destination: MethodListResponse.PayoutDestination | null;

  /**
   * Fee and delivery estimate for withdrawing the requested amount through this
   * method. Null unless an amount was provided, or when the estimate is unavailable.
   */
  quote: MethodListResponse.Quote | null;

  /**
   * Lifecycle status: `created` means saved but unused, `active` means a payout
   * succeeded through it, `broken` means the last payout failed.
   */
  status: 'created' | 'active' | 'broken';
}

export namespace MethodListResponse {
  /**
   * The payout rail this method delivers through.
   */
  export interface PayoutDestination {
    /**
     * How funds are delivered, for example `bank_deposit`.
     */
    delivery_type: string;

    /**
     * Payout destination icon URL.
     */
    icon_url: string | null;

    /**
     * Payout destination display name.
     */
    name: string | null;

    supports_instant_delivery: boolean;

    supports_standard_delivery: boolean;
  }

  /**
   * Fee and delivery estimate for withdrawing the requested amount through this
   * method. Null unless an amount was provided, or when the estimate is unavailable.
   */
  export interface Quote {
    /**
     * The withdrawal amount the quote is for.
     */
    amount: number;

    /**
     * Currency of the quoted amount.
     */
    currency: string;

    /**
     * Exchange rate from the withdrawal currency to the destination currency.
     */
    exchange_rate: number;

    /**
     * Instant-delivery estimate. Null if the method does not support instant delivery,
     * instant delivery is unavailable for the account, or the amount does not cover
     * the fee.
     */
    instant: Quote.Instant | null;

    /**
     * Maximum withdrawal amount for this method, in the withdrawal currency.
     */
    max_limit: number | null;

    /**
     * Minimum withdrawal amount for this method, in the withdrawal currency.
     */
    min_limit: number;

    /**
     * Standard-delivery estimate. Null if the method does not support standard
     * delivery, or the amount does not cover the fee.
     */
    standard: Quote.Standard | null;
  }

  export namespace Quote {
    /**
     * Instant-delivery estimate. Null if the method does not support instant delivery,
     * instant delivery is unavailable for the account, or the amount does not cover
     * the fee.
     */
    export interface Instant {
      /**
       * Estimated time the funds become available.
       */
      estimated_arrival: string;

      /**
       * Total fee charged, in the withdrawal currency.
       */
      fee: number;

      /**
       * Amount delivered after fees, in the withdrawal currency.
       */
      total_received: number;
    }

    /**
     * Standard-delivery estimate. Null if the method does not support standard
     * delivery, or the amount does not cover the fee.
     */
    export interface Standard {
      /**
       * Estimated time the funds become available.
       */
      estimated_arrival: string;

      /**
       * Total fee charged, in the withdrawal currency.
       */
      fee: number;

      /**
       * Amount delivered after fees, in the withdrawal currency.
       */
      total_received: number;
    }
  }
}

export interface MethodListParams extends CursorPageParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * Optional withdrawal amount in whole currency units, for example `250.00`. When
   * provided, each method includes a quote with the estimated fee, amount received,
   * and delivery date for that amount.
   */
  amount?: number;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Currency code of the amount, for example `usd`. Only meaningful with amount.
   */
  currency?: string;

  /**
   * Currency the destination would deliver payouts in. Only meaningful with
   * destination_id; required fields vary by destination currency.
   */
  destination_currency?: string;

  /**
   * Narrows available*destinations to this one destination (a pd* identifier from a
   * previous listing) and includes its required_fields — the values to collect to
   * add it as a payout method. Implies include_available.
   */
  destination_id?: string;

  /**
   * Number of payout methods to return from the start of the window.
   */
  first?: number;

  /**
   * When true, the response also carries available_destinations — payout rails the
   * account could add as a new payout method, with per-currency quotes when an
   * amount is provided.
   */
  include_available?: boolean;

  /**
   * Number of payout methods to return from the end of the window.
   */
  last?: number;

  /**
   * Optional status filter. `created` means saved but unused, `active` means a
   * payout through it succeeded, `broken` means the last payout failed and the
   * method needs fixing.
   */
  status?: 'created' | 'active' | 'broken';

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export interface MethodCreateParams {
  /**
   * Body param: The payout destination to add (a pd\_ identifier from a previous
   * listing).
   */
  destination_id: string;

  /**
   * Body param: The destination's required field values, keyed by field id.
   */
  fields: { [key: string]: string };

  /**
   * Body param: A label for the payout method, unique per destination.
   */
  nickname: string;

  /**
   * Body param: The account to add the payout method for (a biz\_ identifier).
   * Provide this or user_id.
   */
  account_id?: string;

  /**
   * Body param: Currency the destination delivers payouts in.
   */
  destination_currency?: string;

  /**
   * Body param: Whether to make this the account's default payout method.
   */
  is_default?: boolean;

  /**
   * Body param: The user to add the payout method for (a user\_ identifier). Provide
   * this or account_id.
   */
  user_id?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace Methods {
  export {
    type MethodCreateResponse as MethodCreateResponse,
    type MethodListResponse as MethodListResponse,
    type MethodListResponsesCursorPage as MethodListResponsesCursorPage,
    type MethodListParams as MethodListParams,
    type MethodCreateParams as MethodCreateParams,
  };
}
