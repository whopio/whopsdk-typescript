// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Withdrawals extends APIResource {
  /**
   * Creates a withdrawal request for a ledger account
   *
   * Required permissions:
   *
   * - `payout:withdraw_funds`
   * - `payout:destination:read`
   *
   * @example
   * ```ts
   * const withdrawal = await client.withdrawals.create({
   *   amount: 6.9,
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   currency: 'usd',
   * });
   * ```
   */
  create(body: WithdrawalCreateParams, options?: RequestOptions): APIPromise<Withdrawal> {
    return this._client.post('/withdrawals', { body, ...options });
  }

  /**
   * Retrieves a withdrawal by ID
   *
   * Required permissions:
   *
   * - `payout:withdrawal:read`
   * - `payout:destination:read`
   *
   * @example
   * ```ts
   * const withdrawal = await client.withdrawals.retrieve(
   *   'wdrl_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Withdrawal> {
    return this._client.get(path`/withdrawals/${id}`, options);
  }

  /**
   * Lists withdrawals
   *
   * Required permissions:
   *
   * - `payout:withdrawal:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const withdrawalListResponse of client.withdrawals.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WithdrawalListParams,
    options?: RequestOptions,
  ): PagePromise<WithdrawalListResponsesCursorPage, WithdrawalListResponse> {
    return this._client.getAPIList('/withdrawals', CursorPage<WithdrawalListResponse>, { query, ...options });
  }
}

export type WithdrawalListResponsesCursorPage = CursorPage<WithdrawalListResponse>;

/**
 * A withdrawal represents a request to transfer funds from a company's ledger
 * account to an external payout method.
 */
export interface Withdrawal {
  /**
   * The unique identifier for the withdrawal.
   */
  id: string;

  /**
   * The withdrawal amount. Provided as a number in the specified currency. Eg:
   * 100.00 for $100.00 USD.
   */
  amount: number;

  /**
   * The datetime the withdrawal was created.
   */
  created_at: string;

  /**
   * The currency of the withdrawal request.
   */
  currency: Shared.Currency;

  /**
   * The different error codes a payout can be in.
   */
  error_code:
    | 'account_closed'
    | 'account_does_not_exist'
    | 'account_information_invalid'
    | 'account_number_invalid_region'
    | 'account_frozen'
    | 'account_lookup_failed'
    | 'account_not_found'
    | 'amount_out_of_bounds'
    | 'attributes_not_validated'
    | 'b2b_payments_prohibited'
    | 'bank_statement_required'
    | 'compliance_review'
    | 'currency_not_supported'
    | 'deposit_canceled'
    | 'deposit_failed'
    | 'deposit_rejected'
    | 'destination_unavailable'
    | 'exceeded_account_limit'
    | 'expired_quote'
    | 'generic_payout_error'
    | 'technical_problem'
    | 'identification_number_invalid'
    | 'invalid_account_number'
    | 'invalid_bank_code'
    | 'invalid_beneficiary'
    | 'invalid_mailing_address'
    | 'invalid_branch_number'
    | 'invalid_branch_code'
    | 'invalid_phone_number'
    | 'invalid_routing_number'
    | 'invalid_swift_code'
    | 'invalid_company_details'
    | 'manual_cancelation'
    | 'misc_error'
    | 'missing_city_and_country'
    | 'missing_phone_number'
    | 'missing_remittance_info'
    | 'payee_name_invalid'
    | 'receiving_account_locked'
    | 'rejected_by_compliance'
    | 'rtp_not_supported'
    | 'non_transaction_account'
    | 'source_token_insufficient_funds'
    | 'ssn_invalid'
    | 'wallet_screenshot_required'
    | 'unsupported_region'
    | null;

  /**
   * The error message for the withdrawal, if any.
   */
  error_message: string | null;

  /**
   * The estimated availability date for the withdrawal, if any.
   */
  estimated_availability: string | null;

  /**
   * The fee amount that was charged for the withdrawal. This is in the same currency
   * as the withdrawal amount.
   */
  fee_amount: number;

  /**
   * The different fee types for a withdrawal.
   */
  fee_type: WithdrawalFeeTypes | null;

  /**
   * The ledger account associated with the withdrawal.
   */
  ledger_account: Withdrawal.LedgerAccount;

  /**
   * The markup fee that was charged for the withdrawal. This is in the same currency
   * as the withdrawal amount. This only applies to platform accounts using Whop
   * Rails.
   */
  markup_fee: number;

