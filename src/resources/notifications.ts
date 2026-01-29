// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Notifications extends APIResource {
  /**
   * Queues a notification to be sent to users in an experience or company team
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
     * The id of the company to target. Only team members of this company will receive
     * the notification. When clicked will take the user to your dashboard app view.
     */
    company_id: string;

    /**
     * The content of the notification
     */
    content: string;

    /**
     * The title of the notification
     */
    title: string;

    /**
     * Optional: ID of a Whop user whose profile picture will be used as the
     * notification icon. If not provided, defaults to the experience or company
     * avatar.
     */
    icon_user_id?: string | null;

    /**
     * The rest path to append to the generated deep link that opens your app. Use
     * [restPath] in your app path in the dashboard to read this parameter.
     */
    rest_path?: string | null;

    /**
     * The subtitle of the notification
     */
    subtitle?: string | null;

    /**
     * If provided, this will only send to these users if they are also in the main
     * scope (experience or company)
     */
    user_ids?: Array<string> | null;
  }

  export interface SendNotificationV2InputWithExperienceID {
    /**
     * The content of the notification
     */
    content: string;

    /**
     * The id of the experience to target. All users with access to this experience
     * (customers and admins) will receive the notification. When clicked, open your
     * experience view.
     */
    experience_id: string;

    /**
     * The title of the notification
     */
    title: string;

    /**
     * Optional: ID of a Whop user whose profile picture will be used as the
     * notification icon. If not provided, defaults to the experience or company
     * avatar.
     */
    icon_user_id?: string | null;

    /**
     * The rest path to append to the generated deep link that opens your app. Use
     * [restPath] in your app path in the dashboard to read this parameter.
     */
    rest_path?: string | null;

    /**
     * The subtitle of the notification
     */
    subtitle?: string | null;

    /**
     * If provided, this will only send to these users if they are also in the main
     * scope (experience or company)
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
