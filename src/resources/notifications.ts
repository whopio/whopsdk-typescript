// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Notifications
 */
export class Notifications extends APIResource {
  /**
   * Send a push notification to users in an experience or company team. The
   * notification is processed asynchronously and supports targeting specific users.
   *
   * Required permissions:
   *
   * - `notification:create`
   *
   * @example
   * ```ts
   * const notification = await client.notifications.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   content: 'content',
   *   title: 'title',
   * });
   * ```
   */
  create(body: NotificationCreateParams, options?: RequestOptions): APIPromise<NotificationCreateResponse> {
    return this._client.post('/notifications', { body, ...options });
  }
}

/**
 * Response from queuing a notification
 */
export interface NotificationCreateResponse {
  /**
   * Whether the notification was successfully queued for delivery
   */
  success: boolean;
}

export type NotificationCreateParams =
  | NotificationCreateParams.SendNotificationV2InputWithCompanyID
  | NotificationCreateParams.SendNotificationV2InputWithExperienceID;

export declare namespace NotificationCreateParams {
  export interface SendNotificationV2InputWithCompanyID {
    /**
     * The unique identifier of the company to target. Only team members of this
     * company will receive the notification. Clicking the notification opens your
     * dashboard app view.
     */
    company_id: string;

    /**
     * The main body text of the notification displayed to the user.
     */
    content: string;

    /**
     * The headline text of the notification, displayed prominently to the user.
     */
    title: string;

    /**
     * The unique identifier of a user whose profile picture will be used as the
     * notification icon. Defaults to the experience or company avatar when not
     * provided.
     */
    icon_user_id?: string | null;

    /**
     * A path segment appended to the generated deep link that opens your app. Use
     * [restPath] in your app path configuration to read this parameter. For example,
     * '/settings/billing'.
     */
    rest_path?: string | null;

    /**
     * An optional secondary line of text displayed below the title in the
     * notification.
     */
    subtitle?: string | null;

    /**
     * An optional list of user IDs to narrow the audience. When provided, only these
     * users receive the notification, provided they are in the targeted experience or
     * company.
     */
    user_ids?: Array<string> | null;
  }

  export interface SendNotificationV2InputWithExperienceID {
    /**
     * The main body text of the notification displayed to the user.
     */
    content: string;

    /**
     * The unique identifier of the experience to target. All users with access to this
     * experience will receive the notification. Clicking the notification opens the
     * experience view.
     */
    experience_id: string;

    /**
     * The headline text of the notification, displayed prominently to the user.
     */
    title: string;

    /**
     * The unique identifier of a user whose profile picture will be used as the
     * notification icon. Defaults to the experience or company avatar when not
     * provided.
     */
    icon_user_id?: string | null;

    /**
     * A path segment appended to the generated deep link that opens your app. Use
     * [restPath] in your app path configuration to read this parameter. For example,
     * '/settings/billing'.
     */
    rest_path?: string | null;

    /**
     * An optional secondary line of text displayed below the title in the
     * notification.
     */
    subtitle?: string | null;

    /**
     * An optional list of user IDs to narrow the audience. When provided, only these
     * users receive the notification, provided they are in the targeted experience or
     * company.
     */
    user_ids?: Array<string> | null;
  }
}

export declare namespace Notifications {
  export {
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationCreateParams as NotificationCreateParams,
  };
}
