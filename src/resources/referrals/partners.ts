// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * The Referrals API covers your Whop partner activity: the users you referred onto Whop, the businesses you referred and the earnings generated from their processing volume, and the partner leaderboard.
 *
 * Use it to enroll as a Whop partner, list the users you referred, list your referred businesses and review their earnings, and see the partner leaderboard.
 */
export class Partners extends APIResource {
  /**
   * Enrolls the calling user in the Whop partner program, making their business
   * referrals eligible for earnings. Idempotent — enrolling again keeps the original
   * enrollment time.
   */
  create(options?: RequestOptions): APIPromise<PartnerCreateResponse> {
    return this._client.post('/partners', options);
  }
}

export interface PartnerCreateResponse {
  /**
   * The caller's referral link — businesses that sign up through it are attributed
   * to the caller.
   */
  referral_link: string;

  /**
   * When the caller became a Whop partner.
   */
  whop_partner_enabled_at: string;
}

export declare namespace Partners {
  export { type PartnerCreateResponse as PartnerCreateResponse };
}
