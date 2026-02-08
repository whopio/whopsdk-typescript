// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { InvoiceListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Creates an invoice
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
   * Retrieves an invoice by ID or token
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
   * Lists invoices
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
   * Void an invoice
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
     * The method of collection for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The company ID to create this invoice for.
     */
    company_id: string;

    /**
     * The date the invoice is due, if applicable.
     */
    due_date: string;

    /**
     * The member ID to create this invoice for. Include this if you want to create an
     * invoice for an existing member. If you do not have a member ID, you must provide
     * an email_address and customer_name.
     */
    member_id: string;

    /**
     * The properties of the plan to create for this invoice.
     */
    plan: CreateInvoiceInputWithProductAndMemberID.Plan;

    /**
     * The properties of the product to create for this invoice. Include this if you
     * want to create an invoice for a new product.
     */
    product: CreateInvoiceInputWithProductAndMemberID.Product;

    /**
     * Whether or not to charge the customer a buyer fee.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer to create this invoice for. This is required if you
     * want to create an invoice for a customer who does not have a member of your
     * company yet.
     */
    customer_name?: string | null;

    /**
     * The payment method ID to use for this invoice. If using charge_automatically,
     * you must provide a payment_method_id.
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
     * The properties of the plan to create for this invoice.
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
    }

    /**
     * The properties of the product to create for this invoice. Include this if you
     * want to create an invoice for a new product.
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
     * The method of collection for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The company ID to create this invoice for.
     */
    company_id: string;

    /**
     * The date the invoice is due, if applicable.
     */
    due_date: string;

    /**
     * The email address to create this invoice for. This is required if you want to
     * create an invoice for a user who does not have a member of your company yet.
     */
    email_address: string;

    /**
     * The properties of the plan to create for this invoice.
     */
    plan: CreateInvoiceInputWithProductAndEmailAddress.Plan;

    /**
     * The properties of the product to create for this invoice. Include this if you
     * want to create an invoice for a new product.
     */
    product: CreateInvoiceInputWithProductAndEmailAddress.Product;

    /**
     * Whether or not to charge the customer a buyer fee.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer to create this invoice for. This is required if you
     * want to create an invoice for a customer who does not have a member of your
     * company yet.
     */
    customer_name?: string | null;

    /**
     * The payment method ID to use for this invoice. If using charge_automatically,
     * you must provide a payment_method_id.
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
     * The properties of the plan to create for this invoice.
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
    }

    /**
     * The properties of the product to create for this invoice. Include this if you
     * want to create an invoice for a new product.
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
     * The method of collection for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The company ID to create this invoice for.
     */
    company_id: string;

    /**
     * The date the invoice is due, if applicable.
     */
    due_date: string;

    /**
     * The member ID to create this invoice for. Include this if you want to create an
     * invoice for an existing member. If you do not have a member ID, you must provide
     * an email_address and customer_name.
     */
    member_id: string;

    /**
     * The properties of the plan to create for this invoice.
     */
    plan: CreateInvoiceInputWithProductIDAndMemberID.Plan;

    /**
     * The product ID to create this invoice for. Include this if you want to create an
     * invoice for an existing product.
     */
    product_id: string;

    /**
     * Whether or not to charge the customer a buyer fee.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer to create this invoice for. This is required if you
     * want to create an invoice for a customer who does not have a member of your
     * company yet.
     */
    customer_name?: string | null;

    /**
     * The payment method ID to use for this invoice. If using charge_automatically,
     * you must provide a payment_method_id.
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
     * The properties of the plan to create for this invoice.
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
    }
  }

  export interface CreateInvoiceInputWithProductIDAndEmailAddress {
    /**
     * The method of collection for this invoice. If using charge_automatically, you
     * must provide a payment_token.
     */
    collection_method: Shared.CollectionMethod;

    /**
     * The company ID to create this invoice for.
     */
    company_id: string;

    /**
     * The date the invoice is due, if applicable.
     */
    due_date: string;

    /**
     * The email address to create this invoice for. This is required if you want to
     * create an invoice for a user who does not have a member of your company yet.
     */
    email_address: string;

    /**
     * The properties of the plan to create for this invoice.
     */
    plan: CreateInvoiceInputWithProductIDAndEmailAddress.Plan;

    /**
     * The product ID to create this invoice for. Include this if you want to create an
     * invoice for an existing product.
     */
    product_id: string;

    /**
     * Whether or not to charge the customer a buyer fee.
     */
    charge_buyer_fee?: boolean | null;

    /**
     * The name of the customer to create this invoice for. This is required if you
     * want to create an invoice for a customer who does not have a member of your
     * company yet.
     */
    customer_name?: string | null;

    /**
     * The payment method ID to use for this invoice. If using charge_automatically,
     * you must provide a payment_method_id.
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
     * The properties of the plan to create for this invoice.
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
    }
  }
}

export interface InvoiceListParams extends CursorPageParams {
  /**
   * The ID of the company to list invoices for
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter invoices by their collection method
   */
  collection_methods?: Array<Shared.CollectionMethod> | null;

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
   * Which columns can be used to sort.
   */
  order?: 'id' | 'created_at' | 'due_date' | null;

  /**
   * Return only invoices created for these specific product ids
   */
  product_ids?: Array<string> | null;

  /**
   * The statuses to filter the invoices by
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
