// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { InvoiceListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Invoices
 */
export class Invoices extends APIResource {
  /**
   * Create an invoice for a customer. The invoice can be charged automatically using
   * a stored payment method, or sent to the customer for manual payment.
   *
   * Required permissions:
   *
   * - `invoice:create`
   * - `plan:basic:read`
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.create({
   *   collection_method: 'send_invoice',
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   due_date: '2023-12-01T05:00:00.401Z',
   *   member_id: 'mber_xxxxxxxxxxxxx',
   *   plan: {},
   *   product: { title: 'title' },
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<Shared.Invoice> {
    return this._client.post('/invoices', { body, ...options });
  }

  /**
   * Retrieves the details of an existing invoice.
   *
   * Required permissions:
   *
   * - `invoice:basic:read`
   * - `plan:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Invoice> {
    return this._client.get(path`/invoices/${id}`, options);
  }

  /**
   * Returns a paginated list of invoices for a company, with optional filtering by
   * product, status, collection method, and creation date.
   *
   * Required permissions:
   *
   * - `invoice:basic:read`
   * - `plan:basic:read`
   */
  list(
    query: InvoiceListParams,
    options?: RequestOptions,
  ): PagePromise<InvoiceListItemsCursorPage, Shared.InvoiceListItem> {
    return this._client.getAPIList('/invoices', CursorPage<Shared.InvoiceListItem>, { query, ...options });
  }

  /**
   * Void an open invoice so it can no longer be paid. Voiding is permanent and
   * cannot be undone.
   *
   * Required permissions:
   *
   * - `invoice:update`
   */
  void(id: string, options?: RequestOptions): APIPromise<InvoiceVoidResponse> {
    return this._client.post(path`/invoices/${id}/void`, options);
  }
}

/**
 * Represents `true` or `false` values.
 */
export type InvoiceVoidResponse = boolean;

export type InvoiceCreateParams =
  | InvoiceCreateParams.CreateInvoiceInputWithProductAndMemberID
  | InvoiceCreateParams.CreateInvoiceInputWithProductAndEmailAddress
  | InvoiceCreateParams.CreateInvoiceInputWithProductIDAndMemberID
  | InvoiceCreateParams.CreateInvoiceInputWithProductIDAndEmailAddress;

export declare namespace InvoiceCreateParams {
  export interface CreateInvoiceInputWithProductAndMemberID {
    /**
     * How the invoice should be collected. Use charge_automatically to charge a stored
     * payment method, or send_invoice to email the customer.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The unique identifier of the company to create this invoice for.
     */
    company_id: string;

    /**
     * The date by which the invoice must be paid.
     */
    due_date: string;

    /**
     * The unique identifier of an existing member to create this invoice for. If not
     * provided, you must supply an email_address and customer_name.
     */
    member_id: string;

    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    plan: CreateInvoiceInputWithProductAndMemberID.Plan;

    /**
     * The properties of the product to create for this invoice. Provide this to create
     * a new product inline.
     */
    product: CreateInvoiceInputWithProductAndMemberID.Product;

    /**
     * The date and time when the invoice will be automatically finalized and charged.
     * Only valid when collection_method is charge_automatically. If not provided, the
     * charge will be processed immediately.
     */
    automatically_finalizes_at?: string | null;

    /**
     * Whether to charge the customer a buyer fee on this invoice.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer. Required when creating an invoice for a customer who
     * is not yet a member of the company.
     */
    customer_name?: string | null;

    /**
     * The unique identifier of the payment method to charge. Required when
     * collection_method is charge_automatically.
     */
    payment_method_id?: string | null;

    /**
     * The payment token ID to use for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    payment_token_id?: string | null;
  }

  export namespace CreateInvoiceInputWithProductAndMemberID {
    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    export interface Plan {
      /**
       * The interval in days at which the plan charges (renewal plans).
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
       * The number of days until the membership expires and revokes access (expiration
       * plans). For example, 365 for a one-year access period.
       */
      expiration_days?: number | null;

      /**
       * An additional amount charged upon first purchase. Use only if a one time payment
       * OR you want to charge an additional amount on top of the renewal price. Provided
       * as a number in the specified currency. Eg: 10.43 for $10.43
       */
      initial_price?: number | null;

      /**
       * A personal description or notes section for the business.
       */
      internal_notes?: string | null;

      /**
       * Whether this plan uses legacy payment method controls
       */
      legacy_payment_method_controls?: boolean | null;

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
       * The methods of how a plan can be released.
       */
      release_method?: Shared.ReleaseMethod | null;

      /**
       * The amount the customer is charged every billing period. Use only if a recurring
       * payment. Provided as a number in the specified currency. Eg: 10.43 for $10.43
       */
      renewal_price?: number | null;

      /**
       * The number of units available for purchase.
       */
      stock?: number | null;

      /**
       * The number of free trial days added before a renewal plan.
       */
      trial_period_days?: number | null;

