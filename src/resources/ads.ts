// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ads
 */
export class Ads extends APIResource {
  /**
   * Create an ad within an ad group.
   *
   * Required permissions:
   *
   * - `ad_campaign:create`
   */
  create(body: AdCreateParams, options?: RequestOptions): APIPromise<AdCreateResponse> {
    return this._client.post('/ads', { body, ...options });
  }

  /**
   * Retrieve an ad by its unique identifier.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AdRetrieveResponse> {
    return this._client.get(path`/ads/${id}`, options);
  }

  /**
   * List ads scoped by ad group, campaign, or company.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   */
  list(
    query: AdListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdListResponsesCursorPage, AdListResponse> {
    return this._client.getAPIList('/ads', CursorPage<AdListResponse>, { query, ...options });
  }
}

export type AdListResponsesCursorPage = CursorPage<AdListResponse>;

/**
 * An ad belonging to an ad group
 */
export interface AdCreateResponse {
  /**
   * Unique identifier for the ad.
   */
  id: string;

  /**
   * When the ad was created.
   */
  created_at: string;

  /**
   * The creative set used by this ad.
   */
  external_ad_creative_set: AdCreateResponse.ExternalAdCreativeSet | null;

  /**
   * The parent ad group.
   */
  external_ad_group: AdCreateResponse.ExternalAdGroup;

  /**
   * Typed platform-specific configuration.
   */
  platform_config:
    | AdCreateResponse.MetaAdPlatformConfigType
    | null
    | AdCreateResponse.TiktokAdPlatformConfigType
    | null;

  /**
   * Current status of the ad.
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * When the ad was last updated.
   */
  updated_at: string;
}

export namespace AdCreateResponse {
  /**
   * The creative set used by this ad.
   */
  export interface ExternalAdCreativeSet {
    /**
     * The unique identifier for the external ad creative set.
     */
    id: string;
  }

  /**
   * The parent ad group.
   */
  export interface ExternalAdGroup {
    /**
     * The unique identifier for the external ad group.
     */
    id: string;

    /**
     * Human-readable ad group name
     */
    name: string | null;

    /**
     * Current operational status of the ad group
     */
    status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';
  }

  /**
   * Meta (Facebook/Instagram) ad configuration.
   */
  export interface MetaAdPlatformConfigType {
    call_to_action_type:
      | 'LEARN_MORE'
      | 'SHOP_NOW'
      | 'SIGN_UP'
      | 'SUBSCRIBE'
      | 'GET_STARTED'
      | 'BOOK_NOW'
      | 'APPLY_NOW'
      | 'CONTACT_US'
      | 'DOWNLOAD'
      | 'ORDER_NOW'
      | 'BUY_NOW'
      | 'GET_QUOTE'
      | 'MESSAGE_PAGE'
      | 'WHATSAPP_MESSAGE'
      | 'INSTAGRAM_MESSAGE'
      | 'CALL_NOW'
      | 'GET_DIRECTIONS'
      | 'SEND_UPDATES'
      | 'GET_OFFER'
      | 'WATCH_MORE'
      | 'LISTEN_NOW'
      | 'PLAY_GAME'
      | 'OPEN_LINK'
      | 'NO_BUTTON'
      | 'GET_OFFER_VIEW'
      | 'GET_EVENT_TICKETS'
      | 'SEE_MENU'
      | 'REQUEST_TIME'
      | 'EVENT_RSVP'
      | 'SEE_DETAILS'
      | 'VIEW_INSTAGRAM_PROFILE'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    headline: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    link_url: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform.
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    primary_text: string | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdPlatformConfigType';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    url_tags: string | null;
  }

  /**
   * TikTok ad configuration.
   */
  export interface TiktokAdPlatformConfigType {
    ad_format: 'SINGLE_IMAGE' | 'SINGLE_VIDEO' | 'CAROUSEL_ADS' | 'CATALOG_CAROUSEL' | 'LIVE_CONTENT' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    ad_name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    ad_text: string | null;

