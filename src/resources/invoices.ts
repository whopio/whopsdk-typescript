// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as InvoicesAPI from './invoices';
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
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.create({
   *   collection_method: 'send_invoice',
   *   company_id: 'biz_xxxxxxxxxxxxxx',
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
   */
  list(
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvoiceListItemsCursorPage, Shared.InvoiceListItem> {
    return this._client.getAPIList('/invoices', CursorPage<Shared.InvoiceListItem>, { query, ...options });
  }

  /**
   * Mark an open invoice as paid when payment was collected outside of Whop.
   *
   * Required permissions:
   *
   * - `invoice:update`
   */
  markPaid(id: string, options?: RequestOptions): APIPromise<InvoiceMarkPaidResponse> {
    return this._client.post(path`/invoices/${id}/mark_paid`, options);
  }

  /**
   * Mark an open invoice as uncollectible when payment is not expected.
   *
   * Required permissions:
   *
   * - `invoice:update`
   */
  markUncollectible(id: string, options?: RequestOptions): APIPromise<InvoiceMarkUncollectibleResponse> {
    return this._client.post(path`/invoices/${id}/mark_uncollectible`, options);
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
 * The type of tax identifier
 */
export type TaxIdentifierType =
  | 'ad_nrt'
  | 'ao_tin'
  | 'ar_cuit'
  | 'am_tin'
  | 'aw_tin'
  | 'au_abn'
  | 'au_arn'
  | 'eu_vat'
  | 'az_tin'
  | 'bs_tin'
  | 'bh_vat'
  | 'bd_bin'
  | 'bb_tin'
  | 'by_tin'
  | 'bj_ifu'
  | 'bo_tin'
  | 'ba_tin'
  | 'br_cnpj'
  | 'br_cpf'
  | 'bg_uic'
  | 'bf_ifu'
  | 'kh_tin'
  | 'cm_niu'
  | 'ca_bn'
  | 'ca_gst_hst'
  | 'ca_pst_bc'
  | 'ca_pst_mb'
  | 'ca_pst_sk'
  | 'ca_qst'
  | 'cv_nif'
  | 'cl_tin'
  | 'cn_tin'
  | 'co_nit'
  | 'cd_nif'
  | 'cr_tin'
  | 'hr_oib'
  | 'do_rcn'
  | 'ec_ruc'
  | 'eg_tin'
  | 'sv_nit'
  | 'et_tin'
  | 'eu_oss_vat'
  | 'ge_vat'
  | 'de_stn'
  | 'gb_vat'
  | 'gn_nif'
  | 'hk_br'
  | 'hu_tin'
  | 'is_vat'
  | 'in_gst'
  | 'id_npwp'
  | 'il_vat'
  | 'jp_cn'
  | 'jp_rn'
  | 'jp_trn'
  | 'kz_bin'
  | 'ke_pin'
  | 'kg_tin'
  | 'la_tin'
  | 'li_uid'
  | 'li_vat'
  | 'my_frp'
  | 'my_itn'
  | 'my_sst'
  | 'mr_nif'
  | 'mx_rfc'
  | 'md_vat'
  | 'me_pib'
  | 'ma_vat'
  | 'np_pan'
  | 'nz_gst'
  | 'ng_tin'
  | 'mk_vat'
  | 'no_vat'
  | 'no_voec'
  | 'om_vat'
  | 'pe_ruc'
  | 'ph_tin'
  | 'pl_nip'
  | 'ro_tin'
  | 'ru_inn'
  | 'ru_kpp'
  | 'sa_vat'
  | 'sn_ninea'
  | 'rs_pib'
  | 'sg_gst'
  | 'sg_uen'
  | 'si_tin'
  | 'za_vat'
  | 'kr_brn'
  | 'es_cif'
  | 'ch_uid'
  | 'ch_vat'
  | 'tw_vat'
  | 'tj_tin'
  | 'tz_vat'
  | 'th_vat'
  | 'tr_tin'
  | 'ug_tin'
  | 'ua_vat'
  | 'ae_trn'
  | 'us_ein'
  | 'uy_ruc'
  | 'uz_tin'
  | 'uz_vat'
  | 've_rif'
  | 'vn_tin'
  | 'zm_tin'
  | 'zw_tin'
  | 'sr_fin'
  | 'xi_vat';

/**
 * Represents `true` or `false` values.
 */
export type InvoiceMarkPaidResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type InvoiceMarkUncollectibleResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type InvoiceVoidResponse = boolean;

export type InvoiceCreateParams =
  | InvoiceCreateParams.CreateInvoiceInputWithProduct
  | InvoiceCreateParams.CreateInvoiceInputWithProductID;

export declare namespace InvoiceCreateParams {
  export interface CreateInvoiceInputWithProduct {
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
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    plan: CreateInvoiceInputWithProduct.Plan;

    /**
     * The properties of the product to create for this invoice. Provide this to create
     * a new product inline.
     */
    product: CreateInvoiceInputWithProduct.Product;

    /**
     * The date and time when the invoice will be automatically finalized and charged.
     * Only valid when collection_method is charge_automatically. If not provided, the
     * charge will be processed immediately.
     */
    automatically_finalizes_at?: string | null;

    /**
     * Inline billing address to create a new mailing address for this invoice. Cannot
     * be used together with mailing_address_id.
     */
    billing_address?: CreateInvoiceInputWithProduct.BillingAddress | null;

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
     * The date by which the invoice must be paid. Required unless save_as_draft is
     * true.
     */
    due_date?: string | null;

    /**
     * The email address of the customer. Required when creating an invoice for a
     * customer who is not yet a member of the company.
     */
    email_address?: string | null;

    /**
     * Optional line items that break down the invoice total. When provided, the sum of
     * (quantity \* unit_price) for all items must equal the plan price.
     */
    line_items?: Array<CreateInvoiceInputWithProduct.LineItem> | null;

    /**
     * The unique identifier of an existing mailing address to attach to this invoice.
     * Cannot be used together with billing_address.
     */
    mailing_address_id?: string | null;

    /**
     * The unique identifier of an existing member to create this invoice for. If not
     * provided, you must supply an email_address and customer_name.
     */
    member_id?: string | null;

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

    /**
     * When true, creates the invoice as a draft without sending or charging. Relaxes
     * customer and due date requirements.
     */
    save_as_draft?: boolean | null;
  }

  export namespace CreateInvoiceInputWithProduct {
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

    /**
     * Inline billing address to create a new mailing address for this invoice. Cannot
     * be used together with mailing_address_id.
     */
    export interface BillingAddress {
      /**
       * The city of the address.
       */
      city?: string | null;

      /**
       * The country of the address.
       */
      country?: string | null;

      /**
       * The line 1 of the address.
       */
      line1?: string | null;

      /**
       * The line 2 of the address.
       */
      line2?: string | null;

      /**
       * The name of the customer.
       */
      name?: string | null;

      /**
       * The phone number of the customer.
       */
      phone?: string | null;

      /**
       * The postal code of the address.
       */
      postal_code?: string | null;

      /**
       * The state of the address.
       */
      state?: string | null;

      /**
       * The type of tax identifier
       */
      tax_id_type?: InvoicesAPI.TaxIdentifierType | null;

      /**
       * The value of the tax identifier.
       */
      tax_id_value?: string | null;
    }

    /**
     * A single line item to include on the invoice, with a label, quantity, and unit
     * price.
     */
    export interface LineItem {
      /**
       * The label or description for this line item.
       */
      label: string;

      /**
       * The unit price for this line item. Provided as a number in the specified
       * currency. Eg: 10.43 for $10.43
       */
      unit_price: number;

      /**
       * The quantity of this line item. Defaults to 1.
       */
      quantity?: number | null;
    }
  }

  export interface CreateInvoiceInputWithProductID {
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
     * The plan attributes defining the price, currency, and billing interval for this
     * invoice.
     */
    plan: CreateInvoiceInputWithProductID.Plan;

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
     * Inline billing address to create a new mailing address for this invoice. Cannot
     * be used together with mailing_address_id.
     */
    billing_address?: CreateInvoiceInputWithProductID.BillingAddress | null;

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
     * The date by which the invoice must be paid. Required unless save_as_draft is
     * true.
     */
    due_date?: string | null;

    /**
     * The email address of the customer. Required when creating an invoice for a
     * customer who is not yet a member of the company.
     */
    email_address?: string | null;

    /**
     * Optional line items that break down the invoice total. When provided, the sum of
     * (quantity \* unit_price) for all items must equal the plan price.
     */
    line_items?: Array<CreateInvoiceInputWithProductID.LineItem> | null;

    /**
     * The unique identifier of an existing mailing address to attach to this invoice.
     * Cannot be used together with billing_address.
     */
    mailing_address_id?: string | null;

    /**
     * The unique identifier of an existing member to create this invoice for. If not
     * provided, you must supply an email_address and customer_name.
     */
    member_id?: string | null;

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

    /**
     * When true, creates the invoice as a draft without sending or charging. Relaxes
     * customer and due date requirements.
     */
    save_as_draft?: boolean | null;
  }

  export namespace CreateInvoiceInputWithProductID {
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
     * Inline billing address to create a new mailing address for this invoice. Cannot
     * be used together with mailing_address_id.
     */
    export interface BillingAddress {
      /**
       * The city of the address.
       */
      city?: string | null;

      /**
       * The country of the address.
       */
      country?: string | null;

      /**
       * The line 1 of the address.
       */
      line1?: string | null;

      /**
       * The line 2 of the address.
       */
      line2?: string | null;

      /**
       * The name of the customer.
       */
      name?: string | null;

      /**
       * The phone number of the customer.
       */
      phone?: string | null;

      /**
       * The postal code of the address.
       */
      postal_code?: string | null;

      /**
       * The state of the address.
       */
      state?: string | null;

      /**
       * The type of tax identifier
       */
      tax_id_type?: InvoicesAPI.TaxIdentifierType | null;

      /**
       * The value of the tax identifier.
       */
      tax_id_value?: string | null;
    }

    /**
     * A single line item to include on the invoice, with a label, quantity, and unit
     * price.
     */
    export interface LineItem {
      /**
       * The label or description for this line item.
       */
      label: string;

      /**
       * The unit price for this line item. Provided as a number in the specified
       * currency. Eg: 10.43 for $10.43
       */
      unit_price: number;

      /**
       * The quantity of this line item. Defaults to 1.
       */
      quantity?: number | null;
    }
  }
}

export interface InvoiceListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter invoices by their collection method.
   */
  collection_methods?: Array<Shared.CollectionMethod> | null;

  /**
   * The unique identifier of the company to list invoices for.
   */
  company_id?: string | null;

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
    type TaxIdentifierType as TaxIdentifierType,
    type InvoiceMarkPaidResponse as InvoiceMarkPaidResponse,
    type InvoiceMarkUncollectibleResponse as InvoiceMarkUncollectibleResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}

export { type InvoiceListItemsCursorPage };
