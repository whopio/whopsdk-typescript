// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SupportChannels extends APIResource {
  /**
   * Retrieves a support channel
   *
   * Required permissions:
   *
   * - `support_chat:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SupportChannelRetrieveResponse> {
    return this._client.get(path`/support_channels/${id}`, options);
  }

  /**
   * Lists chat channels inside a company
   *
   * Required permissions:
   *
   * - `support_chat:read`
   */
  list(
    query: SupportChannelListParams,
    options?: RequestOptions,
  ): PagePromise<SupportChannelListResponsesCursorPage, SupportChannelListResponse | null> {
    return this._client.getAPIList('/support_channels', CursorPage<SupportChannelListResponse | null>, {
      query,
      ...options,
    });
  }
}

export type SupportChannelListResponsesCursorPage = CursorPage<SupportChannelListResponse | null>;

/**
 * Represents a DM channel
 */
export interface SupportChannelRetrieveResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The bot ID if this is a support chat
   */
  company_id: string | null;

  /**
   * The custom name of the DM channel, if any
   */
  custom_name: string | null;

  /**
   * The customer user if this is a support chat
   */
  customer_user: SupportChannelRetrieveResponse.CustomerUser | null;

  /**
   * When the last message was sent
   */
  last_message_at: number | null;

  /**
   * When the support ticket was resolved (null if unresolved)
   */
  resolved_at: number | null;
}

export namespace SupportChannelRetrieveResponse {
  /**
   * The customer user if this is a support chat
   */
  export interface CustomerUser {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * Represents a DM channel
 */
export interface SupportChannelListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The bot ID if this is a support chat
   */
  company_id: string | null;

  /**
   * The custom name of the DM channel, if any
   */
  custom_name: string | null;

  /**
   * The customer user if this is a support chat
   */
  customer_user: SupportChannelListResponse.CustomerUser | null;

  /**
   * When the last message was sent
   */
  last_message_at: number | null;

  /**
   * When the support ticket was resolved (null if unresolved)
   */
  resolved_at: number | null;
}

export namespace SupportChannelListResponse {
  /**
   * The customer user if this is a support chat
   */
  export interface CustomerUser {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

export interface SupportChannelListParams extends CursorPageParams {
  /**
   * The ID of the company to list chat channels for
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

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

  /**
   * Filter for tickets where customer sent the last message (needs response) AND not
   * resolved. Set to true to only return open channels, false to only return
   * resolved channels.
   */
  open?: boolean | null;

  /**
   * Sort options for message channels
   */
  order?: 'created_at' | 'last_post_sent_at' | null;
}

export declare namespace SupportChannels {
  export {
    type SupportChannelRetrieveResponse as SupportChannelRetrieveResponse,
    type SupportChannelListResponse as SupportChannelListResponse,
    type SupportChannelListResponsesCursorPage as SupportChannelListResponsesCursorPage,
    type SupportChannelListParams as SupportChannelListParams,
  };
}
