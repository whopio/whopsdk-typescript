// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Transfers move value between identities on Whop. They are used for account-to-account money movement, user payouts inside Whop, crypto transfers, and claim links depending on the destination type.
 *
 * Use the Transfers API to create a transfer, list previous transfers, and retrieve a transfer by ID when reconciling money movement between accounts or users.
 */
export class Transfers extends APIResource {
  /**
   * Lists ledger transfers for an account. You must specify an origin_id or a
   * destination_id.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transferListResponse of client.transfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransferListResponsesCursorPage, TransferListResponse> {
    return this._client.getAPIList('/transfers', CursorPage<TransferListResponse>, { query, ...options });
  }

  /**
   * Moves funds out of an account. `type` selects the kind of movement (default
   * `ledger`): `ledger` transfers credit between two ledger accounts and returns a
   * Transfer; `wallet_send` sends USDT from the origin account's Ethereum wallet to
   * a recipient; `claim_link` funds a shareable claim link anyone with the URL can
   * redeem.
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.create({
   *   amount: 0,
   *   origin_id: 'origin_id',
   * });
   * ```
   */
  create(body: TransferCreateParams, options?: RequestOptions): APIPromise<TransferCreateResponse> {
    return this._client.post('/transfers', { body, ...options });
  }

  /**
   * Retrieves a ledger transfer by ID.
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransferRetrieveResponse> {
    return this._client.get(path`/transfers/${id}`, options);
  }
}

export type TransferListResponsesCursorPage = CursorPage<TransferListResponse>;

/**
 * A transfer of credit between two ledger accounts.
 */
export type TransferCreateResponse =
  | TransferCreateResponse.Transfer
  | TransferCreateResponse.Send
  | TransferCreateResponse.ClaimLink;

export namespace TransferCreateResponse {
  /**
   * A transfer of credit between two ledger accounts.
   */
  export interface Transfer {
    /**
     * Transfer ID.
     */
    id: string;

    /**
     * Transfer amount.
     */
    amount: number;

    /**
     * When the transfer was created.
     */
    created_at: string;

    /**
     * Transfer currency.
     */
    currency: string;

    /**
     * Account or user receiving funds.
     */
    destination: Transfer.Company | Transfer.User;

    /**
     * Destination ledger account ID.
     */
    destination_ledger_account_id: string;

    /**
     * Account or user sending funds.
     */
    origin: Transfer.Company | Transfer.User;

    /**
     * Source ledger account ID.
     */
    origin_ledger_account_id: string;

    /**
     * Fee charged for the transfer.
     */
    fee_amount?: number | null;

    /**
     * Custom metadata attached to the transfer.
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Transfer note.
     */
    notes?: string | null;
  }

  export namespace Transfer {
    export interface Company {
      /**
       * Account ID.
       */
      id: string;

      typename: 'Company';

      /**
       * Account route.
       */
      route?: string | null;

      /**
       * Account display name.
       */
      title?: string | null;
    }

    export interface User {
      /**
       * User ID.
       */
      id: string;

      typename: 'User';

      /**
       * User display name.
       */
      name?: string | null;

      /**
       * User's username.
       */
      username?: string;
    }

    export interface Company {
      /**
       * Account ID.
       */
      id: string;

      typename: 'Company';

      /**
       * Account route.
       */
      route?: string | null;

      /**
       * Account display name.
       */
      title?: string | null;
    }

    export interface User {
      /**
       * User ID.
       */
      id: string;

      typename: 'User';

      /**
       * User display name.
       */
      name?: string | null;

      /**
       * User's username.
       */
      username?: string;
    }
  }

  /**
   * Returned for a wallet_send: an onchain USDT send to a recipient.
   */
  export interface Send {
    amount: string;

    currency: string;

    destination: Send.Destination;

    object: 'send';

    source: Send.Source;

    tx_hash: string;
  }

  export namespace Send {
    export interface Destination {
      account_id: string;

      address: string;
    }

    export interface Source {
      account_id: string;

      address: string;
    }
  }

  /**
   * Returned for a claim_link: a shareable URL anyone can open to claim the funds.
   */
  export interface ClaimLink {
    id: string;

    amount: string;

    claim_url: string;

    currency: string;

    expires_at: string | null;

    object: 'claim_link';

    redeemable_count: number;

    source: ClaimLink.Source;

    status: string;
  }

  export namespace ClaimLink {
    export interface Source {
      account_id: string;
    }
  }
}

/**
 * A transfer of credit between two ledger accounts.
 */
export interface TransferRetrieveResponse {
  /**
   * Transfer ID.
   */
  id: string;

  /**
   * Transfer amount.
   */
  amount: number;

