// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An Ad Group sits inside an [ad campaign](/api-reference/beta/ad-campaigns/ad-campaign) and controls delivery for [ads](/api-reference/beta/ads/ad). It sets the audience, placements, schedule, budget, and optimization goal for its ads.
 *
 * Use the Ad Groups API to create ad groups in campaigns, list or retrieve targeting and delivery settings, update budgets or targeting, delete groups that should stop running, and pause or resume delivery.
 */
export class AdGroups extends APIResource {
  /**
   * Lists ad groups for the account, newest first.
   */
  list(
    query: AdGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdGroupsCursorPage, AdGroup> {
    return this._client.getAPIList('/ad_groups', CursorPage<AdGroup>, { query, ...options });
  }

  /**
   * Creates an ad group (ad set) in a campaign.
   */
  create(body: AdGroupCreateParams, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.post('/ad_groups', { body, ...options });
  }

  /**
   * Retrieves a single ad group.
   */
  retrieve(
    id: string,
    query: AdGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    return this._client.get(path`/ad_groups/${id}`, { query, ...options });
  }

  /**
   * Updates an ad group's editable fields. Only the keys you send are changed.
   */
  update(id: string, body: AdGroupUpdateParams, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.patch(path`/ad_groups/${id}`, { body, ...options });
  }

  /**
   * Deletes an ad group. Returns true on success.
   */
  delete(id: string, options?: RequestOptions): APIPromise<AdGroupDeleteResponse> {
    return this._client.delete(path`/ad_groups/${id}`, options);
  }

  /**
   * Pauses delivery of an ad group.
   */
  pause(id: string, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.post(path`/ad_groups/${id}/pause`, options);
  }

  /**
   * Resumes delivery of a paused ad group.
   */
  unpause(id: string, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.post(path`/ad_groups/${id}/unpause`, options);
  }
}

export type AdGroupsCursorPage = CursorPage<AdGroup>;

export interface AdGroup {
  /**
   * Unique identifier for the ad group.
   */
  id: string;

  /**
   * The ad campaign this ad group belongs to, an object with an id.
   */
  ad_campaign: AdGroup.AdCampaign;

  /**
   * Whop pixel-attributed add-to-cart events, last-click.
   */
  added_to_carts: number;

  /**
   * Saved-audience targeting: { include, exclude } arrays of audience IDs.
   */
  audiences: unknown;

  /**
   * Bid strategy.
   */
  bid_type: 'minimum_cost' | 'average_target' | 'maximum_target' | null;

  /**
   * Ad-set budget; null when the campaign owns budget (CBO).
   */
  budget_amount: number | null;

  /**
   * Whether the budget is daily or lifetime.
   */
  budget_type: 'daily' | 'lifetime' | null;

  /**
   * Clicks divided by impressions, between 0 and 1.
   */
  click_through_rate: number;

  /**
   * The number of clicks.
   */
  clicks: number;

  /**
   * Whop pixel-attributed complete-registration events, last-click.
   */
  completed_registrations: number;

  /**
   * Whop pixel-attributed contact events, last-click.
   */
  contacts: number;

  /**
   * The pixel event optimized for. A standard event, or any custom pixel event name.
   */
  conversion_event:
    | 'purchase'
    | 'add_to_cart'
    | 'initiated_checkout'
    | 'add_payment_info'
    | 'complete_registration'
    | 'lead'
    | 'content_view'
    | 'search'
    | 'contact'
    | 'customize_product'
    | 'donate'
    | 'find_location'
    | 'schedule'
    | 'start_trial'
    | 'submit_application'
    | 'subscribe'
    | (string & {})
    | null;

  /**
   * Where results happen: website, profile (IG/FB), messaging (DM), on_ad
   * (engagement), or the lead destinations (instant_forms,
   * instant_forms_and_messenger, website_and_instant_forms).
   */
  conversion_location:
    | 'website'
    | 'profile'
    | 'messaging'
    | 'on_ad'
    | 'instant_forms'
    | 'instant_forms_and_messenger'
    | 'website_and_instant_forms'
    | null;

  /**
   * Spend divided by attributed add-to-cart events; null when they are not the goal
   * and none are attributed.
   */
  cost_per_added_to_cart: number | null;

