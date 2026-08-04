// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DisputeAlertsAPI from './dispute-alerts';
import * as DisputesAPI from './disputes';
import * as PaymentsAPI from './payments';
import * as PayoutAccountsAPI from './payout-accounts';
import * as PayoutMethodsAPI from './payout-methods';
import * as RefundsAPI from './refunds';
import * as ResolutionCenterCasesAPI from './resolution-center-cases';
import * as SetupIntentsAPI from './setup-intents';
import * as Shared from './shared';
import * as VerificationsAPI from './verifications';
import * as WithdrawalsAPI from './withdrawals';
import { Webhook as Webhook_ } from 'standardwebhooks';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Webhooks
 */
export class Webhooks extends APIResource {
  /**
   * Creates a new webhook
   *
   * Required permissions:
   *
   * - `developer:manage_webhook`
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   url: 'https://example.com/path',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Retrieves the details of an existing webhook.
   *
   * Required permissions:
   *
   * - `developer:manage_webhook`
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve(
   *   'hook_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/webhooks/${id}`, options);
  }

  /**
   * Updates a webhook
   *
   * Required permissions:
   *
   * - `developer:manage_webhook`
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update(
   *   'hook_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: WebhookUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Webhook> {
    return this._client.patch(path`/webhooks/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of webhook endpoints configured for a company, ordered
   * by most recently created.
   *
   * Required permissions:
   *
   * - `developer:manage_webhook`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhookListResponse of client.webhooks.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WebhookListParams,
    options?: RequestOptions,
  ): PagePromise<WebhookListResponsesCursorPage, WebhookListResponse> {
    return this._client.getAPIList('/webhooks', CursorPage<WebhookListResponse>, { query, ...options });
  }

  /**
   * Deletes a webhook
   *
   * Required permissions:
   *
   * - `developer:manage_webhook`
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete(
   *   'hook_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(path`/webhooks/${id}`, options);
  }

  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): UnwrapWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookKey : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook_(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

export type WebhookListResponsesCursorPage = CursorPage<WebhookListResponse>;

/**
 * The different API versions
 */
export type APIVersion = 'v1' | 'v2' | 'v5';

/**
 * A webhook endpoint that receives event notifications for a company via HTTP
 * POST.
 */
export interface Webhook {
  /**
   * The unique identifier for the webhook.
   */
  id: string;

  /**
   * The API version used to format payloads sent to this webhook endpoint.
   */
  api_version: APIVersion;

  /**
   * The dated API version (Api-Version-Date) that v1 payloads for this endpoint are
   * pinned to: events serialize exactly like a REST read at this version (the native
   * serializer where the resource has one). Null when unpinned — legacy (v2/v5)
   * webhooks, and v1 webhooks on the legacy payload shape.
   */
  api_version_date: string | null;

  /**
   * Whether events are sent for child resources. For example, if the webhook is on a
   * company, enabling this sends events only from the company's sub-merchants (child
   * companies).
   */
  child_resource_events: boolean;

  /**
   * The datetime the webhook was created.
   */
  created_at: string;

  /**
   * Whether this webhook endpoint is currently active and receiving events.
   */
  enabled: boolean;

  /**
   * The list of event types this webhook is subscribed to.
   */
  events: Array<WebhookEvent>;

  /**
   * The ID of the resource (company or product) this webhook is attached to.
   */
  resource_id: string;

  /**
   * The subset of subscribed event types that support sending test payloads.
   */
  testable_events: Array<WebhookEvent>;

  /**
   * The destination URL where webhook payloads are delivered via HTTP POST.
   */
  url: string;

  /**
   * The secret key used to sign webhook payloads for verification. Include this in
   * your HMAC validation logic. Returned on the create response and to interactive
   * dashboard sessions; empty for API-key and OAuth callers on later reads.
   */
  webhook_secret: string;
}

/**
 * The different event types available
 */
export type WebhookEvent =
  | 'invoice.created'
  | 'invoice.marked_uncollectible'
  | 'invoice.paid'
  | 'invoice.past_due'
  | 'invoice.voided'
  | 'membership.activated'
  | 'membership.deactivated'
  | 'membership.trial_ending_soon'
  | 'entry.created'
  | 'entry.approved'
  | 'entry.denied'
  | 'entry.deleted'
  | 'export.completed'
  | 'export.failed'
  | 'setup_intent.requires_action'
  | 'setup_intent.succeeded'
  | 'setup_intent.canceled'
  | 'ledger_account.funds_available'
  | 'deposit.succeeded'
  | 'withdrawal.created'
  | 'withdrawal.updated'
  | 'card_transaction.created'
  | 'card_transaction.updated'
  | 'card_transaction.completed'
  | 'card_transaction.declined'
  | 'card_transaction.reversed'
  | 'course_lesson_interaction.completed'
  | 'payout_method.created'
  | 'verification.succeeded'
  | 'identity_profile.approved'
  | 'identity_profile.rejected'
  | 'identity_profile.needs_action'
  | 'identity_profile.updated'
  | 'payout_account.status_updated'
  | 'resolution_center_case.created'
  | 'resolution_center_case.updated'
  | 'resolution_center_case.decided'
  | 'product.created'
  | 'product.updated'
  | 'product.deleted'
  | 'product.published'
  | 'product.unpublished'
  | 'plan.created'
  | 'plan.updated'
  | 'plan.deleted'
  | 'shipment.created'
  | 'shipment.updated'
  | 'member.created'
  | 'chat.message.created'
  | 'chat.reaction.created'
  | 'payment.created'
  | 'payment.succeeded'
  | 'payment.failed'
  | 'payment.pending'
  | 'dispute.created'
  | 'dispute.updated'
  | 'refund.created'
  | 'refund.updated'
  | 'dispute_alert.created'
  | 'membership.cancel_at_period_end_changed';

/**
 * A webhook endpoint that receives event notifications for a company via HTTP
 * POST.
 */
export interface WebhookCreateResponse {
  /**
   * The unique identifier for the webhook.
   */
  id: string;

  /**
   * The API version used to format payloads sent to this webhook endpoint.
   */
  api_version: APIVersion;

  /**
   * The dated API version (Api-Version-Date) that v1 payloads for this endpoint are
   * pinned to: events serialize exactly like a REST read at this version (the native
   * serializer where the resource has one). Null when unpinned — legacy (v2/v5)
   * webhooks, and v1 webhooks on the legacy payload shape.
   */
  api_version_date: string | null;

  /**
   * Whether events are sent for child resources. For example, if the webhook is on a
   * company, enabling this sends events only from the company's sub-merchants (child
   * companies).
   */
  child_resource_events: boolean;

  /**
   * The datetime the webhook was created.
   */
  created_at: string;

  /**
   * Whether this webhook endpoint is currently active and receiving events.
   */
  enabled: boolean;

  /**
   * The list of event types this webhook is subscribed to.
   */
  events: Array<WebhookEvent>;

  /**
   * The ID of the resource (company or product) this webhook is attached to.
   */
  resource_id: string;

  /**
   * The subset of subscribed event types that support sending test payloads.
   */
  testable_events: Array<WebhookEvent>;

  /**
   * The destination URL where webhook payloads are delivered via HTTP POST.
   */
  url: string;

  /**
   * The secret key used to sign webhook payloads for verification. Include this in
   * your HMAC validation logic. Returned on the create response and to interactive
   * dashboard sessions; empty for API-key and OAuth callers on later reads.
   */
  webhook_secret: string;
}

/**
 * A webhook endpoint that receives event notifications for a company via HTTP
 * POST.
 */
export interface WebhookListResponse {
  /**
   * The unique identifier for the webhook.
   */
  id: string;

  /**
   * The API version used to format payloads sent to this webhook endpoint.
   */
  api_version: APIVersion;

  /**
   * The dated API version (Api-Version-Date) that v1 payloads for this endpoint are
   * pinned to: events serialize exactly like a REST read at this version (the native
   * serializer where the resource has one). Null when unpinned — legacy (v2/v5)
   * webhooks, and v1 webhooks on the legacy payload shape.
   */
  api_version_date: string | null;

