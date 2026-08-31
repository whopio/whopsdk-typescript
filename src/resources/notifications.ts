// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * A Notification is a message delivered to a user — a new post, a payment, a mention. Every notification comes from an experience the user belongs to or a team they are on, and users control what they receive with notification preferences.
 *
 * Every notification belongs to a topic: the category it falls under, such as new sales or account activity. Topics carry a default, so a user only needs a preference row where they diverge from it. `GET /notifications/topics` lists the platform's visible topics, and a topic's `id` is what the notification preference endpoints take as `topic_id` — the catalog is the only place those ids come from, so read it rather than hardcoding. Each topic also carries an `identifier` such as `new-follower`, which is stable across environments and is the value to match on in code.
 *
 * Use the Notifications API to list the authenticated user's feed, read per-experience unread badges, mark an experience (or everything) as read, send notifications from your app to an experience's users or an account's team, and list the topic catalog.
 */
export class Notifications extends APIResource {
  /**
   * Queues a notification to every user of an experience or to an account's team,
   * processed asynchronously. Every send is attributed to an app: use an app API
   * key, or a credential acting on behalf of an app. Narrow the audience with
   * `user_ids` to send a mention.
   *
   * @example
   * ```ts
   * const notification = await client.notifications.create({
   *   content:
   *     'Drop off at 4180 Burnet Rd. Plan on two days for the full coating.',
   *   title: 'Your ceramic coating is booked',
   * });
   * ```
   */
  create(params: NotificationCreateParams, options?: RequestOptions): APIPromise<NotificationCreateResponse> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/notifications', {
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
}

export interface NotificationCreateResponse {
  success: boolean;
}

export interface NotificationCreateParams {
  /**
   * Body param: Main body text of the notification.
   */
  content: string;

  /**
   * Body param: Headline text of the notification.
   */
  title: string;

  /**
   * Body param: Account whose team members receive the notification (`biz_` tag).
   * Exactly one of `experience_id` or `account_id` is required.
   */
  account_id?: string;

  /**
   * Body param: Experience whose users receive the notification (`exp_` tag).
   * Exactly one of `experience_id` or `account_id` is required.
   */
  experience_id?: string;

  /**
   * Body param: User whose profile picture is used as the notification icon.
   * Defaults to the experience or account avatar.
   */
  icon_user_id?: string | null;

  /**
   * Body param: Path segment appended to the generated deep link that opens your
   * app, for example `/settings/billing`.
   */
  rest_path?: string | null;

  /**
   * Body param: Optional secondary line displayed below the title.
   */
  subtitle?: string | null;

  /**
   * Body param: Optional `user_` tags narrowing the audience. When provided, only
   * these users are notified (as a mention), provided they are in the targeted
   * experience or account.
   */
  user_ids?: Array<string>;

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

export declare namespace Notifications {
  export {
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationCreateParams as NotificationCreateParams,
  };
}
