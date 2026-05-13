// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Ad reports
 */
export class AdReports extends APIResource {
  /**
   * Performance report for an ad campaign, ad group, or ad. Returns aggregate totals
   * and, when `breakdown` is set, a per-bucket time series at that grain. Exactly
   * one of `adCampaignId`, `adGroupId`, or `adId` must be provided.
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
 * An ads performance report. Returns a summary; the time-series breakdown is
 * included when the `breakdown` arg is set on `adReport`.
 */
export interface AdReportRetrieveResponse {
  /**
   * Per-bucket breakdown over the date range, ordered ascending by `bucketStart`.
   * `null` when the `breakdown` arg on `adReport` is omitted; otherwise contains
   * rows at the requested grain (`daily` or `hourly`).
   */
  breakdown: Array<AdReportRetrieveResponse.Breakdown> | null;

  /**
   * Aggregate totals and rates over the date range.
   */
  summary: AdReportRetrieveResponse.Summary;
}

export namespace AdReportRetrieveResponse {
  /**
   * Per-bucket ad performance for an ad campaign, ad group, or ad. Bucket grain is
   * set by the `ad_report` query's `granularity` argument.
   */
  export interface Breakdown {
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
     * The bucket size of this row (`daily` or `hourly`).
     */
    granularity: 'daily' | 'hourly';

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
    result_label_key:
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
      | 'website_schedules'
      | 'website_submit_applications'
      | 'custom'
      | null;

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
     * Total clicks over the date range.
     */
    clicks: number;

    /**
     * Spend divided by `resultCount`. Null when there are no results.
     */
    cost_per_result: number | null;

    /**
     * Cost per click in the requested reporting currency.
     */
    cpc: number;

    /**
     * Cost per thousand impressions in the requested reporting currency.
     */
    cpm: number | null;

    /**
     * Click-through rate (clicks / impressions).
     */
    ctr: number;

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
    result_label_key:
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
      | 'website_schedules'
      | 'website_submit_applications'
      | 'custom'
      | null;

    /**
     * Advertiser-defined label for the result when `resultLabelKey` is `custom`.
     */
    result_label_override: string | null;

    /**
     * Alias for `purchaseRoas` — return on ad spend for purchases, as reported by the
     * external ad platform.
     */
    roas: number | null;

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
   * The unique identifier of an ad campaign. Mutually exclusive with `adGroupId` and
   * `adId`.
   */
  ad_campaign_id?: string | null;

  /**
   * The unique identifier of an ad group. Mutually exclusive with `adCampaignId` and
   * `adId`.
   */
  ad_group_id?: string | null;

  /**
   * The unique identifier of an ad. Mutually exclusive with `adCampaignId` and
   * `adGroupId`.
   */
  ad_id?: string | null;

  /**
   * Bucket size for external ad stat rows.
   */
  breakdown?: 'daily' | 'hourly' | null;

  /**
   * ISO 4217 currency code to report `spend` in. Defaults to the company's ads
   * reporting currency.
   */
  currency?: string | null;
}

export declare namespace AdReports {
  export {
    type AdReportRetrieveResponse as AdReportRetrieveResponse,
    type AdReportRetrieveParams as AdReportRetrieveParams,
  };
}
