// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Transfers move value between identities on Whop. They are used for account-to-account money movement, user payouts inside Whop, crypto transfers, and claim links depending on the destination type.
 *
 * Use the Transfers API to create a transfer, list previous transfers, and retrieve a transfer by ID when reconciling money movement between accounts or users.
 */
export class Transfers extends APIResource {
  /**
   * Moves money between accounts, or into a claim link anyone with the URL can
   * redeem.
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.create({
   *   amount: 25,
   *   origin_id: 'biz_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(params: TransferCreateParams, options?: RequestOptions): APIPromise<TransferCreateResponse> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/transfers', {
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
   * Retrieves a single transfer.
   *
   * @example
   * ```ts
   * const transfer = await client.transfers.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: TransferRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransferRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/transfers/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists an account's transfers.
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
    params: TransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransferListResponsesCursorPage, TransferListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/transfers', CursorPage<TransferListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
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
     * The user who initiated the transfer, such as the team member who sent a manual
     * payout. Null if the creator is unavailable.
     */
    created_by_user: Transfer.CreatedByUser | null;

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
     * The object type. Discriminates the create response from a send or a claim link.
     */
    object: 'transfer';

    /**
     * Account or user sending funds.
     */
    origin: Transfer.Company | Transfer.User;

    /**
     * Source ledger account ID.
     */
    origin_ledger_account_id: string;

    /**
     * Transfer status. `processing` means the on-chain leg is still executing — poll
     * the transfer until it resolves to `succeeded` or `failed`. A `failed` transfer
     * may be retried under the same ID and later resolve to `succeeded`.
     */
    status: 'processing' | 'succeeded' | 'failed';

    /**
     * When the transfer failed, as an ISO 8601 timestamp. Null unless the transfer has
     * failed.
     */
    failed_at?: string | null;

    /**
     * Machine-readable code for why the transfer failed. Null unless the transfer has
     * failed.
     */
    failure_code?: string | null;

    /**
     * Human-readable explanation of why the transfer failed. Null unless the transfer
     * has failed.
     */
    failure_reason?: string | null;

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
    /**
     * The user who initiated the transfer, such as the team member who sent a manual
     * payout. Null if the creator is unavailable.
     */
    export interface CreatedByUser {
      /**
       * User ID.
       */
      id: string;

      /**
       * User's username.
       */
      username: string;

      /**
       * User display name.
       */
      name?: string | null;
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

    /**
     * A newly funded claim link is always `pending` — it stays claimable until it is
     * fully claimed, canceled, or expires.
     */
    status: 'pending';
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
   * The user who initiated the transfer, such as the team member who sent a manual
   * payout. Null if the creator is unavailable.
   */
  created_by_user: TransferRetrieveResponse.CreatedByUser | null;

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
   * The object type. Discriminates the create response from a send or a claim link.
   */
  object: 'transfer';

  /**
   * Account or user sending funds.
   */
  origin: TransferRetrieveResponse.Company | TransferRetrieveResponse.User;

  /**
   * Source ledger account ID.
   */
  origin_ledger_account_id: string;

  /**
   * Transfer status. `processing` means the on-chain leg is still executing — poll
   * the transfer until it resolves to `succeeded` or `failed`. A `failed` transfer
   * may be retried under the same ID and later resolve to `succeeded`.
   */
  status: 'processing' | 'succeeded' | 'failed';

  /**
   * When the transfer failed, as an ISO 8601 timestamp. Null unless the transfer has
   * failed.
   */
  failed_at?: string | null;

  /**
   * Machine-readable code for why the transfer failed. Null unless the transfer has
   * failed.
   */
  failure_code?: string | null;

  /**
   * Human-readable explanation of why the transfer failed. Null unless the transfer
   * has failed.
   */
  failure_reason?: string | null;

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
  /**
   * The user who initiated the transfer, such as the team member who sent a manual
   * payout. Null if the creator is unavailable.
   */
  export interface CreatedByUser {
    /**
     * User ID.
     */
    id: string;

    /**
     * User's username.
     */
    username: string;

    /**
     * User display name.
     */
    name?: string | null;
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
   * The user who initiated the transfer, such as the team member who sent a manual
   * payout. Null if the creator is unavailable.
   */
  created_by_user: TransferListResponse.CreatedByUser | null;

  /**
   * Transfer currency.
   */
  currency: string;

