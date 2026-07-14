// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdReportsAPI from './ad-reports';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AdReports extends APIResource {
  /**
   * Performance report for a company, ad campaigns, ad groups, or ads. Always
   * returns aggregate `summary` totals summed across the scope. Set `granularity` to
   * additionally get a time series, or set `breakdown` (`campaign`/`ad_group`/`ad`)
   * to additionally get per-entity rows inside the requested scope. Exactly one of
   * `companyId`, `adCampaignIds`, `adGroupIds`, or `adIds` must be provided.
   *
   * Required permissions:
   *
   * - `ad_campaign:stats:read`
   */
  retrieve(query: AdReportRetrieveParams, options?: RequestOptions): APIPromise<AdReportRetrieveResponse> {
    return this._client.get('/ad_reports', { query, ...options });
  }
}

/**
 * Bucket size for external ad stat rows.
 */
export type Granularities = 'hourly' | 'daily' | 'weekly' | 'monthly';

/**
 * Types of optimization results tracked from external ad platforms
 */
export type ResultLabelKeys =
  | 'app_installs'
  | 'messaging_conversations_started'
  | 'post_engagement'
  | 'event_responses'
  | 'impressions'
  | 'website_purchases'
  | 'landing_page_views'
  | 'leads'
  | 'link_clicks'
  | 'quality_calls'
  | 'appointments_booked'
  | 'messaging_purchases'
  | 'page_likes'
  | 'instagram_profile_visits'
  | 'reach'
  | 'reminders_set'
  | 'new_subscribers'
  | 'video_views'
  | 'registrations'
  | 'content_views'
  | 'searches'
  | 'adds_to_cart'
  | 'adds_to_wishlist'
  | 'adds_of_payment_info'
  | 'checkouts_initiated'
  | 'website_schedules'
  | 'website_submit_applications'
  | 'website_trials_started'
  | 'website_subscriptions'
  | 'website_contacts'
  | 'website_donations'
  | 'website_find_locations'
  | 'website_product_customizations'
  | 'custom';

/**
 * An ads performance report. Always returns a summary. The `granularity` field
 * contains a per-bucket time series when the `granularity` arg is set; the
 * `breakdown` field contains per-entity rows when the `breakdown` arg is set.
 */
export interface AdReportRetrieveResponse {
  /**
   * Per-entity rows over the date range. `null` when the `breakdown` arg on
   * `adReport` is omitted; otherwise contains one row per ad campaign, ad group, or
   * ad inside the requested scope at the requested level.
   */
  breakdown: Array<AdReportRetrieveResponse.Breakdown> | null;

  /**
   * Per-bucket time series over the date range, ordered ascending by `bucketStart`.
   * `null` when the `granularity` arg on `adReport` is omitted; otherwise contains
   * rows at the requested grain (`daily` or `hourly`).
   */
  granularity: Array<AdReportRetrieveResponse.Granularity> | null;

  /**
   * Aggregate totals and rates over the date range.
   */
  summary: AdReportRetrieveResponse.Summary;
}

export namespace AdReportRetrieveResponse {
  /**
   * Per-entity ad performance row. Returned when the `breakdown` arg on `adReport`
   * is set.
   */
  export interface Breakdown {
    /**
     * Tag of the entity (ad campaign, ad group, or ad).
     */
    id: string;

    /**
     * Per-bucket time series for this entity over the date range, ordered ascending by
     * `bucketStart`. `null` when the `granularity` arg on `adReport` is omitted;
     * otherwise contains rows at the requested grain (`daily` or `hourly`).
     */
    granularity: Array<Breakdown.Granularity> | null;

    /**
     * The entity level of this row — matches the `breakdown` arg.
     */
    level: 'campaign' | 'ad_group' | 'ad';

    /**
     * Display name of the entity, when available.
     */
    name: string | null;

    /**
     * Aggregate totals and rates for this entity over the date range.
     */
    summary: Breakdown.Summary;
  }

  export namespace Breakdown {
    /**
     * Per-bucket ad performance for an ad campaign, ad group, or ad. Bucket grain is
     * set by the `ad_report` query's `granularity` argument.
     */
    export interface Granularity {
      /**
       * The bucket's start time as a real UTC instant. `(statDate, statHour)` resolved
       * in the ad account's reporting timezone — render this in the viewer's local
       * timezone.
       */
      bucket_start: string;