  /**
   * Whether events are sent for child resources. For example, if the webhook is on a
   * company, enabling this sends events only from the company's sub-merchants (child
   * companies).
   */
  child_resource_events: boolean;

  /**
   * The datetime the webhook was created.
   */
  created_at: string;

  /**
   * Whether this webhook endpoint is currently active and receiving events.
   */
  enabled: boolean;

  /**
   * The list of event types this webhook is subscribed to.
   */
  events: Array<WebhookEvent>;

  /**
   * The ID of the resource (company or product) this webhook is attached to.
   */
  resource_id: string;

  /**
   * The destination URL where webhook payloads are delivered via HTTP POST.
   */
  url: string;

  /**
   * The secret key used to sign webhook payloads for verification. Include this in
   * your HMAC validation logic. Returned on the create response and to interactive
   * dashboard sessions; empty for API-key and OAuth callers on later reads.
   */
  webhook_secret: string;
}

/**
 * Represents `true` or `false` values.
 */
export type WebhookDeleteResponse = boolean;

export interface InvoiceCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An invoice represents an itemized bill sent by a company to a customer for a
   * specific product and plan, tracking the amount owed, due date, and payment
   * status.
   */
  data: Shared.Invoice;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'invoice.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface InvoiceMarkedUncollectibleWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An invoice represents an itemized bill sent by a company to a customer for a
   * specific product and plan, tracking the amount owed, due date, and payment
   * status.
   */
  data: Shared.Invoice;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'invoice.marked_uncollectible';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface InvoicePaidWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An invoice represents an itemized bill sent by a company to a customer for a
   * specific product and plan, tracking the amount owed, due date, and payment
   * status.
   */
  data: Shared.Invoice;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'invoice.paid';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface InvoicePastDueWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An invoice represents an itemized bill sent by a company to a customer for a
   * specific product and plan, tracking the amount owed, due date, and payment
   * status.
   */
  data: Shared.Invoice;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'invoice.past_due';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface InvoiceVoidedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An invoice represents an itemized bill sent by a company to a customer for a
   * specific product and plan, tracking the amount owed, due date, and payment
   * status.
   */
  data: Shared.Invoice;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'invoice.voided';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface MembershipActivatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A membership represents an active relationship between a user and a product. It
   * tracks the user's access, billing status, and renewal schedule.
   */
  data: Shared.Membership;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'membership.activated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface MembershipDeactivatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A membership represents an active relationship between a user and a product. It
   * tracks the user's access, billing status, and renewal schedule.
   */
  data: Shared.Membership;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'membership.deactivated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface MembershipTrialEndingSoonWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A membership represents an active relationship between a user and a product. It
   * tracks the user's access, billing status, and renewal schedule.
   */
  data: Shared.Membership;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'membership.trial_ending_soon';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface EntryCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An entry represents a user's signup for a waitlisted plan.
   */
  data: Shared.Entry;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'entry.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface EntryApprovedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An entry represents a user's signup for a waitlisted plan.
   */
  data: Shared.Entry;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'entry.approved';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface EntryDeniedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An entry represents a user's signup for a waitlisted plan.
   */
  data: Shared.Entry;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'entry.denied';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface EntryDeletedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An entry represents a user's signup for a waitlisted plan.
   */
  data: Shared.Entry;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'entry.deleted';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface SetupIntentRequiresActionWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A setup intent allows a user to save a payment method for future use without
   * making an immediate purchase.
   */
  data: SetupIntentsAPI.SetupIntent;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'setup_intent.requires_action';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface SetupIntentSucceededWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A setup intent allows a user to save a payment method for future use without
   * making an immediate purchase.
   */
  data: SetupIntentsAPI.SetupIntent;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'setup_intent.succeeded';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface SetupIntentCanceledWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A setup intent allows a user to save a payment method for future use without
   * making an immediate purchase.
   */
  data: SetupIntentsAPI.SetupIntent;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'setup_intent.canceled';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface LedgerAccountFundsAvailableWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A ledger account represents a financial account on Whop that can hold many
   * balances.
   */
  data: LedgerAccountFundsAvailableWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'ledger_account.funds_available';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace LedgerAccountFundsAvailableWebhookEvent {
  /**
   * A ledger account represents a financial account on Whop that can hold many
   * balances.
   */
  export interface Data {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;

    /**
     * The balances associated with the account.
     */
    balances: Array<Data.Balance>;

    /**
     * The type of ledger account.
     */
    ledger_type: 'primary' | 'pool';

    /**
     * The owner of the ledger account.
     */
    owner: Data.User | null | Data.Company | null;

    /**
     * The different approval statuses an account can have.
     */
    payments_approval_status: 'pending' | 'approved' | 'monitoring' | 'rejected' | null;

    /**
     * The payout account associated with the LedgerAccount, if any.
     */
    payout_account_details: Data.PayoutAccountDetails | null;

    /**
     * The settlement batch most recently posted to this account's available balance,
     * at midnight UTC. Every payment settling in that batch carries the same
     * `settlement_time_at`.
     */
    settlement_time_at: string | null;

    /**
     * The fee for transfers, if applicable.
     */
    transfer_fee: number | null;

    /**
     * The balance cache associated with the account by currency.
     */
    treasury_balance: Data.TreasuryBalance | null;
  }

  export namespace Data {
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
       * The user's display name shown on their public profile.
       */
      name: string | null;

      /**
       * The typename of this object
       */
      typename: 'User';

      /**
       * The user's unique username shown on their public profile.
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
       * URL slug for the account's store page, e.g. `pickaxe` in whop.com/pickaxe.
       */
      route: string;

      /**
       * The display name of the company shown to customers.
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

      /**
       * The granular calculated statuses reflecting payout account KYC and withdrawal
       * readiness.
       */
      status: PayoutAccountsAPI.PayoutAccountCalculatedStatuses | null;
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
         * The numeric id of the verification record.
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

    /**
     * The balance cache associated with the account by currency.
     */
    export interface TreasuryBalance {
      /**
       * The amount of the balance.
       */
      balance: number;

      /**
       * The balance converted to USD.
       */
      balance_usd: number;

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

      /**
       * The amount of the balance that is withdrawable.
       */
      total_withdrawable_balance: number;
    }
  }
}

export interface WithdrawalCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A withdrawal represents a request to transfer funds from a ledger account to an
   * external payout method.
   */
  data: WithdrawalsAPI.Withdrawal;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'withdrawal.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface WithdrawalUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A withdrawal represents a request to transfer funds from a ledger account to an
   * external payout method.
   */
  data: WithdrawalsAPI.Withdrawal;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'withdrawal.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface CardTransactionCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A card transaction record.
   */
  data: CardTransactionCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_transaction.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace CardTransactionCreatedWebhookEvent {
  /**
   * A card transaction record.
   */
  export interface Data {
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
}

export interface CardTransactionUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A card transaction record.
   */
  data: CardTransactionUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_transaction.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace CardTransactionUpdatedWebhookEvent {
  /**
   * A card transaction record.
   */
  export interface Data {
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
}

export interface CardTransactionCompletedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A card transaction record.
   */
  data: CardTransactionCompletedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_transaction.completed';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace CardTransactionCompletedWebhookEvent {
  /**
   * A card transaction record.
   */
  export interface Data {
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
}

export interface CardTransactionDeclinedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A card transaction record.
   */
  data: CardTransactionDeclinedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_transaction.declined';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace CardTransactionDeclinedWebhookEvent {
  /**
   * A card transaction record.
   */
  export interface Data {
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
}

export interface CardTransactionReversedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A card transaction record.
   */
  data: CardTransactionReversedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_transaction.reversed';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace CardTransactionReversedWebhookEvent {
  /**
   * A card transaction record.
   */
  export interface Data {
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
}

export interface CourseLessonInteractionCompletedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A record of a user's progress on a specific lesson, tracking whether they have
   * completed it.
   */
  data: Shared.CourseLessonInteraction;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'course_lesson_interaction.completed';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface PayoutMethodCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A configured payout destination where a user receives earned funds, such as a
   * bank account or digital wallet.
   */
  data: PayoutMethodCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payout_method.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace PayoutMethodCreatedWebhookEvent {
  /**
   * A configured payout destination where a user receives earned funds, such as a
   * bank account or digital wallet.
   */
  export interface Data {
    /**
     * The unique identifier for the payout token.
     */
    id: string;

    /**
     * A masked identifier for the payout destination, such as the last four digits of
     * a bank account or an email address. Null if no reference is available.
     */
    account_reference: string | null;

    /**
     * The company associated with this payout destination. Null if not linked to a
     * specific company.
     */
    company: Data.Company | null;

    /**
     * The datetime the payout token was created.
     */
    created_at: string;

    /**
     * The three-letter ISO currency code that payouts are delivered in for this
     * destination.
     */
    currency: string;

    /**
     * The payout destination configuration linked to this token. Null if not yet
     * configured.
     */
    destination: Data.Destination | null;

    /**
     * The name of the bank or financial institution receiving payouts. Null if not
     * applicable or not provided.
     */
    institution_name: string | null;

    /**
     * Whether this is the default payout destination for the associated payout
     * account.
     */
    is_default: boolean;

    /**
     * A user-defined label to help identify this payout destination. Not sent to the
     * provider. Null if no nickname has been set.
     */
    nickname: string | null;
  }

  export namespace Data {
    /**
     * The company associated with this payout destination. Null if not linked to a
     * specific company.
     */
    export interface Company {
      /**
       * The unique identifier for the company.
       */
      id: string;
    }

    /**
     * The payout destination configuration linked to this token. Null if not yet
     * configured.
     */
    export interface Destination {
      /**
       * The category of the payout destination
       */
      category: PayoutMethodsAPI.PayoutDestinationCategory;

      /**
       * The country code of the payout destination
       */
      country_code: string;

      /**
       * The name of the payer associated with the payout destination
       */
      name: string;
    }
  }
}

export interface VerificationSucceededWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An identity verification session used to confirm a person or entity's identity
   * for payout account eligibility.
   */
  data: VerificationSucceededWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'verification.succeeded';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace VerificationSucceededWebhookEvent {
  /**
   * An identity verification session used to confirm a person or entity's identity
   * for payout account eligibility.
   */
  export interface Data {
    /**
     * The numeric id of the verification record.
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

export interface IdentityProfileUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * The identity profile that changed. Re-fetch `GET /api/v1/verifications` to read
   * its current, access-scoped state.
   */
  data: IdentityProfileUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'identity_profile.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace IdentityProfileUpdatedWebhookEvent {
  /**
   * The identity profile that changed. Re-fetch `GET /api/v1/verifications` to read
   * its current, access-scoped state.
   */
  export interface Data {
    /**
     * The identity profile id.
     */
    id: string;
  }
}

export interface PayoutAccountStatusUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * An object representing an account used for payouts.
   */
  data: PayoutAccountStatusUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payout_account.status_updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace PayoutAccountStatusUpdatedWebhookEvent {
  /**
   * An object representing an account used for payouts.
   */
  export interface Data {
    /**
     * The unique identifier for the payout account.
     */
    id: string;

    /**
     * The physical address associated with this payout account
     */
    address: Data.Address | null;

    /**
     * The company's legal name
     */
    business_name: string | null;

    /**
     * The business representative for this payout account
     */
    business_representative: Data.BusinessRepresentative | null;

    /**
     * The email address of the representative
     */
    email: string | null;

    /**
     * The latest verification for the connected account.
     */
    latest_verification: Data.LatestVerification | null;

    /**
     * The business representative's phone
     */
    phone: string | null;

    /**
     * The granular calculated statuses reflecting payout account KYC and withdrawal
     * readiness.
     */
    status: PayoutAccountsAPI.PayoutAccountCalculatedStatuses | null;
  }

  export namespace Data {
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
       * The numeric id of the verification record.
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
}

export interface ResolutionCenterCaseCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A resolution center case is a dispute or support case between a user and a
   * company, tracking the issue, status, and outcome.
   */
  data: ResolutionCenterCaseCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'resolution_center_case.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace ResolutionCenterCaseCreatedWebhookEvent {
  /**
   * A resolution center case is a dispute or support case between a user and a
   * company, tracking the issue, status, and outcome.
   */
  export interface Data {
    /**
     * The unique identifier for the resolution.
     */
    id: string;

    /**
     * The company involved in this resolution case. Null if the company no longer
     * exists.
     */
    company: Data.Company | null;

    /**
     * The datetime the resolution was created.
     */
    created_at: string;

    /**
     * Whether the customer has filed an appeal after the initial resolution decision.
     */
    customer_appealed: boolean;

    /**
     * The list of actions currently available to the customer.
     */
    customer_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCaseCustomerResponse>;

    /**
     * The deadline by which the next response is required. Null if no deadline is
     * currently active. As a Unix timestamp.
     */
    due_date: string | null;

    /**
     * The category of the dispute.
     */
    issue: ResolutionCenterCasesAPI.ResolutionCenterCaseIssueType;

    /**
     * The membership record associated with the disputed payment. Null if the
     * membership no longer exists.
     */
    member: Data.Member | null;

    /**
     * Whether the merchant has filed an appeal after the initial resolution decision.
     */
    merchant_appealed: boolean;

    /**
     * The list of actions currently available to the merchant.
     */
    merchant_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCaseMerchantResponse>;

    /**
     * The payment record that is the subject of this resolution case.
     */
    payment: Data.Payment;

    /**
     * The list of actions currently available to the Whop platform for moderating this
     * resolution.
     */
    platform_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCasePlatformResponse>;

    /**
     * The most recent 50 messages, actions, and status changes that have occurred
     * during this resolution case.
     */
    resolution_events: Array<Data.ResolutionEvent>;

    /**
     * The current status of the resolution case, indicating which party needs to
     * respond or if the case is closed.
     */
    status: ResolutionCenterCasesAPI.ResolutionCenterCaseStatus;

    /**
     * The datetime the resolution was last updated.
     */
    updated_at: string;

    /**
     * The customer (buyer) who filed this resolution case.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * The company involved in this resolution case. Null if the company no longer
     * exists.
     */
    export interface Company {
      /**
       * The unique identifier for the company.
       */
      id: string;

      /**
       * The display name of the company shown to customers.
       */
      title: string;
    }

    /**
     * The membership record associated with the disputed payment. Null if the
     * membership no longer exists.
     */
    export interface Member {
      /**
       * The unique identifier for the extra public member.
       */
      id: string;
    }

    /**
     * The payment record that is the subject of this resolution case.
     */
    export interface Payment {
      /**
       * The unique identifier for the payment.
       */
      id: string;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The available currencies on the platform
       */
      currency: Shared.Currency | null;

      /**
       * The time at which this payment was successfully collected. Null if the payment
       * has not yet succeeded. As a Unix timestamp.
       */
      paid_at: string | null;

      /**
       * The payment amount before taxes and discounts are applied. In the currency
       * specified by the currency field.
       */
      subtotal: number | null;

      /**
       * The total amount charged to the customer for this payment, including taxes and
       * after any discounts. In the currency specified by the currency field.
       */
      total: number;
    }

    /**
     * A resolution event is a message or action within a resolution case, such as a
     * response, escalation, or status change.
     */
    export interface ResolutionEvent {
      /**
       * The unique identifier for the resolution event.
       */
      id: string;

      /**
       * The type of action recorded in this event.
       */
      action:
        | 'created'
        | 'responded'
        | 'accepted'
        | 'denied'
        | 'appealed'
        | 'withdrew'
        | 'requested_more_info'
        | 'escalated'
        | 'dispute_opened'
        | 'dispute_customer_won'
        | 'dispute_merchant_won';

      /**
       * The datetime the resolution event was created.
       */
      created_at: string;

      /**
       * The message body or additional context provided with this resolution event. Null
       * if no details were included.
       */
      details: string | null;

      /**
       * The party who performed this action.
       */
      reporter_type: 'merchant' | 'customer' | 'platform' | 'system';
    }

    /**
     * The customer (buyer) who filed this resolution case.
     */
    export interface User {
      /**
       * The unique identifier for the user.
       */
      id: string;

      /**
       * The user's display name shown on their public profile.
       */
      name: string | null;

      /**
       * The user's unique username shown on their public profile.
       */
      username: string;
    }
  }
}

export interface ResolutionCenterCaseUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A resolution center case is a dispute or support case between a user and a
   * company, tracking the issue, status, and outcome.
   */
  data: ResolutionCenterCaseUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'resolution_center_case.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace ResolutionCenterCaseUpdatedWebhookEvent {
  /**
   * A resolution center case is a dispute or support case between a user and a
   * company, tracking the issue, status, and outcome.
   */
  export interface Data {
    /**
     * The unique identifier for the resolution.
     */
    id: string;

    /**
     * The company involved in this resolution case. Null if the company no longer
     * exists.
     */
    company: Data.Company | null;

    /**
     * The datetime the resolution was created.
     */
    created_at: string;

    /**
     * Whether the customer has filed an appeal after the initial resolution decision.
     */
    customer_appealed: boolean;

    /**
     * The list of actions currently available to the customer.
     */
    customer_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCaseCustomerResponse>;

    /**
     * The deadline by which the next response is required. Null if no deadline is
     * currently active. As a Unix timestamp.
     */
    due_date: string | null;

    /**
     * The category of the dispute.
     */
    issue: ResolutionCenterCasesAPI.ResolutionCenterCaseIssueType;

    /**
     * The membership record associated with the disputed payment. Null if the
     * membership no longer exists.
     */
    member: Data.Member | null;

    /**
     * Whether the merchant has filed an appeal after the initial resolution decision.
     */
    merchant_appealed: boolean;

    /**
     * The list of actions currently available to the merchant.
     */
    merchant_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCaseMerchantResponse>;

    /**
     * The payment record that is the subject of this resolution case.
     */
    payment: Data.Payment;

    /**
     * The list of actions currently available to the Whop platform for moderating this
     * resolution.
     */
    platform_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCasePlatformResponse>;

    /**
     * The most recent 50 messages, actions, and status changes that have occurred
     * during this resolution case.
     */
    resolution_events: Array<Data.ResolutionEvent>;

    /**
     * The current status of the resolution case, indicating which party needs to
     * respond or if the case is closed.
     */
    status: ResolutionCenterCasesAPI.ResolutionCenterCaseStatus;

    /**
     * The datetime the resolution was last updated.
     */
    updated_at: string;

    /**
     * The customer (buyer) who filed this resolution case.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * The company involved in this resolution case. Null if the company no longer
     * exists.
     */
    export interface Company {
      /**
       * The unique identifier for the company.
       */
      id: string;

      /**
       * The display name of the company shown to customers.
       */
      title: string;
    }

    /**
     * The membership record associated with the disputed payment. Null if the
     * membership no longer exists.
     */
    export interface Member {
      /**
       * The unique identifier for the extra public member.
       */
      id: string;
    }

    /**
     * The payment record that is the subject of this resolution case.
     */
    export interface Payment {
      /**
       * The unique identifier for the payment.
       */
      id: string;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The available currencies on the platform
       */
      currency: Shared.Currency | null;

      /**
       * The time at which this payment was successfully collected. Null if the payment
       * has not yet succeeded. As a Unix timestamp.
       */
      paid_at: string | null;

      /**
       * The payment amount before taxes and discounts are applied. In the currency
       * specified by the currency field.
       */
      subtotal: number | null;

      /**
       * The total amount charged to the customer for this payment, including taxes and
       * after any discounts. In the currency specified by the currency field.
       */
      total: number;
    }

    /**
     * A resolution event is a message or action within a resolution case, such as a
     * response, escalation, or status change.
     */
    export interface ResolutionEvent {
      /**
       * The unique identifier for the resolution event.
       */
      id: string;

      /**
       * The type of action recorded in this event.
       */
      action:
        | 'created'
        | 'responded'
        | 'accepted'
        | 'denied'
        | 'appealed'
        | 'withdrew'
        | 'requested_more_info'
        | 'escalated'
        | 'dispute_opened'
        | 'dispute_customer_won'
        | 'dispute_merchant_won';

      /**
       * The datetime the resolution event was created.
       */
      created_at: string;

      /**
       * The message body or additional context provided with this resolution event. Null
       * if no details were included.
       */
      details: string | null;

      /**
       * The party who performed this action.
       */
      reporter_type: 'merchant' | 'customer' | 'platform' | 'system';
    }

    /**
     * The customer (buyer) who filed this resolution case.
     */
    export interface User {
      /**
       * The unique identifier for the user.
       */
      id: string;

      /**
       * The user's display name shown on their public profile.
       */
      name: string | null;

      /**
       * The user's unique username shown on their public profile.
       */
      username: string;
    }
  }
}

export interface ResolutionCenterCaseDecidedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A resolution center case is a dispute or support case between a user and a
   * company, tracking the issue, status, and outcome.
   */
  data: ResolutionCenterCaseDecidedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'resolution_center_case.decided';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace ResolutionCenterCaseDecidedWebhookEvent {
  /**
   * A resolution center case is a dispute or support case between a user and a
   * company, tracking the issue, status, and outcome.
   */
  export interface Data {
    /**
     * The unique identifier for the resolution.
     */
    id: string;

    /**
     * The company involved in this resolution case. Null if the company no longer
     * exists.
     */
    company: Data.Company | null;

    /**
     * The datetime the resolution was created.
     */
    created_at: string;

    /**
     * Whether the customer has filed an appeal after the initial resolution decision.
     */
    customer_appealed: boolean;

    /**
     * The list of actions currently available to the customer.
     */
    customer_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCaseCustomerResponse>;

    /**
     * The deadline by which the next response is required. Null if no deadline is
     * currently active. As a Unix timestamp.
     */
    due_date: string | null;

    /**
     * The category of the dispute.
     */
    issue: ResolutionCenterCasesAPI.ResolutionCenterCaseIssueType;

    /**
     * The membership record associated with the disputed payment. Null if the
     * membership no longer exists.
     */
    member: Data.Member | null;

    /**
     * Whether the merchant has filed an appeal after the initial resolution decision.
     */
    merchant_appealed: boolean;

    /**
     * The list of actions currently available to the merchant.
     */
    merchant_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCaseMerchantResponse>;

    /**
     * The payment record that is the subject of this resolution case.
     */
    payment: Data.Payment;

    /**
     * The list of actions currently available to the Whop platform for moderating this
     * resolution.
     */
    platform_response_actions: Array<ResolutionCenterCasesAPI.ResolutionCenterCasePlatformResponse>;

    /**
     * The most recent 50 messages, actions, and status changes that have occurred
     * during this resolution case.
     */
    resolution_events: Array<Data.ResolutionEvent>;

    /**
     * The current status of the resolution case, indicating which party needs to
     * respond or if the case is closed.
     */
    status: ResolutionCenterCasesAPI.ResolutionCenterCaseStatus;

    /**
     * The datetime the resolution was last updated.
     */
    updated_at: string;

    /**
     * The customer (buyer) who filed this resolution case.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * The company involved in this resolution case. Null if the company no longer
     * exists.
     */
    export interface Company {
      /**
       * The unique identifier for the company.
       */
      id: string;

      /**
       * The display name of the company shown to customers.
       */
      title: string;
    }

    /**
     * The membership record associated with the disputed payment. Null if the
     * membership no longer exists.
     */
    export interface Member {
      /**
       * The unique identifier for the extra public member.
       */
      id: string;
    }

    /**
     * The payment record that is the subject of this resolution case.
     */
    export interface Payment {
      /**
       * The unique identifier for the payment.
       */
      id: string;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The available currencies on the platform
       */
      currency: Shared.Currency | null;

      /**
       * The time at which this payment was successfully collected. Null if the payment
       * has not yet succeeded. As a Unix timestamp.
       */
      paid_at: string | null;

      /**
       * The payment amount before taxes and discounts are applied. In the currency
       * specified by the currency field.
       */
      subtotal: number | null;

      /**
       * The total amount charged to the customer for this payment, including taxes and
       * after any discounts. In the currency specified by the currency field.
       */
      total: number;
    }

    /**
     * A resolution event is a message or action within a resolution case, such as a
     * response, escalation, or status change.
     */
    export interface ResolutionEvent {
      /**
       * The unique identifier for the resolution event.
       */
      id: string;

      /**
       * The type of action recorded in this event.
       */
      action:
        | 'created'
        | 'responded'
        | 'accepted'
        | 'denied'
        | 'appealed'
        | 'withdrew'
        | 'requested_more_info'
        | 'escalated'
        | 'dispute_opened'
        | 'dispute_customer_won'
        | 'dispute_merchant_won';

      /**
       * The datetime the resolution event was created.
       */
      created_at: string;

      /**
       * The message body or additional context provided with this resolution event. Null
       * if no details were included.
       */
      details: string | null;

      /**
       * The party who performed this action.
       */
      reporter_type: 'merchant' | 'customer' | 'platform' | 'system';
    }

    /**
     * The customer (buyer) who filed this resolution case.
     */
    export interface User {
      /**
       * The unique identifier for the user.
       */
      id: string;

      /**
       * The user's display name shown on their public profile.
       */
      name: string | null;

      /**
       * The user's unique username shown on their public profile.
       */
      username: string;
    }
  }
}

export interface ProductCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A product is a digital good or service sold on Whop. Products contain plans for
   * pricing and experiences for content delivery.
   */
  data: Shared.Product;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'product.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface ProductUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A product is a digital good or service sold on Whop. Products contain plans for
   * pricing and experiences for content delivery.
   */
  data: Shared.Product;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'product.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface ProductDeletedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A product is a digital good or service sold on Whop. Products contain plans for
   * pricing and experiences for content delivery.
   */
  data: Shared.Product;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'product.deleted';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface ProductPublishedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A product is a digital good or service sold on Whop. Products contain plans for
   * pricing and experiences for content delivery.
   */
  data: Shared.Product;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'product.published';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface ProductUnpublishedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A product is a digital good or service sold on Whop. Products contain plans for
   * pricing and experiences for content delivery.
   */
  data: Shared.Product;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'product.unpublished';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface ShipmentCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A physical shipment associated with a payment, including carrier details and
   * tracking information.
   */
  data: Shared.Shipment;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'shipment.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface ShipmentUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A physical shipment associated with a payment, including carrier details and
   * tracking information.
   */
  data: Shared.Shipment;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'shipment.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface MemberCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A member represents a user's relationship with a company on Whop, including
   * their access level, status, and spending history.
   */
  data: MemberCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'member.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace MemberCreatedWebhookEvent {
  /**
   * A member represents a user's relationship with a company on Whop, including
   * their access level, status, and spending history.
   */
  export interface Data {
    /**
     * The unique identifier for the company member.
     */
    id: string;

    /**
     * The access level of the product member. If its admin, the member is an
     * authorized user of the company. If its customer, the member has a valid
     * membership to any product on the company. If its no_access, the member does not
     * have access to the product.
     */
    access_level: Shared.AccessLevel;

    /**
     * The company for the member.
     */
    company: Data.Company;

    /**
     * The member's token balance for this company. Computed live from the ledger, not
     * from a cache.
     */
    company_token_balance: number;

    /**
     * The datetime the company member was created.
     */
    created_at: string;

    /**
     * When the member joined the company
     */
    joined_at: string;

    /**
     * The different most recent actions a member can have.
     */
    most_recent_action: Shared.MemberMostRecentActions | null;

    /**
     * The time for the most recent action, if applicable.
     */
    most_recent_action_at: string | null;

    /**
     * The phone number for the member, if available.
     */
    phone: string | null;

    /**
     * The status of the member
     */
    status: Shared.MemberStatuses;

    /**
     * The datetime the company member was last updated.
     */
    updated_at: string;

    /**
     * How much money this customer has spent on the company's products and plans
     */
    usd_total_spent: number;

    /**
     * The user for this member, if any.
     */
    user: Data.User | null;
  }

  export namespace Data {
    /**
     * The company for the member.
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
       * The written name of the company.
       */
      title: string;
    }

    /**
     * The user for this member, if any.
     */
    export interface User {
      /**
       * The unique identifier for the company member user.
       */
      id: string;

      /**
       * The digital mailing address of the user.
       */
      email: string | null;

      /**
       * The user's full name.
       */
      name: string | null;

      /**
       * The whop username.
       */
      username: string;
    }
  }
}

export interface ChatMessageCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  data: ChatMessageCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'chat.message.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace ChatMessageCreatedWebhookEvent {
  export interface Data {
    audience: Data.Audience;

