// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckoutConfigurations extends APIResource {
  /**
   * Creates a new checkout configuration
   *
   * Required permissions:
   *
   * - `checkout_configuration:create`
   * - `plan:create`
   * - `access_pass:create`
   * - `access_pass:update`
   * - `checkout_configuration:basic:read`
   *
   * @example
   * ```ts
   * const checkoutConfiguration =
   *   await client.checkoutConfigurations.create({
   *     plan_id: 'plan_xxxxxxxxxxxxx',
   *   });
   * ```
   */
  create(
    body: CheckoutConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.CheckoutConfiguration> {
    return this._client.post('/checkout_configurations', { body, ...options });
  }

  /**
   * Retrieves a checkout configuration by ID
   *
   * Required permissions:
   *
   * - `checkout_configuration:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.CheckoutConfiguration> {
    return this._client.get(path`/checkout_configurations/${id}`, options);
  }

  /**
   * Lists checkout configurations
   *
   * Required permissions:
   *
   * - `checkout_configuration:basic:read`
   */
  list(
    query: CheckoutConfigurationListParams,
    options?: RequestOptions,
  ): PagePromise<CheckoutConfigurationListResponsesCursorPage, CheckoutConfigurationListResponse> {
    return this._client.getAPIList(
      '/checkout_configurations',
      CursorPage<CheckoutConfigurationListResponse>,
      { query, ...options },
    );
  }
}

export type CheckoutConfigurationListResponsesCursorPage = CursorPage<CheckoutConfigurationListResponse>;

/**
 * The different modes a checkout can be set to.
 */
export type CheckoutModes = 'payment' | 'setup';

/**
 * A checkout session is a reusable configuration for a checkout, including the
 * plan, affiliate, and custom metadata. Payments and memberships created from a
 * checkout session inherit its metadata.
 */
export interface CheckoutConfigurationListResponse {
  /**
   * The unique identifier for the checkout session.
   */
  id: string;

  /**
   * The affiliate code to use for the checkout configuration
   */
  affiliate_code: string | null;

  /**
   * The ID of the company to use for the checkout configuration
   */
  company_id: string;

  /**
   * The available currencies on the platform
   */
  currency: Shared.Currency | null;

  /**
   * The metadata to use for the checkout configuration
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The mode of the checkout session.
   */
  mode: CheckoutModes;

  /**
   * The explicit payment method configuration for the session, if any. This
   * currently only works in 'setup' mode. Use the plan's
   * payment_method_configuration for payment method.
   */
  payment_method_configuration: CheckoutConfigurationListResponse.PaymentMethodConfiguration | null;

  /**
   * The plan to use for the checkout configuration
   */
  plan: CheckoutConfigurationListResponse.Plan | null;

  /**
   * A URL you can send to customers to complete a checkout. It looks like
   * `/checkout/plan_xxxx?session={id}`
   */
  purchase_url: string;

  /**
   * The URL to redirect the user to after the checkout configuration is created
   */
  redirect_url: string | null;
}

export namespace CheckoutConfigurationListResponse {
  /**
   * The explicit payment method configuration for the session, if any. This
   * currently only works in 'setup' mode. Use the plan's
   * payment_method_configuration for payment method.
   */
  export interface PaymentMethodConfiguration {
    /**
     * An array of payment method identifiers that are explicitly disabled. Only
     * applies if the include_platform_defaults is true.
     */
    disabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * An array of payment method identifiers that are explicitly enabled. This means
     * these payment methods will be shown on checkout. Example use case is to only
     * enable a specific payment method like cashapp, or extending the platform
     * defaults with additional methods.
     */
    enabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * Whether Whop's platform default payment method enablement settings are included
     * in this configuration. The full list of default payment methods can be found in
     * the documentation at docs.whop.com/payments.
     */
    include_platform_defaults: boolean;
  }

  /**
   * The plan to use for the checkout configuration
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;

    /**
     * The interval in days at which the plan charges (renewal plans).
     */
    billing_period: number | null;

    /**
     * The respective currency identifier for the plan.
     */
    currency: Shared.Currency;

    /**
     * The number of days until the membership expires (for expiration-based plans).
     * For example, 365 for a one-year access pass.
     */
    expiration_days: number | null;

    /**
     * The initial purchase price in the plan's base_currency (e.g., 49.99 for $49.99).
     * For one-time plans, this is the full price. For renewal plans, this is charged
     * on top of the first renewal_price.
     */
    initial_price: number;

    /**
     * Indicates if the plan is a one time payment or recurring.
     */
    plan_type: Shared.PlanType;