      /**
       * Clicks in this bucket.
       */
      clicks: number;

      /**
       * The bucket size of this row (`hourly`, `daily`, `weekly`, or `monthly`).
       */
      granularity: AdReportsAPI.Granularities;

      /**
       * Impressions in this bucket.
       */
      impressions: number;

      /**
       * Unique users reached in this bucket. Always `0` for hourly rows (Meta does not
       * return reach at hourly grain).
       */
      reach: number;

      /**
       * Count of the primary optimization result in this bucket.
       */
      result_count: number | null;

      /**
       * Types of optimization results tracked from external ad platforms
       */
      result_label_key: AdReportsAPI.ResultLabelKeys | null;

      /**
       * Advertiser-defined label for the result when `resultLabelKey` is `custom`.
       */
      result_label_override: string | null;

      /**
       * Charged spend in this bucket in the requested reporting currency — the amount
       * billed including platform fees, not the platform-side net spend.
       */
      spend: number;

      /**
       * Currency of the `spend` value.
       */
      spend_currency: Shared.Currency;

      /**
       * The date these stats cover (midnight UTC). For hourly rows, see `statHour` and
       * `bucketStart`.
       */
      stat_date: string;

      /**
       * Hour of the day in the ad account's reporting timezone (0-23). `null` for daily
       * rows.
       */
      stat_hour: number | null;
    }

    /**
     * Aggregate totals and rates for this entity over the date range.
     */
    export interface Summary {
      /**
       * Click-through rate (clicks / impressions).
       */
      click_through_rate: number;

      /**
       * Total clicks over the date range.
       */
      clicks: number;

      /**
       * Cost per click in the requested reporting currency.
       */
      cost_per_click: number;

      /**
       * Cost per thousand impressions in the requested reporting currency.
       */
      cost_per_mille: number | null;

      /**
       * Spend divided by `resultCount`. Null when there are no results.
       */
      cost_per_result: number | null;

      /**
       * Average number of times each reached user saw an ad.
       */
      frequency: number | null;

      /**
       * Total impressions over the date range.
       */
      impressions: number;

      /**
       * Unique users reached, deduplicated by the external ad platform.
       */
      reach: number;

      /**
       * Count of the campaign's primary optimization result (purchases, clicks, etc.) —
       * see `resultLabelKey`.
       */
      result_count: number | null;

      /**
       * Types of optimization results tracked from external ad platforms
       */
      result_label_key: AdReportsAPI.ResultLabelKeys | null;

      /**
       * Advertiser-defined label for the result when `resultLabelKey` is `custom`.
       */
      result_label_override: string | null;

      /**
       * Alias for `purchaseReturnOnAdSpend` — return on ad spend for purchases, as
       * reported by the external ad platform.
       */
      return_on_ad_spend: number | null;

      /**
       * Total spend over the date range in the requested reporting currency.
       */
      spend: number;

      /**
       * The available currencies on the platform
       */
      spend_currency: Shared.Currency | null;
    }
  }

  /**
   * Per-bucket ad performance for an ad campaign, ad group, or ad. Bucket grain is
   * set by the `ad_report` query's `granularity` argument.
   */
  export interface Granularity {
    /**
     * The bucket's start time as a real UTC instant. `(statDate, statHour)` resolved
     * in the ad account's reporting timezone — render this in the viewer's local
     * timezone.
     */
    bucket_start: string;

    /**
     * Clicks in this bucket.
     */
    clicks: number;

    /**
     * The bucket size of this row (`hourly`, `daily`, `weekly`, or `monthly`).
     */
    granularity: AdReportsAPI.Granularities;

    /**
     * Impressions in this bucket.
     */
    impressions: number;

    /**
     * Unique users reached in this bucket. Always `0` for hourly rows (Meta does not
     * return reach at hourly grain).
     */
    reach: number;

    /**
     * Count of the primary optimization result in this bucket.
     */
    result_count: number | null;

