// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PromoCodes extends APIResource {
  /**
   * Create a new promo code for a product or plan
   *
   * Required permissions:
   *
   * - `promo_code:create`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const promoCode = await client.promoCodes.create({
   *   amount_off: 6.9,
   *   base_currency: 'usd',
   *   code: 'code',
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   new_users_only: true,
   *   promo_duration_months: 42,
   *   promo_type: 'percentage',
   * });
   * ```
   */
  create(body: PromoCodeCreateParams, options?: RequestOptions): APIPromise<PromoCode> {
    return this._client.post('/promo_codes', { body, ...options });
  }

  /**
   * Retrieves a promo code by ID
   *
   * Required permissions:
   *
   * - `promo_code:basic:read`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const promoCode = await client.promoCodes.retrieve(
   *   'promo_xxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PromoCode> {
    return this._client.get(path`/promo_codes/${id}`, options);
  }

  /**
   * Lists promo codes for a company
   *
   * Required permissions:
   *
   * - `promo_code:basic:read`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const promoCodeListResponse of client.promoCodes.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PromoCodeListParams,
    options?: RequestOptions,
  ): PagePromise<PromoCodeListResponsesCursorPage, PromoCodeListResponse> {
    return this._client.getAPIList('/promo_codes', CursorPage<PromoCodeListResponse>, { query, ...options });
  }

  /**
   * Archive a promo code, preventing further use
   *
   * Required permissions:
   *
   * - `promo_code:delete`
   *
   * @example
   * ```ts
   * const promoCode = await client.promoCodes.delete(
   *   'promo_xxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PromoCodeDeleteResponse> {
    return this._client.delete(path`/promo_codes/${id}`, options);
  }
}

export type PromoCodeListResponsesCursorPage = CursorPage<PromoCodeListResponse>;

/**
 * A promo code applies a discount to a plan during checkout. Promo codes can be
 * percentage-based or fixed-amount, and can have usage limits and expiration
 * dates.
 */
export interface PromoCode {
  /**
   * The unique identifier for the promo code.
   */
  id: string;

  /**
   * The discount amount. Interpretation depends on promo_type: if 'percentage', this
   * is the percentage (e.g., 20 means 20% off); if 'flat_amount', this is dollars
   * off (e.g., 10.00 means $10.00 off).
   */
  amount_off: number;

  /**
   * Restricts promo use to only users who have churned from the company before.
   */
  churned_users_only: boolean;

  /**
   * The specific code used to apply the promo at checkout.
   */
  code: string | null;

  /**
   * The company for the promo code.
   */
  company: PromoCode.Company;

  /**
   * The datetime the promo code was created.
   */
  created_at: string;

  /**
   * The monetary currency of the promo code.
   */
  currency: Shared.Currency;

  /**
   * The duration setting for the promo code
   */
  duration: PromoDuration | null;

  /**
   * Restricts promo use to only be applied to already purchased memberships.
   */
  existing_memberships_only: boolean;

  /**
   * The date/time of when the promo expires.
   */
  expires_at: string | null;

  /**
   * Restricts promo use to only users who have never purchased from the company
   * before.
   */
  new_users_only: boolean;

  /**
   * Restricts promo use to only be applied once per customer.
   */
  one_per_customer: boolean;

  /**
   * The product this promo code applies to
   */
  product: PromoCode.Product | null;

  /**
   * The number of months the promo is applied for.
   */
  promo_duration_months: number | null;

  /**
   * The type (% or flat amount) of the promo.
   */
  promo_type: Shared.PromoType;

  /**
   * Indicates if the promo code is live or disabled.
   */
  status: PromoCodeStatus;

  /**
   * The quantity limit on the number of uses.
   */
  stock: number;

  /**
   * Whether or not the promo code has unlimited stock.
   */
  unlimited_stock: boolean;

  /**
   * The amount of times the promo codes has been used.
   */
  uses: number;
}

export namespace PromoCode {
  /**
   * The company for the promo code.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The product this promo code applies to
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }
}

/**
 * Statuses for promo codes
 */
export type PromoCodeStatus = 'active' | 'inactive' | 'archived';

/**
 * The duration setting for the promo code
 */
export type PromoDuration = 'forever' | 'once' | 'repeating';

/**
 * A promo code applies a discount to a plan during checkout. Promo codes can be
 * percentage-based or fixed-amount, and can have usage limits and expiration
 * dates.
 */
export interface PromoCodeListResponse {
  /**
   * The unique identifier for the promo code.
   */
  id: string;

