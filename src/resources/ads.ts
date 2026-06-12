// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdCampaignsAPI from './ad-campaigns';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ads
 */
export class Ads extends APIResource {
  /**
   * Retrieve an ad by its unique identifier.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   */
  retrieve(
    id: string,
    query: AdRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Ad> {
    return this._client.get(path`/ads/${id}`, { query, ...options });
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

  /**
   * Pauses an ad.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `ad_campaign:basic:read`
   */
  pause(id: string, options?: RequestOptions): APIPromise<Ad> {
    return this._client.post(path`/ads/${id}/pause`, options);
  }

  /**
   * Resumes a paused ad.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `ad_campaign:basic:read`
   */
  unpause(id: string, options?: RequestOptions): APIPromise<Ad> {
    return this._client.post(path`/ads/${id}/unpause`, options);
  }
}

export type AdListResponsesCursorPage = CursorPage<AdListResponse>;

/**
 * An ad belonging to an ad group.
 */
export interface Ad {
  /**
   * The unique identifier for this ad.
   */
  id: string;

  /**
   * The ad campaign this ad belongs to.
   */
  ad_campaign: Ad.AdCampaign;

  /**
   * The parent ad group this ad belongs to.
   */
  ad_group: Ad.AdGroup;

  /**
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  click_through_rate: number;

  /**
   * Total clicks on this ad in the stats window.
   */
  clicks: number;

  /**
   * Cost per click in dollars (spend / clicks). 0 when there are no clicks.
   */
  cost_per_click: number;

  /**
   * Cost in dollars per Whop pixel-attributed lead (spend / leads). 0 when leads are
   * tracked but none happened yet; null when leads are not a goal and none were
   * attributed.
   */
  cost_per_lead: number | null;

  /**
   * Cost per 1,000 impressions in dollars (spend / impressions × 1000). 0 when there
   * are no impressions.
   */
  cost_per_mille: number;

  /**
   * Cost in dollars per Whop pixel-attributed purchase (spend / purchases). 0 when
   * purchases are tracked but none happened yet; null when purchases are not a goal
   * and none were attributed.
   */
  cost_per_purchase: number | null;

  /**
   * Cost in dollars per optimization result (spend / results). 0 when a result is
   * being optimized for but none happened yet; null when nothing is being optimized
   * for.
   */
  cost_per_result: number | null;

  /**
   * When the ad was created.
   */
  created_at: string;

  /**
   * Average number of times each person saw an ad (impressions / reach), as reported
   * by the platform.
   */
  frequency: number | null;

  /**
   * Total impressions (views) on this ad in the stats window.
   */
  impressions: number;

  /**
   * Open platform issues affecting this ad, deduplicated per object. Empty when
   * there are none.
   */
  issues: Array<Ad.Issue>;

  /**
   * Number of Whop pixel-attributed leads (last-click) in the stats window.
   */
  leads: number;

  /**
   * The external ad platform this ad is running on (e.g., meta, tiktok).
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
   * Return on ad spend as a ratio (purchaseValue / spend) — 2.5 means $2.50 of
   * attributed purchase value per $1 spent. 0 when there is no spend.
   */
  return_on_ad_spend: number;

  /**
   * Amount charged in dollars in the stats window.
   */
  spend: number;

  /**
   * The available currencies on the platform
   */
  spend_currency: Shared.Currency | null;

  /**
   * Current delivery status of the ad.
   */
  status: ExternalAdStatus;

  /**
   * The display title of the ad. Falls back to the creative set caption when unset.
   */
  title: string | null;

  /**
   * Unique click-through rate as a fraction of impressions (unique clicks /
   * impressions, 0–1).
   */
  unique_click_through_rate: number | null;

  /**
   * Unique clicks (deduplicated by the platform) in the stats window.
   */
  unique_clicks: number;

  /**
   * When the ad was last updated.
   */
  updated_at: string;
}

export namespace Ad {
  /**
   * The ad campaign this ad belongs to.
   */
  export interface AdCampaign {
    /**
     * The unique identifier for this ad campaign.
     */
    id: string;
  }

  /**
   * The parent ad group this ad belongs to.
   */
  export interface AdGroup {
    /**
     * The unique identifier for this ad group.
     */
    id: string;
  }

  /**
   * A platform-reported issue on an ad object (rejection, policy flag, etc.).
   */
  export interface Issue {
    /**
     * Whop's canonical category that a raw platform issue is bucketed into.
     */
    category: 'policy_rejection' | 'creative_media' | 'audience_targeting' | 'ad_volume_limit' | null;

    /**
     * When the issue was first reported.
     */
    created_at: string;

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
     * The kind of ad object this issue is on: `ad`, `ad_group`, or `ad_campaign`.
     * Pairs with `resourceId`.
     */
    resource_type: string;

    /**
     * Finer-grained sub-bucket within the category (e.g. the specific Meta policy for
     * a rejection).
     */
    subtype: string | null;
  }
}

/**
 * The status of an external ad.
 */
export type ExternalAdStatus = 'active' | 'paused' | 'inactive' | 'in_review' | 'rejected' | 'flagged';

/**
 * An ad belonging to an ad group.
 */
export interface AdListResponse {
  /**
   * The unique identifier for this ad.
   */
  id: string;

  /**
   * The ad campaign this ad belongs to.
   */
  ad_campaign: AdListResponse.AdCampaign;

  /**
   * The parent ad group this ad belongs to.
   */
  ad_group: AdListResponse.AdGroup;

  /**
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  click_through_rate: number;

  /**
   * Total clicks on this ad in the stats window.
   */
  clicks: number;

  /**
   * Cost per click in dollars (spend / clicks). 0 when there are no clicks.
   */
  cost_per_click: number;

  /**
   * Cost in dollars per Whop pixel-attributed lead (spend / leads). 0 when leads are
   * tracked but none happened yet; null when leads are not a goal and none were
   * attributed.
   */
  cost_per_lead: number | null;

  /**
   * Cost per 1,000 impressions in dollars (spend / impressions × 1000). 0 when there
   * are no impressions.
   */
  cost_per_mille: number;

  /**
   * Cost in dollars per Whop pixel-attributed purchase (spend / purchases). 0 when
   * purchases are tracked but none happened yet; null when purchases are not a goal
   * and none were attributed.
   */
  cost_per_purchase: number | null;

  /**
   * Cost in dollars per optimization result (spend / results). 0 when a result is
   * being optimized for but none happened yet; null when nothing is being optimized
   * for.
   */
  cost_per_result: number | null;

  /**
   * When the ad was created.
   */
  created_at: string;

  /**
   * Average number of times each person saw an ad (impressions / reach), as reported
   * by the platform.
   */
  frequency: number | null;

  /**
   * Total impressions (views) on this ad in the stats window.
   */
  impressions: number;

  /**
   * Open platform issues affecting this ad, deduplicated per object. Empty when
   * there are none.
   */
  issues: Array<AdListResponse.Issue>;

  /**
   * Number of Whop pixel-attributed leads (last-click) in the stats window.
   */
  leads: number;

  /**
   * The external ad platform this ad is running on (e.g., meta, tiktok).
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
   * Return on ad spend as a ratio (purchaseValue / spend) — 2.5 means $2.50 of
   * attributed purchase value per $1 spent. 0 when there is no spend.
   */
  return_on_ad_spend: number;

  /**
   * Amount charged in dollars in the stats window.
   */
  spend: number;

  /**
   * The available currencies on the platform
   */
  spend_currency: Shared.Currency | null;

  /**
   * Current delivery status of the ad.
   */
  status: ExternalAdStatus;

  /**
   * The display title of the ad. Falls back to the creative set caption when unset.
   */
  title: string | null;

  /**
   * Unique click-through rate as a fraction of impressions (unique clicks /
   * impressions, 0–1).
   */
  unique_click_through_rate: number | null;

  /**
   * Unique clicks (deduplicated by the platform) in the stats window.
   */
  unique_clicks: number;

  /**
   * When the ad was last updated.
   */
  updated_at: string;
}

export namespace AdListResponse {
  /**
   * The ad campaign this ad belongs to.
   */
  export interface AdCampaign {
    /**
     * The unique identifier for this ad campaign.
     */
    id: string;
  }

  /**
   * The parent ad group this ad belongs to.
   */
  export interface AdGroup {
    /**
     * The unique identifier for this ad group.
     */
    id: string;
  }

  /**
   * A platform-reported issue on an ad object (rejection, policy flag, etc.).
   */
  export interface Issue {
    /**
     * Whop's canonical category that a raw platform issue is bucketed into.
     */
    category: 'policy_rejection' | 'creative_media' | 'audience_targeting' | 'ad_volume_limit' | null;

    /**
     * When the issue was first reported.
     */
    created_at: string;

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
     * The kind of ad object this issue is on: `ad`, `ad_group`, or `ad_campaign`.
     * Pairs with `resourceId`.
     */
    resource_type: string;

    /**
     * Finer-grained sub-bucket within the category (e.g. the specific Meta policy for
     * a rejection).
     */
    subtype: string | null;
  }
}

export interface AdRetrieveParams {
  /**
   * Inclusive start of the window for the ad's metric fields (spend, impressions,
   * …). Omit both statsFrom and statsTo for all-time stats.
   */
  stats_from?: string | null;

  /**
   * Inclusive end of the window for the ad's metric fields. Omit both statsFrom and
   * statsTo for all-time stats.
   */
  stats_to?: string | null;
}

export interface AdListParams extends CursorPageParams {
  /**
   * Filter by ad campaign. Provide exactly one of ad_group_id, ad_campaign_id, or
   * company_id.
   */
  ad_campaign_id?: string | null;

  /**
   * Only return ads belonging to these ad campaigns (max 100). Can be combined with
   * companyId or used on its own.
   */
  ad_campaign_ids?: Array<string> | null;

  /**
   * Filter by ad group. Provide exactly one of ad_group_id, ad_campaign_id, or
   * company_id.
   */
  ad_group_id?: string | null;

  /**
   * Only return ads belonging to these ad groups (max 100). Can be combined with
   * companyId or used on its own.
   */
  ad_group_ids?: Array<string> | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter by campaign.
   */
  campaign_id?: string | null;

  /**
   * Filter by company. Provide exactly one of ad_group_id, ad_campaign_id, or
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
   * The fields the ads dashboard lists (campaigns, ad sets) can be ordered by. Stat
   * columns are computed over the provided stats date range.
   */
  order?:
    | 'created_at'
    | 'spend'
    | 'impressions'
    | 'clicks'
    | 'reach'
    | 'unique_clicks'
    | 'results'
    | 'click_through_rate'
    | 'cost_per_click'
    | 'cost_per_mille'
    | 'cost_per_result'
    | 'frequency'
    | 'return_on_ad_spend'
    | null;

  /**
   * Columns that the listAds query can sort by. Deprecated — use AdStatOrder.
   */
  order_by?: 'spend' | 'return_on_ad_spend' | 'roas' | null;

  /**
   * The direction of the sort.
   */
  order_direction?: Shared.Direction | null;

  /**
   * Case-insensitive substring match against the ad title or ID.
   */
  query?: string | null;

  /**
   * Inclusive start of the window for each ad's metric fields (spend, impressions,
   * …) and for stats-column sorting. Omit both statsFrom and statsTo for all-time
   * stats.
   */
  stats_from?: string | null;

  /**
   * Inclusive end of the window for each ad's metric fields and for stats-column
   * sorting. Omit both statsFrom and statsTo for all-time stats.
   */
  stats_to?: string | null;

  /**
   * The status of an external ad.
   */
  status?: ExternalAdStatus | null;
}

export declare namespace Ads {
  export {
    type Ad as Ad,
    type ExternalAdStatus as ExternalAdStatus,
    type AdListResponse as AdListResponse,
    type AdListResponsesCursorPage as AdListResponsesCursorPage,
    type AdRetrieveParams as AdRetrieveParams,
    type AdListParams as AdListParams,
  };
}
