// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PartnersAPI from './partners';
import { PartnerCreateResponse, Partners } from './partners';
import * as BusinessesAPI from './businesses/businesses';
import {
  BusinessLeaderboardParams,
  BusinessLeaderboardResponse,
  BusinessListParams,
  BusinessListResponse,
  BusinessListResponsesCursorPage,
  BusinessRetrieveResponse,
  Businesses,
} from './businesses/businesses';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * The Referrals API covers your Whop partner activity: the users you referred onto Whop, the businesses you referred and the earnings generated from their processing volume, and the partner leaderboard.
 *
 * Use it to enroll as a Whop partner, list the users you referred, list your referred businesses and review their earnings, and see the partner leaderboard.
 */
export class Referrals extends APIResource {
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);
  partners: PartnersAPI.Partners = new PartnersAPI.Partners(this._client);

  /**
   * Lists the users the caller referred onto Whop (newest first), each with the
   * second-tier earnings the caller has made from that user's businesses.
   */
  referredUsers(
    query: ReferralReferredUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReferralReferredUsersResponse> {
    return this._client.get('/partners/referred_users', { query, ...options });
  }
}

export interface ReferralReferredUsersResponse {
  data: Array<ReferralReferredUsersResponse.Data>;

  page_info: ReferralReferredUsersResponse.PageInfo;
}

export namespace ReferralReferredUsersResponse {
  export interface Data {
    total_earnings_usd: string;

    total_volume_usd: string;

    user: Data.User;
  }

  export namespace Data {
    export interface User {
      id: string;

      username: string;

      city?: string | null;

      country?: string | null;

      name?: string | null;

      profile_picture?: User.ProfilePicture;
    }

    export namespace User {
      export interface ProfilePicture {
        url?: string | null;
      }
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface ReferralReferredUsersParams {
  /**
   * Cursor to fetch the page after (from page_info.end_cursor).
   */
  after?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Number of referred users to return from the start of the window.
   */
  first?: number;

  /**
   * When true, only referred users who brought at least one business onto Whop.
   */
  has_businesses?: boolean;

  /**
   * When true, only referred users with at least one business that has generated
   * earnings.
   */
  has_earning_businesses?: boolean;

  /**
   * Number of referred users to return from the end of the window.
   */
  last?: number;
}

Referrals.Businesses = Businesses;
Referrals.Partners = Partners;

export declare namespace Referrals {
  export {
    type ReferralReferredUsersResponse as ReferralReferredUsersResponse,
    type ReferralReferredUsersParams as ReferralReferredUsersParams,
  };

  export {
    Businesses as Businesses,
    type BusinessRetrieveResponse as BusinessRetrieveResponse,
    type BusinessListResponse as BusinessListResponse,
    type BusinessLeaderboardResponse as BusinessLeaderboardResponse,
    type BusinessListResponsesCursorPage as BusinessListResponsesCursorPage,
    type BusinessListParams as BusinessListParams,
    type BusinessLeaderboardParams as BusinessLeaderboardParams,
  };

  export { Partners as Partners, type PartnerCreateResponse as PartnerCreateResponse };
}
