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
   * and an optional per-day breakdown. Exactly one of `adCampaignId`, `adGroupId`,
   * or `adId` must be provided.
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
 * An ads performance report. Returns a summary; daily breakdown is included when
 * `includeDaily` is true.
 */
export interface AdReportRetrieveResponse {
  /**
   * Per-day breakdown over the date range, ordered ascending. Null when
   * `includeDaily` is false.
   */
  daily: Array<AdReportRetrieveResponse.Daily> | null;

  /**
   * Aggregate totals and rates over the date range.
   */
  summary: AdReportRetrieveResponse.Summary;
}

export namespace AdReportRetrieveResponse {
  /**
   * Per-day ad performance for an ad campaign, ad group, or ad.
   */
  export interface Daily {
    /**
     * Clicks on this date.
     */
    clicks: number;

    /**
     * Impressions on this date.
     */
    impressions: number;

    /**
     * Unique users reached on this date.
     */
    reach: number;

    /**
     * Count of the primary optimization result on this date.
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
     * Charged spend on this date in the requested reporting currency — the amount
     * billed including platform fees, not the platform-side net spend.
     */
    spend: number;

    /**
     * Currency of the `spend` value.
     */
    spend_currency: Shared.Currency;

    /**
     * The date these stats cover (midnight UTC).
     */
    stat_date: string;
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
   * ISO 4217 currency code to report `spend` in. Defaults to the company's ads
   * reporting currency.
   */
  currency?: string | null;

  /**
   * When true, includes a per-day breakdown alongside the summary.
   */
  include_daily?: boolean | null;
}

export declare namespace AdReports {
  export {
    type AdReportRetrieveResponse as AdReportRetrieveResponse,
    type AdReportRetrieveParams as AdReportRetrieveParams,
  };
}
