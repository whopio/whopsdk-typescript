// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ad groups
 */
export class AdGroups extends APIResource {
  /**
   * Creates a new ad group within a campaign.
   *
   * Required permissions:
   *
   * - `ad_campaign:create`
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.create({
   *   campaign_id: 'campaign_id',
   * });
   * ```
   */
  create(body: AdGroupCreateParams, options?: RequestOptions): APIPromise<AdGroupCreateResponse> {
    return this._client.post('/ad_groups', { body, ...options });
  }

  /**
   * Retrieves a single ad group by its unique identifier.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.retrieve(
   *   'adgrp_xxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AdGroupRetrieveResponse> {
    return this._client.get(path`/ad_groups/${id}`, options);
  }

  /**
   * Updates an existing ad group.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.update(
   *   'adgrp_xxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: AdGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroupUpdateResponse> {
    return this._client.patch(path`/ad_groups/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of ad groups scoped by campaign or company, with
   * optional filtering by status and creation date.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const adGroupListResponse of client.adGroups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AdGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdGroupListResponsesCursorPage, AdGroupListResponse> {
    return this._client.getAPIList('/ad_groups', CursorPage<AdGroupListResponse>, { query, ...options });
  }

  /**
   * Soft-deletes an ad group.
   *
   * Required permissions:
   *
   * - `ad_campaign:delete`
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.delete(
   *   'adgrp_xxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AdGroupDeleteResponse> {
    return this._client.delete(path`/ad_groups/${id}`, options);
  }
}

export type AdGroupListResponsesCursorPage = CursorPage<AdGroupListResponse>;

/**
 * An external ad group (ad set) belonging to an ad campaign
 */
export interface AdGroupCreateResponse {
  /**
   * The unique identifier for the external ad group.
   */
  id: string;

  /**
   * The parent ad campaign
   */
  ad_campaign: AdGroupCreateResponse.AdCampaign;

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  config: AdGroupCreateResponse.Config | null;

  /**
   * The datetime the external ad group was created.
   */
  created_at: string;

  /**
   * Daily budget in dollars (nil for lifetime budgets)
   */
  daily_budget: number | null;

  /**
   * Human-readable ad group name
   */
  name: string | null;

  /**
   * Typed platform-specific configuration. Use inline fragments (... on
   * MetaAdGroupPlatformConfigType).
   */
  platform_config:
    | AdGroupCreateResponse.MetaAdGroupPlatformConfigType
    | null
    | AdGroupCreateResponse.TiktokAdGroupPlatformConfigType
    | null;

  /**
   * Current operational status of the ad group
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * The datetime the external ad group was last updated.
   */
  updated_at: string;
}

export namespace AdGroupCreateResponse {
  /**
   * The parent ad campaign
   */
  export interface AdCampaign {
    /**
     * The unique identifier for the ad campaign.
     */
    id: string;

    /**
     * The platforms where an ad campaign can run.
     */
    platform: 'meta' | 'tiktok' | null;

    /**
     * Current status of the campaign (active, paused, or inactive)
     */
    status:
      | 'active'
      | 'paused'
      | 'inactive'
      | 'stale'
      | 'pending_refund'
      | 'payment_failed'
      | 'draft'
      | 'in_review'
      | 'flagged'
      | 'importing';

    /**
     * The title of the ad campaign
     */
    title: string;
  }

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Used when bid_strategy is bid_cap or cost_cap.
     */
    bid_amount: number | null;

    /**
     * Bid strategy: lowest_cost, bid_cap, or cost_cap.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * How you are billed (e.g., impressions, clicks).
     */
    billing_event: 'impressions' | 'clicks' | 'optimized_cpm' | 'video_views' | null;

    /**
     * Scheduled end time (ISO8601). Required for lifetime budgets.
     */
    end_time: string | null;

    /**
     * Maximum number of times to show ads to each person in the frequency interval.
     */
    frequency_cap: number | null;

    /**
     * Number of days for the frequency cap interval.
     */
    frequency_cap_interval_days: number | null;

    /**
     * What the ad group optimizes for (e.g., conversions, link_clicks, reach).
     */
    optimization_goal:
      | 'conversions'
      | 'link_clicks'
      | 'landing_page_views'
      | 'reach'
      | 'impressions'
      | 'app_installs'
      | 'video_views'
      | 'lead_generation'
      | 'value'
      | 'page_likes'
      | 'conversations'
      | 'ad_recall_lift'
      | 'two_second_continuous_video_views'
      | 'post_engagement'
      | 'event_responses'
      | 'reminders_set'
      | 'quality_lead'
      | null;

    /**
     * Budget pacing: standard (even) or accelerated (fast).
     */
    pacing: 'standard' | 'accelerated' | null;

    /**
     * Scheduled start time (ISO8601).
     */
    start_time: string | null;

    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    targeting: Config.Targeting | null;
  }

  export namespace Config {
    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    export interface Targeting {
      /**
       * Maximum age for demographic targeting.
       */
      age_max: number | null;

      /**
       * Minimum age for demographic targeting.
       */
      age_min: number | null;

      /**
       * ISO 3166-1 alpha-2 country codes targeted.
       */
      countries: Array<string> | null;

      /**
       * Device platforms targeted.
       */
      device_platforms: Array<'mobile' | 'desktop'> | null;

      /**
       * Platform audience IDs excluded.
       */
      exclude_audience_ids: Array<string> | null;

      /**
       * Genders targeted.
       */
      genders: Array<'male' | 'female' | 'all'> | null;

      /**
       * Platform audience IDs included.
       */
      include_audience_ids: Array<string> | null;

      /**
       * Platform-specific interest IDs targeted.
       */
      interest_ids: Array<string> | null;

      /**
       * Language codes targeted.
       */
      languages: Array<string> | null;

      /**
       * Placement strategy for ad delivery.
       */
      placement_type: 'automatic' | 'manual' | null;
    }
  }

  /**
   * Meta (Facebook/Instagram) ad set configuration.
   */
  export interface MetaAdGroupPlatformConfigType {
    attribution_spec: Array<{ [key: string]: unknown }> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    bid_amount: number | null;

    bid_strategy:
      | 'LOWEST_COST_WITHOUT_CAP'
      | 'LOWEST_COST_WITH_BID_CAP'
      | 'COST_CAP'
      | 'LOWEST_COST_WITH_MIN_ROAS'
      | null;

    billing_event:
      | 'APP_INSTALLS'
      | 'CLICKS'
      | 'IMPRESSIONS'
      | 'LINK_CLICKS'
      | 'NONE'
      | 'OFFER_CLAIMS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'THRUPLAY'
      | 'PURCHASE'
      | 'LISTING_INTERACTION'
      | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    daily_budget: number | null;

    destination_type:
      | 'UNDEFINED'
      | 'WEBSITE'
      | 'APP'
      | 'FACEBOOK'
      | 'MESSENGER'
      | 'WHATSAPP'
      | 'INSTAGRAM_DIRECT'
      | 'INSTAGRAM_PROFILE'
      | 'PHONE_CALL'
      | 'SHOP_AUTOMATIC'
      | 'APPLINKS_AUTOMATIC'
      | 'ON_AD'
      | 'ON_POST'
      | 'ON_VIDEO'
      | 'ON_PAGE'
      | 'ON_EVENT'
      | 'MESSAGING_MESSENGER_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER'
      | 'MESSAGING_INSTAGRAM_DIRECT_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP'
      | 'INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE'
      | 'FACEBOOK_PAGE'
      | 'INSTAGRAM_LIVE'
      | 'FACEBOOK_LIVE'
      | 'IMAGINE'
      | 'LEAD_FROM_IG_DIRECT'
      | 'LEAD_FROM_MESSENGER'
      | 'WEBSITE_AND_LEAD_FORM'
      | 'WEBSITE_AND_PHONE_CALL'
      | 'BROADCAST_CHANNEL'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    end_time: string | null;

    /**
     * Represents untyped JSON
     */
    excluded_geo_locations: { [key: string]: unknown } | null;

    facebook_positions: Array<string> | null;

    /**
     * Represents untyped JSON
     */
    geo_locations: { [key: string]: unknown } | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    instagram_positions: Array<string> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    lifetime_budget: number | null;

    optimization_goal:
      | 'NONE'
      | 'APP_INSTALLS'
      | 'AD_RECALL_LIFT'
      | 'ENGAGED_USERS'
      | 'EVENT_RESPONSES'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'QUALITY_LEAD'
      | 'LINK_CLICKS'
      | 'OFFSITE_CONVERSIONS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'QUALITY_CALL'
      | 'REACH'
      | 'LANDING_PAGE_VIEWS'
      | 'VISIT_INSTAGRAM_PROFILE'
      | 'VALUE'
      | 'THRUPLAY'
      | 'DERIVED_EVENTS'
      | 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS'
      | 'CONVERSATIONS'
      | 'IN_APP_VALUE'
      | 'MESSAGING_PURCHASE_CONVERSION'
      | 'SUBSCRIBERS'
      | 'REMINDERS_SET'
      | 'MEANINGFUL_CALL_ATTEMPT'
      | 'PROFILE_VISIT'
      | 'PROFILE_AND_PAGE_ENGAGEMENT'
      | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
      | 'ENGAGED_REACH'
      | 'ENGAGED_PAGE_VIEWS'
      | 'MESSAGING_DEEP_CONVERSATION_AND_FOLLOW'
      | 'ADVERTISER_SILOED_VALUE'
      | 'AUTOMATIC_OBJECTIVE'
      | 'MESSAGING_APPOINTMENT_CONVERSION'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents untyped JSON
     */
    promoted_object: { [key: string]: unknown } | null;

    publisher_platforms: Array<string> | null;

    status: 'ACTIVE' | 'PAUSED' | null;

    /**
     * Represents untyped JSON
     */
    targeting_automation: { [key: string]: unknown } | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdGroupPlatformConfigType';
  }

  /**
   * TikTok ad group configuration.
   */
  export interface TiktokAdGroupPlatformConfigType {
    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    bid_price: number | null;

    bid_type: 'BID_TYPE_NO_BID' | 'BID_TYPE_CUSTOM' | null;

    billing_event: 'CPC' | 'CPM' | 'OCPM' | 'CPV' | null;

    budget_mode: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL' | 'BUDGET_MODE_DYNAMIC_DAILY_BUDGET' | null;

    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    conversion_bid_price: number | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_type: string | null;

    operation_status: 'ENABLE' | 'DISABLE' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    optimization_event: string | null;

    optimization_goal:
      | 'CLICK'
      | 'CONVERT'
      | 'INSTALL'
      | 'IN_APP_EVENT'
      | 'REACH'
      | 'SHOW'
      | 'VIDEO_VIEW'
      | 'ENGAGED_VIEW'
      | 'ENGAGED_VIEW_FIFTEEN'
      | 'LEAD_GENERATION'
      | 'PREFERRED_LEAD'
      | 'CONVERSATION'
      | 'FOLLOWERS'
      | 'PROFILE_VIEWS'
      | 'PAGE_VISIT'
      | 'VALUE'
      | 'AUTOMATIC_VALUE_OPTIMIZATION'
      | 'TRAFFIC_LANDING_PAGE_VIEW'
      | 'DESTINATION_VISIT'
      | 'MT_LIVE_ROOM'
      | 'PRODUCT_CLICK_IN_LIVE'
      | null;

    pacing: 'PACING_MODE_SMOOTH' | 'PACING_MODE_FAST' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    pixel_id: string | null;

    placement_type: 'PLACEMENT_TYPE_AUTOMATIC' | 'PLACEMENT_TYPE_NORMAL' | null;

    placements: Array<string> | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_end_time: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_start_time: string | null;

    schedule_type: 'SCHEDULE_START_END' | 'SCHEDULE_FROM_NOW' | null;

    /**
     * The typename of this object
     */
    typename: 'TiktokAdGroupPlatformConfigType';
  }
}

/**
 * An external ad group (ad set) belonging to an ad campaign
 */
export interface AdGroupRetrieveResponse {
  /**
   * The unique identifier for the external ad group.
   */
  id: string;

  /**
   * The parent ad campaign
   */
  ad_campaign: AdGroupRetrieveResponse.AdCampaign;

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  config: AdGroupRetrieveResponse.Config | null;

  /**
   * The datetime the external ad group was created.
   */
  created_at: string;

  /**
   * Daily budget in dollars (nil for lifetime budgets)
   */
  daily_budget: number | null;

  /**
   * Human-readable ad group name
   */
  name: string | null;

  /**
   * Typed platform-specific configuration. Use inline fragments (... on
   * MetaAdGroupPlatformConfigType).
   */
  platform_config:
    | AdGroupRetrieveResponse.MetaAdGroupPlatformConfigType
    | null
    | AdGroupRetrieveResponse.TiktokAdGroupPlatformConfigType
    | null;

  /**
   * Current operational status of the ad group
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * The datetime the external ad group was last updated.
   */
  updated_at: string;
}

export namespace AdGroupRetrieveResponse {
  /**
   * The parent ad campaign
   */
  export interface AdCampaign {
    /**
     * The unique identifier for the ad campaign.
     */
    id: string;

    /**
     * The platforms where an ad campaign can run.
     */
    platform: 'meta' | 'tiktok' | null;

    /**
     * Current status of the campaign (active, paused, or inactive)
     */
    status:
      | 'active'
      | 'paused'
      | 'inactive'
      | 'stale'
      | 'pending_refund'
      | 'payment_failed'
      | 'draft'
      | 'in_review'
      | 'flagged'
      | 'importing';

