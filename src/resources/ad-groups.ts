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
   * Updates an ad group synchronously and returns it immediately (local-first). The
   * platform push runs in the background; any errors surface on the dashboard.
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
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  click_through_rate: number;

  /**
   * Total clicks on this ad group's ads in the stats window.
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
   * When the ad group was created.
   */
  created_at: string;

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
   * Number of Whop pixel-attributed leads (last-click) in the stats window.
   */
  leads: number;

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
  unique_click_through_rate: number | null;

  /**
   * Unique clicks (deduplicated by the platform) in the stats window.
   */
  unique_clicks: number;

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
   * Click-through rate as a fraction of impressions (clicks / impressions, 0–1).
   */
  click_through_rate: number;

  /**
   * Total clicks on this ad group's ads in the stats window.
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
   * When the ad group was created.
   */
  created_at: string;

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
   * Number of Whop pixel-attributed leads (last-click) in the stats window.
   */
  leads: number;

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
  unique_click_through_rate: number | null;

  /**
   * Unique clicks (deduplicated by the platform) in the stats window.
   */
  unique_clicks: number;

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
 * Represents `true` or `false` values.
 */
export type AdGroupDeleteResponse = boolean;

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
   * Budget amount in dollars. The interpretation (daily or lifetime) follows the ad
   * group's existing budget type.
   */
  budget?: number | null;

  /**
   * Human-readable ad group title. Max 255 characters.
   */
  title?: string | null;
}

export interface AdGroupListParams extends CursorPageParams {
  /**
   * Filter by ad campaign. Provide exactly one of ad_campaign_id or company_id.
   */
  ad_campaign_id?: string | null;

  /**
   * Only return ad groups belonging to these ad campaigns (max 100). Can be combined
   * with companyId or used on its own.
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
   * Filter by company. Provide companyId or adCampaignIds.
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
   * Case-insensitive substring match against the ad group name or ID.
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

export declare namespace AdGroups {
  export {
    type AdBudgetType as AdBudgetType,
    type AdGroup as AdGroup,
    type AdGroupStatus as AdGroupStatus,
    type AdGroupListResponse as AdGroupListResponse,
    type AdGroupDeleteResponse as AdGroupDeleteResponse,
    type AdGroupListResponsesCursorPage as AdGroupListResponsesCursorPage,
    type AdGroupRetrieveParams as AdGroupRetrieveParams,
    type AdGroupUpdateParams as AdGroupUpdateParams,
    type AdGroupListParams as AdGroupListParams,
  };
}