    /**
     * This is the release method the business uses to sell this plan.
     */
    release_method: Shared.ReleaseMethod;

    /**
     * The recurring price charged every billing_period in the plan's base_currency
     * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
     */
    renewal_price: number;

    /**
     * The number of free trial days added before a renewal plan.
     */
    trial_period_days: number | null;

    /**
     * Shows or hides the plan from public/business view.
     */
    visibility: Shared.Visibility;
  }
}

export type CheckoutConfigurationCreateParams =
  | CheckoutConfigurationCreateParams.CreateCheckoutSessionInputModePaymentWithPlan
  | CheckoutConfigurationCreateParams.CreateCheckoutSessionInputModePaymentWithPlanID
  | CheckoutConfigurationCreateParams.CreateCheckoutSessionInputModeSetup;

export declare namespace CheckoutConfigurationCreateParams {
  export interface CreateCheckoutSessionInputModePaymentWithPlan {
    /**
     * Pass this object to create a new plan for this checkout configuration
     */
    plan: CreateCheckoutSessionInputModePaymentWithPlan.Plan;

    /**
     * The affiliate code to use for the checkout configuration
     */
    affiliate_code?: string | null;

    /**
     * The available currencies on the platform
     */
    currency?: Shared.Currency | null;

    /**
     * The metadata to use for the checkout configuration
     */
    metadata?: { [key: string]: unknown } | null;

    mode?: 'payment';

    /**
     * This currently only works for configurations made in 'setup' mode. The explicit
     * payment method configuration for the checkout session. If not provided, the
     * platform or company's defaults will apply.
     */
    payment_method_configuration?: CreateCheckoutSessionInputModePaymentWithPlan.PaymentMethodConfiguration | null;

    /**
     * The URL to redirect the user to after the checkout configuration is created
     */
    redirect_url?: string | null;

    /**
     * The URL of the page where the checkout is being initiated from.
     */
    source_url?: string | null;
  }

  export namespace CreateCheckoutSessionInputModePaymentWithPlan {
    /**
     * Pass this object to create a new plan for this checkout configuration
     */
    export interface Plan {
      /**
       * The company the plan should be created for.
       */
      company_id: string;

      /**
       * The respective currency identifier for the plan.
       */
      currency: Shared.Currency;

      /**
       * The application fee amount collected by the platform from this connected
       * account. Provided as a number in dollars (e.g., 5.00 for $5.00). Must be less
       * than the total payment amount. Only valid for connected accounts with a parent
       * company.
       */
      application_fee_amount?: number | null;

      /**
       * The interval in days at which the plan charges (renewal plans). For example, 30
       * for monthly billing.
       */
      billing_period?: number | null;

      /**
       * An array of custom field objects.
       */
      custom_fields?: Array<Plan.CustomField> | null;

      /**
       * The description of the plan.
       */
      description?: string | null;

      /**
       * The number of days until the membership expires (for expiration-based plans).
       * For example, 365 for a one-year access pass.
       */
      expiration_days?: number | null;

      /**
       * Whether to force the creation of a new plan even if one with the same attributes
       * already exists.
       */
      force_create_new_plan?: boolean | null;

      /**
       * An image for the plan. This will be visible on the product page to customers.
       */
      image?: Plan.Image | null;

      /**
       * An additional amount charged upon first purchase. Provided as a number in
       * dollars (e.g., 10.00 for $10.00).
       */
      initial_price?: number | null;

      /**
       * A personal description or notes section for the business.
       */
      internal_notes?: string | null;

      /**
       * Whether or not the tax is included in a plan's price (or if it hasn't been set
       * up)
       */
      override_tax_type?: Shared.TaxType | null;

      /**
       * The explicit payment method configuration for the plan. If not provided, the
       * platform or company's defaults will apply.
       */
      payment_method_configuration?: Plan.PaymentMethodConfiguration | null;

      /**
       * The type of plan that can be attached to a product
       */
      plan_type?: Shared.PlanType | null;

      /**
       * Pass this object to create a new product for this plan. We will use the product
       * external identifier to find or create an existing product.
       */
      product?: Plan.Product | null;

      /**
       * The product the plan is related to. Either this or product is required.
       */
      product_id?: string | null;

      /**
       * The methods of how a plan can be released.
       */
      release_method?: Shared.ReleaseMethod | null;

      /**
       * The amount the customer is charged every billing period. Provided as a number in
       * dollars (e.g., 9.99 for $9.99/period).
       */
      renewal_price?: number | null;

      /**
       * The number of payments required before pausing the subscription.
       */
      split_pay_required_payments?: number | null;

      /**
       * The number of units available for purchase. If not provided, stock is unlimited.
       */
      stock?: number | null;