    /**
     * The title of the ad campaign
     */
    title: string;
  }

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Used when bid_strategy is bid_cap or cost_cap.
     */
    bid_amount: number | null;

    /**
     * Bid strategy: lowest_cost, bid_cap, or cost_cap.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * How you are billed (e.g., impressions, clicks).
     */
    billing_event: 'impressions' | 'clicks' | 'optimized_cpm' | 'video_views' | null;

    /**
     * Scheduled end time (ISO8601). Required for lifetime budgets.
     */
    end_time: string | null;

    /**
     * Maximum number of times to show ads to each person in the frequency interval.
     */
    frequency_cap: number | null;

    /**
     * Number of days for the frequency cap interval.
     */
    frequency_cap_interval_days: number | null;

    /**
     * What the ad group optimizes for (e.g., conversions, link_clicks, reach).
     */
    optimization_goal:
      | 'conversions'
      | 'link_clicks'
      | 'landing_page_views'
      | 'reach'
      | 'impressions'
      | 'app_installs'
      | 'video_views'
      | 'lead_generation'
      | 'value'
      | 'page_likes'
      | 'conversations'
      | 'ad_recall_lift'
      | 'two_second_continuous_video_views'
      | 'post_engagement'
      | 'event_responses'
      | 'reminders_set'
      | 'quality_lead'
      | null;

    /**
     * Budget pacing: standard (even) or accelerated (fast).
     */
    pacing: 'standard' | 'accelerated' | null;

    /**
     * Scheduled start time (ISO8601).
     */
    start_time: string | null;

    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    targeting: Config.Targeting | null;
  }

  export namespace Config {
    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    export interface Targeting {
      /**
       * Maximum age for demographic targeting.
       */
      age_max: number | null;

      /**
       * Minimum age for demographic targeting.
       */
      age_min: number | null;

      /**
       * ISO 3166-1 alpha-2 country codes targeted.
       */
      countries: Array<string> | null;

      /**
       * Device platforms targeted.
       */
      device_platforms: Array<'mobile' | 'desktop'> | null;

      /**
       * Platform audience IDs excluded.
       */
      exclude_audience_ids: Array<string> | null;

      /**
       * Genders targeted.
       */
      genders: Array<'male' | 'female' | 'all'> | null;

      /**
       * Platform audience IDs included.
       */
      include_audience_ids: Array<string> | null;

      /**
       * Platform-specific interest IDs targeted.
       */
      interest_ids: Array<string> | null;

      /**
       * Language codes targeted.
       */
      languages: Array<string> | null;

      /**
       * Placement strategy for ad delivery.
       */
      placement_type: 'automatic' | 'manual' | null;
    }
  }

  /**
   * Meta (Facebook/Instagram) ad set configuration.
   */
  export interface MetaAdGroupPlatformConfigType {
    attribution_spec: Array<{ [key: string]: unknown }> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    bid_amount: number | null;

    bid_strategy:
      | 'LOWEST_COST_WITHOUT_CAP'
      | 'LOWEST_COST_WITH_BID_CAP'
      | 'COST_CAP'
      | 'LOWEST_COST_WITH_MIN_ROAS'
      | null;

    billing_event:
      | 'APP_INSTALLS'
      | 'CLICKS'
      | 'IMPRESSIONS'
      | 'LINK_CLICKS'
      | 'NONE'
      | 'OFFER_CLAIMS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'THRUPLAY'
      | 'PURCHASE'
      | 'LISTING_INTERACTION'
      | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    daily_budget: number | null;

    destination_type:
      | 'UNDEFINED'
      | 'WEBSITE'
      | 'APP'
      | 'FACEBOOK'
      | 'MESSENGER'
      | 'WHATSAPP'
      | 'INSTAGRAM_DIRECT'
      | 'INSTAGRAM_PROFILE'
      | 'PHONE_CALL'
      | 'SHOP_AUTOMATIC'
      | 'APPLINKS_AUTOMATIC'
      | 'ON_AD'
      | 'ON_POST'
      | 'ON_VIDEO'
      | 'ON_PAGE'
      | 'ON_EVENT'
      | 'MESSAGING_MESSENGER_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER'
      | 'MESSAGING_INSTAGRAM_DIRECT_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP'
      | 'INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE'
      | 'FACEBOOK_PAGE'
      | 'INSTAGRAM_LIVE'
      | 'FACEBOOK_LIVE'
      | 'IMAGINE'
      | 'LEAD_FROM_IG_DIRECT'
      | 'LEAD_FROM_MESSENGER'
      | 'WEBSITE_AND_LEAD_FORM'
      | 'WEBSITE_AND_PHONE_CALL'
      | 'BROADCAST_CHANNEL'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    end_time: string | null;

    /**
     * Represents untyped JSON
     */
    excluded_geo_locations: { [key: string]: unknown } | null;

    facebook_positions: Array<string> | null;

    /**
     * Represents untyped JSON
     */
    geo_locations: { [key: string]: unknown } | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    instagram_positions: Array<string> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    lifetime_budget: number | null;

    optimization_goal:
      | 'NONE'
      | 'APP_INSTALLS'
      | 'AD_RECALL_LIFT'
      | 'ENGAGED_USERS'
      | 'EVENT_RESPONSES'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'QUALITY_LEAD'
      | 'LINK_CLICKS'
      | 'OFFSITE_CONVERSIONS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'QUALITY_CALL'
      | 'REACH'
      | 'LANDING_PAGE_VIEWS'
      | 'VISIT_INSTAGRAM_PROFILE'
      | 'VALUE'
      | 'THRUPLAY'
      | 'DERIVED_EVENTS'
      | 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS'
      | 'CONVERSATIONS'
      | 'IN_APP_VALUE'
      | 'MESSAGING_PURCHASE_CONVERSION'
      | 'SUBSCRIBERS'
      | 'REMINDERS_SET'
      | 'MEANINGFUL_CALL_ATTEMPT'
      | 'PROFILE_VISIT'
      | 'PROFILE_AND_PAGE_ENGAGEMENT'
      | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
      | 'ENGAGED_REACH'
      | 'ENGAGED_PAGE_VIEWS'
      | 'MESSAGING_DEEP_CONVERSATION_AND_FOLLOW'
      | 'ADVERTISER_SILOED_VALUE'
      | 'AUTOMATIC_OBJECTIVE'
      | 'MESSAGING_APPOINTMENT_CONVERSION'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents untyped JSON
     */
    promoted_object: { [key: string]: unknown } | null;

    publisher_platforms: Array<string> | null;

    status: 'ACTIVE' | 'PAUSED' | null;

    /**
     * Represents untyped JSON
     */
    targeting_automation: { [key: string]: unknown } | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdGroupPlatformConfigType';
  }

  /**
   * TikTok ad group configuration.
   */
  export interface TiktokAdGroupPlatformConfigType {
    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    bid_price: number | null;

    bid_type: 'BID_TYPE_NO_BID' | 'BID_TYPE_CUSTOM' | null;

    billing_event: 'CPC' | 'CPM' | 'OCPM' | 'CPV' | null;

    budget_mode: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL' | 'BUDGET_MODE_DYNAMIC_DAILY_BUDGET' | null;

    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    conversion_bid_price: number | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_type: string | null;

    operation_status: 'ENABLE' | 'DISABLE' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    optimization_event: string | null;

    optimization_goal:
      | 'CLICK'
      | 'CONVERT'
      | 'INSTALL'
      | 'IN_APP_EVENT'
      | 'REACH'
      | 'SHOW'
      | 'VIDEO_VIEW'
      | 'ENGAGED_VIEW'
      | 'ENGAGED_VIEW_FIFTEEN'
      | 'LEAD_GENERATION'
      | 'PREFERRED_LEAD'
      | 'CONVERSATION'
      | 'FOLLOWERS'
      | 'PROFILE_VIEWS'
      | 'PAGE_VISIT'
      | 'VALUE'
      | 'AUTOMATIC_VALUE_OPTIMIZATION'
      | 'TRAFFIC_LANDING_PAGE_VIEW'
      | 'DESTINATION_VISIT'
      | 'MT_LIVE_ROOM'
      | 'PRODUCT_CLICK_IN_LIVE'
      | null;

    pacing: 'PACING_MODE_SMOOTH' | 'PACING_MODE_FAST' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    pixel_id: string | null;

    placement_type: 'PLACEMENT_TYPE_AUTOMATIC' | 'PLACEMENT_TYPE_NORMAL' | null;

    placements: Array<string> | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_end_time: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_start_time: string | null;

    schedule_type: 'SCHEDULE_START_END' | 'SCHEDULE_FROM_NOW' | null;

    /**
     * The typename of this object
     */
    typename: 'TiktokAdGroupPlatformConfigType';
  }
}

/**
 * An external ad group (ad set) belonging to an ad campaign
 */
export interface AdGroupUpdateResponse {
  /**
   * The unique identifier for the external ad group.
   */
  id: string;

  /**
   * The parent ad campaign
   */
  ad_campaign: AdGroupUpdateResponse.AdCampaign;

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  config: AdGroupUpdateResponse.Config | null;

  /**
   * The datetime the external ad group was created.
   */
  created_at: string;

  /**
   * Daily budget in dollars (nil for lifetime budgets)
   */
  daily_budget: number | null;

  /**
   * Human-readable ad group name
   */
  name: string | null;

  /**
   * Typed platform-specific configuration. Use inline fragments (... on
   * MetaAdGroupPlatformConfigType).
   */
  platform_config:
    | AdGroupUpdateResponse.MetaAdGroupPlatformConfigType
    | null
    | AdGroupUpdateResponse.TiktokAdGroupPlatformConfigType
    | null;

  /**
   * Current operational status of the ad group
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * The datetime the external ad group was last updated.
   */
  updated_at: string;
}

export namespace AdGroupUpdateResponse {
  /**
   * The parent ad campaign
   */
  export interface AdCampaign {
    /**
     * The unique identifier for the ad campaign.
     */
    id: string;

    /**
     * The platforms where an ad campaign can run.
     */
    platform: 'meta' | 'tiktok' | null;

    /**
     * Current status of the campaign (active, paused, or inactive)
     */
    status:
      | 'active'
      | 'paused'
      | 'inactive'
      | 'stale'
      | 'pending_refund'
      | 'payment_failed'
      | 'draft'
      | 'in_review'
      | 'flagged'
      | 'importing';

    /**
     * The title of the ad campaign
     */
    title: string;
  }

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Used when bid_strategy is bid_cap or cost_cap.
     */
    bid_amount: number | null;

    /**
     * Bid strategy: lowest_cost, bid_cap, or cost_cap.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * How you are billed (e.g., impressions, clicks).
     */
    billing_event: 'impressions' | 'clicks' | 'optimized_cpm' | 'video_views' | null;

    /**
     * Scheduled end time (ISO8601). Required for lifetime budgets.
     */
    end_time: string | null;

    /**
     * Maximum number of times to show ads to each person in the frequency interval.
     */
    frequency_cap: number | null;

    /**
     * Number of days for the frequency cap interval.
     */
    frequency_cap_interval_days: number | null;

    /**
     * What the ad group optimizes for (e.g., conversions, link_clicks, reach).
     */
    optimization_goal:
      | 'conversions'
      | 'link_clicks'
      | 'landing_page_views'
      | 'reach'
      | 'impressions'
      | 'app_installs'
      | 'video_views'
      | 'lead_generation'
      | 'value'
      | 'page_likes'
      | 'conversations'
      | 'ad_recall_lift'
      | 'two_second_continuous_video_views'
      | 'post_engagement'
      | 'event_responses'
      | 'reminders_set'
      | 'quality_lead'
      | null;

    /**
     * Budget pacing: standard (even) or accelerated (fast).
     */
    pacing: 'standard' | 'accelerated' | null;