    channel: Data.Channel;

    /**
     * A message sent within an experience chat, direct message, or group chat.
     */
    message: Shared.Message;

    reason: string;
  }

  export namespace Data {
    export interface Audience {
      type: 'channel' | 'users';

      user_ids?: Array<string> | null;
    }

    export interface Channel {
      id: string;

      type: 'chat' | 'direct_message' | 'support';

      experience_id?: string | null;
    }
  }
}

export interface ChatReactionCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  data: ChatReactionCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'chat.reaction.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace ChatReactionCreatedWebhookEvent {
  export interface Data {
    audience: Data.Audience;

    channel: Data.Channel;

    /**
     * A message sent within an experience chat, direct message, or group chat.
     */
    message: Shared.Message;

    /**
     * A single reaction left by a user on a feed post, such as a like or emoji.
     */
    reaction: Shared.Reaction;

    reason: string;
  }

  export namespace Data {
    export interface Audience {
      type: 'channel' | 'users';

      user_ids?: Array<string> | null;
    }

    export interface Channel {
      id: string;

      type: 'chat' | 'direct_message' | 'support';

      experience_id?: string | null;
    }
  }
}

export interface PaymentCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A payment represents a completed or attempted charge. Payments track the amount,
   * status, currency, and payment method used.
   */
  data: Shared.Payment;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payment.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface PaymentSucceededWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A payment represents a completed or attempted charge. Payments track the amount,
   * status, currency, and payment method used.
   */
  data: Shared.Payment;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payment.succeeded';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface PaymentFailedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A payment represents a completed or attempted charge. Payments track the amount,
   * status, currency, and payment method used.
   */
  data: Shared.Payment;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payment.failed';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface PaymentPendingWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A payment represents a completed or attempted charge. Payments track the amount,
   * status, currency, and payment method used.
   */
  data: Shared.Payment;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payment.pending';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface DisputeCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A dispute is a chargeback or payment challenge filed against a company,
   * including evidence and response status.
   */
  data: DisputesAPI.Dispute;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'dispute.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface DisputeUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A dispute is a chargeback or payment challenge filed against a company,
   * including evidence and response status.
   */
  data: DisputesAPI.Dispute;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'dispute.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export interface RefundCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A refund represents a full or partial reversal of a payment, including the
   * amount, status, and payment provider.
   */
  data: RefundCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'refund.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace RefundCreatedWebhookEvent {
  /**
   * A refund represents a full or partial reversal of a payment, including the
   * amount, status, and payment provider.
   */
  export interface Data {
    /**
     * The unique identifier for the refund.
     */
    id: string;

    /**
     * The refunded amount as a decimal in the specified currency, such as 10.43 for
     * $10.43 USD.
     */
    amount: number;

    /**
     * The datetime the refund was created.
     */
    created_at: string;

    /**
     * The three-letter ISO currency code for the refunded amount.
     */
    currency: Shared.Currency;

    /**
     * The original payment that this refund was issued against. Null if the payment is
     * no longer available.
     */
    payment: Data.Payment | null;

    /**
     * The payment provider that processed the refund.
     */
    provider: RefundsAPI.PaymentProvider;

    /**
     * The timestamp when the refund was created in the payment provider's system. Null
     * if not available from the provider.
     */
    provider_created_at: string | null;

    /**
     * The status of the refund reference.
     */
    reference_status: RefundsAPI.RefundReferenceStatus | null;

    /**
     * The type of refund reference that was made available by the payment provider.
     */
    reference_type: RefundsAPI.RefundReferenceType | null;

    /**
     * The tracking reference value from the payment processor, used to trace the
     * refund through banking networks. Null if no reference was provided.
     */
    reference_value: string | null;

    /**
     * The current processing status of the refund, such as pending, succeeded, or
     * failed.
     */
    status: RefundsAPI.RefundStatus;
  }

  export namespace Data {
    /**
     * The original payment that this refund was issued against. Null if the payment is
     * no longer available.
     */
    export interface Payment {
      /**
       * The unique identifier for the payment.
       */
      id: string;

      /**
       * The reason why a specific payment was billed
       */
      billing_reason: PaymentsAPI.BillingReasons | null;

      /**
       * Possible card brands that a payment token can have
       */
      card_brand: PaymentsAPI.CardBrands | null;

      /**
       * The last four digits of the card used to make this payment. Null if the payment
       * was not made with a card.
       */
      card_last4: string | null;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The three-letter ISO currency code for this payment (e.g., 'usd', 'eur').
       */
      currency: Shared.Currency;

      /**
       * When an alert came in that this transaction will be disputed
       */
      dispute_alerted_at: string | null;

      /**
       * The member attached to this payment.
       */
      member: Payment.Member | null;

      /**
       * The membership attached to this payment.
       */
      membership: Payment.Membership | null;

      /**
       * The custom metadata stored on this payment. This will be copied over to the
       * checkout configuration for which this payment was made
       */
      metadata: { [key: string]: unknown } | null;

      /**
       * The time at which this payment was successfully collected. Null if the payment
       * has not yet succeeded. As a Unix timestamp.
       */
      paid_at: string | null;

      /**
       * The different types of payment methods that can be used.
       */
      payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

      /**
       * The plan attached to this payment.
       */
      plan: Payment.Plan | null;

      /**
       * The product this payment was made for
       */
      product: Payment.Product | null;

      /**
       * The subtotal to show to the creator (excluding buyer fees).
       */
      subtotal: number | null;

      /**
       * The calculated amount of the sales/VAT tax (if applicable).
       */
      tax_amount: number | null;

      /**
       * The type of tax inclusivity applied to the receipt, for determining whether the
       * tax is included in the final price, or paid on top.
       */
      tax_behavior: PaymentsAPI.ReceiptTaxBehavior | null;

      /**
       * The amount of tax that has been refunded (if applicable).
       */
      tax_refunded_amount: number | null;

      /**
       * The total to show to the creator (excluding buyer fees).
       */
      total: number | null;

      /**
       * The total in USD to show to the creator (excluding buyer fees).
       */
      usd_total: number | null;

      /**
       * The user that made this payment.
       */
      user: Payment.User | null;
    }

    export namespace Payment {
      /**
       * The member attached to this payment.
       */
      export interface Member {
        /**
         * The unique identifier for the company member.
         */
        id: string;

        /**
         * The phone number for the member, if available.
         */
        phone: string | null;
      }

      /**
       * The membership attached to this payment.
       */
      export interface Membership {
        /**
         * The unique identifier for the membership.
         */
        id: string;

        /**
         * The state of the membership.
         */
        status: Shared.MembershipStatus;
      }

      /**
       * The plan attached to this payment.
       */
      export interface Plan {
        /**
         * The unique identifier for the plan.
         */
        id: string;

        /**
         * Custom key-value pairs stored on the plan. Included in webhook payloads for
         * payment and membership events. Max 50 keys, 100 chars per key, 500 chars per
         * string value.
         */
        metadata: { [key: string]: unknown } | null;
      }

      /**
       * The product this payment was made for
       */
      export interface Product {
        /**
         * The unique identifier for the product.
         */
        id: string;

        /**
         * Custom key-value pairs stored on the product and included in payment and
         * membership webhook payloads. Max 50 keys, 100 characters per key, 500 characters
         * per string value.
         */
        metadata: { [key: string]: unknown } | null;
      }

      /**
       * The user that made this payment.
       */
      export interface User {
        /**
         * The unique identifier for the user.
         */
        id: string;

        /**
         * The user's email address. Requires the member:email:read permission to access.
         * Null if not authorized.
         */
        email: string | null;

        /**
         * The user's display name shown on their public profile.
         */
        name: string | null;

        /**
         * The user's unique username shown on their public profile.
         */
        username: string;
      }
    }
  }
}

