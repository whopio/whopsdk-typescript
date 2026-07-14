// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * A Ledger Activity row is a single financial event on an account's ledger — a payment, withdrawal, refund, transfer, on-chain deposit, swap, or card transaction. Each row is derived from the underlying ledger lines and carries a typed `resource` and `source` so you can present and link the event without extra lookups.
 *
 * Use Ledger Activity to build a statement or transaction feed for an account or user. Reconcile against your own records with `amount` (signed, in the currency's smallest precision units) and `posted_at`, and use `available_at` to know when inflows became withdrawable.
 */
export class FinancialActivity extends APIResource {
  /**
   * Returns a paginated activity feed for one account or user, derived from ledger
   * lines with typed resource and source objects for presentation. Pass exactly one
   * of `account_id` (a `biz_` identifier) or `user_id` (a `user_` identifier).
   * Filter by line type, currency, posted timestamp, or settlement date to reconcile
   * a specific window. Pass `include_owned_accounts=true` with your own `user_id` to
   * aggregate your personal ledger and the businesses you own into one feed; each
   * row then carries the owning `account`.
   */
  list(
    query: FinancialActivityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialActivityListResponse> {
    return this._client.get('/financial-activity', { query, ...options });
  }
}

export interface FinancialActivityListResponse {
  data: Array<FinancialActivityListResponse.Data>;

  page_info: FinancialActivityListResponse.PageInfo;
}

export namespace FinancialActivityListResponse {
  export interface Data {
    /**
     * Ledger activity ID.
     */
    id: string;

    /**
     * Signed amount in the currency's smallest precision units.
     */
    amount: string;

    /**
     * ISO 8601 timestamp these funds became (or are scheduled to become) withdrawable:
     * the posted time for already-settled funds, or 00:00:00 UTC on the scheduled
     * release date for pending funds. Present only on inflows entering the balance
     * (payments, top-ups, incoming transfers/affiliate); null on withdrawals, refunds,
     * disputes and on-chain rows. The available_after/before filters window on its UTC
     * settlement date.
     */
    available_at: string | null;

    /**
     * When the activity record was created.
     */
    created_at: string | null;

    /**
     * Currency for this ledger activity.
     */
    currency: Data.Currency;

    /**
     * Type of ledger activity.
     */
    line_type: string;

    object: 'ledger_activity';

    /**
     * When the activity posted to the ledger.
     */
    posted_at: string;

    /**
     * Resource associated with this ledger activity.
     */
    resource:
      | Data.UnionMember0
      | Data.UnionMember1
      | Data.UnionMember2
      | Data.UnionMember3
      | Data.UnionMember4
      | Data.UnionMember5
      | Data.UnionMember6
      | null;

    /**
     * Source of this ledger activity.
     */
    source: Data.Source | null;

    /**
     * The viewer account that owns this row's ledger. Present only when the response
     * aggregates owned accounts (include_owned_accounts=true); omitted otherwise.
     */
    account?: Data.UnionMember0 | Data.UnionMember1;

    /**
     * The ledger account (a ldgr\_ identifier) this row belongs to. Present only when
     * the response aggregates owned accounts (include_owned_accounts=true); omitted
     * otherwise. Pair it with `account` to scope drawers and dashboard links to the
     * owning business.
     */
    ledger_account_id?: string | null;
  }

  export namespace Data {
    /**
     * Currency for this ledger activity.
     */
    export interface Currency {
      /**
       * Currency code.
       */
      code: string;

      /**
       * Precision factor for the currency, for example `100000000` for USD.
       */
      precision: string;
    }

    export interface UnionMember0 {
      /**
       * Account ID.
       */
      id: string;

      /**
       * Account logo URL.
       */
      logo_url: string | null;

      object: 'account';

      /**
       * Account route.
       */
      route: string | null;

      /**
       * Account display name.
       */
      title: string | null;
    }

    export interface UnionMember1 {
      /**
       * User ID.
       */
      id: string;

      /**
       * User display name.
       */
      name: string | null;

      object: 'user';

      /**
       * User profile image URL.
       */
      profile_picture_url: string | null;

      /**
       * User's username.
       */
      username: string | null;
    }

    export interface UnionMember2 {
      /**
       * Bounty ID.
       */
      id: string;

      object: 'bounty';

      /**
       * Bounty lifecycle status.
       */
      status: string;

      /**
       * Bounty title.
       */
      title: string;
    }

    export interface UnionMember3 {
      /**
       * Ledger account ID.
       */
      id: string;

      object: 'ledger_account';

      owner: UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Account ID.
         */
        id: string;

        /**
         * Account logo URL.
         */
        logo_url: string | null;

        object: 'account';

        /**
         * Account route.
         */
        route: string | null;

        /**
         * Account display name.
         */
        title: string | null;
      }

      export interface UnionMember1 {
        /**
         * User ID.
         */
        id: string;

        /**
         * User display name.
         */
        name: string | null;

        object: 'user';

        /**
         * User profile image URL.
         */
        profile_picture_url: string | null;

        /**
         * User's username.
         */
        username: string | null;
      }
    }

    export interface UnionMember4 {
      /**
       * Payment method ID.
       */
      id: string;

      bank: UnionMember4.Bank | null;

      card: UnionMember4.Card | null;

      /**
       * Email identifier for email-based payment methods.
       */
      email_identifier: string | null;

      /**
       * Payment gateway type.
       */
      gateway_type: string | null;

      object: 'payment_method';

      /**
       * Payment method type.
       */
      payment_method_type: string | null;
    }

    export namespace UnionMember4 {
      export interface Bank {
        /**
         * Bank account holder name.
         */
        account_name: string | null;

        /**
         * Bank account type.
         */
        account_type: string | null;

        /**
         * Bank name.
         */
        bank_name: string | null;

        /**
         * Last four digits of the bank account.
         */
        last4: string | null;
      }

      export interface Card {
        /**
         * Card brand.
         */
        brand: string | null;

        /**
         * Card expiration month.
         */
        exp_month: number | null;

        /**
         * Card expiration year.
         */
        exp_year: number | null;

        /**
         * Last four digits of the card.
         */
        last4: string | null;
      }
    }

    export interface UnionMember5 {
      /**
       * Payout method ID.
       */
      id: string;

      /**
       * Masked account reference.
       */
      account_reference: string | null;

      /**
       * Destination currency code.
       */
      destination_currency_code: string | null;

      /**
       * Payout institution name.
       */
      institution_name: string | null;

      /**
       * Payout method nickname.
       */
      nickname: string | null;

      object: 'payout_method';

      /**
       * Payout provider.
       */
      provider: string | null;
    }

    export interface UnionMember6 {
      /**
       * Card transaction ID.
       */
      id: string;

      /**
       * ISO 8601 timestamp the transaction was authorized.
       */
      authorized_at: string | null;

      /**
       * Identifier of the card that the transaction was charged to.
       */
      card_id: string | null;

      /**
       * Cashback earned on this transaction as a USD decimal string. Zero for declined
       * or ineligible transactions; null when cashback has not been computed yet.
       */
      cashback_usd: string | null;

      /**
       * Reason the transaction was declined (when status is declined).
       */
      declined_reason: string | null;

      /**
       * Amount the merchant charged in their local currency, as a decimal string. Pair
       * with local_currency.
       */
      local_amount: string | null;

      /**
       * ISO 4217 currency code of the merchant-charged amount in local_amount.
       */
      local_currency: string | null;

      /**
       * Merchant category.
       */
      merchant_category: string | null;

      /**
       * Merchant icon URL.
       */
      merchant_icon_url: string | null;

      /**
       * Merchant display name.
       */
      merchant_name: string | null;

      object: 'card_transaction';

      /**
       * ISO 8601 timestamp the transaction was settled by the card network.
       */
      posted_at: string | null;

      /**
       * Current card transaction status.
       */
      status: string | null;

      /**
       * The processor-settled USD amount as a decimal string. The ledger's USDT leg is
       * posted 1:1 from this value.
       */
      usd_amount: string | null;
    }

    /**
     * Source of this ledger activity.
     */
    export interface Source {
      id: string;

      object: string;

      /**
       * Withdrawal amount as a decimal number in the destination currency (withdrawal
       * sources only; requires payout:withdrawal:read).
       */
      amount_float?: number | null;

      /**
       * Chain the deposit landed on, for example plasma (onchain_transaction sources
       * only).
       */
      chain?: string | null;

      /**
       * Public claim URL for the airdrop link (airdrop_link sources only).
       */
      claim_url?: string | null;

      /**
       * Withdrawal creation time as an ISO 8601 timestamp (withdrawal sources only;
       * requires payout:withdrawal:read).
       */
      created_at?: string | null;

      /**
       * Estimated arrival as an ISO 8601 timestamp (withdrawal sources only; requires
       * payout:withdrawal:read).
       */
      estimated_arrival?: string | null;

      /**
       * Amount converted out of from_currency as a decimal string (swap sources only).
       */
      from_amount?: string | null;

      /**
       * Lowercase currency code converted from (swap sources only).
       */
      from_currency?: string | null;

      /**
       * Name of the entity processing the payout (withdrawal sources only; requires
       * payout:withdrawal:read).
       */
      payer_name?: string | null;

      /**
       * Payout destination display info (withdrawal sources only).
       */
      payout_destination?: Source.PayoutDestination | null;

      /**
       * Saved payout destination nickname (withdrawal sources only).
       */
      payout_token_nickname?: string | null;

      /**
       * Transfer reason on transfer sources, for example pool_top_up or bounty_return.
       */
      reason?: string | null;

      /**
       * Sender wallet address or onramp provider identifier (onchain_transaction sources
       * only).
       */
      sender_address?: string | null;

      /**
       * Lifecycle status. On withdrawal sources this is the withdrawal status (requires
       * payout:withdrawal:read); on airdrop_link sources it is the claim-link status
       * (ungated); on payment and top-up sources it is the friendly payment status such
       * as succeeded/pending/failed (ungated).
       */
      status?: string | null;

      /**
       * Amount received in to_currency as a decimal string (swap sources only).
       */
      to_amount?: string | null;

      /**
       * Lowercase currency code converted to (swap sources only).
       */
      to_currency?: string | null;

      /**
       * On-chain transaction hash (onchain_transaction and swap sources only).
       */
      tx_hash?: string | null;

      [k: string]: unknown;
    }

    export namespace Source {
      /**
       * Payout destination display info (withdrawal sources only).
       */
      export interface PayoutDestination {
        icon_url?: string | null;

        payer_name?: string | null;
      }
    }

    export interface UnionMember0 {
      /**
       * Account ID.
       */
      id: string;

      /**
       * Account logo URL.
       */
      logo_url: string | null;

      object: 'account';

      /**
       * Account route.
       */
      route: string | null;

      /**
       * Account display name.
       */
      title: string | null;
    }

    export interface UnionMember1 {
      /**
       * User ID.
       */
      id: string;

      /**
       * User display name.
       */
      name: string | null;

      object: 'user';

      /**
       * User profile image URL.
       */
      profile_picture_url: string | null;

      /**
       * User's username.
       */
      username: string | null;
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface FinancialActivityListParams {
  /**
   * The owning account ID (a biz\_ identifier). Provide this or user_id.
   */
  account_id?: string;

  /**
   * Only include rows whose funds became withdrawable on or after this `YYYY-MM-DD`
   * settlement date (UTC), distinct from posted_at. Requires currency.
   */
  available_after?: string;

  /**
   * Only include rows whose funds became withdrawable on or before this `YYYY-MM-DD`
   * settlement date (UTC). Set equal to available_after for a single day. Requires
   * currency.
   */
  available_before?: string;

  /**
   * Optional currency code filter, for example `usd`.
   */
  currency?: string;

  /**
   * Cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * When true, aggregates the authenticated user's personal ledger with the
   * businesses they own (owner role with balance read) into one feed. Requires
   * user_id to be the authenticated user; cannot be combined with account_id or the
   * settlement-date filters. Each returned row includes the owning `account`.
   */
  include_owned_accounts?: boolean;

  /**
   * Maximum number of rows to return.
   */
  limit?: number;

  /**
   * Optional ledger line categories to include. Some categories (for example
   * `onchain_deposit`, which covers inbound crypto deposits such as MoonPay onramps)
   * are only returned when explicitly requested here.
   */
  line_types?: Array<string>;

  /**
   * Only include rows posted after this ISO 8601 timestamp.
   */
  posted_after?: string;

  /**
   * Only include rows posted before this ISO 8601 timestamp.
   */
  posted_before?: string;

  /**
   * The owning user ID (a user\_ identifier). Provide this or account_id.
   */
  user_id?: string;
}

export declare namespace FinancialActivity {
  export {
    type FinancialActivityListResponse as FinancialActivityListResponse,
    type FinancialActivityListParams as FinancialActivityListParams,
  };
}
