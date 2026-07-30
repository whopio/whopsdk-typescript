// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { MembershipsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Membership is a customer's purchase of a plan: the subscription or one-time grant that gives them access to a product. It tracks billing state (`active`, `trialing`, `past_due`, and so on), the current period, pending cancellations, custom metadata, and the software license key when the product includes licensing.
 *
 * Use the Memberships API to list an account's memberships or the caller's own, retrieve one by ID or license key, and manage the lifecycle: cancel immediately or at period end, reverse a scheduled period-end cancellation, pause and resume payment collection, extend with free days, and update metadata.
 */
export class Memberships extends APIResource {
  /**
   * Lists memberships. `account_id` lists an account's memberships (seller side);
   * `user_id` lists the caller's own memberships across every account (buyer side).
   * With neither, an account API key lists its account's memberships and a user
   * credential lists their own.
   */
  list(
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembershipsCursorPage, Shared.Membership> {
    return this._client.getAPIList('/memberships', CursorPage<Shared.Membership>, { query, ...options });
  }

  /**
   * Retrieves a membership by ID or license key. Accessible to the account and to
   * the membership's own user.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.get(path`/memberships/${id}`, options);
  }

  /**
   * Updates a membership: merge metadata key-value pairs, or toggle
   * `cancel_at_period_end` — `true` schedules the cancellation for the end of the
   * current billing period, `false` reverses a pending one.
   */
  update(
    id: string,
    body: MembershipUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    return this._client.patch(path`/memberships/${id}`, { body, ...options });
  }

  /**
   * Cancels a membership immediately, revoking access right away. To cancel at the
   * end of the billing period instead, update the membership with
   * `cancel_at_period_end: true`.
   */
  cancel(
    id: string,
    params: MembershipCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/memberships/${id}/cancel`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Pauses a membership's recurring payment collection. The customer keeps access
   * but is not charged until the membership is resumed.
   */
  pause(
    id: string,
    params: MembershipPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/memberships/${id}/pause`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Resumes a previously paused membership's recurring payment collection. Billing
   * resumes on the next cycle.
   */
  resume(
    id: string,
    params: MembershipResumeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/memberships/${id}/resume`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Adds free days to a membership, extending its current billing period, expiration
   * date, or trial depending on the plan type.
   */
  extend(
    id: string,
    params: MembershipExtendParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/memberships/${id}/extend`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * The different reasons a user can choose for why they are canceling their
 * membership.
 */
export type CancelOptions =
  | 'too_expensive'
  | 'switching'
  | 'missing_features'
  | 'technical_issues'
  | 'bad_experience'
  | 'other'
  | 'testing';

export interface MembershipListParams extends CursorPageParams {
  /**
   * The account to list memberships for (`biz_` tag). Requires read access to the
   * account.
   */
  account_id?: string;

  /**
   * Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Only memberships created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only memberships created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of memberships to return from the start of the window.
   */
  first?: number;

  /**
   * Number of memberships to return from the end of the window.
   */
  last?: number;

  /**
   * Sort field.
   */
  order?: 'created_at';

  /**
   * Filter to memberships of this plan (`plan_` tag). Repeat as plan_ids[] for
   * several.
   */
  plan_id?: string;

  /**
   * Filter to memberships of this product (`prod_` tag). Repeat as product_ids[] for
   * several.
   */
  product_id?: string;

  /**
   * Filter by billing state. `canceling` matches active memberships set to cancel at
   * period end; `paused` matches memberships with payment collection paused.
   */
  status?: 'active' | 'trialing' | 'past_due' | 'completed' | 'canceled' | 'expired' | 'canceling' | 'paused';

  /**
   * List the caller's own memberships. Must be `me` or the authenticated user's
   * `user_` tag.
   */
  user_id?: string;
}

export interface MembershipUpdateParams {
  /**
   * `true` cancels at the end of the current billing period (the customer keeps
   * access until then); `false` reverses a pending cancellation.
   */
  cancel_at_period_end?: boolean;

  /**
   * Key-value pairs to merge into the membership's metadata. Pass an empty object to
   * clear it.
   */
  metadata?: unknown;
}

export interface MembershipCancelParams {
  /**
   * Body param: Free-form note recording why the membership was canceled.
   */
  reason?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface MembershipPauseParams {
  /**
   * Body param: ISO 8601 time to automatically resume payment collection. Must be in
   * the future; only supported for memberships billed by Whop.
   */
  until?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface MembershipResumeParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface MembershipExtendParams {
  /**
   * Body param: Number of free days to add (1-1095).
   */
  days: number;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace Memberships {
  export {
    type CancelOptions as CancelOptions,
    type MembershipListParams as MembershipListParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipCancelParams as MembershipCancelParams,
    type MembershipPauseParams as MembershipPauseParams,
    type MembershipResumeParams as MembershipResumeParams,
    type MembershipExtendParams as MembershipExtendParams,
  };
}

export { type MembershipsCursorPage };
