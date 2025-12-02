// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * A payment method is a stored representation of how a customer intends to pay,
   * such as a card, bank account, or digital wallet. It holds the necessary billing
   * details and can be attached to a member for future one-time or recurring
   * charges. This lets you reuse the same payment credentials across multiple
   * payments.
   *
   * Required permissions:
   *
   * - `member:payment_methods:read`
   */
  retrieve(
    id: string,
    query: PaymentMethodRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodRetrieveResponse> {
    return this._client.get(path`/payment_methods/${id}`, { query, ...options });
  }

  /**
   * A payment method is a stored representation of how a customer intends to pay,
   * such as a card, bank account, or digital wallet. It holds the necessary billing
   * details and can be attached to a member for future one-time or recurring
   * charges. This lets you reuse the same payment credentials across multiple
   * payments.
   *
   * Required permissions:
   *
   * - `member:payment_methods:read`
   */
  list(
    query: PaymentMethodListParams,
    options?: RequestOptions,
  ): PagePromise<PaymentMethodListResponsesCursorPage, PaymentMethodListResponse> {
    return this._client.getAPIList('/payment_methods', CursorPage<PaymentMethodListResponse>, {
      query,
      ...options,
    });
  }
}

export type PaymentMethodListResponsesCursorPage = CursorPage<PaymentMethodListResponse>;

/**
 * A stored payment method used to process payments. This could be a credit/debit
 * card, bank account, PayPal wallet, etc.
 */
export interface PaymentMethodRetrieveResponse {
  /**
   * The ID of the payment method
   */
  id: string;

  /**
   * The card data associated with the payment method, if its a debit or credit card.
   */
  card: PaymentMethodRetrieveResponse.Card | null;

  /**
   * The date and time the payment method was created
   */
  created_at: string;

  /**
   * The payment method type of the payment method
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes;
}

export namespace PaymentMethodRetrieveResponse {
  /**
   * The card data associated with the payment method, if its a debit or credit card.
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
 * A stored payment method used to process payments. This could be a credit/debit
 * card, bank account, PayPal wallet, etc.
 */
export interface PaymentMethodListResponse {
  /**
   * The ID of the payment method
   */
  id: string;

  /**
   * The card data associated with the payment method, if its a debit or credit card.
   */
  card: PaymentMethodListResponse.Card | null;

  /**
   * The date and time the payment method was created
   */
  created_at: string;

  /**
   * The payment method type of the payment method
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes;
}

export namespace PaymentMethodListResponse {
  /**
   * The card data associated with the payment method, if its a debit or credit card.
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

export interface PaymentMethodRetrieveParams {
  /**
   * The ID of the Member associated with the PaymentMethod
   */
  member_id: string;
}

export interface PaymentMethodListParams extends CursorPageParams {
  /**
   * The ID of the Member to list payment methods for
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

export declare namespace PaymentMethods {
  export {
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodListResponsesCursorPage as PaymentMethodListResponsesCursorPage,
    type PaymentMethodRetrieveParams as PaymentMethodRetrieveParams,
    type PaymentMethodListParams as PaymentMethodListParams,
  };
}
