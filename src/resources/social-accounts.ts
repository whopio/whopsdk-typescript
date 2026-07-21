// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Social Account represents an external profile connected to a Whop account or user, such as a Facebook page or Instagram account. Connecting a social account lets Whop run [ads](/api-reference/beta/ads/ad) under that profile's identity and promote its existing posts.
 *
 * Use the Social Accounts API to list connected accounts, create a Whop-managed Facebook page, start an OAuth connection, disconnect a social account, and list a connected profile's posts or a Facebook page's lead forms.
 */
export class SocialAccounts extends APIResource {
  /**
   * Lists the social accounts linked to an account or user.
   */
  list(
    query: SocialAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SocialAccountsCursorPage, SocialAccount> {
    return this._client.getAPIList('/social_accounts', CursorPage<SocialAccount>, { query, ...options });
  }

  /**
   * Creates or returns a Whop-managed Facebook page for an account.
   */
  create(params: SocialAccountCreateParams, options?: RequestOptions): APIPromise<SocialAccount> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/social_accounts', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Starts an OAuth connection flow and returns an authorize_url where the user can
   * connect a social account.
   */
  connect(
    params: SocialAccountConnectParams,
    options?: RequestOptions,
  ): APIPromise<SocialAccountConnectResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/social_accounts/connect', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Disconnects a social account from an account or user without deleting the
   * underlying platform account.
   */
  delete(
    id: string,
    params: SocialAccountDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SocialAccountDeleteResponse> {
    const { account_id, user_id } = params ?? {};
    return this._client.delete(path`/social_accounts/${id}`, { query: { account_id, user_id }, ...options });
  }

  /**
   * Lists the existing posts of a connected Facebook page or Instagram account.
   */
  posts(
    id: string,
    query: SocialAccountPostsParams,
    options?: RequestOptions,
  ): APIPromise<SocialAccountPostsResponse> {
    return this._client.get(path`/social_accounts/${id}/posts`, { query, ...options });
  }

  /**
   * Lists the active lead (instant) forms that already exist on a connected Facebook
   * page, so an ad can reuse one as its `lead_gen_form_id` instead of authoring a
   * new form. Every active form comes back in a single response — the list is not
   * paginated.
   */
  leadForms(
    id: string,
    query: SocialAccountLeadFormsParams,
    options?: RequestOptions,
  ): APIPromise<SocialAccountLeadFormsResponse> {
    return this._client.get(path`/social_accounts/${id}/lead_forms`, { query, ...options });
  }
}

export type SocialAccountsCursorPage = CursorPage<SocialAccount>;

export interface SocialAccount {
  /**
   * Unique identifier for the social account.
   */
  id: string;

  /**
   * Why this social account currently can't be used for advertising — a failed share
   * or a Meta-side restriction. Null when the account is healthy.
   */
  error: string | null;

  /**
   * The platform-specific ID for this social account.
   */
  external_id: string | null;

  /**
   * The display name of the social account on the platform.
   */
  name: string | null;

  /**
   * The platform the social account exists on.
   */
  platform: 'x' | 'instagram' | 'youtube' | 'tiktok' | 'facebook';

  /**
   * The URL where the profile picture of the social account can be accessed.
   */
  profile_picture_url: string | null;

  scopes: Array<string>;

  /**
   * The URL where the social account can be accessed on the platform. Null while a
   * Whop-owned page is still being provisioned.
   */
  url: string | null;

  /**
   * The username of the social account on the platform. Null while a Whop-owned page
   * is still being provisioned.
   */
  username: string | null;

  /**
   * Whether the social account is verified on the platform.
   */
  verified: boolean;
}

export interface SocialAccountPost {
  /**
   * The platform's own identifier for the post or media. Use it to reference the
   * post on an ad.
   */
  id: string;

  /**
   * The post's call-to-action button, for example shop_now (Facebook only; null for
   * Instagram).
   */
  call_to_action:
    | 'learn_more'
    | 'shop_now'
    | 'sign_up'
    | 'subscribe'
    | 'get_started'
    | 'book_now'
    | 'apply_now'
    | 'contact_us'
    | 'download'
    | 'order_now'
    | 'buy_now'
    | 'get_quote'
    | 'message_page'
    | 'whatsapp_message'
    | 'instagram_message'
    | 'call_now'
    | 'get_directions'
    | 'send_updates'
    | 'get_offer'
    | 'watch_more'
    | 'listen_now'
    | 'play_game'
    | 'open_link'
    | 'no_button'
    | 'get_offer_view'
    | 'get_event_tickets'
    | 'see_menu'
    | 'request_time'
    | 'event_rsvp'
    | 'see_details'
    | 'view_instagram_profile'
    | null;

  /**
   * The URL the post's call-to-action drives to (Facebook only; null for Instagram).
   */
  destination_url: string | null;

  /**
   * The URL of the post's media — the image for image posts, the playable video file
   * for video posts. Meta signs these and they expire after roughly 24 hours, so
   * don't store them.
   */
  media_url: string | null;

  /**
   * Poster image for video posts; null for image posts, where media_url is already
   * the image. Signed and short-lived like media_url.
   */
  thumbnail_url: string | null;
}

/**
 * Always true on success.
 */
export type SocialAccountDeleteResponse = boolean;

export interface SocialAccountConnectResponse {
  /**
   * The OAuth authorization URL to redirect the user to.
   */
  authorize_url: string;
}

export interface SocialAccountLeadFormsResponse {
  data: Array<SocialAccountLeadFormsResponse.Data>;
}

export namespace SocialAccountLeadFormsResponse {
  export interface Data {
    /**
     * The ad platform's identifier for the form. Use it as lead_gen_form_id on an ad
     * to reuse the form.
     */
    id: string;

    /**
     * When the form was created, as an ISO 8601 timestamp.
     */
    created_at: string | null;

    /**
     * Language the form is shown in, such as en_US.
     */
    locale: string | null;

    /**
     * Advertiser-facing form name.
     */
    name: string | null;

    /**
     * Privacy policy URL configured on the form.
     */
    privacy_policy_url: string | null;

    question_labels: Array<string>;
  }
}

export interface SocialAccountPostsResponse {
  data: Array<SocialAccountPost>;

  page_info: SocialAccountPostsResponse.PageInfo;
}

export namespace SocialAccountPostsResponse {
  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;
  }
}

export interface SocialAccountListParams extends CursorPageParams {
  /**
   * The Account that the social accounts are connected to. Provide either this or
   * user_id.
   */
  account_id?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of social accounts to return.
   */
  first?: number;

