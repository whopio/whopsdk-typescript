// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DisputesAPI from './disputes';
import * as PaymentsAPI from './payments';
import * as PayoutMethodsAPI from './payout-methods';
import * as RefundsAPI from './refunds';
import * as SetupIntentsAPI from './setup-intents';
import * as Shared from './shared';
import * as VerificationsAPI from './verifications';
import * as WithdrawalsAPI from './withdrawals';
import { Webhook as Webhook_ } from 'standardwebhooks';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   * Retrieves a webhook by ID
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
   * Lists webhooks for a company
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
   * The API version for this webhook
   */
  api_version: APIVersion;

  /**
   * Whether or not to send events for child resources. For example, if the webhook
   * is created for a Company, enabling this will only send events from the Company's
   * sub-merchants (child companies).
   */
  child_resource_events: boolean;

  /**
   * The datetime the webhook was created.
   */
  created_at: string;

  /**
   * Whether or not this webhook is turned on or not
   */
  enabled: boolean;

  /**
   * The number of events this webhooks is configured to receive
   */
  events: Array<WebhookEvent>;

  /**
   * The resource ID
   */
  resource_id: string;

  /**
   * The list of events that can be tested with this webhook
   */
  testable_events: Array<WebhookEvent>;

  /**
   * The URL the webhook events will be sent to
   */
  url: string;
}

/**
 * The different event types available
 */