  /**
   * Spend divided by clicks; 0 when there are no clicks.
   */
  cost_per_click: number;

  /**
   * Spend divided by attributed complete-registration events; null when they are not
   * the goal and none are attributed.
   */
  cost_per_completed_registration: number | null;

  /**
   * Spend divided by attributed contact events; null when contacts are not the goal
   * and none are attributed.
   */
  cost_per_contact: number | null;

  /**
   * Spend divided by attributed leads; null when leads are not a goal and none are
   * attributed.
   */
  cost_per_lead: number | null;

  /**
   * Spend per 1,000 impressions; 0 when there are no impressions.
   */
  cost_per_mille: number;

  /**
   * Spend divided by attributed purchases; null when purchases are not a goal and
   * none are attributed.
   */
  cost_per_purchase: number | null;

  /**
   * Spend divided by Whop pixel-attributed results; null when nothing
   * Whop-attributable is being optimized for.
   */
  cost_per_result: number | null;

  /**
   * Spend divided by attributed schedule events; null when schedules are not the
   * goal and none are attributed.
   */
  cost_per_schedule: number | null;

  /**
   * Spend divided by attributed submit-application events; null when they are not
   * the goal and none are attributed.
   */
  cost_per_submitted_application: number | null;

  /**
   * Spend divided by attributed view-content events; null when they are not the goal
   * and none are attributed.
   */
  cost_per_viewed_content: number | null;

  /**
   * When the ad group was created, ISO 8601.
   */
  created_at: string;

  /**
   * Whop pixel-attributed custom (merchant-defined) conversion events, last-click,
   * across all custom event names.
   */
  custom_conversions: number;

  /**
   * The current delivery state, mirroring the Delivery column in the ads dashboard.
   * When several states apply at once, the highest-precedence one is returned.
   */
  delivery_status:
    | 'all_ads_rejected'
    | 'rejected'
    | 'draft'
    | 'no_ads'
    | 'campaign_paused'
    | 'paused'
    | 'processing'
    | 'issues'
    | 'scheduled'
    | 'completed'
    | 'ads_off'
    | 'learning_limited'
    | 'learning'
    | 'active';

  /**
   * Demographic targeting: automatic (Advantage+), age range, gender.
   */
  demographics: unknown;

  /**
   * Target/cap cost for average_target / maximum_target.
   */
  desired_cost_per_result: number | null;

  /**
   * Device targeting: platforms and operating systems.
   */
  devices: unknown;

  /**
   * Whether ads within this ad group have their creatives and copy dynamically AB
   * tested.
   */
  dynamic_creative: boolean;

  /**
   * Schedule end, ISO 8601.
   */
  ends_at: string | null;

  /**
   * Platform-reported impressions divided by reach.
   */
  frequency: number | null;

  /**
   * Impression cap; only valid for reach optimization.
   */
  frequency_cap: unknown | null;

  /**
   * The number of impressions.
   */
  impressions: number;

  issues: Array<AdGroup.Issue>;

  languages: Array<string>;

  /**
   * Whop pixel-attributed leads, last-click.
   */
  leads: number;

  message_apps: Array<string>;

  /**
   * Daily spend floor within the budget.
   */
  minimum_daily_spend: number | null;

  /**
   * What the ad group optimizes for.
   */
  optimization_goal: string | null;

  placements: Array<unknown>;

  /**
   * USD value of pixel-attributed purchases.
   */
  purchase_value: number;

  /**
   * Whop pixel-attributed purchases, last-click.
   */
  purchases: number;

  /**
   * The number of unique people who saw this.
   */
  reach: number;

  /**
   * Geo targeting: include/exclude countries, regions (ISO 3166-2 states, e.g.
   * US-CA), cities, zips.
   */
  regions: unknown;

  /**
   * The Whop pixel conversion event whose attributed count represents results — the
   * optimization goal, or the highest-volume attributed event for campaigns that
   * budget per ad group. Null when the goal isn't a Whop-attributed event.
   */
  result_event:
    | 'purchase'
    | 'lead'
    | 'schedule'
    | 'submit_application'
    | 'contact'
    | 'complete_registration'
    | 'view_content'
    | 'add_to_cart'
    | 'custom'
    | null;

