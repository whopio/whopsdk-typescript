// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Cards represent Whop-issued virtual payment cards that spend from an account or user balance. Cards can be assigned to cardholders and configured with spending limits for controlled spending.
 *
 * Use the Cards API to issue cards, list cards for an account or user, and retrieve active card details such as the card number and CVC.
 */
export class Cards extends APIResource {
  /**
   * Lists issued Whop virtual cards for an account or user, including pending
   * invitation cards that have not been issued by the card provider yet. Pass
   * exactly one of account*id (a biz* identifier) or user*id (a user* identifier).
   * Non-owner team members only see cards assigned to them. Users without the
   * payout:account:read scope can still list cards assigned to them (for example
   * moderators or external cardholders). Use GET /cards/:card_id to retrieve a
   * single card with its secrets.
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardListResponse> {
    return this._client.get('/cards', { query, ...options });
  }

  /**
   * Issues a virtual card. For an individual (consumer) card issuing account, the
   * card is issued to the account's own cardholder. For a company (business) card
   * issuing account, pass assigned*user_id to issue the card to a company member; if
   * that member is not yet an approved card-issuing user, the card is provisioned
   * asynchronously or an onboarding invitation is sent (HTTP 202). Pass exactly one
   * of account_id (a biz* identifier) or user*id (a user* identifier). Returns the
   * newly created card resource.
   */
  create(body: CardCreateParams, options?: RequestOptions): APIPromise<CardCreateResponse> {
    return this._client.post('/cards', { body, ...options });
  }

  /**
   * Retrieves a single card by its icrd\_ identifier, including its secrets (full
   * card number, CVC, and cardholder name) for active cards.
   */
  retrieve(
    cardID: string,
    query: CardRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardRetrieveResponse> {
    return this._client.get(path`/cards/${cardID}`, { query, ...options });
  }

  /**
   * Updates an issued card. All fields are optional; only the fields you pass are
   * changed. Updates the card name, billing address, and spending limits in one
   * call, sets a new PIN, freezes or unfreezes the card, or cancels it. Pass
   * canceled: true alone to cancel the card — cancellation is permanent and a
   * canceled card cannot be uncanceled. Pass exactly one of account*id (a biz*
   * identifier) or user*id (a user* identifier). Assigned cardholders without the
   * payout:account:update scope can update the PIN and freeze state of their own
   * card. The PIN can only be changed on a card assigned to the acting user. Returns
   * the updated card resource.
   */
  update(cardID: string, body: CardUpdateParams, options?: RequestOptions): APIPromise<CardUpdateResponse> {
    return this._client.patch(path`/cards/${cardID}`, { body, ...options });
  }
}

export interface CardCreateResponse {
  /**
   * Card ID, prefixed `icrd_`.
   */
  id: string;

  /**
   * The billing address.
   */
  billing: CardCreateResponse.Billing | null;

  /**
   * When the card was canceled.
   */
  canceled_at: string | null;

  /**
   * When the card was created.
   */
  created_at: string | null;

  /**
   * Card expiration month.
   */
  expiration_month: string | null;

  /**
   * Card expiration year.
   */
  expiration_year: string | null;

  /**
   * Last four digits of the card number. `null` for pending invitation cards.
   */
  last4: string | null;

  /**
   * The spending limit configuration.
   */
  limit: CardCreateResponse.Limit | null;

  /**
   * Card display name.
   */
  name: string | null;

  object: 'card';

  /**
   * Total spend in the last 30 days, in cents.
   */
  spent_last_month: number | null;

  /**
   * The card status.
   */
  status: 'active' | 'frozen' | 'canceled' | 'invited' | null;

  /**
   * The card type.
   */
  type: 'virtual' | 'physical' | null;

  /**
   * Cardholder user ID, prefixed `user_`, when assigned.
   */
  user_id: string | null;

  /**
   * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
   * `null` when the card is inactive or details cannot be retrieved.
   */
  secrets?: CardCreateResponse.Secrets | null;
}

export namespace CardCreateResponse {
  /**
   * The billing address.
   */
  export interface Billing {
    /**
     * Billing city.
     */
    city: string | null;

    /**
     * Billing country code.
     */
    country_code: string | null;

    /**
     * Street address line 1.
     */
    line1: string | null;

    /**
     * Street address line 2.
     */
    line2: string | null;

    /**
     * Billing postal code.
     */
    postal_code: string | null;

    /**
     * Billing region or state.
     */
    region: string | null;
  }

  /**
   * The spending limit configuration.
   */
  export interface Limit {
    /**
     * The limit amount in dollars.
     */
    amount: number;

    /**
     * Limit window, for example `per24HourPeriod` or `perAuthorization`.
     */
    frequency: string;
  }

  /**
   * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
   * `null` when the card is inactive or details cannot be retrieved.
   */
  export interface Secrets {
    /**
     * Full card number.
     */
    card_number: string;

    /**
     * Card verification code.
     */
    cvc: string;

