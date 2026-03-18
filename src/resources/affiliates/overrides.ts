// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Affiliates
 */
export class Overrides extends APIResource {
  /**
   * Creates a commission override for an affiliate.
   *
   * Required permissions:
   *
   * - `affiliate:create`
   *
   * @example
   * ```ts
   * const override = await client.affiliates.overrides.create(
   *   'aff_xxxxxxxxxxxxxx',
   *   {
   *     id: 'id',
   *     commission_value: 6.9,
   *     override_type: 'standard',
   *     plan_id: 'plan_xxxxxxxxxxxxx',
   *   },
   * );
   * ```
   */
  create(
    id: string,
    body: OverrideCreateParams,
    options?: RequestOptions,
  ): APIPromise<OverrideCreateResponse> {
    return this._client.post(path`/affiliates/${id}/overrides`, { body, ...options });
  }

  /**
   * Retrieves the details of a specific affiliate override.
   *
   * Required permissions:
   *
   * - `affiliate:basic:read`
   *
   * @example
   * ```ts
   * const override = await client.affiliates.overrides.retrieve(
   *   'override_id',
   *   { id: 'aff_xxxxxxxxxxxxxx' },
   * );
   * ```
   */
  retrieve(
    overrideID: string,
    params: OverrideRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OverrideRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/affiliates/${id}/overrides/${overrideID}`, options);
  }

  /**
   * Updates an existing affiliate override.
   *
   * Required permissions:
   *
   * - `affiliate:update`
   *
   * @example
   * ```ts
   * const override = await client.affiliates.overrides.update(
   *   'override_id',
   *   { id: 'aff_xxxxxxxxxxxxxx' },
   * );
   * ```
   */
  update(
    overrideID: string,
    params: OverrideUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OverrideUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/affiliates/${id}/overrides/${overrideID}`, { body, ...options });
  }

  /**
   * Returns a paginated list of overrides for an affiliate.
   *
   * Required permissions:
   *
   * - `affiliate:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const overrideListResponse of client.affiliates.overrides.list(
   *   'aff_xxxxxxxxxxxxxx',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: OverrideListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OverrideListResponsesCursorPage, OverrideListResponse> {
    return this._client.getAPIList(path`/affiliates/${id}/overrides`, CursorPage<OverrideListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an affiliate override.
   *
   * Required permissions:
   *
   * - `affiliate:update`
   *
   * @example
   * ```ts
   * const override = await client.affiliates.overrides.delete(
   *   'override_id',
   *   { id: 'aff_xxxxxxxxxxxxxx' },
   * );
   * ```
   */
  delete(
    overrideID: string,
    params: OverrideDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OverrideDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/affiliates/${id}/overrides/${overrideID}`, options);
  }
}

export type OverrideListResponsesCursorPage = CursorPage<OverrideListResponse>;

/**
 * Whether the affiliate commission applies to the first payment or all payments
 */
export type AffiliateAppliesToPayments = 'first_payment' | 'all_payments';

/**
 * Whether a rev-share override applies to a single product or all products
 */
export type AffiliateAppliesToProducts = 'single_product' | 'all_products';

/**
 * The role of an affiliate override (standard or rev_share)
 */
export type AffiliateOverrideRoles = 'standard' | 'rev_share';

/**
 * The types of payouts an affiliate can have
 */
export type AffiliatePayoutTypes = 'percentage' | 'flat_fee';

/**
 * The calculation method for affiliate rev-share percentages
 */
export type AffiliateRevenueBases = 'pre_fees' | 'post_fees';

/**
 * An object storing information about the affiliate
 */
export interface OverrideCreateResponse {
  /**
   * The unique identifier for the affiliate override.
   */
  id: string;

  /**
   * Whether the affiliate commission applies to the first payment or all payments
   */
  applies_to_payments: AffiliateAppliesToPayments | null;

  /**
   * Whether a rev-share override applies to a single product or all products
   */
  applies_to_products: AffiliateAppliesToProducts | null;

  /**
   * The checkout direct link for referrals (standard overrides only).
   */
  checkout_direct_link: string | null;

  /**
   * The type of commission (percentage or flat_fee).
   */
  commission_type: AffiliatePayoutTypes;

  /**
   * The commission value (percentage 1-100 or flat fee in dollars).
   */
  commission_value: number;

  /**
   * The type of override (standard or rev_share).
   */
  override_type: AffiliateOverrideRoles;

  /**
   * The plan ID (for standard overrides).
   */
  plan_id: string | null;

  /**
   * The product page direct link for referrals (standard overrides only).
   */
  product_direct_link: string | null;

  /**
   * The product ID (for rev-share overrides).
   */
  product_id: string | null;

  /**
   * The calculation method for affiliate rev-share percentages
   */
  revenue_basis: AffiliateRevenueBases | null;

  /**
   * The total earnings paid to this affiliate for referrals to this specific plan,
   * in USD.
   */
  total_referral_earnings_usd: number;
}

/**
 * An object storing information about the affiliate
 */
export interface OverrideRetrieveResponse {
  /**
   * The unique identifier for the affiliate override.
   */
  id: string;

  /**
   * Whether the affiliate commission applies to the first payment or all payments
   */
  applies_to_payments: AffiliateAppliesToPayments | null;

  /**
   * Whether a rev-share override applies to a single product or all products
   */
  applies_to_products: AffiliateAppliesToProducts | null;

  /**
   * The checkout direct link for referrals (standard overrides only).
   */
  checkout_direct_link: string | null;

  /**
   * The type of commission (percentage or flat_fee).
   */
  commission_type: AffiliatePayoutTypes;

  /**
   * The commission value (percentage 1-100 or flat fee in dollars).
   */
  commission_value: number;

  /**
   * The type of override (standard or rev_share).
   */
  override_type: AffiliateOverrideRoles;

  /**
   * The plan ID (for standard overrides).
   */
  plan_id: string | null;

  /**
   * The product page direct link for referrals (standard overrides only).
   */
  product_direct_link: string | null;

  /**
   * The product ID (for rev-share overrides).
   */
  product_id: string | null;

  /**
   * The calculation method for affiliate rev-share percentages
   */
  revenue_basis: AffiliateRevenueBases | null;

  /**
   * The total earnings paid to this affiliate for referrals to this specific plan,
   * in USD.
   */
  total_referral_earnings_usd: number;
}

/**
 * An object storing information about the affiliate
 */
export interface OverrideUpdateResponse {
  /**
   * The unique identifier for the affiliate override.
   */
  id: string;

  /**
   * Whether the affiliate commission applies to the first payment or all payments
   */
  applies_to_payments: AffiliateAppliesToPayments | null;

  /**
   * Whether a rev-share override applies to a single product or all products
   */
  applies_to_products: AffiliateAppliesToProducts | null;

  /**
   * The checkout direct link for referrals (standard overrides only).
   */
  checkout_direct_link: string | null;

  /**
   * The type of commission (percentage or flat_fee).
   */
  commission_type: AffiliatePayoutTypes;

  /**
   * The commission value (percentage 1-100 or flat fee in dollars).
   */
  commission_value: number;

  /**
   * The type of override (standard or rev_share).
   */
  override_type: AffiliateOverrideRoles;

  /**
   * The plan ID (for standard overrides).
   */
  plan_id: string | null;

  /**
   * The product page direct link for referrals (standard overrides only).
   */
  product_direct_link: string | null;

  /**
   * The product ID (for rev-share overrides).
   */
  product_id: string | null;

  /**
   * The calculation method for affiliate rev-share percentages
   */
  revenue_basis: AffiliateRevenueBases | null;

  /**
   * The total earnings paid to this affiliate for referrals to this specific plan,
   * in USD.
   */
  total_referral_earnings_usd: number;
}

/**
 * An object storing information about the affiliate
 */
export interface OverrideListResponse {
  /**
   * The unique identifier for the affiliate override.
   */
  id: string;

  /**
   * Whether the affiliate commission applies to the first payment or all payments
   */
  applies_to_payments: AffiliateAppliesToPayments | null;

  /**
   * Whether a rev-share override applies to a single product or all products
   */
  applies_to_products: AffiliateAppliesToProducts | null;

  /**
   * The checkout direct link for referrals (standard overrides only).
   */
  checkout_direct_link: string | null;

  /**
   * The type of commission (percentage or flat_fee).
   */
  commission_type: AffiliatePayoutTypes;

  /**
   * The commission value (percentage 1-100 or flat fee in dollars).
   */
  commission_value: number;

  /**
   * The type of override (standard or rev_share).
   */
  override_type: AffiliateOverrideRoles;

  /**
   * The plan ID (for standard overrides).
   */
  plan_id: string | null;

  /**
   * The product page direct link for referrals (standard overrides only).
   */
  product_direct_link: string | null;

  /**
   * The product ID (for rev-share overrides).
   */
  product_id: string | null;

  /**
   * The calculation method for affiliate rev-share percentages
   */
  revenue_basis: AffiliateRevenueBases | null;

  /**
   * The total earnings paid to this affiliate for referrals to this specific plan,
   * in USD.
   */
  total_referral_earnings_usd: number;
}

/**
 * Represents `true` or `false` values.
 */
export type OverrideDeleteResponse = boolean;

export type OverrideCreateParams =
  | OverrideCreateParams.CreateAffiliateOverrideInputOverrideTypeStandard
  | OverrideCreateParams.CreateAffiliateOverrideInputOverrideTypeRevShare;

export declare namespace OverrideCreateParams {
  export interface CreateAffiliateOverrideInputOverrideTypeStandard {
    /**
     * The affiliate ID.
     */
    id: string;

    /**
     * The commission value (percentage 1-100 or flat fee).
     */
    commission_value: number;

    override_type: 'standard';

    /**
     * The plan ID (required for standard overrides).
     */
    plan_id: string;

    /**
     * Whether the affiliate commission applies to the first payment or all payments
     */
    applies_to_payments?: AffiliateAppliesToPayments | null;

    /**
     * The types of payouts an affiliate can have
     */
    commission_type?: AffiliatePayoutTypes | null;
  }

  export interface CreateAffiliateOverrideInputOverrideTypeRevShare {
    /**
     * The affiliate ID.
     */
    id: string;

    /**
     * The commission value (percentage 1-100 or flat fee).
     */
    commission_value: number;

    override_type: 'rev_share';

    /**
     * The types of payouts an affiliate can have
     */
    commission_type?: AffiliatePayoutTypes | null;

    /**
     * The product ID (for rev-share overrides, omit for company-wide).
     */
    product_id?: string | null;

    /**
     * The calculation method for affiliate rev-share percentages
     */
    revenue_basis?: AffiliateRevenueBases | null;
  }
}

export interface OverrideRetrieveParams {
  /**
   * The affiliate ID.
   */
  id: string;
}

export interface OverrideUpdateParams {
  /**
   * Path param: The affiliate ID.
   */
  id: string;

  /**
   * Body param: Whether the affiliate commission applies to the first payment or all
   * payments
   */
  applies_to_payments?: AffiliateAppliesToPayments | null;

  /**
   * Body param: The types of payouts an affiliate can have
   */
  commission_type?: AffiliatePayoutTypes | null;

  /**
   * Body param: The commission value (percentage 1-100 or flat fee in dollars).
   */
  commission_value?: number | null;

  /**
   * Body param: The calculation method for affiliate rev-share percentages
   */
  revenue_basis?: AffiliateRevenueBases | null;
}

export interface OverrideListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The role of an affiliate override (standard or rev_share)
   */
  override_type?: AffiliateOverrideRoles | null;
}

export interface OverrideDeleteParams {
  /**
   * The affiliate ID.
   */
  id: string;
}

export declare namespace Overrides {
  export {
    type AffiliateAppliesToPayments as AffiliateAppliesToPayments,
    type AffiliateAppliesToProducts as AffiliateAppliesToProducts,
    type AffiliateOverrideRoles as AffiliateOverrideRoles,
    type AffiliatePayoutTypes as AffiliatePayoutTypes,
    type AffiliateRevenueBases as AffiliateRevenueBases,
    type OverrideCreateResponse as OverrideCreateResponse,
    type OverrideRetrieveResponse as OverrideRetrieveResponse,
    type OverrideUpdateResponse as OverrideUpdateResponse,
    type OverrideListResponse as OverrideListResponse,
    type OverrideDeleteResponse as OverrideDeleteResponse,
    type OverrideListResponsesCursorPage as OverrideListResponsesCursorPage,
    type OverrideCreateParams as OverrideCreateParams,
    type OverrideRetrieveParams as OverrideRetrieveParams,
    type OverrideUpdateParams as OverrideUpdateParams,
    type OverrideListParams as OverrideListParams,
    type OverrideDeleteParams as OverrideDeleteParams,
  };
}