    /**
     * TikTok call-to-action button text. See docs/tiktok_api/ad.md § call_to_action.
     */
    call_to_action:
      | 'LEARN_MORE'
      | 'DOWNLOAD'
      | 'SHOP_NOW'
      | 'SIGN_UP'
      | 'CONTACT_US'
      | 'APPLY_NOW'
      | 'BOOK_NOW'
      | 'PLAY_GAME'
      | 'WATCH_NOW'
      | 'READ_MORE'
      | 'VIEW_NOW'
      | 'GET_QUOTE'
      | 'ORDER_NOW'
      | 'INSTALL_NOW'
      | 'GET_SHOWTIMES'
      | 'LISTEN_NOW'
      | 'INTERESTED'
      | 'SUBSCRIBE'
      | 'GET_TICKETS_NOW'
      | 'EXPERIENCE_NOW'
      | 'PRE_ORDER_NOW'
      | 'VISIT_STORE'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_authorized_bc_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    identity_type: 'CUSTOMIZED_USER' | 'AUTH_CODE' | 'TT_USER' | 'BC_AUTH_TT' | null;

    image_ids: Array<string> | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    landing_page_url: string | null;

    /**
     * The ad platform.
     */
    platform: 'meta' | 'tiktok';

    /**
     * The typename of this object
     */
    typename: 'TiktokAdPlatformConfigType';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    video_id: string | null;
  }
}

/**
 * An ad belonging to an ad group
 */
export interface AdRetrieveResponse {
  /**
   * Unique identifier for the ad.
   */
  id: string;

  /**
   * When the ad was created.
   */
  created_at: string;

  /**
   * The creative set used by this ad.
   */
  external_ad_creative_set: AdRetrieveResponse.ExternalAdCreativeSet | null;

  /**
   * The parent ad group.
   */
  external_ad_group: AdRetrieveResponse.ExternalAdGroup;

  /**
   * Typed platform-specific configuration.
   */
  platform_config:
    | AdRetrieveResponse.MetaAdPlatformConfigType
    | null
    | AdRetrieveResponse.TiktokAdPlatformConfigType
    | null;

  /**
   * Current status of the ad.
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * When the ad was last updated.
   */
  updated_at: string;
}

export namespace AdRetrieveResponse {
  /**
   * The creative set used by this ad.
   */
  export interface ExternalAdCreativeSet {
    /**
     * The unique identifier for the external ad creative set.
     */
    id: string;
  }

  /**
   * The parent ad group.
   */
  export interface ExternalAdGroup {
    /**
     * The unique identifier for the external ad group.
     */
    id: string;

    /**
     * Human-readable ad group name
     */
    name: string | null;

    /**
     * Current operational status of the ad group
     */
    status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';
  }

  /**
   * Meta (Facebook/Instagram) ad configuration.
   */
  export interface MetaAdPlatformConfigType {
    call_to_action_type:
      | 'LEARN_MORE'
      | 'SHOP_NOW'
      | 'SIGN_UP'
      | 'SUBSCRIBE'
      | 'GET_STARTED'
      | 'BOOK_NOW'
      | 'APPLY_NOW'
      | 'CONTACT_US'
      | 'DOWNLOAD'
      | 'ORDER_NOW'
      | 'BUY_NOW'
      | 'GET_QUOTE'
      | 'MESSAGE_PAGE'
      | 'WHATSAPP_MESSAGE'
      | 'INSTAGRAM_MESSAGE'
      | 'CALL_NOW'
      | 'GET_DIRECTIONS'
      | 'SEND_UPDATES'
      | 'GET_OFFER'
      | 'WATCH_MORE'
      | 'LISTEN_NOW'
      | 'PLAY_GAME'
      | 'OPEN_LINK'
      | 'NO_BUTTON'
      | 'GET_OFFER_VIEW'
      | 'GET_EVENT_TICKETS'
      | 'SEE_MENU'
      | 'REQUEST_TIME'
      | 'EVENT_RSVP'
      | 'SEE_DETAILS'
      | 'VIEW_INSTAGRAM_PROFILE'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    headline: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    link_url: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform.
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    primary_text: string | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdPlatformConfigType';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    url_tags: string | null;
  }