export type WebhookEvent =
  | 'invoice.created'
  | 'invoice.paid'
  | 'invoice.past_due'
  | 'invoice.voided'
  | 'membership.activated'
  | 'membership.deactivated'
  | 'entry.created'
  | 'entry.approved'
  | 'entry.denied'
  | 'entry.deleted'
  | 'setup_intent.requires_action'
  | 'setup_intent.succeeded'
  | 'setup_intent.canceled'
  | 'withdrawal.created'
  | 'withdrawal.updated'
  | 'course_lesson_interaction.completed'
  | 'payout_method.created'
  | 'verification.succeeded'
  | 'payment.created'
  | 'payment.succeeded'
  | 'payment.failed'
  | 'payment.pending'
  | 'dispute.created'
  | 'dispute.updated'
  | 'refund.created'
  | 'refund.updated'
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
   * The API version for this webhook
   */
  api_version: APIVersion;

  /**
   * Whether or not to send events for child resources. For example, if the webhook
   * is created for a Company, enabling this will only send events from the Company's
   * sub-merchants (child companies).
   */
  child_resource_events: boolean;

  /**
   * The datetime the webhook was created.
   */
  created_at: string;

  /**
   * Whether or not this webhook is turned on or not
   */
  enabled: boolean;

  /**
   * The number of events this webhooks is configured to receive
   */
  events: Array<WebhookEvent>;

  /**
   * The resource ID
   */
  resource_id: string;

  /**
   * The list of events that can be tested with this webhook
   */
  testable_events: Array<WebhookEvent>;

  /**
   * The URL the webhook events will be sent to
   */
  url: string;

  /**
   * A unique secret key that will be sent with each webhook event
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
   * The API version for this webhook
   */
  api_version: APIVersion;

  /**
   * Whether or not to send events for child resources. For example, if the webhook
   * is created for a Company, enabling this will only send events from the Company's
   * sub-merchants (child companies).
   */
  child_resource_events: boolean;

  /**
   * The datetime the webhook was created.
   */
  created_at: string;

  /**
   * Whether or not this webhook is turned on or not
   */
  enabled: boolean;

  /**
   * The number of events this webhooks is configured to receive
   */
  events: Array<WebhookEvent>;

  /**
   * The URL the webhook events will be sent to
   */
  url: string;
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
   * A statement that defines an amount due by a customer.
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
   * The company ID that this webhook event is associated with
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
   * A statement that defines an amount due by a customer.
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
   * The company ID that this webhook event is associated with
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
   * A statement that defines an amount due by a customer.
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
   * The company ID that this webhook event is associated with
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
   * A statement that defines an amount due by a customer.
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * A setup intent allows a user to save a payment method without making a purchase.
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
   * The company ID that this webhook event is associated with
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
   * A setup intent allows a user to save a payment method without making a purchase.
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
   * The company ID that this webhook event is associated with
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
   * A setup intent allows a user to save a payment method without making a purchase.
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
   * The company ID that this webhook event is associated with
   */
  company_id?: string | null;
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
   * A withdrawal represents a request to transfer funds from a company's ledger
   * account to an external payout method.
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
   * The company ID that this webhook event is associated with
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
   * A withdrawal represents a request to transfer funds from a company's ledger
   * account to an external payout method.
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
   * The company ID that this webhook event is associated with
   */
  company_id?: string | null;
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
   * A lesson interaction tracking user progress in courses
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
   * The company ID that this webhook event is associated with
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
   * An object representing an user's setup payout destination.
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
   * The company ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace PayoutMethodCreatedWebhookEvent {
  /**
   * An object representing an user's setup payout destination.
   */
  export interface Data {
    /**
     * The unique identifier for the payout token.
     */
    id: string;

    /**
     * A reference to identify the payout destination, such as the last 4 digits of an
     * account number or an email address.
     */
    account_reference: string | null;

    /**
     * The company associated with the payout token
     */
    company: Data.Company | null;

    /**
     * The datetime the payout token was created.
     */
    created_at: string;

    /**
     * The currency code of the payout destination. This is the currency that payouts
     * will be made in for this token.
     */
    currency: string;

    /**
     * The payout destination associated with the payout token
     */
    destination: Data.Destination | null;

    /**
     * The name of the bank or financial institution.
     */
    institution_name: string | null;

    /**
     * Whether this payout token is the default for the payout account
     */
    is_default: boolean;

    /**
     * An optional nickname for the payout token to help the user identify it. This is
     * not used by the provider and is only for the user's reference.
     */
    nickname: string | null;
  }

  export namespace Data {
    /**
     * The company associated with the payout token
     */
    export interface Company {
      /**
       * The unique identifier for the company.
       */
      id: string;
    }

    /**
     * The payout destination associated with the payout token
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
   * An object representing an identity verification session
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
   * The company ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export namespace VerificationSucceededWebhookEvent {
  /**
   * An object representing an identity verification session
   */
  export interface Data {
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
   * A payment represents a completed or attempted charge for a membership. Payments
   * track the amount, status, currency, and payment method used.
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
   * The company ID that this webhook event is associated with
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
   * A payment represents a completed or attempted charge for a membership. Payments
   * track the amount, status, currency, and payment method used.
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
   * The company ID that this webhook event is associated with
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
   * A payment represents a completed or attempted charge for a membership. Payments
   * track the amount, status, currency, and payment method used.
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
   * The company ID that this webhook event is associated with
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
   * A payment represents a completed or attempted charge for a membership. Payments
   * track the amount, status, currency, and payment method used.
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
   * The company ID that this webhook event is associated with
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
     * The amount of the refund. Provided as a number in the specified currency. Eg:
     * 10.43 for $10.43 USD.
     */
    amount: number;

    /**
     * The datetime the refund was created.
     */
    created_at: string;

    /**
     * The currency of the refund.
     */
    currency: Shared.Currency;

    /**
     * The payment associated with the refund.
     */
    payment: Data.Payment | null;

    /**
     * The provider of the refund.
     */
    provider: RefundsAPI.PaymentProvider;

    /**
     * The time the refund was created by the provider.
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
     * The value of the reference.
     */
    reference_value: string | null;

    /**
     * The status of the refund.
     */
    status: RefundsAPI.RefundStatus;
  }

  export namespace Data {
    /**
     * The payment associated with the refund.
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
       * The last 4 digits of the card used to make the payment.
       */
      card_last4: string | null;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The available currencies on the platform
       */
      currency: Shared.Currency | null;

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
       * The datetime the payment was paid
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
         * The email of the user
         */
        email: string | null;

        /**
         * The name of the user from their Whop account.
         */
        name: string | null;

        /**
         * The username of the user from their Whop account.
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
   * The company ID that this webhook event is associated with
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
     * The amount of the refund. Provided as a number in the specified currency. Eg:
     * 10.43 for $10.43 USD.
     */
    amount: number;

    /**
     * The datetime the refund was created.
     */
    created_at: string;

    /**
     * The currency of the refund.
     */
    currency: Shared.Currency;

    /**
     * The payment associated with the refund.
     */
    payment: Data.Payment | null;

    /**
     * The provider of the refund.
     */
    provider: RefundsAPI.PaymentProvider;

    /**
     * The time the refund was created by the provider.
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
     * The value of the reference.
     */
    reference_value: string | null;

    /**
     * The status of the refund.
     */
    status: RefundsAPI.RefundStatus;
  }

  export namespace Data {
    /**
     * The payment associated with the refund.
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
       * The last 4 digits of the card used to make the payment.
       */
      card_last4: string | null;

      /**
       * The datetime the payment was created.
       */
      created_at: string;

      /**
       * The available currencies on the platform
       */
      currency: Shared.Currency | null;

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
       * The datetime the payment was paid
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
         * The email of the user
         */
        email: string | null;

        /**
         * The name of the user from their Whop account.
         */
        name: string | null;

        /**
         * The username of the user from their Whop account.
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
   * The company ID that this webhook event is associated with
   */
  company_id?: string | null;
}

export type UnwrapWebhookEvent =
  | InvoiceCreatedWebhookEvent
  | InvoicePaidWebhookEvent
  | InvoicePastDueWebhookEvent
  | InvoiceVoidedWebhookEvent
  | MembershipActivatedWebhookEvent
  | MembershipDeactivatedWebhookEvent
  | EntryCreatedWebhookEvent
  | EntryApprovedWebhookEvent
  | EntryDeniedWebhookEvent
  | EntryDeletedWebhookEvent
  | SetupIntentRequiresActionWebhookEvent
  | SetupIntentSucceededWebhookEvent
  | SetupIntentCanceledWebhookEvent
  | WithdrawalCreatedWebhookEvent
  | WithdrawalUpdatedWebhookEvent
  | CourseLessonInteractionCompletedWebhookEvent
  | PayoutMethodCreatedWebhookEvent
  | VerificationSucceededWebhookEvent
  | PaymentCreatedWebhookEvent
  | PaymentSucceededWebhookEvent
  | PaymentFailedWebhookEvent
  | PaymentPendingWebhookEvent
  | DisputeCreatedWebhookEvent
  | DisputeUpdatedWebhookEvent
  | RefundCreatedWebhookEvent
  | RefundUpdatedWebhookEvent
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
   * The ID of the company to list webhooks for
   */
  company_id: string;

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
    type InvoicePaidWebhookEvent as InvoicePaidWebhookEvent,
    type InvoicePastDueWebhookEvent as InvoicePastDueWebhookEvent,
    type InvoiceVoidedWebhookEvent as InvoiceVoidedWebhookEvent,
    type MembershipActivatedWebhookEvent as MembershipActivatedWebhookEvent,
    type MembershipDeactivatedWebhookEvent as MembershipDeactivatedWebhookEvent,
    type EntryCreatedWebhookEvent as EntryCreatedWebhookEvent,
    type EntryApprovedWebhookEvent as EntryApprovedWebhookEvent,
    type EntryDeniedWebhookEvent as EntryDeniedWebhookEvent,
    type EntryDeletedWebhookEvent as EntryDeletedWebhookEvent,
    type SetupIntentRequiresActionWebhookEvent as SetupIntentRequiresActionWebhookEvent,
    type SetupIntentSucceededWebhookEvent as SetupIntentSucceededWebhookEvent,
    type SetupIntentCanceledWebhookEvent as SetupIntentCanceledWebhookEvent,
    type WithdrawalCreatedWebhookEvent as WithdrawalCreatedWebhookEvent,
    type WithdrawalUpdatedWebhookEvent as WithdrawalUpdatedWebhookEvent,
    type CourseLessonInteractionCompletedWebhookEvent as CourseLessonInteractionCompletedWebhookEvent,
    type PayoutMethodCreatedWebhookEvent as PayoutMethodCreatedWebhookEvent,
    type VerificationSucceededWebhookEvent as VerificationSucceededWebhookEvent,
    type PaymentCreatedWebhookEvent as PaymentCreatedWebhookEvent,
    type PaymentSucceededWebhookEvent as PaymentSucceededWebhookEvent,
    type PaymentFailedWebhookEvent as PaymentFailedWebhookEvent,
    type PaymentPendingWebhookEvent as PaymentPendingWebhookEvent,
    type DisputeCreatedWebhookEvent as DisputeCreatedWebhookEvent,
    type DisputeUpdatedWebhookEvent as DisputeUpdatedWebhookEvent,
    type RefundCreatedWebhookEvent as RefundCreatedWebhookEvent,
    type RefundUpdatedWebhookEvent as RefundUpdatedWebhookEvent,
    type MembershipCancelAtPeriodEndChangedWebhookEvent as MembershipCancelAtPeriodEndChangedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
    type WebhookListResponsesCursorPage as WebhookListResponsesCursorPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