export interface RefundUpdatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A refund represents a full or partial reversal of a payment, including the
   * amount, status, and payment provider.
   */
  data: RefundUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'refund.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace RefundUpdatedWebhookEvent {
  /**
   * A refund represents a full or partial reversal of a payment, including the
   * amount, status, and payment provider.
   */
  export interface Data {
    /**
     * The unique identifier for the refund.
     */
    id: string;

    /**
     * The refunded amount as a decimal in the specified currency, such as 10.43 for
     * $10.43 USD.
     */
    amount: number;

    /**
     * The datetime the refund was created.
     */
    created_at: string;

    /**
     * The three-letter ISO currency code for the refunded amount.
     */
    currency: Shared.Currency;

    /**
     * The original payment that this refund was issued against. Null if the payment is
     * no longer available.
     */
    payment: Data.Payment | null;

    /**
     * The payment provider that processed the refund.
     */
    provider: RefundsAPI.PaymentProvider;

    /**
     * The timestamp when the refund was created in the payment provider's system. Null
     * if not available from the provider.
     */
    provider_created_at: string | null;

    /**
     * The status of the refund reference.
     */
    reference_status: RefundsAPI.RefundReferenceStatus | null;

    /**
     * The type of refund reference that was made available by the payment provider.
     */
    reference_type: RefundsAPI.RefundReferenceType | null;

    /**
     * The tracking reference value from the payment processor, used to trace the
     * refund through banking networks. Null if no reference was provided.
     */
    reference_value: string | null;

    /**
     * The current processing status of the refund, such as pending, succeeded, or
     * failed.
     */
    status: RefundsAPI.RefundStatus;
  }

  export namespace Data {
    /**
     * The original payment that this refund was issued against. Null if the payment is
     * no longer available.
     */
    export interface Payment {
      /**
       * The unique identifier for the payment.
       */
      id: string;

      /**
       * The reason why a specific payment was billed
       */
      billing_reason: PaymentsAPI.BillingReasons | null;

      /**
       * Possible card brands that a payment token can have
       */
      card_brand: PaymentsAPI.CardBrands | null;

      /**
       * The last four digits of the card used to make this payment. Null if the payment
       * was not made with a card.
       */
      card_last4: string | null;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The three-letter ISO currency code for this payment (e.g., 'usd', 'eur').
       */
      currency: Shared.Currency;

      /**
       * When an alert came in that this transaction will be disputed
       */
      dispute_alerted_at: string | null;

      /**
       * The member attached to this payment.
       */
      member: Payment.Member | null;

      /**
       * The membership attached to this payment.
       */
      membership: Payment.Membership | null;

      /**
       * The custom metadata stored on this payment. This will be copied over to the
       * checkout configuration for which this payment was made
       */
      metadata: { [key: string]: unknown } | null;

      /**
       * The time at which this payment was successfully collected. Null if the payment
       * has not yet succeeded. As a Unix timestamp.
       */
      paid_at: string | null;

      /**
       * The different types of payment methods that can be used.
       */
      payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

      /**
       * The plan attached to this payment.
       */
      plan: Payment.Plan | null;

      /**
       * The product this payment was made for
       */
      product: Payment.Product | null;

      /**
       * The subtotal to show to the creator (excluding buyer fees).
       */
      subtotal: number | null;

      /**
       * The calculated amount of the sales/VAT tax (if applicable).
       */
      tax_amount: number | null;

      /**
       * The type of tax inclusivity applied to the receipt, for determining whether the
       * tax is included in the final price, or paid on top.
       */
      tax_behavior: PaymentsAPI.ReceiptTaxBehavior | null;

      /**
       * The amount of tax that has been refunded (if applicable).
       */
      tax_refunded_amount: number | null;

      /**
       * The total to show to the creator (excluding buyer fees).
       */
      total: number | null;

      /**
       * The total in USD to show to the creator (excluding buyer fees).
       */
      usd_total: number | null;

      /**
       * The user that made this payment.
       */
      user: Payment.User | null;
    }

    export namespace Payment {
      /**
       * The member attached to this payment.
       */
      export interface Member {
        /**
         * The unique identifier for the company member.
         */
        id: string;

        /**
         * The phone number for the member, if available.
         */
        phone: string | null;
      }

      /**
       * The membership attached to this payment.
       */
      export interface Membership {
        /**
         * The unique identifier for the membership.
         */
        id: string;

        /**
         * The state of the membership.
         */
        status: Shared.MembershipStatus;
      }

      /**
       * The plan attached to this payment.
       */
      export interface Plan {
        /**
         * The unique identifier for the plan.
         */
        id: string;

        /**
         * Custom key-value pairs stored on the plan. Included in webhook payloads for
         * payment and membership events. Max 50 keys, 100 chars per key, 500 chars per
         * string value.
         */
        metadata: { [key: string]: unknown } | null;
      }

      /**
       * The product this payment was made for
       */
      export interface Product {
        /**
         * The unique identifier for the product.
         */
        id: string;

        /**
         * Custom key-value pairs stored on the product and included in payment and
         * membership webhook payloads. Max 50 keys, 100 characters per key, 500 characters
         * per string value.
         */
        metadata: { [key: string]: unknown } | null;
      }

      /**
       * The user that made this payment.
       */
      export interface User {
        /**
         * The unique identifier for the user.
         */
        id: string;

        /**
         * The user's email address. Requires the member:email:read permission to access.
         * Null if not authorized.
         */
        email: string | null;

        /**
         * The user's display name shown on their public profile.
         */
        name: string | null;

        /**
         * The user's unique username shown on their public profile.
         */
        username: string;
      }
    }
  }
}