  /**
   * TikTok ad configuration.
   */
  export interface TiktokAdPlatformConfigType {
    ad_format: 'SINGLE_IMAGE' | 'SINGLE_VIDEO' | 'CAROUSEL_ADS' | 'CATALOG_CAROUSEL' | 'LIVE_CONTENT' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    ad_name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    ad_text: string | null;

    /**
     * TikTok call-to-action button text. See docs/tiktok_api/ad.md § call_to_action.
     */
    call_to_action:
      | 'LEARN_MORE'
      | 'DOWNLOAD'
      | 'SHOP_NOW'
      | 'SIGN_UP'
      | 'CONTACT_US'
      | 'APPLY_NOW'
      | 'BOOK_NOW'
      | 'PLAY_GAME'
      | 'WATCH_NOW'
      | 'READ_MORE'
      | 'VIEW_NOW'
      | 'GET_QUOTE'
      | 'ORDER_NOW'
      | 'INSTALL_NOW'
      | 'GET_SHOWTIMES'
      | 'LISTEN_NOW'
      | 'INTERESTED'
      | 'SUBSCRIBE'
      | 'GET_TICKETS_NOW'
      | 'EXPERIENCE_NOW'
      | 'PRE_ORDER_NOW'
      | 'VISIT_STORE'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_authorized_bc_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    identity_type: 'CUSTOMIZED_USER' | 'AUTH_CODE' | 'TT_USER' | 'BC_AUTH_TT' | null;

    image_ids: Array<string> | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    landing_page_url: string | null;

    /**
     * The ad platform.
     */
    platform: 'meta' | 'tiktok';

    /**
     * The typename of this object
     */
    typename: 'TiktokAdPlatformConfigType';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    video_id: string | null;
  }
}

/**
 * An ad belonging to an ad group
 */
export interface AdListResponse {
  /**
   * Unique identifier for the ad.
   */
  id: string;

  /**
   * When the ad was created.
   */
  created_at: string;

  /**
   * Typed platform-specific configuration.
   */
  platform_config:
    | AdListResponse.MetaAdPlatformConfigType
    | null
    | AdListResponse.TiktokAdPlatformConfigType
    | null;

  /**
   * Current status of the ad.
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * When the ad was last updated.
   */
  updated_at: string;
}

export namespace AdListResponse {
  /**
   * Meta (Facebook/Instagram) ad configuration.
   */
  export interface MetaAdPlatformConfigType {
    call_to_action_type:
      | 'LEARN_MORE'
      | 'SHOP_NOW'
      | 'SIGN_UP'
      | 'SUBSCRIBE'
      | 'GET_STARTED'
      | 'BOOK_NOW'
      | 'APPLY_NOW'
      | 'CONTACT_US'
      | 'DOWNLOAD'
      | 'ORDER_NOW'
      | 'BUY_NOW'
      | 'GET_QUOTE'
      | 'MESSAGE_PAGE'
      | 'WHATSAPP_MESSAGE'
      | 'INSTAGRAM_MESSAGE'
      | 'CALL_NOW'
      | 'GET_DIRECTIONS'
      | 'SEND_UPDATES'
      | 'GET_OFFER'
      | 'WATCH_MORE'
      | 'LISTEN_NOW'
      | 'PLAY_GAME'
      | 'OPEN_LINK'
      | 'NO_BUTTON'
      | 'GET_OFFER_VIEW'
      | 'GET_EVENT_TICKETS'
      | 'SEE_MENU'
      | 'REQUEST_TIME'
      | 'EVENT_RSVP'
      | 'SEE_DETAILS'
      | 'VIEW_INSTAGRAM_PROFILE'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    headline: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    link_url: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform.
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    primary_text: string | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdPlatformConfigType';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    url_tags: string | null;
  }

