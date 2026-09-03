// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { PaymentsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Payment is one charge against a buyer. Create an on-session payment with a `confirmation_token` for the method the buyer selected, or an off-session payment with an existing member's stored payment method.
 *
 * Collection runs in the background, so the create response is not the outcome. Poll [Retrieve status](/api-reference/beta/payments/retrieve-status) for how far the payment has got and, while it is `requires_action`, what the buyer must do next — follow a redirect, complete 3D Secure, display transfer instructions, or link a bank account. Use the return_url operation to change where they land afterwards, up until they come back.
 */
export class Payments extends APIResource {
  /**
   * Charges a buyer for a plan. Pass a payment method already on file (`member_id`
   * and `payment_method_id`), or a `confirmation_token` describing a method the
   * buyer just supplied. Collection runs in the background: the response is the
   * payment as created, not its outcome — poll Retrieve status for how far it has
   * got and, for a confirmation-token payment, what the buyer must still do.
   * `plan_id` names the plan to charge for.
   *
   * @example
   * ```ts
   * const payment = await client.payments.create({
   *   account_id: 'biz_xxxxxxxxxxxxxx',
   *   plan_id: 'plan_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(params: PaymentCreateParams, options?: RequestOptions): APIPromise<Shared.Payment> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/payments', {
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
   * Returns one payment. Related records are ids — resolve a plan, membership,
   * member or shipment on its own endpoint, and list this payment's refunds,
   * disputes or Resolution Center cases with `?payment_id=`.
   *
   * @example
   * ```ts
   * const payment = await client.payments.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: PaymentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Payment> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/payments/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists payments, newest first. Without filters this is every payment the caller
   * can read: a company credential's own account, or for a user every account they
   * can read payments for. Filters narrow by account, buyer, product, plan,
   * membership, status, billing reason, currency, and creation window. Filtering by
   * `billing_reason=subscription_cycle` also matches renewals recorded as
   * `subscription_update`. `settlement_time_at` is null on list rows — retrieve the
   * payment for it.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payment of client.payments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentsCursorPage, Shared.Payment> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/payments', CursorPage<Shared.Payment>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the fee breakdown of one payment — Whop's fee, processing, affiliate and
   * other lines — each in the currency it was collected in and converted to the
   * payment's settlement currency. The list is complete in one page.
   *
   * @example
   * ```ts
   * const response = await client.payments.listFees('id');
   * ```
   */
  listFees(
    id: string,
    params: PaymentListFeesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentListFeesResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/payments/${id}/fees`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Issues a full or partial refund for a payment. The refund is processed through
   * the original payment processor and the membership status is updated accordingly.
   *
   * @example
   * ```ts
   * const payment = await client.payments.refund('id');
   * ```
   */
  refund(
    id: string,
    params: PaymentRefundParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Payment> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/payments/${id}/refund`, {
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
   * Retries a failed or pending payment. This re-attempts the charge using the
   * original payment method and plan details.
   *
   * @example
   * ```ts
   * const payment = await client.payments.retry('id');
   * ```
   */
  retry(
    id: string,
    params: PaymentRetryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Payment> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/payments/${id}/retry`, {
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
   * Voids a payment that has not yet been settled. Voiding cancels the payment
   * before it is captured by the payment processor.
   *
   * @example
   * ```ts
   * const payment = await client.payments.void('id');
   * ```
   */
  void(
    id: string,
    params: PaymentVoidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Payment> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/payments/${id}/void`, {
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
}

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
  | 'jcblankapay'
  | 'cmi'
  | 'aura'
  | 'accel'
  | 'culiance'
  | 'nyce'
  | 'pulse'
  | 'star'
  | 'unknown';

/**
 * The different types of payment methods that can be used.
 */
export type PaymentMethodTypes =
  | 'acss_debit'
  | 'addi'
  | 'affirm'
  | 'afterpay_clearpay'
  | 'alipay'
  | 'alma'
  | 'amazon_pay'
  | 'apple'
  | 'apple_pay'
  | 'au_bank_transfer'
  | 'au_becs_debit'
  | 'bacs_debit'
  | 'bancolombia'
  | 'bancontact'
  | 'bank_wire'
  | 'billie'
  | 'bizum'
  | 'blik'
  | 'boleto'
  | 'bre_b'
  | 'ca_bank_transfer'
  | 'capchase_pay'
  | 'card'
  | 'card_installments_three'
  | 'card_installments_six'
  | 'card_installments_twelve'
  | 'cashapp'
  | 'claritypay'
  | 'coinbase'
  | 'crypto'
  | 'custom'
  | 'customer_balance'
  | 'demo_pay'
  | 'efecty'
  | 'eps'
  | 'eu_bank_transfer'
  | 'fpx'
  | 'flex_pay'
  | 'gb_bank_transfer'
  | 'gcash'
  | 'giropay'
  | 'google_pay'
  | 'gopay'
  | 'grabpay'
  | 'id_bank_transfer'
  | 'ideal'
  | 'interac'
  | 'kakao_pay'
  | 'klarna'
  | 'klarna_pay_now'
  | 'konbini'
  | 'kr_card'
  | 'kr_market'
  | 'kriya'
  | 'kueski'
  | 'link'
  | 'mb_way'
  | 'm_pesa'
  | 'mercado_pago'
  | 'mobilepay'
  | 'modo'
  | 'mondu'
  | 'multibanco'
  | 'naver_pay'
  | 'nequi'
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
  | 'pago_efectivo'
  | 'pse'
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
  | 'rapipago'
  | 'rechnung'
  | 'revolut_pay'
  | 'samsung_pay'
  | 'satispay'
  | 'scalapay'
  | 'sencillito'
  | 'sepa_debit'
  | 'sequra'
  | 'servipag'
  | 'sezzle'
  | 'shop_pay'
  | 'shopeepay'
  | 'sofort'
  | 'south_korea_market'
  | 'spei'
  | 'splitit'
  | 'sunbit'
  | 'swish'
  | 'tamara'
  | 'twint'
  | 'upi'
  | 'us_bank_account'
  | 'us_bank_transfer'
  | 'venmo'
  | 'vipps'
  | 'webpay'
  | 'wechat_pay'
  | 'yape'
  | 'zip'
  | 'coinflow'
  | 'unknown';

/**
 * The type of tax inclusivity applied to the receipt, for determining whether the
 * tax is included in the final price, or paid on top.
 */
export type ReceiptTaxBehavior = 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect';

export interface PaymentListFeesResponse {
  data: Array<PaymentListFeesResponse.Data>;

  page_info: PaymentListFeesResponse.PageInfo;
}

export namespace PaymentListFeesResponse {
  export interface Data {
    /**
     * The fee in the currency it was collected in.
     */
    amount: Data.Amount;

    /**
     * When the fee was collected, as an ISO 8601 timestamp, or null when it has not
     * been.
     */
    collected_at: string | null;

    /**
     * A longer explanation of the fee, when there is one.
     */
    description: string | null;

    /**
     * The name the dashboard shows for this fee.
     */
    label: string;

    /**
     * The specific fee this line is, such as `payment_processing_percentage_fee` or
     * `revshare_percentage_fee`.
     */
    origin:
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
      | 'dispute_representment_fee'
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
      | 'application_fee'
      | 'high_risk_merchant_fee';

    /**
     * The fee converted to the payment's settlement currency, so lines can be totalled
     * against the payment.
     */
    settlement_amount: Data.SettlementAmount;

    /**
     * The family the fee belongs to: `whop_fee`, `processing_fee`,
     * `affiliate_program_fee`, or `other_fee`.
     */
    type: 'whop_fee' | 'processing_fee' | 'affiliate_program_fee' | 'other_fee';
  }

  export namespace Data {
    /**
     * The fee in the currency it was collected in.
     */
    export interface Amount {
      /**
       * The amount in major units, as an exact decimal string — `"10.00"` is ten
       * dollars. A string so no float rounds it in transit.
       */
      amount: string;

      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;

      /**
       * How many decimal places the amount CARRIES — the precision the charge itself
       * runs at.
       */
      decimals: number;

      /**
       * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
       * not always: COP is charged in centavos but written in whole pesos, so it is `2`
       * and `0`. Format the number in your own locale using this.
       */
      display_decimals: number;
    }

    /**
     * The fee converted to the payment's settlement currency, so lines can be totalled
     * against the payment.
     */
    export interface SettlementAmount {
      /**
       * The amount in major units, as an exact decimal string — `"10.00"` is ten
       * dollars. A string so no float rounds it in transit.
       */
      amount: string;

      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;

      /**
       * How many decimal places the amount CARRIES — the precision the charge itself
       * runs at.
       */
      decimals: number;

      /**
       * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
       * not always: COP is charged in centavos but written in whole pesos, so it is `2`
       * and `0`. Format the number in your own locale using this.
       */
      display_decimals: number;
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface PaymentCreateParams {
  /**
   * Body param: The account to charge for, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Body param: The plan to charge for, prefixed `plan_`. It must belong to the
   * account.
   */
  plan_id: string;

  /**
   * Body param: Whether to capture a card payment immediately. Defaults to true.
   * Pass false to place an authorization hold that must be captured in full within
   * five days via the capture endpoint.
   */
  capture?: boolean | null;

  /**
   * Body param: A confirmation token describing a payment method the buyer just
   * supplied. Provide this instead of `member_id` and `payment_method_id`; the buyer
   * is resolved from the token's billing email, or from `email`. The buyer may still
   * have a step to complete — poll the payment's status for what to do next.
   */
  confirmation_token?: string | null;

  /**
   * Body param: Overrides the buyer email carried on the confirmation token,
   * resolving or creating the user the payment belongs to. Ignored unless
   * `confirmation_token` is provided, and when the token was created by a signed-in
   * buyer.
   */
  email?: string | null;

  /**
   * Body param: The member to charge, prefixed `mber_`. Required with
   * `payment_method_id` unless `confirmation_token` is provided.
   */
  member_id?: string | null;

  /**
   * Body param: Custom metadata to attach to the payment.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: The stored payment method to charge, prefixed `payt_`. It must
   * belong to the member. Required unless `confirmation_token` is provided.
   */
  payment_method_id?: string | null;

  /**
   * Body param: An active promo code to apply, prefixed `promo_`. It must belong to
   * the account and be valid for the plan.
   */
  promo_code_id?: string | null;

  /**
   * Body param: Where the buyer continues after completing an off-site step. An
   * absolute https URL without credentials, at most 2,048 characters. Ignored unless
   * `confirmation_token` is provided.
   */
  return_url?: string | null;

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

export interface PaymentRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PaymentListParams extends CursorPageParams {
  /**
   * Query param: Only payments charged by this account, prefixed `biz_`.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns payments before this position.
   */
  before?: string;

  /**
   * Query param: Only payments charged for this reason.
   */
  billing_reason?:
    | 'subscription_create'
    | 'subscription_cycle'
    | 'subscription_update'
    | 'one_time'
    | 'manual'
    | 'subscription';

  /**
   * Query param: Only payments created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only payments created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Only payments presented in this three-letter currency, such as
   * `usd`.
   */
  currency?: string;

  /**
   * Query param: The sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of payments to return.
   */
  first?: number;

  /**
   * Query param: The number of payments to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: Only payments made by this member, prefixed `mber_`.
   */
  member_id?: string;

  /**
   * Query param: Only payments billed under this membership, prefixed `mem_`.
   */
  membership_id?: string;

  /**
   * Query param: The field to sort by.
   */
  order?: 'created_at' | 'paid_at';

  /**
   * Query param: Only payments priced by this plan, prefixed `plan_`.
   */
  plan_id?: string;

  /**
   * Query param: Only payments for this product, prefixed `prod_`.
   */
  product_id?: string;

  /**
   * Query param: Search payments by user ID, membership ID, user email, name, or
   * username. Email filtering requires the member:email:read permission.
   */
  query?: string;

  /**
   * Query param: Only payments in this lifecycle state.
   */
  status?: 'open' | 'authorized' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void';

  /**
   * Query param: Only payments made by this buyer, prefixed `user_`.
   */
  user_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PaymentListFeesParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PaymentRefundParams {
  /**
   * Body param: The amount to refund. For multi-currency payments, this is in the
   * charge currency (what the buyer paid). For single-currency, this is in the
   * payment currency. If omitted, the full payment amount is refunded.
   */
  partial_amount?: number | null;

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

export interface PaymentRetryParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface PaymentVoidParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace Payments {
  export {
    type BillingReasons as BillingReasons,
    type CardBrands as CardBrands,
    type PaymentMethodTypes as PaymentMethodTypes,
    type ReceiptTaxBehavior as ReceiptTaxBehavior,
    type PaymentListFeesResponse as PaymentListFeesResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentListParams as PaymentListParams,
    type PaymentListFeesParams as PaymentListFeesParams,
    type PaymentRefundParams as PaymentRefundParams,
    type PaymentRetryParams as PaymentRetryParams,
    type PaymentVoidParams as PaymentVoidParams,
  };
}

export { type PaymentsCursorPage };
