// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PromoCodes extends APIResource {
  /**
   * Creates a promo code for an account. First-party sessions may attach an
   * affiliate.
   *
   * @example
   * ```ts
   * const promoCode = await client.promoCodes.create({
   *   account_id: 'biz_xxxxxxxxxxxxxx',
   *   amount_off: 25,
   *   base_currency: 'usd',
   *   code: 'AFFILIATE25',
   *   new_users_only: true,
   *   promo_duration_months: 3,
   *   promo_type: 'percentage',
   * });
   * ```
   */
  create(params: PromoCodeCreateParams, options?: RequestOptions): APIPromise<PromoCode> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/promo_codes', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a promo code by ID.
   *
   * @example
   * ```ts
   * const promoCode = await client.promoCodes.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: PromoCodeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromoCode> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/promo_codes/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists promo codes for an account with cursor pagination, filters, and sorting.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const promoCodeListResponse of client.promoCodes.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PromoCodeListParams,
    options?: RequestOptions,
  ): PagePromise<PromoCodeListResponsesCursorPage, PromoCodeListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params;
    return this._client.getAPIList('/promo_codes', CursorPage<PromoCodeListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Archives a promo code so it cannot be used in future checkouts.
   *
   * @example
   * ```ts
   * const promoCode = await client.promoCodes.delete('id');
   * ```
   */
  delete(
    id: string,
    params: PromoCodeDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromoCodeDeleteResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.delete(path`/promo_codes/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type PromoCodeListResponsesCursorPage = CursorPage<PromoCodeListResponse>;

export interface PromoCode {
  /**
   * Promo code ID, prefixed `promo_`.
   */
  id: string;

  /**
   * Account that owns the promo code.
   */
  account: PromoCode.Account;

  /**
   * Discount amount. Percentage discounts are represented as a decimal fraction.
   */
  amount_off: number;

  /**
   * Whether the promo code is restricted to churned customers.
   */
  churned_users_only: boolean;

  /**
   * Code entered at checkout.
   */
  code: string | null;

  /**
   * When the promo code was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency used for a fixed-amount discount.
   */
  currency:
    | 'usd'
    | 'sgd'
    | 'inr'
    | 'aud'
    | 'brl'
    | 'cad'
    | 'dkk'
    | 'eur'
    | 'nok'
    | 'gbp'
    | 'sek'
    | 'chf'
    | 'hkd'
    | 'huf'
    | 'jpy'
    | 'mxn'
    | 'myr'
    | 'pln'
    | 'czk'
    | 'nzd'
    | 'aed'
    | 'eth'
    | 'ape'
    | 'cop'
    | 'ron'
    | 'thb'
    | 'bgn'
    | 'idr'
    | 'dop'
    | 'php'
    | 'try'
    | 'krw'
    | 'twd'
    | 'vnd'
    | 'pkr'
    | 'clp'
    | 'uyu'
    | 'ars'
    | 'zar'
    | 'dzd'
    | 'tnd'
    | 'mad'
    | 'kes'
    | 'kwd'
    | 'jod'
    | 'all'
    | 'xcd'
    | 'amd'
    | 'bsd'
    | 'bhd'
    | 'bob'
    | 'bam'
    | 'khr'
    | 'crc'
    | 'xof'
    | 'egp'
    | 'etb'
    | 'gmd'
    | 'ghs'
    | 'gtq'
    | 'gyd'
    | 'ils'
    | 'jmd'
    | 'mop'
    | 'mga'
    | 'mur'
    | 'mdl'
    | 'mnt'
    | 'nad'
    | 'ngn'
    | 'mkd'
    | 'omr'
    | 'pyg'
    | 'pen'
    | 'qar'
    | 'rwf'
    | 'sar'
    | 'rsd'
    | 'lkr'
    | 'tzs'
    | 'ttd'
    | 'uzs'
    | 'rub'
    | 'btc'
    | 'cny'
    | 'usdt'
    | 'kzt'
    | 'awg'
    | 'whop_usd'
    | 'xau';

  /**
   * How long the discount applies.
   */
  duration: 'forever' | 'once' | 'repeating';

  /**
   * Whether the promo code applies only to existing memberships.
   */
  existing_memberships_only: boolean;

  /**
   * When the promo code expires, as an ISO 8601 timestamp.
   */
  expires_at: string | null;

  /**
   * Custom key-value metadata stored on the promo code.
   */
  metadata: unknown;

  /**
   * Whether the promo code is restricted to new customers.
   */
  new_users_only: boolean;

  /**
   * Whether each customer may redeem the promo code only once.
   */
  one_per_customer: boolean;

