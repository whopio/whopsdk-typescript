// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PayoutMethodsAPI from './payout-methods';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Payout methods
 */
export class PayoutMethods extends APIResource {
  /**
   * Retrieves the details of an existing payout method.
   *
   * Required permissions:
   *
   * - `payout:destination:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutMethodRetrieveResponse> {
    return this._client.get(path`/payout_methods/${id}`, options);
  }

  /**
   * Returns a list of active payout methods configured for a company, ordered by
   * most recently created.
   *
   * Required permissions:
   *
   * - `payout:destination:read`
   */
  list(
    query: PayoutMethodListParams,
    options?: RequestOptions,
  ): PagePromise<PayoutMethodListResponsesCursorPage, PayoutMethodListResponse> {
    return this._client.getAPIList('/payout_methods', CursorPage<PayoutMethodListResponse>, {
      query,
      ...options,
    });
  }
}

export type PayoutMethodListResponsesCursorPage = CursorPage<PayoutMethodListResponse>;

/**
 * The category of a payout destination.
 */
export type PayoutDestinationCategory =
  | 'crypto'
  | 'rtp'
  | 'next_day_bank'
  | 'bank_wire'
  | 'digital_wallet'
  | 'unknown';

/**
 * A configured payout destination where a user receives earned funds, such as a
 * bank account or digital wallet.
 */
export interface PayoutMethodRetrieveResponse {
  /**
   * The unique identifier for the payout token.
   */
  id: string;

  /**
   * A masked identifier for the payout destination, such as the last four digits of
   * a bank account or an email address. Null if no reference is available.
   */
  account_reference: string | null;

  /**
   * The company associated with this payout destination. Null if not linked to a
   * specific company.
   */
  company: PayoutMethodRetrieveResponse.Company | null;

  /**
   * The datetime the payout token was created.
   */
  created_at: string;

  /**
   * The three-letter ISO currency code that payouts are delivered in for this
   * destination.
   */
  currency: string;

  /**
   * The payout destination configuration linked to this token. Null if not yet
   * configured.
   */
  destination: PayoutMethodRetrieveResponse.Destination | null;

  /**
   * The name of the bank or financial institution receiving payouts. Null if not
   * applicable or not provided.
   */
  institution_name: string | null;

  /**
   * Whether this is the default payout destination for the associated payout
   * account.
   */
  is_default: boolean;

  /**
   * A user-defined label to help identify this payout destination. Not sent to the
   * provider. Null if no nickname has been set.
   */
  nickname: string | null;
}

export namespace PayoutMethodRetrieveResponse {
  /**
   * The company associated with this payout destination. Null if not linked to a
   * specific company.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The payout destination configuration linked to this token. Null if not yet
   * configured.
   */
  export interface Destination {
    /**
     * The category of the payout destination
     */
    category: PayoutMethodsAPI.PayoutDestinationCategory;

    /**
     * The country code of the payout destination
     */
    country_code: string;

    /**
     * The name of the payer associated with the payout destination
     */
    name: string;
  }
}

/**
 * A configured payout destination where a user receives earned funds, such as a
 * bank account or digital wallet.
 */
export interface PayoutMethodListResponse {
  /**
   * The unique identifier for the payout token.
   */
  id: string;

  /**
   * A masked identifier for the payout destination, such as the last four digits of
   * a bank account or an email address. Null if no reference is available.
   */
  account_reference: string | null;

  /**
   * The company associated with this payout destination. Null if not linked to a
   * specific company.
   */
  company: PayoutMethodListResponse.Company | null;

  /**
   * The datetime the payout token was created.
   */
  created_at: string;

  /**
   * The three-letter ISO currency code that payouts are delivered in for this
   * destination.
   */
  currency: string;

  /**
   * The payout destination configuration linked to this token. Null if not yet
   * configured.
   */
  destination: PayoutMethodListResponse.Destination | null;

  /**
   * The name of the bank or financial institution receiving payouts. Null if not
   * applicable or not provided.
   */
  institution_name: string | null;

  /**
   * Whether this is the default payout destination for the associated payout
   * account.
   */
  is_default: boolean;

  /**
   * A user-defined label to help identify this payout destination. Not sent to the
   * provider. Null if no nickname has been set.
   */
  nickname: string | null;
}

export namespace PayoutMethodListResponse {
  /**
   * The company associated with this payout destination. Null if not linked to a
   * specific company.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The payout destination configuration linked to this token. Null if not yet
   * configured.
   */
  export interface Destination {
    /**
     * The category of the payout destination
     */
    category: PayoutMethodsAPI.PayoutDestinationCategory;

    /**
     * The country code of the payout destination
     */
    country_code: string;

    /**
     * The name of the payer associated with the payout destination
     */
    name: string;
  }
}

export interface PayoutMethodListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list payout methods for.
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

export declare namespace PayoutMethods {
  export {
    type PayoutDestinationCategory as PayoutDestinationCategory,
    type PayoutMethodRetrieveResponse as PayoutMethodRetrieveResponse,
    type PayoutMethodListResponse as PayoutMethodListResponse,
    type PayoutMethodListResponsesCursorPage as PayoutMethodListResponsesCursorPage,
    type PayoutMethodListParams as PayoutMethodListParams,
  };
}
