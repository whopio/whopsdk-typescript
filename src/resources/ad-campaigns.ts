// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdGroupsAPI from './ad-groups';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ad campaigns
 */
export class AdCampaigns extends APIResource {
  /**
   * Retrieves a single ad campaign by its unique identifier.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.retrieve(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AdCampaignRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaign> {
    return this._client.get(path`/ad_campaigns/${id}`, { query, ...options });
  }

  /**
   * Updates an ad campaign synchronously and returns it immediately (local-first).
   * The platform push runs in the background; any errors surface on the dashboard.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.update(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: AdCampaignUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaign> {
    return this._client.patch(path`/ad_campaigns/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of ad campaigns for a company, with optional filtering
   * by status, and creation date.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const adCampaignListResponse of client.adCampaigns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AdCampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdCampaignListResponsesCursorPage, AdCampaignListResponse> {
    return this._client.getAPIList('/ad_campaigns', CursorPage<AdCampaignListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Pauses an ad campaign, optionally until a specific date.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.pause(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  pause(id: string, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.post(path`/ad_campaigns/${id}/pause`, options);
  }

  /**
   * Resumes a paused ad campaign.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.unpause(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  unpause(id: string, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.post(path`/ad_campaigns/${id}/unpause`, options);
  }
}

export type AdCampaignListResponsesCursorPage = CursorPage<AdCampaignListResponse>;

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaign {
  /**
   * The unique identifier for this ad campaign.
   */
  id: string;

  /**
   * Total budget in dollars.
   */
  budget: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type: AdGroupsAPI.AdBudgetType | null;

  /**
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  click_through_rate: number;

  /**
   * Total clicks on the campaign's ads in the stats window.
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
   * When the ad campaign was created.
   */
  created_at: string;

  /**
   * Average number of times each person saw an ad (impressions / reach), as reported
   * by the platform.
   */
  frequency: number | null;

  /**
   * Total impressions (views) on the campaign's ads in the stats window.
   */
  impressions: number;

  /**
   * Open platform issues affecting this campaign and its descendant ad groups and
   * ads, deduplicated per object. Empty when there are none.
   */
  issues: Array<AdCampaign.Issue>;

  /**
   * Number of Whop pixel-attributed leads (last-click) in the stats window.
   */
  leads: number;

  /**
   * The external ad platform this campaign is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignPlatform;

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
   * Current status of the campaign.
   */
  status: AdCampaignStatus;

  /**
   * The campaign name shown in the Whop dashboard.
   */
  title: string;

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
   * When the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaign {
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
 * The platforms where an ad campaign can run.
 */
export type AdCampaignPlatform = 'meta' | 'tiktok';

/**
 * The status of an ad campaign.
 */
export type AdCampaignStatus = 'active' | 'paused' | 'payment_failed' | 'draft' | 'in_review' | 'flagged';

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignListResponse {
  /**
   * The unique identifier for this ad campaign.
   */
  id: string;

  /**
   * Total budget in dollars.
   */
  budget: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type: AdGroupsAPI.AdBudgetType | null;

  /**
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  click_through_rate: number;

  /**
   * Total clicks on the campaign's ads in the stats window.
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
   * When the ad campaign was created.
   */
  created_at: string;

  /**
   * Average number of times each person saw an ad (impressions / reach), as reported
   * by the platform.
   */
  frequency: number | null;

  /**
   * Total impressions (views) on the campaign's ads in the stats window.
   */
  impressions: number;

  /**
   * Open platform issues affecting this campaign and its descendant ad groups and
   * ads, deduplicated per object. Empty when there are none.
   */
  issues: Array<AdCampaignListResponse.Issue>;

  /**
   * Number of Whop pixel-attributed leads (last-click) in the stats window.
   */
  leads: number;

  /**
   * The external ad platform this campaign is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignPlatform;

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
   * Current status of the campaign.
   */
  status: AdCampaignStatus;

  /**
   * The campaign name shown in the Whop dashboard.
   */
  title: string;

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
   * When the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignListResponse {
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

export interface AdCampaignRetrieveParams {
  /**
   * Inclusive start of the window for the campaign's metric fields (spend,
   * impressions, …). Omit both statsFrom and statsTo for all-time stats.
   */
  stats_from?: string | null;

  /**
   * Inclusive end of the window for the campaign's metric fields. Omit both
   * statsFrom and statsTo for all-time stats.
   */
  stats_to?: string | null;
}

export interface AdCampaignUpdateParams {
  /**
   * The campaign budget in dollars. The interpretation (daily or lifetime) follows
   * the campaign's existing budget type.
   */
  budget?: number | null;

  /**
   * The advertiser's desired cost per result in dollars.
   */
  desired_cpr?: number | null;
}

export interface AdCampaignListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of the company to list ad campaigns for.
   */
  company_id?: string | null;

  /**
   * Only return ad campaigns created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return ad campaigns created before this timestamp.
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
   * Case-insensitive substring match against the campaign title or ID.
   */
  query?: string | null;

  /**
   * Inclusive start of the window for each campaign's metric fields (spend,
   * impressions, …). Omit both statsFrom and statsTo for all-time stats.
   */
  stats_from?: string | null;

  /**
   * Inclusive end of the window for each campaign's metric fields. Omit both
   * statsFrom and statsTo for all-time stats.
   */
  stats_to?: string | null;

  /**
   * The status of an ad campaign.
   */
  status?: AdCampaignStatus | null;
}

export declare namespace AdCampaigns {
  export {
    type AdCampaign as AdCampaign,
    type AdCampaignPlatform as AdCampaignPlatform,
    type AdCampaignStatus as AdCampaignStatus,
    type AdCampaignListResponse as AdCampaignListResponse,
    type AdCampaignListResponsesCursorPage as AdCampaignListResponsesCursorPage,
    type AdCampaignRetrieveParams as AdCampaignRetrieveParams,
    type AdCampaignUpdateParams as AdCampaignUpdateParams,
    type AdCampaignListParams as AdCampaignListParams,
  };
}
