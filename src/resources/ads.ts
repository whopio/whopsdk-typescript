// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdCampaignsAPI from './ad-campaigns';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ads
 */
export class Ads extends APIResource {
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
   * Retrieve an ad by its unique identifier.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Ad> {
    return this._client.get(path`/ads/${id}`, options);
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
   * When the ad was created.
   */
  created_at: string;

  /**
   * The external ad platform this ad is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignsAPI.AdCampaignPlatform;

  /**
   * Current delivery status of the ad.
   */
  status: ExternalAdStatus;

  /**
   * The display title of the ad. Falls back to the creative set caption when unset.
   */
  title: string | null;

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
   * When the ad was created.
   */
  created_at: string;

  /**
   * The external ad platform this ad is running on (e.g., meta, tiktok).
   */
  platform: AdCampaignsAPI.AdCampaignPlatform;

  /**
   * Current delivery status of the ad.
   */
  status: ExternalAdStatus;

  /**
   * The display title of the ad. Falls back to the creative set caption when unset.
   */
  title: string | null;

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
}

export interface AdListParams extends CursorPageParams {
  /**
   * Filter by ad group. Provide exactly one of ad_group_id, campaign_id, or
   * company_id.
   */
  ad_group_id?: string | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter by campaign. Provide exactly one of ad_group_id, campaign_id, or
   * company_id.
   */
  campaign_id?: string | null;

  /**
   * Filter by company. Provide exactly one of ad_group_id, campaign_id, or
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
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

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
    type AdListParams as AdListParams,
  };
}