  /**
   * The number of social accounts to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort social accounts by.
   */
  order?: 'display_order' | 'created_at';

  /**
   * Only return social accounts for the platform that is specified.
   */
  platform?: 'x' | 'instagram' | 'youtube' | 'tiktok' | 'facebook';

  /**
   * Only return social accounts that have these scopes.
   */
  scopes?: Array<'advertise'>;

  /**
   * The User that the social accounts are connected to. Provide either this or
   * account_id.
   */
  user_id?: string;

  /**
   * Only return social accounts that are verified on the platform.
   */
  verified?: boolean;
}

export interface SocialAccountCreateParams {
  /**
   * Body param: The platform to create the social account on.
   */
  platform: 'facebook';

  /**
   * Body param: The Account (biz\_ identifier) to create the social account for. An
   * account-scoped API key may omit this to default to its own account.
   */
  account_id?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface SocialAccountConnectParams {
  /**
   * Body param: The platform to connect the social account on. Supported options are
   * `meta_business` and `tiktok`.
   */
  platform: 'meta_business' | 'tiktok';

  /**
   * Body param: The Account (biz\_ identifier) to connect the social account for. An
   * account-scoped API key may omit this to default to its own account.
   */
  account_id?: string;

  /**
   * Body param: The Whop URL to redirect the user to after they finish connecting.
   */
  redirect_url?: string;

  /**
   * Body param: Capabilities to grant for the connected social account. Use
   * `advertise` when connecting a Meta Business or TikTok account for ads.
   */
  scopes?: Array<'advertise'>;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface SocialAccountDeleteParams {
  /**
   * The Account that the social account is connected to. Provide either this or
   * user_id.
   */
  account_id?: string;

  /**
   * The User that the social account is connected to. Provide either this or
   * account_id.
   */
  user_id?: string;
}

export interface SocialAccountPostsParams {
  /**
   * The Account (a biz\_ identifier) the social account is connected to.
   */
  account_id: string;

  /**
   * Cursor to fetch the page after (from page_info.end_cursor).
   */
  after?: string;

  /**
   * The number of posts to return.
   */
  first?: number;

  /**
   * Return only the single post with this platform id, instead of the full list.
   */
  post_id?: string;
}

export interface SocialAccountLeadFormsParams {
  /**
   * The Account (a biz\_ identifier) the social account is connected to.
   */
  account_id: string;
}

export declare namespace SocialAccounts {
  export {
    type SocialAccount as SocialAccount,
    type SocialAccountPost as SocialAccountPost,
    type SocialAccountDeleteResponse as SocialAccountDeleteResponse,
    type SocialAccountConnectResponse as SocialAccountConnectResponse,
    type SocialAccountLeadFormsResponse as SocialAccountLeadFormsResponse,
    type SocialAccountPostsResponse as SocialAccountPostsResponse,
    type SocialAccountsCursorPage as SocialAccountsCursorPage,
    type SocialAccountListParams as SocialAccountListParams,
    type SocialAccountCreateParams as SocialAccountCreateParams,
    type SocialAccountConnectParams as SocialAccountConnectParams,
    type SocialAccountDeleteParams as SocialAccountDeleteParams,
    type SocialAccountPostsParams as SocialAccountPostsParams,
    type SocialAccountLeadFormsParams as SocialAccountLeadFormsParams,
  };
}