  /**
   * Destination ledger account ID.
   */
  destination_ledger_account_id: string;

  /**
   * The object type.
   */
  object: 'transfer';

  /**
   * Source ledger account ID.
   */
  origin_ledger_account_id: string;

  /**
   * Transfer status. `processing` means the on-chain leg is still executing — poll
   * the transfer until it resolves to `succeeded` or `failed`. A `failed` transfer
   * may be retried under the same ID and later resolve to `succeeded`.
   */
  status: 'processing' | 'succeeded' | 'failed';

  /**
   * When the transfer failed, as an ISO 8601 timestamp. Null unless the transfer has
   * failed.
   */
  failed_at?: string | null;

  /**
   * Machine-readable code for why the transfer failed. Null unless the transfer has
   * failed.
   */
  failure_code?: string | null;

  /**
   * Human-readable explanation of why the transfer failed. Null unless the transfer
   * has failed.
   */
  failure_reason?: string | null;

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

export namespace TransferListResponse {
  /**
   * The user who initiated the transfer, such as the team member who sent a manual
   * payout. Null if the creator is unavailable.
   */
  export interface CreatedByUser {
    /**
     * User ID.
     */
    id: string;

    /**
     * User's username.
     */
    username: string;

    /**
     * User display name.
     */
    name?: string | null;
  }
}

export interface TransferCreateParams {
  /**
   * Body param: The amount to move, in the transfer currency. For example 25.00.
   */
  amount: number;

  /**
   * Body param: The account sending the funds. A user ID (user_xxx), account ID
   * (biz_xxx), or ledger account ID (ldgr_xxx).
   */
  origin_id: string;

  /**
   * Body param: Currency, such as `usd`. Required for ledger transfers.
   */
  currency?: string;

  /**
   * Body param: The recipient. Required for ledger and wallet*send (a
   * user* /biz* /ldgr* ID, or — for sends — an email). Omit for claim_link.
   */
  destination_id?: string;

  /**
   * Body param: claim_link only. Link expiry as an ISO 8601 timestamp. Defaults to
   * 24 hours from creation.
   */
  expires_at?: string | null;

  /**
   * Body param: Ledger transfers and wallet sends. A unique key that makes retries
   * safe. Retrying with the same key returns the original transfer, or attaches to
   * the original wallet send, instead of moving money twice.
   */
  idempotence_key?: string | null;

  /**
   * Body param: Ledger transfers only. Custom key-value pairs attached to the
   * transfer. Max 50 keys, 100 chars per key, 500 chars per string value.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: Ledger transfers only. A short note describing the transfer.
   */
  notes?: string | null;

  /**
   * Body param: claim_link only. How many different users can claim the link.
   * Defaults to 1.
   */
  redeemable_count?: number;

  /**
   * Body param: The kind of money movement, which decides what comes back. Defaults
   * to ledger. `ledger` moves credit between two Whop balances and returns a
   * `transfer`; `wallet_send` sends USDT from the origin account's Ethereum wallet
   * and returns a `send`; `claim_link` funds a shareable link anyone with the URL
   * can redeem and returns a `claim_link`. A `ledger` transfer from a
   * stablecoin-rails account settles on-chain when covered, and still returns a
   * `transfer`.
   */
  type?: 'ledger' | 'wallet_send' | 'claim_link';

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

export interface TransferRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface TransferListParams extends CursorPageParams {
  /**
   * Query param: Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Query param: Only transfers created strictly after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only transfers created strictly before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Filter to transfers received by this account. Provide this or
   * origin_id.
   */
  destination_id?: string;

  /**
   * Query param: Sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Number of transfers to return from the start of the window.
   */
  first?: number;

  /**
   * Query param: Number of transfers to return from the end of the window.
   */
  last?: number;

  /**
   * Query param: Sort column. Defaults to created_at.
   */
  order?: 'created_at' | 'amount';

  /**
   * Query param: Filter to transfers sent from this account. Provide this or
   * destination_id.
   */
  origin_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Transfers {
  export {
    type TransferCreateResponse as TransferCreateResponse,
    type TransferRetrieveResponse as TransferRetrieveResponse,
    type TransferListResponse as TransferListResponse,
    type TransferListResponsesCursorPage as TransferListResponsesCursorPage,
    type TransferCreateParams as TransferCreateParams,
    type TransferRetrieveParams as TransferRetrieveParams,
    type TransferListParams as TransferListParams,
  };
}
