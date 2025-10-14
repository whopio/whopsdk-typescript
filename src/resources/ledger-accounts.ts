// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LedgerAccounts extends APIResource {
  /**
   * Retrieves a ledger account by ID
   *
   * Required permissions:
   *
   * - `company:balance:read`
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
   * The ID of the LedgerAccount.
   */
  id: string;

  /**
   * The balances associated with the account.
   */
  balances: Array<LedgerAccountRetrieveResponse.Balance>;

  /**
   * The different statuses a LedgerAccountAudit can be
   */
  ledger_account_audit_status: 'reserves_imposed' | 'requested_more_information' | null;

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
   * An object representing a (sanitized) user of the site.
   */
  export interface User {
    /**
     * The internal ID of the user.
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
   * An object representing a (sanitized) company.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
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
}

export declare namespace LedgerAccounts {
  export { type LedgerAccountRetrieveResponse as LedgerAccountRetrieveResponse };
}