  /**
   * The merchant-defined event name when result_event is custom; null for the
   * standard events.
   */
  result_event_name: string | null;

  /**
   * Purchase value divided by spend, both in USD (a currency-neutral ratio); 0 when
   * there is no spend.
   */
  return_on_ad_spend: number;

  /**
   * Whop pixel-attributed schedule events, last-click.
   */
  schedules: number;

  /**
   * The amount charged, in spend_currency.
   */
  spend: number;

  /**
   * The ISO 4217 currency code of all monetary metrics.
   */
  spend_currency: string | null;

  /**
   * Schedule start, ISO 8601.
   */
  starts_at: string | null;

  /**
   * Delivery status of the ad group.
   */
  status: 'active' | 'paused' | 'rejected';

  /**
   * Whop pixel-attributed submit-application events, last-click.
   */
  submitted_applications: number;

  /**
   * The display title of the ad group.
   */
  title: string | null;

  /**
   * Unique clicks divided by impressions, between 0 and 1.
   */
  unique_click_through_rate: number | null;

  /**
   * The number of unique clicks.
   */
  unique_clicks: number;

  /**
   * When the ad group was last updated, ISO 8601.
   */
  updated_at: string;

  /**
   * Whop pixel-attributed view-content events, last-click.
   */
  viewed_contents: number;
}

export namespace AdGroup {
  /**
   * The ad campaign this ad group belongs to, an object with an id.
   */
  export interface AdCampaign {
    /**
     * The referenced entity's id.
     */
    id: string;
  }

  /**
   * Open issues affecting this ad group and its descendant ads. Empty when there are
   * none.
   */
  export interface Issue {
    /**
     * Unique identifier for the issue.
     */
    id: string;

    /**
     * A description of what the issue is and how it can be resolved.
     */
    message: string;

    /**
     * The ID of the campaign, ad group, or ad the issue is attached to.
     */
    resource_id: string | null;

    /**
     * The type of resource the issue is attached to.
     */
    resource_type: 'ad_campaign' | 'ad_group' | 'ad';
  }
}

export type AdGroupDeleteResponse = boolean;

export interface AdGroupListParams extends CursorPageParams {
  /**
   * Account whose ad groups to list. Defaults to the authenticated account.
   */
  account_id?: string;

  /**
   * Filter to ad groups in this campaign.
   */
  ad_campaign_id?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only return ad groups created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return ad groups created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of ad groups to return.
   */
  first?: number;

  /**
   * The number of ad groups to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort by. Defaults to created_at. Stat columns (spend, impressions,
   * …) rank over the stats_from/stats_to window across the whole list, not just the
   * current page. results, cost_per_result and return_on_ad_spend rank by the same
   * Whop pixel-attributed values the response reports.
   */
  order?:
    | 'created_at'
    | 'updated_at'
    | 'spend'
    | 'impressions'
    | 'reach'
    | 'clicks'
    | 'unique_clicks'
    | 'frequency'
    | 'click_through_rate'
    | 'results'
    | 'cost_per_mille'
    | 'cost_per_click'
    | 'cost_per_result'
    | 'return_on_ad_spend';

  /**
   * Filter ad groups by a title or ID substring.
   */
  query?: string;

  /**
   * Start of the stats window. Defaults to all-time.
   */
  stats_from?: string;

  /**
   * End of the stats window. Defaults to now.
   */
  stats_to?: string;

  /**
   * Filter to a status (active, paused, in_review, rejected).
   */
  status?: string;

  /**
   * IANA timezone (e.g. America/New_York) the stats window is interpreted in. Bare
   * stats_from/stats_to dates resolve to day boundaries on this clock. Defaults to
   * UTC.
   */
  time_zone?: string;
}

export interface AdGroupCreateParams {
  /**
   * The ad campaign to create the ad group in.
   */
  ad_campaign_id: string;

  /**
   * Saved-audience targeting: { include, exclude } arrays of audience IDs.
   * Incompatible with demographics.automatic (Advantage+).
   */
  audiences?: unknown;

  /**
   * Bid strategy.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * Ad-set budget in dollars (ABO only; omit under CBO).
   */
  budget_amount?: number;