export interface DisputeAlertCreatedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A dispute alert represents an early warning notification from a payment
   * processor about a potential dispute or chargeback.
   */
  data: DisputeAlertCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'dispute_alert.created';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace DisputeAlertCreatedWebhookEvent {
  /**
   * A dispute alert represents an early warning notification from a payment
   * processor about a potential dispute or chargeback.
   */
  export interface Data {
    /**
     * The unique identifier of the dispute alert.
     */
    id: string;

    /**
     * The type of the dispute alert.
     */
    alert_type: DisputeAlertsAPI.DisputeAlertType;

    /**
     * The alerted amount in the specified currency.
     */
    amount: number;

    /**
     * Whether this alert incurs a charge.
     */
    charge_for_alert: boolean;

    /**
     * The time the dispute alert was created.
     */
    created_at: string;

    /**
     * The three-letter ISO currency code for the alerted amount.
     */
    currency: Shared.Currency;

    /**
     * The dispute associated with the dispute alert.
     */
    dispute: Data.Dispute | null;

    /**
     * The payment associated with the dispute alert.
     */
    payment: Data.Payment | null;

    /**
     * The date of the original transaction.
     */
    transaction_date: string | null;
  }

  export namespace Data {
    /**
     * The dispute associated with the dispute alert.
     */
    export interface Dispute {
      /**
       * The unique identifier for the dispute.
       */
      id: string;

      /**
       * The disputed amount in the specified currency, formatted as a decimal.
       */
      amount: number;

      /**
       * The datetime the dispute was created.
       */
      created_at: string | null;

      /**
       * The three-letter ISO currency code for the disputed amount.
       */
      currency: Shared.Currency;

      /**
       * A human-readable reason for the dispute.
       */
      reason: string | null;

      /**
       * The current status of the dispute lifecycle, such as needs_response,
       * under_review, won, or lost.
       */
      status: DisputesAPI.DisputeStatuses;
    }

    /**
     * The payment associated with the dispute alert.
     */
    export interface Payment {
      /**
       * The unique identifier for the payment.
       */
      id: string;

      /**
       * The reason why a specific payment was billed
       */
      billing_reason: PaymentsAPI.BillingReasons | null;

      /**
       * Possible card brands that a payment token can have
       */
      card_brand: PaymentsAPI.CardBrands | null;

      /**
       * The last four digits of the card used to make this payment. Null if the payment
       * was not made with a card.
       */
      card_last4: string | null;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The three-letter ISO currency code for this payment (e.g., 'usd', 'eur').
       */
      currency: Shared.Currency;

      /**
       * When an alert came in that this transaction will be disputed
       */
      dispute_alerted_at: string | null;

      /**
       * The member attached to this payment.
       */
      member: Payment.Member | null;

      /**
       * The membership attached to this payment.
       */
      membership: Payment.Membership | null;

      /**
       * The time at which this payment was successfully collected. Null if the payment
       * has not yet succeeded. As a Unix timestamp.
       */
      paid_at: string | null;

      /**
       * The different types of payment methods that can be used.
       */
      payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

      /**
       * The subtotal to show to the creator (excluding buyer fees).
       */
      subtotal: number | null;

      /**
       * The total to show to the creator (excluding buyer fees).
       */
      total: number | null;

      /**
       * The total in USD to show to the creator (excluding buyer fees).
       */
      usd_total: number | null;

      /**
       * The user that made this payment.
       */
      user: Payment.User | null;
    }

    export namespace Payment {
      /**
       * The member attached to this payment.
       */
      export interface Member {
        /**
         * The unique identifier for the company member.
         */
        id: string;

        /**
         * The phone number for the member, if available.
         */
        phone: string | null;
      }

      /**
       * The membership attached to this payment.
       */
      export interface Membership {
        /**
         * The unique identifier for the membership.
         */
        id: string;

        /**
         * The state of the membership.
         */
        status: Shared.MembershipStatus;
      }

      /**
       * The user that made this payment.
       */
      export interface User {
        /**
         * The unique identifier for the user.
         */
        id: string;

        /**
         * The user's email address. Requires the member:email:read permission to access.
         * Null if not authorized.
         */
        email: string | null;

        /**
         * The user's display name shown on their public profile.
         */
        name: string | null;

        /**
         * The user's unique username shown on their public profile.
         */
        username: string;
      }
    }
  }
}

