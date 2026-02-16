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
   * Retrieves the details of an existing checkout configuration.
   *
   * Required permissions:
   *
   * - `checkout_configuration:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.CheckoutConfiguration> {
    return this._client.get(path`/checkout_configurations/${id}`, options);
  }

  /**
   * Returns a paginated list of checkout configurations for a company, with optional
   * filtering by plan and creation date.
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
 * A checkout configuration is a reusable configuration for a checkout, including
 * the plan, affiliate, and custom metadata. Payments and memberships created from
 * a checkout session inherit its metadata.
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
     * The number of days between each recurring charge. Null for one-time plans. For
     * example, 30 for monthly or 365 for annual billing.
     */
    billing_period: number | null;

    /**
     * The currency used for all prices on this plan (e.g., 'usd', 'eur'). All monetary
     * amounts on the plan are denominated in this currency.
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
     * The billing model for this plan: 'renewal' for recurring subscriptions or
     * 'one_time' for single payments.
     */
    plan_type: Shared.PlanType;

    /**
     * The method used to sell this plan: 'buy_now' for immediate purchase or
     * 'waitlist' for waitlist-based access.
     */
    release_method: Shared.ReleaseMethod;

    /**
     * The recurring price charged every billing_period in the plan's base_currency
     * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
     */
    renewal_price: number;

    /**
     * The number of free trial days before the first charge on a renewal plan. Null if
     * no trial is configured or the current user has already used a trial for this
     * plan.
     */
    trial_period_days: number | null;

    /**
     * Controls whether the plan is visible to customers. When set to 'hidden', the
     * plan is only accessible via direct link.
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
     * The plan attributes to create a new plan inline for this checkout configuration.
     */
    plan: CreateCheckoutSessionInputModePaymentWithPlan.Plan;

    /**
     * An affiliate tracking code to attribute the checkout to a specific affiliate.
     */
    affiliate_code?: string | null;

    /**
     * The available currencies on the platform
     */
    currency?: Shared.Currency | null;

    /**
     * Custom key-value metadata to attach to the checkout configuration.
     */
    metadata?: { [key: string]: unknown } | null;

    mode?: 'payment';

    /**
     * The explicit payment method configuration for the checkout session. Only applies
     * to setup mode. If not provided, the platform or company defaults will apply.
     */
    payment_method_configuration?: CreateCheckoutSessionInputModePaymentWithPlan.PaymentMethodConfiguration | null;

    /**
     * The URL to redirect the user to after checkout is completed.
     */
    redirect_url?: string | null;

    /**
     * The URL of the page where the checkout is being initiated from.
     */
    source_url?: string | null;
  }

  export namespace CreateCheckoutSessionInputModePaymentWithPlan {
    /**
     * The plan attributes to create a new plan inline for this checkout configuration.
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
         * The different industry groups a company can be in.
         */
        industry_group?:
          | 'academic_and_test_prep'
          | 'accessories'
          | 'agriculture_and_farming'
          | 'ai_and_automation_agencies'
          | 'ai_and_automation_software'
          | 'arts_and_crafts'
          | 'automotive'
          | 'b2b_and_professional_marketplaces'
          | 'baby_and_kids'
          | 'beauty_and_personal_care'
          | 'beauty_and_wellness'
          | 'business_and_entrepreneurship'
          | 'business_and_money_groups'
          | 'career_and_professional'
          | 'charity_and_cause_events'
          | 'class_action_settlement'
          | 'clothing_and_apparel'
          | 'communication_and_messaging_software'
          | 'community_and_education_software'
          | 'consulting'
          | 'content_and_clipping_agencies'
          | 'creative_and_content_creation'
          | 'creative_and_content_groups'
          | 'creative_and_education'
          | 'creative_gigs'
          | 'creative_services'
          | 'customer_support_agencies'
          | 'dating_and_relationships'
          | 'delivery_and_logistics'
          | 'dental_and_vision'
          | 'dermatology_and_skin'
          | 'design_and_creative_agencies'
          | 'developer_and_technical_tools'
          | 'development_agencies'
          | 'digital_and_education_marketplaces'
          | 'digital_goods_and_accounts'
          | 'e_commerce_software'
          | 'education_and_business_events'
          | 'education_and_childcare'
          | 'electronics_and_gadgets'
          | 'entertainment_and_leisure'
          | 'entertainment_events'
          | 'family_and_community_events'
          | 'finance_and_investing'
          | 'fitness_and_athletics'
          | 'fitness_and_health_groups'
          | 'fitness_and_recreation'
          | 'fitness_equipment_and_gear'
          | 'food_and_beverage'
          | 'food_and_beverages'
          | 'food_and_hospitality_marketplaces'
          | 'funeral_and_death_care'
          | 'gaming_and_entertainment_software'
          | 'gaming_groups'
          | 'genetic_and_specialized'
          | 'government_and_public'
          | 'health_and_wellness'
          | 'health_and_wellness_services'
          | 'healthcare'
          | 'healthcare_and_wellness_software'
          | 'hobbies_and_lifestyle'
          | 'hobby_and_interest_groups'
          | 'home_and_living'
          | 'home_and_trade_services'
          | 'home_and_trade_storefronts'
          | 'home_improvement_and_tools'
          | 'home_services_gigs'
          | 'hospitality_and_lodging'
          | 'industrial_and_manufacturing'
          | 'industry_specific_software'
          | 'language_and_communication'
          | 'legal_and_compliance'
          | 'lifestyle_and_culture'
          | 'lifestyle_and_personal_growth_groups'
          | 'lifestyle_and_wellness_events'
          | 'logistics_and_transportation_services'
          | 'marketing_agencies'
          | 'marketing_and_advertising'
          | 'marketing_and_sales_software'
          | 'media_and_publishing_companies'
          | 'mental_health_and_behavioral'
          | 'miscellaneous'
          | 'music_and_performing_arts'
          | 'news_and_politics'
          | 'nonprofit_and_charity'
          | 'office_and_business_supplies'
          | 'outdoor_and_sports'
          | 'personal_development'
          | 'personal_finance'
          | 'personal_services'
          | 'pet_services'
          | 'pets_and_animals'
          | 'primary_and_general_care'
          | 'product_marketplaces'
          | 'productivity_and_business_ops'
          | 'professional_gigs'
          | 'professional_services'
          | 'professional_services_storefront'
          | 'publishing_and_info_products'
          | 'real_estate'
          | 'real_estate_software'
          | 'recruiting_and_staffing'
          | 'rehabilitation_and_therapy'
          | 'rental_marketplaces'
          | 'retail'
          | 'sales_agencies'
          | 'sales_and_revenue'
          | 'security_and_investigations'
          | 'security_and_privacy_software'
          | 'service_marketplaces'
          | 'sleep_and_chronic_conditions'
          | 'social_and_networking_events'
          | 'specialized_gigs'
          | 'specialty_medical_care'
          | 'spirituality_and_mindfulness'
          | 'spirituality_and_personal_growth'
          | 'sports_and_fitness_events'
          | 'sports_betting_and_gambling'
          | 'sports_betting_groups'
          | 'supplements_and_nutrition'
          | 'sustainability_and_eco_products'
          | 'task_and_errands'
          | 'tech_and_ai'
          | 'tech_and_dev_groups'
          | 'tech_and_development'
          | 'trading_and_finance_software'
          | 'trading_and_investing'
          | 'trading_and_investing_groups'
          | 'transportation'
          | 'veterinary'
          | 'video_games_and_esports'
          | 'weight_and_metabolic_health'
          | 'wellness_and_alternative'
          | 'womens_and_mens_health'
          | null;

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
     * The explicit payment method configuration for the checkout session. Only applies
     * to setup mode. If not provided, the platform or company defaults will apply.
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
     * The unique identifier of an existing plan to use for this checkout
     * configuration.
     */
    plan_id: string;

    /**
     * An affiliate tracking code to attribute the checkout to a specific affiliate.
     */
    affiliate_code?: string | null;

    /**
     * The available currencies on the platform
     */
    currency?: Shared.Currency | null;

    /**
     * Custom key-value metadata to attach to the checkout configuration.
     */
    metadata?: { [key: string]: unknown } | null;

    mode?: 'payment';

    /**
     * The explicit payment method configuration for the checkout session. Only applies
     * to setup mode. If not provided, the platform or company defaults will apply.
     */
    payment_method_configuration?: CreateCheckoutSessionInputModePaymentWithPlanID.PaymentMethodConfiguration | null;

    /**
     * The URL to redirect the user to after checkout is completed.
     */
    redirect_url?: string | null;

    /**
     * The URL of the page where the checkout is being initiated from.
     */
    source_url?: string | null;
  }

  export namespace CreateCheckoutSessionInputModePaymentWithPlanID {
    /**
     * The explicit payment method configuration for the checkout session. Only applies
     * to setup mode. If not provided, the platform or company defaults will apply.
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
     * The unique identifier of the company to create the checkout configuration for.
     * Only required in setup mode.
     */
    company_id: string;

    mode: 'setup';

    /**
     * The available currencies on the platform
     */
    currency?: Shared.Currency | null;

    /**
     * Custom key-value metadata to attach to the checkout configuration.
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * The explicit payment method configuration for the checkout session. Only applies
     * to setup mode. If not provided, the platform or company defaults will apply.
     */
    payment_method_configuration?: CreateCheckoutSessionInputModeSetup.PaymentMethodConfiguration | null;

    /**
     * The URL to redirect the user to after checkout is completed.
     */
    redirect_url?: string | null;

    /**
     * The URL of the page where the checkout is being initiated from.
     */
    source_url?: string | null;
  }

  export namespace CreateCheckoutSessionInputModeSetup {
    /**
     * The explicit payment method configuration for the checkout session. Only applies
     * to setup mode. If not provided, the platform or company defaults will apply.
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
   * The unique identifier of the company to list checkout configurations for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return checkout configurations created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return checkout configurations created before this timestamp.
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
   * Filter checkout configurations to only those associated with this plan
   * identifier.
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