      /**
       * The title of the plan. This will be visible on the product page to customers.
       */
      title?: string | null;

      /**
       * The number of free trial days added before a renewal plan.
       */
      trial_period_days?: number | null;

      /**
       * Visibility of a resource
       */
      visibility?: Shared.Visibility | null;
    }

    export namespace Plan {
      export interface CustomField {
        /**
         * The type of the custom field.
         */
        field_type: 'text';

        /**
         * The name of the custom field.
         */
        name: string;

        /**
         * The ID of the custom field (if being updated)
         */
        id?: string | null;

        /**
         * The order of the field.
         */
        order?: number | null;

        /**
         * The placeholder value of the field.
         */
        placeholder?: string | null;

        /**
         * Whether or not the field is required.
         */
        required?: boolean | null;
      }

      /**
       * An image for the plan. This will be visible on the product page to customers.
       */
      export interface Image {
        /**
         * The ID of an existing file object.
         */
        id: string;
      }

      /**
       * The explicit payment method configuration for the plan. If not provided, the
       * platform or company's defaults will apply.
       */
      export interface PaymentMethodConfiguration {
        /**
         * An array of payment method identifiers that are explicitly disabled. Only
         * applies if the include_platform_defaults is true.
         */
        disabled: Array<PaymentsAPI.PaymentMethodTypes>;

        /**
         * An array of payment method identifiers that are explicitly enabled. This means
         * these payment methods will be shown on checkout. Example use case is to only
         * enable a specific payment method like cashapp, or extending the platform
         * defaults with additional methods.
         */
        enabled: Array<PaymentsAPI.PaymentMethodTypes>;

        /**
         * Whether Whop's platform default payment method enablement settings are included
         * in this configuration. The full list of default payment methods can be found in
         * the documentation at docs.whop.com/payments.
         */
        include_platform_defaults: boolean;
      }

      /**
       * Pass this object to create a new product for this plan. We will use the product
       * external identifier to find or create an existing product.
       */
      export interface Product {
        /**
         * A unique ID used to find or create a product. When provided during creation, we
         * will look for an existing product with this external identifier — if found, it
         * will be updated; otherwise, a new product will be created.
         */
        external_identifier: string;

        /**
         * The title of the product.
         */
        title: string;

        /**
         * The different business types a company can be.
         */
        business_type?: Shared.BusinessTypes | null;

        /**
         * Whether or not to collect shipping information at checkout from the customer.
         */
        collect_shipping_address?: boolean | null;

        /**
         * The custom statement descriptor for the product i.e. WHOP\*SPORTS, must be
         * between 5 and 22 characters, contain at least one letter, and not contain any of
         * the following characters: <, >, \, ', "
         */
        custom_statement_descriptor?: string | null;

        /**
         * A written description of the product.
         */
        description?: string | null;

        /**
         * The percentage of the revenue that goes to the global affiliate program.
         */
        global_affiliate_percentage?: number | null;

        /**
         * The different statuses of the global affiliate program for a product.
         */
        global_affiliate_status?: Shared.GlobalAffiliateStatus | null;

        /**
         * The headline of the product.
         */
        headline?: string | null;

        /**
         * The different industry types a company can be in.
         */
        industry_type?: Shared.IndustryTypes | null;

        /**
         * The ID of the product tax code to apply to this product.
         */
        product_tax_code_id?: string | null;

        /**
         * The URL to redirect the customer to after a purchase.
         */
        redirect_purchase_url?: string | null;

        /**
         * The route of the product.
         */
        route?: string | null;

        /**
         * Visibility of a resource
         */
        visibility?: Shared.Visibility | null;
      }
    }

    /**
     * This currently only works for configurations made in 'setup' mode. The explicit
     * payment method configuration for the checkout session. If not provided, the
     * platform or company's defaults will apply.
     */
    export interface PaymentMethodConfiguration {
      /**
       * An array of payment method identifiers that are explicitly disabled. Only
       * applies if the include_platform_defaults is true.
       */
      disabled: Array<PaymentsAPI.PaymentMethodTypes>;

      /**
       * An array of payment method identifiers that are explicitly enabled. This means
       * these payment methods will be shown on checkout. Example use case is to only
       * enable a specific payment method like cashapp, or extending the platform
       * defaults with additional methods.
       */
      enabled: Array<PaymentsAPI.PaymentMethodTypes>;

      /**
       * Whether Whop's platform default payment method enablement settings are included
       * in this configuration. The full list of default payment methods can be found in
       * the documentation at docs.whop.com/payments.
       */
      include_platform_defaults: boolean;
    }
  }