export interface MembershipCancelAtPeriodEndChangedWebhookEvent {
  /**
   * A unique ID for every single webhook request
   */
  id: string;

  /**
   * The API version for this webhook
   */
  api_version: 'v1';

  /**
   * The dated API version (Api-Version-Date) the payload is serialized to
   */
  api_version_date: string | null;

  /**
   * A membership represents an active relationship between a user and a product. It
   * tracks the user's access, billing status, and renewal schedule.
   */
  data: Shared.Membership;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'membership.cancel_at_period_end_changed';

  /**
   * The account ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export type UnwrapWebhookEvent =
  | InvoiceCreatedWebhookEvent
  | InvoiceMarkedUncollectibleWebhookEvent
  | InvoicePaidWebhookEvent
  | InvoicePastDueWebhookEvent
  | InvoiceVoidedWebhookEvent
  | MembershipActivatedWebhookEvent
  | MembershipDeactivatedWebhookEvent
  | MembershipTrialEndingSoonWebhookEvent
  | EntryCreatedWebhookEvent
  | EntryApprovedWebhookEvent
  | EntryDeniedWebhookEvent
  | EntryDeletedWebhookEvent
  | SetupIntentRequiresActionWebhookEvent
  | SetupIntentSucceededWebhookEvent
  | SetupIntentCanceledWebhookEvent
  | LedgerAccountFundsAvailableWebhookEvent
  | WithdrawalCreatedWebhookEvent
  | WithdrawalUpdatedWebhookEvent
  | CardTransactionCreatedWebhookEvent
  | CardTransactionUpdatedWebhookEvent
  | CardTransactionCompletedWebhookEvent
  | CardTransactionDeclinedWebhookEvent
  | CardTransactionReversedWebhookEvent
  | CourseLessonInteractionCompletedWebhookEvent
  | PayoutMethodCreatedWebhookEvent
  | VerificationSucceededWebhookEvent
  | IdentityProfileUpdatedWebhookEvent
  | PayoutAccountStatusUpdatedWebhookEvent
  | ResolutionCenterCaseCreatedWebhookEvent
  | ResolutionCenterCaseUpdatedWebhookEvent
  | ResolutionCenterCaseDecidedWebhookEvent
  | ProductCreatedWebhookEvent
  | ProductUpdatedWebhookEvent
  | ProductDeletedWebhookEvent
  | ProductPublishedWebhookEvent
  | ProductUnpublishedWebhookEvent
  | ShipmentCreatedWebhookEvent
  | ShipmentUpdatedWebhookEvent
  | MemberCreatedWebhookEvent
  | ChatMessageCreatedWebhookEvent
  | ChatReactionCreatedWebhookEvent
  | PaymentCreatedWebhookEvent
  | PaymentSucceededWebhookEvent
  | PaymentFailedWebhookEvent
  | PaymentPendingWebhookEvent
  | DisputeCreatedWebhookEvent
  | DisputeUpdatedWebhookEvent
  | RefundCreatedWebhookEvent
  | RefundUpdatedWebhookEvent
  | DisputeAlertCreatedWebhookEvent
  | MembershipCancelAtPeriodEndChangedWebhookEvent;

export interface WebhookCreateParams {
  /**
   * The URL to send the webhook to.
   */
  url: string;

