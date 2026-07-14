// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The Referrals API covers your Whop partner activity: the users you referred onto Whop, the businesses you referred and the earnings generated from their processing volume, and the partner leaderboard.
 *
 * Use it to enroll as a Whop partner, list the users you referred, list your referred businesses and review their earnings, and see the partner leaderboard.
 */
export class Earnings extends APIResource {
  /**
   * Lists the earnings Whop pays out for one referred business's activity, most
   * recent first.
   */
  list(
    id: string,
    query: EarningListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EarningListResponsesCursorPage, EarningListResponse> {
    return this._client.getAPIList(
      path`/partners/businesses/${id}/earnings`,
      CursorPage<EarningListResponse>,
      { query, ...options },
    );
  }
}

export type EarningListResponsesCursorPage = CursorPage<EarningListResponse>;

export interface EarningListResponse {
  id: string | null;

  /**
   * Referred account.
   */
  account: EarningListResponse.Account | null;

  /**
   * Why the earning was canceled or reversed, if applicable.
   */
  cancelation_reason: string | null;

  /**
   * What the referrer earns, in USD. Null until the earning settles.
   */
  commission_amount_usd: string | null;

  created_at: string;

  /**
   * Income and cost lines behind this earning's commission. Null for earnings
   * settled before this data was recorded.
   */
  financial_activity: Array<EarningListResponse.FinancialActivity> | null;

  object: 'business_referral_earning';

  payout_at: string | null;

  /**
   * The referrer's share of Whop's gross profit, as a fraction (0.3 = 30%). Null
   * until the earning settles.
   */
  payout_percentage: number | null;

  product: EarningListResponse.Product | null;

  /**
   * The resource that generated the affiliate earning.
   */
  resource: EarningListResponse.Resource | null;

  /**
   * Whether this earning is a second-tier (grandparent) commission.
   */
  second_tier: boolean;

  /**
   * Current status of the earning.
   */
  status: 'awaiting_settlement' | 'pending' | 'completed' | 'canceled' | 'reversed';

  /**
   * The sale amount the commission is calculated from, in USD.
   */
  transaction_amount_usd: string;
}

export namespace EarningListResponse {
  /**
   * Referred account.
   */
  export interface Account {
    /**
     * Referred account ID.
     */
    id: string;

    /**
     * Referred account logo URL.
     */
    logo_url: string | null;

    /**
     * Referred account route.
     */
    route: string;

    /**
     * Referred account display name.
     */
    title: string;
  }

  export interface FinancialActivity {
    /**
     * Line amount in its native currency.
     */
    amount: string;

    /**
     * Line amount in USD.
     */
    amount_usd: string;

    /**
     * Fee or cost category of the line.
     */
    category: string | null;

    created_at: string | null;

    /**
     * Currency of the native amount.
     */
    currency: string;

    /**
     * Whether the line is income Whop collected or a cost Whop paid.
     */
    type: 'income' | 'expense';
  }

  export interface Product {
    id: string;

    route: string;

    title: string;
  }

  /**
   * The resource that generated the affiliate earning.
   */
  export interface Resource {
    id: string;

    alternative_payment_method: Resource.AlternativePaymentMethod | null;

    brand: string | null;

    created_at: string;

    currency: string;

    last4: string | null;

    object: 'receipt';

    payment_method_type: string | null;

    processor: string | null;
  }

  export namespace Resource {
    export interface AlternativePaymentMethod {
      image_url: string | null;

      name: string;
    }
  }
}

export interface EarningListParams extends CursorPageParams {
  before?: string;

  /**
   * Only return earnings created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return earnings created before this timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  first?: number;

  last?: number;

  /**
   * The field to sort earnings by.
   */
  order?: 'created_at' | 'commission_amount' | 'transaction_amount' | 'payout_at';

  /**
   * Filter by earning status.
   */
  status?: 'awaiting_settlement' | 'pending' | 'completed' | 'canceled' | 'reversed';
}

export declare namespace Earnings {
  export {
    type EarningListResponse as EarningListResponse,
    type EarningListResponsesCursorPage as EarningListResponsesCursorPage,
    type EarningListParams as EarningListParams,
  };
}