  /**
   * When the transfer was created.
   */
  created_at: string;

  /**
   * Transfer currency.
   */
  currency: string;

  /**
   * Account or user receiving funds.
   */
  destination: TransferRetrieveResponse.Company | TransferRetrieveResponse.User;

  /**
   * Destination ledger account ID.
   */
  destination_ledger_account_id: string;

  /**
   * Account or user sending funds.
   */
  origin: TransferRetrieveResponse.Company | TransferRetrieveResponse.User;

  /**
   * Source ledger account ID.
   */
  origin_ledger_account_id: string;

  /**
   * Fee charged for the transfer.
   */
  fee_amount?: number | null;

  /**
   * Custom metadata attached to the transfer.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Transfer note.
   */
  notes?: string | null;
}

export namespace TransferRetrieveResponse {
  export interface Company {
    /**
     * Account ID.
     */
    id: string;

    typename: 'Company';

    /**
     * Account route.
     */
    route?: string | null;

    /**
     * Account display name.
     */
    title?: string | null;
  }

  export interface User {
    /**
     * User ID.
     */
    id: string;

    typename: 'User';

    /**
     * User display name.
     */
    name?: string | null;

    /**
     * User's username.
     */
    username?: string;
  }

  export interface Company {
    /**
     * Account ID.
     */
    id: string;

    typename: 'Company';

    /**
     * Account route.
     */
    route?: string | null;

    /**
     * Account display name.
     */
    title?: string | null;
  }

  export interface User {
    /**
     * User ID.
     */
    id: string;

    typename: 'User';

    /**
     * User display name.
     */
    name?: string | null;

    /**
     * User's username.
     */
    username?: string;
  }
}

/**
 * A transfer of credit between two ledger accounts.
 */
export interface TransferListResponse {
  /**
   * Transfer ID.
   */
  id: string;

  /**
   * Transfer amount.
   */
  amount: number;

  /**
   * When the transfer was created.
   */
  created_at: string;

  /**
   * Transfer currency.
   */
  currency: string;

  /**
   * Destination ledger account ID.
   */
  destination_ledger_account_id: string;

  /**
   * Source ledger account ID.
   */
  origin_ledger_account_id: string;

  /**
   * Fee charged for the transfer.
   */
  fee_amount?: number | null;

  /**
   * Custom metadata attached to the transfer.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Transfer note.
   */
  notes?: string | null;
}

export interface TransferListParams extends CursorPageParams {
  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only transfers created strictly after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only transfers created strictly before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Filter to transfers received by this account.
   */
  destination_id?: string;

  /**
   * Sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of transfers to return from the start of the window.
   */
  first?: number;

  /**
   * Number of transfers to return from the end of the window.
   */
  last?: number;

  /**
   * Sort column. Defaults to created_at.
   */
  order?: 'created_at' | 'amount';

  /**
   * Filter to transfers sent from this account.
   */
  origin_id?: string;
}

export interface TransferCreateParams {
  /**
   * The amount to move, in the transfer currency. For example 25.00.
   */
  amount: number;

  /**
   * The account sending the funds. A user ID (user_xxx), account ID (biz_xxx), or
   * ledger account ID (ldgr_xxx).
   */
  origin_id: string;

  /**
   * Currency, such as `usd`. Required for ledger transfers.
   */
  currency?: string;

  /**
   * The recipient. Required for ledger and wallet*send (a user* /biz* /ldgr* ID, or —
   * for sends — an email). Omit for claim_link.
   */
  destination_id?: string;

  /**
   * claim_link only. Link expiry as an ISO 8601 timestamp. Defaults to 24 hours from
   * creation.
   */
  expires_at?: string | null;

  /**
   * Ledger transfers only. A unique key to prevent duplicate transfers.
   */
  idempotence_key?: string | null;

  /**
   * Ledger transfers only. Custom key-value pairs attached to the transfer. Max 50
   * keys, 100 chars per key, 500 chars per string value.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Ledger transfers only. A short note describing the transfer.
   */
  notes?: string | null;

  /**
   * claim_link only. How many different users can claim the link. Defaults to 1.
   */
  redeemable_count?: number;

  /**
   * The kind of money movement. Defaults to ledger.
   */
  type?: 'ledger' | 'wallet_send' | 'claim_link';
}

export declare namespace Transfers {
  export {
    type TransferCreateResponse as TransferCreateResponse,
    type TransferRetrieveResponse as TransferRetrieveResponse,
    type TransferListResponse as TransferListResponse,
    type TransferListResponsesCursorPage as TransferListResponsesCursorPage,
    type TransferListParams as TransferListParams,
    type TransferCreateParams as TransferCreateParams,
  };
}