  /**
   * TikTok ad configuration.
   */
  export interface TiktokAdPlatformConfigType {
    ad_format: 'SINGLE_IMAGE' | 'SINGLE_VIDEO' | 'CAROUSEL_ADS' | 'CATALOG_CAROUSEL' | 'LIVE_CONTENT' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    ad_name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    ad_text: string | null;

    /**
     * TikTok call-to-action button text. See docs/tiktok_api/ad.md § call_to_action.
     */
    call_to_action:
      | 'LEARN_MORE'
      | 'DOWNLOAD'
      | 'SHOP_NOW'
      | 'SIGN_UP'
      | 'CONTACT_US'
      | 'APPLY_NOW'
      | 'BOOK_NOW'
      | 'PLAY_GAME'
      | 'WATCH_NOW'
      | 'READ_MORE'
      | 'VIEW_NOW'
      | 'GET_QUOTE'
      | 'ORDER_NOW'
      | 'INSTALL_NOW'
      | 'GET_SHOWTIMES'
      | 'LISTEN_NOW'
      | 'INTERESTED'
      | 'SUBSCRIBE'
      | 'GET_TICKETS_NOW'
      | 'EXPERIENCE_NOW'
      | 'PRE_ORDER_NOW'
      | 'VISIT_STORE'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_authorized_bc_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    identity_type: 'CUSTOMIZED_USER' | 'AUTH_CODE' | 'TT_USER' | 'BC_AUTH_TT' | null;

    image_ids: Array<string> | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    landing_page_url: string | null;

    /**
     * The ad platform.
     */
    platform: 'meta' | 'tiktok';

    /**
     * The typename of this object
     */
    typename: 'TiktokAdPlatformConfigType';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    video_id: string | null;
  }
}

export interface AdCreateParams {
  /**
   * The unique identifier of the ad group to create this ad in.
   */
  ad_group_id: string;

  /**
   * The unique identifier of the creative set to use.
   */
  creative_set_id?: string | null;

  /**
   * ID of an existing Instagram media item to use as the ad creative (instead of a
   * creative set or Facebook post).
   */
  existing_instagram_media_id?: string | null;

  /**
   * ID of an existing Facebook post to use as the ad creative (instead of a creative
   * set).
   */
  existing_post_id?: string | null;

  /**
   * Platform-specific configuration. Must match the campaign platform.
   */
  platform_config?: AdCreateParams.PlatformConfig | null;

  /**
   * The status of an external ad.
   */
  status?: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged' | null;
}

export namespace AdCreateParams {
  /**
   * Platform-specific configuration. Must match the campaign platform.
   */
  export interface PlatformConfig {
    /**
     * Configuration for Meta (Facebook/Instagram) ads.
     */
    meta?: PlatformConfig.Meta | null;

    /**
     * Configuration for TikTok ads.
     */
    tiktok?: PlatformConfig.Tiktok | null;
  }

  export namespace PlatformConfig {
    /**
     * Configuration for Meta (Facebook/Instagram) ads.
     */
    export interface Meta {
      /**
       * Call-to-action button type.
       */
      call_to_action_type?:
        | 'LEARN_MORE'
        | 'SHOP_NOW'
        | 'SIGN_UP'
        | 'SUBSCRIBE'
        | 'GET_STARTED'
        | 'BOOK_NOW'
        | 'APPLY_NOW'
        | 'CONTACT_US'
        | 'DOWNLOAD'
        | 'ORDER_NOW'
        | 'BUY_NOW'
        | 'GET_QUOTE'
        | 'MESSAGE_PAGE'
        | 'WHATSAPP_MESSAGE'
        | 'INSTAGRAM_MESSAGE'
        | 'CALL_NOW'
        | 'GET_DIRECTIONS'
        | 'SEND_UPDATES'
        | 'GET_OFFER'
        | 'WATCH_MORE'
        | 'LISTEN_NOW'
        | 'PLAY_GAME'
        | 'OPEN_LINK'
        | 'NO_BUTTON'
        | 'GET_OFFER_VIEW'
        | 'GET_EVENT_TICKETS'
        | 'SEE_MENU'
        | 'REQUEST_TIME'
        | 'EVENT_RSVP'
        | 'SEE_DETAILS'
        | 'VIEW_INSTAGRAM_PROFILE'
        | null;

