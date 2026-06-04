// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdCampaignsAPI from './ad-campaigns';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ad groups
 */
export class AdGroups extends APIResource {
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
  retrieve(
    id: string,
    query: AdGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    return this._client.get(path`/ad_groups/${id}`, { query, ...options });
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
  ): APIPromise<AdGroup> {
    return this._client.patch(path`/ad_groups/${id}`, { body, ...options });
  }

  /**
   * Soft-deletes an ad group.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
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

  /**
   * Pauses an ad group.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.pause(
   *   'adgrp_xxxxxxxxxxxx',
   * );
   * ```
   */
  pause(id: string, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.post(path`/ad_groups/${id}/pause`, options);
  }

  /**
   * Resumes a paused ad group.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.unpause(
   *   'adgrp_xxxxxxxxxxxx',
   * );
   * ```
   */
  unpause(id: string, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.post(path`/ad_groups/${id}/unpause`, options);
  }
}

export type AdGroupListResponsesCursorPage = CursorPage<AdGroupListResponse>;

/**
 * The budget type for an ad campaign or ad group.
 */
export type AdBudgetType = 'daily' | 'lifetime';

/**
 * An ad group belonging to an ad campaign.
 */
export interface AdGroup {
  /**
   * The unique identifier for this ad group.
   */
  id: string;

  /**
   * The ad campaign this ad group belongs to.
   */
  ad_campaign: AdGroup.AdCampaign;

  /**
   * Budget amount in dollars.
   */
  budget: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type: AdBudgetType | null;

  /**
   * Total clicks on this ad group's ads in the stats window.
   */
  clicks: number;

  /**
   * Cost in dollars per optimization result (spend / results). Null when there are
   * no results.
   */
  cost_per_result: number | null;

  /**
   * Cost per click in dollars (spend / clicks). 0 when there are no clicks.
   */
  cpc: number;

  /**
   * Cost per 1,000 impressions in dollars (spend / impressions × 1000).
   */
  cpm: number | null;

  /**
   * When the ad group was created.
   */
  created_at: string;

  /**
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  ctr: number;

  /**
   * Average number of times each person saw an ad (impressions / reach), as reported
   * by the platform.
   */
  frequency: number | null;

  /**
   * Total impressions (views) on this ad group's ads in the stats window.
   */
  impressions: number;

  /**
   * Open platform issues affecting this ad group and its descendant ads,
   * deduplicated per object. Empty when there are none.
   */
  issues: Array<AdGroup.Issue>;

  /**
   * The external ad platform this ad group is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignsAPI.AdCampaignPlatform;

  /**
   * Total USD value of Whop pixel-attributed purchases in the stats window.
   */
  purchase_value: number;

  /**
   * Number of Whop pixel-attributed purchases (last-click) in the stats window.
   */
  purchases: number;

  /**
   * Unique users reached in the stats window (deduplicated by the platform).
   */
  reach: number;

  /**
   * Total optimization results reported by the external ad platform in the stats
   * window. What counts as a result depends on the optimization goal — see
   * `stats.resultLabelKey`.
   */
  results: number;

  /**
   * Return on ad spend as a ratio (purchaseValue / spend) — 2.5 means $2.50 of
   * attributed purchase value per $1 spent. 0 when there is no spend.
   */
  roas: number;

  /**
   * Amount charged in dollars in the stats window.
   */
  spend: number;

  /**
   * The available currencies on the platform
   */
  spend_currency: Shared.Currency | null;

  /**
   * Current operational status of the ad group.
   */
  status: AdGroupStatus;

  /**
   * The ad group name shown in the Whop dashboard.
   */
  title: string | null;

  /**
   * Unique click-through rate as a fraction of impressions (unique clicks /
   * impressions, 0–1).
   */
  unique_ctr: number | null;

  /**
   * When the ad group was last updated.
   */
  updated_at: string;
}

export namespace AdGroup {
  /**
   * The ad campaign this ad group belongs to.
   */
  export interface AdCampaign {
    /**
     * The unique identifier for this ad campaign.
     */
    id: string;
  }

  /**
   * A platform-reported issue on an ad object (rejection, policy flag, etc.).
   */
  export interface Issue {
    /**
     * When the issue was first reported.
     */
    created_at: string;

    /**
     * Platform-specific error code.
     */
    error_code: string | null;

    /**
     * Full error detail from the platform.
     */
    error_message: string | null;

    /**
     * Short description of the issue.
     */
    error_summary: string;

    /**
     * Current resolution status.
     */
    resolution_status: 'open' | 'resolved' | 'acknowledged';

    /**
     * The Whop ID of the ad object this issue is on (the ad, ad group, or campaign).
     * Null when the issue isn't tied to a local object.
     */
    resource_id: string | null;

    /**
     * The kind of ad object this issue is on: `ad`, `ad_group`, `campaign`, or
     * `asset_share`. Pairs with `resourceId`.
     */
    resource_type: string;
  }
}

/**
 * The status of an external ad group.
 */
export type AdGroupStatus = 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

/**
 * An ad group belonging to an ad campaign.
 */
export interface AdGroupListResponse {
  /**
   * The unique identifier for this ad group.
   */
  id: string;

  /**
   * The ad campaign this ad group belongs to.
   */
  ad_campaign: AdGroupListResponse.AdCampaign;

  /**
   * Budget amount in dollars.
   */
  budget: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type: AdBudgetType | null;

  /**
   * Total clicks on this ad group's ads in the stats window.
   */
  clicks: number;

  /**
   * Cost in dollars per optimization result (spend / results). Null when there are
   * no results.
   */
  cost_per_result: number | null;