    /**
     * Types of optimization results tracked from external ad platforms
     */
    result_label_key: AdReportsAPI.ResultLabelKeys | null;

    /**
     * Advertiser-defined label for the result when `resultLabelKey` is `custom`.
     */
    result_label_override: string | null;

    /**
     * Charged spend in this bucket in the requested reporting currency — the amount
     * billed including platform fees, not the platform-side net spend.
     */
    spend: number;

    /**
     * Currency of the `spend` value.
     */
    spend_currency: Shared.Currency;

    /**
     * The date these stats cover (midnight UTC). For hourly rows, see `statHour` and
     * `bucketStart`.
     */
    stat_date: string;

    /**
     * Hour of the day in the ad account's reporting timezone (0-23). `null` for daily
     * rows.
     */
    stat_hour: number | null;
  }

  /**
   * Aggregate totals and rates over the date range.
   */
  export interface Summary {
    /**
     * Click-through rate (clicks / impressions).
     */
    click_through_rate: number;

    /**
     * Total clicks over the date range.
     */
    clicks: number;

    /**
     * Cost per click in the requested reporting currency.
     */
    cost_per_click: number;

    /**
     * Cost per thousand impressions in the requested reporting currency.
     */
    cost_per_mille: number | null;

    /**
     * Spend divided by `resultCount`. Null when there are no results.
     */
    cost_per_result: number | null;

    /**
     * Average number of times each reached user saw an ad.
     */
    frequency: number | null;

    /**
     * Total impressions over the date range.
     */
    impressions: number;

    /**
     * Unique users reached, deduplicated by the external ad platform.
     */
    reach: number;

    /**
     * Count of the campaign's primary optimization result (purchases, clicks, etc.) —
     * see `resultLabelKey`.
     */
    result_count: number | null;

    /**
     * Types of optimization results tracked from external ad platforms
     */
    result_label_key: AdReportsAPI.ResultLabelKeys | null;

    /**
     * Advertiser-defined label for the result when `resultLabelKey` is `custom`.
     */
    result_label_override: string | null;

    /**
     * Alias for `purchaseReturnOnAdSpend` — return on ad spend for purchases, as
     * reported by the external ad platform.
     */
    return_on_ad_spend: number | null;

    /**
     * Total spend over the date range in the requested reporting currency.
     */
    spend: number;

    /**
     * The available currencies on the platform
     */
    spend_currency: Shared.Currency | null;
  }
}

export interface AdReportRetrieveParams {
  /**
   * Inclusive start of the reporting window.
   */
  from: string;

  /**
   * Inclusive end of the reporting window.
   */
  to: string;

  /**
   * Scope the report to these ad campaigns (max 100); stats are summed across them.
   * Mutually exclusive with `companyId`, `adGroupIds`, and `adIds`.
   */
  ad_campaign_ids?: Array<string> | null;

  /**
   * Scope the report to these ad groups (max 100); stats are summed across them.
   * Mutually exclusive with `companyId`, `adCampaignIds`, and `adIds`.
   */
  ad_group_ids?: Array<string> | null;

  /**
   * Scope the report to these ads (max 100); stats are summed across them. Mutually
   * exclusive with `companyId`, `adCampaignIds`, and `adGroupIds`.
   */
  ad_ids?: Array<string> | null;

  /**
   * Entity level to group an ad report by.
   */
  breakdown?: 'campaign' | 'ad_group' | 'ad' | null;

  /**
   * The unique identifier of a company. Mutually exclusive with `adCampaignIds`,
   * `adGroupIds`, and `adIds`. Use with `breakdown` to fan out across every
   * campaign, ad group, or ad in the company without paging.
   */
  company_id?: string | null;

  /**
   * ISO 4217 currency code to report `spend` in. Defaults to the company's ads
   * reporting currency.
   */
  currency?: string | null;

  /**
   * Bucket size for external ad stat rows.
   */
  granularity?: Granularities | null;
}

export declare namespace AdReports {
  export {
    type Granularities as Granularities,
    type ResultLabelKeys as ResultLabelKeys,
    type AdReportRetrieveResponse as AdReportRetrieveResponse,
    type AdReportRetrieveParams as AdReportRetrieveParams,
  };
}
