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
 * Use the Memberships API to list an account's memberships or the caller's own, retrieve one by ID or license key, invite a recipient to join through a free plan, and manage the lifecycle: cancel immediately or at period end, reverse a scheduled period-end cancellation, pause and resume payment collection, extend with free days, generate a transfer link, and update metadata.
 */
export class Memberships extends APIResource {
  /**
   * Retrieves a membership by ID or license key. Accessible to the account and to
   * the membership's own user.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: MembershipRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/memberships/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates a membership: merge metadata key-value pairs, or toggle
   * `cancel_at_period_end` — `true` schedules the cancellation for the end of the
   * current billing period, `false` reverses a pending one.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.update('id');
   * ```
   */
  update(
    id: string,
    params: MembershipUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params ?? {};
    return this._client.patch(path`/memberships/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists every membership the caller can read: an account API key its account's; a
   * user credential their own plus those of every account they manage. `account_id`
   * and `user_id` only narrow that list — values outside the caller's reach return
   * fewer results, not an error.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const membership of client.memberships.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembershipsCursorPage, Shared.Membership> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/memberships', CursorPage<Shared.Membership>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Add free days to extend a membership's current billing period, expiration date,
   * or Stripe trial.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   *
   * @example
   * ```ts
   * const membership = await client.memberships.addFreeDays(
   *   'mem_xxxxxxxxxxxxxx',
   *   { free_days: 42 },
   * );
   * ```
   */
  addFreeDays(
    id: string,
    body: MembershipAddFreeDaysParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/add_free_days`, { body, ...options });
  }

  /**
   * Cancels a membership. Pass `cancel_at_period_end: true` to stop auto-renewal and
   * keep access until the current billing period ends. Omit it (or pass `false`) to
   * revoke access immediately. Buyers cannot cancel buy-now-pay-later (`splitit`,
   * `sezzle`) or non-trial split-pay memberships.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.cancel('id');
   * ```
   */
  cancel(
    id: string,
    params: MembershipCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/memberships/${id}/cancel`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Pauses a membership's recurring payment collection. The customer keeps access
   * but is not charged until the membership is resumed.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.pause('id');
   * ```
   */
  pause(
    id: string,
    params: MembershipPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/memberships/${id}/pause`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Resumes a previously paused membership's recurring payment collection. Billing
   * resumes on the next cycle.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.resume('id');
   * ```
   */
  resume(
    id: string,
    params: MembershipResumeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/memberships/${id}/resume`, {
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Reverse a pending cancellation for a membership that was scheduled to cancel at
   * period end.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   *
   * @example
   * ```ts
   * const membership = await client.memberships.uncancel(
   *   'mem_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  uncancel(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/uncancel`, options);
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

export interface MembershipRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface MembershipUpdateParams {
  /**
   * Body param: `true` cancels at the end of the current billing period (the
   * customer keeps access until then); `false` reverses a pending cancellation.
   */
  cancel_at_period_end?: boolean;

  /**
   * Body param: Key-value pairs to merge into the membership's metadata. Pass an
   * empty object to clear it.
   */
  metadata?: unknown;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface MembershipListParams extends CursorPageParams {
  /**
   * Query param: Narrow to one account (`biz_` tag). With read access to the account
   * this lists all of its memberships; without, only the caller's own memberships in
   * it.
   */
  account_id?: string;

  /**
   * Query param: Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Query param: Only memberships created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only memberships created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Number of memberships to return from the start of the window.
   */
  first?: number;

  /**
   * Query param: Number of memberships to return from the end of the window.
   */
  last?: number;

  /**
   * Query param: Sort field.
   */
  order?: 'created_at';

  /**
   * Query param: Filter to memberships of this plan (`plan_` tag). Repeat as
   * plan_ids[] for several.
   */
  plan_id?: string;

  /**
   * Query param: Filter to memberships of this product (`prod_` tag). Repeat as
   * product_ids[] for several.
   */
  product_id?: string;

  /**
   * Query param: Filter by billing state. `canceling` matches active memberships set
   * to cancel at period end; `paused` matches memberships with payment collection
   * paused.
   */
  status?: 'active' | 'trialing' | 'past_due' | 'completed' | 'canceled' | 'expired' | 'canceling' | 'paused';

  /**
   * Query param: Narrow to one user's memberships (`user_` tag, or `me` for the
   * caller). A user outside the caller's visible set returns an empty list.
   */
  user_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface MembershipAddFreeDaysParams {
  /**
   * The number of free days to add (1-1095). Extends the billing period, expiration
   * date, or Stripe trial depending on plan type.
   */
  free_days: number;
}

export interface MembershipCancelParams {
  /**
   * Body param: `true` stops auto-renewal and keeps access until the current billing
   * period ends. Omit or `false` revokes access immediately.
   */
  cancel_at_period_end?: boolean;

  /**
   * Body param: Free-form note recording why the membership was canceled.
   */
  reason?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

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
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface MembershipResumeParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace Memberships {
  export {
    type CancelOptions as CancelOptions,
    type MembershipRetrieveParams as MembershipRetrieveParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
    type MembershipAddFreeDaysParams as MembershipAddFreeDaysParams,
    type MembershipCancelParams as MembershipCancelParams,
    type MembershipPauseParams as MembershipPauseParams,
    type MembershipResumeParams as MembershipResumeParams,
  };
}

export { type MembershipsCursorPage };