  /**
   * The different API versions
   */
  api_version?: APIVersion | null;

  /**
   * The dated API version (Api-Version-Date) the webhook's payloads are pinned to:
   * events serialize exactly like a REST read at this version (the native serializer
   * where the resource has one). Only applies to v1 webhooks. Omit to leave the
   * webhook unpinned on the legacy payload shape.
   */
  api_version_date?: string | null;

  /**
   * Whether or not to send events for child resources. For example, if the webhook
   * is created for a Company, enabling this will only send events from the Company's
   * sub-merchants (child companies).
   */
  child_resource_events?: boolean | null;

  /**
   * Whether or not the webhook is enabled.
   */
  enabled?: boolean | null;

  /**
   * The events to send the webhook for.
   */
  events?: Array<WebhookEvent> | null;

  /**
   * The resource to create the webhook for. By default this will use current company
   */
  resource_id?: string | null;
}

export interface WebhookUpdateParams {
  /**
   * The different API versions
   */
  api_version?: APIVersion | null;

  /**
   * The dated API version (Api-Version-Date) to pin this webhook's payloads to:
   * events serialize exactly like a REST read at this version (the native serializer
   * where the resource has one). Only applies to v1 webhooks. Pass null to unpin,
   * returning to the legacy payload shape.
   */
  api_version_date?: string | null;

