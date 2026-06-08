// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cards extends APIResource {
  /**
   * Lists every issued card for the account.
   */
  list(query: CardListParams, options?: RequestOptions): APIPromise<CardListResponse> {
    return this._client.get('/cards', { query, ...options });
  }

  /**
   * Issues a new virtual card for the account.
   */
  create(params: CardCreateParams, options?: RequestOptions): APIPromise<Card> {
    const { account_id, ...body } = params;
    return this._client.post('/cards', { query: { account_id }, body, ...options });
  }

  /**
   * Lists card transactions across every card on the account, newest first.
   */
  transactions(query: CardTransactionsParams, options?: RequestOptions): APIPromise<CardTransactionList> {
    return this._client.get('/cards/transactions', { query, ...options });
  }

  /**
   * Returns a single card's lifecycle details.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.get(path`/cards/${id}`, options);
  }

  /**
   * Updates a card's name or spending limits.
   */
  update(id: string, body: CardUpdateParams, options?: RequestOptions): APIPromise<Card> {
    return this._client.patch(path`/cards/${id}`, { body, ...options });
  }

  /**
   * Returns the funding balance of the card's collateral account.
   */
  balance(id: string, options?: RequestOptions): APIPromise<CardAccountBalance> {
    return this._client.get(path`/cards/${id}/balance`, options);
  }

  /**
   * Returns the on-chain deposit address used to fund the card's card account.
   */
  depositAddress(id: string, options?: RequestOptions): APIPromise<CardDepositAddress> {
    return this._client.get(path`/cards/${id}/deposit-address`, options);
  }

  /**
   * Lists transactions for a single card, newest first.
   */
  cardTransactions(
    id: string,
    query: CardCardTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardTransactionList> {
    return this._client.get(path`/cards/${id}/transactions`, { query, ...options });
  }

  /**
   * Returns per-day spend totals for the last 30 days. NOTE: the aggregate is
   * account-level — every card on an account shares one collateral account, so the
   * totals cover all of the account's cards, not just this one.
   */
  dailySpend(
    id: string,
    query: CardDailySpendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardDailySpend> {
    return this._client.get(path`/cards/${id}/daily-spend`, { query, ...options });
  }

  /**
   * Returns the aggregate cashback summary. NOTE: the figures are account-level —
   * cashback is earned and paid out against the shared collateral account, so they
   * cover all of the account's cards, not just this one.
   */
  cashback(id: string, options?: RequestOptions): APIPromise<CardCashback> {
    return this._client.get(path`/cards/${id}/cashback`, options);
  }

  /**
   * Freezes (locks) the card so it can no longer authorize.
   */
  freeze(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.post(path`/cards/${id}/freeze`, options);
  }

  /**
   * Unfreezes (unlocks) a frozen card.
   */
  unfreeze(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.post(path`/cards/${id}/unfreeze`, options);
  }

  /**
   * Permanently cancels the card. This is irreversible.
   */
  deactivate(id: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.post(path`/cards/${id}/deactivate`, options);
  }

  /**
   * Files a dispute against one of the card's transactions. The transaction must
   * belong to the addressed card.
   */
  createDispute(
    id: string,
    body: CardCreateDisputeParams,
    options?: RequestOptions,
  ): APIPromise<CardDispute> {
    return this._client.post(path`/cards/${id}/disputes`, { body, ...options });
  }

  /**
   * Attaches an evidence file to a dispute on the card. Provide exactly one of
   * direct_upload_id or id.
   */
  createDisputeAttachment(
    disputeID: string,
    params: CardCreateDisputeAttachmentParams,
    options?: RequestOptions,
  ): APIPromise<CardDispute> {
    const { id, ...body } = params;
    return this._client.post(path`/cards/${id}/disputes/${disputeID}/attachments`, { body, ...options });
  }

  /**
   * Reveals the full card number (PAN) and CVC. POST so the reveal is never cached.
   * The response is marked Cache-Control: no-store.
   */
  secrets(id: string, options?: RequestOptions): APIPromise<CardSecrets> {
    return this._client.post(path`/cards/${id}/secrets`, options);
  }

  /**
   * Reveals the card PIN. Only the user the card is assigned to may read it. The
   * response is marked Cache-Control: no-store.
   */
  pin(id: string, options?: RequestOptions): APIPromise<CardPin> {
    return this._client.get(path`/cards/${id}/pin`, options);
  }

  /**
   * Sets a new 4-digit PIN. Only the user the card is assigned to may set it. The
   * PIN is never echoed back.
   */
  updatePin(
    id: string,
    body: CardUpdatePinParams,
    options?: RequestOptions,
  ): APIPromise<CardUpdatePinResponse> {
    return this._client.put(path`/cards/${id}/pin`, { body, ...options });
  }
}

export interface Card {
  /**
   * The card ID.
   */
  id: string | null;

  object: 'card';

  /**
   * The card lifecycle status.
   */
  status: 'pending' | 'active' | 'frozen' | 'canceled' | null;

  card_type?: 'virtual' | 'physical' | null;

  /**
   * ISO 8601 creation timestamp.
   */
  created_at?: string | null;

  expiration_month?: string | null;

  expiration_year?: string | null;

  /**
   * The last 4 digits of the card number.
   */
  last4?: string | null;

  /**
   * The display name of the card.
   */
  name?: string | null;

  /**
   * Recurring spend limit in dollars.
   */
  spend_limit?: string | null;

  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time' | null;

  /**
   * Per-authorization limit in dollars.
   */
  transaction_limit?: string | null;
}

export interface CardAccountBalance {
  /**
   * The available spending power in dollars.
   */
  available_balance: string;

  /**
   * The currency of the balance.
   */
  currency: string;

  object: 'card_account_balance';

  /**
   * Spending power in dollars.
   */
  spending_power: string;

  /**
   * Balance due in dollars.
   */
  balance_due?: string;

  /**
   * Credit limit in dollars.
   */
  credit_limit?: string;

  /**
   * Whether this card account has any card transactions.
   */
  has_activity?: boolean;

  /**
   * Pending charges in dollars.
   */
  pending_charges?: string;

  /**
   * Dollar amount of in-flight deposits routed to the card that have not yet
   * settled.
   */
  pending_deposit_amount?: string;

  /**
   * Posted charges in dollars.
   */
  posted_charges?: string;
}

export interface CardCashback {
  months: Array<CardCashback.Month>;

  /**
   * Cashback accrued this month that will be paid out next, in USD.
   */
  next_payout_usd: string;

  object: 'card_cashback';

  /**
   * Total cashback earned across all time, in USD.
   */
  total_earned_usd: string;

  /**
   * ISO 8601 date the next cashback payout is scheduled for.
   */
  next_payout_date?: string | null;
}

export namespace CardCashback {
  export interface Month {
    by_merchant: Array<Month.ByMerchant>;

    /**
     * Calendar month (1-12).
     */
    month: number;

    /**
     * Total spend that earned cashback this month, in USD.
     */
    qualified_spend_usd: string;

    /**
     * Total cashback earned in this month, in USD.
     */
    total_cashback_usd: string;

    /**
     * Calendar year.
     */
    year: number;
  }

  export namespace Month {
    export interface ByMerchant {
      /**
       * Cashback earned in this merchant bucket for the month, in USD.
       */
      cashback_usd: string;

      /**
       * Stable URL-safe identifier for the merchant bucket.
       */
      merchant_key: string;

      /**
       * Human-readable merchant bucket label.
       */
      merchant_label: string;
    }
  }
}

export interface CardDailySpend {
  daily_spend: Array<CardDailySpend.DailySpend>;

  object: 'daily_spend';

  /**
   * The IANA timezone the daily buckets were aggregated in.
   */
  timezone: string;
}

export namespace CardDailySpend {
  export interface DailySpend {
    /**
     * Total spend for the day, in cents.
     */
    amount_cents: number;

    /**
     * ISO 8601 timestamp for the spend bucket (noon UTC on the day).
     */
    date: string;
  }
}

export interface CardDepositAddress {
  /**
   * The on-chain deposit address used to fund the card account.
   */
  address: string;

  object: 'card_deposit_address';
}

export interface CardDispute {
  /**
   * The card dispute ID.
   */
  id: string;

  /**
   * The number of evidence files attached to the dispute.
   */
  attachment_count: number;

  /**
   * ISO 8601 timestamp of when the dispute was created.
   */
  created_at: string;

  /**
   * The ISO 4217 currency code for the disputed amount.
   */
  currency: string;

  /**
   * The disputed amount in the smallest currency unit (cents).
   */
  dispute_amount_cents: number;

  /**
   * The reason category for the dispute.
   */
  dispute_type: 'fraud' | 'credit_not_processed' | 'service_not_received' | 'merchandise_issue' | 'other';

  /**
   * Whether evidence files have been attached to the dispute.
   */
  has_file_evidence: boolean;

  object: 'card_dispute';

  /**
   * The dispute lifecycle status.
   */
  status: 'pending' | 'in_review' | 'accepted' | 'rejected' | 'canceled' | 'resolved_by_merchant';

  /**
   * ISO 8601 timestamp of when the provider resolved the dispute. Null if
   * unresolved.
   */
  resolved_at?: string | null;

  /**
   * The cardholder's written evidence for the dispute.
   */
  text_evidence?: string;

  /**
   * The ID of the card transaction the dispute was filed against.
   */
  transaction_id?: string | null;
}

export interface CardPin {
  object: 'card_pin';

  /**
   * The card PIN.
   */
  pin: string;
}

export interface CardSecrets {
  /**
   * The card CVC/CVV.
   */
  cvc: string;

  object: 'card_secrets';

  /**
   * The full card number (PAN).
   */
  pan: string;

  /**
   * The cardholder name from the card provider.
   */
  name_on_card?: string | null;
}

/**
 * A card transaction record.
 */
export interface CardTransaction {
  /**
   * The unique identifier for the card transaction.
   */
  id: string;

  /**
   * How the card was presented or authenticated for the purchase.
   */
  authorization_method: string | null;

  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  card_id: string;

  /**
   * The cashback reward amount earned on this transaction, in USD.
   */
  cashback_usd_amount: number | null;

  /**
   * The datetime the card transaction was created.
   */
  created_at: string;

  /**
   * The ISO 4217 currency code for the transaction amount.
   */
  currency: string | null;

  /**
   * The issuer-provided reason the transaction was declined.
   */
  declined_reason: string | null;

  /**
   * Whether the transaction was made with a merchant outside the card's home
   * country.
   */
  international: boolean;

  /**
   * The transaction amount in the merchant's local currency before conversion.
   */
  local_amount: number | null;

  /**
   * A user-provided note attached to the transaction.
   */
  memo: string | null;

  /**
   * The enriched or raw category label for the merchant.
   */
  merchant_category: string | null;

  /**
   * The four-digit ISO 18245 merchant category code (MCC).
   */
  merchant_category_code: string | null;

  /**
   * A URL to the enriched merchant logo image.
   */
  merchant_icon_url: string | null;

  /**
   * The enriched or raw name of the merchant where the purchase was made.
   */
  merchant_name: string | null;

  /**
   * When the transaction was settled by the card network.
   */
  posted_at: string | null;

  /**
   * The current lifecycle status of the transaction.
   */
  status: 'pending' | 'completed' | 'reversed' | 'declined';

  /**
   * The type of transaction.
   */
  transaction_type: string;

  /**
   * The transaction amount in USD.
   */
  usd_amount: number | null;
}

export interface CardTransactionList {
  data: Array<CardTransaction>;

  object: 'list';

  pagination: CardTransactionList.Pagination;
}

export namespace CardTransactionList {
  export interface Pagination {
    /**
     * Current page number
     */
    current_page: number;

    /**
     * Next page number
     */
    next_page: number | null;

    /**
     * Previous page number
     */
    prev_page: number | null;

    /**
     * Total number of records
     */
    total_count: number;

    /**
     * Total number of pages
     */
    total_pages: number;
  }
}

export interface CardListResponse {
  cards: Array<Card>;
}

export interface CardUpdatePinResponse {
  success: boolean;
}

export interface CardListParams {
  /**
   * The business or user account ID that owns the cards.
   */
  account_id: string;
}

export interface CardCreateParams {
  /**
   * Query param: The business or user account ID to issue the card for.
   */
  account_id: string;

  /**
   * Body param: Display name for the card.
   */
  name?: string;

  /**
   * Body param: Recurring spend limit in dollars (requires spend_limit_frequency).
   */
  spend_limit?: string;

  /**
   * Body param
   */
  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time';

  /**
   * Body param: Per-authorization limit in dollars (mutually exclusive with
   * spend_limit).
   */
  transaction_limit?: string;
}

export interface CardTransactionsParams {
  /**
   * The business or user account ID that owns the cards.
   */
  account_id: string;

  /**
   * Filter to a single card on the account, by card ID.
   */
  card_id?: string;

  /**
   * Only return transactions created at or after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only return transactions created strictly before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * The page number to retrieve.
   */
  page?: number;

  /**
   * The number of transactions to return per page. Capped at 50.
   */
  per?: number;

  /**
   * Filter to transactions with this status.
   */
  status?: 'pending' | 'completed' | 'reversed' | 'declined';
}

export interface CardUpdateParams {
  name?: string;

  spend_limit?: string;

  spend_limit_frequency?: 'daily' | 'weekly' | 'monthly' | 'one_time';

  transaction_limit?: string;
}

export interface CardCardTransactionsParams {
  /**
   * Only return transactions created at or after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only return transactions created strictly before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * The page number to retrieve.
   */
  page?: number;

  /**
   * The number of transactions to return per page. Capped at 50.
   */
  per?: number;

  /**
   * Filter to transactions with this status.
   */
  status?: 'pending' | 'completed' | 'reversed' | 'declined';
}

export interface CardDailySpendParams {
  /**
   * IANA timezone (e.g. America/New_York) the daily buckets are computed in.
   * Defaults to UTC.
   */
  timezone?: string;
}

export interface CardCreateDisputeParams {
  /**
   * The reason category for the dispute.
   */
  dispute_type: 'fraud' | 'credit_not_processed' | 'service_not_received' | 'merchandise_issue' | 'other';

  /**
   * The cardholder's written evidence for the dispute.
   */
  text_evidence: string;

  /**
   * The ID of the card transaction being disputed. Must belong to this card.
   */
  transaction_id: string;

  /**
   * Optional disputed amount in cents. Defaults to the full transaction amount. Must
   * not exceed the transaction amount.
   */
  dispute_amount_cents?: number;
}

export interface CardCreateDisputeAttachmentParams {
  /**
   * Path param
   */
  id: string;

  /**
   * Body param
   */
  attachment: CardCreateDisputeAttachmentParams.Attachment;
}

export namespace CardCreateDisputeAttachmentParams {
  export interface Attachment {
    /**
     * The ID of an existing file object.
     */
    id?: string;

    /**
     * The direct upload ID returned when uploading the file to storage.
     */
    direct_upload_id?: string;
  }
}

export interface CardUpdatePinParams {
  /**
   * The new 4-digit PIN.
   */
  pin: string;
}

export declare namespace Cards {
  export {
    type Card as Card,
    type CardAccountBalance as CardAccountBalance,
    type CardCashback as CardCashback,
    type CardDailySpend as CardDailySpend,
    type CardDepositAddress as CardDepositAddress,
    type CardDispute as CardDispute,
    type CardPin as CardPin,
    type CardSecrets as CardSecrets,
    type CardTransaction as CardTransaction,
    type CardTransactionList as CardTransactionList,
    type CardListResponse as CardListResponse,
    type CardUpdatePinResponse as CardUpdatePinResponse,
    type CardListParams as CardListParams,
    type CardCreateParams as CardCreateParams,
    type CardTransactionsParams as CardTransactionsParams,
    type CardUpdateParams as CardUpdateParams,
    type CardCardTransactionsParams as CardCardTransactionsParams,
    type CardDailySpendParams as CardDailySpendParams,
    type CardCreateDisputeParams as CardCreateDisputeParams,
    type CardCreateDisputeAttachmentParams as CardCreateDisputeAttachmentParams,
    type CardUpdatePinParams as CardUpdatePinParams,
  };
}
