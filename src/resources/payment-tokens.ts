// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentTokens extends APIResource {
  /**
   * Retrieves a PaymentToken by ID
   *
   * Required permissions:
   *
   * - `member:payment_methods:read`
   */
  retrieve(
    id: string,
    query: PaymentTokenRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PaymentTokenRetrieveResponse> {
    return this._client.get(path`/payment_tokens/${id}`, { query, ...options });
  }

  /**
   * Lists PaymentTokens
   *
   * Required permissions:
   *
   * - `member:payment_methods:read`
   */
  list(
    query: PaymentTokenListParams,
    options?: RequestOptions,
  ): PagePromise<PaymentTokenListResponsesCursorPage, PaymentTokenListResponse> {
    return this._client.getAPIList('/payment_tokens', CursorPage<PaymentTokenListResponse>, {
      query,
      ...options,
    });
  }
}

export type PaymentTokenListResponsesCursorPage = CursorPage<PaymentTokenListResponse>;

/**
 * A payment token used to process payments.
 */
export interface PaymentTokenRetrieveResponse {
  /**
   * The ID of the payment token
   */
  id: string;

  /**
   * The card data associated with the payment token, if its a debit or credit card
   * token.
   */
  card: PaymentTokenRetrieveResponse.Card | null;

  /**
   * The date and time the payment token was created
   */
  created_at: string;

  /**
   * The payment method type of the payment token
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes;
}

export namespace PaymentTokenRetrieveResponse {
  /**
   * The card data associated with the payment token, if its a debit or credit card
   * token.
   */
  export interface Card {
    /**
     * Possible card brands that a payment token can have
     */
    brand: PaymentsAPI.CardBrands | null;

    /**
     * Card expiration month, like 03 for March.
     */
    exp_month: number | null;

    /**
     * Card expiration year, like 27 for 2027.
     */
    exp_year: number | null;

    /**
     * Last four digits of the card.
     */
    last4: string | null;
  }
}

/**
 * A payment token used to process payments.
 */
export interface PaymentTokenListResponse {
  /**
   * The ID of the payment token
   */
  id: string;

  /**
   * The card data associated with the payment token, if its a debit or credit card
   * token.
   */
  card: PaymentTokenListResponse.Card | null;

  /**
   * The date and time the payment token was created
   */
  created_at: string;

  /**
   * The payment method type of the payment token
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes;
}

export namespace PaymentTokenListResponse {
  /**
   * The card data associated with the payment token, if its a debit or credit card
   * token.
   */
  export interface Card {
    /**
     * Possible card brands that a payment token can have
     */
    brand: PaymentsAPI.CardBrands | null;

    /**
     * Card expiration month, like 03 for March.
     */
    exp_month: number | null;

    /**
     * Card expiration year, like 27 for 2027.
     */
    exp_year: number | null;

    /**
     * Last four digits of the card.
     */
    last4: string | null;
  }
}

export interface PaymentTokenRetrieveParams {
  /**
   * The ID of the Member associated with the PaymentToken
   */
  member_id: string;
}

export interface PaymentTokenListParams extends CursorPageParams {
  /**
   * The ID of the Member to list payment tokens for
   */
  member_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

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
}

export declare namespace PaymentTokens {
  export {
    type PaymentTokenRetrieveResponse as PaymentTokenRetrieveResponse,
    type PaymentTokenListResponse as PaymentTokenListResponse,
    type PaymentTokenListResponsesCursorPage as PaymentTokenListResponsesCursorPage,
    type PaymentTokenRetrieveParams as PaymentTokenRetrieveParams,
    type PaymentTokenListParams as PaymentTokenListParams,
  };
}