  /**
   * Product the promo code is restricted to, or `null` when it is not
   * product-scoped.
   */
  product: PromoCode.Product | null;

  /**
   * Billing intervals the discount applies to.
   */
  promo_duration_months: number | null;

  /**
   * Whether the discount is percentage-based or a fixed amount.
   */
  promo_type: 'percentage' | 'flat_amount';

  /**
   * Promo code lifecycle status.
   */
  status: 'active' | 'inactive' | 'archived';

  /**
   * Maximum uses when stock is limited.
   */
  stock: number;

  /**
   * Whether the promo code has no redemption limit.
   */
  unlimited_stock: boolean;

  /**
   * When the promo code was updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Memberships that used the promo code.
   */
  uses: number;
}

export namespace PromoCode {
  /**
   * Account that owns the promo code.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Product the promo code is restricted to, or `null` when it is not
   * product-scoped.
   */
  export interface Product {
    /**
     * Product ID, prefixed `prod_`.
     */
    id: string;

    /**
     * Product display name.
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

export interface PromoCodeListResponse {
  /**
   * Promo code ID, prefixed `promo_`.
   */
  id: string;

  /**
   * Discount amount. Percentage discounts are represented as a decimal fraction.
   */
  amount_off: number;

  /**
   * Whether the promo code is restricted to churned customers.
   */
  churned_users_only: boolean;

  /**
   * Code entered at checkout.
   */
  code: string | null;

  /**
   * When the promo code was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency used for a fixed-amount discount.
   */
  currency:
    | 'usd'
    | 'sgd'
    | 'inr'
    | 'aud'
    | 'brl'
    | 'cad'
    | 'dkk'
    | 'eur'
    | 'nok'
    | 'gbp'
    | 'sek'
    | 'chf'
    | 'hkd'
    | 'huf'
    | 'jpy'
    | 'mxn'
    | 'myr'
    | 'pln'
    | 'czk'
    | 'nzd'
    | 'aed'
    | 'eth'
    | 'ape'
    | 'cop'
    | 'ron'
    | 'thb'
    | 'bgn'
    | 'idr'
    | 'dop'
    | 'php'
    | 'try'
    | 'krw'
    | 'twd'
    | 'vnd'
    | 'pkr'
    | 'clp'
    | 'uyu'
    | 'ars'
    | 'zar'
    | 'dzd'
    | 'tnd'
    | 'mad'
    | 'kes'
    | 'kwd'
    | 'jod'
    | 'all'
    | 'xcd'
    | 'amd'
    | 'bsd'
    | 'bhd'
    | 'bob'
    | 'bam'
    | 'khr'
    | 'crc'
    | 'xof'
    | 'egp'
    | 'etb'
    | 'gmd'
    | 'ghs'
    | 'gtq'
    | 'gyd'
    | 'ils'
    | 'jmd'
    | 'mop'
    | 'mga'
    | 'mur'
    | 'mdl'
    | 'mnt'
    | 'nad'
    | 'ngn'
    | 'mkd'
    | 'omr'
    | 'pyg'
    | 'pen'
    | 'qar'
    | 'rwf'
    | 'sar'
    | 'rsd'
    | 'lkr'
    | 'tzs'
    | 'ttd'
    | 'uzs'
    | 'rub'
    | 'btc'
    | 'cny'
    | 'usdt'
    | 'kzt'
    | 'awg'
    | 'whop_usd'
    | 'xau';

  /**
   * How long the discount applies.
   */
  duration: 'forever' | 'once' | 'repeating';

  /**
   * Whether the promo code applies only to existing memberships.
   */
  existing_memberships_only: boolean;

  /**
   * When the promo code expires, as an ISO 8601 timestamp.
   */
  expires_at: string | null;

  /**
   * Custom key-value metadata stored on the promo code.
   */
  metadata: unknown;

  /**
   * Whether the promo code is restricted to new customers.
   */
  new_users_only: boolean;

  /**
   * Whether each customer may redeem the promo code only once.
   */
  one_per_customer: boolean;

  /**
   * Product the promo code is restricted to, or `null` when it is not
   * product-scoped.
   */
  product: PromoCodeListResponse.Product | null;

  /**
   * Billing intervals the discount applies to.
   */
  promo_duration_months: number | null;

  /**
   * Whether the discount is percentage-based or a fixed amount.
   */
  promo_type: 'percentage' | 'flat_amount';

  /**
   * Promo code lifecycle status.
   */
  status: 'active' | 'inactive' | 'archived';

  /**
   * Maximum uses when stock is limited.
   */
  stock: number;