    /**
     * Scheduled start time (ISO8601).
     */
    start_time: string | null;

    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    targeting: Config.Targeting | null;
  }

  export namespace Config {
    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    export interface Targeting {
      /**
       * Maximum age for demographic targeting.
       */
      age_max: number | null;

      /**
       * Minimum age for demographic targeting.
       */
      age_min: number | null;

      /**
       * ISO 3166-1 alpha-2 country codes targeted.
       */
      countries: Array<string> | null;

      /**
       * Device platforms targeted.
       */
      device_platforms: Array<'mobile' | 'desktop'> | null;

      /**
       * Platform audience IDs excluded.
       */
      exclude_audience_ids: Array<string> | null;

      /**
       * Genders targeted.
       */
      genders: Array<'male' | 'female' | 'all'> | null;

      /**
       * Platform audience IDs included.
       */
      include_audience_ids: Array<string> | null;

      /**
       * Platform-specific interest IDs targeted.
       */
      interest_ids: Array<string> | null;

      /**
       * Language codes targeted.
       */
      languages: Array<string> | null;

      /**
       * Placement strategy for ad delivery.
       */
      placement_type: 'automatic' | 'manual' | null;
    }
  }

  /**
   * Meta (Facebook/Instagram) ad set configuration.
   */
  export interface MetaAdGroupPlatformConfigType {
    attribution_spec: Array<{ [key: string]: unknown }> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    bid_amount: number | null;

    bid_strategy:
      | 'LOWEST_COST_WITHOUT_CAP'
      | 'LOWEST_COST_WITH_BID_CAP'
      | 'COST_CAP'
      | 'LOWEST_COST_WITH_MIN_ROAS'
      | null;

    billing_event:
      | 'APP_INSTALLS'
      | 'CLICKS'
      | 'IMPRESSIONS'
      | 'LINK_CLICKS'
      | 'NONE'
      | 'OFFER_CLAIMS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'THRUPLAY'
      | 'PURCHASE'
      | 'LISTING_INTERACTION'
      | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    daily_budget: number | null;

    destination_type:
      | 'UNDEFINED'
      | 'WEBSITE'
      | 'APP'
      | 'FACEBOOK'
      | 'MESSENGER'
      | 'WHATSAPP'
      | 'INSTAGRAM_DIRECT'
      | 'INSTAGRAM_PROFILE'
      | 'PHONE_CALL'
      | 'SHOP_AUTOMATIC'
      | 'APPLINKS_AUTOMATIC'
      | 'ON_AD'
      | 'ON_POST'
      | 'ON_VIDEO'
      | 'ON_PAGE'
      | 'ON_EVENT'
      | 'MESSAGING_MESSENGER_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER'
      | 'MESSAGING_INSTAGRAM_DIRECT_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP'
      | 'INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE'
      | 'FACEBOOK_PAGE'
      | 'INSTAGRAM_LIVE'
      | 'FACEBOOK_LIVE'
      | 'IMAGINE'
      | 'LEAD_FROM_IG_DIRECT'
      | 'LEAD_FROM_MESSENGER'
      | 'WEBSITE_AND_LEAD_FORM'
      | 'WEBSITE_AND_PHONE_CALL'
      | 'BROADCAST_CHANNEL'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    end_time: string | null;

    /**
     * Represents untyped JSON
     */
    excluded_geo_locations: { [key: string]: unknown } | null;

    facebook_positions: Array<string> | null;

    /**
     * Represents untyped JSON
     */
    geo_locations: { [key: string]: unknown } | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    instagram_positions: Array<string> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    lifetime_budget: number | null;

    optimization_goal:
      | 'NONE'
      | 'APP_INSTALLS'
      | 'AD_RECALL_LIFT'
      | 'ENGAGED_USERS'
      | 'EVENT_RESPONSES'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'QUALITY_LEAD'
      | 'LINK_CLICKS'
      | 'OFFSITE_CONVERSIONS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'QUALITY_CALL'
      | 'REACH'
      | 'LANDING_PAGE_VIEWS'
      | 'VISIT_INSTAGRAM_PROFILE'
      | 'VALUE'
      | 'THRUPLAY'
      | 'DERIVED_EVENTS'
      | 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS'
      | 'CONVERSATIONS'
      | 'IN_APP_VALUE'
      | 'MESSAGING_PURCHASE_CONVERSION'
      | 'SUBSCRIBERS'
      | 'REMINDERS_SET'
      | 'MEANINGFUL_CALL_ATTEMPT'
      | 'PROFILE_VISIT'
      | 'PROFILE_AND_PAGE_ENGAGEMENT'
      | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
      | 'ENGAGED_REACH'
      | 'ENGAGED_PAGE_VIEWS'
      | 'MESSAGING_DEEP_CONVERSATION_AND_FOLLOW'
      | 'ADVERTISER_SILOED_VALUE'
      | 'AUTOMATIC_OBJECTIVE'
      | 'MESSAGING_APPOINTMENT_CONVERSION'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents untyped JSON
     */
    promoted_object: { [key: string]: unknown } | null;

    publisher_platforms: Array<string> | null;

    status: 'ACTIVE' | 'PAUSED' | null;

    /**
     * Represents untyped JSON
     */
    targeting_automation: { [key: string]: unknown } | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdGroupPlatformConfigType';
  }

  /**
   * TikTok ad group configuration.
   */
  export interface TiktokAdGroupPlatformConfigType {
    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    bid_price: number | null;

    bid_type: 'BID_TYPE_NO_BID' | 'BID_TYPE_CUSTOM' | null;

    billing_event: 'CPC' | 'CPM' | 'OCPM' | 'CPV' | null;

    budget_mode: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL' | 'BUDGET_MODE_DYNAMIC_DAILY_BUDGET' | null;

    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    conversion_bid_price: number | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_type: string | null;

    operation_status: 'ENABLE' | 'DISABLE' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    optimization_event: string | null;

    optimization_goal:
      | 'CLICK'
      | 'CONVERT'
      | 'INSTALL'
      | 'IN_APP_EVENT'
      | 'REACH'
      | 'SHOW'
      | 'VIDEO_VIEW'
      | 'ENGAGED_VIEW'
      | 'ENGAGED_VIEW_FIFTEEN'
      | 'LEAD_GENERATION'
      | 'PREFERRED_LEAD'
      | 'CONVERSATION'
      | 'FOLLOWERS'
      | 'PROFILE_VIEWS'
      | 'PAGE_VISIT'
      | 'VALUE'
      | 'AUTOMATIC_VALUE_OPTIMIZATION'
      | 'TRAFFIC_LANDING_PAGE_VIEW'
      | 'DESTINATION_VISIT'
      | 'MT_LIVE_ROOM'
      | 'PRODUCT_CLICK_IN_LIVE'
      | null;

    pacing: 'PACING_MODE_SMOOTH' | 'PACING_MODE_FAST' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    pixel_id: string | null;

    placement_type: 'PLACEMENT_TYPE_AUTOMATIC' | 'PLACEMENT_TYPE_NORMAL' | null;

    placements: Array<string> | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_end_time: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_start_time: string | null;

    schedule_type: 'SCHEDULE_START_END' | 'SCHEDULE_FROM_NOW' | null;

    /**
     * The typename of this object
     */
    typename: 'TiktokAdGroupPlatformConfigType';
  }
}

/**
 * An external ad group (ad set) belonging to an ad campaign
 */
export interface AdGroupListResponse {
  /**
   * The unique identifier for the external ad group.
   */
  id: string;

  /**
   * Unified ad group configuration (platform-agnostic)
   */
  config: AdGroupListResponse.Config | null;

  /**
   * The datetime the external ad group was created.
   */
  created_at: string;

  /**
   * Daily budget in dollars (nil for lifetime budgets)
   */
  daily_budget: number | null;

  /**
   * Human-readable ad group name
   */
  name: string | null;

  /**
   * Typed platform-specific configuration. Use inline fragments (... on
   * MetaAdGroupPlatformConfigType).
   */
  platform_config:
    | AdGroupListResponse.MetaAdGroupPlatformConfigType
    | null
    | AdGroupListResponse.TiktokAdGroupPlatformConfigType
    | null;

  /**
   * Current operational status of the ad group
   */
  status: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

  /**
   * The datetime the external ad group was last updated.
   */
  updated_at: string;
}

export namespace AdGroupListResponse {
  /**
   * Unified ad group configuration (platform-agnostic)
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Used when bid_strategy is bid_cap or cost_cap.
     */
    bid_amount: number | null;

    /**
     * Bid strategy: lowest_cost, bid_cap, or cost_cap.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * How you are billed (e.g., impressions, clicks).
     */
    billing_event: 'impressions' | 'clicks' | 'optimized_cpm' | 'video_views' | null;

    /**
     * Scheduled end time (ISO8601). Required for lifetime budgets.
     */
    end_time: string | null;

    /**
     * Maximum number of times to show ads to each person in the frequency interval.
     */
    frequency_cap: number | null;

    /**
     * Number of days for the frequency cap interval.
     */
    frequency_cap_interval_days: number | null;

    /**
     * What the ad group optimizes for (e.g., conversions, link_clicks, reach).
     */
    optimization_goal:
      | 'conversions'
      | 'link_clicks'
      | 'landing_page_views'
      | 'reach'
      | 'impressions'
      | 'app_installs'
      | 'video_views'
      | 'lead_generation'
      | 'value'
      | 'page_likes'
      | 'conversations'
      | 'ad_recall_lift'
      | 'two_second_continuous_video_views'
      | 'post_engagement'
      | 'event_responses'
      | 'reminders_set'
      | 'quality_lead'
      | null;

    /**
     * Budget pacing: standard (even) or accelerated (fast).
     */
    pacing: 'standard' | 'accelerated' | null;

    /**
     * Scheduled start time (ISO8601).
     */
    start_time: string | null;

    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    targeting: Config.Targeting | null;
  }

  export namespace Config {
    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    export interface Targeting {
      /**
       * Maximum age for demographic targeting.
       */
      age_max: number | null;

      /**
       * Minimum age for demographic targeting.
       */
      age_min: number | null;

      /**
       * ISO 3166-1 alpha-2 country codes targeted.
       */
      countries: Array<string> | null;

      /**
       * Device platforms targeted.
       */
      device_platforms: Array<'mobile' | 'desktop'> | null;

      /**
       * Platform audience IDs excluded.
       */
      exclude_audience_ids: Array<string> | null;

      /**
       * Genders targeted.
       */
      genders: Array<'male' | 'female' | 'all'> | null;

      /**
       * Platform audience IDs included.
       */
      include_audience_ids: Array<string> | null;

      /**
       * Platform-specific interest IDs targeted.
       */
      interest_ids: Array<string> | null;

      /**
       * Language codes targeted.
       */
      languages: Array<string> | null;

      /**
       * Placement strategy for ad delivery.
       */
      placement_type: 'automatic' | 'manual' | null;
    }
  }

  /**
   * Meta (Facebook/Instagram) ad set configuration.
   */
  export interface MetaAdGroupPlatformConfigType {
    attribution_spec: Array<{ [key: string]: unknown }> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    bid_amount: number | null;

    bid_strategy:
      | 'LOWEST_COST_WITHOUT_CAP'
      | 'LOWEST_COST_WITH_BID_CAP'
      | 'COST_CAP'
      | 'LOWEST_COST_WITH_MIN_ROAS'
      | null;

    billing_event:
      | 'APP_INSTALLS'
      | 'CLICKS'
      | 'IMPRESSIONS'
      | 'LINK_CLICKS'
      | 'NONE'
      | 'OFFER_CLAIMS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'THRUPLAY'
      | 'PURCHASE'
      | 'LISTING_INTERACTION'
      | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    daily_budget: number | null;

    destination_type:
      | 'UNDEFINED'
      | 'WEBSITE'
      | 'APP'
      | 'FACEBOOK'
      | 'MESSENGER'
      | 'WHATSAPP'
      | 'INSTAGRAM_DIRECT'
      | 'INSTAGRAM_PROFILE'
      | 'PHONE_CALL'
      | 'SHOP_AUTOMATIC'
      | 'APPLINKS_AUTOMATIC'
      | 'ON_AD'
      | 'ON_POST'
      | 'ON_VIDEO'
      | 'ON_PAGE'
      | 'ON_EVENT'
      | 'MESSAGING_MESSENGER_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER'
      | 'MESSAGING_INSTAGRAM_DIRECT_WHATSAPP'
      | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP'
      | 'INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE'
      | 'FACEBOOK_PAGE'
      | 'INSTAGRAM_LIVE'
      | 'FACEBOOK_LIVE'
      | 'IMAGINE'
      | 'LEAD_FROM_IG_DIRECT'
      | 'LEAD_FROM_MESSENGER'
      | 'WEBSITE_AND_LEAD_FORM'
      | 'WEBSITE_AND_PHONE_CALL'
      | 'BROADCAST_CHANNEL'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    end_time: string | null;

    /**
     * Represents untyped JSON
     */
    excluded_geo_locations: { [key: string]: unknown } | null;

    facebook_positions: Array<string> | null;

    /**
     * Represents untyped JSON
     */
    geo_locations: { [key: string]: unknown } | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    instagram_actor_id: string | null;

    instagram_positions: Array<string> | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    lifetime_budget: number | null;

    optimization_goal:
      | 'NONE'
      | 'APP_INSTALLS'
      | 'AD_RECALL_LIFT'
      | 'ENGAGED_USERS'
      | 'EVENT_RESPONSES'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'QUALITY_LEAD'
      | 'LINK_CLICKS'
      | 'OFFSITE_CONVERSIONS'
      | 'PAGE_LIKES'
      | 'POST_ENGAGEMENT'
      | 'QUALITY_CALL'
      | 'REACH'
      | 'LANDING_PAGE_VIEWS'
      | 'VISIT_INSTAGRAM_PROFILE'
      | 'VALUE'
      | 'THRUPLAY'
      | 'DERIVED_EVENTS'
      | 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS'
      | 'CONVERSATIONS'
      | 'IN_APP_VALUE'
      | 'MESSAGING_PURCHASE_CONVERSION'
      | 'SUBSCRIBERS'
      | 'REMINDERS_SET'
      | 'MEANINGFUL_CALL_ATTEMPT'
      | 'PROFILE_VISIT'
      | 'PROFILE_AND_PAGE_ENGAGEMENT'
      | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
      | 'ENGAGED_REACH'
      | 'ENGAGED_PAGE_VIEWS'
      | 'MESSAGING_DEEP_CONVERSATION_AND_FOLLOW'
      | 'ADVERTISER_SILOED_VALUE'
      | 'AUTOMATIC_OBJECTIVE'
      | 'MESSAGING_APPOINTMENT_CONVERSION'
      | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    page_id: string | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents untyped JSON
     */
    promoted_object: { [key: string]: unknown } | null;

    publisher_platforms: Array<string> | null;

    status: 'ACTIVE' | 'PAUSED' | null;

    /**
     * Represents untyped JSON
     */
    targeting_automation: { [key: string]: unknown } | null;

    /**
     * The typename of this object
     */
    typename: 'MetaAdGroupPlatformConfigType';
  }

  /**
   * TikTok ad group configuration.
   */
  export interface TiktokAdGroupPlatformConfigType {
    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    bid_price: number | null;

    bid_type: 'BID_TYPE_NO_BID' | 'BID_TYPE_CUSTOM' | null;

    billing_event: 'CPC' | 'CPM' | 'OCPM' | 'CPV' | null;

    budget_mode: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL' | 'BUDGET_MODE_DYNAMIC_DAILY_BUDGET' | null;

    /**
     * Represents signed double-precision fractional values as specified by
     * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
     */
    conversion_bid_price: number | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_id: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    identity_type: string | null;

    operation_status: 'ENABLE' | 'DISABLE' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    optimization_event: string | null;

    optimization_goal:
      | 'CLICK'
      | 'CONVERT'
      | 'INSTALL'
      | 'IN_APP_EVENT'
      | 'REACH'
      | 'SHOW'
      | 'VIDEO_VIEW'
      | 'ENGAGED_VIEW'
      | 'ENGAGED_VIEW_FIFTEEN'
      | 'LEAD_GENERATION'
      | 'PREFERRED_LEAD'
      | 'CONVERSATION'
      | 'FOLLOWERS'
      | 'PROFILE_VIEWS'
      | 'PAGE_VISIT'
      | 'VALUE'
      | 'AUTOMATIC_VALUE_OPTIMIZATION'
      | 'TRAFFIC_LANDING_PAGE_VIEW'
      | 'DESTINATION_VISIT'
      | 'MT_LIVE_ROOM'
      | 'PRODUCT_CLICK_IN_LIVE'
      | null;

    pacing: 'PACING_MODE_SMOOTH' | 'PACING_MODE_FAST' | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    pixel_id: string | null;

    placement_type: 'PLACEMENT_TYPE_AUTOMATIC' | 'PLACEMENT_TYPE_NORMAL' | null;

    placements: Array<string> | null;

    /**
     * The ad platform (meta, tiktok).
     */
    platform: 'meta' | 'tiktok';

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_end_time: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    schedule_start_time: string | null;

    schedule_type: 'SCHEDULE_START_END' | 'SCHEDULE_FROM_NOW' | null;

    /**
     * The typename of this object
     */
    typename: 'TiktokAdGroupPlatformConfigType';
  }
}