      /**
       * Per-card carousel config.
       */
      carousel_cards?: Array<Meta.CarouselCard> | null;

      /**
       * Description of the ad creative (legacy single-value).
       */
      description?: string | null;

      /**
       * Up to 5 description variants, rendered via Meta asset_feed_spec.
       */
      descriptions?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      existing_instagram_media_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      existing_post_id?: string | null;

      /**
       * Headline of the ad creative (legacy single-value).
       */
      headline?: string | null;

      /**
       * Up to 5 headline variants, rendered via Meta asset_feed_spec.
       */
      headlines?: Array<string> | null;

      /**
       * Unique identifier of the Instagram account.
       */
      instagram_actor_id?: string | null;

      /**
       * Lead generation form configuration (JSON).
       */
      lead_form_config?: { [key: string]: unknown } | null;

      /**
       * Destination URL.
       */
      link_url?: string | null;

      multi_advertiser_enrollment?: 'OPT_IN' | 'OPT_OUT' | null;

      /**
       * Ad name.
       */
      name?: string | null;

      /**
       * Unique identifier of the Facebook Page.
       */
      page_id?: string | null;

      /**
       * Messenger welcome message / ice-breaker template (JSON).
       */
      page_welcome_message?: { [key: string]: unknown } | null;

      /**
       * Primary text of the ad creative (legacy single-value).
       */
      primary_text?: string | null;

      /**
       * Up to 5 primary-text variants, rendered via Meta asset_feed_spec.
       */
      primary_texts?: Array<string> | null;

      /**
       * URL query parameters appended to the destination link.
       */
      url_tags?: string | null;
    }

    export namespace Meta {
      /**
       * Per-card configuration for a carousel ad.
       */
      export interface CarouselCard {
        /**
         * CTA button type (e.g., SHOP_NOW, LEARN_MORE).
         */
        call_to_action_type?: string | null;

        /**
         * Card description (max 30 chars recommended).
         */
        description?: string | null;

        /**
         * Destination URL for this card (defaults to ad destination).
         */
        link?: string | null;

        /**
         * Card title (max 35 chars recommended).
         */
        name?: string | null;
      }
    }

    /**
     * Configuration for TikTok ads.
     */
    export interface Tiktok {
      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      access_pass_tag?: string | null;

      /**
       * Ad format (SINGLE_IMAGE, SINGLE_VIDEO, CAROUSEL_ADS, CATALOG_CAROUSEL,
       * LIVE_CONTENT).
       */
      ad_format?:
        | 'SINGLE_IMAGE'
        | 'SINGLE_VIDEO'
        | 'CAROUSEL_ADS'
        | 'CATALOG_CAROUSEL'
        | 'LIVE_CONTENT'
        | null;

      /**
       * Ad name.
       */
      ad_name?: string | null;

      /**
       * Ad copy (single variant).
       */
      ad_text?: string | null;

      /**
       * Ad copy variants for search ads (up to 5).
       */
      ad_texts?: Array<string> | null;

      /**
       * Whether the ad creative is AI-generated content. See docs/tiktok_api/ad.md §
       * aigc_disclosure_type.
       */
      aigc_disclosure_type?: 'UNSET' | 'CONTAINS_AIGC' | 'IS_AIGC' | 'NOT_AIGC' | null;