  /**
   * The discount amount. Interpretation depends on promo_type: if 'percentage', this
   * is the percentage (e.g., 20 means 20% off); if 'flat_amount', this is dollars
   * off (e.g., 10.00 means $10.00 off).
   */
  amount_off: number;

  /**
   * Restricts promo use to only users who have churned from the company before.
   */
  churned_users_only: boolean;

  /**
   * The specific code used to apply the promo at checkout.
   */
  code: string | null;

  /**
   * The datetime the promo code was created.
   */
  created_at: string;

  /**
   * The monetary currency of the promo code.
   */
  currency: Shared.Currency;

  /**
   * The duration setting for the promo code
   */
  duration: PromoDuration | null;

  /**
   * Restricts promo use to only be applied to already purchased memberships.
   */
  existing_memberships_only: boolean;

  /**
   * The date/time of when the promo expires.
   */
  expires_at: string | null;

  /**
   * Restricts promo use to only users who have never purchased from the company
   * before.
   */
  new_users_only: boolean;

  /**
   * Restricts promo use to only be applied once per customer.
   */
  one_per_customer: boolean;

  /**
   * The product this promo code applies to
   */
  product: PromoCodeListResponse.Product | null;

  /**
   * The number of months the promo is applied for.
   */
  promo_duration_months: number | null;

  /**
   * The type (% or flat amount) of the promo.
   */
  promo_type: Shared.PromoType;

  /**
   * Indicates if the promo code is live or disabled.
   */
  status: PromoCodeStatus;

  /**
   * The quantity limit on the number of uses.
   */
  stock: number;

  /**
   * Whether or not the promo code has unlimited stock.
   */
  unlimited_stock: boolean;

  /**
   * The amount of times the promo codes has been used.
   */
  uses: number;
}

export namespace PromoCodeListResponse {
  /**
   * The product this promo code applies to
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type PromoCodeDeleteResponse = boolean;

export interface PromoCodeCreateParams {
  /**
   * The discount amount. Interpretation depends on promo_type: if 'percentage', this
   * is the percentage (e.g., 20 means 20% off); if 'flat_amount', this is dollars
   * off (e.g., 10.00 means $10.00 off).
   */
  amount_off: number;

  /**
   * The monetary currency of the promo code.
   */
  base_currency: Shared.Currency;

  /**
   * The specific code used to apply the promo at checkout.
   */
  code: string;

  /**
   * The id of the company to create the promo code for.
   */
  company_id: string;

  /**
   * Restricts promo use to only users who have never purchased from the company
   * before.
   */
  new_users_only: boolean;

  /**
   * The number of months this promo code is applied and valid for.
   */
  promo_duration_months: number;

  /**
   * The type (% or flat amount) of the promo.
   */
  promo_type: Shared.PromoType;

  /**
   * Restricts promo use to only users who have churned from the company before.
   */
  churned_users_only?: boolean | null;

  /**
   * Whether this promo code is for existing memberships only (cancelations)
   */
  existing_memberships_only?: boolean | null;

  /**
   * The date/time of when the promo expires.
   */
  expires_at?: string | null;

  /**
   * Restricts promo use to only be applied once per customer.
   */
  one_per_customer?: boolean | null;

  /**
   * The IDs of the plans that the promo code applies to. If product_id is provided,
   * it will only apply to plans attached to that product
   */
  plan_ids?: Array<string> | null;

  /**
   * The product to lock the promo code to, if any. If provided will filter out any
   * plan ids not attached to this product
   */
  product_id?: string | null;

  /**
   * The quantity limit on the number of uses.
   */
  stock?: number | null;

  /**
   * Whether or not the promo code should have unlimited stock.
   */
  unlimited_stock?: boolean | null;
}

export interface PromoCodeListParams extends CursorPageParams {
  /**
   * The ID of the company to list promo codes for
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
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
   * Filter promo codes by plan ID(s)
   */
  plan_ids?: Array<string> | null;

  /**
   * Filter promo codes by product ID(s)
   */
  product_ids?: Array<string> | null;

  /**
   * Statuses for promo codes
   */
  status?: PromoCodeStatus | null;
}

export declare namespace PromoCodes {
  export {
    type PromoCode as PromoCode,
    type PromoCodeStatus as PromoCodeStatus,
    type PromoDuration as PromoDuration,
    type PromoCodeListResponse as PromoCodeListResponse,
    type PromoCodeDeleteResponse as PromoCodeDeleteResponse,
    type PromoCodeListResponsesCursorPage as PromoCodeListResponsesCursorPage,
    type PromoCodeCreateParams as PromoCodeCreateParams,
    type PromoCodeListParams as PromoCodeListParams,
  };
}