    /**
     * Cardholder name printed on the card.
     */
    name_on_card: string | null;
  }
}

export interface CardRetrieveResponse {
  /**
   * Card ID, prefixed `icrd_`.
   */
  id: string;

  /**
   * The billing address.
   */
  billing: CardRetrieveResponse.Billing | null;

  /**
   * When the card was canceled.
   */
  canceled_at: string | null;

  /**
   * When the card was created.
   */
  created_at: string | null;

  /**
   * Card expiration month.
   */
  expiration_month: string | null;

  /**
   * Card expiration year.
   */
  expiration_year: string | null;

  /**
   * Last four digits of the card number. `null` for pending invitation cards.
   */
  last4: string | null;

  /**
   * The spending limit configuration.
   */
  limit: CardRetrieveResponse.Limit | null;

  /**
   * Card display name.
   */
  name: string | null;

  object: 'card';

  /**
   * Total spend in the last 30 days, in cents.
   */
  spent_last_month: number | null;

  /**
   * The card status.
   */
  status: 'active' | 'frozen' | 'canceled' | 'invited' | null;

  /**
   * The card type.
   */
  type: 'virtual' | 'physical' | null;

  /**
   * Cardholder user ID, prefixed `user_`, when assigned.
   */
  user_id: string | null;

  /**
   * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
   * `null` when the card is inactive or details cannot be retrieved.
   */
  secrets?: CardRetrieveResponse.Secrets | null;
}

export namespace CardRetrieveResponse {
  /**
   * The billing address.
   */
  export interface Billing {
    /**
     * Billing city.
     */
    city: string | null;

    /**
     * Billing country code.
     */
    country_code: string | null;

    /**
     * Street address line 1.
     */
    line1: string | null;

    /**
     * Street address line 2.
     */
    line2: string | null;

    /**
     * Billing postal code.
     */
    postal_code: string | null;

    /**
     * Billing region or state.
     */
    region: string | null;
  }

  /**
   * The spending limit configuration.
   */
  export interface Limit {
    /**
     * The limit amount in dollars.
     */
    amount: number;

    /**
     * Limit window, for example `per24HourPeriod` or `perAuthorization`.
     */
    frequency: string;
  }

  /**
   * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
   * `null` when the card is inactive or details cannot be retrieved.
   */
  export interface Secrets {
    /**
     * Full card number.
     */
    card_number: string;

    /**
     * Card verification code.
     */
    cvc: string;

    /**
     * Cardholder name printed on the card.
     */
    name_on_card: string | null;
  }
}

export interface CardUpdateResponse {
  /**
   * Card ID, prefixed `icrd_`.
   */
  id: string;

  /**
   * The billing address.
   */
  billing: CardUpdateResponse.Billing | null;

  /**
   * When the card was canceled.
   */
  canceled_at: string | null;

  /**
   * When the card was created.
   */
  created_at: string | null;

  /**
   * Card expiration month.
   */
  expiration_month: string | null;

  /**
   * Card expiration year.
   */
  expiration_year: string | null;

  /**
   * Last four digits of the card number. `null` for pending invitation cards.
   */
  last4: string | null;

  /**
   * The spending limit configuration.
   */
  limit: CardUpdateResponse.Limit | null;

  /**
   * Card display name.
   */
  name: string | null;

  object: 'card';

  /**
   * Total spend in the last 30 days, in cents.
   */
  spent_last_month: number | null;

  /**
   * The card status.
   */
  status: 'active' | 'frozen' | 'canceled' | 'invited' | null;

  /**
   * The card type.
   */
  type: 'virtual' | 'physical' | null;

  /**
   * Cardholder user ID, prefixed `user_`, when assigned.
   */
  user_id: string | null;

  /**
   * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
   * `null` when the card is inactive or details cannot be retrieved.
   */
  secrets?: CardUpdateResponse.Secrets | null;
}

export namespace CardUpdateResponse {
  /**
   * The billing address.
   */
  export interface Billing {
    /**
     * Billing city.
     */
    city: string | null;

    /**
     * Billing country code.
     */
    country_code: string | null;

    /**
     * Street address line 1.
     */
    line1: string | null;

    /**
     * Street address line 2.
     */
    line2: string | null;

    /**
     * Billing postal code.
     */
    postal_code: string | null;

    /**
     * Billing region or state.
     */
    region: string | null;
  }

  /**
   * The spending limit configuration.
   */
  export interface Limit {
    /**
     * The limit amount in dollars.
     */
    amount: number;

    /**
     * Limit window, for example `per24HourPeriod` or `perAuthorization`.
     */
    frequency: string;
  }

  /**
   * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
   * `null` when the card is inactive or details cannot be retrieved.
   */
  export interface Secrets {
    /**
     * Full card number.
     */
    card_number: string;

    /**
     * Card verification code.
     */
    cvc: string;