      /**
       * Automatic disclaimer categories (e.g., FINANCE, ALCOHOL).
       */
      auto_disclaimer_types?: Array<string> | null;

      /**
       * Represents `true` or `false` values.
       */
      automate_creative_enabled?: boolean | null;

      /**
       * Post-bid brand-safety vendor. See docs/tiktok_api/ad.md §
       * brand_safety_postbid_partner.
       */
      brand_safety_postbid_partner?: 'UNSET' | 'IAS' | 'DOUBLE_VERIFY' | 'OPEN_SLATE' | 'ZEFR' | null;

      /**
       * VAST URL for brand safety measurement.
       */
      brand_safety_vast_url?: string | null;

      /**
       * TikTok call-to-action button text. See docs/tiktok_api/ad.md § call_to_action.
       */
      call_to_action?:
        | 'LEARN_MORE'
        | 'DOWNLOAD'
        | 'SHOP_NOW'
        | 'SIGN_UP'
        | 'CONTACT_US'
        | 'APPLY_NOW'
        | 'BOOK_NOW'
        | 'PLAY_GAME'
        | 'WATCH_NOW'
        | 'READ_MORE'
        | 'VIEW_NOW'
        | 'GET_QUOTE'
        | 'ORDER_NOW'
        | 'INSTALL_NOW'
        | 'GET_SHOWTIMES'
        | 'LISTEN_NOW'
        | 'INTERESTED'
        | 'SUBSCRIBE'
        | 'GET_TICKETS_NOW'
        | 'EXPERIENCE_NOW'
        | 'PRE_ORDER_NOW'
        | 'VISIT_STORE'
        | null;

      /**
       * Represents `true` or `false` values.
       */
      call_to_action_enabled?: boolean | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      call_to_action_id?: string | null;

      /**
       * How the call-to-action text is chosen. STANDARD uses a single fixed CTA; DYNAMIC
       * lets TikTok rotate through a set of CTAs to maximize performance.
       */
      call_to_action_mode?: 'STANDARD' | 'DYNAMIC' | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      card_id?: string | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      carousel_image_index?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      catalog_id?: string | null;

      /**
       * Third-party click tracker URL.
       */
      click_tracking_url?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      cpp_url?: string | null;

      /**
       * Whether the creator has authorized the use of this creative for paid promotion
       * (Spark Ads).
       */
      creative_authorized?: boolean | null;

      creative_auto_enhancement_strategy_list?: Array<string> | null;

      dark_post_status?: 'ON' | 'OFF' | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      deeplink?: string | null;

      /**
       * How the ad's deeplink is resolved. See docs/tiktok_api/ad.md §
       * deeplink_format_type.
       */
      deeplink_format_type?: 'UNSET' | 'DEEPLINK' | 'DEFERRED_DEEPLINK' | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      deeplink_type?: string | null;

      /**
       * UTM params appended to the deeplink.
       */
      deeplink_utm_params?: Array<{ [key: string]: unknown }> | null;

      /**
       * Clickable disclaimer segments (text + url).
       */
      disclaimer_clickable_texts?: Array<{ [key: string]: unknown }> | null;

      /**
       * Plain text shown when disclaimer_type is DISCLAIMER_TEXT / DISCLAIMER_WITH_URL.
       */
      disclaimer_text?: string | null;

      /**
       * Ad disclaimer mode. See docs/tiktok_api/ad.md § disclaimer_type.
       */
      disclaimer_type?: 'NONE' | 'DISCLAIMER_TEXT' | 'DISCLAIMER_WITH_URL' | null;

      /**
       * Dynamic destination strategy for shopping ads.
       */
      dynamic_destination?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      dynamic_format?: string | null;

      /**
       * End-card CTA text for video ads.
       */
      end_card_cta?: string | null;

