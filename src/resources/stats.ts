// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Stats represent aggregated activity for an account over time. They help you understand revenue, transactions, disputes, members, referrals, and advertising performance across reporting periods like days, weeks, or months.
 *
 * Use the Stats API to list available metrics and their filterable properties, then retrieve time-series values for a date range.
 */
export class Stats extends APIResource {
  /**
   * Lists every metric you can query, with its unit and the properties you can
   * filter or break it down by.
   */
  list(options?: RequestOptions): APIPromise<StatListResponse> {
    return this._client.get('/stats', options);
  }

  /**
   * Retrieves a metric as a time series of points for an account over a date range.
   */
  retrieve(
    metric: string,
    query: StatRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<StatRetrieveResponse> {
    return this._client.get(path`/stats/${metric}`, { query, ...options });
  }
}

export interface StatRetrieveResponse {
  data: StatRetrieveResponse.Data;
}

export namespace StatRetrieveResponse {
  export interface Data {
    /**
     * One entry per period, oldest first.
     */
    points: Array<Data.Point>;

    /**
     * ISO currency the values are denominated in. Present for currency-unit metrics:
     * the convert_to currency, or usd.
     */
    currency?: string | null;
  }

  export namespace Data {
    export interface Point {
      /**
       * Unix timestamp (seconds) of the period start.
       */
      timestamp: number;

      /**
       * The metric's value for this period, in the metric's unit.
       */
      value: number | null;

      /**
       * Present only when broken down: one entry per property value in this period.
       */
      breakdown?: Array<Point.Breakdown>;
    }

    export namespace Point {
      export interface Breakdown {
        /**
         * The property value, for example usd or visa.
         */
        name: string;

        /**
         * The metric's value for this entry.
         */
        value: number | null;
      }
    }
  }
}

export interface StatListResponse {
  /**
   * The available metrics.
   */
  data: Array<StatListResponse.Data>;
}

export namespace StatListResponse {
  export interface Data {
    /**
     * A short description of what the metric measures.
     */
    description: string;

    /**
     * The metric's key. Pass it to GET /stats/{metric} to query its values.
     */
    key: string;

    /**
     * Human-readable display name for the metric.
     */
    name: string;

    /**
     * The properties you can use with this metric — pass one as a filter
     * (property=value) to narrow the series, or as breakdown_by=property to split it.
     */
    properties: Array<string>;

    /**
     * How to read the metric's values: count is an integer, currency is a decimal
     * amount, and percent is a number where 1.6 means 1.6%.
     */
    unit: 'count' | 'currency' | 'percent';

    /**
     * Snapshot metrics only: the trailing windows you can pass as snapshot_window, for
     * example 30d. Absent on live metrics, which use from/to instead.
     */
    windows?: Array<string>;
  }
}

export interface StatRetrieveParams {
  /**
   * Start of the date range (YYYY-MM-DD).
   */
  from: string;

  /**
   * End of the date range (YYYY-MM-DD).
   */
  to: string;

  /**
   * Filter to a single access level. Pair with breakdown_by=access_level. Available
   * on metrics that list access_level.
   */
  access_level?: string;

  /**
   * The account this query concerns, for example biz_AbC123.
   */
  account_id?: string;

  /**
   * Ad campaign ids (adcamp\_...) to scope the report to; stats are summed across
   * them. Available on metrics that list ad_campaign_ids.
   */
  ad_campaign_ids?: Array<string>;

  /**
   * Ad group ids (adgrp\_...) to scope the report to; stats are summed across them.
   * Available on metrics that list ad_group_ids.
   */
  ad_group_ids?: Array<string>;

  /**
   * Ad ids (ad\_...) to scope the report to; stats are summed across them. Available
   * on metrics that list ad_ids.
   */
  ad_ids?: Array<string>;

  /**
   * Split the metric out by one of its properties — each point gets a breakdown
   * array. For example breakdown_by=currency returns an entry for usd, an entry for
   * eur, and so on.
   */
  breakdown_by?: string;

  /**
   * Filter to a single card brand, for example visa. A refinement of
   * payment_method=card. Available on metrics that list card_network.
   */
  card_network?: string;

  /**
   * Filter to a single balance-activity category, for example payments. Pair with
   * breakdown_by=category to split the activity. Available on metrics that list
   * category.
   */
  category?: string;

  /**
   * Display currency for money metrics — every amount is converted into this ISO
   * currency using the exchange rate on each period's date. Defaults to usd. For the
   * ads metrics (ad_spend, ad_report), pass the account's ads reporting currency to
   * match the ad entity endpoints. Ignored when you filter or break down by currency
   * (those report the original transaction currency, unconverted).
   */
  convert_to?: string;

  /**
   * Filter to transactions made in this original ISO currency, for example eur —
   * reported in that currency, not converted. Pair with breakdown_by=currency to
   * split a metric by currency. Available on metrics that list currency.
   */
  currency?: string;

  /**
   * Filter to a single fee type. Pair with breakdown_by=fee_type to split fees by
   * type. Available on metrics that list fee_type.
   */
  fee_type?: string;

  /**
   * How wide each point is. Defaults to day. Snapshot metrics are day-only.
   */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'year';

  /**
   * Filter to a single most-recent member action. Pair with
   * breakdown_by=most_recent_action. Available on metrics that list
   * most_recent_action.
   */
  most_recent_action?: string;

  /**
   * Filter to a single payment method, for example card or crypto. Available on
   * metrics that list payment_method.
   */
  payment_method?: string;

  /**
   * Filter to a single product (access pass id), for example prod_AbC123. Pair with
   * breakdown_by=product. Available on metrics that list product.
   */
  product?: string;

  /**
   * Filter a referral metric to the businesses attributed to one person you
   * referred, for example user_AbC123. Available on metrics that list
   * referred_user_id.
   */
  referred_user_id?: string;

  /**
   * Filter to a single wallet-balance segment, for example available. Pair with
   * breakdown_by=segment to split the balance. Available on metrics that list
   * segment.
   */
  segment?: string;

  /**
   * Trailing window for snapshot metrics. Only accepted by snapshot metrics (each
   * lists its allowed windows in the catalog); defaults to the metric's first
   * supported window. Only 30d today.
   */
  snapshot_window?: '30d';

  /**
   * Filter to a single GMV source, for example payments. Pair with
   * breakdown_by=source to split by source. Available on metrics that list source.
   */
  source?: string;

  /**
   * Filter to a single membership status. Pair with breakdown_by=status. Available
   * on metrics that list status.
   */
  status?: string;

  /**
   * IANA time zone to bucket the series in, for example America/New_York. Defaults
   * to UTC. Not accepted by snapshot metrics, which are UTC only.
   */
  time_zone?: string;
}

export declare namespace Stats {
  export {
    type StatRetrieveResponse as StatRetrieveResponse,
    type StatListResponse as StatListResponse,
    type StatRetrieveParams as StatRetrieveParams,
  };
}
