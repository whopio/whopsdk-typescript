// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Setup intents
 */
export class SetupIntents extends APIResource {
  /**
   * Retrieves the details of an existing setup intent.
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
   * Returns a paginated list of setup intents for a company, with optional filtering
   * by creation date. A setup intent securely collects and stores a member's payment
   * method for future use without charging them immediately.
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
 * A setup intent allows a user to save a payment method for future use without
 * making an immediate purchase.
 */
export interface SetupIntent {
  /**
   * The unique identifier for the setup intent.
   */
  id: string;

  /**
   * The checkout session configuration associated with this setup intent. Null if no
   * checkout session was used.
   */
  checkout_configuration: SetupIntent.CheckoutConfiguration | null;

  /**
   * The company that initiated this setup intent. Null if the company has been
   * deleted.
   */
  company: SetupIntent.Company | null;

  /**
   * The datetime the setup intent was created.
   */
  created_at: string;

  /**
   * A human-readable error message explaining why the setup intent failed. Null if
   * no error occurred.
   */
  error_message: string | null;

  /**
   * The company member associated with this setup intent. Null if the user is not a
   * member.
   */
  member: SetupIntent.Member | null;

  /**
   * Custom key-value pairs attached to this setup intent. Null if no metadata was
   * provided.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The saved payment method created by this setup intent. Null if the setup has not
   * completed successfully.
   */
  payment_method: SetupIntent.PaymentMethod | null;

  /**
   * The current status of the setup intent.
   */
  status: SetupIntentStatus;
}

export namespace SetupIntent {
  /**
   * The checkout session configuration associated with this setup intent. Null if no
   * checkout session was used.
   */
  export interface CheckoutConfiguration {
    /**
     * The unique identifier for the checkout session.
     */
    id: string;
  }

  /**
   * The company that initiated this setup intent. Null if the company has been
   * deleted.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The company member associated with this setup intent. Null if the user is not a
   * member.
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
   * The saved payment method created by this setup intent. Null if the setup has not
   * completed successfully.
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
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
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
 * A setup intent allows a user to save a payment method for future use without
 * making an immediate purchase.
 */
export interface SetupIntentListResponse {
  /**
   * The unique identifier for the setup intent.
   */
  id: string;

  /**
   * The checkout session configuration associated with this setup intent. Null if no
   * checkout session was used.
   */
  checkout_configuration: SetupIntentListResponse.CheckoutConfiguration | null;

  /**
   * The company that initiated this setup intent. Null if the company has been
   * deleted.
   */
  company: SetupIntentListResponse.Company | null;

  /**
   * The datetime the setup intent was created.
   */
  created_at: string;

  /**
   * A human-readable error message explaining why the setup intent failed. Null if
   * no error occurred.
   */
  error_message: string | null;

  /**
   * The company member associated with this setup intent. Null if the user is not a
   * member.
   */
  member: SetupIntentListResponse.Member | null;

  /**
   * Custom key-value pairs attached to this setup intent. Null if no metadata was
   * provided.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The saved payment method created by this setup intent. Null if the setup has not
   * completed successfully.
   */
  payment_method: SetupIntentListResponse.PaymentMethod | null;

  /**
   * The current status of the setup intent.
   */
  status: SetupIntentStatus;
}

export namespace SetupIntentListResponse {
  /**
   * The checkout session configuration associated with this setup intent. Null if no
   * checkout session was used.
   */
  export interface CheckoutConfiguration {
    /**
     * The unique identifier for the checkout session.
     */
    id: string;
  }

  /**
   * The company that initiated this setup intent. Null if the company has been
   * deleted.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

  /**
   * The company member associated with this setup intent. Null if the user is not a
   * member.
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
   * The saved payment method created by this setup intent. Null if the setup has not
   * completed successfully.
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
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }
}

export interface SetupIntentListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list setup intents for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return setup intents created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return setup intents created before this timestamp.
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