/**
 * Represents `true` or `false` values.
 */
export type AdGroupDeleteResponse = boolean;

export interface AdGroupCreateParams {
  /**
   * The ad campaign to create this ad group within.
   */
  campaign_id: string;

  /**
   * Budget amount in dollars.
   */
  budget?: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type?: 'daily' | 'lifetime' | null;

  /**
   * Unified ad group configuration (bidding, optimization, targeting).
   */
  config?: AdGroupCreateParams.Config | null;

  /**
   * Daily budget in dollars.
   */
  daily_budget?: number | null;

  /**
   * Human-readable ad group name.
   */
  name?: string | null;

  /**
   * Platform-specific ad group configuration.
   */
  platform_config?: AdGroupCreateParams.PlatformConfig | null;

  /**
   * The status of an external ad group.
   */
  status?: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged' | null;
}

export namespace AdGroupCreateParams {
  /**
   * Unified ad group configuration (bidding, optimization, targeting).
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Used when bid_strategy is bid_cap or cost_cap.
     */
    bid_amount?: number | null;

    /**
     * Bid strategy: lowest_cost, bid_cap, or cost_cap.
     */
    bid_strategy?: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * How you are billed (e.g., impressions, clicks).
     */
    billing_event?: 'impressions' | 'clicks' | 'optimized_cpm' | 'video_views' | null;

    /**
     * Scheduled end time (ISO8601). Required for lifetime budgets.
     */
    end_time?: string | null;

    /**
     * Maximum number of times to show ads to each person in the frequency interval.
     */
    frequency_cap?: number | null;

    /**
     * Number of days for the frequency cap interval.
     */
    frequency_cap_interval_days?: number | null;

    /**
     * What the ad group optimizes for (e.g., conversions, link_clicks, reach).
     */
    optimization_goal?:
      | 'conversions'
      | 'link_clicks'
      | 'landing_page_views'
      | 'reach'
      | 'impressions'
      | 'app_installs'
      | 'video_views'
      | 'lead_generation'
      | 'value'
      | 'page_likes'
      | 'conversations'
      | 'ad_recall_lift'
      | 'two_second_continuous_video_views'
      | 'post_engagement'
      | 'event_responses'
      | 'reminders_set'
      | 'quality_lead'
      | null;

    /**
     * Budget pacing: standard (even) or accelerated (fast).
     */
    pacing?: 'standard' | 'accelerated' | null;

