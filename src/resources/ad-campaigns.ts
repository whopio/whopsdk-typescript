// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdGroupsAPI from './ad-groups';
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
  retrieve(id: string, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.get(path`/ad_campaigns/${id}`, options);
  }

  /**
   * Updates an ad campaign synchronously.
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
   * for await (const adCampaignListResponse of client.adCampaigns.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AdCampaignListParams,
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
   * When the ad campaign was created.
   */
  created_at: string;

  /**
   * The user who created this ad campaign.
   */
  created_by_user: AdCampaign.CreatedByUser;

  /**
   * Meta-specific campaign configuration (objective, budget mode, etc.). Null for
   * non-Meta campaigns.
   */
  meta_config: AdCampaign.MetaConfig | null;

  /**
   * The external ad platform this campaign is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignPlatform;

  /**
   * Current status of the campaign (active, paused, or inactive).
   */
  status: AdCampaignStatus;

  /**
   * The campaign name shown in the Whop dashboard.
   */
  title: string;

  /**
   * Total amount spent in dollars.
   */
  total_spend: number;

  /**
   * When the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaign {
  /**
   * The user who created this ad campaign.
   */
  export interface CreatedByUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * Meta-specific campaign configuration (objective, budget mode, etc.). Null for
   * non-Meta campaigns.
   */
  export interface MetaConfig {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization: boolean | null;

    /**
     * The actual delivery status, accounting for platform overrides (e.g., in_review,
     * rejected).
     */
    effective_status: 'active' | 'paused' | 'deleted' | 'in_review' | 'rejected' | 'with_issues' | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time: string | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status: 'active' | 'paused' | null;
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
   * When the ad campaign was created.
   */
  created_at: string;

  /**
   * The external ad platform this campaign is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignPlatform;

  /**
   * Current status of the campaign (active, paused, or inactive).
   */
  status: AdCampaignStatus;

  /**
   * The campaign name shown in the Whop dashboard.
   */
  title: string;

  /**
   * Total amount spent in dollars.
   */
  total_spend: number;

  /**
   * When the ad campaign was last updated.
   */
  updated_at: string;
}

export interface AdCampaignUpdateParams {
  /**
   * The campaign budget in dollars. The interpretation (daily or lifetime) follows
   * the campaign's existing budget type.
   */
  budget?: number | null;
}

export interface AdCampaignListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list ad campaigns for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return ad campaigns created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return ad campaigns created before this timestamp.
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
   * Case-insensitive substring match against the campaign title.
   */
  query?: string | null;

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
    type AdCampaignUpdateParams as AdCampaignUpdateParams,
    type AdCampaignListParams as AdCampaignListParams,
  };
}
