// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SetupIntents extends APIResource {
  /**
   * A setup intent is an object used to securely collect and store a member’s
   * payment method for future use without charging them immediately. It handles
   * authentication steps up front so future off-session payments can be completed
   * smoothly. This ensures the payment method is verified and ready for later
   * billing.
   *
   * Required permissions:
   *
   * - `payment:setup_intent:read`
   * - `member:basic:read`
   * - `member:email:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SetupIntent> {
    return this._client.get(path`/setup_intents/${id}`, options);
  }

  /**
   * A setup intent is an object used to securely collect and store a member’s
   * payment method for future use without charging them immediately. It handles
   * authentication steps up front so future off-session payments can be completed
   * smoothly. This ensures the payment method is verified and ready for later
   * billing.
   *
   * Required permissions:
   *
   * - `payment:setup_intent:read`
   * - `member:basic:read`
   * - `member:email:read`
   */
  list(
    query: SetupIntentListParams,
    options?: RequestOptions,
  ): PagePromise<SetupIntentListResponsesCursorPage, SetupIntentListResponse> {
    return this._client.getAPIList('/setup_intents', CursorPage<SetupIntentListResponse>, {
      query,
      ...options,
    });
  }
}

export type SetupIntentListResponsesCursorPage = CursorPage<SetupIntentListResponse>;

/**
 * A setup intent allows a user to save a payment method without making a purchase.
 */
export interface SetupIntent {
  /**
   * The unique identifier for the setup intent.
   */
  id: string;

  /**
   * The checkout configuration associated with the setup intent
   */
  checkout_configuration: SetupIntent.CheckoutConfiguration | null;

  /**
   * The company of the setup intent
   */
  company: SetupIntent.Company | null;

  /**
   * The datetime the setup intent was created.
   */
  created_at: string;

  /**
   * The error message, if any.
   */
  error_message: string | null;

  /**
   * The member connected to the setup intent
   */
  member: SetupIntent.Member | null;

  /**
   * The metadata associated with the setup intent
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The payment method created during the setup, if available.
   */
  payment_method: SetupIntent.PaymentMethod | null;

  /**
   * The status of the setup intent
   */
  status: SetupIntentStatus;
}

export namespace SetupIntent {
  /**
   * The checkout configuration associated with the setup intent
   */
  export interface CheckoutConfiguration {
    /**
     * The unique identifier for the checkout session.
     */
    id: string;
  }

  /**
   * The company of the setup intent
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The member connected to the setup intent
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;

    /**
     * The user for this member, if any.
     */
    user: Member.User | null;
  }

  export namespace Member {
    /**
     * The user for this member, if any.
     */
    export interface User {
      /**
       * The unique identifier for the company member user.
       */
      id: string;

      /**
       * The digital mailing address of the user.
       */
      email: string | null;

      /**
       * The user's full name.
       */
      name: string | null;

      /**
       * The whop username.
       */
      username: string;
    }
  }

  /**
   * The payment method created during the setup, if available.
   */
  export interface PaymentMethod {
    /**
     * The unique identifier for the payment token.
     */
    id: string;

    /**
     * The card data associated with the payment method, if its a debit or credit card.
     */
    card: PaymentMethod.Card | null;

    /**
     * The datetime the payment token was created.
     */
    created_at: string;

    /**
     * The payment method type of the payment method
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;
  }

  export namespace PaymentMethod {
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
}

/**
 * The status of the setup intent.
 */
export type SetupIntentStatus = 'processing' | 'succeeded' | 'canceled' | 'requires_action';

/**
 * A setup intent allows a user to save a payment method without making a purchase.
 */
export interface SetupIntentListResponse {
  /**
   * The unique identifier for the setup intent.
   */
  id: string;

  /**
   * The checkout configuration associated with the setup intent
   */
  checkout_configuration: SetupIntentListResponse.CheckoutConfiguration | null;

  /**
   * The company of the setup intent
   */
  company: SetupIntentListResponse.Company | null;

  /**
   * The datetime the setup intent was created.
   */
  created_at: string;

  /**
   * The error message, if any.
   */
  error_message: string | null;

  /**
   * The member connected to the setup intent
   */
  member: SetupIntentListResponse.Member | null;

  /**
   * The metadata associated with the setup intent
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The payment method created during the setup, if available.
   */
  payment_method: SetupIntentListResponse.PaymentMethod | null;

  /**
   * The status of the setup intent
   */
  status: SetupIntentStatus;
}

export namespace SetupIntentListResponse {
  /**
   * The checkout configuration associated with the setup intent
   */
  export interface CheckoutConfiguration {
    /**
     * The unique identifier for the checkout session.
     */
    id: string;
  }

  /**
   * The company of the setup intent
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The member connected to the setup intent
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;

    /**
     * The user for this member, if any.
     */
    user: Member.User | null;
  }

  export namespace Member {
    /**
     * The user for this member, if any.
     */
    export interface User {
      /**
       * The unique identifier for the company member user.
       */
      id: string;

      /**
       * The digital mailing address of the user.
       */
      email: string | null;

      /**
       * The user's full name.
       */
      name: string | null;

      /**
       * The whop username.
       */
      username: string;
    }
  }

  /**
   * The payment method created during the setup, if available.
   */
  export interface PaymentMethod {
    /**
     * The unique identifier for the payment token.
     */
    id: string;

    /**
     * The card data associated with the payment method, if its a debit or credit card.
     */
    card: PaymentMethod.Card | null;

    /**
     * The datetime the payment token was created.
     */
    created_at: string;

    /**
     * The payment method type of the payment method
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;
  }

  export namespace PaymentMethod {
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
}

export interface SetupIntentListParams extends CursorPageParams {
  /**
   * The ID of the company to list setup intents for
   */
  company_id: string;

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

export declare namespace SetupIntents {
  export {
    type SetupIntent as SetupIntent,
    type SetupIntentStatus as SetupIntentStatus,
    type SetupIntentListResponse as SetupIntentListResponse,
    type SetupIntentListResponsesCursorPage as SetupIntentListResponsesCursorPage,
    type SetupIntentListParams as SetupIntentListParams,
  };
}
