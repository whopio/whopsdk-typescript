// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cards extends APIResource {
  /**
   * Lists every issued card for the account.
   */
  list(query: CardListParams, options?: RequestOptions): APIPromise<CardListResponse> {
    return this._client.get('/cards', { query, ...options });
  }

  /**
   * Issues a new virtual card for the account.
   */
  create(params: CardCreateParams, options?: RequestOptions): APIPromise<Card> {
    const { account_id, ...body } = params;
    return this._client.post('/cards', { query: { account_id }, body, ...options });
  }

  /**
   * Returns a single card's lifecycle details.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.get(path`/cards/${id}`, options);
  }

  /**
   * Updates a card's name or spending limits.
   */
  update(id: string, body: CardUpdateParams, options?: RequestOptions): APIPromise<Card> {
    return this._client.patch(path`/cards/${id}`, { body, ...options });
  }

  /**
   * Freezes (locks) the card so it can no longer authorize.
   */
  freeze(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.post(path`/cards/${id}/freeze`, options);
  }

  /**
   * Unfreezes (unlocks) a frozen card.
   */
  unfreeze(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.post(path`/cards/${id}/unfreeze`, options);
  }

  /**
   * Permanently cancels the card. This is irreversible.
   */
  deactivate(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.post(path`/cards/${id}/deactivate`, options);
  }
}

export interface Card {
  /**
   * The card ID.
   */
  id: string | null;

  object: 'card';

  /**
   * The card lifecycle status.
   */
  status: 'pending' | 'active' | 'frozen' | 'canceled' | null;

  card_type?: 'virtual' | 'physical' | null;

  /**
   * ISO 8601 creation timestamp.
   */
  created_at?: string | null;

  expiration_month?: string | null;

  expiration_year?: string | null;

  /**
   * The last 4 digits of the card number.
   */
  last4?: string | null;

  /**
   * The display name of the card.
   */
  name?: string | null;

  /**
   * Recurring spend limit in dollars.
   */
  spend_limit?: string | null;

  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time' | null;

  /**
   * Per-authorization limit in dollars.
   */
  transaction_limit?: string | null;
}

export interface CardListResponse {
  cards: Array<Card>;
}

export interface CardListParams {
  /**
   * The business or user account ID that owns the cards.
   */
  account_id: string;
}

export interface CardCreateParams {
  /**
   * Query param: The business or user account ID to issue the card for.
   */
  account_id: string;

  /**
   * Body param: Display name for the card.
   */
  name?: string;

  /**
   * Body param: Recurring spend limit in dollars (requires spend_limit_frequency).
   */
  spend_limit?: string;

  /**
   * Body param
   */
  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time';

  /**
   * Body param: Per-authorization limit in dollars (mutually exclusive with
   * spend_limit).
   */
  transaction_limit?: string;
}

export interface CardUpdateParams {
  name?: string;

  spend_limit?: string;

  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time';

  transaction_limit?: string;
}

export declare namespace Cards {
  export {
    type Card as Card,
    type CardListResponse as CardListResponse,
    type CardListParams as CardListParams,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
  };
}