  /**
   * Whether the budget is daily or lifetime.
   */
  budget_type?: 'daily' | 'lifetime';

  /**
   * The pixel event optimized for. A standard event, or any custom pixel event name.
   */
  conversion_event?:
    | 'purchase'
    | 'add_to_cart'
    | 'initiated_checkout'
    | 'add_payment_info'
    | 'complete_registration'
    | 'lead'
    | 'content_view'
    | 'search'
    | 'contact'
    | 'customize_product'
    | 'donate'
    | 'find_location'
    | 'schedule'
    | 'start_trial'
    | 'submit_application'
    | 'subscribe'
    | (string & {})
    | null;

  /**
   * Where results happen: website (conversions), profile (IG/FB engagement),
   * messaging (DM), on_ad (engagement on the ad, surface follows the optimization
   * goal), or the lead destinations (instant_forms, instant_forms_and_messenger,
   * website_and_instant_forms). The lead form itself is set on the ad.
   */
  conversion_location?:
    | 'website'
    | 'profile'
    | 'messaging'
    | 'on_ad'
    | 'instant_forms'
    | 'instant_forms_and_messenger'
    | 'website_and_instant_forms';

  /**
   * Demographic targeting: { automatic, minimum_age, maximum_age, gender }.
   */
  demographics?: unknown;

  /**
   * Target/cap cost for average_target / maximum_target.
   */
  desired_cost_per_result?: number;

  /**
   * Device targeting: { platforms, operating_systems: [{ os, minimum_version }] }.
   */
  devices?: unknown;

  /**
   * Run Meta dynamic (Advantage+) creative for this ad set. Set at creation;
   * immutable afterward.
   */
  dynamic_creative?: boolean;

  /**
   * Schedule end, ISO 8601.
   */
  ends_at?: string;

  /**
   * { maximum_impressions, per_days } — only valid for reach optimization.
   */
  frequency_cap?: unknown;

  /**
   * Languages to target as ISO 639 codes (e.g. en, es). Empty/omitted = all
   * languages.
   */
  languages?: Array<string>;

  /**
   * Required when conversion_location is messaging: which apps to message on.
   * Combinations map to the matching Meta destination.
   */
  message_apps?: Array<'messenger' | 'instagram' | 'whatsapp'>;

  /**
   * Daily spend floor within the budget.
   */
  minimum_daily_spend?: number;

  /**
   * What the ad group optimizes for (e.g. conversions, link_clicks, reach).
   */
  optimization_goal?: string;

  /**
   * 'automatic' (Advantage+) or a list of { platform, positions }. Omit positions to
   * target all of a platform's.
   *
   * Valid positions per platform:
   *
   * - `facebook`: `feed`, `right_hand_column`, `marketplace`, `search`,
   *   `profile_feed`, `notification`, `story`, `instream_video`, `facebook_reels`,
   *   `facebook_reels_overlay`, `biz_disco_feed`
   * - `instagram`: `stream`, `story`, `explore`, `explore_home`, `reels`,
   *   `profile_feed`, `profile_reels`, `ig_search`
   * - `messenger`: `story`
   * - `audience_network`: `classic`, `rewarded_video`
   * - `threads`: `threads_stream`
   * - `whatsapp`: `status`
   */
  placements?: unknown;

  /**
   * Geo targeting: { include / exclude: { countries (ISO 3166-1), regions
   * (states/provinces as ISO 3166-2, e.g. US-CA), cities (keyed), zips } }.
   */
  regions?: unknown;

  /**
   * Schedule start, ISO 8601.
   */
  starts_at?: string;

  /**
   * Initial status (default: active).
   */
  status?: 'active' | 'paused';

  /**
   * The display name of the ad group.
   */
  title?: string;
}

export interface AdGroupRetrieveParams {
  /**
   * Start of the stats window.
   */
  stats_from?: string;

  /**
   * End of the stats window.
   */
  stats_to?: string;

  /**
   * IANA timezone the stats window is interpreted in. Defaults to UTC.
   */
  time_zone?: string;
}

export interface AdGroupUpdateParams {
  /**
   * Saved-audience targeting: { include, exclude } arrays of audience IDs.
   * Incompatible with demographics.automatic (Advantage+).
   */
  audiences?: unknown;

