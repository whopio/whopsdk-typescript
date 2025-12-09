// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Withdrawals extends APIResource {
  /**
   * Retrieves a withdrawal by ID
   *
   * Required permissions:
   *
   * - `payout:withdrawal:read`
   * - `payout:destination:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WithdrawalRetrieveResponse> {
    return this._client.get(path`/withdrawals/${id}`, options);
  }

  /**
   * Lists withdrawals
   *
   * Required permissions:
   *
   * - `payout:withdrawal:read`
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
 * The types of withdrawals
 */
export type WithdrawalTypes = 'regular' | 'clawback';

/**
 * A withdrawal request.
 */
export interface WithdrawalRetrieveResponse {
  /**
   * Internal ID of the withdrawal request.
   */
  id: string;

  /**
   * How much money was attempted to be withdrawn, in a float type.
   */
  amount: number;

  /**
   * When the withdrawal request was created.
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
  ledger_account: WithdrawalRetrieveResponse.LedgerAccount;

  /**
   * The markup fee that was charged for the withdrawal. This is in the same currency
   * as the withdrawal amount. This only applies to platform accounts using Whop
   * Rails.
   */
  markup_fee: number;

  /**
   * The payout token used for the withdrawal, if applicable.
   */
  payout_token: WithdrawalRetrieveResponse.PayoutToken | null;

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

  /**
   * The type of withdrawal.
   */
  withdrawal_type: WithdrawalTypes;
}

export namespace WithdrawalRetrieveResponse {
  /**
   * The ledger account associated with the withdrawal.
   */
  export interface LedgerAccount {
    /**
     * The ID of the LedgerAccount.
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
     * The ID of the payout token
     */
    id: string;

    /**
     * The date and time the payout token was created
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
 * A withdrawal request.
 */
export interface WithdrawalListResponse {
  /**
   * Internal ID of the withdrawal request.
   */
  id: string;

  /**
   * How much money was attempted to be withdrawn, in a float type.
   */
  amount: number;

  /**
   * When the withdrawal request was created.
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

  /**
   * The type of withdrawal.
   */
  withdrawal_type: WithdrawalTypes;
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
    type WithdrawalFeeTypes as WithdrawalFeeTypes,
    type WithdrawalSpeeds as WithdrawalSpeeds,
    type WithdrawalStatus as WithdrawalStatus,
    type WithdrawalTypes as WithdrawalTypes,
    type WithdrawalRetrieveResponse as WithdrawalRetrieveResponse,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalListResponsesCursorPage as WithdrawalListResponsesCursorPage,
    type WithdrawalListParams as WithdrawalListParams,
  };
}
