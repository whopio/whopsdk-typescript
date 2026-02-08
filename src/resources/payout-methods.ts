// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PayoutMethodsAPI from './payout-methods';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PayoutMethods extends APIResource {
  /**
   * Retrieves a payout method by ID
   *
   * Required permissions:
   *
   * - `payout:destination:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutMethodRetrieveResponse> {
    return this._client.get(path`/payout_methods/${id}`, options);
  }

  /**
   * Lists payout destinations for a company
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
 * An object representing an user's setup payout destination.
 */
export interface PayoutMethodRetrieveResponse {
  /**
   * The unique identifier for the payout token.
   */
  id: string;

  /**
   * A reference to identify the payout destination, such as the last 4 digits of an
   * account number or an email address.
   */
  account_reference: string | null;

  /**
   * The company associated with the payout token
   */
  company: PayoutMethodRetrieveResponse.Company | null;

  /**
   * The datetime the payout token was created.
   */
  created_at: string;

  /**
   * The currency code of the payout destination. This is the currency that payouts
   * will be made in for this token.
   */
  currency: string;

  /**
   * The payout destination associated with the payout token
   */
  destination: PayoutMethodRetrieveResponse.Destination | null;

  /**
   * The name of the bank or financial institution.
   */
  institution_name: string | null;

  /**
   * Whether this payout token is the default for the payout account
   */
  is_default: boolean;

  /**
   * An optional nickname for the payout token to help the user identify it. This is
   * not used by the provider and is only for the user's reference.
   */
  nickname: string | null;
}

export namespace PayoutMethodRetrieveResponse {
  /**
   * The company associated with the payout token
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The payout destination associated with the payout token
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
 * An object representing an user's setup payout destination.
 */
export interface PayoutMethodListResponse {
  /**
   * The unique identifier for the payout token.
   */
  id: string;

  /**
   * A reference to identify the payout destination, such as the last 4 digits of an
   * account number or an email address.
   */
  account_reference: string | null;

  /**
   * The company associated with the payout token
   */
  company: PayoutMethodListResponse.Company | null;

  /**
   * The datetime the payout token was created.
   */
  created_at: string;

  /**
   * The currency code of the payout destination. This is the currency that payouts
   * will be made in for this token.
   */
  currency: string;

  /**
   * The payout destination associated with the payout token
   */
  destination: PayoutMethodListResponse.Destination | null;

  /**
   * The name of the bank or financial institution.
   */
  institution_name: string | null;

  /**
   * Whether this payout token is the default for the payout account
   */
  is_default: boolean;

  /**
   * An optional nickname for the payout token to help the user identify it. This is
   * not used by the provider and is only for the user's reference.
   */
  nickname: string | null;
}

export namespace PayoutMethodListResponse {
  /**
   * The company associated with the payout token
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The payout destination associated with the payout token
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
   * The company ID to list payout methods for.
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
