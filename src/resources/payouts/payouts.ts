// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MethodsAPI from './methods';
import {
  MethodCreateParams,
  MethodCreateResponse,
  MethodListParams,
  MethodListResponse,
  MethodListResponsesCursorPage,
  Methods,
} from './methods';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Payouts represent money sent from an account or user balance to an external destination, such as a bank account, wallet, or other saved payout method.
 *
 * Use the Payouts API to create payouts from stablecoin accounts, list payout history for accounts or users, monitor payout statuses, and show expected arrival details for funds leaving Whop.
 */
export class Payouts extends APIResource {
  methods: MethodsAPI.Methods = new MethodsAPI.Methods(this._client);

  /**
   * Lists payouts (withdrawal requests) for an account or user, most recent first.
   * Pass exactly one of account*id (a biz* identifier) or user*id (a user*
   * identifier). The saved payout method on each payout additionally requires the
   * payout:destination:read scope and is null without it.
   */
  list(
    query: PayoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayoutListResponsesCursorPage, PayoutListResponse> {
    return this._client.getAPIList('/payouts', CursorPage<PayoutListResponse>, { query, ...options });
  }

  /**
   * Creates a payout from a stablecoin account to a saved payout method. The
   * account's funds move from its stablecoin balance to an external bank account,
   * wallet, or crypto address. Accounts that pay out from a fiat balance use POST
   * /withdrawals. Requires the payouts API to be enabled for the account; contact
   * support to enable it. The payout settles asynchronously; poll GET /payouts for
   * the entry whose payout_request_id matches this payout's id.
   */
  create(params: PayoutCreateParams, options?: RequestOptions): APIPromise<PayoutCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/payouts', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type PayoutListResponsesCursorPage = CursorPage<PayoutListResponse>;

export interface PayoutCreateResponse {
  /**
   * Payout ID.
   */
  id: string;

  /**
   * The payout amount in whole currency units.
   */
  amount: number;

  /**
   * When the payout was created.
   */
  created_at: string;

  /**
   * Payout currency.
   */
  currency: string;

  /**
   * Estimated time the funds become available in the destination account. Null until
   * the payout settles.
   */
  estimated_arrival: string | null;

  /**
   * The fee charged for the payout, in the payout currency.
   */
  fee_amount: number;

  object: 'payout';

  /**
   * Name of the entity processing the payout. Null until the payout settles.
   */
  payer_name: string | null;

  /**
   * The saved payout method used. Requires payout:destination:read; null without it.
   */
  payout_token: PayoutCreateResponse.PayoutToken | null;

  /**
   * Payout delivery speed.
   */
  speed: 'standard' | 'instant';

  /**
   * Current payout status, in the same vocabulary as GET /payouts.
   */
  status: 'requested' | 'in_transit' | 'denied' | 'completed' | 'failed' | 'canceled';
}

export namespace PayoutCreateResponse {
  /**
   * The saved payout method used. Requires payout:destination:read; null without it.
   */
  export interface PayoutToken {
    /**
     * Saved payout method nickname.
     */
    nickname: string | null;

    /**
     * Payout destination display details.
     */
    payout_destination: PayoutToken.PayoutDestination | null;
  }

  export namespace PayoutToken {
    /**
     * Payout destination display details.
     */
    export interface PayoutDestination {
      /**
       * Payout destination icon URL.
       */
      icon_url: string | null;

      /**
       * Payout destination display name.
       */
      payer_name: string | null;
    }
  }
}

export interface PayoutListResponse {
  /**
   * Payout ID.
   */
  id: string;

  /**
   * The payout amount in whole currency units.
   */
  amount: number;

  /**
   * When the payout was created.
   */
  created_at: string;

  /**
   * Payout currency.
   */
  currency: string;

  /**
   * Estimated time the funds become available in the destination account.
   */
  estimated_arrival: string | null;

  /**
   * The fee charged for the payout, in the payout currency.
   */
  fee_amount: number;

  object: 'payout';

  /**
   * Name of the entity processing the payout.
   */
  payer_name: string | null;

  /**
   * The ID returned by POST /payouts when this payout was requested. Match it to the
   * settled payout in GET /payouts. Null for payouts not created by POST /payouts.
   */
  payout_request_id: string | null;

  /**
   * The saved payout method used. Requires payout:destination:read; null without it.
   */
  payout_token: PayoutListResponse.PayoutToken | null;

  /**
   * Payout delivery speed.
   */
  speed: 'standard' | 'instant';

  /**
   * Current payout status.
   */
  status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied';
}

export namespace PayoutListResponse {
  /**
   * The saved payout method used. Requires payout:destination:read; null without it.
   */
  export interface PayoutToken {
    /**
     * Saved payout method nickname.
     */
    nickname: string | null;

    /**
     * Payout destination display details.
     */
    payout_destination: PayoutToken.PayoutDestination | null;
  }

  export namespace PayoutToken {
    /**
     * Payout destination display details.
     */
    export interface PayoutDestination {
      /**
       * Payout destination icon URL.
       */
      icon_url: string | null;

      /**
       * Payout destination display name.
       */
      payer_name: string | null;
    }
  }
}

export interface PayoutListParams extends CursorPageParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Optional currency code filter, for example `usd`.
   */
  currency?: string;

  /**
   * Number of payouts to return from the start of the window.
   */
  first?: number;

  /**
   * Number of payouts to return from the end of the window.
   */
  last?: number;

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export interface PayoutCreateParams {
  /**
   * Body param: The account to pay out from (a biz\_ identifier).
   */
  account_id: string;

  /**
   * Body param: The amount to pay out in the specified currency.
   */
  amount: number;

  /**
   * Body param: The saved payout method to deliver to (a potk\_ identifier).
   */
  payout_method_id: string;

  /**
   * Body param: The payout currency. Defaults to usd.
   */
  currency?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

Payouts.Methods = Methods;

export declare namespace Payouts {
  export {
    type PayoutCreateResponse as PayoutCreateResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutListResponsesCursorPage as PayoutListResponsesCursorPage,
    type PayoutListParams as PayoutListParams,
    type PayoutCreateParams as PayoutCreateParams,
  };

  export {
    Methods as Methods,
    type MethodCreateResponse as MethodCreateResponse,
    type MethodListResponse as MethodListResponse,
    type MethodListResponsesCursorPage as MethodListResponsesCursorPage,
    type MethodListParams as MethodListParams,
    type MethodCreateParams as MethodCreateParams,
  };
}