  /**
   * Whether the promo code has no redemption limit.
   */
  unlimited_stock: boolean;

  /**
   * When the promo code was updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Memberships that used the promo code.
   */
  uses: number;
}

export namespace PromoCodeListResponse {
  /**
   * Product the promo code is restricted to, or `null` when it is not
   * product-scoped.
   */
  export interface Product {
    /**
     * Product ID, prefixed `prod_`.
     */
    id: string;

    /**
     * Product display name.
     */
    title: string;
  }
}

export interface PromoCodeDeleteResponse {
  id: string;

  deleted: boolean;
}

export interface PromoCodeCreateParams {
  /**
   * Body param
   */
  account_id: string;

  /**
   * Body param
   */
  amount_off: number;

  /**
   * Body param
   */
  base_currency:
    | 'usd'
    | 'sgd'
    | 'inr'
    | 'aud'
    | 'brl'
    | 'cad'
    | 'dkk'
    | 'eur'
    | 'nok'
    | 'gbp'
    | 'sek'
    | 'chf'
    | 'hkd'
    | 'huf'
    | 'jpy'
    | 'mxn'
    | 'myr'
    | 'pln'
    | 'czk'
    | 'nzd'
    | 'aed'
    | 'eth'
    | 'ape'
    | 'cop'
    | 'ron'
    | 'thb'
    | 'bgn'
    | 'idr'
    | 'dop'
    | 'php'
    | 'try'
    | 'krw'
    | 'twd'
    | 'vnd'
    | 'pkr'
    | 'clp'
    | 'uyu'
    | 'ars'
    | 'zar'
    | 'dzd'
    | 'tnd'
    | 'mad'
    | 'kes'
    | 'kwd'
    | 'jod'
    | 'all'
    | 'xcd'
    | 'amd'
    | 'bsd'
    | 'bhd'
    | 'bob'
    | 'bam'
    | 'khr'
    | 'crc'
    | 'xof'
    | 'egp'
    | 'etb'
    | 'gmd'
    | 'ghs'
    | 'gtq'
    | 'gyd'
    | 'ils'
    | 'jmd'
    | 'mop'
    | 'mga'
    | 'mur'
    | 'mdl'
    | 'mnt'
    | 'nad'
    | 'ngn'
    | 'mkd'
    | 'omr'
    | 'pyg'
    | 'pen'
    | 'qar'
    | 'rwf'
    | 'sar'
    | 'rsd'
    | 'lkr'
    | 'tzs'
    | 'ttd'
    | 'uzs'
    | 'rub'
    | 'btc'
    | 'cny'
    | 'usdt'
    | 'kzt'
    | 'awg'
    | 'whop_usd'
    | 'xau';

  /**
   * Body param
   */
  code: string;

  /**
   * Body param
   */
  new_users_only: boolean;

  /**
   * Body param
   */
  promo_duration_months: number;

  /**
   * Body param
   */
  promo_type: 'percentage' | 'flat_amount';

  /**
   * Body param
   */
  churned_users_only?: boolean;

  /**
   * Body param
   */
  existing_memberships_only?: boolean;

  /**
   * Body param
   */
  expires_at?: string | null;

  /**
   * Body param
   */
  one_per_customer?: boolean;

  /**
   * Body param
   */
  plan_ids?: Array<string>;

  /**
   * Body param
   */
  product_id?: string | null;

  /**
   * Body param
   */
  stock?: number | null;

  /**
   * Body param
   */
  unlimited_stock?: boolean;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface PromoCodeRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PromoCodeListParams extends CursorPageParams {
  /**
   * Query param: Account whose promo codes are listed (`biz_` tag).
   */
  account_id: string;

  /**
   * Query param: Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Query param: Only promo codes created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only promo codes created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Number of promo codes to return from the start of the window.
   */
  first?: number;

  /**
   * Query param: Number of promo codes to return from the end of the window.
   */
  last?: number;

  /**
   * Query param: Sort field.
   */
  order?: 'created_at';

  /**
   * Query param: Only promo codes scoped to these plan IDs.
   */
  plan_ids?: Array<string>;

  /**
   * Query param: Only promo codes scoped to these product IDs.
   */
  product_ids?: Array<string>;

  /**
   * Query param: Promo-code status. `expired` groups inactive and archived codes.
   */
  status?: 'active' | 'inactive' | 'archived' | 'expired';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PromoCodeDeleteParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
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
    type PromoCodeRetrieveParams as PromoCodeRetrieveParams,
    type PromoCodeListParams as PromoCodeListParams,
    type PromoCodeDeleteParams as PromoCodeDeleteParams,
  };
}