    /**
     * Cardholder name printed on the card.
     */
    name_on_card: string | null;
  }
}

export interface CardListResponse {
  data: Array<CardListResponse.Data>;
}

export namespace CardListResponse {
  export interface Data {
    /**
     * Card ID, prefixed `icrd_`.
     */
    id: string;

    /**
     * The billing address.
     */
    billing: Data.Billing | null;

    /**
     * When the card was canceled.
     */
    canceled_at: string | null;

    /**
     * When the card was created.
     */
    created_at: string | null;

    /**
     * Card expiration month.
     */
    expiration_month: string | null;

    /**
     * Card expiration year.
     */
    expiration_year: string | null;

    /**
     * Last four digits of the card number. `null` for pending invitation cards.
     */
    last4: string | null;

    /**
     * The spending limit configuration.
     */
    limit: Data.Limit | null;

    /**
     * Card display name.
     */
    name: string | null;

    object: 'card';

    /**
     * Total spend in the last 30 days, in cents.
     */
    spent_last_month: number | null;

    /**
     * The card status.
     */
    status: 'active' | 'frozen' | 'canceled' | 'invited' | null;

    /**
     * The card type.
     */
    type: 'virtual' | 'physical' | null;

    /**
     * Cardholder user ID, prefixed `user_`, when assigned.
     */
    user_id: string | null;

    /**
     * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    secrets?: Data.Secrets | null;
  }

  export namespace Data {
    /**
     * The billing address.
     */
    export interface Billing {
      /**
       * Billing city.
       */
      city: string | null;

      /**
       * Billing country code.
       */
      country_code: string | null;

      /**
       * Street address line 1.
       */
      line1: string | null;

      /**
       * Street address line 2.
       */
      line2: string | null;

      /**
       * Billing postal code.
       */
      postal_code: string | null;

      /**
       * Billing region or state.
       */
      region: string | null;
    }

    /**
     * The spending limit configuration.
     */
    export interface Limit {
      /**
       * The limit amount in dollars.
       */
      amount: number;

      /**
       * Limit window, for example `per24HourPeriod` or `perAuthorization`.
       */
      frequency: string;
    }

    /**
     * Sensitive card details. Present only on `GET /cards/:card_id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    export interface Secrets {
      /**
       * Full card number.
       */
      card_number: string;

      /**
       * Card verification code.
       */
      cvc: string;

      /**
       * Cardholder name printed on the card.
       */
      name_on_card: string | null;
    }
  }
}

export interface CardListParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export interface CardCreateParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * The company member (a user\_ identifier) to assign the card to. Required for
   * company (business) card issuing accounts.
   */
  assigned_user_id?: string;

  /**
   * A display name for the card.
   */
  name?: string;

  /**
   * Spending limit amount, in dollars.
   */
  spend_limit?: number;

  /**
   * The spending limit window.
   */
  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time';

  /**
   * Per-transaction limit amount, in dollars.
   */
  transaction_limit?: number;

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export interface CardRetrieveParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export interface CardUpdateParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * New billing address. Requires line1, city, region, postal_code, and
   * country_code.
   */
  billing?: CardUpdateParams.Billing;

  /**
   * Pass `true` to permanently cancel the card. A canceled card cannot be
   * uncanceled. Cannot be combined with other fields.
   */
  canceled?: boolean;

  /**
   * Pass `true` to freeze the card, `false` to unfreeze it.
   */
  frozen?: boolean;

  /**
   * A display name for the card.
   */
  name?: string;

  /**
   * New 4-digit PIN. Can only be set on a card assigned to the acting user.
   */
  pin?: string;

  /**
   * Pass `true` to remove the spending limit (make the card unlimited).
   */
  remove_limit?: boolean;

  /**
   * Spending limit amount, in dollars.
   */
  spend_limit?: number;

  /**
   * The spending limit window.
   */
  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time';

  /**
   * Per-transaction limit amount, in dollars.
   */
  transaction_limit?: number;

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export namespace CardUpdateParams {
  /**
   * New billing address. Requires line1, city, region, postal_code, and
   * country_code.
   */
  export interface Billing {
    /**
     * Billing city.
     */
    city: string;

    /**
     * Billing country code, ISO 3166-1 alpha-2.
     */
    country_code: string;

    /**
     * Street address line 1.
     */
    line1: string;

    /**
     * Billing postal code.
     */
    postal_code: string;

    /**
     * Billing region or state.
     */
    region: string;

    /**
     * Street address line 2.
     */
    line2?: string;
  }
}

export declare namespace Cards {
  export {
    type CardCreateResponse as CardCreateResponse,
    type CardRetrieveResponse as CardRetrieveResponse,
    type CardUpdateResponse as CardUpdateResponse,
    type CardListResponse as CardListResponse,
    type CardListParams as CardListParams,
    type CardCreateParams as CardCreateParams,
    type CardRetrieveParams as CardRetrieveParams,
    type CardUpdateParams as CardUpdateParams,
  };
}