  /**
   * The payout token used for the withdrawal, if applicable.
   */
  payout_token: Withdrawal.PayoutToken | null;

  /**
   * The speed of the withdrawal.
   */
  speed: WithdrawalSpeeds;

  /**
   * Status of the withdrawal.
   */
  status: WithdrawalStatus;

  /**
   * The trace code for the payout, if applicable. Provided on ACH transactions when
   * available.
   */
  trace_code: string | null;
}

export namespace Withdrawal {
  /**
   * The ledger account associated with the withdrawal.
   */
  export interface LedgerAccount {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;

    /**
     * The ID of the company associated with this ledger account.
     */
    company_id: string | null;
  }

  /**
   * The payout token used for the withdrawal, if applicable.
   */
  export interface PayoutToken {
    /**
     * The unique identifier for the payout token.
     */
    id: string;

    /**
     * The datetime the payout token was created.
     */
    created_at: string;

    /**
     * The currency code of the payout destination. This is the currency that payouts
     * will be made in for this token.
     */
    destination_currency_code: string;

    /**
     * An optional nickname for the payout token to help the user identify it. This is
     * not used by the provider and is only for the user's reference.
     */
    nickname: string | null;

    /**
     * The name of the payer associated with the payout token.
     */
    payer_name: string | null;
  }
}

/**
 * The different fee types for a withdrawal.
 */
export type WithdrawalFeeTypes = 'exclusive' | 'inclusive';

/**
 * The different speeds of withdrawals
 */
export type WithdrawalSpeeds = 'standard' | 'instant';

/**
 * The status of a withdrawal request
 */
export type WithdrawalStatus =
  | 'requested'
  | 'awaiting_payment'
  | 'in_transit'
  | 'completed'
  | 'failed'
  | 'canceled'
  | 'denied';

/**
 * A withdrawal represents a request to transfer funds from a company's ledger
 * account to an external payout method.
 */
export interface WithdrawalListResponse {
  /**
   * The unique identifier for the withdrawal.
   */
  id: string;

  /**
   * The withdrawal amount. Provided as a number in the specified currency. Eg:
   * 100.00 for $100.00 USD.
   */
  amount: number;

  /**
   * The datetime the withdrawal was created.
   */
  created_at: string;

  /**
   * The currency of the withdrawal request.
   */
  currency: Shared.Currency;

  /**
   * The fee amount that was charged for the withdrawal. This is in the same currency
   * as the withdrawal amount.
   */
  fee_amount: number;

  /**
   * The different fee types for a withdrawal.
   */
  fee_type: WithdrawalFeeTypes | null;

  /**
   * The markup fee that was charged for the withdrawal. This is in the same currency
   * as the withdrawal amount. This only applies to platform accounts using Whop
   * Rails.
   */
  markup_fee: number;

  /**
   * The speed of the withdrawal.
   */
  speed: WithdrawalSpeeds;

  /**
   * Status of the withdrawal.
   */
  status: WithdrawalStatus;
}

export interface WithdrawalCreateParams {
  /**
   * The amount to withdraw in the specified currency
   */
  amount: number;

  /**
   * The ID of the company to withdraw from.
   */
  company_id: string;

  /**
   * The currency that is being withdrawn.
   */
  currency: Shared.Currency;

  /**
   * The ID of the payout method to use for the withdrawal.
   */
  payout_method_id?: string | null;

  /**
   * Whether the platform covers the payout fees instead of the connected account.
   */
  platform_covers_fees?: boolean | null;

  /**
   * Custom statement descriptor for the withdrawal. Must be between 5 and 22
   * characters and contain only alphanumeric characters.
   */
  statement_descriptor?: string | null;
}

export interface WithdrawalListParams extends CursorPageParams {
  /**
   * The ID of the company to list withdrawals for
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
}

export declare namespace Withdrawals {
  export {
    type Withdrawal as Withdrawal,
    type WithdrawalFeeTypes as WithdrawalFeeTypes,
    type WithdrawalSpeeds as WithdrawalSpeeds,
    type WithdrawalStatus as WithdrawalStatus,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalListResponsesCursorPage as WithdrawalListResponsesCursorPage,
    type WithdrawalCreateParams as WithdrawalCreateParams,
    type WithdrawalListParams as WithdrawalListParams,
  };
}