      /**
       * When true, the plan has unlimited stock (stock field is ignored). When false,
       * purchases are limited by the stock field.
       */
      unlimited_stock?: boolean | null;

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
    }

    /**
     * The properties of the product to create for this invoice. Provide this to create
     * a new product inline.
     */
    export interface Product {
      /**
       * The title of the product.
       */
      title: string;

      /**
       * The ID of the product tax code to apply to this product.
       */
      product_tax_code_id?: string | null;
    }
  }

  export interface CreateInvoiceInputWithProductAndEmailAddress {
    /**
     * How the invoice should be collected. Use charge_automatically to charge a stored
     * payment method, or send_invoice to email the customer.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The unique identifier of the company to create this invoice for.
     */
    company_id: string;

    /**
     * The date by which the invoice must be paid.
     */
    due_date: string;

    /**
     * The email address of the customer. Required when creating an invoice for a
     * customer who is not yet a member of the company.
     */
    email_address: string;

    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    plan: CreateInvoiceInputWithProductAndEmailAddress.Plan;

    /**
     * The properties of the product to create for this invoice. Provide this to create
     * a new product inline.
     */
    product: CreateInvoiceInputWithProductAndEmailAddress.Product;

    /**
     * The date and time when the invoice will be automatically finalized and charged.
     * Only valid when collection_method is charge_automatically. If not provided, the
     * charge will be processed immediately.
     */
    automatically_finalizes_at?: string | null;

    /**
     * Whether to charge the customer a buyer fee on this invoice.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer. Required when creating an invoice for a customer who
     * is not yet a member of the company.
     */
    customer_name?: string | null;

    /**
     * The unique identifier of the payment method to charge. Required when
     * collection_method is charge_automatically.
     */
    payment_method_id?: string | null;

    /**
     * The payment token ID to use for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    payment_token_id?: string | null;
  }

  export namespace CreateInvoiceInputWithProductAndEmailAddress {
    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    export interface Plan {
      /**
       * The interval in days at which the plan charges (renewal plans).
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
       * The number of days until the membership expires and revokes access (expiration
       * plans). For example, 365 for a one-year access period.
       */
      expiration_days?: number | null;

      /**
       * An additional amount charged upon first purchase. Use only if a one time payment
       * OR you want to charge an additional amount on top of the renewal price. Provided
       * as a number in the specified currency. Eg: 10.43 for $10.43
       */
      initial_price?: number | null;

      /**
       * A personal description or notes section for the business.
       */
      internal_notes?: string | null;

      /**
       * Whether this plan uses legacy payment method controls
       */
      legacy_payment_method_controls?: boolean | null;

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
       * The methods of how a plan can be released.
       */
      release_method?: Shared.ReleaseMethod | null;

      /**
       * The amount the customer is charged every billing period. Use only if a recurring
       * payment. Provided as a number in the specified currency. Eg: 10.43 for $10.43
       */
      renewal_price?: number | null;

      /**
       * The number of units available for purchase.
       */
      stock?: number | null;

      /**
       * The number of free trial days added before a renewal plan.
       */
      trial_period_days?: number | null;

      /**
       * When true, the plan has unlimited stock (stock field is ignored). When false,
       * purchases are limited by the stock field.
       */
      unlimited_stock?: boolean | null;

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
    }

    /**
     * The properties of the product to create for this invoice. Provide this to create
     * a new product inline.
     */
    export interface Product {
      /**
       * The title of the product.
       */
      title: string;

      /**
       * The ID of the product tax code to apply to this product.
       */
      product_tax_code_id?: string | null;
    }
  }

  export interface CreateInvoiceInputWithProductIDAndMemberID {
    /**
     * How the invoice should be collected. Use charge_automatically to charge a stored
     * payment method, or send_invoice to email the customer.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The unique identifier of the company to create this invoice for.
     */
    company_id: string;

    /**
     * The date by which the invoice must be paid.
     */
    due_date: string;

    /**
     * The unique identifier of an existing member to create this invoice for. If not
     * provided, you must supply an email_address and customer_name.
     */
    member_id: string;

    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    plan: CreateInvoiceInputWithProductIDAndMemberID.Plan;

    /**
     * The unique identifier of an existing product to create this invoice for.
     */
    product_id: string;

    /**
     * The date and time when the invoice will be automatically finalized and charged.
     * Only valid when collection_method is charge_automatically. If not provided, the
     * charge will be processed immediately.
     */
    automatically_finalizes_at?: string | null;

    /**
     * Whether to charge the customer a buyer fee on this invoice.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer. Required when creating an invoice for a customer who
     * is not yet a member of the company.
     */
    customer_name?: string | null;

    /**
     * The unique identifier of the payment method to charge. Required when
     * collection_method is charge_automatically.
     */
    payment_method_id?: string | null;

    /**
     * The payment token ID to use for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    payment_token_id?: string | null;
  }

  export namespace CreateInvoiceInputWithProductIDAndMemberID {
    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    export interface Plan {
      /**
       * The interval in days at which the plan charges (renewal plans).
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
       * The number of days until the membership expires and revokes access (expiration
       * plans). For example, 365 for a one-year access period.
       */
      expiration_days?: number | null;

      /**
       * An additional amount charged upon first purchase. Use only if a one time payment
       * OR you want to charge an additional amount on top of the renewal price. Provided
       * as a number in the specified currency. Eg: 10.43 for $10.43
       */
      initial_price?: number | null;

      /**
       * A personal description or notes section for the business.
       */
      internal_notes?: string | null;

      /**
       * Whether this plan uses legacy payment method controls
       */
      legacy_payment_method_controls?: boolean | null;

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
       * The methods of how a plan can be released.
       */
      release_method?: Shared.ReleaseMethod | null;

      /**
       * The amount the customer is charged every billing period. Use only if a recurring
       * payment. Provided as a number in the specified currency. Eg: 10.43 for $10.43
       */
      renewal_price?: number | null;

      /**
       * The number of units available for purchase.
       */
      stock?: number | null;

      /**
       * The number of free trial days added before a renewal plan.
       */
      trial_period_days?: number | null;

      /**
       * When true, the plan has unlimited stock (stock field is ignored). When false,
       * purchases are limited by the stock field.
       */
      unlimited_stock?: boolean | null;

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
    }
  }

  export interface CreateInvoiceInputWithProductIDAndEmailAddress {
    /**
     * How the invoice should be collected. Use charge_automatically to charge a stored
     * payment method, or send_invoice to email the customer.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The unique identifier of the company to create this invoice for.
     */
    company_id: string;

    /**
     * The date by which the invoice must be paid.
     */
    due_date: string;

    /**
     * The email address of the customer. Required when creating an invoice for a
     * customer who is not yet a member of the company.
     */
    email_address: string;

    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    plan: CreateInvoiceInputWithProductIDAndEmailAddress.Plan;

    /**
     * The unique identifier of an existing product to create this invoice for.
     */
    product_id: string;

    /**
     * The date and time when the invoice will be automatically finalized and charged.
     * Only valid when collection_method is charge_automatically. If not provided, the
     * charge will be processed immediately.
     */
    automatically_finalizes_at?: string | null;

    /**
     * Whether to charge the customer a buyer fee on this invoice.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer. Required when creating an invoice for a customer who
     * is not yet a member of the company.
     */
    customer_name?: string | null;

    /**
     * The unique identifier of the payment method to charge. Required when
     * collection_method is charge_automatically.
     */
    payment_method_id?: string | null;

    /**
     * The payment token ID to use for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    payment_token_id?: string | null;
  }

  export namespace CreateInvoiceInputWithProductIDAndEmailAddress {
    /**
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    export interface Plan {
      /**
       * The interval in days at which the plan charges (renewal plans).
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
       * The number of days until the membership expires and revokes access (expiration
       * plans). For example, 365 for a one-year access period.
       */
      expiration_days?: number | null;

      /**
       * An additional amount charged upon first purchase. Use only if a one time payment
       * OR you want to charge an additional amount on top of the renewal price. Provided
       * as a number in the specified currency. Eg: 10.43 for $10.43
       */
      initial_price?: number | null;

      /**
       * A personal description or notes section for the business.
       */
      internal_notes?: string | null;

      /**
       * Whether this plan uses legacy payment method controls
       */
      legacy_payment_method_controls?: boolean | null;

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
       * The methods of how a plan can be released.
       */
      release_method?: Shared.ReleaseMethod | null;

      /**
       * The amount the customer is charged every billing period. Use only if a recurring
       * payment. Provided as a number in the specified currency. Eg: 10.43 for $10.43
       */
      renewal_price?: number | null;

      /**
       * The number of units available for purchase.
       */
      stock?: number | null;

      /**
       * The number of free trial days added before a renewal plan.
       */
      trial_period_days?: number | null;

      /**
       * When true, the plan has unlimited stock (stock field is ignored). When false,
       * purchases are limited by the stock field.
       */
      unlimited_stock?: boolean | null;

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
    }
  }
}

export interface InvoiceListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list invoices for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter invoices by their collection method.
   */
  collection_methods?: Array<Shared.CollectionMethod> | null;

  /**
   * Only return invoices created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return invoices created before this timestamp.
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
   * Which columns can be used to sort.
   */
  order?: 'id' | 'created_at' | 'due_date' | null;

  /**
   * Filter invoices to only those associated with these specific product
   * identifiers.
   */
  product_ids?: Array<string> | null;

  /**
   * Filter invoices by their current status.
   */
  statuses?: Array<Shared.InvoiceStatus> | null;
}

export declare namespace Invoices {
  export {
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}

export { type InvoiceListItemsCursorPage };