  /**
   * Cost per click in dollars (spend / clicks). 0 when there are no clicks.
   */
  cpc: number;

  /**
   * Cost per 1,000 impressions in dollars (spend / impressions × 1000).
   */
  cpm: number | null;

  /**
   * When the ad group was created.
   */
  created_at: string;

  /**
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  ctr: number;

  /**
   * Average number of times each person saw an ad (impressions / reach), as reported
   * by the platform.
   */
  frequency: number | null;

  /**
   * Total impressions (views) on this ad group's ads in the stats window.
   */
  impressions: number;

  /**
   * Open platform issues affecting this ad group and its descendant ads,
   * deduplicated per object. Empty when there are none.
   */
  issues: Array<AdGroupListResponse.Issue>;

  /**
   * The external ad platform this ad group is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignsAPI.AdCampaignPlatform;

  /**
   * Total USD value of Whop pixel-attributed purchases in the stats window.
   */
  purchase_value: number;

  /**
   * Number of Whop pixel-attributed purchases (last-click) in the stats window.
   */
  purchases: number;

  /**
   * Unique users reached in the stats window (deduplicated by the platform).
   */
  reach: number;

  /**
   * Total optimization results reported by the external ad platform in the stats
   * window. What counts as a result depends on the optimization goal — see
   * `stats.resultLabelKey`.
   */
  results: number;

  /**
   * Return on ad spend as a ratio (purchaseValue / spend) — 2.5 means $2.50 of
   * attributed purchase value per $1 spent. 0 when there is no spend.
   */
  roas: number;

  /**
   * Amount charged in dollars in the stats window.
   */
  spend: number;

  /**
   * The available currencies on the platform
   */
  spend_currency: Shared.Currency | null;

  /**
   * Current operational status of the ad group.
   */
  status: AdGroupStatus;

  /**
   * The ad group name shown in the Whop dashboard.
   */
  title: string | null;

  /**
   * Unique click-through rate as a fraction of impressions (unique clicks /
   * impressions, 0–1).
   */
  unique_ctr: number | null;

  /**
   * When the ad group was last updated.
   */
  updated_at: string;
}

export namespace AdGroupListResponse {
  /**
   * The ad campaign this ad group belongs to.
   */
  export interface AdCampaign {
    /**
     * The unique identifier for this ad campaign.
     */
    id: string;
  }

  /**
   * A platform-reported issue on an ad object (rejection, policy flag, etc.).
   */
  export interface Issue {
    /**
     * When the issue was first reported.
     */
    created_at: string;

    /**
     * Platform-specific error code.
     */
    error_code: string | null;

    /**
     * Full error detail from the platform.
     */
    error_message: string | null;

    /**
     * Short description of the issue.
     */
    error_summary: string;

    /**
     * Current resolution status.
     */
    resolution_status: 'open' | 'resolved' | 'acknowledged';

    /**
     * The Whop ID of the ad object this issue is on (the ad, ad group, or campaign).
     * Null when the issue isn't tied to a local object.
     */
    resource_id: string | null;

    /**
     * The kind of ad object this issue is on: `ad`, `ad_group`, `campaign`, or
     * `asset_share`. Pairs with `resourceId`.
     */
    resource_type: string;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type AdGroupDeleteResponse = boolean;

export interface AdGroupListParams extends CursorPageParams {
  /**
   * Filter by ad campaign. Provide exactly one of ad_campaign_id or company_id.
   */
  ad_campaign_id?: string | null;

  /**
   * Only return ad groups belonging to these ad campaigns (max 100). Combine with
   * company_id.
   */
  ad_campaign_ids?: Array<string> | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter by campaign.
   */
  campaign_id?: string | null;

  /**
   * Filter by company. Provide exactly one of ad_campaign_id or company_id.
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
   * Case-insensitive substring match against the ad group name or tag.
   */
  query?: string | null;

  /**
   * Inclusive start of the window for each ad group's metric fields (spend,
   * impressions, …). Omit both statsFrom and statsTo for all-time stats.
   */
  stats_from?: string | null;

  /**
   * Inclusive end of the window for each ad group's metric fields. Omit both
   * statsFrom and statsTo for all-time stats.
   */
  stats_to?: string | null;

  /**
   * The status of an external ad group.
   */
  status?: AdGroupStatus | null;
}

export interface AdGroupRetrieveParams {
  /**
   * Inclusive start of the window for the ad group's metric fields (spend,
   * impressions, …). Omit both statsFrom and statsTo for all-time stats.
   */
  stats_from?: string | null;

  /**
   * Inclusive end of the window for the ad group's metric fields. Omit both
   * statsFrom and statsTo for all-time stats.
   */
  stats_to?: string | null;
}

export interface AdGroupUpdateParams {
  /**
   * Budget amount in dollars.
   */
  budget?: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type?: AdBudgetType | null;

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
  status?: AdGroupStatus | null;
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
        | 'LEAD_FORM_MESSENGER'
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
        | 'website_and_instant_forms'
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

export declare namespace AdGroups {
  export {
    type AdBudgetType as AdBudgetType,
    type AdGroup as AdGroup,
    type AdGroupStatus as AdGroupStatus,
    type AdGroupListResponse as AdGroupListResponse,
    type AdGroupDeleteResponse as AdGroupDeleteResponse,
    type AdGroupListResponsesCursorPage as AdGroupListResponsesCursorPage,
    type AdGroupListParams as AdGroupListParams,
    type AdGroupRetrieveParams as AdGroupRetrieveParams,
    type AdGroupUpdateParams as AdGroupUpdateParams,
  };
}
