// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VerificationsAPI from './verifications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Payout accounts
 */
export class PayoutAccounts extends APIResource {
  /**
   * Retrieves the details of an existing payout account.
   *
   * Required permissions:
   *
   * - `payout:account:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutAccountRetrieveResponse> {
    return this._client.get(path`/payout_accounts/${id}`, options);
  }
}

/**
 * The granular calculated statuses reflecting payout account KYC and withdrawal
 * readiness.
 */
export type PayoutAccountCalculatedStatuses = 'connected' | 'disabled' | 'action_required' | 'pending_verification' | 'verification_failed' | 'not_started'

/**
 * An object representing an account used for payouts.
 */
export interface PayoutAccountRetrieveResponse {
  /**
   * The unique identifier for the payout account.
   */
  id: string;

  /**
   * The physical address associated with this payout account
   */
  address: PayoutAccountRetrieveResponse.Address | null;

  /**
   * The company's legal name
   */
  business_name: string | null;

  /**
   * The business representative for this payout account
   */
  business_representative: PayoutAccountRetrieveResponse.BusinessRepresentative | null;

  /**
   * The email address of the representative
   */
  email: string | null;

  /**
   * The latest verification for the connected account.
   */
  latest_verification: PayoutAccountRetrieveResponse.LatestVerification | null;

  /**
   * The business representative's phone
   */
  phone: string | null;

  /**
   * The granular calculated statuses reflecting payout account KYC and withdrawal
   * readiness.
   */
  status: PayoutAccountCalculatedStatuses | null;
}

export namespace PayoutAccountRetrieveResponse {
  /**
   * The physical address associated with this payout account
   */
  export interface Address {
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
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * The business representative for this payout account
   */
  export interface BusinessRepresentative {
    /**
     * The date of birth of the business representative in ISO 8601 format
     * (YYYY-MM-DD).
     */
    date_of_birth: string | null;

    /**
     * The first name of the business representative.
     */
    first_name: string | null;

    /**
     * The last name of the business representative.
     */
    last_name: string | null;

    /**
     * The middle name of the business representative.
     */
    middle_name: string | null;
  }

  /**
   * The latest verification for the connected account.
   */
  export interface LatestVerification {
    /**
     * The unique identifier for the verification.
     */
    id: string;

    /**
     * An error code for a verification attempt.
     */
    last_error_code: VerificationsAPI.VerificationErrorCode | null;

    /**
     * A human-readable explanation of the most recent verification error. Null if no
     * error has occurred.
     */
    last_error_reason: string | null;

    /**
     * The current status of this verification session.
     */
    status: VerificationsAPI.VerificationStatus;
  }
}

export declare namespace PayoutAccounts {
  export {
    type PayoutAccountCalculatedStatuses as PayoutAccountCalculatedStatuses,
    type PayoutAccountRetrieveResponse as PayoutAccountRetrieveResponse
  };
}
