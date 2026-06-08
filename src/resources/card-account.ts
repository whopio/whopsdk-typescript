// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CardAccountResource extends APIResource {
  /**
   * Updates the auto-topup configuration on the account's card account.
   */
  update(params: CardAccountUpdateParams, options?: RequestOptions): APIPromise<CardAccount> {
    const { account_id, ...body } = params;
    return this._client.patch('/card-account', { query: { account_id }, body, ...options });
  }
}

export interface CardAccount {
  /**
   * Whether auto-topup is enabled.
   */
  auto_topup_enabled: boolean;

  object: 'card_account';

  /**
   * Target balance (USD) to top up to.
   */
  auto_topup_target_usd?: string | null;

  /**
   * Balance threshold (USD) that triggers an auto-topup.
   */
  auto_topup_threshold_usd?: string | null;
}

export interface CardAccountUpdateParams {
  /**
   * Query param: The business or user account ID that owns the card account.
   */
  account_id: string;

  /**
   * Body param: Whether auto-topup is enabled.
   */
  auto_topup_enabled?: boolean;

  /**
   * Body param: Target balance (USD) to top up to. Must exceed the threshold by at
   * least $10.
   */
  auto_topup_target_usd?: string;

  /**
   * Body param: Balance threshold (USD) that triggers an auto-topup. Required when
   * enabling.
   */
  auto_topup_threshold_usd?: string;
}

export declare namespace CardAccountResource {
  export { type CardAccount as CardAccount, type CardAccountUpdateParams as CardAccountUpdateParams };
}