      /**
       * Destination fallback when a deferred deeplink cannot open the app. See
       * docs/tiktok_api/ad.md § fallback_type.
       */
      fallback_type?: 'UNSET' | 'APP_STORE' | 'LANDING_PAGE' | null;

      /**
       * Business Center ID (required when identity_type is BC_AUTH_TT).
       */
      identity_authorized_bc_id?: string | null;

      /**
       * Unique identifier of the identity.
       */
      identity_id?: string | null;

      /**
       * Identity type.
       */
      identity_type?: 'CUSTOMIZED_USER' | 'AUTH_CODE' | 'TT_USER' | 'BC_AUTH_TT' | null;

      /**
       * Unique identifiers of the images.
       */
      image_ids?: Array<string> | null;

      /**
       * Third-party impression tracker URL.
       */
      impression_tracking_url?: string | null;

      item_duet_status?: 'ENABLE' | 'DISABLE' | null;

      item_group_ids?: Array<string> | null;

      item_stitch_status?: 'ENABLE' | 'DISABLE' | null;

      /**
       * Landing page URL.
       */
      landing_page_url?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      link_url?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      music_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      page_id?: string | null;

      /**
       * Fields displayed on dynamic product cards.
       */
      product_display_field_list?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      product_set_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      product_specific_type?: string | null;

      /**
       * Represents `true` or `false` values.
       */
      promotional_music_disabled?: boolean | null;

      /**
       * Fallback destination for shopping ads when the primary target is unavailable.
       * See docs/tiktok_api/ad.md § shopping_ads_fallback_type.
       */
      shopping_ads_fallback_type?: 'UNSET' | 'LANDING_PAGE' | 'STORE' | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      shopping_ads_video_package_id?: string | null;

      showcase_products?: Array<{ [key: string]: unknown }> | null;

      sku_ids?: Array<string> | null;

      /**
       * TikTok item ID for Spark Ads (promotes an organic post).
       */
      tiktok_item_id?: string | null;

      /**
       * TikTok MMP-tracked app ID.
       */
      tracking_app_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      tracking_message_event_set_id?: string | null;

      /**
       * Offline event set IDs for attribution.
       */
      tracking_offline_event_set_ids?: Array<string> | null;

      /**
       * TikTok pixel ID used for conversion tracking on this ad.
       */
      tracking_pixel_id?: string | null;

      utm_params?: Array<{ [key: string]: unknown }> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      vertical_video_strategy?: string | null;

      /**
       * Unique identifier of the video.
       */
      video_id?: string | null;

      /**
       * Third-party video-view tracker URL.
       */
      video_view_tracking_url?: string | null;

      /**
       * Post-bid viewability measurement partner. See docs/tiktok_api/ad.md §
       * viewability_postbid_partner.
       */
      viewability_postbid_partner?: 'UNSET' | 'IAS' | 'DOUBLE_VERIFY' | 'MOAT' | null;

      /**
       * VAST URL for viewability measurement.
       */
      viewability_vast_url?: string | null;
    }
  }
}

export interface AdListParams extends CursorPageParams {
  /**
   * Filter by ad group. Provide exactly one of ad_group_id, campaign_id, or
   * company_id.
   */
  ad_group_id?: string | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter by campaign. Provide exactly one of ad_group_id, campaign_id, or
   * company_id.
   */
  campaign_id?: string | null;

  /**
   * Filter by company. Provide exactly one of ad_group_id, campaign_id, or
   * company_id.
   */
  company_id?: string | null;

  /**
   * Only return ads created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return ads created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The status of an external ad.
   */
  status?: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged' | null;
}

export declare namespace Ads {
  export {
    type AdCreateResponse as AdCreateResponse,
    type AdRetrieveResponse as AdRetrieveResponse,
    type AdListResponse as AdListResponse,
    type AdListResponsesCursorPage as AdListResponsesCursorPage,
    type AdCreateParams as AdCreateParams,
    type AdListParams as AdListParams,
  };
}
