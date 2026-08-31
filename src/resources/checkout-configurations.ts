// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Checkout Configuration is a reusable checkout link owned by an account. In `payment` mode it sells a specific plan; in `setup` mode it collects and saves payment details without charging. Each configuration can also override which payment methods are accepted and how 3D Secure is enforced for that checkout.
 *
 * Use the Checkout Configurations API to create checkout links for an existing or inline plan, list configurations for an account, retrieve the configuration behind a checkout URL, and delete links that should no longer be used.
 */
export class CheckoutConfigurations extends APIResource {
  /**
   * Creates a reusable checkout configuration for an existing or inline plan.
   *
   * @example
   * ```ts
   * const checkoutConfiguration =
   *   await client.checkoutConfigurations.create();
   * ```
   */
  create(
    params: CheckoutConfigurationCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CheckoutConfigurationCreateResponse> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post('/checkout_configurations', {
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
   * Retrieves a checkout configuration by ID. This endpoint is public so a checkout
   * page can load from the configuration URL.
   *
   * @example
   * ```ts
   * const checkoutConfiguration =
   *   await client.checkoutConfigurations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: CheckoutConfigurationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CheckoutConfigurationRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/checkout_configurations/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists checkout configurations for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkoutConfigurationListResponse of client.checkoutConfigurations.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CheckoutConfigurationListParams,
    options?: RequestOptions,
  ): PagePromise<CheckoutConfigurationListResponsesCursorPage, CheckoutConfigurationListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params;
    return this._client.getAPIList(
      '/checkout_configurations',
      CursorPage<CheckoutConfigurationListResponse>,
      {
        query,
        ...options,
        headers: buildHeaders([
          { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
          options?.headers,
        ]),
      },
    );
  }
}

export type CheckoutConfigurationListResponsesCursorPage = CursorPage<CheckoutConfigurationListResponse>;

/**
 * The different modes a checkout can be set to.
 */
export type CheckoutModes = 'payment' | 'setup';

export interface CheckoutConfigurationCreateResponse {
  /**
   * Checkout configuration ID, prefixed `ch_`.
   */
  id: string;

  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * When the checkout configuration was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Controls whether checkout charges the buyer immediately or saves payment details
   * for later.
   */
  mode: 'payment' | 'setup';

  /**
   * When the checkout configuration was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Affiliate code applied at checkout, or `null` when none is set.
   */
  affiliate_code?: string | null;

  /**
   * Currency used for setup-mode payment method availability; defaults to `usd` when
   * omitted.
   */
  currency?: string | null;

  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  effective_payment_method_configuration?: CheckoutConfigurationCreateResponse.EffectivePaymentMethodConfiguration | null;

  /**
   * Custom key-value metadata copied to payments and memberships. `null` without the
   * `checkout_configuration:basic:read` scope.
   */
  metadata?: unknown | null;

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  payment_method_configuration?: CheckoutConfigurationCreateResponse.PaymentMethodConfiguration | null;

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  plan?: CheckoutConfigurationCreateResponse.Plan | null;

  /**
   * Checkout URL you can send to customers.
   */
  purchase_url?: string | null;

  /**
   * URL customers are sent to after checkout, or `null` when no redirect is
   * configured.
   */
  redirect_url?: string | null;

  /**
   * 3D Secure behavior for this checkout, or `null` to use the account default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless' | null;
}

export namespace CheckoutConfigurationCreateResponse {
  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  export interface EffectivePaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  export interface PaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled for checkout.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled for checkout.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  export interface Plan {
    /**
     * Plan ID, prefixed `plan_`.
     */
    id: string;

    /**
     * Whether this plan accepts local currency payments via adaptive pricing.
     */
    adaptive_pricing_enabled: boolean;

    /**
     * Recurring billing interval in days, such as 30 for monthly or 365 for annual.
     * `null` for one-time plans.
     */
    billing_period: number | null;

    /**
     * Three-letter ISO currency code for the plan's prices.
     */
    currency: string;

    /**
     * Access duration in days for expiration-based plans.
     */
    expiration_days: number | null;

    /**
     * Initial purchase price in the plan currency.
     */
    initial_price: number;

    /**
     * Billing model for the plan.
     */
    plan_type: 'renewal' | 'one_time';

    /**
     * Sales method for the plan.
     */
    release_method: 'buy_now' | 'waitlist';

    /**
     * Recurring price charged each billing period.
     */
    renewal_price: number;

    /**
     * 3D Secure behavior for this plan, or `null` to use the account default.
     */
    three_ds_level: 'mandate_challenge' | 'frictionless' | null;

    /**
     * Free trial days before the first renewal charge.
     */
    trial_period_days: number | null;

    /**
     * Whether the plan is visible to customers or hidden from public view.
     */
    visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
  }
}

export interface CheckoutConfigurationRetrieveResponse {
  /**
   * Checkout configuration ID, prefixed `ch_`.
   */
  id: string;

  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * When the checkout configuration was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Controls whether checkout charges the buyer immediately or saves payment details
   * for later.
   */
  mode: 'payment' | 'setup';

  /**
   * When the checkout configuration was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Affiliate code applied at checkout, or `null` when none is set.
   */
  affiliate_code?: string | null;

  /**
   * Currency used for setup-mode payment method availability; defaults to `usd` when
   * omitted.
   */
  currency?: string | null;

  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  effective_payment_method_configuration?: CheckoutConfigurationRetrieveResponse.EffectivePaymentMethodConfiguration | null;

  /**
   * Custom key-value metadata copied to payments and memberships. `null` without the
   * `checkout_configuration:basic:read` scope.
   */
  metadata?: unknown | null;

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  payment_method_configuration?: CheckoutConfigurationRetrieveResponse.PaymentMethodConfiguration | null;

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  plan?: CheckoutConfigurationRetrieveResponse.Plan | null;

  /**
   * Checkout URL you can send to customers.
   */
  purchase_url?: string | null;

  /**
   * URL customers are sent to after checkout, or `null` when no redirect is
   * configured.
   */
  redirect_url?: string | null;

  /**
   * 3D Secure behavior for this checkout, or `null` to use the account default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless' | null;
}

export namespace CheckoutConfigurationRetrieveResponse {
  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  export interface EffectivePaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  export interface PaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled for checkout.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled for checkout.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  export interface Plan {
    /**
     * Plan ID, prefixed `plan_`.
     */
    id: string;

    /**
     * Whether this plan accepts local currency payments via adaptive pricing.
     */
    adaptive_pricing_enabled: boolean;

    /**
     * Recurring billing interval in days, such as 30 for monthly or 365 for annual.
     * `null` for one-time plans.
     */
    billing_period: number | null;

    /**
     * Three-letter ISO currency code for the plan's prices.
     */
    currency: string;

    /**
     * Access duration in days for expiration-based plans.
     */
    expiration_days: number | null;

    /**
     * Initial purchase price in the plan currency.
     */
    initial_price: number;

    /**
     * Billing model for the plan.
     */
    plan_type: 'renewal' | 'one_time';

    /**
     * Sales method for the plan.
     */
    release_method: 'buy_now' | 'waitlist';

    /**
     * Recurring price charged each billing period.
     */
    renewal_price: number;

    /**
     * 3D Secure behavior for this plan, or `null` to use the account default.
     */
    three_ds_level: 'mandate_challenge' | 'frictionless' | null;

    /**
     * Free trial days before the first renewal charge.
     */
    trial_period_days: number | null;

    /**
     * Whether the plan is visible to customers or hidden from public view.
     */
    visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
  }
}

export interface CheckoutConfigurationListResponse {
  /**
   * Checkout configuration ID, prefixed `ch_`.
   */
  id: string;

  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * When the checkout configuration was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Controls whether checkout charges the buyer immediately or saves payment details
   * for later.
   */
  mode: 'payment' | 'setup';

  /**
   * When the checkout configuration was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Affiliate code applied at checkout, or `null` when none is set.
   */
  affiliate_code?: string | null;

  /**
   * Currency used for setup-mode payment method availability; defaults to `usd` when
   * omitted.
   */
  currency?: string | null;

  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  effective_payment_method_configuration?: CheckoutConfigurationListResponse.EffectivePaymentMethodConfiguration | null;

  /**
   * Custom key-value metadata copied to payments and memberships. `null` without the
   * `checkout_configuration:basic:read` scope.
   */
  metadata?: unknown | null;

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  payment_method_configuration?: CheckoutConfigurationListResponse.PaymentMethodConfiguration | null;

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  plan?: CheckoutConfigurationListResponse.Plan | null;

  /**
   * Checkout URL you can send to customers.
   */
  purchase_url?: string | null;

  /**
   * URL customers are sent to after checkout, or `null` when no redirect is
   * configured.
   */
  redirect_url?: string | null;

  /**
   * 3D Secure behavior for this checkout, or `null` to use the account default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless' | null;
}

export namespace CheckoutConfigurationListResponse {
  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  export interface EffectivePaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  export interface PaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled for checkout.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled for checkout.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  export interface Plan {
    /**
     * Plan ID, prefixed `plan_`.
     */
    id: string;

    /**
     * Whether this plan accepts local currency payments via adaptive pricing.
     */
    adaptive_pricing_enabled: boolean;

    /**
     * Recurring billing interval in days, such as 30 for monthly or 365 for annual.
     * `null` for one-time plans.
     */
    billing_period: number | null;

    /**
     * Three-letter ISO currency code for the plan's prices.
     */
    currency: string;

    /**
     * Access duration in days for expiration-based plans.
     */
    expiration_days: number | null;

    /**
     * Initial purchase price in the plan currency.
     */
    initial_price: number;

    /**
     * Billing model for the plan.
     */
    plan_type: 'renewal' | 'one_time';

    /**
     * Sales method for the plan.
     */
    release_method: 'buy_now' | 'waitlist';

    /**
     * Recurring price charged each billing period.
     */
    renewal_price: number;

    /**
     * 3D Secure behavior for this plan, or `null` to use the account default.
     */
    three_ds_level: 'mandate_challenge' | 'frictionless' | null;

    /**
     * Free trial days before the first renewal charge.
     */
    trial_period_days: number | null;

    /**
     * Whether the plan is visible to customers or hidden from public view.
     */
    visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
  }
}

export interface CheckoutConfigurationCreateParams {
  /**
   * Body param: Account ID, prefixed `biz_`.
   */
  account_id?: string;

  /**
   * Body param: Affiliate code to apply to the checkout.
   */
  affiliate_code?: string | null;

  /**
   * Body param: Currency used for setup-mode payment method availability.
   */
  currency?: string | null;

  /**
   * Body param: Custom key-value metadata copied to payments and memberships.
   */
  metadata?: unknown | null;

  /**
   * Body param: Controls whether checkout charges the buyer immediately or saves
   * payment details for later. Defaults to `payment`.
   */
  mode?: 'payment' | 'setup';

  /**
   * Body param: Payment method overrides for this checkout. `null` uses the plan or
   * platform defaults.
   */
  payment_method_configuration?: CheckoutConfigurationCreateParams.PaymentMethodConfiguration | null;

  /**
   * Body param: Plan attributes used to create or find a plan for this checkout
   * configuration. Mutually exclusive with `plan_id`.
   */
  plan?: CheckoutConfigurationCreateParams.Plan | null;

  /**
   * Body param: Existing plan ID, prefixed `plan_`. Mutually exclusive with `plan`.
   */
  plan_id?: string | null;

  /**
   * Body param: URL customers are sent to after checkout.
   */
  redirect_url?: string | null;

  /**
   * Body param: 3D Secure behavior for this checkout.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless' | null;

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

export namespace CheckoutConfigurationCreateParams {
  /**
   * Payment method overrides for this checkout. `null` uses the plan or platform
   * defaults.
   */
  export interface PaymentMethodConfiguration {
    /**
     * Payment methods explicitly disabled for checkout.
     */
    disabled?: Array<string>;

    /**
     * Payment methods explicitly enabled for checkout.
     */
    enabled?: Array<string>;

    /**
     * Whether platform default payment methods are included.
     */
    include_platform_defaults?: boolean;
  }

  /**
   * Plan attributes used to create or find a plan for this checkout configuration.
   * Mutually exclusive with `plan_id`.
   */
  export interface Plan {
    /**
     * Account ID for the inline plan, prefixed `biz_`. Defaults to the account
     * resolved from the request.
     */
    account_id?: string | null;

    /**
     * Recurring billing interval in days, such as 30 for monthly or 365 for annual.
     */
    billing_period?: number | null;

    /**
     * Three-letter ISO currency code for the plan's prices.
     */
    currency?: string | null;

    /**
     * Customer-visible plan description.
     */
    description?: string | null;

    /**
     * Access duration in days for expiration-based plans.
     */
    expiration_days?: number | null;

    /**
     * Whether to create a new plan instead of reusing a matching one.
     */
    force_create_new_plan?: boolean | null;

    /**
     * Initial purchase price in the plan currency.
     */
    initial_price?: number | null;

    /**
     * Custom key-value metadata stored on the plan.
     */
    metadata?: unknown | null;

    /**
     * Tax classification override for this plan.
     */
    override_tax_type?: string | null;

    /**
     * Payment method overrides for the inline plan. `null` uses platform defaults.
     */
    payment_method_configuration?: Plan.PaymentMethodConfiguration | null;

    /**
     * Billing model for the plan.
     */
    plan_type?: 'renewal' | 'one_time' | null;

    /**
     * Product ID the inline plan should belong to, prefixed `prod_`.
     */
    product_id?: string | null;

    /**
     * Sales method for the plan.
     */
    release_method?: 'buy_now' | 'waitlist' | null;

    /**
     * Recurring price charged each billing period.
     */
    renewal_price?: number | null;

    /**
     * Units available for purchase.
     */
    stock?: number | null;

    /**
     * 3D Secure behavior for the inline plan, or `null` to use the account default.
     */
    three_ds_level?: 'mandate_challenge' | 'frictionless' | null;

    /**
     * Plan display name shown to customers.
     */
    title?: string | null;

    /**
     * Free trial days before the first renewal charge.
     */
    trial_period_days?: number | null;

    /**
     * Whether the plan has unlimited stock.
     */
    unlimited_stock?: boolean | null;

    /**
     * Whether the plan is visible to customers or hidden from public view.
     */
    visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link' | null;
  }

  export namespace Plan {
    /**
     * Payment method overrides for the inline plan. `null` uses platform defaults.
     */
    export interface PaymentMethodConfiguration {
      /**
       * Payment methods explicitly disabled for this plan.
       */
      disabled?: Array<string>;

      /**
       * Payment methods explicitly enabled for this plan.
       */
      enabled?: Array<string>;

      /**
       * Whether platform default payment methods are included.
       */
      include_platform_defaults?: boolean;
    }
  }
}

export interface CheckoutConfigurationRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface CheckoutConfigurationListParams extends CursorPageParams {
  /**
   * Query param: Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Query param: Only return checkout configurations created after this ISO 8601
   * timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only return checkout configurations created before this ISO 8601
   * timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction. Defaults to `desc`.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Number of checkout configurations to return.
   */
  first?: number;

  /**
   * Query param: Field used to sort checkout configurations.
   */
  order?: 'created_at';

  /**
   * Query param: Only return checkout configurations for this plan ID, prefixed
   * `plan_`.
   */
  plan_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace CheckoutConfigurations {
  export {
    type CheckoutModes as CheckoutModes,
    type CheckoutConfigurationCreateResponse as CheckoutConfigurationCreateResponse,
    type CheckoutConfigurationRetrieveResponse as CheckoutConfigurationRetrieveResponse,
    type CheckoutConfigurationListResponse as CheckoutConfigurationListResponse,
    type CheckoutConfigurationListResponsesCursorPage as CheckoutConfigurationListResponsesCursorPage,
    type CheckoutConfigurationCreateParams as CheckoutConfigurationCreateParams,
    type CheckoutConfigurationRetrieveParams as CheckoutConfigurationRetrieveParams,
    type CheckoutConfigurationListParams as CheckoutConfigurationListParams,
  };
}