  /**
   * Whether or not to send events for child resources.
   */
  child_resource_events?: boolean | null;

  /**
   * Whether or not the webhook is enabled.
   */
  enabled?: boolean | null;

  /**
   * The events to send the webhook for.
   */
  events?: Array<WebhookEvent> | null;

  /**
   * The URL to send the webhook to.
   */
  url?: string | null;
}

export interface WebhookListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list webhooks for.
   */
  company_id: string;

  /**
   * Only return webhooks attached to this app. Omit to list the company's own
   * webhooks.
   */
  app_id?: string | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace Webhooks {
  export {
    type APIVersion as APIVersion,
    type Webhook as Webhook,
    type WebhookEvent as WebhookEvent,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type InvoiceCreatedWebhookEvent as InvoiceCreatedWebhookEvent,
    type InvoiceMarkedUncollectibleWebhookEvent as InvoiceMarkedUncollectibleWebhookEvent,
    type InvoicePaidWebhookEvent as InvoicePaidWebhookEvent,
    type InvoicePastDueWebhookEvent as InvoicePastDueWebhookEvent,
    type InvoiceVoidedWebhookEvent as InvoiceVoidedWebhookEvent,
    type MembershipActivatedWebhookEvent as MembershipActivatedWebhookEvent,
    type MembershipDeactivatedWebhookEvent as MembershipDeactivatedWebhookEvent,
    type MembershipTrialEndingSoonWebhookEvent as MembershipTrialEndingSoonWebhookEvent,
    type EntryCreatedWebhookEvent as EntryCreatedWebhookEvent,
    type EntryApprovedWebhookEvent as EntryApprovedWebhookEvent,
    type EntryDeniedWebhookEvent as EntryDeniedWebhookEvent,
    type EntryDeletedWebhookEvent as EntryDeletedWebhookEvent,
    type SetupIntentRequiresActionWebhookEvent as SetupIntentRequiresActionWebhookEvent,
    type SetupIntentSucceededWebhookEvent as SetupIntentSucceededWebhookEvent,
    type SetupIntentCanceledWebhookEvent as SetupIntentCanceledWebhookEvent,
    type LedgerAccountFundsAvailableWebhookEvent as LedgerAccountFundsAvailableWebhookEvent,
    type WithdrawalCreatedWebhookEvent as WithdrawalCreatedWebhookEvent,
    type WithdrawalUpdatedWebhookEvent as WithdrawalUpdatedWebhookEvent,
    type CardTransactionCreatedWebhookEvent as CardTransactionCreatedWebhookEvent,
    type CardTransactionUpdatedWebhookEvent as CardTransactionUpdatedWebhookEvent,
    type CardTransactionCompletedWebhookEvent as CardTransactionCompletedWebhookEvent,
    type CardTransactionDeclinedWebhookEvent as CardTransactionDeclinedWebhookEvent,
    type CardTransactionReversedWebhookEvent as CardTransactionReversedWebhookEvent,
    type CourseLessonInteractionCompletedWebhookEvent as CourseLessonInteractionCompletedWebhookEvent,
    type PayoutMethodCreatedWebhookEvent as PayoutMethodCreatedWebhookEvent,
    type VerificationSucceededWebhookEvent as VerificationSucceededWebhookEvent,
    type IdentityProfileUpdatedWebhookEvent as IdentityProfileUpdatedWebhookEvent,
    type PayoutAccountStatusUpdatedWebhookEvent as PayoutAccountStatusUpdatedWebhookEvent,
    type ResolutionCenterCaseCreatedWebhookEvent as ResolutionCenterCaseCreatedWebhookEvent,
    type ResolutionCenterCaseUpdatedWebhookEvent as ResolutionCenterCaseUpdatedWebhookEvent,
    type ResolutionCenterCaseDecidedWebhookEvent as ResolutionCenterCaseDecidedWebhookEvent,
    type ProductCreatedWebhookEvent as ProductCreatedWebhookEvent,
    type ProductUpdatedWebhookEvent as ProductUpdatedWebhookEvent,
    type ProductDeletedWebhookEvent as ProductDeletedWebhookEvent,
    type ProductPublishedWebhookEvent as ProductPublishedWebhookEvent,
    type ProductUnpublishedWebhookEvent as ProductUnpublishedWebhookEvent,
    type ShipmentCreatedWebhookEvent as ShipmentCreatedWebhookEvent,
    type ShipmentUpdatedWebhookEvent as ShipmentUpdatedWebhookEvent,
    type MemberCreatedWebhookEvent as MemberCreatedWebhookEvent,
    type ChatMessageCreatedWebhookEvent as ChatMessageCreatedWebhookEvent,
    type ChatReactionCreatedWebhookEvent as ChatReactionCreatedWebhookEvent,
    type PaymentCreatedWebhookEvent as PaymentCreatedWebhookEvent,
    type PaymentSucceededWebhookEvent as PaymentSucceededWebhookEvent,
    type PaymentFailedWebhookEvent as PaymentFailedWebhookEvent,
    type PaymentPendingWebhookEvent as PaymentPendingWebhookEvent,
    type DisputeCreatedWebhookEvent as DisputeCreatedWebhookEvent,
    type DisputeUpdatedWebhookEvent as DisputeUpdatedWebhookEvent,
    type RefundCreatedWebhookEvent as RefundCreatedWebhookEvent,
    type RefundUpdatedWebhookEvent as RefundUpdatedWebhookEvent,
    type DisputeAlertCreatedWebhookEvent as DisputeAlertCreatedWebhookEvent,
    type MembershipCancelAtPeriodEndChangedWebhookEvent as MembershipCancelAtPeriodEndChangedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
    type WebhookListResponsesCursorPage as WebhookListResponsesCursorPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
