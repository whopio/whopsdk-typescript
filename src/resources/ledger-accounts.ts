// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as VerificationsAPI from './verifications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LedgerAccounts extends APIResource {
  /**
   * Retrieves a ledger account by its ID, company ID or user ID
   *
   * Required permissions:
   *
   * - `company:balance:read`
   * - `payout:account:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LedgerAccountRetrieveResponse> {
    return this._client.get(path`/ledger_accounts/${id}`, options);
  }
}

/**
 * Represents a LedgerAccount.
 */
export interface LedgerAccountRetrieveResponse {
  /**
   * The unique identifier for the ledger account.
   */
  id: string;

  /**
   * The balances associated with the account.
   */
  balances: Array<LedgerAccountRetrieveResponse.Balance>;

  /**
   * The type of ledger account.
   */
  ledger_type: 'primary' | 'pool';

  /**
   * The owner of the ledger account.
   */
  owner: LedgerAccountRetrieveResponse.User | null | LedgerAccountRetrieveResponse.Company | null;

  /**
   * The different approval statuses an account can have.
   */
  payments_approval_status: 'pending' | 'approved' | 'monitoring' | 'rejected' | null;

  /**
   * The payout account associated with the LedgerAccount, if any.
   */
  payout_account_details: LedgerAccountRetrieveResponse.PayoutAccountDetails | null;

  /**
   * The fee for transfers, if applicable.
   */
  transfer_fee: number | null;
}

export namespace LedgerAccountRetrieveResponse {
  /**
   * A cached balance for a LedgerAccount in respect to a currency.
   */
  export interface Balance {
    /**
     * The amount of the balance.
     */
    balance: number;

    /**
     * The currency of the balance.
     */
    currency: Shared.Currency;

    /**
     * The amount of the balance that is pending.
     */
    pending_balance: number;

    /**
     * The amount of the balance that is reserved.
     */
    reserve_balance: number;
  }

  /**
   * A user account on Whop. Contains profile information, identity details, and
   * social connections.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'User';

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }

  /**
   * A company is a seller on Whop. Companies own products, manage members, and
   * receive payouts.
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
     * The title of the company.
     */
    title: string;

    /**
     * The typename of this object
     */
    typename: 'Company';
  }

  /**
   * The payout account associated with the LedgerAccount, if any.
   */
  export interface PayoutAccountDetails {
    /**
     * The unique identifier for the payout account.
     */
    id: string;

    /**
     * The physical address associated with this payout account
     */
    address: PayoutAccountDetails.Address | null;

    /**
     * The company's legal name
     */
    business_name: string | null;

    /**
     * The business representative for this payout account
     */
    business_representative: PayoutAccountDetails.BusinessRepresentative | null;

    /**
     * The email address of the representative
     */
    email: string | null;

    /**
     * The latest verification for the connected account.
     */
    latest_verification: PayoutAccountDetails.LatestVerification | null;

    /**
     * The business representative's phone
     */
    phone: string | null;
  }

  export namespace PayoutAccountDetails {
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
       * The last error reason that occurred during the verification.
       */
      last_error_reason: string | null;

      /**
       * The status of the verification.
       */
      status: VerificationsAPI.VerificationStatus;
    }
  }
}

export declare namespace LedgerAccounts {
  export { type LedgerAccountRetrieveResponse as LedgerAccountRetrieveResponse };
}
