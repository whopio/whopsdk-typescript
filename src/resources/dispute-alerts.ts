// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Dispute alert is an early warning from a card issuer that a settled payment is being questioned, ahead of any chargeback. `type` separates fraud reports (`early_fraud_warning`), pre-dispute notices (`dispute_alert`), and Visa RDR cases the network already closed by refunding (`rapid_dispute_resolution`).
 *
 * Use the Dispute alerts API to list alerts for an account, filter them by type or payment, and read `actionable` to see whether refunding can still avoid the chargeback.
 */
export class DisputeAlerts extends APIResource {
  /**
   * Retrieves a single dispute alert or early fraud warning by ID.
   */
  retrieve(
    id: string,
    params: DisputeAlertRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputeAlertRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/dispute_alerts/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the dispute alerts and early fraud warnings across the accounts you can
   * read.
   */
  list(
    params: DisputeAlertListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DisputeAlertListResponsesCursorPage, DisputeAlertListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/dispute_alerts', CursorPage<DisputeAlertListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type DisputeAlertListResponsesCursorPage = CursorPage<DisputeAlertListResponse>;

/**
 * The type of dispute alert.
 */
export type DisputeAlertType = 'dispute' | 'dispute_rdr' | 'fraud';

export interface DisputeAlertRetrieveResponse {
  /**
   * Dispute alert ID, prefixed `dspa_`.
   */
  id: string;

  /**
   * The account the alerted payment belongs to, prefixed `biz_`. `null` while the
   * alert is unmatched.
   */
  account_id: string | null;

  /**
   * Whether refunding the payment can still avoid a chargeback. `false` once the
   * payment has been disputed or fully refunded, or when the alert could not be
   * matched to a payment — `not_actionable_reason` says which.
   */
  actionable: boolean;

  /**
   * The alerted amount, in whole units of `currency`. This is what the issuer
   * reported, which can differ from the payment's own amount.
   */
  amount: number;

  /**
   * The card network as reported by the issuer, lowercased, such as `visa` or
   * `mastercard`. `unknown` when the report carries neither a network nor a
   * recognizable BIN.
   */
  card_brand: string | null;

  /**
   * When Whop received the alert, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code of the alerted amount.
   */
  currency: string;

  /**
   * Whether Whop charged the account an alert fee for this one. Always `false` for
   * `early_fraud_warning`, which Whop is not billed for and never passes on.
   */
  fee_charged: boolean;

  /**
   * Name of the bank that issued the card and filed the report.
   */
  issuer: string | null;

  /**
   * Why refunding can no longer avoid a chargeback. `network_resolved` when a Visa
   * RDR already closed the case, `payment_unmatched` when no payment matched,
   * `payment_not_captured` when it never captured money, `payment_disputed` once the
   * payment carries a dispute, `payment_refunded` once fully refunded. `null` while
   * `actionable` is true.
   */
  not_actionable_reason:
    | 'network_resolved'
    | 'payment_unmatched'
    | 'payment_not_captured'
    | 'payment_disputed'
    | 'payment_refunded'
    | null;

  /**
   * The payment the issuer reported, prefixed `pay_`. `null` when Whop could not
   * match the report to a payment.
   */
  payment_id: string | null;

  /**
   * The product the alerted payment was for, prefixed `prod_`.
   */
  product_id: string | null;

  /**
   * When the issuer filed the report, as an ISO 8601 timestamp. Earlier than
   * `created_at`, which is when Whop received it.
   */
  reported_at: string;

  /**
   * When the reported transaction was made, as an ISO 8601 timestamp.
   */
  transaction_at: string | null;

  /**
   * What the issuer sent. `early_fraud_warning` is a fraud report on a settled
   * payment (Visa TC40 / Mastercard SAFE) — refunding still avoids the chargeback,
   * and Whop never charges a fee for one. `dispute_alert` is a pre-dispute notice
   * from the issuer's alert network, which Whop pays for and passes on as a fee.
   * `rapid_dispute_resolution` is a Visa RDR case the network already closed by
   * refunding the payment — nothing is left to act on.
   */
  type: 'early_fraud_warning' | 'dispute_alert' | 'rapid_dispute_resolution';

  /**
   * When the alert was last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export interface DisputeAlertListResponse {
  /**
   * Dispute alert ID, prefixed `dspa_`.
   */
  id: string;

  /**
   * The account the alerted payment belongs to, prefixed `biz_`. `null` while the
   * alert is unmatched.
   */
  account_id: string | null;

  /**
   * Whether refunding the payment can still avoid a chargeback. `false` once the
   * payment has been disputed or fully refunded, or when the alert could not be
   * matched to a payment — `not_actionable_reason` says which.
   */
  actionable: boolean;

  /**
   * The alerted amount, in whole units of `currency`. This is what the issuer
   * reported, which can differ from the payment's own amount.
   */
  amount: number;

  /**
   * The card network as reported by the issuer, lowercased, such as `visa` or
   * `mastercard`. `unknown` when the report carries neither a network nor a
   * recognizable BIN.
   */
  card_brand: string | null;

  /**
   * When Whop received the alert, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code of the alerted amount.
   */
  currency: string;

  /**
   * Whether Whop charged the account an alert fee for this one. Always `false` for
   * `early_fraud_warning`, which Whop is not billed for and never passes on.
   */
  fee_charged: boolean;

  /**
   * Name of the bank that issued the card and filed the report.
   */
  issuer: string | null;

  /**
   * Why refunding can no longer avoid a chargeback. `network_resolved` when a Visa
   * RDR already closed the case, `payment_unmatched` when no payment matched,
   * `payment_not_captured` when it never captured money, `payment_disputed` once the
   * payment carries a dispute, `payment_refunded` once fully refunded. `null` while
   * `actionable` is true.
   */
  not_actionable_reason:
    | 'network_resolved'
    | 'payment_unmatched'
    | 'payment_not_captured'
    | 'payment_disputed'
    | 'payment_refunded'
    | null;

  /**
   * The payment the issuer reported, prefixed `pay_`. `null` when Whop could not
   * match the report to a payment.
   */
  payment_id: string | null;

  /**
   * The product the alerted payment was for, prefixed `prod_`.
   */
  product_id: string | null;

  /**
   * When the issuer filed the report, as an ISO 8601 timestamp. Earlier than
   * `created_at`, which is when Whop received it.
   */
  reported_at: string;

  /**
   * When the reported transaction was made, as an ISO 8601 timestamp.
   */
  transaction_at: string | null;

  /**
   * What the issuer sent. `early_fraud_warning` is a fraud report on a settled
   * payment (Visa TC40 / Mastercard SAFE) — refunding still avoids the chargeback,
   * and Whop never charges a fee for one. `dispute_alert` is a pre-dispute notice
   * from the issuer's alert network, which Whop pays for and passes on as a fee.
   * `rapid_dispute_resolution` is a Visa RDR case the network already closed by
   * refunding the payment — nothing is left to act on.
   */
  type: 'early_fraud_warning' | 'dispute_alert' | 'rapid_dispute_resolution';

  /**
   * When the alert was last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export interface DisputeAlertRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface DisputeAlertListParams extends CursorPageParams {
  /**
   * Query param: Only alerts on this account's payments (`biz_` tag). Omit it to
   * cover every account you can read.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns alerts before this position.
   */
  before?: string;

  /**
   * Query param: Only alerts Whop received after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only alerts Whop received before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of alerts to return (default 20, max 100).
   */
  first?: number;

  /**
   * Query param: The number of alerts to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort alerts by.
   */
  order?: 'created_at' | 'reported_at' | 'amount';

  /**
   * Query param: Only alerts on this payment (`pay_` tag). A payment can carry
   * several.
   */
  payment_id?: string;

  /**
   * Query param: Only alerts of this kind. `early_fraud_warning` for issuer fraud
   * reports, `dispute_alert` for pre-dispute notices, `rapid_dispute_resolution` for
   * Visa RDR cases the network already closed.
   */
  type?: 'early_fraud_warning' | 'dispute_alert' | 'rapid_dispute_resolution';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace DisputeAlerts {
  export {
    type DisputeAlertType as DisputeAlertType,
    type DisputeAlertRetrieveResponse as DisputeAlertRetrieveResponse,
    type DisputeAlertListResponse as DisputeAlertListResponse,
    type DisputeAlertListResponsesCursorPage as DisputeAlertListResponsesCursorPage,
    type DisputeAlertRetrieveParams as DisputeAlertRetrieveParams,
    type DisputeAlertListParams as DisputeAlertListParams,
  };
}