  export interface CreateCheckoutSessionInputModePaymentWithPlanID {
    /**
     * The ID of the plan to use for the checkout configuration
     */
    plan_id: string;

    /**
     * The affiliate code to use for the checkout configuration
     */
    affiliate_code?: string | null;

    /**
     * The available currencies on the platform
     */
    currency?: Shared.Currency | null;

    /**
     * The metadata to use for the checkout configuration
     */
    metadata?: { [key: string]: unknown } | null;

    mode?: 'payment';

    /**
     * This currently only works for configurations made in 'setup' mode. The explicit
     * payment method configuration for the checkout session. If not provided, the
     * platform or company's defaults will apply.
     */
    payment_method_configuration?: CreateCheckoutSessionInputModePaymentWithPlanID.PaymentMethodConfiguration | null;

    /**
     * The URL to redirect the user to after the checkout configuration is created
     */
    redirect_url?: string | null;

    /**
     * The URL of the page where the checkout is being initiated from.
     */
    source_url?: string | null;
  }

  export namespace CreateCheckoutSessionInputModePaymentWithPlanID {
    /**
     * This currently only works for configurations made in 'setup' mode. The explicit
     * payment method configuration for the checkout session. If not provided, the
     * platform or company's defaults will apply.
     */
    export interface PaymentMethodConfiguration {
      /**
       * An array of payment method identifiers that are explicitly disabled. Only
       * applies if the include_platform_defaults is true.
       */
      disabled: Array<PaymentsAPI.PaymentMethodTypes>;

      /**
       * An array of payment method identifiers that are explicitly enabled. This means
       * these payment methods will be shown on checkout. Example use case is to only
       * enable a specific payment method like cashapp, or extending the platform
       * defaults with additional methods.
       */
      enabled: Array<PaymentsAPI.PaymentMethodTypes>;

      /**
       * Whether Whop's platform default payment method enablement settings are included
       * in this configuration. The full list of default payment methods can be found in
       * the documentation at docs.whop.com/payments.
       */
      include_platform_defaults: boolean;
    }
  }

  export interface CreateCheckoutSessionInputModeSetup {
    /**
     * The ID of the company for which to generate the checkout configuration. Only
     * required in setup mode.
     */
    company_id: string;

    mode: 'setup';

    /**
     * The available currencies on the platform
     */
    currency?: Shared.Currency | null;

    /**
     * The metadata to use for the checkout configuration
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * This currently only works for configurations made in 'setup' mode. The explicit
     * payment method configuration for the checkout session. If not provided, the
     * platform or company's defaults will apply.
     */
    payment_method_configuration?: CreateCheckoutSessionInputModeSetup.PaymentMethodConfiguration | null;

    /**
     * The URL to redirect the user to after the checkout configuration is created
     */
    redirect_url?: string | null;

    /**
     * The URL of the page where the checkout is being initiated from.
     */
    source_url?: string | null;
  }

  export namespace CreateCheckoutSessionInputModeSetup {
    /**
     * This currently only works for configurations made in 'setup' mode. The explicit
     * payment method configuration for the checkout session. If not provided, the
     * platform or company's defaults will apply.
     */
    export interface PaymentMethodConfiguration {
      /**
       * An array of payment method identifiers that are explicitly disabled. Only
       * applies if the include_platform_defaults is true.
       */
      disabled: Array<PaymentsAPI.PaymentMethodTypes>;

      /**
       * An array of payment method identifiers that are explicitly enabled. This means
       * these payment methods will be shown on checkout. Example use case is to only
       * enable a specific payment method like cashapp, or extending the platform
       * defaults with additional methods.
       */
      enabled: Array<PaymentsAPI.PaymentMethodTypes>;

      /**
       * Whether Whop's platform default payment method enablement settings are included
       * in this configuration. The full list of default payment methods can be found in
       * the documentation at docs.whop.com/payments.
       */
      include_platform_defaults: boolean;
    }
  }
}

export interface CheckoutConfigurationListParams extends CursorPageParams {
  /**
   * The ID of the company to list checkout configurations for
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
   * The ID of the plan to filter checkout configurations by
   */
  plan_id?: string | null;
}

export declare namespace CheckoutConfigurations {
  export {
    type CheckoutModes as CheckoutModes,
    type CheckoutConfigurationListResponse as CheckoutConfigurationListResponse,
    type CheckoutConfigurationListResponsesCursorPage as CheckoutConfigurationListResponsesCursorPage,
    type CheckoutConfigurationCreateParams as CheckoutConfigurationCreateParams,
    type CheckoutConfigurationListParams as CheckoutConfigurationListParams,
  };
}
