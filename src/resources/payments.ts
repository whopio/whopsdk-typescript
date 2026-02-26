// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Charge an existing member off-session using one of their stored payment methods.
   * You can provide an existing plan, or create a new one in-line. This endpoint
   * will respond with a payment object immediately, but the payment is processed
   * asynchronously in the background. Use webhooks to be notified when the payment
   * succeeds or fails.
   *
   * Required permissions:
   *
   * - `payment:charge`
   * - `plan:create`
   * - `access_pass:create`
   * - `access_pass:update`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   * - `payment:dispute:read`
   * - `payment:resolution_center_case:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   member_id: 'mber_xxxxxxxxxxxxx',
   *   payment_method_id: 'pmt_xxxxxxxxxxxxxx',
   *   plan: { currency: 'usd' },
   * });
   * ```
   */
  create(body: PaymentCreateParams, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.post('/payments', { body, ...options });
  }

  /**
   * Retrieves the details of an existing payment.
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   * - `payment:dispute:read`
   * - `payment:resolution_center_case:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.retrieve(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.get(path`/payments/${id}`, options);
  }

  /**
   * Returns a paginated list of payments for the actor in context, with optional
   * filtering by product, plan, status, billing reason, currency, and creation date.
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const paymentListResponse of client.payments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentListResponsesCursorPage, PaymentListResponse> {
    return this._client.getAPIList('/payments', CursorPage<PaymentListResponse>, { query, ...options });
  }

  /**
   * Returns the list of fees associated with a specific payment, including platform
   * fees and processing fees.
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const paymentListFeesResponse of client.payments.listFees(
   *   'pay_xxxxxxxxxxxxxx',
   * )) {
   *   // ...
   * }
   * ```
   */
  listFees(
    id: string,
    query: PaymentListFeesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentListFeesResponsesCursorPage, PaymentListFeesResponse> {
    return this._client.getAPIList(path`/payments/${id}/fees`, CursorPage<PaymentListFeesResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Issue a full or partial refund for a payment. The refund is processed through
   * the original payment processor and the membership status is updated accordingly.
   *
   * Required permissions:
   *
   * - `payment:manage`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   * - `payment:dispute:read`
   * - `payment:resolution_center_case:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.refund(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  refund(
    id: string,
    body: PaymentRefundParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Payment> {
    return this._client.post(path`/payments/${id}/refund`, { body, ...options });
  }

  /**
   * Retry a failed or pending payment. This re-attempts the charge using the
   * original payment method and plan details.
   *
   * Required permissions:
   *
   * - `payment:manage`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   * - `payment:dispute:read`
   * - `payment:resolution_center_case:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.retry(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retry(id: string, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.post(path`/payments/${id}/retry`, options);
  }

  /**
   * Void a payment that has not yet been settled. Voiding cancels the payment before
   * it is captured by the payment processor.
   *
   * Required permissions:
   *
   * - `payment:manage`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   * - `payment:dispute:read`
   * - `payment:resolution_center_case:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.void(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.post(path`/payments/${id}/void`, options);
  }
}

export type PaymentListResponsesCursorPage = CursorPage<PaymentListResponse>;

export type PaymentListFeesResponsesCursorPage = CursorPage<PaymentListFeesResponse>;

/**
 * The reason why a specific payment was billed
 */
export type BillingReasons =
  | 'subscription_create'
  | 'subscription_cycle'
  | 'subscription_update'
  | 'one_time'
  | 'manual'
  | 'subscription';

/**
 * Possible card brands that a payment token can have
 */
export type CardBrands =
  | 'mastercard'
  | 'visa'
  | 'amex'
  | 'discover'
  | 'unionpay'
  | 'jcb'
  | 'diners'
  | 'link'
  | 'troy'
  | 'visadankort'
  | 'visabancontact'
  | 'china_union_pay'
  | 'rupay'
  | 'jcbrupay'
  | 'elo'
  | 'maestro'
  | 'tarjeta_naranja'
  | 'cirrus'
  | 'nspk_mir'
  | 'verve'
  | 'ebt'
  | 'private_label'
  | 'local_brand'
  | 'uatp'
  | 'wexcard'
  | 'uzcard'
  | 'meeza'
  | 'hrg_store_card'
  | 'girocard'
  | 'fuel_card'
  | 'dankort'
  | 'carnet'
  | 'atm_card'
  | 'china_union_payuzcard'
  | 'codensa'
  | 'cabal'
  | 'hipercard'
  | 'unknown';

/**
 * The different types of payment methods that can be used.
 */
export type PaymentMethodTypes =
  | 'acss_debit'
  | 'affirm'
  | 'afterpay_clearpay'
  | 'alipay'
  | 'alma'
  | 'amazon_pay'
  | 'apple'
  | 'apple_pay'
  | 'au_becs_debit'
  | 'bacs_debit'
  | 'bancontact'
  | 'billie'
  | 'bizum'
  | 'blik'
  | 'boleto'
  | 'capchase_pay'
  | 'card'
  | 'cashapp'
  | 'claritypay'
  | 'coinbase'
  | 'crypto'
  | 'custom'
  | 'customer_balance'
  | 'demo_pay'
  | 'eps'
  | 'eu_bank_transfer'
  | 'fpx'
  | 'giropay'
  | 'google_pay'
  | 'gopay'
  | 'grabpay'
  | 'id_bank_transfer'
  | 'ideal'
  | 'interac'
  | 'kakao_pay'
  | 'klarna'
  | 'konbini'
  | 'kr_card'
  | 'kr_market'
  | 'kriya'
  | 'link'
  | 'mb_way'
  | 'mobilepay'
  | 'mondu'
  | 'multibanco'
  | 'naver_pay'
  | 'netbanking'
  | 'ng_bank'
  | 'ng_bank_transfer'
  | 'ng_card'
  | 'ng_market'
  | 'ng_ussd'
  | 'ng_wallet'
  | 'nz_bank_account'
  | 'oxxo'
  | 'p24'
  | 'pay_by_bank'
  | 'payco'
  | 'paynow'
  | 'paypal'
  | 'paypay'
  | 'payto'
  | 'pix'
  | 'platform_balance'
  | 'promptpay'
  | 'qris'
  | 'rechnung'
  | 'revolut_pay'
  | 'samsung_pay'
  | 'satispay'
  | 'scalapay'
  | 'sepa_debit'
  | 'sequra'
  | 'sezzle'
  | 'shop_pay'
  | 'shopeepay'
  | 'sofort'
  | 'south_korea_market'
  | 'splitit'
  | 'sunbit'
  | 'swish'
  | 'tamara'
  | 'twint'
  | 'upi'
  | 'us_bank_account'
  | 'venmo'
  | 'vipps'
  | 'wechat_pay'
  | 'zip'
  | 'unknown';

/**
 * A payment represents a completed or attempted charge. Payments track the amount,
 * status, currency, and payment method used.
 */
export interface PaymentListResponse {
  /**
   * The unique identifier for the payment.
   */
  id: string;

  /**
   * How much the payment is for after fees
   */
  amount_after_fees: number;

  /**
   * The application fee charged on this payment.
   */
  application_fee: PaymentListResponse.ApplicationFee | null;

  /**
   * Whether this payment was auto refunded or not
   */
  auto_refunded: boolean;

  /**
   * The address of the user who made the payment.
   */
  billing_address: PaymentListResponse.BillingAddress | null;

  /**
   * The reason why a specific payment was billed
   */
  billing_reason: BillingReasons | null;

  /**
   * Possible card brands that a payment token can have
   */
  card_brand: CardBrands | null;

  /**
   * The last four digits of the card used to make this payment. Null if the payment
   * was not made with a card.
   */
  card_last4: string | null;

  /**
   * The company for the payment.
   */
  company: PaymentListResponse.Company | null;

  /**
   * The datetime the payment was created.
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Shared.Currency | null;

  /**
   * When an alert came in that this transaction will be disputed
   */
  dispute_alerted_at: string | null;

  /**
   * If the payment failed, the reason for the failure.
   */
  failure_message: string | null;

  /**
   * The time of the last payment attempt.
   */
  last_payment_attempt: string | null;

  /**
   * The member attached to this payment.
   */
  member: PaymentListResponse.Member | null;

  /**
   * The membership attached to this payment.
   */
  membership: PaymentListResponse.Membership | null;

  /**
   * The custom metadata stored on this payment. This will be copied over to the
   * checkout configuration for which this payment was made
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The time of the next schedule payment retry.
   */
  next_payment_attempt: string | null;

  /**
   * The time at which this payment was successfully collected. Null if the payment
   * has not yet succeeded. As a Unix timestamp.
   */
  paid_at: string | null;

  /**
   * The tokenized payment method reference used for this payment. Null if no token
   * was used.
   */
  payment_method: PaymentListResponse.PaymentMethod | null;

  /**
   * The different types of payment methods that can be used.
   */
  payment_method_type: PaymentMethodTypes | null;

  /**
   * The number of failed payment attempts for the payment.
   */
  payments_failed: number | null;

  /**
   * The plan attached to this payment.
   */
  plan: PaymentListResponse.Plan | null;

  /**
   * The product this payment was made for
   */
  product: PaymentListResponse.Product | null;

  /**
   * The promo code used for this payment.
   */
  promo_code: PaymentListResponse.PromoCode | null;

  /**
   * True only for payments that are `paid`, have not been fully refunded, and were
   * processed by a payment processor that allows refunds.
   */
  refundable: boolean;

  /**
   * The payment refund amount(if applicable).
   */
  refunded_amount: number | null;

  /**
   * When the payment was refunded (if applicable).
   */
  refunded_at: string | null;

  /**
   * True when the payment status is `open` and its membership is in one of the
   * retry-eligible states (`active`, `trialing`, `completed`, or `past_due`);
   * otherwise false. Used to decide if Whop can attempt the charge again.
   */
  retryable: boolean;

  /**
   * The status of a receipt
   */
  status: Shared.ReceiptStatus | null;

  /**
   * The friendly status of the payment.
   */
  substatus: Shared.FriendlyReceiptStatus;

  /**
   * The subtotal to show to the creator (excluding buyer fees).
   */
  subtotal: number | null;

  /**
   * The calculated amount of the sales/VAT tax (if applicable).
   */
  tax_amount: number | null;

  /**
   * The type of tax inclusivity applied to the receipt, for determining whether the
   * tax is included in the final price, or paid on top.
   */
  tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect' | null;

  /**
   * The total to show to the creator (excluding buyer fees).
   */
  total: number | null;

  /**
   * The total in USD to show to the creator (excluding buyer fees).
   */
  usd_total: number | null;

  /**
   * The user that made this payment.
   */
  user: PaymentListResponse.User | null;

  /**
   * True when the payment is tied to a membership in `past_due`, the payment status
   * is `open`, and the processor allows voiding payments; otherwise false.
   */
  voidable: boolean;
}

export namespace PaymentListResponse {
  /**
   * The application fee charged on this payment.
   */
  export interface ApplicationFee {
    /**
     * The unique identifier for the application fee.
     */
    id: string;

    /**
     * The application fee amount.
     */
    amount: number;

    /**
     * The amount of the application fee that has been captured.
     */
    amount_captured: number;

    /**
     * The amount of the application fee that has been refunded.
     */
    amount_refunded: number;

    /**
     * The datetime the application fee was created.
     */
    created_at: string;

    /**
     * The currency of the application fee.
     */
    currency: Shared.Currency;
  }

  /**
   * The address of the user who made the payment.
   */
  export interface BillingAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The name of the customer.
     */
    name: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * The company for the payment.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The member attached to this payment.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;

    /**
     * The phone number for the member, if available.
     */
    phone: string | null;
  }

  /**
   * The membership attached to this payment.
   */
  export interface Membership {
    /**
     * The unique identifier for the membership.
     */
    id: string;

    /**
     * The state of the membership.
     */
    status: Shared.MembershipStatus;
  }

  /**
   * The tokenized payment method reference used for this payment. Null if no token
   * was used.
   */
  export interface PaymentMethod {
    /**
     * The unique identifier for the payment token.
     */
    id: string;

    /**
     * The card data associated with the payment method, if its a debit or credit card.
     */
    card: PaymentMethod.Card | null;

    /**
     * The datetime the payment token was created.
     */
    created_at: string;

    /**
     * The payment method type of the payment method
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;
  }

  export namespace PaymentMethod {
    /**
     * The card data associated with the payment method, if its a debit or credit card.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * The plan attached to this payment.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product this payment was made for
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The promo code used for this payment.
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
     * The monetary currency of the promo code.
     */
    base_currency: Shared.Currency;

    /**
     * The specific code used to apply the promo at checkout.
     */
    code: string | null;

    /**
     * The number of months the promo is applied for.
     */
    number_of_intervals: number | null;

    /**
     * The type (% or flat amount) of the promo.
     */
    promo_type: Shared.PromoType;
  }

  /**
   * The user that made this payment.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

/**
 * Represents a fee related to a payment
 */
export interface PaymentListFeesResponse {
  /**
   * The value or amount to display for the fee.
   */
  amount: number;

  /**
   * The currency of the fee.
   */
  currency: Shared.Currency;

  /**
   * The label to display for the fee.
   */
  name: string;

  /**
   * The specific origin of the fee, if applicable.
   */
  type:
    | 'stripe_domestic_processing_fee'
    | 'stripe_international_processing_fee'
    | 'stripe_fixed_processing_fee'
    | 'stripe_billing_fee'
    | 'stripe_radar_fee'
    | 'sales_tax_remittance'
    | 'sales_tax_remittance_reversal'
    | 'stripe_sales_tax_fee'
    | 'whop_processing_fee'
    | 'marketplace_affiliate_fee'
    | 'affiliate_fee'
    | 'crypto_fee'
    | 'stripe_standard_processing_fee'
    | 'paypal_fee'
    | 'stripe_payout_fee'
    | 'dispute_fee'
    | 'dispute_alert_fee'
    | 'apple_processing_fee'
    | 'buyer_fee'
    | 'sezzle_processing_fee'
    | 'splitit_processing_fee'
    | 'platform_balance_processing_fee'
    | 'payment_processing_percentage_fee'
    | 'payment_processing_fixed_fee'
    | 'cross_border_percentage_fee'
    | 'fx_percentage_fee'
    | 'orchestration_percentage_fee'
    | 'three_ds_fixed_fee'
    | 'billing_percentage_fee'
    | 'revshare_percentage_fee'
    | 'application_fee';
}

export type PaymentCreateParams =
  | PaymentCreateParams.CreatePaymentInputWithPlan
  | PaymentCreateParams.CreatePaymentInputWithPlanID;

export declare namespace PaymentCreateParams {
  export interface CreatePaymentInputWithPlan {
    /**
     * The ID of the company to create the payment for.
     */
    company_id: string;

    /**
     * The ID of the member to create the payment for.
     */
    member_id: string;

    /**
     * The ID of the payment method to use for the payment. It must be connected to the
     * Member being charged.
     */
    payment_method_id: string;

    /**
     * Pass this object to create a new plan for this payment
     */
    plan: CreatePaymentInputWithPlan.Plan;

    /**
     * Custom metadata to attach to the payment.
     */
    metadata?: { [key: string]: unknown } | null;
  }

  export namespace CreatePaymentInputWithPlan {
    /**
     * Pass this object to create a new plan for this payment
     */
    export interface Plan {
      /**
       * The respective currency identifier for the plan.
       */
      currency: Shared.Currency;

      /**
       * The interval in days at which the plan charges (renewal plans). For example, 30
       * for monthly billing.
       */
      billing_period?: number | null;

      /**
       * The description of the plan.
       */
      description?: string | null;

      /**
       * The number of days until the membership expires and revokes access (expiration
       * plans). For example, 365 for one year.
       */
      expiration_days?: number | null;

      /**
       * Whether to force the creation of a new plan even if one with the same attributes
       * already exists.
       */
      force_create_new_plan?: boolean | null;

      /**
       * An additional amount charged upon first purchase. Provided as a number in the
       * specified currency. Eg: 10.43 for $10.43 USD.
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
       * Pass this object to create a new product for this plan. We will use the product
       * external identifier to find or create an existing product.
       */
      product?: Plan.Product | null;

      /**
       * The product the plan is related to. Either this or product is required.
       */
      product_id?: string | null;

      /**
       * The amount the customer is charged every billing period. Provided as a number in
       * the specified currency. Eg: 10.43 for $10.43 USD.
       */
      renewal_price?: number | null;

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
  }

  export interface CreatePaymentInputWithPlanID {
    /**
     * The ID of the company to create the payment for.
     */
    company_id: string;

    /**
     * The ID of the member to create the payment for.
     */
    member_id: string;

    /**
     * The ID of the payment method to use for the payment. It must be connected to the
     * Member being charged.
     */
    payment_method_id: string;

    /**
     * An ID of an existing plan to use for the payment.
     */
    plan_id: string;

    /**
     * Custom metadata to attach to the payment.
     */
    metadata?: { [key: string]: unknown } | null;
  }
}

export interface PaymentListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter payments by their billing reason.
   */
  billing_reasons?: Array<BillingReasons> | null;

  /**
   * The unique identifier of the company to list payments for.
   */
  company_id?: string | null;

  /**
   * Only return payments created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return payments created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Filter payments by their currency code.
   */
  currencies?: Array<Shared.Currency> | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Whether to include payments with a zero amount.
   */
  include_free?: boolean | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The order to sort the results by.
   */
  order?: 'final_amount' | 'created_at' | 'paid_at' | null;

  /**
   * Filter payments to only those associated with these specific plan identifiers.
   */
  plan_ids?: Array<string> | null;

  /**
   * Filter payments to only those associated with these specific product
   * identifiers.
   */
  product_ids?: Array<string> | null;

  /**
   * Search payments by user ID, membership ID, user email, name, or username. Email
   * filtering requires the member:email:read permission.
   */
  query?: string | null;

  /**
   * Filter payments by their current status.
   */
  statuses?: Array<Shared.ReceiptStatus> | null;

  /**
   * Filter payments by their current substatus for more granular filtering.
   */
  substatuses?: Array<Shared.FriendlyReceiptStatus> | null;
}

export interface PaymentListFeesParams extends CursorPageParams {
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
}

export interface PaymentRefundParams {
  /**
   * The amount to refund in the payment currency. If omitted, the full payment
   * amount is refunded.
   */
  partial_amount?: number | null;
}

export declare namespace Payments {
  export {
    type BillingReasons as BillingReasons,
    type CardBrands as CardBrands,
    type PaymentMethodTypes as PaymentMethodTypes,
    type PaymentListResponse as PaymentListResponse,
    type PaymentListFeesResponse as PaymentListFeesResponse,
    type PaymentListResponsesCursorPage as PaymentListResponsesCursorPage,
    type PaymentListFeesResponsesCursorPage as PaymentListFeesResponsesCursorPage,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentListParams as PaymentListParams,
    type PaymentListFeesParams as PaymentListFeesParams,
    type PaymentRefundParams as PaymentRefundParams,
  };
}