    /**
     * Scheduled start time (ISO8601).
     */
    start_time?: string | null;

    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    targeting?: Config.Targeting | null;
  }

  export namespace Config {
    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    export interface Targeting {
      /**
       * Maximum age for demographic targeting.
       */
      age_max?: number | null;

      /**
       * Minimum age for demographic targeting.
       */
      age_min?: number | null;

      /**
       * ISO 3166-1 alpha-2 country codes to target.
       */
      countries?: Array<string> | null;

      /**
       * Device platforms to target.
       */
      device_platforms?: Array<'mobile' | 'desktop'> | null;

      /**
       * Platform audience IDs to exclude.
       */
      exclude_audience_ids?: Array<string> | null;

      /**
       * Genders to target.
       */
      genders?: Array<'male' | 'female' | 'all'> | null;

      /**
       * Platform audience IDs to include.
       */
      include_audience_ids?: Array<string> | null;

      /**
       * Platform-specific interest IDs to target.
       */
      interest_ids?: Array<string> | null;

      /**
       * Language codes to target.
       */
      languages?: Array<string> | null;

      /**
       * Placement strategy for ad delivery.
       */
      placement_type?: 'automatic' | 'manual' | null;
    }
  }

  /**
   * Platform-specific ad group configuration.
   */
  export interface PlatformConfig {
    /**
     * Meta (Facebook/Instagram) ad set configuration.
     */
    meta?: PlatformConfig.Meta | null;

    /**
     * TikTok ad group configuration.
     */
    tiktok?: PlatformConfig.Tiktok | null;
  }

  export namespace PlatformConfig {
    /**
     * Meta (Facebook/Instagram) ad set configuration.
     */
    export interface Meta {
      android_devices?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      attribution_setting?: string | null;

      /**
       * Conversion attribution windows.
       */
      attribution_spec?: Array<Meta.AttributionSpec> | null;

      audience_network_positions?: Array<string> | null;

      /**
       * Audience type for retargeting.
       */
      audience_type?: string | null;

      /**
       * Bid amount in cents.
       */
      bid_amount?: number | null;

      /**
       * Meta bid strategy.
       */
      bid_strategy?:
        | 'LOWEST_COST_WITHOUT_CAP'
        | 'LOWEST_COST_WITH_BID_CAP'
        | 'COST_CAP'
        | 'LOWEST_COST_WITH_MIN_ROAS'
        | null;

      /**
       * How you are billed on Meta.
       */
      billing_event?:
        | 'APP_INSTALLS'
        | 'CLICKS'
        | 'IMPRESSIONS'
        | 'LINK_CLICKS'
        | 'NONE'
        | 'OFFER_CLAIMS'
        | 'PAGE_LIKES'
        | 'POST_ENGAGEMENT'
        | 'THRUPLAY'
        | 'PURCHASE'
        | 'LISTING_INTERACTION'
        | null;

      brand_safety_content_filter_levels?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      budget_remaining?: string | null;

      /**
       * Represents signed double-precision fractional values as specified by
       * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
       */
      cost_per_result_goal?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      created_time?: string | null;

      /**
       * Daily budget in cents.
       */
      daily_budget?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      daily_min_spend_target?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      daily_spend_cap?: string | null;

      /**
       * Where ads in this ad set direct people.
       */
      destination_type?:
        | 'UNDEFINED'
        | 'WEBSITE'
        | 'APP'
        | 'FACEBOOK'
        | 'MESSENGER'
        | 'WHATSAPP'
        | 'INSTAGRAM_DIRECT'
        | 'INSTAGRAM_PROFILE'
        | 'PHONE_CALL'
        | 'SHOP_AUTOMATIC'
        | 'APPLINKS_AUTOMATIC'
        | 'ON_AD'
        | 'ON_POST'
        | 'ON_VIDEO'
        | 'ON_PAGE'
        | 'ON_EVENT'
        | 'MESSAGING_MESSENGER_WHATSAPP'
        | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER'
        | 'MESSAGING_INSTAGRAM_DIRECT_WHATSAPP'
        | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP'
        | 'INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE'
        | 'FACEBOOK_PAGE'
        | 'INSTAGRAM_LIVE'
        | 'FACEBOOK_LIVE'
        | 'IMAGINE'
        | 'LEAD_FROM_IG_DIRECT'
        | 'LEAD_FROM_MESSENGER'
        | 'WEBSITE_AND_LEAD_FORM'
        | 'WEBSITE_AND_PHONE_CALL'
        | 'BROADCAST_CHANNEL'
        | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      dsa_beneficiary?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      dsa_payor?: string | null;

      /**
       * End time (ISO8601). Required for lifetime budgets.
       */
      end_time?: string | null;

      /**
       * Geo locations to exclude.
       */
      excluded_geo_locations?: Meta.ExcludedGeoLocations | null;

      /**
       * Facebook ad placements (feed, reels, stories, etc.).
       */
      facebook_positions?: Array<string> | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency_control_count?: number | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency_control_days?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      frequency_control_type?: string | null;

      geo_cities?: Array<Meta.GeoCity> | null;

      /**
       * Geo targeting (countries, regions, cities, zips).
       */
      geo_locations?: Meta.GeoLocations | null;

      geo_regions?: Array<Meta.GeoRegion> | null;

      geo_zips?: Array<string> | null;

      /**
       * Instagram account ID for this ad set.
       */
      instagram_actor_id?: string | null;

      /**
       * Instagram ad placements (stream, story, reels, etc.).
       */
      instagram_positions?: Array<string> | null;

      ios_devices?: Array<string> | null;

      /**
       * Represents `true` or `false` values.
       */
      is_dynamic_creative?: boolean | null;

      lead_conversion_location?:
        | 'website'
        | 'instant_forms'
        | 'messenger'
        | 'instagram'
        | 'calls'
        | 'app'
        | null;

      /**
       * Configuration for a Meta lead gen instant form.
       */
      lead_form_config?: Meta.LeadFormConfig | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      lead_gen_form_id?: string | null;

      /**
       * Lifetime budget in cents.
       */
      lifetime_budget?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      lifetime_min_spend_target?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      lifetime_spend_cap?: string | null;

      location_types?: Array<string> | null;

      messenger_positions?: Array<string> | null;

      /**
       * What this ad set optimizes for on Meta.
       */
      optimization_goal?:
        | 'NONE'
        | 'APP_INSTALLS'
        | 'AD_RECALL_LIFT'
        | 'ENGAGED_USERS'
        | 'EVENT_RESPONSES'
        | 'IMPRESSIONS'
        | 'LEAD_GENERATION'
        | 'QUALITY_LEAD'
        | 'LINK_CLICKS'
        | 'OFFSITE_CONVERSIONS'
        | 'PAGE_LIKES'
        | 'POST_ENGAGEMENT'
        | 'QUALITY_CALL'
        | 'REACH'
        | 'LANDING_PAGE_VIEWS'
        | 'VISIT_INSTAGRAM_PROFILE'
        | 'VALUE'
        | 'THRUPLAY'
        | 'DERIVED_EVENTS'
        | 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS'
        | 'CONVERSATIONS'
        | 'IN_APP_VALUE'
        | 'MESSAGING_PURCHASE_CONVERSION'
        | 'SUBSCRIBERS'
        | 'REMINDERS_SET'
        | 'MEANINGFUL_CALL_ATTEMPT'
        | 'PROFILE_VISIT'
        | 'PROFILE_AND_PAGE_ENGAGEMENT'
        | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
        | 'ENGAGED_REACH'
        | 'ENGAGED_PAGE_VIEWS'
        | 'MESSAGING_DEEP_CONVERSATION_AND_FOLLOW'
        | 'ADVERTISER_SILOED_VALUE'
        | 'AUTOMATIC_OBJECTIVE'
        | 'MESSAGING_APPOINTMENT_CONVERSION'
        | null;

      /**
       * Facebook Page ID for this ad set.
       */
      page_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      pixel_id?: string | null;

      /**
       * The object this ad set promotes (pixel, page, etc.).
       */
      promoted_object?: Meta.PromotedObject | null;

      /**
       * Platforms to publish on (facebook, instagram, messenger, audience_network).
       */
      publisher_platforms?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      source_adset_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      start_time?: string | null;

      status?: 'ACTIVE' | 'PAUSED' | null;

      /**
       * Advantage+ audience expansion settings.
       */
      targeting_automation?: Meta.TargetingAutomation | null;

      threads_positions?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      updated_time?: string | null;

      user_device?: Array<string> | null;

      user_os?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      whatsapp_phone_number?: string | null;

      whatsapp_positions?: Array<string> | null;
    }

    export namespace Meta {
      /**
       * Meta conversion attribution window.
       */
      export interface AttributionSpec {
        /**
         * Attribution event type (e.g., CLICK_THROUGH, VIEW_THROUGH).
         */
        event_type: string;

        /**
         * Attribution window in days (1, 7, 28).
         */
        window_days: number;
      }

      /**
       * Geo locations to exclude.
       */
      export interface ExcludedGeoLocations {
        /**
         * City targets.
         */
        cities?: Array<ExcludedGeoLocations.City> | null;

        /**
         * ISO 3166-1 alpha-2 country codes.
         */
        countries?: Array<string> | null;

        /**
         * Location types (home, recent, travel_in).
         */
        location_types?: Array<string> | null;

        /**
         * Region/state targets.
         */
        regions?: Array<ExcludedGeoLocations.Region> | null;

        /**
         * Zip/postal code targets.
         */
        zips?: Array<ExcludedGeoLocations.Zip> | null;
      }

      export namespace ExcludedGeoLocations {
        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface City {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Region {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Zip {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }
      }

      /**
       * A Meta geo target entry (region, city, or zip).
       */
      export interface GeoCity {
        /**
         * Meta geo target key/ID.
         */
        key: string;

        /**
         * Country code for this entry.
         */
        country?: string | null;

        /**
         * Display name.
         */
        name?: string | null;

        /**
         * Radius in miles (cities only).
         */
        radius?: number | null;
      }

      /**
       * Geo targeting (countries, regions, cities, zips).
       */
      export interface GeoLocations {
        /**
         * City targets.
         */
        cities?: Array<GeoLocations.City> | null;

        /**
         * ISO 3166-1 alpha-2 country codes.
         */
        countries?: Array<string> | null;

        /**
         * Location types (home, recent, travel_in).
         */
        location_types?: Array<string> | null;

        /**
         * Region/state targets.
         */
        regions?: Array<GeoLocations.Region> | null;

        /**
         * Zip/postal code targets.
         */
        zips?: Array<GeoLocations.Zip> | null;
      }

      export namespace GeoLocations {
        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface City {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Region {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Zip {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }
      }

      /**
       * A Meta geo target entry (region, city, or zip).
       */
      export interface GeoRegion {
        /**
         * Meta geo target key/ID.
         */
        key: string;

        /**
         * Country code for this entry.
         */
        country?: string | null;

        /**
         * Display name.
         */
        name?: string | null;

        /**
         * Radius in miles (cities only).
         */
        radius?: number | null;
      }

      /**
       * Configuration for a Meta lead gen instant form.
       */
      export interface LeadFormConfig {
        /**
         * Name of the lead form.
         */
        name: string;

        /**
         * URL to your privacy policy. Required by Meta.
         */
        privacy_policy_url: string;

        /**
         * Questions to ask on the form.
         */
        questions: Array<LeadFormConfig.Question>;

        /**
         * Background image source: from_ad or custom.
         */
        background_image_source?: string | null;

        /**
         * URL of custom background image.
         */
        background_image_url?: string | null;

        /**
         * Whether conditional logic is enabled for questions.
         */
        conditional_logic_enabled?: boolean | null;

        /**
         * CTA button text on the greeting card.
         */
        context_card_button_text?: string | null;

        /**
         * Optional greeting card bullet points.
         */
        context_card_content?: Array<string> | null;

        /**
         * Greeting layout: PARAGRAPH_STYLE or LIST_STYLE.
         */
        context_card_style?: string | null;

        /**
         * Optional greeting card title.
         */
        context_card_title?: string | null;

        /**
         * Custom disclaimer body text.
         */
        custom_disclaimer_body?: string | null;

        /**
         * Consent checkboxes for the custom disclaimer.
         */
        custom_disclaimer_checkboxes?: Array<LeadFormConfig.CustomDisclaimerCheckbox> | null;

        /**
         * Custom disclaimer section title.
         */
        custom_disclaimer_title?: string | null;

        /**
         * Form type: more_volume, higher_intent, or rich_creative.
         */
        form_type?: string | null;

        /**
         * Enable Messenger follow-up after form submission.
         */
        messenger_enabled?: boolean | null;

        /**
         * Require phone number verification via OTP (higher_intent only).
         */
        phone_verification_enabled?: boolean | null;

        /**
         * Custom link text for privacy policy (max 70 chars).
         */
        privacy_policy_link_text?: string | null;

        /**
         * Custom headline for the questions page.
         */
        question_page_custom_headline?: string | null;

        /**
         * Headline for rich creative form intro.
         */
        rich_creative_headline?: string | null;

        /**
         * Overview description for rich creative form intro.
         */
        rich_creative_overview?: string | null;

        /**
         * Uploaded image URL for rich creative form type.
         */
        rich_creative_url?: string | null;

        /**
         * Thank you / ending pages (supports multiple for conditional routing).
         */
        thank_you_pages?: Array<LeadFormConfig.ThankYouPage> | null;
      }

      export namespace LeadFormConfig {
        /**
         * A question on a Meta lead gen form.
         */
        export interface Question {
          /**
           * Question type (EMAIL, FULL_NAME, PHONE, CUSTOM, DATE_TIME, etc.).
           */
          type: string;

          /**
           * Group ID for conditional question routing.
           */
          conditional_questions_group_id?: string | null;

          /**
           * Questions shown conditionally based on this question's answer.
           */
          dependent_conditional_questions?: Array<Question.DependentConditionalQuestion> | null;

          /**
           * Helper text shown below the question.
           */
          inline_context?: string | null;

          /**
           * Unique key for this question.
           */
          key?: string | null;

          /**
           * Custom label for CUSTOM questions.
           */
          label?: string | null;

          /**
           * Answer options for multiple choice CUSTOM questions.
           */
          options?: Array<Question.Option> | null;

          /**
           * UI hint: short_answer, multiple_choice, or appointment.
           */
          question_format?: string | null;
        }

        export namespace Question {
          /**
           * A dependent conditional question (non-recursive to avoid schema recursion).
           */
          export interface DependentConditionalQuestion {
            /**
             * Question type (EMAIL, FULL_NAME, PHONE, CUSTOM, DATE_TIME, etc.).
             */
            type: string;

            /**
             * Helper text shown below the question.
             */
            inline_context?: string | null;

            /**
             * Unique key for this question.
             */
            key?: string | null;

            /**
             * Custom label for CUSTOM questions.
             */
            label?: string | null;

            /**
             * Answer options for multiple choice questions.
             */
            options?: Array<DependentConditionalQuestion.Option> | null;
          }

          export namespace DependentConditionalQuestion {
            /**
             * An answer option for a multiple choice lead form question.
             */
            export interface Option {
              /**
               * Unique key for this option.
               */
              key: string;

              /**
               * Display text for this option.
               */
              value: string;

              /**
               * Conditional logic routing for this answer option.
               */
              logic?: Option.Logic | null;
            }

            export namespace Option {
              /**
               * Conditional logic routing for this answer option.
               */
              export interface Logic {
                /**
                 * Logic type: go_to_question, submit_form, or close_form.
                 */
                type: string;

                /**
                 * Index of the end page to route to (for submit_form type).
                 */
                target_end_page_index?: number | null;

                /**
                 * Index of the question to route to (for go_to_question type).
                 */
                target_question_index?: number | null;
              }
            }
          }

          /**
           * An answer option for a multiple choice lead form question.
           */
          export interface Option {
            /**
             * Unique key for this option.
             */
            key: string;

            /**
             * Display text for this option.
             */
            value: string;

            /**
             * Conditional logic routing for this answer option.
             */
            logic?: Option.Logic | null;
          }

          export namespace Option {
            /**
             * Conditional logic routing for this answer option.
             */
            export interface Logic {
              /**
               * Logic type: go_to_question, submit_form, or close_form.
               */
              type: string;

              /**
               * Index of the end page to route to (for submit_form type).
               */
              target_end_page_index?: number | null;

              /**
               * Index of the question to route to (for go_to_question type).
               */
              target_question_index?: number | null;
            }
          }
        }

        /**
         * A consent checkbox for the custom disclaimer section.
         */
        export interface CustomDisclaimerCheckbox {
          /**
           * Unique key for this checkbox.
           */
          key: string;

          /**
           * Label text for the checkbox.
           */
          text: string;

          /**
           * Whether the checkbox is checked by default.
           */
          is_checked_by_default?: boolean | null;

          /**
           * Whether the checkbox must be checked to submit.
           */
          is_required?: boolean | null;
        }

        /**
         * A thank-you / ending page for a Meta lead gen form.
         */
        export interface ThankYouPage {
          /**
           * Body text for this ending page.
           */
          body?: string | null;

          /**
           * Business phone number for call CTA.
           */
          business_phone?: string | null;

          /**
           * Custom button text.
           */
          button_text?: string | null;

          /**
           * CTA button type: VIEW_WEBSITE, CALL_BUSINESS, DOWNLOAD.
           */
          button_type?: string | null;

          /**
           * Question group ID for conditional routing to this page.
           */
          conditional_question_group_id?: string | null;

          /**
           * Enable Messenger follow-up.
           */
          enable_messenger?: boolean | null;

          /**
           * Uploaded file URL for gated content download.
           */
          gated_file_url?: string | null;

          /**
           * URL the button links to.
           */
          link?: string | null;

          /**
           * Internal name for this ending page.
           */
          name?: string | null;

          /**
           * Headline for this ending page.
           */
          title?: string | null;
        }
      }

      /**
       * The object this ad set promotes (pixel, page, etc.).
       */
      export interface PromotedObject {
        /**
         * Custom conversion rule ID (numeric, from Meta Events Manager).
         */
        custom_conversion_id?: string | null;

        /**
         * Pixel event name, used when custom_event_type is OTHER.
         */
        custom_event_str?: string | null;

        /**
         * Custom event type (e.g., PURCHASE, COMPLETE_REGISTRATION, OTHER).
         */
        custom_event_type?: string | null;

        /**
         * Facebook Page ID.
         */
        page_id?: string | null;

        /**
         * Meta Pixel ID for conversion tracking.
         */
        pixel_id?: string | null;

        /**
         * WhatsApp phone number for messaging campaigns.
         */
        whatsapp_phone_number?: string | null;
      }

      /**
       * Advantage+ audience expansion settings.
       */
      export interface TargetingAutomation {
        /**
         * 0 = off (use exact targeting), 1 = on (let Meta expand audience).
         */
        advantage_audience?: number | null;
      }
    }

    /**
     * TikTok ad group configuration.
     */
    export interface Tiktok {
      actions?: Array<Tiktok.Action> | null;

      age_groups?: Array<
        'AGE_13_17' | 'AGE_18_24' | 'AGE_25_34' | 'AGE_35_44' | 'AGE_45_54' | 'AGE_55_100'
      > | null;

      /**
       * App ID for app promotion campaigns.
       */
      app_id?: string | null;

      attribution_event_count?: 'UNSET' | 'EVERY' | 'ONCE' | null;

      audience_ids?: Array<string> | null;

      /**
       * Represents untyped JSON
       */
      audience_rule?: { [key: string]: unknown } | null;

      audience_type?: 'NORMAL' | 'SMART_INTERESTS_BEHAVIORS' | null;

      /**
       * Bid price (cost per result for Cost Cap).
       */
      bid_price?: number | null;

      /**
       * Bidding strategy (BID_TYPE_NO_BID, BID_TYPE_CUSTOM).
       */
      bid_type?: 'BID_TYPE_NO_BID' | 'BID_TYPE_CUSTOM' | null;

      /**
       * How you are billed on TikTok (CPC, CPM, OCPM, CPV).
       */
      billing_event?: 'CPC' | 'CPM' | 'OCPM' | 'CPV' | null;

      brand_safety_type?:
        | 'NO_BRAND_SAFETY'
        | 'STANDARD_INVENTORY'
        | 'LIMITED_INVENTORY'
        | 'FULL_INVENTORY'
        | 'EXPANDED_INVENTORY'
        | null;

      /**
       * Budget mode (BUDGET_MODE_DAY, BUDGET_MODE_TOTAL,
       * BUDGET_MODE_DYNAMIC_DAILY_BUDGET).
       */
      budget_mode?: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL' | 'BUDGET_MODE_DYNAMIC_DAILY_BUDGET' | null;

      carrier_ids?: Array<string> | null;

      category_exclusion_ids?: Array<string> | null;

      click_attribution_window?:
        | 'OFF'
        | 'ONE_DAY'
        | 'SEVEN_DAYS'
        | 'FOURTEEN_DAYS'
        | 'TWENTY_EIGHT_DAYS'
        | null;

      /**
       * Represents `true` or `false` values.
       */
      comment_disabled?: boolean | null;

      contextual_tag_ids?: Array<string> | null;

      /**
       * Target cost per conversion for oCPM.
       */
      conversion_bid_price?: number | null;

      /**
       * Creative delivery strategy.
       */
      creative_material_mode?: string | null;

      /**
       * Ad delivery schedule (48x7 character string).
       */
      dayparting?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      deep_funnel_event_source?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      deep_funnel_event_source_id?: string | null;

      deep_funnel_optimization_status?: 'ON' | 'OFF' | null;

      device_model_ids?: Array<string> | null;

      device_price_ranges?: Array<string> | null;

      engaged_view_attribution_window?: 'OFF' | 'ONE_DAY' | 'SEVEN_DAYS' | null;

      excluded_audience_ids?: Array<string> | null;

      /**
       * TikTok location/region IDs to exclude.
       */
      excluded_location_ids?: Array<string> | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency?: number | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency_schedule?: number | null;

      gender?: 'GENDER_UNLIMITED' | 'GENDER_MALE' | 'GENDER_FEMALE' | null;

      /**
       * Business Center ID for BC_AUTH_TT identity.
       */
      identity_authorized_bc_id?: string | null;

      /**
       * TikTok identity ID for the ad group.
       */
      identity_id?: string | null;

      /**
       * Identity type (AUTH_CODE, TT_USER, BC_AUTH_TT).
       */
      identity_type?: string | null;

      /**
       * Instant form configuration for lead generation campaigns.
       */
      instant_form_config?: Tiktok.InstantFormConfig | null;

      /**
       * TikTok instant form ID (set automatically when instant_form_config is provided).
       */
      instant_form_id?: string | null;

      interest_category_ids?: Array<string> | null;

      interest_keyword_ids?: Array<string> | null;

      /**
       * Represents `true` or `false` values.
       */
      inventory_filter_enabled?: boolean | null;

      ios14_targeting?: 'UNSET' | 'IOS14_MINUS' | 'IOS14_PLUS' | 'ALL' | null;

      isp_ids?: Array<string> | null;

      languages?: Array<string> | null;

      /**
       * TikTok location/region IDs for geo targeting.
       */
      location_ids?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      min_android_version?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      min_ios_version?: string | null;

      network_types?: Array<string> | null;

      operating_systems?: Array<'ANDROID' | 'IOS'> | null;

      /**
       * Initial status (ENABLE, DISABLE).
       */
      operation_status?: 'ENABLE' | 'DISABLE' | null;

      /**
       * Conversion event (e.g., COMPLETE_PAYMENT).
       */
      optimization_event?: string | null;

      /**
       * What this ad group optimizes for on TikTok.
       */
      optimization_goal?:
        | 'CLICK'
        | 'CONVERT'
        | 'INSTALL'
        | 'IN_APP_EVENT'
        | 'REACH'
        | 'SHOW'
        | 'VIDEO_VIEW'
        | 'ENGAGED_VIEW'
        | 'ENGAGED_VIEW_FIFTEEN'
        | 'LEAD_GENERATION'
        | 'PREFERRED_LEAD'
        | 'CONVERSATION'
        | 'FOLLOWERS'
        | 'PROFILE_VIEWS'
        | 'PAGE_VISIT'
        | 'VALUE'
        | 'AUTOMATIC_VALUE_OPTIMIZATION'
        | 'TRAFFIC_LANDING_PAGE_VIEW'
        | 'DESTINATION_VISIT'
        | 'MT_LIVE_ROOM'
        | 'PRODUCT_CLICK_IN_LIVE'
        | null;

      /**
       * Budget pacing (PACING_MODE_SMOOTH, PACING_MODE_FAST).
       */
      pacing?: 'PACING_MODE_SMOOTH' | 'PACING_MODE_FAST' | null;

      pangle_audience_package_exclude_ids?: Array<string> | null;

      pangle_audience_package_include_ids?: Array<string> | null;

      pangle_block_app_ids?: Array<string> | null;

      /**
       * TikTok Pixel ID for conversion tracking.
       */
      pixel_id?: string | null;

      /**
       * Placement strategy (PLACEMENT_TYPE_AUTOMATIC, PLACEMENT_TYPE_NORMAL).
       */
      placement_type?: 'PLACEMENT_TYPE_AUTOMATIC' | 'PLACEMENT_TYPE_NORMAL' | null;

      /**
       * Placements (PLACEMENT_TIKTOK, PLACEMENT_PANGLE, etc.).
       */
      placements?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      product_set_id?: string | null;

      product_source?: 'CATALOG' | 'STORE' | 'SHOWCASE' | null;

      /**
       * Promotion type (optimization location).
       */
      promotion_type?: string | null;

      /**
       * Schedule end time (UTC, YYYY-MM-DD HH:MM:SS).
       */
      schedule_end_time?: string | null;

      /**
       * Schedule start time (UTC, YYYY-MM-DD HH:MM:SS).
       */
      schedule_start_time?: string | null;

      /**
       * Schedule type (SCHEDULE_START_END, SCHEDULE_FROM_NOW).
       */
      schedule_type?: 'SCHEDULE_START_END' | 'SCHEDULE_FROM_NOW' | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      secondary_optimization_event?: string | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      shopping_ads_retargeting_actions_days?: number | null;

      shopping_ads_retargeting_type?: 'OFF' | 'LAB1' | 'LAB2' | 'LAB3' | 'LAB4' | 'LAB5' | null;

      spending_power?: 'ALL' | 'HIGH' | null;

      /**
       * TikTok subplacements (IN_FEED, SEARCH_FEED, etc.).
       */
      tiktok_subplacements?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      vertical_sensitivity_id?: string | null;

      /**
       * Represents `true` or `false` values.
       */
      video_download_disabled?: boolean | null;

      video_user_actions?: Array<string> | null;

      view_attribution_window?: 'OFF' | 'ONE_DAY' | 'SEVEN_DAYS' | null;
    }

    export namespace Tiktok {
      /**
       * A single TikTok behavioral targeting entry. One category of past user behavior
       * (what they did, over what window, on which kind of content). See
       * docs/tiktok_api/ad_group.md § actions.
       */
      export interface Action {
        /**
         * Behavioral category IDs. Use /tool/action_category/ to list them.
         */
        action_category_ids?: Array<string> | null;

        /**
         * Lookback window in days. TikTok accepts 7, 15, 30, 60, 90, or 180.
         */
        action_period?: number | null;

        /**
         * The category of TikTok content a behavioral targeting rule applies to. See
         * docs/tiktok_api/ad_group.md § actions.
         */
        action_scene?: 'VIDEO_RELATED' | 'CREATOR_RELATED' | 'HASHTAG_RELATED' | 'LIVE_RELATED' | null;

        /**
         * Specific video interactions (WATCHED_TO_END, LIKED, COMMENTED, SHARED, FOLLOWED,
         * PROFILE_VISITED).
         */
        video_user_actions?: Array<
          'WATCHED_TO_END' | 'LIKED' | 'COMMENTED' | 'SHARED' | 'FOLLOWED' | 'PROFILE_VISITED'
        > | null;
      }

      /**
       * Instant form configuration for lead generation campaigns.
       */
      export interface InstantFormConfig {
        /**
         * URL to your privacy policy.
         */
        privacy_policy_url: string;

        /**
         * Form questions (at least one required).
         */
        questions: Array<InstantFormConfig.Question>;

        /**
         * Submit button text.
         */
        button_text?: string | null;

        /**
         * Greeting text shown at the top of the form.
         */
        greeting?: string | null;

        /**
         * Form name. Auto-generated if omitted.
         */
        name?: string | null;
      }

      export namespace InstantFormConfig {
        /**
         * A question for a TikTok instant form.
         */
        export interface Question {
          /**
           * Question type (EMAIL, PHONE_NUMBER, NAME, CUSTOM).
           */
          field_type: string;

          /**
           * Custom label for the question.
           */
          label?: string | null;
        }
      }
    }
  }
}

export interface AdGroupUpdateParams {
  /**
   * Budget amount in dollars.
   */
  budget?: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type?: 'daily' | 'lifetime' | null;

  /**
   * Unified ad group configuration (bidding, optimization, targeting).
   */
  config?: AdGroupUpdateParams.Config | null;

  /**
   * Daily budget in dollars.
   */
  daily_budget?: number | null;

  /**
   * Human-readable ad group name.
   */
  name?: string | null;

  /**
   * Platform-specific ad group configuration.
   */
  platform_config?: AdGroupUpdateParams.PlatformConfig | null;

  /**
   * The status of an external ad group.
   */
  status?: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged' | null;
}

export namespace AdGroupUpdateParams {
  /**
   * Unified ad group configuration (bidding, optimization, targeting).
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Used when bid_strategy is bid_cap or cost_cap.
     */
    bid_amount?: number | null;

    /**
     * Bid strategy: lowest_cost, bid_cap, or cost_cap.
     */
    bid_strategy?: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * How you are billed (e.g., impressions, clicks).
     */
    billing_event?: 'impressions' | 'clicks' | 'optimized_cpm' | 'video_views' | null;

    /**
     * Scheduled end time (ISO8601). Required for lifetime budgets.
     */
    end_time?: string | null;

    /**
     * Maximum number of times to show ads to each person in the frequency interval.
     */
    frequency_cap?: number | null;

    /**
     * Number of days for the frequency cap interval.
     */
    frequency_cap_interval_days?: number | null;

    /**
     * What the ad group optimizes for (e.g., conversions, link_clicks, reach).
     */
    optimization_goal?:
      | 'conversions'
      | 'link_clicks'
      | 'landing_page_views'
      | 'reach'
      | 'impressions'
      | 'app_installs'
      | 'video_views'
      | 'lead_generation'
      | 'value'
      | 'page_likes'
      | 'conversations'
      | 'ad_recall_lift'
      | 'two_second_continuous_video_views'
      | 'post_engagement'
      | 'event_responses'
      | 'reminders_set'
      | 'quality_lead'
      | null;

    /**
     * Budget pacing: standard (even) or accelerated (fast).
     */
    pacing?: 'standard' | 'accelerated' | null;

    /**
     * Scheduled start time (ISO8601).
     */
    start_time?: string | null;

    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    targeting?: Config.Targeting | null;
  }

  export namespace Config {
    /**
     * Audience targeting settings (demographics, geo, interests, audiences, devices).
     */
    export interface Targeting {
      /**
       * Maximum age for demographic targeting.
       */
      age_max?: number | null;

      /**
       * Minimum age for demographic targeting.
       */
      age_min?: number | null;

      /**
       * ISO 3166-1 alpha-2 country codes to target.
       */
      countries?: Array<string> | null;

      /**
       * Device platforms to target.
       */
      device_platforms?: Array<'mobile' | 'desktop'> | null;

      /**
       * Platform audience IDs to exclude.
       */
      exclude_audience_ids?: Array<string> | null;

      /**
       * Genders to target.
       */
      genders?: Array<'male' | 'female' | 'all'> | null;

      /**
       * Platform audience IDs to include.
       */
      include_audience_ids?: Array<string> | null;

      /**
       * Platform-specific interest IDs to target.
       */
      interest_ids?: Array<string> | null;

      /**
       * Language codes to target.
       */
      languages?: Array<string> | null;

      /**
       * Placement strategy for ad delivery.
       */
      placement_type?: 'automatic' | 'manual' | null;
    }
  }

  /**
   * Platform-specific ad group configuration.
   */
  export interface PlatformConfig {
    /**
     * Meta (Facebook/Instagram) ad set configuration.
     */
    meta?: PlatformConfig.Meta | null;

    /**
     * TikTok ad group configuration.
     */
    tiktok?: PlatformConfig.Tiktok | null;
  }

  export namespace PlatformConfig {
    /**
     * Meta (Facebook/Instagram) ad set configuration.
     */
    export interface Meta {
      android_devices?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      attribution_setting?: string | null;

      /**
       * Conversion attribution windows.
       */
      attribution_spec?: Array<Meta.AttributionSpec> | null;

      audience_network_positions?: Array<string> | null;

      /**
       * Audience type for retargeting.
       */
      audience_type?: string | null;

      /**
       * Bid amount in cents.
       */
      bid_amount?: number | null;

      /**
       * Meta bid strategy.
       */
      bid_strategy?:
        | 'LOWEST_COST_WITHOUT_CAP'
        | 'LOWEST_COST_WITH_BID_CAP'
        | 'COST_CAP'
        | 'LOWEST_COST_WITH_MIN_ROAS'
        | null;

      /**
       * How you are billed on Meta.
       */
      billing_event?:
        | 'APP_INSTALLS'
        | 'CLICKS'
        | 'IMPRESSIONS'
        | 'LINK_CLICKS'
        | 'NONE'
        | 'OFFER_CLAIMS'
        | 'PAGE_LIKES'
        | 'POST_ENGAGEMENT'
        | 'THRUPLAY'
        | 'PURCHASE'
        | 'LISTING_INTERACTION'
        | null;

      brand_safety_content_filter_levels?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      budget_remaining?: string | null;

      /**
       * Represents signed double-precision fractional values as specified by
       * [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
       */
      cost_per_result_goal?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      created_time?: string | null;

      /**
       * Daily budget in cents.
       */
      daily_budget?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      daily_min_spend_target?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      daily_spend_cap?: string | null;

      /**
       * Where ads in this ad set direct people.
       */
      destination_type?:
        | 'UNDEFINED'
        | 'WEBSITE'
        | 'APP'
        | 'FACEBOOK'
        | 'MESSENGER'
        | 'WHATSAPP'
        | 'INSTAGRAM_DIRECT'
        | 'INSTAGRAM_PROFILE'
        | 'PHONE_CALL'
        | 'SHOP_AUTOMATIC'
        | 'APPLINKS_AUTOMATIC'
        | 'ON_AD'
        | 'ON_POST'
        | 'ON_VIDEO'
        | 'ON_PAGE'
        | 'ON_EVENT'
        | 'MESSAGING_MESSENGER_WHATSAPP'
        | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER'
        | 'MESSAGING_INSTAGRAM_DIRECT_WHATSAPP'
        | 'MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP'
        | 'INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE'
        | 'FACEBOOK_PAGE'
        | 'INSTAGRAM_LIVE'
        | 'FACEBOOK_LIVE'
        | 'IMAGINE'
        | 'LEAD_FROM_IG_DIRECT'
        | 'LEAD_FROM_MESSENGER'
        | 'WEBSITE_AND_LEAD_FORM'
        | 'WEBSITE_AND_PHONE_CALL'
        | 'BROADCAST_CHANNEL'
        | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      dsa_beneficiary?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      dsa_payor?: string | null;

      /**
       * End time (ISO8601). Required for lifetime budgets.
       */
      end_time?: string | null;

      /**
       * Geo locations to exclude.
       */
      excluded_geo_locations?: Meta.ExcludedGeoLocations | null;

      /**
       * Facebook ad placements (feed, reels, stories, etc.).
       */
      facebook_positions?: Array<string> | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency_control_count?: number | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency_control_days?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      frequency_control_type?: string | null;

      geo_cities?: Array<Meta.GeoCity> | null;

      /**
       * Geo targeting (countries, regions, cities, zips).
       */
      geo_locations?: Meta.GeoLocations | null;

      geo_regions?: Array<Meta.GeoRegion> | null;

      geo_zips?: Array<string> | null;

      /**
       * Instagram account ID for this ad set.
       */
      instagram_actor_id?: string | null;

      /**
       * Instagram ad placements (stream, story, reels, etc.).
       */
      instagram_positions?: Array<string> | null;

      ios_devices?: Array<string> | null;

      /**
       * Represents `true` or `false` values.
       */
      is_dynamic_creative?: boolean | null;

      lead_conversion_location?:
        | 'website'
        | 'instant_forms'
        | 'messenger'
        | 'instagram'
        | 'calls'
        | 'app'
        | null;

      /**
       * Configuration for a Meta lead gen instant form.
       */
      lead_form_config?: Meta.LeadFormConfig | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      lead_gen_form_id?: string | null;

      /**
       * Lifetime budget in cents.
       */
      lifetime_budget?: number | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      lifetime_min_spend_target?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      lifetime_spend_cap?: string | null;

      location_types?: Array<string> | null;

      messenger_positions?: Array<string> | null;

      /**
       * What this ad set optimizes for on Meta.
       */
      optimization_goal?:
        | 'NONE'
        | 'APP_INSTALLS'
        | 'AD_RECALL_LIFT'
        | 'ENGAGED_USERS'
        | 'EVENT_RESPONSES'
        | 'IMPRESSIONS'
        | 'LEAD_GENERATION'
        | 'QUALITY_LEAD'
        | 'LINK_CLICKS'
        | 'OFFSITE_CONVERSIONS'
        | 'PAGE_LIKES'
        | 'POST_ENGAGEMENT'
        | 'QUALITY_CALL'
        | 'REACH'
        | 'LANDING_PAGE_VIEWS'
        | 'VISIT_INSTAGRAM_PROFILE'
        | 'VALUE'
        | 'THRUPLAY'
        | 'DERIVED_EVENTS'
        | 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS'
        | 'CONVERSATIONS'
        | 'IN_APP_VALUE'
        | 'MESSAGING_PURCHASE_CONVERSION'
        | 'SUBSCRIBERS'
        | 'REMINDERS_SET'
        | 'MEANINGFUL_CALL_ATTEMPT'
        | 'PROFILE_VISIT'
        | 'PROFILE_AND_PAGE_ENGAGEMENT'
        | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
        | 'ENGAGED_REACH'
        | 'ENGAGED_PAGE_VIEWS'
        | 'MESSAGING_DEEP_CONVERSATION_AND_FOLLOW'
        | 'ADVERTISER_SILOED_VALUE'
        | 'AUTOMATIC_OBJECTIVE'
        | 'MESSAGING_APPOINTMENT_CONVERSION'
        | null;

      /**
       * Facebook Page ID for this ad set.
       */
      page_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      pixel_id?: string | null;

      /**
       * The object this ad set promotes (pixel, page, etc.).
       */
      promoted_object?: Meta.PromotedObject | null;

      /**
       * Platforms to publish on (facebook, instagram, messenger, audience_network).
       */
      publisher_platforms?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      source_adset_id?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      start_time?: string | null;

      status?: 'ACTIVE' | 'PAUSED' | null;

      /**
       * Advantage+ audience expansion settings.
       */
      targeting_automation?: Meta.TargetingAutomation | null;

      threads_positions?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      updated_time?: string | null;

      user_device?: Array<string> | null;

      user_os?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      whatsapp_phone_number?: string | null;

      whatsapp_positions?: Array<string> | null;
    }

    export namespace Meta {
      /**
       * Meta conversion attribution window.
       */
      export interface AttributionSpec {
        /**
         * Attribution event type (e.g., CLICK_THROUGH, VIEW_THROUGH).
         */
        event_type: string;

        /**
         * Attribution window in days (1, 7, 28).
         */
        window_days: number;
      }

      /**
       * Geo locations to exclude.
       */
      export interface ExcludedGeoLocations {
        /**
         * City targets.
         */
        cities?: Array<ExcludedGeoLocations.City> | null;

        /**
         * ISO 3166-1 alpha-2 country codes.
         */
        countries?: Array<string> | null;

        /**
         * Location types (home, recent, travel_in).
         */
        location_types?: Array<string> | null;

        /**
         * Region/state targets.
         */
        regions?: Array<ExcludedGeoLocations.Region> | null;

        /**
         * Zip/postal code targets.
         */
        zips?: Array<ExcludedGeoLocations.Zip> | null;
      }

      export namespace ExcludedGeoLocations {
        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface City {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Region {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Zip {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }
      }

      /**
       * A Meta geo target entry (region, city, or zip).
       */
      export interface GeoCity {
        /**
         * Meta geo target key/ID.
         */
        key: string;

        /**
         * Country code for this entry.
         */
        country?: string | null;

        /**
         * Display name.
         */
        name?: string | null;

        /**
         * Radius in miles (cities only).
         */
        radius?: number | null;
      }

      /**
       * Geo targeting (countries, regions, cities, zips).
       */
      export interface GeoLocations {
        /**
         * City targets.
         */
        cities?: Array<GeoLocations.City> | null;

        /**
         * ISO 3166-1 alpha-2 country codes.
         */
        countries?: Array<string> | null;

        /**
         * Location types (home, recent, travel_in).
         */
        location_types?: Array<string> | null;

        /**
         * Region/state targets.
         */
        regions?: Array<GeoLocations.Region> | null;

        /**
         * Zip/postal code targets.
         */
        zips?: Array<GeoLocations.Zip> | null;
      }

      export namespace GeoLocations {
        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface City {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Region {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }

        /**
         * A Meta geo target entry (region, city, or zip).
         */
        export interface Zip {
          /**
           * Meta geo target key/ID.
           */
          key: string;

          /**
           * Country code for this entry.
           */
          country?: string | null;

          /**
           * Display name.
           */
          name?: string | null;

          /**
           * Radius in miles (cities only).
           */
          radius?: number | null;
        }
      }

      /**
       * A Meta geo target entry (region, city, or zip).
       */
      export interface GeoRegion {
        /**
         * Meta geo target key/ID.
         */
        key: string;

        /**
         * Country code for this entry.
         */
        country?: string | null;

        /**
         * Display name.
         */
        name?: string | null;

        /**
         * Radius in miles (cities only).
         */
        radius?: number | null;
      }

      /**
       * Configuration for a Meta lead gen instant form.
       */
      export interface LeadFormConfig {
        /**
         * Name of the lead form.
         */
        name: string;

        /**
         * URL to your privacy policy. Required by Meta.
         */
        privacy_policy_url: string;

        /**
         * Questions to ask on the form.
         */
        questions: Array<LeadFormConfig.Question>;

        /**
         * Background image source: from_ad or custom.
         */
        background_image_source?: string | null;

        /**
         * URL of custom background image.
         */
        background_image_url?: string | null;

        /**
         * Whether conditional logic is enabled for questions.
         */
        conditional_logic_enabled?: boolean | null;

        /**
         * CTA button text on the greeting card.
         */
        context_card_button_text?: string | null;

        /**
         * Optional greeting card bullet points.
         */
        context_card_content?: Array<string> | null;

        /**
         * Greeting layout: PARAGRAPH_STYLE or LIST_STYLE.
         */
        context_card_style?: string | null;

        /**
         * Optional greeting card title.
         */
        context_card_title?: string | null;

        /**
         * Custom disclaimer body text.
         */
        custom_disclaimer_body?: string | null;

        /**
         * Consent checkboxes for the custom disclaimer.
         */
        custom_disclaimer_checkboxes?: Array<LeadFormConfig.CustomDisclaimerCheckbox> | null;

        /**
         * Custom disclaimer section title.
         */
        custom_disclaimer_title?: string | null;

        /**
         * Form type: more_volume, higher_intent, or rich_creative.
         */
        form_type?: string | null;

        /**
         * Enable Messenger follow-up after form submission.
         */
        messenger_enabled?: boolean | null;

        /**
         * Require phone number verification via OTP (higher_intent only).
         */
        phone_verification_enabled?: boolean | null;

        /**
         * Custom link text for privacy policy (max 70 chars).
         */
        privacy_policy_link_text?: string | null;

        /**
         * Custom headline for the questions page.
         */
        question_page_custom_headline?: string | null;

        /**
         * Headline for rich creative form intro.
         */
        rich_creative_headline?: string | null;

        /**
         * Overview description for rich creative form intro.
         */
        rich_creative_overview?: string | null;

        /**
         * Uploaded image URL for rich creative form type.
         */
        rich_creative_url?: string | null;

        /**
         * Thank you / ending pages (supports multiple for conditional routing).
         */
        thank_you_pages?: Array<LeadFormConfig.ThankYouPage> | null;
      }

      export namespace LeadFormConfig {
        /**
         * A question on a Meta lead gen form.
         */
        export interface Question {
          /**
           * Question type (EMAIL, FULL_NAME, PHONE, CUSTOM, DATE_TIME, etc.).
           */
          type: string;

          /**
           * Group ID for conditional question routing.
           */
          conditional_questions_group_id?: string | null;

          /**
           * Questions shown conditionally based on this question's answer.
           */
          dependent_conditional_questions?: Array<Question.DependentConditionalQuestion> | null;

          /**
           * Helper text shown below the question.
           */
          inline_context?: string | null;

          /**
           * Unique key for this question.
           */
          key?: string | null;

          /**
           * Custom label for CUSTOM questions.
           */
          label?: string | null;

          /**
           * Answer options for multiple choice CUSTOM questions.
           */
          options?: Array<Question.Option> | null;

          /**
           * UI hint: short_answer, multiple_choice, or appointment.
           */
          question_format?: string | null;
        }

        export namespace Question {
          /**
           * A dependent conditional question (non-recursive to avoid schema recursion).
           */
          export interface DependentConditionalQuestion {
            /**
             * Question type (EMAIL, FULL_NAME, PHONE, CUSTOM, DATE_TIME, etc.).
             */
            type: string;

            /**
             * Helper text shown below the question.
             */
            inline_context?: string | null;

            /**
             * Unique key for this question.
             */
            key?: string | null;

            /**
             * Custom label for CUSTOM questions.
             */
            label?: string | null;

            /**
             * Answer options for multiple choice questions.
             */
            options?: Array<DependentConditionalQuestion.Option> | null;
          }

          export namespace DependentConditionalQuestion {
            /**
             * An answer option for a multiple choice lead form question.
             */
            export interface Option {
              /**
               * Unique key for this option.
               */
              key: string;

              /**
               * Display text for this option.
               */
              value: string;

              /**
               * Conditional logic routing for this answer option.
               */
              logic?: Option.Logic | null;
            }

            export namespace Option {
              /**
               * Conditional logic routing for this answer option.
               */
              export interface Logic {
                /**
                 * Logic type: go_to_question, submit_form, or close_form.
                 */
                type: string;

                /**
                 * Index of the end page to route to (for submit_form type).
                 */
                target_end_page_index?: number | null;

                /**
                 * Index of the question to route to (for go_to_question type).
                 */
                target_question_index?: number | null;
              }
            }
          }

          /**
           * An answer option for a multiple choice lead form question.
           */
          export interface Option {
            /**
             * Unique key for this option.
             */
            key: string;

            /**
             * Display text for this option.
             */
            value: string;

            /**
             * Conditional logic routing for this answer option.
             */
            logic?: Option.Logic | null;
          }

          export namespace Option {
            /**
             * Conditional logic routing for this answer option.
             */
            export interface Logic {
              /**
               * Logic type: go_to_question, submit_form, or close_form.
               */
              type: string;

              /**
               * Index of the end page to route to (for submit_form type).
               */
              target_end_page_index?: number | null;

              /**
               * Index of the question to route to (for go_to_question type).
               */
              target_question_index?: number | null;
            }
          }
        }

        /**
         * A consent checkbox for the custom disclaimer section.
         */
        export interface CustomDisclaimerCheckbox {
          /**
           * Unique key for this checkbox.
           */
          key: string;

          /**
           * Label text for the checkbox.
           */
          text: string;

          /**
           * Whether the checkbox is checked by default.
           */
          is_checked_by_default?: boolean | null;

          /**
           * Whether the checkbox must be checked to submit.
           */
          is_required?: boolean | null;
        }

        /**
         * A thank-you / ending page for a Meta lead gen form.
         */
        export interface ThankYouPage {
          /**
           * Body text for this ending page.
           */
          body?: string | null;

          /**
           * Business phone number for call CTA.
           */
          business_phone?: string | null;

          /**
           * Custom button text.
           */
          button_text?: string | null;

          /**
           * CTA button type: VIEW_WEBSITE, CALL_BUSINESS, DOWNLOAD.
           */
          button_type?: string | null;

          /**
           * Question group ID for conditional routing to this page.
           */
          conditional_question_group_id?: string | null;

          /**
           * Enable Messenger follow-up.
           */
          enable_messenger?: boolean | null;

          /**
           * Uploaded file URL for gated content download.
           */
          gated_file_url?: string | null;

          /**
           * URL the button links to.
           */
          link?: string | null;

          /**
           * Internal name for this ending page.
           */
          name?: string | null;

          /**
           * Headline for this ending page.
           */
          title?: string | null;
        }
      }

      /**
       * The object this ad set promotes (pixel, page, etc.).
       */
      export interface PromotedObject {
        /**
         * Custom conversion rule ID (numeric, from Meta Events Manager).
         */
        custom_conversion_id?: string | null;

        /**
         * Pixel event name, used when custom_event_type is OTHER.
         */
        custom_event_str?: string | null;

        /**
         * Custom event type (e.g., PURCHASE, COMPLETE_REGISTRATION, OTHER).
         */
        custom_event_type?: string | null;

        /**
         * Facebook Page ID.
         */
        page_id?: string | null;

        /**
         * Meta Pixel ID for conversion tracking.
         */
        pixel_id?: string | null;

        /**
         * WhatsApp phone number for messaging campaigns.
         */
        whatsapp_phone_number?: string | null;
      }

      /**
       * Advantage+ audience expansion settings.
       */
      export interface TargetingAutomation {
        /**
         * 0 = off (use exact targeting), 1 = on (let Meta expand audience).
         */
        advantage_audience?: number | null;
      }
    }

    /**
     * TikTok ad group configuration.
     */
    export interface Tiktok {
      actions?: Array<Tiktok.Action> | null;

      age_groups?: Array<
        'AGE_13_17' | 'AGE_18_24' | 'AGE_25_34' | 'AGE_35_44' | 'AGE_45_54' | 'AGE_55_100'
      > | null;

      /**
       * App ID for app promotion campaigns.
       */
      app_id?: string | null;

      attribution_event_count?: 'UNSET' | 'EVERY' | 'ONCE' | null;

      audience_ids?: Array<string> | null;

      /**
       * Represents untyped JSON
       */
      audience_rule?: { [key: string]: unknown } | null;

      audience_type?: 'NORMAL' | 'SMART_INTERESTS_BEHAVIORS' | null;

      /**
       * Bid price (cost per result for Cost Cap).
       */
      bid_price?: number | null;

      /**
       * Bidding strategy (BID_TYPE_NO_BID, BID_TYPE_CUSTOM).
       */
      bid_type?: 'BID_TYPE_NO_BID' | 'BID_TYPE_CUSTOM' | null;

      /**
       * How you are billed on TikTok (CPC, CPM, OCPM, CPV).
       */
      billing_event?: 'CPC' | 'CPM' | 'OCPM' | 'CPV' | null;

      brand_safety_type?:
        | 'NO_BRAND_SAFETY'
        | 'STANDARD_INVENTORY'
        | 'LIMITED_INVENTORY'
        | 'FULL_INVENTORY'
        | 'EXPANDED_INVENTORY'
        | null;

      /**
       * Budget mode (BUDGET_MODE_DAY, BUDGET_MODE_TOTAL,
       * BUDGET_MODE_DYNAMIC_DAILY_BUDGET).
       */
      budget_mode?: 'BUDGET_MODE_DAY' | 'BUDGET_MODE_TOTAL' | 'BUDGET_MODE_DYNAMIC_DAILY_BUDGET' | null;

      carrier_ids?: Array<string> | null;

      category_exclusion_ids?: Array<string> | null;

      click_attribution_window?:
        | 'OFF'
        | 'ONE_DAY'
        | 'SEVEN_DAYS'
        | 'FOURTEEN_DAYS'
        | 'TWENTY_EIGHT_DAYS'
        | null;

      /**
       * Represents `true` or `false` values.
       */
      comment_disabled?: boolean | null;

      contextual_tag_ids?: Array<string> | null;

      /**
       * Target cost per conversion for oCPM.
       */
      conversion_bid_price?: number | null;

      /**
       * Creative delivery strategy.
       */
      creative_material_mode?: string | null;

      /**
       * Ad delivery schedule (48x7 character string).
       */
      dayparting?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      deep_funnel_event_source?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      deep_funnel_event_source_id?: string | null;

      deep_funnel_optimization_status?: 'ON' | 'OFF' | null;

      device_model_ids?: Array<string> | null;

      device_price_ranges?: Array<string> | null;

      engaged_view_attribution_window?: 'OFF' | 'ONE_DAY' | 'SEVEN_DAYS' | null;

      excluded_audience_ids?: Array<string> | null;

      /**
       * TikTok location/region IDs to exclude.
       */
      excluded_location_ids?: Array<string> | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency?: number | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      frequency_schedule?: number | null;

      gender?: 'GENDER_UNLIMITED' | 'GENDER_MALE' | 'GENDER_FEMALE' | null;

      /**
       * Business Center ID for BC_AUTH_TT identity.
       */
      identity_authorized_bc_id?: string | null;

      /**
       * TikTok identity ID for the ad group.
       */
      identity_id?: string | null;

      /**
       * Identity type (AUTH_CODE, TT_USER, BC_AUTH_TT).
       */
      identity_type?: string | null;

      /**
       * Instant form configuration for lead generation campaigns.
       */
      instant_form_config?: Tiktok.InstantFormConfig | null;

      /**
       * TikTok instant form ID (set automatically when instant_form_config is provided).
       */
      instant_form_id?: string | null;

      interest_category_ids?: Array<string> | null;

      interest_keyword_ids?: Array<string> | null;

      /**
       * Represents `true` or `false` values.
       */
      inventory_filter_enabled?: boolean | null;

      ios14_targeting?: 'UNSET' | 'IOS14_MINUS' | 'IOS14_PLUS' | 'ALL' | null;

      isp_ids?: Array<string> | null;

      languages?: Array<string> | null;

      /**
       * TikTok location/region IDs for geo targeting.
       */
      location_ids?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      min_android_version?: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      min_ios_version?: string | null;

      network_types?: Array<string> | null;

      operating_systems?: Array<'ANDROID' | 'IOS'> | null;

      /**
       * Initial status (ENABLE, DISABLE).
       */
      operation_status?: 'ENABLE' | 'DISABLE' | null;

      /**
       * Conversion event (e.g., COMPLETE_PAYMENT).
       */
      optimization_event?: string | null;

      /**
       * What this ad group optimizes for on TikTok.
       */
      optimization_goal?:
        | 'CLICK'
        | 'CONVERT'
        | 'INSTALL'
        | 'IN_APP_EVENT'
        | 'REACH'
        | 'SHOW'
        | 'VIDEO_VIEW'
        | 'ENGAGED_VIEW'
        | 'ENGAGED_VIEW_FIFTEEN'
        | 'LEAD_GENERATION'
        | 'PREFERRED_LEAD'
        | 'CONVERSATION'
        | 'FOLLOWERS'
        | 'PROFILE_VIEWS'
        | 'PAGE_VISIT'
        | 'VALUE'
        | 'AUTOMATIC_VALUE_OPTIMIZATION'
        | 'TRAFFIC_LANDING_PAGE_VIEW'
        | 'DESTINATION_VISIT'
        | 'MT_LIVE_ROOM'
        | 'PRODUCT_CLICK_IN_LIVE'
        | null;

      /**
       * Budget pacing (PACING_MODE_SMOOTH, PACING_MODE_FAST).
       */
      pacing?: 'PACING_MODE_SMOOTH' | 'PACING_MODE_FAST' | null;

      pangle_audience_package_exclude_ids?: Array<string> | null;

      pangle_audience_package_include_ids?: Array<string> | null;

      pangle_block_app_ids?: Array<string> | null;

      /**
       * TikTok Pixel ID for conversion tracking.
       */
      pixel_id?: string | null;

      /**
       * Placement strategy (PLACEMENT_TYPE_AUTOMATIC, PLACEMENT_TYPE_NORMAL).
       */
      placement_type?: 'PLACEMENT_TYPE_AUTOMATIC' | 'PLACEMENT_TYPE_NORMAL' | null;

      /**
       * Placements (PLACEMENT_TIKTOK, PLACEMENT_PANGLE, etc.).
       */
      placements?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      product_set_id?: string | null;

      product_source?: 'CATALOG' | 'STORE' | 'SHOWCASE' | null;

      /**
       * Promotion type (optimization location).
       */
      promotion_type?: string | null;

      /**
       * Schedule end time (UTC, YYYY-MM-DD HH:MM:SS).
       */
      schedule_end_time?: string | null;

      /**
       * Schedule start time (UTC, YYYY-MM-DD HH:MM:SS).
       */
      schedule_start_time?: string | null;

      /**
       * Schedule type (SCHEDULE_START_END, SCHEDULE_FROM_NOW).
       */
      schedule_type?: 'SCHEDULE_START_END' | 'SCHEDULE_FROM_NOW' | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      secondary_optimization_event?: string | null;

      /**
       * Represents non-fractional signed whole numeric values. Int can represent values
       * between -(2^31) and 2^31 - 1.
       */
      shopping_ads_retargeting_actions_days?: number | null;

      shopping_ads_retargeting_type?: 'OFF' | 'LAB1' | 'LAB2' | 'LAB3' | 'LAB4' | 'LAB5' | null;

      spending_power?: 'ALL' | 'HIGH' | null;

      /**
       * TikTok subplacements (IN_FEED, SEARCH_FEED, etc.).
       */
      tiktok_subplacements?: Array<string> | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      vertical_sensitivity_id?: string | null;

      /**
       * Represents `true` or `false` values.
       */
      video_download_disabled?: boolean | null;

      video_user_actions?: Array<string> | null;

      view_attribution_window?: 'OFF' | 'ONE_DAY' | 'SEVEN_DAYS' | null;
    }

    export namespace Tiktok {
      /**
       * A single TikTok behavioral targeting entry. One category of past user behavior
       * (what they did, over what window, on which kind of content). See
       * docs/tiktok_api/ad_group.md § actions.
       */
      export interface Action {
        /**
         * Behavioral category IDs. Use /tool/action_category/ to list them.
         */
        action_category_ids?: Array<string> | null;

        /**
         * Lookback window in days. TikTok accepts 7, 15, 30, 60, 90, or 180.
         */
        action_period?: number | null;

        /**
         * The category of TikTok content a behavioral targeting rule applies to. See
         * docs/tiktok_api/ad_group.md § actions.
         */
        action_scene?: 'VIDEO_RELATED' | 'CREATOR_RELATED' | 'HASHTAG_RELATED' | 'LIVE_RELATED' | null;

        /**
         * Specific video interactions (WATCHED_TO_END, LIKED, COMMENTED, SHARED, FOLLOWED,
         * PROFILE_VISITED).
         */
        video_user_actions?: Array<
          'WATCHED_TO_END' | 'LIKED' | 'COMMENTED' | 'SHARED' | 'FOLLOWED' | 'PROFILE_VISITED'
        > | null;
      }

      /**
       * Instant form configuration for lead generation campaigns.
       */
      export interface InstantFormConfig {
        /**
         * URL to your privacy policy.
         */
        privacy_policy_url: string;

        /**
         * Form questions (at least one required).
         */
        questions: Array<InstantFormConfig.Question>;

        /**
         * Submit button text.
         */
        button_text?: string | null;

        /**
         * Greeting text shown at the top of the form.
         */
        greeting?: string | null;

        /**
         * Form name. Auto-generated if omitted.
         */
        name?: string | null;
      }

      export namespace InstantFormConfig {
        /**
         * A question for a TikTok instant form.
         */
        export interface Question {
          /**
           * Question type (EMAIL, PHONE_NUMBER, NAME, CUSTOM).
           */
          field_type: string;

          /**
           * Custom label for the question.
           */
          label?: string | null;
        }
      }
    }
  }
}

export interface AdGroupListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter by campaign. Provide exactly one of campaign_id or company_id.
   */
  campaign_id?: string | null;

  /**
   * Filter by company. Provide exactly one of campaign_id or company_id.
   */
  company_id?: string | null;

  /**
   * Only return ad groups created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return ad groups created before this timestamp.
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
   * Case-insensitive substring match against the ad group name.
   */
  query?: string | null;

  /**
   * The status of an external ad group.
   */
  status?: 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged' | null;
}

export declare namespace AdGroups {
  export {
    type AdGroupCreateResponse as AdGroupCreateResponse,
    type AdGroupRetrieveResponse as AdGroupRetrieveResponse,
    type AdGroupUpdateResponse as AdGroupUpdateResponse,
    type AdGroupListResponse as AdGroupListResponse,
    type AdGroupDeleteResponse as AdGroupDeleteResponse,
    type AdGroupListResponsesCursorPage as AdGroupListResponsesCursorPage,
    type AdGroupCreateParams as AdGroupCreateParams,
    type AdGroupUpdateParams as AdGroupUpdateParams,
    type AdGroupListParams as AdGroupListParams,
  };
}