  /**
   * Bid strategy.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * Ad-set budget in dollars (ABO only; omit under CBO).
   */
  budget_amount?: number;

  /**
   * Whether the budget is daily or lifetime.
   */
  budget_type?: 'daily' | 'lifetime';

  /**
   * The pixel event optimized for. A standard event, or any custom pixel event name.
   */
  conversion_event?:
    | 'purchase'
    | 'add_to_cart'
    | 'initiated_checkout'
    | 'add_payment_info'
    | 'complete_registration'
    | 'lead'
    | 'content_view'
    | 'search'
    | 'contact'
    | 'customize_product'
    | 'donate'
    | 'find_location'
    | 'schedule'
    | 'start_trial'
    | 'submit_application'
    | 'subscribe'
    | (string & {})
    | null;

  /**
   * Where results happen: website (conversions), profile (IG/FB engagement),
   * messaging (DM), on_ad (engagement on the ad, surface follows the optimization
   * goal), or the lead destinations (instant_forms, instant_forms_and_messenger,
   * website_and_instant_forms). The lead form itself is set on the ad.
   */
  conversion_location?:
    | 'website'
    | 'profile'
    | 'messaging'
    | 'on_ad'
    | 'instant_forms'
    | 'instant_forms_and_messenger'
    | 'website_and_instant_forms';

  /**
   * Demographic targeting: { automatic, minimum_age, maximum_age, gender }.
   */
  demographics?: unknown;

  /**
   * Target/cap cost for average_target / maximum_target.
   */
  desired_cost_per_result?: number;

  /**
   * Device targeting: { platforms, operating_systems: [{ os, minimum_version }] }.
   */
  devices?: unknown;

  /**
   * Schedule end, ISO 8601.
   */
  ends_at?: string;

  /**
   * { maximum_impressions, per_days } — only valid for reach optimization.
   */
  frequency_cap?: unknown;

  /**
   * Languages to target as ISO 639 codes (e.g. en, es). Empty/omitted = all
   * languages.
   */
  languages?: Array<string>;

  /**
   * Required when conversion_location is messaging: which apps to message on.
   * Combinations map to the matching Meta destination.
   */
  message_apps?: Array<'messenger' | 'instagram' | 'whatsapp'>;

  /**
   * Daily spend floor within the budget.
   */
  minimum_daily_spend?: number;

  /**
   * What the ad group optimizes for (e.g. conversions, link_clicks, reach).
   */
  optimization_goal?: string;

  /**
   * 'automatic' (Advantage+) or a list of { platform, positions }. Omit positions to
   * target all of a platform's.
   *
   * Valid positions per platform:
   *
   * - `facebook`: `feed`, `right_hand_column`, `marketplace`, `search`,
   *   `profile_feed`, `notification`, `story`, `instream_video`, `facebook_reels`,
   *   `facebook_reels_overlay`, `biz_disco_feed`
   * - `instagram`: `stream`, `story`, `explore`, `explore_home`, `reels`,
   *   `profile_feed`, `profile_reels`, `ig_search`
   * - `messenger`: `story`
   * - `audience_network`: `classic`, `rewarded_video`
   * - `threads`: `threads_stream`
   * - `whatsapp`: `status`
   */
  placements?: unknown;

  /**
   * Geo targeting: { include / exclude: { countries (ISO 3166-1), regions
   * (states/provinces as ISO 3166-2, e.g. US-CA), cities (keyed), zips } }.
   */
  regions?: unknown;

  /**
   * Schedule start, ISO 8601.
   */
  starts_at?: string;

  /**
   * Initial status (default: active).
   */
  status?: 'active' | 'paused';

  /**
   * The display name of the ad group.
   */
  title?: string;
}

export declare namespace AdGroups {
  export {
    type AdGroup as AdGroup,
    type AdGroupDeleteResponse as AdGroupDeleteResponse,
    type AdGroupsCursorPage as AdGroupsCursorPage,
    type AdGroupListParams as AdGroupListParams,
    type AdGroupCreateParams as AdGroupCreateParams,
    type AdGroupRetrieveParams as AdGroupRetrieveParams,
    type AdGroupUpdateParams as AdGroupUpdateParams,
  };
}
