// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AdCampaignsAPI from './ad-campaigns';
import * as DisputesAPI from './disputes';
import * as PaymentsAPI from './payments';
import * as PayoutAccountsAPI from './payout-accounts';
import * as RefundsAPI from './refunds';
import * as SetupIntentsAPI from './setup-intents';
import * as Shared from './shared';
import * as VerificationsAPI from './verifications';
import { Webhook as Webhook_ } from 'standardwebhooks';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a webhook endpoint that receives event notifications via HTTP POST.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   url: 'https://example.com/hooks',
   * });
   * ```
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/webhooks', {
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
   * Retrieves the details of an existing webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: WebhookRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Webhook> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates a webhook endpoint's URL, subscribed events, pinned payload version, or
   * enabled state.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update('id');
   * ```
   */
  update(id: string, params: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/webhooks/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of webhook endpoints configured for an account, ordered
   * by most recently created.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhookListResponse of client.webhooks.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: WebhookListParams,
    options?: RequestOptions,
  ): PagePromise<WebhookListResponsesCursorPage, WebhookListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params;
    return this._client.getAPIList('/webhooks', CursorPage<WebhookListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently deletes a webhook endpoint. Returns `true` on success, matching the
   * legacy proxy response.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete('id');
   * ```
   */
  delete(
    id: string,
    params: WebhookDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookDeleteResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.delete(path`/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
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

export interface Webhook {
  /**
   * Webhook ID, prefixed `hook_`.
   */
  id: string;

  /**
   * The API version used to format payloads sent to this webhook endpoint.
   */
  api_version: 'v1' | 'v2' | 'v5';

  /**
   * The dated API version (Api-Version-Date) that v1 payloads for this endpoint are
   * pinned to: events serialize exactly like a REST read at this version (the native
   * serializer where the resource has one). Null when unpinned — legacy (v2/v5)
   * webhooks, and v1 webhooks on the legacy payload shape.
   */
  api_version_date: string | null;

  /**
   * Whether events are sent for child resources. For example, if the webhook is on
   * an account, enabling this sends events only from its connected accounts.
   */
  child_resource_events: boolean;

  /**
   * Number of consecutive deliveries whose first attempt to this endpoint failed
   * since it last accepted one. Later retries of the same delivery do not increment
   * it. Resets to `0` when a delivery succeeds or the webhook is re-enabled.
   */
  consecutive_failures: number;

  /**
   * When the webhook was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * When Whop automatically disabled this webhook, as an ISO 8601 timestamp. `null`
   * unless the webhook was disabled by Whop; a webhook you disabled yourself has
   * `enabled: false` and a `null` `disabled_at`.
   */
  disabled_at: string | null;

  /**
   * Why Whop disabled this webhook. `delivery_failures` means every delivery failed
   * for 3 days straight. `null` when `disabled_at` is `null`.
   */
  disabled_reason: 'delivery_failures' | null;

  /**
   * Whether this webhook endpoint is currently active and receiving events.
   */
  enabled: boolean;

  events: Array<
    | 'account.updated'
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
    | 'swap.completed'
    | 'deposit.succeeded'
    | 'transfer.created'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'withdrawal.created'
    | 'withdrawal.updated'
    | 'withdrawal.reversed'
    | 'payout.created'
    | 'payout.updated'
    | 'payout.reversed'
    | 'card_transaction.created'
    | 'card_transaction.updated'
    | 'card_transaction.completed'
    | 'card_transaction.declined'
    | 'card_transaction.reversed'
    | 'card.created'
    | 'card.updated'
    | 'card.frozen'
    | 'card.canceled'
    | 'card_application.created'
    | 'card_application.updated'
    | 'card_application.approved'
    | 'card_application.denied'
    | 'course_lesson_interaction.completed'
    | 'payout_method.created'
    | 'verification.succeeded'
    | 'identity_profile.approved'
    | 'identity_profile.rejected'
    | 'identity_profile.needs_action'
    | 'identity_profile.updated'
    | 'payout_account.status_updated'
    | 'payment.authorized'
    | 'payment.canceled'
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
    | 'ad_campaign.payment_failed'
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
    | 'membership.cancel_at_period_end_changed'
    | 'membership.went_valid'
    | 'membership.went_invalid'
    | 'membership.metadata_updated'
    | 'resolution.created'
    | 'resolution.updated'
    | 'resolution.decided'
    | 'payment.affiliate_reward_created'
    | 'membership.experience_claimed'
    | 'app_membership.went_valid'
    | 'app_membership.went_invalid'
    | 'app_payment.created'
    | 'app_payment.succeeded'
    | 'app_payment.failed'
    | 'app_payment.pending'
    | 'app_membership.cancel_at_period_end_changed'
  >;

  /**
   * When the current failure streak began, as an ISO 8601 timestamp. Unlike
   * `last_failure_at`, this is set on the streak's first failed attempt, so it shows
   * an endpoint that is failing right now. `null` when the endpoint is healthy.
   */
  failing_since: string | null;

  /**
   * When a delivery to this endpoint most recently failed after exhausting retries,
   * as an ISO 8601 timestamp. `null` if no delivery has ever failed.
   */
  last_failure_at: string | null;

  /**
   * ID of the resource (account or app) this webhook is attached to.
   */
  resource_id: string;

  testable_events: Array<
    | 'account.updated'
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
    | 'swap.completed'
    | 'deposit.succeeded'
    | 'transfer.created'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'withdrawal.created'
    | 'withdrawal.updated'
    | 'withdrawal.reversed'
    | 'payout.created'
    | 'payout.updated'
    | 'payout.reversed'
    | 'card_transaction.created'
    | 'card_transaction.updated'
    | 'card_transaction.completed'
    | 'card_transaction.declined'
    | 'card_transaction.reversed'
    | 'card.created'
    | 'card.updated'
    | 'card.frozen'
    | 'card.canceled'
    | 'card_application.created'
    | 'card_application.updated'
    | 'card_application.approved'
    | 'card_application.denied'
    | 'course_lesson_interaction.completed'
    | 'payout_method.created'
    | 'verification.succeeded'
    | 'identity_profile.approved'
    | 'identity_profile.rejected'
    | 'identity_profile.needs_action'
    | 'identity_profile.updated'
    | 'payout_account.status_updated'
    | 'payment.authorized'
    | 'payment.canceled'
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
    | 'ad_campaign.payment_failed'
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
    | 'membership.cancel_at_period_end_changed'
    | 'membership.went_valid'
    | 'membership.went_invalid'
    | 'membership.metadata_updated'
    | 'resolution.created'
    | 'resolution.updated'
    | 'resolution.decided'
    | 'payment.affiliate_reward_created'
    | 'membership.experience_claimed'
    | 'app_membership.went_valid'
    | 'app_membership.went_invalid'
    | 'app_payment.created'
    | 'app_payment.succeeded'
    | 'app_payment.failed'
    | 'app_payment.pending'
    | 'app_membership.cancel_at_period_end_changed'
  >;

  /**
   * Destination URL where webhook payloads are delivered via HTTP POST.
   */
  url: string;

  /**
   * Secret key used to sign webhook payloads for verification. Include this in your
   * HMAC validation logic. Returned on the create response and to interactive
   * dashboard sessions; `null` for API-key and OAuth callers on later reads.
   */
  webhook_secret: string | null;
}

/**
 * The different event types available
 */
export type WebhookEvent =
  | 'account.updated'
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
  | 'swap.completed'
  | 'deposit.succeeded'
  | 'transfer.created'
  | 'transfer.completed'
  | 'transfer.failed'
  | 'withdrawal.created'
  | 'withdrawal.updated'
  | 'withdrawal.reversed'
  | 'payout.created'
  | 'payout.updated'
  | 'payout.reversed'
  | 'card_transaction.created'
  | 'card_transaction.updated'
  | 'card_transaction.completed'
  | 'card_transaction.declined'
  | 'card_transaction.reversed'
  | 'card.created'
  | 'card.updated'
  | 'card.frozen'
  | 'card.canceled'
  | 'card_application.created'
  | 'card_application.updated'
  | 'card_application.approved'
  | 'card_application.denied'
  | 'course_lesson_interaction.completed'
  | 'payout_method.created'
  | 'verification.succeeded'
  | 'identity_profile.approved'
  | 'identity_profile.rejected'
  | 'identity_profile.needs_action'
  | 'identity_profile.updated'
  | 'payout_account.status_updated'
  | 'payment.authorized'
  | 'payment.canceled'
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
  | 'ad_campaign.payment_failed'
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

export interface WebhookListResponse {
  /**
   * Webhook ID, prefixed `hook_`.
   */
  id: string;

  /**
   * The API version used to format payloads sent to this webhook endpoint.
   */
  api_version: 'v1' | 'v2' | 'v5';

  /**
   * The dated API version (Api-Version-Date) that v1 payloads for this endpoint are
   * pinned to: events serialize exactly like a REST read at this version (the native
   * serializer where the resource has one). Null when unpinned — legacy (v2/v5)
   * webhooks, and v1 webhooks on the legacy payload shape.
   */
  api_version_date: string | null;

  /**
   * Whether events are sent for child resources. For example, if the webhook is on
   * an account, enabling this sends events only from its connected accounts.
   */
  child_resource_events: boolean;

  /**
   * Number of consecutive deliveries whose first attempt to this endpoint failed
   * since it last accepted one. Later retries of the same delivery do not increment
   * it. Resets to `0` when a delivery succeeds or the webhook is re-enabled.
   */
  consecutive_failures: number;

  /**
   * When the webhook was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * When Whop automatically disabled this webhook, as an ISO 8601 timestamp. `null`
   * unless the webhook was disabled by Whop; a webhook you disabled yourself has
   * `enabled: false` and a `null` `disabled_at`.
   */
  disabled_at: string | null;

  /**
   * Why Whop disabled this webhook. `delivery_failures` means every delivery failed
   * for 3 days straight. `null` when `disabled_at` is `null`.
   */
  disabled_reason: 'delivery_failures' | null;

  /**
   * Whether this webhook endpoint is currently active and receiving events.
   */
  enabled: boolean;

  events: Array<
    | 'account.updated'
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
    | 'swap.completed'
    | 'deposit.succeeded'
    | 'transfer.created'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'withdrawal.created'
    | 'withdrawal.updated'
    | 'withdrawal.reversed'
    | 'payout.created'
    | 'payout.updated'
    | 'payout.reversed'
    | 'card_transaction.created'
    | 'card_transaction.updated'
    | 'card_transaction.completed'
    | 'card_transaction.declined'
    | 'card_transaction.reversed'
    | 'card.created'
    | 'card.updated'
    | 'card.frozen'
    | 'card.canceled'
    | 'card_application.created'
    | 'card_application.updated'
    | 'card_application.approved'
    | 'card_application.denied'
    | 'course_lesson_interaction.completed'
    | 'payout_method.created'
    | 'verification.succeeded'
    | 'identity_profile.approved'
    | 'identity_profile.rejected'
    | 'identity_profile.needs_action'
    | 'identity_profile.updated'
    | 'payout_account.status_updated'
    | 'payment.authorized'
    | 'payment.canceled'
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
    | 'ad_campaign.payment_failed'
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
    | 'membership.cancel_at_period_end_changed'
    | 'membership.went_valid'
    | 'membership.went_invalid'
    | 'membership.metadata_updated'
    | 'resolution.created'
    | 'resolution.updated'
    | 'resolution.decided'
    | 'payment.affiliate_reward_created'
    | 'membership.experience_claimed'
    | 'app_membership.went_valid'
    | 'app_membership.went_invalid'
    | 'app_payment.created'
    | 'app_payment.succeeded'
    | 'app_payment.failed'
    | 'app_payment.pending'
    | 'app_membership.cancel_at_period_end_changed'
  >;

  /**
   * When the current failure streak began, as an ISO 8601 timestamp. Unlike
   * `last_failure_at`, this is set on the streak's first failed attempt, so it shows
   * an endpoint that is failing right now. `null` when the endpoint is healthy.
   */
  failing_since: string | null;

  /**
   * When a delivery to this endpoint most recently failed after exhausting retries,
   * as an ISO 8601 timestamp. `null` if no delivery has ever failed.
   */
  last_failure_at: string | null;

  /**
   * ID of the resource (account or app) this webhook is attached to.
   */
  resource_id: string;

  /**
   * Destination URL where webhook payloads are delivered via HTTP POST.
   */
  url: string;

  /**
   * Secret key used to sign webhook payloads for verification. Include this in your
   * HMAC validation logic. Returned on the create response and to interactive
   * dashboard sessions; `null` for API-key and OAuth callers on later reads.
   */
  webhook_secret: string | null;
}

export interface WebhookDeleteResponse {
  /**
   * The ID of the deleted resource.
   */
  id: string;

  /**
   * Always `true`: the resource was deleted.
   */
  deleted: boolean;
}

export interface AccountUpdatedWebhookEvent {
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

  data: AccountUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'account.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace AccountUpdatedWebhookEvent {
  export interface Data {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    balances: Array<Data.Balance>;

    /**
     * Account banner image URL.
     */
    banner_image_url: string | null;

    /**
     * Account business address used to calculate tax, with `line1`, `line2`, `city`,
     * `state`, `postal_code`, and `country`. `null` when no address is set.
     */
    business_address: unknown | null;

    /**
     * The account's legal business name used with its tax address.
     */
    business_name: string | null;

    /**
     * High-level business category for the account. See the
     * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
     * for valid values.
     */
    business_type:
      | 'education_program'
      | 'coaching'
      | 'software'
      | 'paid_group'
      | 'newsletter'
      | 'agency'
      | 'physical_products'
      | 'brick_and_mortar'
      | 'events'
      | 'coaching_and_courses'
      | 'other'
      | 'services'
      | 'gig_economy'
      | 'marketplace'
      | 'telehealth'
      | 'class_action_settlement'
      | 'physical_product'
      | 'saas'
      | 'course'
      | 'community'
      | null;

    /**
     * Whether pending funds may be transferred from this platform account to its
     * connected accounts.
     */
    can_transfer_pending_balance_to_children: boolean;

    /**
     * Payment rails enabled for this account, each `active`, `inactive`, or `pending`
     * (onboarding or review in progress). Computed only on `retrieve` and `me` for
     * callers with `company:balance:read` scope; `null` otherwise.
     */
    capabilities: Data.Capabilities | null;

    /**
     * Whop Cards application details for the account. Computed only on `retrieve` and
     * `me` for callers with `company:balance:read` scope; `null` otherwise, or when
     * the account has no card application.
     */
    cards: Data.Cards | null;

    /**
     * Whether checkout shows a VAT/tax ID field for buyers to optionally enter. Does
     * not require a VAT ID to purchase.
     */
    collect_vat_id: boolean;

    /**
     * Company formation state for the account, managed through
     * [Form Company](/api-reference/beta/accounts/form-company). A `draft` `status`
     * until the formation checkout is paid, then filing progress with downloadable
     * documents and signatures awaiting action. Empty when the formation state is
     * temporarily unavailable.
     */
    company_formation: Data.CompanyFormation;

    /**
     * Country where the account is located.
     */
    country: string | null;

    /**
     * When the account was created, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * Account promotional description.
     */
    description: string | null;

    /**
     * Account owner email address.
     */
    email: string | null;

    /**
     * The account's end-user license agreement document, or `null` if they have not
     * published one.
     */
    eula: Data.Eula | null;

    home_preferences: Array<'hide_member_count' | 'hide_members_card'>;

    /**
     * Account industry group. See the
     * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
     * for valid values.
     */
    industry_group:
      | 'academic_and_test_prep'
      | 'accessories'
      | 'agriculture_and_farming'
      | 'ai_and_automation_agencies'
      | 'ai_and_automation_software'
      | 'arts_and_crafts'
      | 'automotive'
      | 'b2b_and_professional_marketplaces'
      | 'baby_and_kids'
      | 'bars_and_breweries'
      | 'beauty_and_personal_care'
      | 'beauty_and_wellness'
      | 'business_and_entrepreneurship'
      | 'business_and_money_groups'
      | 'cafes_and_quick_service'
      | 'career_and_professional'
      | 'charity_and_cause_events'
      | 'class_action_settlement'
      | 'clothing_and_apparel'
      | 'communication_and_messaging_software'
      | 'community_and_education_software'
      | 'conference_and_expo_events'
      | 'consulting'
      | 'content_and_clipping_agencies'
      | 'creative_and_content_creation'
      | 'creative_and_content_groups'
      | 'creative_and_education'
      | 'creative_gigs'
      | 'creative_services'
      | 'customer_support_agencies'
      | 'dating_and_relationships'
      | 'delivery_and_logistics'
      | 'dental_and_vision'
      | 'dermatology_and_skin'
      | 'design_and_creative_agencies'
      | 'developer_and_technical_tools'
      | 'development_agencies'
      | 'digital_and_education_marketplaces'
      | 'digital_goods_and_accounts'
      | 'e_commerce_software'
      | 'education_and_childcare'
      | 'educational_training_events'
      | 'electronics_and_gadgets'
      | 'entertainment_and_leisure'
      | 'family_and_community_events'
      | 'finance_and_investing'
      | 'fitness_and_athletics'
      | 'fitness_and_health_groups'
      | 'fitness_and_recreation'
      | 'fitness_equipment_and_gear'
      | 'food_and_beverages'
      | 'food_and_hospitality_marketplaces'
      | 'funeral_and_death_care'
      | 'gaming_and_entertainment_software'
      | 'gaming_groups'
      | 'genetic_and_specialized'
      | 'government_and_public'
      | 'health_and_wellness'
      | 'health_and_wellness_services'
      | 'healthcare'
      | 'healthcare_and_wellness_software'
      | 'hobbies_and_lifestyle'
      | 'hobby_and_interest_groups'
      | 'home_and_living'
      | 'home_and_trade_services'
      | 'home_and_trade_storefronts'
      | 'home_improvement_and_tools'
      | 'home_services_gigs'
      | 'hospitality_and_lodging'
      | 'industrial_and_manufacturing'
      | 'industry_specific_software'
      | 'language_and_communication'
      | 'legal_and_compliance'
      | 'lifestyle_and_culture'
      | 'lifestyle_and_personal_growth'
      | 'lifestyle_and_personal_growth_groups'
      | 'lifestyle_and_wellness_events'
      | 'logistics_and_transportation_services'
      | 'marketing_agencies'
      | 'marketing_and_advertising'
      | 'marketing_and_sales_software'
      | 'media_and_publishing_companies'
      | 'mental_health_and_behavioral'
      | 'miscellaneous'
      | 'music_and_performing_arts'
      | 'news_and_politics'
      | 'nonprofit_and_charity'
      | 'office_and_business_supplies'
      | 'outdoor_and_sports'
      | 'performance_and_show_events'
      | 'personal_development'
      | 'personal_finance'
      | 'personal_services'
      | 'pet_services'
      | 'pets_and_animals'
      | 'primary_and_general_care'
      | 'product_marketplaces'
      | 'productivity_and_business_ops'
      | 'professional_gigs'
      | 'professional_services'
      | 'professional_services_storefront'
      | 'publishing_and_info_products'
      | 'real_estate'
      | 'real_estate_software'
      | 'recruiting_and_staffing'
      | 'rehabilitation_and_therapy'
      | 'religion_and_faith'
      | 'rental_marketplaces'
      | 'restaurants'
      | 'retail'
      | 'sales_agencies'
      | 'sales_and_revenue'
      | 'security_and_investigations'
      | 'security_and_privacy_software'
      | 'service_marketplaces'
      | 'sleep_and_chronic_conditions'
      | 'social_and_networking_events'
      | 'social_entertainment_events'
      | 'specialized_gigs'
      | 'specialty_medical_care'
      | 'spirituality_and_mindfulness'
      | 'spirituality_and_personal_growth'
      | 'sports_and_fitness_events'
      | 'sports_betting_and_gambling'
      | 'sports_betting_groups'
      | 'supplements_and_nutrition'
      | 'sustainability_and_eco_products'
      | 'task_and_errands'
      | 'tech_and_ai'
      | 'tech_and_dev_groups'
      | 'tech_and_development'
      | 'trading_and_finance_software'
      | 'trading_and_investing'
      | 'trading_and_investing_groups'
      | 'transportation'
      | 'veterinary'
      | 'video_games_and_esports'
      | 'weight_and_metabolic_health'
      | 'wellness_and_alternative'
      | 'womens_and_mens_health'
      | null;

    /**
     * Specific industry vertical for the account. See the
     * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
     * for valid values.
     */
    industry_type:
      | 'trading'
      | 'sports_betting'
      | 'reselling'
      | 'fitness'
      | 'amazon_fba'
      | 'real_estate'
      | 'kindle_book_publishing'
      | 'dating'
      | 'agencies'
      | 'health_and_wellness'
      | 'social_media'
      | 'sales'
      | 'business'
      | 'ecommerce'
      | 'video_games'
      | 'home_services'
      | 'ai'
      | 'public_speaking'
      | 'personal_finance'
      | 'careers'
      | 'travel'
      | 'clipping'
      | 'spirituality'
      | 'vas'
      | 'personal_development'
      | 'software'
      | 'other'
      | 'marketing_agency'
      | 'sales_agency'
      | 'ai_agency'
      | 'design_agency'
      | 'coaching_agency'
      | 'development_agency'
      | 'recruiting_agency'
      | 'customer_support_agency'
      | 'clipping_agency'
      | 'clothing'
      | 'supplements'
      | 'beauty_and_personal_care'
      | 'fitness_gear'
      | 'accessories'
      | 'home_goods'
      | 'electronics_and_gadgets'
      | 'food_and_beverages'
      | 'gym'
      | 'restaurant'
      | 'retail_store'
      | 'coffee_shop'
      | 'salon_spa'
      | 'medical_dentist_office'
      | 'hotel_lodging'
      | 'auto_repair_shop'
      | 'masterminds'
      | 'webinars'
      | 'bootcamps'
      | 'convention'
      | 'concerts'
      | 'meetups'
      | 'parties'
      | 'forex_trading'
      | 'stock_trading'
      | 'options_trading'
      | 'crypto_trading'
      | 'futures_trading'
      | 'day_trading'
      | 'swing_trading'
      | 'algorithmic_trading'
      | 'prop_firm_trading'
      | 'value_investing'
      | 'real_estate_investing'
      | 'alternative_investments'
      | 'penny_stock_trading'
      | 'dividend_investing'
      | 'index_fund_investing'
      | 'gold_precious_metals'
      | 'venture_capital_education'
      | 'private_equity_education'
      | 'technical_analysis'
      | 'forex_scalping'
      | 'ict_smc_trading'
      | 'personalized_investment_advice'
      | 'forex_signals_group'
      | 'stock_signals_group'
      | 'crypto_signals_group'
      | 'options_alerts_group'
      | 'futures_signals_group'
      | 'trading_education_group'
      | 'investing_community'
      | 'prediction_markets_group'
      | 'nft_alpha_group'
      | 'penny_stock_group'
      | 'dividend_investing_group'
      | 'real_estate_investing_group'
      | 'prop_firm_group'
      | 'forex_trading_bot'
      | 'stock_trading_platform'
      | 'crypto_trading_bot'
      | 'futures_trading_bot'
      | 'options_flow_tool'
      | 'portfolio_tracker'
      | 'financial_modeling_software'
      | 'accounting_software'
      | 'invoicing_software'
      | 'tax_software'
      | 'risk_management_software'
      | 'prop_trading_platform'
      | 'backtesting_software'
      | 'trading_indicators'
      | 'market_data_feed'
      | 'stock_research_tool'
      | 'banking_software'
      | 'lending_platform'
      | 'insurance_software'
      | 'bnpl_service'
      | 'check_cashing_service'
      | 'cloud_mining_schemes'
      | 'consumer_lending'
      | 'credit_repair_service'
      | 'crypto_exchange_brokerage'
      | 'crypto_trading_tools_software'
      | 'debt_collection_agency'
      | 'debt_relief_settlement'
      | 'escrow_service'
      | 'foreign_exchange_service'
      | 'non_custodial_wallet_tools'
      | 'payment_facilitation'
      | 'prediction_market_exchange'
      | 'stablecoin_issuance'
      | 'token_sales_ico'
      | 'tokenized_rwa'
      | 'yield_staking_products'
      | 'sports_betting_picks'
      | 'fantasy_sports'
      | 'horse_racing'
      | 'poker_coaching'
      | 'esports_betting'
      | 'sports_analytics'
      | 'nfl_betting'
      | 'nba_betting'
      | 'mlb_betting'
      | 'soccer_betting'
      | 'mma_ufc_betting'
      | 'sports_picks_group'
      | 'dfs_group'
      | 'horse_racing_group'
      | 'esports_picks_group'
      | 'nfl_picks_group'
      | 'nba_picks_group'
      | 'soccer_picks_group'
      | 'mlb_picks_group'
      | 'mma_picks_group'
      | 'prop_bets_group'
      | 'fantasy_sports_free_to_play'
      | 'licensed_gambling_operations'
      | 'unlicensed_gambling'
      | 'bodybuilding_coaching'
      | 'strength_training'
      | 'weight_loss_coaching'
      | 'athletic_performance'
      | 'yoga_instruction'
      | 'martial_arts_instruction'
      | 'running_coaching'
      | 'calisthenics'
      | 'flexibility_mobility'
      | 'nutrition_coaching'
      | 'swimming_coaching'
      | 'cycling_coaching'
      | 'boxing_coaching'
      | 'mma_coaching'
      | 'jiu_jitsu_coaching'
      | 'wrestling_coaching'
      | 'gymnastics_coaching'
      | 'pilates_instruction'
      | 'sports_nutrition'
      | 'body_recomposition'
      | 'golf_coaching'
      | 'tennis_coaching'
      | 'basketball_training'
      | 'soccer_training'
      | 'racket_sports_coaching'
      | 'fitness_accountability'
      | 'nutrition_community'
      | 'weight_loss_group'
      | 'bodybuilding_community'
      | 'running_community'
      | 'martial_arts_community'
      | 'mental_health_group'
      | 'biohacking_community'
      | 'addiction_support_group'
      | 'yoga_community'
      | 'crossfit_community'
      | 'longevity_community'
      | 'womens_fitness_community'
      | 'postpartum_fitness_group'
      | 'chronic_illness_support'
      | 'skincare_community'
      | 'mental_health_coaching'
      | 'life_coaching'
      | 'biohacking'
      | 'holistic_health'
      | 'addiction_recovery_coaching'
      | 'breathwork'
      | 'meditation_mindfulness'
      | 'gut_health_coaching'
      | 'longevity_coaching'
      | 'womens_health_coaching'
      | 'mens_health_coaching'
      | 'fertility_wellness'
      | 'stress_management'
      | 'grief_coaching'
      | 'trauma_recovery_coaching'
      | 'adhd_coaching'
      | 'biomarker_health_coaching'
      | 'telehealth_platform'
      | 'ehr_software'
      | 'practice_management'
      | 'mental_health_app'
      | 'fitness_app'
      | 'nutrition_tracking_app'
      | 'wellness_app'
      | 'patient_engagement'
      | 'medical_billing_software'
      | 'pharmacy_management'
      | 'lab_management'
      | 'clinical_trial_software'
      | 'dental_software'
      | 'veterinary_software'
      | 'health_data_platform'
      | 'fitness_newsletter'
      | 'mental_health_newsletter'
      | 'longevity_newsletter'
      | 'medical_newsletter'
      | 'biohacking_newsletter'
      | 'womens_health_newsletter'
      | 'mens_health_newsletter'
      | 'pharma_biotech_newsletter'
      | 'ecommerce_education'
      | 'amazon_fba_coaching'
      | 'dropshipping_coaching'
      | 'print_on_demand_coaching'
      | 'retail_arbitrage'
      | 'wholesale_coaching'
      | 'startup_coaching'
      | 'business_strategy'
      | 'agency_building'
      | 'smma_coaching'
      | 'consulting_business'
      | 'saas_entrepreneurship'
      | 'local_business_coaching'
      | 'cleaning_business_coaching'
      | 'trucking_business_coaching'
      | 'vending_machine_business'
      | 'atm_business_coaching'
      | 'car_wash_business'
      | 'airbnb_business_coaching'
      | 'private_label_coaching'
      | 'etsy_coaching'
      | 'merch_business_coaching'
      | 'licensing_business'
      | 'business_acquisition'
      | 'women_entrepreneurship'
      | 'affiliate_marketing_education'
      | 'coaching_business_coaching'
      | 'ecommerce_community'
      | 'agency_community'
      | 'saas_community'
      | 'saas_marketing_community'
      | 'real_estate_community'
      | 'sales_community'
      | 'affiliate_community'
      | 'reselling_community'
      | 'amazon_seller_community'
      | 'dropshipping_community'
      | 'freelancer_community'
      | 'startup_founder_community'
      | 'ceo_executive_community'
      | 'women_business_community'
      | 'marketing_community'
      | 'ai_business_community'
      | 'content_business_community'
      | 'local_business_community'
      | 'private_equity_community'
      | 'wholesaling_community'
      | 'coaching_business_community'
      | 'make_money_online_community'
      | 'startup_newsletter'
      | 'ecommerce_newsletter'
      | 'marketing_newsletter'
      | 'sales_newsletter'
      | 'small_business_newsletter'
      | 'leadership_newsletter'
      | 'agency_newsletter'
      | 'saas_newsletter'
      | 'hr_people_newsletter'
      | 'legal_business_newsletter'
      | 'real_estate_business_newsletter'
      | 'solopreneur_newsletter'
      | 'high_ticket_sales'
      | 'b2b_sales_coaching'
      | 'door_to_door_sales'
      | 'sales_funnel_coaching'
      | 'appointment_setting_coaching'
      | 'insurance_sales_coaching'
      | 'car_sales_coaching'
      | 'retail_sales_coaching'
      | 'solar_sales_coaching'
      | 'lead_generation_agency'
      | 'cold_email_agency'
      | 'cold_calling_agency'
      | 'sales_outsourcing'
      | 'crm_implementation'
      | 'appointment_setting_agency'
      | 'sales_training_agency'
      | 'revenue_operations_agency'
      | 'inbound_teleservices'
      | 'outbound_telemarketing'
      | 'facebook_ads'
      | 'google_ads'
      | 'tiktok_marketing'
      | 'youtube_marketing'
      | 'instagram_growth'
      | 'seo_coaching'
      | 'email_marketing_coaching'
      | 'copywriting_coaching'
      | 'affiliate_marketing'
      | 'local_seo'
      | 'ai_marketing'
      | 'webinar_marketing'
      | 'event_marketing'
      | 'saas_marketing_coaching'
      | 'digital_marketing'
      | 'smma'
      | 'performance_marketing_agency'
      | 'seo_agency'
      | 'content_marketing_agency'
      | 'email_marketing_agency'
      | 'influencer_marketing_agency'
      | 'pr_agency'
      | 'branding_agency'
      | 'video_marketing_agency'
      | 'amazon_marketing_agency'
      | 'podcast_marketing_agency'
      | 'tiktok_agency'
      | 'linkedin_agency'
      | 'local_marketing_agency'
      | 'dental_marketing_agency'
      | 'real_estate_marketing_agency'
      | 'restaurant_marketing_agency'
      | 'ecommerce_marketing_agency'
      | 'b2b_marketing_agency'
      | 'growth_marketing_agency'
      | 'affiliate_management_agency'
      | 'conversion_optimization_agency'
      | 'event_marketing_agency'
      | 'click_farm_service'
      | 'data_scraping_service'
      | 'lead_list_sales'
      | 'social_media_bot_farm'
      | 'crm_software'
      | 'email_marketing_software'
      | 'sms_marketing_software'
      | 'seo_tool'
      | 'landing_page_builder'
      | 'ad_management_tool'
      | 'affiliate_tracking'
      | 'review_management'
      | 'analytics_dashboard'
      | 'lead_gen_software'
      | 'link_in_bio_tool'
      | 'influencer_platform'
      | 'webinar_platform'
      | 'ab_testing_tool'
      | 'chatbot_marketing'
      | 'video_sales_tool'
      | 'proposal_software'
      | 'competitive_intelligence'
      | 'social_listening_tool'
      | 'whatsapp_marketing_tool'
      | 'standalone_tipping'
      | 'video_editing_education'
      | 'photography_coaching'
      | 'music_production'
      | 'ui_ux_design_education'
      | 'clipping_education'
      | 'ugc_creation'
      | '3d_modeling_education'
      | 'dj_education'
      | 'youtube_automation'
      | 'blog_monetization'
      | 'wedding_photography_education'
      | 'calligraphy_lettering'
      | 'illustration_education'
      | 'fashion_design_education'
      | 'interior_design_education'
      | 'influencer_education'
      | 'ai_content_creator_education'
      | 'ai_nsfw_content_generation_education'
      | 'web_design_agency'
      | 'graphic_design_agency'
      | 'ui_ux_agency'
      | 'motion_design_agency'
      | 'product_design_agency'
      | 'logo_design_agency'
      | 'presentation_design_agency'
      | '3d_visualization_agency'
      | 'fashion_design_agency'
      | 'video_clipping_agency'
      | 'video_production_agency'
      | 'ugc_agency'
      | 'content_writing_agency'
      | 'translation_agency'
      | 'social_media_management'
      | 'ghostwriting_agency'
      | 'podcast_editing_agency'
      | 'thumbnail_design_agency'
      | 'scriptwriting_agency'
      | 'seo_content_agency'
      | 'technical_writing_agency'
      | 'photography_service'
      | 'videography_service'
      | 'music_production_service'
      | 'voice_over_service'
      | 'event_photography'
      | 'drone_services'
      | 'commercial_photography'
      | 'portrait_photography_service'
      | 'real_estate_photography'
      | 'food_photography_service'
      | 'live_event_production'
      | 'podcast_production_service'
      | 'freelance_design_gig'
      | 'freelance_writing_gig'
      | 'freelance_dev_gig'
      | 'music_performance_gig'
      | 'event_staffing_gig'
      | 'model_talent_gig'
      | 'photography_gig'
      | 'videography_gig'
      | 'voiceover_gig'
      | 'illustration_gig'
      | 'social_media_gig'
      | 'dj_gig'
      | 'face_painting_gig'
      | 'clipping_gig'
      | 'content_creator_community'
      | 'video_editing_community'
      | 'music_producer_community'
      | 'photography_community'
      | 'writing_community'
      | 'design_community'
      | 'youtube_creator_community'
      | 'tiktok_creator_community'
      | 'podcast_community'
      | 'filmmaker_community'
      | 'clipping_community'
      | 'youtube_automation_community'
      | 'pirated_digital_content'
      | 'web_development_education'
      | 'ai_ml_education'
      | 'data_science_education'
      | 'cybersecurity_education'
      | 'cloud_computing_education'
      | 'blockchain_education'
      | 'no_code_education'
      | 'automation_education'
      | 'game_development_education'
      | 'prompt_engineering'
      | 'python_programming'
      | 'javascript_programming'
      | 'react_development'
      | 'database_engineering'
      | 'aws_certification'
      | 'data_engineering'
      | 'robotics_education'
      | 'vr_ar_development'
      | 'linux_sysadmin'
      | 'wordpress_development'
      | 'ai_agent_building'
      | 'web_development_agency'
      | 'mobile_app_agency'
      | 'saas_development_agency'
      | 'ecommerce_development'
      | 'blockchain_development_agency'
      | 'game_development_agency'
      | 'devops_agency'
      | 'ai_development_agency'
      | 'wordpress_agency'
      | 'shopify_agency'
      | 'api_integration_agency'
      | 'cybersecurity_agency'
      | 'data_engineering_agency'
      | 'vr_ar_development_agency'
      | 'hacking_tools_malware'
      | 'stalkerware_monitoring'
      | 'developer_community'
      | 'ai_community'
      | 'cybersecurity_community'
      | 'no_code_community'
      | 'indie_hacker_community'
      | 'devops_community'
      | 'data_science_community'
      | 'product_community'
      | 'open_source_community'
      | 'api_management'
      | 'hosting_platform'
      | 'database_tool'
      | 'devops_tool'
      | 'monitoring_tool'
      | 'testing_tool'
      | 'code_editor'
      | 'no_code_builder'
      | 'cdn_platform'
      | 'error_tracking'
      | 'documentation_tool'
      | 'webhook_tool'
      | '3d_weapon_files'
      | 'background_check_services'
      | 'document_falsification'
      | 'fake_id_services'
      | 'fake_reference_services'
      | 'real_estate_wholesaling'
      | 'house_flipping'
      | 'property_development'
      | 'rental_property'
      | 'airbnb_str'
      | 'commercial_real_estate'
      | 'land_investing'
      | 'section_8_housing'
      | 'mobile_home_investing'
      | 'multifamily_investing'
      | 'self_storage_investing'
      | 'property_management_education'
      | 'vacation_rental_management'
      | 'real_estate_crm'
      | 'property_management_software'
      | 'deal_analysis_tool'
      | 'mls_search_tool'
      | 'virtual_tour_software'
      | 'real_estate_marketing_software'
      | 'construction_management'
      | 'home_valuation_tool'
      | 'credit_repair_education'
      | 'budgeting_coaching'
      | 'tax_strategy_education'
      | 'wealth_building'
      | 'student_loan_strategy'
      | 'credit_card_optimization'
      | 'career_coaching'
      | 'executive_coaching'
      | 'management_coaching'
      | 'tech_career_coaching'
      | 'medical_career_coaching'
      | 'trade_skills_education'
      | 'va_training'
      | 'bookkeeping_education'
      | 'data_career_coaching'
      | 'cybersecurity_career'
      | 'consulting_career'
      | 'investment_banking_career'
      | 'law_career_coaching'
      | 'nursing_career_coaching'
      | 'teaching_career_coaching'
      | 'personal_branding_career'
      | 'mens_dating_coaching'
      | 'womens_dating_coaching'
      | 'relationship_coaching'
      | 'marriage_coaching'
      | 'communication_coaching'
      | 'masculinity_coaching'
      | 'femininity_coaching'
      | 'breakup_recovery'
      | 'manifestation_coaching'
      | 'astrology_coaching'
      | 'energy_healing'
      | 'spiritual_coaching'
      | 'faith_based_coaching'
      | 'psychic_development'
      | 'numerology_coaching'
      | 'chakra_healing'
      | 'shamanic_healing'
      | 'biblical_coaching'
      | 'islamic_coaching'
      | 'productivity_coaching'
      | 'public_speaking_coaching'
      | 'mindset_coaching'
      | 'stoicism_philosophy'
      | 'mens_self_improvement'
      | 'womens_self_improvement'
      | 'leadership_development'
      | 'anger_management'
      | 'neurolinguistic_programming'
      | 'appearance_and_grooming_coaching'
      | 'amazon_kdp'
      | 'self_publishing'
      | 'audiobook_publishing'
      | 'course_creation'
      | 'digital_product_creation'
      | 'ghostwriting_business'
      | 'template_creation'
      | 'ai_book_publishing'
      | 'language_learning'
      | 'tutoring'
      | 'college_admissions_coaching'
      | 'cpa_exam_prep'
      | 'bar_exam_prep'
      | 'real_estate_exam_prep'
      | 'medical_board_prep'
      | 'pmp_certification_prep'
      | 'aws_certification_prep'
      | 'comptia_certification'
      | 'ap_exam_prep'
      | 'graduate_school_prep'
      | 'scholarship_coaching'
      | 'homeschool_education'
      | 'stem_education'
      | 'financial_certification'
      | 'coding_bootcamp_prep'
      | 'cooking_culinary'
      | 'travel_coaching'
      | 'parenting_coaching'
      | 'pet_training'
      | 'gardening_education'
      | 'diy_crafts'
      | 'survival_prepping'
      | 'baking_pastry'
      | 'wine_sommelier'
      | 'beer_brewing'
      | 'mixology_bartending'
      | 'woodworking'
      | 'pottery_ceramics'
      | 'knitting_crocheting'
      | 'jewelry_making'
      | 'aquarium_fishkeeping'
      | 'bird_watching'
      | 'astronomy_education'
      | 'magic_illusion'
      | 'car_restoration'
      | 'motorcycle_riding'
      | 'sailing_boating'
      | 'scuba_diving'
      | 'rock_climbing'
      | 'skiing_snowboarding'
      | 'surfing_education'
      | 'homesteading'
      | 'tiny_house_living'
      | 'van_life'
      | 'fashion_styling'
      | 'floral_design'
      | 'travel_planning_service'
      | 'collectibles_coaching'
      | 'car_enthusiast_community'
      | 'sneakerhead_community'
      | 'watch_collector_community'
      | 'wine_enthusiast_community'
      | 'cigar_community'
      | 'cooking_community'
      | 'gardening_community'
      | 'fishing_community'
      | 'hunting_community'
      | 'diy_maker_community'
      | 'golf_community'
      | 'collectibles_community'
      | 'sweepstakes_raffles'
      | 'event_ticket_community'
      | 'esports_coaching'
      | 'game_specific_coaching'
      | 'gaming_community'
      | 'game_account_selling'
      | 'unauthorized_ingame_currency'
      | 'legal_education'
      | 'music_theory'
      | 'music_business'
      | 'acting_coaching'
      | 'dance_instruction'
      | 'voice_acting'
      | 'english_coaching'
      | 'spanish_coaching'
      | 'mandarin_coaching'
      | 'french_coaching'
      | 'german_coaching'
      | 'japanese_coaching'
      | 'korean_coaching'
      | 'arabic_coaching'
      | 'sign_language_education'
      | 'accent_reduction'
      | 'business_english'
      | 'ai_chatbot_agency'
      | 'ai_automation_agency'
      | 'ai_consulting'
      | 'workflow_automation_agency'
      | 'data_analytics_agency'
      | 'ai_voice_agent_agency'
      | 'ai_content_agency'
      | 'machine_learning_agency'
      | 'computer_vision_agency'
      | 'tech_recruiting_agency'
      | 'executive_recruiting'
      | 'staffing_agency'
      | 'remote_staffing'
      | 'healthcare_recruiting'
      | 'va_placement_agency'
      | 'sales_recruiting'
      | 'creative_recruiting'
      | 'finance_recruiting'
      | 'legal_recruiting'
      | 'construction_staffing'
      | 'hospitality_staffing'
      | 'customer_support_outsourcing'
      | 'live_chat_agency'
      | 'technical_support_agency'
      | 'call_center_agency'
      | 'multilingual_support_agency'
      | 'community_management_agency'
      | 'management_consulting'
      | 'financial_consulting'
      | 'hr_consulting'
      | 'operations_consulting'
      | 'it_consulting'
      | 'sustainability_consulting'
      | 'legal_consulting'
      | 'compliance_consulting'
      | 'supply_chain_consulting'
      | 'change_management_consulting'
      | 'digital_transformation_consulting'
      | 'healthcare_consulting'
      | 'real_estate_consulting'
      | 'franchise_consulting'
      | 'export_trade_consulting'
      | 'nonprofit_consulting'
      | 'education_consulting'
      | 'cannabis_consulting'
      | 'restaurant_consulting'
      | 'm_and_a_consulting'
      | 'pricing_strategy_consulting'
      | 'brand_strategy_consulting'
      | 'saas_marketing_consulting'
      | 'done_for_you_services'
      | 'prop_firm_passing_service'
      | 'trading_account_management'
      | 'done_for_you_trading'
      | 'accounting_bookkeeping'
      | 'tax_preparation'
      | 'legal_services'
      | 'notary_services'
      | 'insurance_brokerage'
      | 'financial_planning_service'
      | 'real_estate_services'
      | 'property_management'
      | 'mortgage_brokerage'
      | 'immigration_services'
      | 'patent_trademark_services'
      | 'business_formation_services'
      | 'shell_company_formation'
      | 'payroll_services'
      | 'audit_services'
      | 'forensic_accounting'
      | 'actuarial_services'
      | 'appraisal_services'
      | 'mediation_arbitration'
      | 'bail_bond_services'
      | 'crowdfunding_platform'
      | 'essay_mill_paper_mill'
      | 'government_service_facilitation'
      | 'immigration_services_unlicensed'
      | 'licensed_legal_services'
      | 'personalized_tax_services'
      | 'private_investigation'
      | 'repossession_services'
      | 'unlicensed_legal_services'
      | 'record_label'
      | 'book_publishing_house'
      | 'news_media_outlet'
      | 'radio_broadcasting'
      | 'tv_production_company'
      | 'film_studio'
      | 'magazine_publisher'
      | 'music_licensing_agency'
      | 'talent_management_agency'
      | 'advertising_network'
      | 'ad_tech_platform'
      | 'cleaning_service'
      | 'landscaping_service'
      | 'plumbing_service'
      | 'electrical_service'
      | 'hvac_service'
      | 'roofing_service'
      | 'painting_service'
      | 'moving_service'
      | 'handyman_service'
      | 'pest_control'
      | 'pool_service'
      | 'solar_installation'
      | 'home_renovation'
      | 'pressure_washing'
      | 'junk_removal'
      | 'garage_door_service'
      | 'fencing_service'
      | 'concrete_masonry'
      | 'tree_service'
      | 'window_cleaning'
      | 'gutter_service'
      | 'flooring_service'
      | 'cabinet_countertop'
      | 'home_inspection'
      | 'septic_service'
      | 'waterproofing_service'
      | 'insulation_service'
      | 'chimney_service'
      | 'locksmith_service'
      | 'glass_window_service'
      | 'epoxy_coating'
      | 'private_security_guard_service'
      | 'armored_car_transport'
      | 'executive_protection_bodyguard'
      | 'event_security_service'
      | 'alarm_system_installation'
      | 'cctv_installation'
      | 'private_investigation_agency'
      | 'background_check_provider'
      | 'locksmith_commercial'
      | 'bounty_hunter_bail_enforcement'
      | 'personal_styling'
      | 'personal_chef'
      | 'personal_assistant_service'
      | 'tutoring_service'
      | 'pet_services'
      | 'wedding_planning'
      | 'concierge_service'
      | 'personal_training_service'
      | 'nanny_service'
      | 'elder_care_service'
      | 'errand_service'
      | 'life_organization'
      | 'relocation_service'
      | 'adult_dating_services'
      | 'escort_services'
      | 'hotel_accommodation_bookings'
      | 'mail_order_spouse'
      | 'psychic_fortune_telling'
      | 'timeshare_sales'
      | 'freight_brokerage'
      | 'courier_service'
      | 'warehousing_service'
      | 'last_mile_delivery'
      | 'auto_transport'
      | 'international_shipping'
      | 'cold_chain_logistics'
      | 'commercial_airline_tickets'
      | 'cruise_line_bookings'
      | 'contract_manufacturing'
      | 'cnc_machining_service'
      | '3d_printing_service_commercial'
      | 'plastic_injection_molding'
      | 'metal_fabrication'
      | 'pcba_assembly'
      | 'chemical_manufacturing'
      | 'textile_manufacturing'
      | 'food_processing_facility'
      | 'packaging_manufacturing'
      | 'industrial_automation_integrator'
      | 'mining_and_extraction'
      | 'oil_and_gas_services'
      | 'renewable_energy_generation'
      | 'waste_management_recycling'
      | 'hazardous_waste_disposal'
      | 'aerospace_defense_contracting'
      | 'personal_training_studio'
      | 'nutrition_consulting'
      | 'mental_health_counseling'
      | 'physical_therapy_service'
      | 'occupational_therapy_service'
      | 'speech_therapy_service'
      | 'chiropractic_service'
      | 'acupuncture_service'
      | 'massage_therapy_service'
      | 'midwifery_doula'
      | 'lactation_consulting'
      | 'dietitian_service'
      | 'addiction_recovery_services'
      | 'dtc_lab_testing'
      | 'iv_therapy_infusion'
      | 'medspa_aesthetic_services'
      | 'prescription_delivery_services'
      | 'registered_dietitian_services'
      | 'unlicensed_therapy_counseling'
      | 'streetwear'
      | 'athleisure'
      | 'luxury_fashion'
      | 'kids_clothing'
      | 'custom_apparel'
      | 'workwear'
      | 'swimwear'
      | 'lingerie_intimates'
      | 'vintage_clothing'
      | 'plus_size_fashion'
      | 'maternity_clothing'
      | 'sleepwear_loungewear'
      | 'denim_brand'
      | 'outerwear_jackets'
      | 'socks_hosiery'
      | 'costumes_cosplay'
      | 'scrubs_medical_apparel'
      | 'dance_performance_wear'
      | 'hunting_camo_apparel'
      | 'casual_everyday_clothing'
      | 'protein_supplements'
      | 'vitamins_minerals'
      | 'pre_workout'
      | 'nootropics'
      | 'herbal_supplements'
      | 'weight_management_supplements'
      | 'gut_health'
      | 'cbd_products'
      | 'mushroom_supplements'
      | 'collagen_supplements'
      | 'testosterone_boosters'
      | 'sleep_supplements'
      | 'immune_support'
      | 'joint_bone_health'
      | 'greens_powder'
      | 'creatine_supplements'
      | 'electrolyte_hydration'
      | 'prenatal_supplements'
      | 'kids_supplements'
      | 'pet_supplements'
      | 'ayurvedic_supplements'
      | 'keto_supplements'
      | 'cannabis_thc_products'
      | 'cbd_hemp_products_compliant'
      | 'delta8_thc_products'
      | 'dietary_supplements'
      | 'drug_precursor_chemicals'
      | 'illegal_drugs'
      | 'kratom_kava_products'
      | 'medical_treatment_claims_product'
      | 'nutraceutical_products'
      | 'otc_medication_sales'
      | 'performance_enhancing_drugs'
      | 'research_chemicals_dangerous'
      | 'research_peptides'
      | 'sexual_enhancement_products'
      | 'tobacco_products'
      | 'unlicensed_rx_sales'
      | 'skincare'
      | 'haircare'
      | 'cosmetics_makeup'
      | 'mens_grooming'
      | 'fragrance'
      | 'oral_care'
      | 'sunscreen_spf'
      | 'hair_growth_products'
      | 'body_care'
      | 'deodorant'
      | 'lip_care'
      | 'acne_treatment'
      | 'men_skincare'
      | 'baby_skincare'
      | 'tattoo_aftercare'
      | 'intimate_care'
      | 'home_gym_equipment'
      | 'yoga_equipment'
      | 'combat_sports_gear'
      | 'outdoor_fitness_gear'
      | 'wearable_fitness'
      | 'recovery_equipment'
      | 'weightlifting_equipment'
      | 'cardio_equipment'
      | 'gymnastics_equipment'
      | 'swimming_gear'
      | 'jump_rope_equipment'
      | 'grip_strength_tools'
      | 'sauna_cold_plunge'
      | 'posture_correctors'
      | 'jewelry'
      | 'sunglasses_eyewear'
      | 'bags_wallets'
      | 'hats_headwear'
      | 'phone_accessories'
      | 'travel_accessories'
      | 'scarves_wraps'
      | 'belts'
      | 'hair_accessories'
      | 'tech_accessories'
      | 'keychains_charms'
      | 'custom_engraved_accessories'
      | 'cannabis_accessories_non_drug'
      | 'drug_paraphernalia'
      | 'high_value_goods_over_500'
      | 'precious_metals_stones'
      | 'replica_counterfeit_goods'
      | 'home_decor'
      | 'candles_scents'
      | 'kitchenware'
      | 'bedding_linens'
      | 'smart_home'
      | 'cleaning_products'
      | 'outdoor_furniture'
      | 'organization_storage'
      | 'wall_art_prints'
      | 'rugs_carpets'
      | 'lighting_fixtures'
      | 'planters_garden_decor'
      | 'bathroom_accessories'
      | 'luxury_home_goods'
      | 'seasonal_holiday_decor'
      | 'pet_home_products'
      | 'home_fragrance_diffusers'
      | 'hazardous_chemicals_b2c'
      | 'pre_orders_delayed_delivery'
      | 'audio_equipment'
      | 'camera_equipment'
      | 'gaming_hardware'
      | 'drones_robotics'
      | 'ev_accessories'
      | 'charging_power'
      | 'smart_wearables'
      | 'home_security_devices'
      | '3d_printers'
      | 'projectors_displays'
      | 'streaming_devices'
      | 'vr_headsets'
      | 'e_readers'
      | 'portable_tech'
      | 'hardware_wallets'
      | 'regulated_medical_devices'
      | 'signal_jamming_devices'
      | 'spy_cameras_hidden_recording'
      | 'specialty_coffee_tea'
      | 'health_food'
      | 'snacks_treats'
      | 'sauces_condiments'
      | 'alcohol_spirits'
      | 'meal_kits'
      | 'baked_goods'
      | 'beverages'
      | 'pet_food_treats'
      | 'protein_bars_snacks'
      | 'jerky_meat_snacks'
      | 'chocolate_confections'
      | 'honey_sweeteners'
      | 'olive_oil_vinegar'
      | 'hot_sauce'
      | 'dried_fruit_nuts'
      | 'baby_food'
      | 'plant_based_food'
      | 'gluten_free_food'
      | 'keto_food_products'
      | 'subscription_food_box'
      | 'kombucha_fermented'
      | 'alcohol_sales'
      | 'baby_products'
      | 'kids_toys'
      | 'kids_educational'
      | 'baby_clothing_accessories'
      | 'nursery_decor'
      | 'kids_outdoor_play'
      | 'kids_books'
      | 'baby_safety_products'
      | 'kids_arts_crafts'
      | 'camping_hiking'
      | 'fishing_gear'
      | 'hunting_gear'
      | 'cycling_gear'
      | 'water_sports_gear'
      | 'golf_equipment'
      | 'snow_sports_gear'
      | 'climbing_gear'
      | 'archery_equipment'
      | 'skateboarding_gear'
      | 'pickleball_equipment'
      | 'tennis_equipment'
      | 'equestrian_gear'
      | 'tactical_gear'
      | 'overlanding_gear'
      | 'explosives_fireworks'
      | 'firearms_sales'
      | 'self_defense_products'
      | 'weapon_components'
      | 'craft_kits'
      | 'sewing_textiles'
      | 'stationery'
      | 'scrapbooking_supplies'
      | 'beading_jewelry_supplies'
      | 'pottery_supplies'
      | 'printmaking_supplies'
      | 'car_accessories'
      | 'detailing_products'
      | 'motorcycle_gear'
      | 'truck_accessories'
      | 'off_road_parts'
      | 'car_audio_electronics'
      | 'performance_parts'
      | 'car_care_products'
      | 'ev_charging_accessories'
      | 'auto_repair_service'
      | 'auto_body_shop'
      | 'car_dealership'
      | 'car_wash'
      | 'tire_shop'
      | 'oil_change_shop'
      | 'auto_parts_store'
      | 'motorcycle_shop'
      | 'ev_charging_station'
      | 'transmission_shop'
      | 'muffler_exhaust_shop'
      | 'auto_glass_shop'
      | 'auto_upholstery_shop'
      | 'car_audio_shop'
      | 'smog_emissions_shop'
      | 'truck_repair_shop'
      | 'rv_repair_shop'
      | 'boat_repair_shop'
      | 'used_car_lot'
      | 'auto_auction'
      | 'dog_products'
      | 'cat_products'
      | 'aquarium_supplies'
      | 'bird_supplies'
      | 'reptile_supplies'
      | 'horse_supplies'
      | 'pet_apparel'
      | 'pet_tech'
      | 'pet_grooming_products'
      | 'hand_tools'
      | 'power_tools_and_accessories'
      | 'hardware_and_fasteners'
      | 'workshop_equipment_and_storage'
      | 'safety_and_work_gear'
      | 'painting_and_building_supplies'
      | 'office_supplies'
      | 'desk_accessories'
      | 'printing_supplies'
      | 'shipping_packaging'
      | 'reusable_products'
      | 'solar_powered_products'
      | 'christian_books_bibles'
      | 'christian_apparel'
      | 'christian_jewelry'
      | 'christian_home_decor'
      | 'jewish_judaica'
      | 'jewish_books_torah'
      | 'jewish_apparel'
      | 'islamic_books_quran'
      | 'islamic_apparel'
      | 'islamic_prayer_goods'
      | 'hindu_puja_supplies'
      | 'hindu_books_texts'
      | 'buddhist_meditation_goods'
      | 'buddhist_books_texts'
      | 'sikh_religious_goods'
      | 'other_religious_products'
      | 'handmade_goods_marketplace'
      | 'vintage_resale_marketplace'
      | 'electronics_marketplace'
      | 'auto_parts_marketplace'
      | 'luxury_goods_marketplace'
      | 'collectibles_marketplace'
      | 'wholesale_marketplace'
      | 'local_goods_marketplace'
      | 'sneaker_marketplace'
      | 'book_marketplace'
      | 'furniture_marketplace'
      | 'musical_instrument_marketplace'
      | 'art_marketplace'
      | 'ticket_marketplace'
      | 'industrial_equipment_marketplace'
      | 'craft_supply_marketplace'
      | 'baby_kids_marketplace'
      | 'outdoor_gear_marketplace'
      | 'pet_marketplace'
      | 'sustainable_goods_marketplace'
      | 'cultural_artifacts_looted'
      | 'dropshipping_operations'
      | 'endangered_animal_products'
      | 'human_body_parts_tissue'
      | 'nft_marketplace'
      | 'penny_auction'
      | 'primary_event_ticketing'
      | 'freelancer_marketplace'
      | 'home_services_marketplace'
      | 'tutoring_marketplace'
      | 'legal_services_marketplace'
      | 'healthcare_marketplace'
      | 'wedding_services_marketplace'
      | 'creative_and_content_creation_marketplace'
      | 'beauty_services_marketplace'
      | 'fitness_trainer_marketplace'
      | 'pet_services_marketplace'
      | 'childcare_marketplace'
      | 'elder_care_marketplace'
      | 'translation_marketplace'
      | 'coaching_marketplace'
      | 'therapy_marketplace'
      | 'photography_marketplace'
      | 'dj_entertainment_marketplace'
      | 'auto_services_marketplace'
      | 'freelance_marketplace_operator'
      | 'equipment_rental_marketplace'
      | 'vehicle_rental_marketplace'
      | 'space_rental_marketplace'
      | 'vacation_rental_marketplace'
      | 'clothing_rental_marketplace'
      | 'camera_gear_rental'
      | 'rv_camper_rental'
      | 'boat_rental_marketplace'
      | 'storage_rental_marketplace'
      | 'office_coworking_rental'
      | 'parking_rental_marketplace'
      | 'restaurant_marketplace'
      | 'grocery_marketplace'
      | 'catering_marketplace'
      | 'homemade_food_marketplace'
      | 'meal_prep_marketplace'
      | 'bakery_marketplace'
      | 'farm_produce_marketplace'
      | 'chef_booking_marketplace'
      | 'course_marketplace'
      | 'template_marketplace'
      | 'stock_media_marketplace'
      | 'music_beats_marketplace'
      | 'ebook_marketplace'
      | 'plugin_theme_marketplace'
      | '3d_model_marketplace'
      | 'prompt_marketplace'
      | 'code_snippet_marketplace'
      | 'affiliate_marketing_platform'
      | 'game_cheats_hacks'
      | 'weapon_blueprint_distribution'
      | 'saas_marketplace'
      | 'agency_marketplace'
      | 'manufacturing_marketplace'
      | 'logistics_marketplace'
      | 'commercial_real_estate_marketplace'
      | 'business_for_sale_marketplace'
      | 'food_delivery'
      | 'grocery_delivery'
      | 'package_delivery'
      | 'moving_labor'
      | 'alcohol_delivery'
      | 'pharmacy_delivery'
      | 'flower_delivery_gig'
      | 'furniture_delivery_gig'
      | 'catering_delivery'
      | 'rideshare'
      | 'chauffeur_service'
      | 'bike_scooter_rental'
      | 'boat_charter_gig'
      | 'moving_truck_rental_gig'
      | 'assembly_installation'
      | 'waiting_line_service'
      | 'personal_shopping'
      | 'grocery_shopping_gig'
      | 'gift_wrapping_gig'
      | 'notary_gig'
      | 'laundry_gig'
      | 'car_wash_gig'
      | 'cleaning_gig'
      | 'lawn_care_gig'
      | 'handyman_gig'
      | 'pet_care_gig'
      | 'childcare_gig'
      | 'elder_care_gig'
      | 'painting_gig'
      | 'snow_removal_gig'
      | 'pool_cleaning_gig'
      | 'organizing_gig'
      | 'pressure_washing_gig'
      | 'junk_removal_gig'
      | 'consulting_gig'
      | 'accounting_gig'
      | 'legal_gig'
      | 'healthcare_gig'
      | 'teaching_gig'
      | 'translation_gig'
      | 'data_entry_gig'
      | 'research_gig'
      | 'virtual_assistant_gig'
      | 'sales_gig'
      | 'recruiting_gig'
      | 'mystery_shopping'
      | 'focus_group_gig'
      | 'product_testing_gig'
      | 'drone_pilot_gig'
      | 'fitness_instruction_gig'
      | 'tour_guide_gig'
      | 'dating_community'
      | 'personal_development_community'
      | 'spirituality_community'
      | 'parenting_community'
      | 'travel_community'
      | 'networking_community'
      | 'faith_community'
      | 'mens_community'
      | 'womens_community'
      | 'expat_community'
      | 'adult_community_nsfw'
      | 'hate_violence_communities'
      | 'personal_fundraising'
      | 'political_fundraising'
      | 'political_organizations'
      | 'pornographic_content'
      | 'registered_501c3'
      | 'religious_organization'
      | 'unregistered_charities'
      | 'ai_outreach_tool'
      | 'ai_chatbot_software'
      | 'ai_writing_tool'
      | 'ai_image_generator'
      | 'ai_video_tool'
      | 'ai_voice_tool'
      | 'ai_data_analysis'
      | 'ai_code_assistant'
      | 'ai_meeting_assistant'
      | 'workflow_automation_software'
      | 'ai_sales_tool'
      | 'ai_customer_support'
      | 'ai_recruiting_tool'
      | 'ai_translation_tool'
      | 'ai_music_tool'
      | 'ai_presentation_tool'
      | 'ai_research_tool'
      | 'ai_seo_tool'
      | 'ai_social_media_tool'
      | 'ai_phone_agent'
      | 'ai_legal_tool'
      | 'ai_healthcare_tool'
      | 'llm_api_platform'
      | 'ai_agent_platform'
      | 'generative_ai_platform'
      | 'celebrity_impersonation'
      | 'deepfake_service'
      | 'ai_nsfw_content_generator'
      | 'ecommerce_platform'
      | 'product_research_tool'
      | 'price_tracker'
      | 'shipping_software'
      | 'print_on_demand_software'
      | 'marketplace_seller_tool'
      | 'resale_arbitrage_tool'
      | 'reseller_management_tool'
      | 'product_review_software'
      | 'returns_management'
      | 'product_feed_management'
      | 'checkout_optimization'
      | 'wholesale_ordering'
      | 'project_management_software'
      | 'team_communication'
      | 'video_conferencing'
      | 'document_collaboration'
      | 'time_tracking_software'
      | 'scheduling_software'
      | 'hr_software'
      | 'knowledge_base_software'
      | 'form_survey_builder'
      | 'note_taking_app'
      | 'task_management'
      | 'contract_management'
      | 'expense_management'
      | 'okr_goal_tracking'
      | 'employee_engagement'
      | 'onboarding_software'
      | 'applicant_tracking'
      | 'asset_management'
      | 'facility_management'
      | 'visitor_management'
      | 'community_platform'
      | 'event_management_software'
      | 'webinar_software'
      | 'school_management'
      | 'newsletter_platform'
      | 'podcast_hosting'
      | 'forum_software'
      | 'virtual_classroom'
      | 'restaurant_pos'
      | 'salon_software'
      | 'gym_management_software'
      | 'auto_shop_software'
      | 'legal_practice_software'
      | 'church_management'
      | 'nonprofit_software'
      | 'logistics_software'
      | 'agriculture_software'
      | 'field_service_software'
      | 'marina_management'
      | 'hotel_pms'
      | 'childcare_management'
      | 'cleaning_business_software'
      | 'roofing_software'
      | 'landscaping_software'
      | 'pest_control_software'
      | 'tattoo_studio_software'
      | 'cannabis_software'
      | 'password_manager'
      | 'cybersecurity_software'
      | 'identity_verification'
      | 'backup_recovery'
      | 'endpoint_protection'
      | 'email_security'
      | 'access_management'
      | 'compliance_software'
      | 'data_privacy_tool'
      | 'vpn_services'
      | 'people_search_tool'
      | 'game_mod_tool'
      | 'streaming_tool'
      | 'game_server_hosting'
      | 'music_software'
      | 'video_editing_software'
      | 'photo_editing_software'
      | 'animation_software'
      | 'audio_editing_software'
      | 'screen_recording_software'
      | 'sports_betting_tool'
      | 'fantasy_sports_paid_entry'
      | 'iptv_pirated_streaming'
      | 'loot_boxes_gacha'
      | 'skill_contests_free_entry'
      | 'skill_contests_paid_entry'
      | 'only_fans_management_software'
      | 'pornography_platform'
      | 'business_phone_system'
      | 'customer_messaging'
      | 'digital_key_reselling'
      | 'streaming_account_reselling'
      | 'subscription_account_sharing'
      | 'account_generation_tool'
      | 'primary_care_telehealth'
      | 'urgent_care_telehealth'
      | 'pediatric_telehealth'
      | 'geriatric_telehealth'
      | 'family_medicine_telehealth'
      | 'internal_medicine_telehealth'
      | 'preventive_care_telehealth'
      | 'licensed_online_pharmacy'
      | 'telemedicine_practitioner_services'
      | 'dermatology_telehealth'
      | 'acne_telehealth'
      | 'psoriasis_eczema_telehealth'
      | 'skin_cancer_screening_tele'
      | 'cosmetic_dermatology_tele'
      | 'therapy_telehealth'
      | 'psychiatry_telehealth'
      | 'addiction_telehealth'
      | 'couples_therapy_telehealth'
      | 'child_psychology_telehealth'
      | 'eating_disorder_telehealth'
      | 'ptsd_trauma_telehealth'
      | 'adhd_telehealth'
      | 'anxiety_depression_telehealth'
      | 'ocd_telehealth'
      | 'grief_counseling_telehealth'
      | 'anger_management_telehealth'
      | 'family_therapy_telehealth'
      | 'group_therapy_telehealth'
      | 'licensed_psychedelic_therapy'
      | 'womens_health_telehealth'
      | 'mens_health_telehealth'
      | 'sexual_health_telehealth'
      | 'fertility_telehealth'
      | 'hormone_therapy_telehealth'
      | 'menopause_telehealth'
      | 'prenatal_telehealth'
      | 'postpartum_telehealth'
      | 'erectile_dysfunction_tele'
      | 'hair_loss_telehealth'
      | 'birth_control_telehealth'
      | 'sti_testing_telehealth'
      | 'dental_telehealth'
      | 'orthodontics_telehealth'
      | 'optometry_telehealth'
      | 'oral_surgery_consultation'
      | 'vision_therapy_telehealth'
      | 'cardiology_telehealth'
      | 'endocrinology_telehealth'
      | 'neurology_telehealth'
      | 'orthopedic_telehealth'
      | 'allergy_telehealth'
      | 'ent_telehealth'
      | 'rheumatology_telehealth'
      | 'gastroenterology_telehealth'
      | 'infectious_disease_telehealth'
      | 'pulmonology_telehealth'
      | 'nephrology_telehealth'
      | 'oncology_telehealth'
      | 'hematology_telehealth'
      | 'urology_telehealth'
      | 'weight_management_telehealth'
      | 'glp1_weight_loss_tele'
      | 'diabetes_management_tele'
      | 'metabolic_health_tele'
      | 'bariatric_telehealth'
      | 'physical_therapy_telehealth'
      | 'occupational_therapy_tele'
      | 'speech_therapy_telehealth'
      | 'pain_management_telehealth'
      | 'cardiac_rehab_telehealth'
      | 'pelvic_floor_telehealth'
      | 'vestibular_telehealth'
      | 'sleep_medicine_telehealth'
      | 'chronic_disease_management'
      | 'chronic_pain_telehealth'
      | 'migraine_telehealth'
      | 'asthma_copd_telehealth'
      | 'nutrition_telehealth'
      | 'naturopathic_telehealth'
      | 'functional_medicine_telehealth'
      | 'acupuncture_telehealth'
      | 'health_coaching_telehealth'
      | 'integrative_medicine_tele'
      | 'ayurvedic_telehealth'
      | 'genetic_counseling_telehealth'
      | 'pharmacogenomics_tele'
      | 'rare_disease_telehealth'
      | 'second_opinion_telehealth'
      | 'vet_telehealth'
      | 'pet_behavior_telehealth'
      | 'exotic_pet_telehealth'
      | 'equine_telehealth'
      | 'veterinary_services'
      | 'class_action_settlement'
      | 'mastermind_event'
      | 'webinar_event'
      | 'virtual_summit'
      | 'bootcamp_event'
      | 'workshop_seminar'
      | 'hackathon'
      | 'corporate_training_event'
      | 'training_certification_event'
      | 'convention_expo'
      | 'conference_summit'
      | 'industry_awards_event'
      | 'product_launch_event'
      | 'investor_demo_day'
      | 'panel_discussion_event'
      | 'pitch_competition'
      | 'meetup_event'
      | 'dinner_event'
      | 'alumni_event'
      | 'community_gathering'
      | 'singles_event'
      | 'professional_happy_hour'
      | 'women_networking_event'
      | 'founders_dinner'
      | 'industry_mixer'
      | 'concert_event'
      | 'comedy_show'
      | 'theater_performance'
      | 'film_screening'
      | 'music_festival'
      | 'cultural_festival'
      | 'fashion_show'
      | 'drag_show'
      | 'magic_show'
      | 'dance_performance'
      | 'poetry_spoken_word'
      | 'art_exhibition'
      | 'party_event'
      | 'trivia_night'
      | 'wine_tasting_event'
      | 'beer_festival'
      | 'car_show'
      | 'food_festival'
      | 'fitness_challenge_event'
      | 'marathon_race'
      | 'tournament_event'
      | 'fight_event'
      | 'yoga_retreat_event'
      | 'outdoor_adventure_event'
      | 'esports_tournament'
      | 'obstacle_course_race'
      | 'cycling_event'
      | 'swim_meet'
      | 'golf_tournament'
      | 'pickleball_tournament'
      | 'crossfit_competition'
      | 'martial_arts_tournament'
      | 'surfing_competition'
      | 'wellness_retreat'
      | 'spiritual_retreat'
      | 'couples_retreat'
      | 'plant_medicine_retreat'
      | 'luxury_experience_event'
      | 'detox_retreat'
      | 'silent_retreat'
      | 'creative_retreat'
      | 'leadership_retreat'
      | 'mens_retreat'
      | 'womens_retreat'
      | 'digital_detox_retreat'
      | 'fundraiser_event'
      | 'awareness_event'
      | 'volunteer_event'
      | 'charity_auction'
      | 'benefit_concert'
      | 'charity_run_walk'
      | 'environmental_cleanup'
      | 'family_festival'
      | 'kids_event'
      | 'holiday_event'
      | 'farmers_market_event'
      | 'block_party'
      | 'graduation_ceremony'
      | 'memorial_event'
      | 'stock_market_newsletter'
      | 'crypto_newsletter'
      | 'personal_finance_newsletter'
      | 'real_estate_newsletter'
      | 'fintech_newsletter'
      | 'venture_capital_newsletter'
      | 'options_trading_newsletter'
      | 'forex_newsletter'
      | 'macro_economics_newsletter'
      | 'alternative_investing_newsletter'
      | 'tax_strategy_newsletter'
      | 'ai_newsletter'
      | 'tech_industry_newsletter'
      | 'cybersecurity_newsletter'
      | 'developer_newsletter'
      | 'product_newsletter'
      | 'devops_newsletter'
      | 'open_source_newsletter'
      | 'robotics_newsletter'
      | 'climate_tech_newsletter'
      | 'travel_newsletter'
      | 'fashion_newsletter'
      | 'parenting_newsletter'
      | 'sports_newsletter'
      | 'gaming_newsletter'
      | 'music_entertainment_newsletter'
      | 'book_reading_newsletter'
      | 'dating_relationships_newsletter'
      | 'home_design_newsletter'
      | 'pet_newsletter'
      | 'wine_spirits_newsletter'
      | 'automotive_newsletter'
      | 'political_newsletter'
      | 'geopolitics_newsletter'
      | 'media_journalism_newsletter'
      | 'defense_security_newsletter'
      | 'legal_policy_newsletter'
      | 'design_newsletter'
      | 'education_newsletter'
      | 'science_newsletter'
      | 'philosophy_newsletter'
      | 'sustainability_newsletter'
      | 'architecture_newsletter'
      | 'history_newsletter'
      | 'psychology_newsletter'
      | 'career_newsletter'
      | 'spirituality_newsletter'
      | 'self_improvement_newsletter'
      | 'productivity_newsletter'
      | 'faith_newsletter'
      | 'gym_facility'
      | 'crossfit_box'
      | 'yoga_studio'
      | 'pilates_studio'
      | 'martial_arts_gym'
      | 'boxing_gym'
      | 'climbing_gym'
      | 'dance_studio'
      | 'swimming_pool'
      | 'sports_facility'
      | 'golf_course'
      | 'bowling_alley'
      | 'skating_rink'
      | 'trampoline_park'
      | 'tennis_club'
      | 'pickleball_facility'
      | 'gymnastics_center'
      | 'spin_studio'
      | 'barre_studio'
      | 'personal_training_studio_bm'
      | 'recovery_studio'
      | 'indoor_soccer'
      | 'batting_cage'
      | 'shooting_range'
      | 'archery_range'
      | 'equestrian_center'
      | 'fine_dining'
      | 'fast_casual_restaurant'
      | 'steakhouse'
      | 'seafood_restaurant'
      | 'pizza_shop'
      | 'sushi_restaurant'
      | 'deli_sandwich_shop'
      | 'bbq_restaurant'
      | 'mexican_restaurant'
      | 'italian_restaurant'
      | 'chinese_restaurant'
      | 'indian_restaurant'
      | 'thai_restaurant'
      | 'korean_restaurant'
      | 'mediterranean_restaurant'
      | 'vegan_vegetarian_restaurant'
      | 'brunch_restaurant'
      | 'ramen_noodle_shop'
      | 'poke_bowl_shop'
      | 'ethnic_restaurant'
      | 'coffee_shop_cafe'
      | 'bakery'
      | 'juice_smoothie_bar'
      | 'ice_cream_shop'
      | 'donut_shop'
      | 'bubble_tea_shop'
      | 'food_truck'
      | 'fast_food'
      | 'ghost_kitchen'
      | 'food_hall_vendor'
      | 'catering_kitchen'
      | 'butcher_shop'
      | 'cheese_shop'
      | 'farmers_market_stall'
      | 'bar_lounge'
      | 'brewery_taproom'
      | 'winery_tasting'
      | 'wine_bar'
      | 'cocktail_bar'
      | 'sports_bar'
      | 'hookah_lounge'
      | 'distillery'
      | 'commercial_farming'
      | 'livestock_ranching'
      | 'hydroponic_vertical_farming'
      | 'forestry_logging'
      | 'aquaculture_fisheries'
      | 'vineyard_winery_production'
      | 'cannabis_cultivation'
      | 'hemp_farming'
      | 'grain_production'
      | 'agricultural_cooperative'
      | 'fertilizer_pesticide_sales'
      | 'farm_equipment_sales'
      | 'boutique_store'
      | 'clothing_store'
      | 'shoe_store'
      | 'jewelry_store'
      | 'electronics_store'
      | 'bookstore'
      | 'pet_store'
      | 'toy_store'
      | 'sporting_goods_store'
      | 'thrift_store'
      | 'smoke_shop'
      | 'cannabis_dispensary'
      | 'convenience_store'
      | 'grocery_store'
      | 'liquor_store'
      | 'florist'
      | 'gift_shop'
      | 'furniture_store'
      | 'home_improvement_store'
      | 'art_gallery_retail'
      | 'music_instrument_store'
      | 'outdoor_recreation_store'
      | 'phone_repair_store'
      | 'watch_store'
      | 'bridal_shop'
      | 'maternity_store'
      | 'kids_store'
      | 'sneaker_store'
      | 'vintage_store'
      | 'comic_book_store'
      | 'record_store'
      | 'craft_supply_store'
      | 'fabric_store'
      | 'health_food_store'
      | 'vitamin_supplement_store'
      | 'optical_store'
      | 'mattress_store'
      | 'appliance_store'
      | 'kitchen_bath_store'
      | 'tile_flooring_store'
      | 'paint_store'
      | 'garden_center'
      | 'gun_store'
      | 'pawn_shop'
      | 'dollar_store'
      | 'hair_salon'
      | 'nail_salon'
      | 'day_spa'
      | 'med_spa'
      | 'massage_studio'
      | 'tattoo_parlor'
      | 'tanning_salon'
      | 'beauty_supply_store'
      | 'lash_brow_studio'
      | 'waxing_studio'
      | 'sauna_bathhouse'
      | 'cryotherapy_studio'
      | 'float_sensory_studio'
      | 'iv_therapy_lounge'
      | 'teeth_whitening_studio'
      | 'microblading_studio'
      | 'spray_tan_studio'
      | 'blowout_bar'
      | 'mens_barbershop'
      | 'kids_salon'
      | 'medical_office'
      | 'dental_office'
      | 'chiropractic_office'
      | 'physical_therapy_clinic'
      | 'optometry_office'
      | 'dermatology_clinic'
      | 'urgent_care_clinic'
      | 'pharmacy'
      | 'veterinary_clinic'
      | 'mental_health_clinic'
      | 'fertility_clinic'
      | 'acupuncture_clinic'
      | 'hearing_aid_center'
      | 'orthopedic_clinic'
      | 'pediatric_clinic'
      | 'cosmetic_surgery_center'
      | 'allergy_clinic'
      | 'pain_management_clinic'
      | 'dialysis_center'
      | 'imaging_center'
      | 'lab_testing_center'
      | 'sleep_clinic'
      | 'weight_loss_clinic'
      | 'hormone_therapy_clinic'
      | 'addiction_treatment_center'
      | 'rehabilitation_center'
      | 'occupational_therapy_clinic'
      | 'speech_therapy_clinic'
      | 'wound_care_center'
      | 'funeral_home_mortuary'
      | 'crematory_service'
      | 'cemetery_memorial_park'
      | 'casket_urn_retailer'
      | 'pet_cremation_service'
      | 'biohazard_cleanup'
      | 'estate_liquidation'
      | 'hotel'
      | 'motel'
      | 'boutique_hotel'
      | 'bed_and_breakfast'
      | 'hostel'
      | 'resort'
      | 'campground_rv'
      | 'vacation_rental_property'
      | 'extended_stay'
      | 'glamping_site'
      | 'cabin_rental'
      | 'eco_lodge'
      | 'retreat_center'
      | 'tutoring_center'
      | 'daycare_center'
      | 'preschool'
      | 'learning_center'
      | 'music_school'
      | 'art_school'
      | 'driving_school'
      | 'language_school'
      | 'trade_school'
      | 'coding_bootcamp_location'
      | 'montessori_school'
      | 'after_school_program'
      | 'swim_school'
      | 'cooking_school'
      | 'test_prep_center'
      | 'special_needs_center'
      | 'adult_education_center'
      | 'flight_school'
      | 'cosmetology_school'
      | 'movie_theater'
      | 'escape_room'
      | 'arcade'
      | 'mini_golf'
      | 'laser_tag'
      | 'go_kart'
      | 'amusement_park'
      | 'museum'
      | 'zoo_aquarium'
      | 'theater_venue'
      | 'nightclub'
      | 'karaoke_bar'
      | 'comedy_club'
      | 'live_music_venue'
      | 'axe_throwing'
      | 'virtual_reality_arcade'
      | 'board_game_cafe'
      | 'cat_cafe'
      | 'haunted_house'
      | 'water_park'
      | 'indoor_playground'
      | 'concert_venue'
      | 'drive_in_theater'
      | 'billiards_hall'
      | 'dart_bar'
      | 'indoor_skydiving'
      | 'law_office'
      | 'real_estate_office'
      | 'insurance_office'
      | 'accounting_office'
      | 'bank_credit_union'
      | 'printing_shop'
      | 'shipping_center'
      | 'dry_cleaner'
      | 'laundromat'
      | 'storage_facility'
      | 'coworking_space'
      | 'check_cashing'
      | 'title_company'
      | 'travel_agency_storefront'
      | 'staffing_office'
      | 'financial_advisor_office'
      | 'immigration_office'
      | 'bail_bonds_office'
      | 'pet_grooming'
      | 'dog_daycare'
      | 'pet_boarding'
      | 'dog_training_facility'
      | 'pet_spa'
      | 'aquatic_pet_store'
      | 'pet_bakery'
      | 'pet_photography_studio'
      | 'plumbing_showroom'
      | 'hvac_showroom'
      | 'solar_showroom'
      | 'kitchen_design_showroom'
      | 'bath_design_showroom'
      | 'window_door_showroom'
      | 'pool_spa_showroom'
      | 'fireplace_showroom'
      | 'countertop_showroom'
      | 'nonprofit_organization'
      | 'charity_foundation'
      | 'political_campaign'
      | 'community_organization'
      | 'environmental_nonprofit'
      | 'education_nonprofit'
      | 'health_nonprofit'
      | 'animal_welfare_nonprofit'
      | 'arts_culture_nonprofit'
      | 'social_justice_nonprofit'
      | 'veterans_nonprofit'
      | 'youth_nonprofit'
      | 'disaster_relief_nonprofit'
      | 'food_bank'
      | 'housing_nonprofit'
      | 'government_agency'
      | 'public_utility'
      | 'public_library'
      | 'public_school'
      | 'municipal_service'
      | 'military_installation'
      | 'embassy_consulate'
      | 'niche_service'
      | 'niche_product'
      | 'hybrid_business'
      | 'other_general'
      | 'holding_company'
      | 'family_office'
      | 'cooperative'
      | 'social_enterprise'
      | 'incubator_accelerator'
      | 'coworking_community'
      | 'media_company'
      | 'research_lab'
      | null;

    /**
     * Prefix used for account invoices.
     */
    invoice_prefix: string | null;

    /**
     * Account logo image URL.
     */
    logo_url: string | null;

    /**
     * Arbitrary key/value metadata supplied at account creation.
     */
    metadata: unknown;

    /**
     * Type of onboarding the account has completed.
     */
    onboarding_type: 'platform' | 'seller' | null;

    /**
     * Account Open Graph image URL.
     */
    opengraph_image_url: string | null;

    /**
     * Account Open Graph image variant.
     */
    opengraph_image_variant: 'white' | 'black' | 'orange' | null;

    /**
     * Business type details when business_type is `other`.
     */
    other_business_description: string | null;

    /**
     * Industry details when industry_type is `other`.
     */
    other_industry_description: string | null;

    /**
     * The single user who owns the account, whose email is the `email` above. Distinct
     * from the `owner` role on team members, which any number of them can hold.
     */
    owner: Data.Owner;

    /**
     * Parent account for connected accounts, or `null` for standalone accounts.
     */
    parent_account: Data.ParentAccount | null;

    /**
     * Payment health controls currently applied to the account. Computed only on
     * `retrieve` and `me` for callers with `company:balance:read` scope; `null`
     * otherwise.
     */
    payment_controls: Data.PaymentControls | null;

    /**
     * The account's privacy policy document, or `null` if they have not published one.
     */
    privacy_policy: Data.PrivacyPolicy | null;

    /**
     * Tax classification code applied by default to the account's products, with `id`,
     * `name`, and `product_type`. `null` when no default is set.
     */
    product_tax_code: unknown | null;

    /**
     * @deprecated DEPRECATED: Use the
     * `GET /recommended_actions?account_id={account_id}` endpoint instead.
     */
    recommended_actions: Array<Data.RecommendedAction> | null;

    /**
     * Whether authorized users must enable two-factor authentication.
     */
    require_2fa: boolean;

    required_actions: Array<Data.RequiredAction> | null;

    /**
     * The account's return policy document, or `null` if they have not published one.
     */
    return_policy: Data.ReturnPolicy | null;

    /**
     * Account public route identifier.
     */
    route: string;

    /**
     * Whether Whop sends transactional emails to customers on behalf of this account.
     */
    send_customer_emails: boolean;

    /**
     * Whether the account appears in joined whops on other accounts.
     */
    show_joined_whops: boolean;

    /**
     * Whether reviews are displayed on direct-to-consumer product pages.
     */
    show_reviews_dtc: boolean;

    /**
     * Whether the account shows users in the user directory.
     */
    show_user_directory: boolean;

    social_links: Array<Data.SocialLink>;

    /**
     * Whether the account settles on stablecoin rails — its balance is held on-chain
     * as USDT and paid out over crypto, rather than as fiat cash.
     */
    stablecoin_rails: boolean;

    /**
     * Whether the account can operate on Whop: `active` or `suspended`. Computed on
     * `list`, `retrieve`, `me`, and `suspend`; `null` otherwise.
     */
    status: string | null;

    /**
     * Why the account was suspended, in language safe to show the account owner.
     * Computed on `retrieve`, `me`, and `suspend`; `null` otherwise, when `status` is
     * not `suspended`, and when the suspension was recorded without a reason.
     */
    status_reason: string | null;

    /**
     * Account store page display configuration.
     */
    store_page_config: Data.StorePageConfig;

    /**
     * Target audience for this account.
     */
    target_audience: string | null;

    tax_collection_enabled_states: Array<string>;

    tax_identifiers: Array<Data.TaxIdentifier>;

    /**
     * Who calculates and remits tax for the account: `whop` (Whop calculates and
     * remits), `self` (Whop calculates; the account collects and remits), or `none`
     * (neither; the account is responsible). `null` until the account enrolls in the
     * Whop tax service.
     */
    tax_remitted_by: 'whop' | 'self' | 'none' | null;

    /**
     * How tax is applied to the account's prices: `inclusive` (tax included in the
     * listed price) or `exclusive` (tax added on top). Defaults to `exclusive` when
     * unset; `null` only when the account has no payment connection.
     */
    tax_type: 'inclusive' | 'exclusive' | null;

    /**
     * The account's terms of service document, or `null` if they have not published
     * one.
     */
    terms_of_service: Data.TermsOfService | null;

    /**
     * Account-level 3D Secure behavior. `mandate_challenge` requires cardholder
     * verification on supported card payments; `null` uses the standard checkout flow.
     */
    three_ds_level: 'mandate_challenge' | null;

    /**
     * Account display name.
     */
    title: string;

    /**
     * Account lifetime sales, normalized to USD. Computed only on `retrieve` and `me`
     * for callers with `stats:read` scope; `null` otherwise.
     */
    total_earned_usd: number | null;

    /**
     * Total USD value across balances with known exchange rates. Computed only on
     * single-account reads (`retrieve` and `me`); `null` on list responses, writes,
     * missing balance-read permission, or unavailable balance source.
     */
    total_usd: string | null;

    /**
     * Whether the account uses its logo as the fallback Open Graph image.
     */
    use_logo_as_opengraph_image_fallback: boolean;

    /**
     * Account identity verification status for the `individual` (KYC) and `business`
     * (KYB) profiles. Each is `null` until created, otherwise a `status` of
     * `not_started`, `pending`, `manual_review`, `approved`, or `rejected`.
     */
    verification: unknown;

    /**
     * Lifetime volume through the account — sales plus transfers received — normalized
     * to USD. Computed only on `list` for callers with `stats:read` on the account;
     * `null` otherwise.
     */
    volume_usd: number | null;

    /**
     * Account primary crypto wallet, or `null` if none has been provisioned.
     */
    wallet: Data.Wallet | null;
  }

  export namespace Data {
    /**
     * Account holdings, each with USD value. Empty when `total_usd` is `null`.
     */
    export interface Balance {
      /**
       * Total amount held in native units, as a decimal string.
       */
      balance: string;

      /**
       * Balance split into available, pending, and reserve amounts, as native-unit
       * decimal strings, with the days the pending amount is expected to settle.
       * On-chain crypto is entirely available; good_funds and fiat cash can have pending
       * or reserve portions.
       */
      breakdown: Balance.Breakdown;

      /**
       * Holding icon URL.
       */
      icon_url: string | null;

      /**
       * The holding's display name
       */
      name: string;

      /**
       * USD price per unit, or `null` when no exchange rate is available.
       */
      price_usd: number | null;

      /**
       * Holding display symbol, such as `USDT`, `cbBTC`, or `EUR`.
       */
      symbol: string;

      /**
       * Holding USD value, or `null` when no exchange rate is available.
       */
      value_usd: string | null;
    }

    export namespace Balance {
      /**
       * Balance split into available, pending, and reserve amounts, as native-unit
       * decimal strings, with the days the pending amount is expected to settle.
       * On-chain crypto is entirely available; good_funds and fiat cash can have pending
       * or reserve portions.
       */
      export interface Breakdown {
        /**
         * Amount you can spend, send, or withdraw now, in native units, as a decimal
         * string.
         */
        available: string;

        /**
         * Amount moving between the account's own destinations, such as a treasury sweep
         * to its crypto wallet or a card top-up. In native units, as a decimal string.
         */
        in_transit: string;

        /**
         * Amount from recent payments still settling, in native units, as a decimal
         * string.
         */
        pending: string;

        pending_settlements: Array<Breakdown.PendingSettlement>;

        /**
         * Amount held back, in native units, as a decimal string. Retrieve the account's
         * reserves for why it is held and when it unlocks.
         */
        reserve: string;
      }

      export namespace Breakdown {
        /**
         * When the pending amount is expected to settle, one entry per day, earliest
         * first. Money with no scheduled settlement day, such as a transfer in flight, is
         * left out — so these can sum to less than `pending`, never more.
         */
        export interface PendingSettlement {
          /**
           * Amount expected that day, in native units, as a decimal string.
           */
          amount: string;

          /**
           * The day this money is expected to finish settling, as an ISO 8601 date.
           */
          date: string;
        }
      }
    }

    /**
     * Payment rails enabled for this account, each `active`, `inactive`, or `pending`
     * (onboarding or review in progress). Computed only on `retrieve` and `me` for
     * callers with `company:balance:read` scope; `null` otherwise.
     */
    export interface Capabilities {
      /**
       * Bank payins: debits, transfers, and local bank rails
       */
      accept_bank_payments: 'active' | 'inactive' | 'pending';

      /**
       * Buy-now-pay-later payins; requires approval
       */
      accept_bnpl_payments: 'active' | 'inactive' | 'pending';

      /**
       * Card payins, including Apple Pay and Google Pay
       */
      accept_card_payments: 'active' | 'inactive' | 'pending';

      /**
       * Deposits by bank wire or ACH to the account's virtual bank account
       */
      bank_deposit: 'active' | 'inactive' | 'pending';

      /**
       * Balance top-ups by charging a stored payment method
       */
      card_deposit: 'active' | 'inactive' | 'pending';

      /**
       * Issuing Whop cards; requires card application approval
       */
      card_issuing: 'active' | 'inactive' | 'pending';

      /**
       * On-chain deposits to the account's crypto wallet
       */
      crypto_deposit: 'active' | 'inactive' | 'pending';

      /**
       * On-chain payouts to a crypto wallet
       */
      crypto_payout: 'active' | 'inactive' | 'pending';

      /**
       * Instant payouts to an eligible payout destination
       */
      instant_payout: 'active' | 'inactive' | 'pending';

      /**
       * Launching ad campaigns through Whop Ads. `inactive` while a requested ads
       * services agreement is awaiting the account's signature.
       */
      run_ads: 'active' | 'inactive' | 'pending';

      /**
       * Standard payouts to an external payout destination
       */
      standard_payout: 'active' | 'inactive' | 'pending';

      /**
       * Transfers to other accounts
       */
      transfer: 'active' | 'inactive' | 'pending';
    }

    /**
     * Whop Cards application details for the account. Computed only on `retrieve` and
     * `me` for callers with `company:balance:read` scope; `null` otherwise, or when
     * the account has no card application.
     */
    export interface Cards {
      /**
       * Whether the card application verifies a business (`business`, KYB) or a person
       * (`individual`, consumer identity). `null` when the application is not yet linked
       * to a verification.
       */
      kind: 'individual' | 'business' | null;

      /**
       * Where the card application stands. `approved` means cards can be issued.
       * `needs_verification` means the applicant has not completed identity verification
       * yet; `needs_information` means they did, but the documents were rejected for a
       * fixable reason and must be resubmitted. `pending` and `manual_review` are in
       * flight. `denied`, `locked`, and `canceled` are terminal.
       */
      status:
        | 'approved'
        | 'pending'
        | 'manual_review'
        | 'denied'
        | 'locked'
        | 'canceled'
        | 'needs_verification'
        | 'needs_information';
    }

    /**
     * Company formation state for the account, managed through
     * [Form Company](/api-reference/beta/accounts/form-company). A `draft` `status`
     * until the formation checkout is paid, then filing progress with downloadable
     * documents and signatures awaiting action. Empty when the formation state is
     * temporarily unavailable.
     */
    export interface CompanyFormation {
      documents?: Array<CompanyFormation.Document>;

      /**
       * Whether the company's EIN has been issued by the IRS. Present once `status`
       * leaves `draft`.
       */
      ein_registered?: boolean;

      /**
       * Registered company name including the entity ending, for example `Acme, LLC`.
       * Present once `status` leaves `draft`.
       */
      legal_name?: string | null;

      /**
       * IRS forms still awaiting a founder's signature, each with a hosted signing URL.
       * Present once `status` leaves `draft`; empty when nothing needs signing.
       */
      signatures?: CompanyFormation.Signatures;

      /**
       * Whether the state formation filing is complete. Present once `status` leaves
       * `draft`.
       */
      state_registered?: boolean;

      status?: 'draft' | 'processing' | 'filed' | 'rejected' | 'completed';

      [k: string]: unknown;
    }

    export namespace CompanyFormation {
      /**
       * Formation documents available for download, such as the Articles of Organization
       * and the EIN confirmation letter. Present once `status` leaves `draft`.
       */
      export interface Document {
        /**
         * Document ID, prefixed `file_`.
         */
        id: string;

        /**
         * Human-readable document name, such as `Articles of Organization`.
         */
        name: string;

        /**
         * Document category: `articles_of_organization`, `operating_agreement`,
         * `ein_letter`, `signed_ss4`, `signed_form8821`, or `mail` for postal
         * correspondence received on the company's behalf.
         */
        type: string;

        /**
         * CDN URL for downloading the document.
         */
        url: string;
      }

      /**
       * IRS forms still awaiting a founder's signature, each with a hosted signing URL.
       * Present once `status` leaves `draft`; empty when nothing needs signing.
       */
      export interface Signatures {
        /**
         * Signature state for IRS Form 8821, the tax information authorization. Present
         * only while the form still needs the founder's action.
         */
        form8821?: Signatures.Form8821;

        /**
         * Signature state for IRS Form SS-4, the EIN application. Present only while the
         * form still needs the founder's action.
         */
        ss4?: Signatures.Ss4;

        [k: string]: unknown;
      }

      export namespace Signatures {
        /**
         * Signature state for IRS Form 8821, the tax information authorization. Present
         * only while the form still needs the founder's action.
         */
        export interface Form8821 {
          /**
           * `pending` when a signing session is ready for the founder; `unknown` when the
           * signature state could not be determined.
           */
          status: 'pending' | 'unknown';

          /**
           * When the signing URL expires, as an ISO 8601 timestamp. Present while `status`
           * is `pending`.
           */
          expires_at?: string;

          /**
           * Hosted signing URL where the founder completes the form. Present while `status`
           * is `pending`.
           */
          url?: string;
        }

        /**
         * Signature state for IRS Form SS-4, the EIN application. Present only while the
         * form still needs the founder's action.
         */
        export interface Ss4 {
          /**
           * `pending` when a signing session is ready for the founder; `unknown` when the
           * signature state could not be determined.
           */
          status: 'pending' | 'unknown';

          /**
           * When the signing URL expires, as an ISO 8601 timestamp. Present while `status`
           * is `pending`.
           */
          expires_at?: string;

          /**
           * Hosted signing URL where the founder completes the form. Present while `status`
           * is `pending`.
           */
          url?: string;
        }
      }
    }

    /**
     * The account's end-user license agreement document, or `null` if they have not
     * published one.
     */
    export interface Eula {
      /**
       * The file's ID, prefixed `file_`.
       */
      id: string;

      /**
       * The file's MIME type, e.g. `application/pdf`.
       */
      content_type: string | null;

      /**
       * When the file was created, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * The original filename, including its extension.
       */
      filename: string | null;

      /**
       * The type of this object, always `file`.
       */
      object: string;

      /**
       * The file size in bytes. `null` until the upload has finished.
       */
      size: number | null;

      /**
       * Where the file is in its upload lifecycle.
       */
      upload_status: 'pending' | 'processing' | 'ready' | 'failed';

      /**
       * A URL to download the file: a permanent CDN URL for public files, a signed
       * expiring URL for private ones. `null` until the upload has finished.
       */
      url: string | null;

      /**
       * `public` files are served via an unsigned CDN URL; `private` files via a signed,
       * expiring URL.
       */
      visibility: 'public' | 'private';

      /**
       * The byte size each part (except the last) must be. Present only on create, and
       * only for multipart uploads.
       */
      multipart_chunk_size?: number | null;

      /**
       * The ID of the multipart upload, passed back to `complete`. Present only on
       * create, and only for multipart uploads.
       */
      multipart_upload_id?: string | null;

      multipart_upload_urls?: Array<Eula.MultipartUploadURL> | null;

      /**
       * Headers to send with the upload PUT. Present only on create.
       */
      upload_headers?: unknown;

      /**
       * Presigned URL to PUT the file's bytes to. Present only on create, and only for
       * single-part uploads.
       */
      upload_url?: string | null;
    }

    export namespace Eula {
      /**
       * The presigned URL for each part. Present only on create, and only for multipart
       * uploads.
       */
      export interface MultipartUploadURL {
        /**
         * The 1-based index of this part within the multipart upload.
         */
        part_number: number;

        /**
         * The presigned URL to PUT this part's bytes to.
         */
        url: string;
      }
    }

    /**
     * The single user who owns the account, whose email is the `email` above. Distinct
     * from the `owner` role on team members, which any number of them can hold.
     */
    export interface Owner {
      /**
       * User ID, prefixed `user_`.
       */
      id: string;

      /**
       * Display name.
       */
      name: string | null;

      /**
       * Avatar wrapper; its `url` is always present, using a generated placeholder when
       * the user set no picture.
       */
      profile_picture: Owner.ProfilePicture;

      /**
       * Public username.
       */
      username: string;
    }

    export namespace Owner {
      /**
       * Avatar wrapper; its `url` is always present, using a generated placeholder when
       * the user set no picture.
       */
      export interface ProfilePicture {
        /**
         * Avatar image URL. Always present — a generated placeholder when the user set no
         * picture.
         */
        url: string;
      }
    }

    /**
     * Parent account for connected accounts, or `null` for standalone accounts.
     */
    export interface ParentAccount {
      /**
       * Account ID, prefixed `biz_`.
       */
      id: string;

      /**
       * Account logo image URL.
       */
      logo_url: string | null;

      /**
       * Account public route identifier.
       */
      route: string;

      /**
       * Account display name.
       */
      title: string;
    }

    /**
     * Payment health controls currently applied to the account. Computed only on
     * `retrieve` and `me` for callers with `company:balance:read` scope; `null`
     * otherwise.
     */
    export interface PaymentControls {
      /**
       * Automatic refund settings for pre-chargeback dispute alerts.
       */
      dispute_alert_auto_refund: PaymentControls.DisputeAlertAutoRefund;

      /**
       * Fee charged for each dispute alert in USD. `null` when unavailable.
       */
      dispute_alert_fee_usd: number | null;

      /**
       * Whether 3-D Secure is forced on every card payment at checkout. The account
       * cannot bypass it while set.
       */
      enforce_3ds: boolean;

      /**
       * Whether payment health controls explicitly disable financing. This is
       * independent of financing approval in `capabilities.accept_bnpl_payments`.
       */
      financing_disabled: boolean;

      /**
       * Additional processing fee percentage for high-risk processing.
       */
      high_risk_processing_fee_percentage: number;

      /**
       * Percentage fee charged when pending, not-yet-settled balance is advanced to fund
       * the account's cards balance, where `2` means 2%. `0` when the account is exempt.
       */
      pending_auto_topup_fee_percentage: number;

      /**
       * Additional days payments remain pending before becoming available.
       */
      pending_balance_delay_days: number;

      /**
       * Reserve currently applied to incoming payment volume.
       */
      reserve: PaymentControls.Reserve;

      /**
       * Automatic refund settings for resolution center cases.
       */
      resolution_center_auto_refund: PaymentControls.ResolutionCenterAutoRefund;

      restricted_payment_methods: Array<
        'card_visa' | 'card_mastercard' | 'card_american_express' | 'card_discover_global_network'
      >;

      /**
       * Why pending funds without a settlement date aren't moving yet, when it's
       * something the merchant can act on. `null` when there's no reason to show (still
       * clearing, or the account is held for a reason that isn't merchant-actionable).
       */
      undated_pending_reason: 'kyc_incomplete' | 'pending_information_request' | null;

      /**
       * How the account's balance automatically withdraws.
       */
      withdrawal_schedule: PaymentControls.WithdrawalSchedule;
    }

    export namespace PaymentControls {
      /**
       * Automatic refund settings for pre-chargeback dispute alerts.
       */
      export interface DisputeAlertAutoRefund {
        /**
         * Whether the account owner is prevented from changing this threshold.
         */
        locked: boolean;

        /**
         * Maximum dispute alert amount automatically refunded in USD. `null` when
         * automatic refunds are disabled.
         */
        threshold_usd: number | null;
      }

      /**
       * Reserve currently applied to incoming payment volume.
       */
      export interface Reserve {
        /**
         * Number of days reserved funds are held before release.
         */
        hold_period_days: number;

        /**
         * Percentage of incoming payment volume held in reserve. `null` when no reserve is
         * applied.
         */
        percentage: number | null;
      }

      /**
       * Automatic refund settings for resolution center cases.
       */
      export interface ResolutionCenterAutoRefund {
        /**
         * Maximum card-funded resolution center case amount automatically refunded in USD.
         * `null` when automatic refunds are disabled for cards.
         */
        card_threshold_usd: number | null;

        /**
         * Maximum financing-funded resolution center case amount automatically refunded in
         * USD. `null` when automatic refunds are disabled for financing.
         */
        financing_threshold_usd: number | null;

        /**
         * Whether the account owner is prevented from changing these thresholds.
         */
        locked: boolean;

        /**
         * Maximum PayPal-funded resolution center case amount automatically refunded in
         * USD. `null` when automatic refunds are disabled for PayPal.
         */
        paypal_threshold_usd: number | null;
      }

      /**
       * How the account's balance automatically withdraws.
       */
      export interface WithdrawalSchedule {
        /**
         * Day the automatic withdrawal runs on: 0-6 (Sunday-Saturday) for `weekly`, 1-31
         * for `monthly`. `null` for `manual` and `daily`.
         */
        day: number | null;

        /**
         * How often the account's balance automatically withdraws.
         */
        frequency: 'manual' | 'daily' | 'weekly' | 'monthly';

        /**
         * Next date the automatic withdrawal is scheduled to run, as an ISO 8601 date.
         * `null` for `manual` and `daily`, where no single next date applies.
         */
        next_payout_date: string | null;
      }
    }

    /**
     * The account's privacy policy document, or `null` if they have not published one.
     */
    export interface PrivacyPolicy {
      /**
       * The file's ID, prefixed `file_`.
       */
      id: string;

      /**
       * The file's MIME type, e.g. `application/pdf`.
       */
      content_type: string | null;

      /**
       * When the file was created, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * The original filename, including its extension.
       */
      filename: string | null;

      /**
       * The type of this object, always `file`.
       */
      object: string;

      /**
       * The file size in bytes. `null` until the upload has finished.
       */
      size: number | null;

      /**
       * Where the file is in its upload lifecycle.
       */
      upload_status: 'pending' | 'processing' | 'ready' | 'failed';

      /**
       * A URL to download the file: a permanent CDN URL for public files, a signed
       * expiring URL for private ones. `null` until the upload has finished.
       */
      url: string | null;

      /**
       * `public` files are served via an unsigned CDN URL; `private` files via a signed,
       * expiring URL.
       */
      visibility: 'public' | 'private';

      /**
       * The byte size each part (except the last) must be. Present only on create, and
       * only for multipart uploads.
       */
      multipart_chunk_size?: number | null;

      /**
       * The ID of the multipart upload, passed back to `complete`. Present only on
       * create, and only for multipart uploads.
       */
      multipart_upload_id?: string | null;

      multipart_upload_urls?: Array<PrivacyPolicy.MultipartUploadURL> | null;

      /**
       * Headers to send with the upload PUT. Present only on create.
       */
      upload_headers?: unknown;

      /**
       * Presigned URL to PUT the file's bytes to. Present only on create, and only for
       * single-part uploads.
       */
      upload_url?: string | null;
    }

    export namespace PrivacyPolicy {
      /**
       * The presigned URL for each part. Present only on create, and only for multipart
       * uploads.
       */
      export interface MultipartUploadURL {
        /**
         * The 1-based index of this part within the multipart upload.
         */
        part_number: number;

        /**
         * The presigned URL to PUT this part's bytes to.
         */
        url: string;
      }
    }

    /**
     * Deprecated: use the `GET /recommended_actions?account_id={account_id}` endpoint
     * instead. Optional actions that unlock capabilities or grow the account, same
     * shape as `required_actions`. Computed only on `retrieve` and `me`; `null`
     * otherwise.
     */
    export interface RecommendedAction {
      /**
       * The recommendation; new values may be added, so handle unknown actions
       * gracefully
       */
      action:
        | 'theme_business'
        | 'create_product'
        | 'create_plan'
        | 'verify_identity'
        | 'connect_affiliate_program'
        | 'create_promotion'
        | 'migrate_from_stripe'
        | 'accept_first_payment'
        | 'launch_first_ad'
        | 'launch_draft_campaign'
        | 'increase_ad_budget'
        | 'refresh_ad_creatives'
        | 'fix_ad_billing'
        | 'exclude_customers_from_ads'
        | 'retarget_abandoned_checkouts'
        | 'fix_funnel_dropoff'
        | 'invite_team_member'
        | 'enable_tax_collection'
        | 'create_card'
        | 'apply_for_financing';

      blocked_capabilities: Array<string>;

      /**
       * The URL the call-to-action links to
       */
      cta: string;

      /**
       * Button label
       */
      cta_label: string;

      /**
       * Supporting copy, or empty
       */
      description: string;

      /**
       * Illustration icon URL, or `null`
       */
      icon_url: string | null;

      /**
       * Estimated impact from 0-100, or `null` when not ranked
       */
      impact_score: number | null;

      /**
       * Why this action was recommended, or `null`
       */
      reasoning: string | null;

      /**
       * Always optional — never blocking
       */
      status: 'optional';

      /**
       * Headline for the recommendation
       */
      title: string;
    }

    /**
     * Actions the account owner must take to unblock capabilities like payouts and
     * card spend, ordered by display priority. Computed only on `retrieve` and `me`
     * for callers with `company:balance:read` scope; `null` otherwise.
     */
    export interface RequiredAction {
      /**
       * What the holder must do; new values may be added, so handle unknown actions
       * gracefully
       */
      action:
        | 'deposit_funds'
        | 'submit_information_request'
        | 'reauthorize_payout_methods'
        | 'update_payout_profile'
        | 'card_usage_review'
        | 'verify_identity'
        | 'sign_formation_documents'
        | 'connect_fulfillment_tracker'
        | 'setup_apple_pay_domains'
        | 'configure_tax_remitter'
        | 'add_vat_registration';

      blocked_capabilities: Array<string>;

      /**
       * The URL the call-to-action links to, or null when there is no button
       */
      cta: string | null;

      /**
       * Button label, or empty when there is no button
       */
      cta_label: string;

      /**
       * Supporting copy, or empty
       */
      description: string;

      /**
       * The URL of the action's illustration icon, or null if it has none
       */
      icon_url: string | null;

      /**
       * required (act now) or pending (under review)
       */
      status: 'required' | 'pending';

      /**
       * Headline for the action
       */
      title: string;
    }

    /**
     * The account's return policy document, or `null` if they have not published one.
     */
    export interface ReturnPolicy {
      /**
       * The file's ID, prefixed `file_`.
       */
      id: string;

      /**
       * The file's MIME type, e.g. `application/pdf`.
       */
      content_type: string | null;

      /**
       * When the file was created, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * The original filename, including its extension.
       */
      filename: string | null;

      /**
       * The type of this object, always `file`.
       */
      object: string;

      /**
       * The file size in bytes. `null` until the upload has finished.
       */
      size: number | null;

      /**
       * Where the file is in its upload lifecycle.
       */
      upload_status: 'pending' | 'processing' | 'ready' | 'failed';

      /**
       * A URL to download the file: a permanent CDN URL for public files, a signed
       * expiring URL for private ones. `null` until the upload has finished.
       */
      url: string | null;

      /**
       * `public` files are served via an unsigned CDN URL; `private` files via a signed,
       * expiring URL.
       */
      visibility: 'public' | 'private';

      /**
       * The byte size each part (except the last) must be. Present only on create, and
       * only for multipart uploads.
       */
      multipart_chunk_size?: number | null;

      /**
       * The ID of the multipart upload, passed back to `complete`. Present only on
       * create, and only for multipart uploads.
       */
      multipart_upload_id?: string | null;

      multipart_upload_urls?: Array<ReturnPolicy.MultipartUploadURL> | null;

      /**
       * Headers to send with the upload PUT. Present only on create.
       */
      upload_headers?: unknown;

      /**
       * Presigned URL to PUT the file's bytes to. Present only on create, and only for
       * single-part uploads.
       */
      upload_url?: string | null;
    }

    export namespace ReturnPolicy {
      /**
       * The presigned URL for each part. Present only on create, and only for multipart
       * uploads.
       */
      export interface MultipartUploadURL {
        /**
         * The 1-based index of this part within the multipart upload.
         */
        part_number: number;

        /**
         * The presigned URL to PUT this part's bytes to.
         */
        url: string;
      }
    }

    /**
     * Account social links.
     */
    export interface SocialLink {
      /**
       * The ID of the social link
       */
      id: string;

      /**
       * The optional display title for the social link
       */
      title: string | null;

      /**
       * The social link URL
       */
      url: string;

      /**
       * The social platform for this link
       */
      website:
        | 'x'
        | 'instagram'
        | 'facebook'
        | 'tiktok'
        | 'youtube'
        | 'linkedin'
        | 'twitch'
        | 'website'
        | 'custom';
    }

    /**
     * Account store page display configuration.
     */
    export interface StorePageConfig {
      /**
       * Accent color used on the account store page.
       */
      accent_color:
        | 'ruby'
        | 'tomato'
        | 'red'
        | 'crimson'
        | 'pink'
        | 'plum'
        | 'purple'
        | 'violet'
        | 'iris'
        | 'cyan'
        | 'teal'
        | 'jade'
        | 'green'
        | 'grass'
        | 'brown'
        | 'blue'
        | 'orange'
        | 'indigo'
        | 'sky'
        | 'mint'
        | 'yellow'
        | 'amber'
        | 'lime'
        | 'lemon'
        | 'magenta'
        | 'gold'
        | 'bronze'
        | 'gray'
        | null;

      /**
       * Layout used on the account store page.
       */
      layout: 'featured' | 'compact' | null;

      /**
       * Profile presentation used on the account store page.
       */
      profile_variant: 'personal' | 'business' | null;

      /**
       * Whether the account store page shows a Whop affiliate link.
       */
      whop_affiliate_link: boolean;
    }

    /**
     * Account tax/VAT registrations. Empty when none are set.
     */
    export interface TaxIdentifier {
      /**
       * Tax identifier ID.
       */
      id: string;

      /**
       * Tax ID type.
       */
      tax_id_type:
        | 'ad_nrt'
        | 'ao_tin'
        | 'ar_cuit'
        | 'al_tin'
        | 'am_tin'
        | 'aw_tin'
        | 'au_abn'
        | 'au_arn'
        | 'eu_vat'
        | 'az_tin'
        | 'bs_tin'
        | 'bh_vat'
        | 'bd_bin'
        | 'bb_tin'
        | 'by_tin'
        | 'bj_ifu'
        | 'bo_tin'
        | 'ba_tin'
        | 'br_cnpj'
        | 'br_cpf'
        | 'bg_uic'
        | 'bf_ifu'
        | 'kh_tin'
        | 'cm_niu'
        | 'ca_bn'
        | 'ca_gst_hst'
        | 'ca_pst_bc'
        | 'ca_pst_mb'
        | 'ca_pst_sk'
        | 'ca_qst'
        | 'cv_nif'
        | 'cl_tin'
        | 'cn_tin'
        | 'co_nit'
        | 'cd_nif'
        | 'cr_tin'
        | 'hr_oib'
        | 'do_rcn'
        | 'ec_ruc'
        | 'eg_tin'
        | 'sv_nit'
        | 'et_tin'
        | 'eu_oss_vat'
        | 'ge_vat'
        | 'gh_tin'
        | 'de_stn'
        | 'gb_vat'
        | 'gn_nif'
        | 'hk_br'
        | 'hu_tin'
        | 'is_vat'
        | 'in_gst'
        | 'id_npwp'
        | 'il_vat'
        | 'jp_cn'
        | 'jp_rn'
        | 'jp_trn'
        | 'kz_bin'
        | 'ke_pin'
        | 'kg_tin'
        | 'la_tin'
        | 'li_uid'
        | 'li_vat'
        | 'my_frp'
        | 'my_itn'
        | 'my_sst'
        | 'mr_nif'
        | 'mx_rfc'
        | 'md_vat'
        | 'me_pib'
        | 'ma_vat'
        | 'np_pan'
        | 'nz_gst'
        | 'ng_tin'
        | 'mk_vat'
        | 'no_vat'
        | 'no_voec'
        | 'om_vat'
        | 'pe_ruc'
        | 'ph_tin'
        | 'pl_nip'
        | 'ro_tin'
        | 'ru_inn'
        | 'ru_kpp'
        | 'sa_vat'
        | 'sn_ninea'
        | 'rs_pib'
        | 'sg_gst'
        | 'sg_uen'
        | 'si_tin'
        | 'za_vat'
        | 'kr_brn'
        | 'es_cif'
        | 'ch_uid'
        | 'ch_vat'
        | 'tw_vat'
        | 'tj_tin'
        | 'tz_vat'
        | 'th_vat'
        | 'tr_tin'
        | 'ug_tin'
        | 'ua_vat'
        | 'ae_trn'
        | 'us_ein'
        | 'uy_ruc'
        | 'uz_tin'
        | 'uz_vat'
        | 've_rif'
        | 'vn_tin'
        | 'zm_tin'
        | 'zw_tin'
        | 'sr_fin'
        | 'xi_vat';

      /**
       * Tax ID value.
       */
      tax_id_value: string;
    }

    /**
     * The account's terms of service document, or `null` if they have not published
     * one.
     */
    export interface TermsOfService {
      /**
       * The file's ID, prefixed `file_`.
       */
      id: string;

      /**
       * The file's MIME type, e.g. `application/pdf`.
       */
      content_type: string | null;

      /**
       * When the file was created, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * The original filename, including its extension.
       */
      filename: string | null;

      /**
       * The type of this object, always `file`.
       */
      object: string;

      /**
       * The file size in bytes. `null` until the upload has finished.
       */
      size: number | null;

      /**
       * Where the file is in its upload lifecycle.
       */
      upload_status: 'pending' | 'processing' | 'ready' | 'failed';

      /**
       * A URL to download the file: a permanent CDN URL for public files, a signed
       * expiring URL for private ones. `null` until the upload has finished.
       */
      url: string | null;

      /**
       * `public` files are served via an unsigned CDN URL; `private` files via a signed,
       * expiring URL.
       */
      visibility: 'public' | 'private';

      /**
       * The byte size each part (except the last) must be. Present only on create, and
       * only for multipart uploads.
       */
      multipart_chunk_size?: number | null;

      /**
       * The ID of the multipart upload, passed back to `complete`. Present only on
       * create, and only for multipart uploads.
       */
      multipart_upload_id?: string | null;

      multipart_upload_urls?: Array<TermsOfService.MultipartUploadURL> | null;

      /**
       * Headers to send with the upload PUT. Present only on create.
       */
      upload_headers?: unknown;

      /**
       * Presigned URL to PUT the file's bytes to. Present only on create, and only for
       * single-part uploads.
       */
      upload_url?: string | null;
    }

    export namespace TermsOfService {
      /**
       * The presigned URL for each part. Present only on create, and only for multipart
       * uploads.
       */
      export interface MultipartUploadURL {
        /**
         * The 1-based index of this part within the multipart upload.
         */
        part_number: number;

        /**
         * The presigned URL to PUT this part's bytes to.
         */
        url: string;
      }
    }

    /**
     * Account primary crypto wallet, or `null` if none has been provisioned.
     */
    export interface Wallet {
      /**
       * Wallet ID, prefixed `wallet_`.
       */
      id: string;

      /**
       * The on-chain address of the wallet
       */
      address: string;

      /**
       * The blockchain network the wallet lives on
       */
      network: 'solana' | 'ethereum' | 'bitcoin';
    }
  }
}

export interface AdCampaignPaymentFailedWebhookEvent {
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

  data: AdCampaignsAPI.AdCampaign;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'ad_campaign.payment_failed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface CardCanceledWebhookEvent {
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

  data: CardCanceledWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card.canceled';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardCanceledWebhookEvent {
  export interface Data {
    /**
     * Card ID, prefixed `icrd_`.
     */
    id: string;

    /**
     * The billing address.
     */
    billing: Data.Billing | null;

    /**
     * When the card was canceled.
     */
    canceled_at: string | null;

    /**
     * When the card was created.
     */
    created_at: string | null;

    /**
     * Card expiration month.
     */
    expiration_month: string | null;

    /**
     * Card expiration year.
     */
    expiration_year: string | null;

    /**
     * Last four digits of the card number. `null` for pending invitation cards.
     */
    last4: string | null;

    /**
     * The spending limit configuration.
     */
    limit: Data.Limit | null;

    /**
     * Card display name.
     */
    name: string | null;

    object: 'card';

    /**
     * Total spend in the last 30 days, in cents.
     */
    spent_last_month: number | null;

    /**
     * The card status. `denied` means the issuer declined the cardholder, so the card
     * will never be issued.
     */
    status: 'active' | 'frozen' | 'canceled' | 'invited' | 'denied' | null;

    /**
     * The card type.
     */
    type: 'virtual' | 'physical' | null;

    /**
     * Cardholder user ID, prefixed `user_`, when assigned.
     */
    user_id: string | null;

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    secrets?: Data.Secrets | null;
  }

  export namespace Data {
    /**
     * The billing address.
     */
    export interface Billing {
      /**
       * Billing city.
       */
      city: string | null;

      /**
       * Billing country code.
       */
      country_code: string | null;

      /**
       * Street address line 1.
       */
      line1: string | null;

      /**
       * Street address line 2.
       */
      line2: string | null;

      /**
       * Billing postal code.
       */
      postal_code: string | null;

      /**
       * Billing region or state.
       */
      region: string | null;
    }

    /**
     * The spending limit configuration.
     */
    export interface Limit {
      /**
       * The limit amount in dollars.
       */
      amount: number;

      /**
       * The window the limit amount applies to. `per_transaction` caps each individual
       * authorization and is what a limit set with `transaction_limit` reports.
       */
      frequency: 'daily' | 'weekly' | 'monthly' | 'one_time' | 'per_transaction';
    }

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    export interface Secrets {
      /**
       * Full card number.
       */
      card_number: string;

      /**
       * Card verification code.
       */
      cvc: string;

      /**
       * Cardholder name printed on the card.
       */
      name_on_card: string | null;

      /**
       * The card PIN. Only returned when the request is authenticated as the user the
       * card is assigned to; `null` for all other callers, including account API keys.
       */
      pin: string | null;
    }
  }
}

export interface CardCreatedWebhookEvent {
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

  data: CardCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card.created';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardCreatedWebhookEvent {
  export interface Data {
    /**
     * Card ID, prefixed `icrd_`.
     */
    id: string;

    /**
     * The billing address.
     */
    billing: Data.Billing | null;

    /**
     * When the card was canceled.
     */
    canceled_at: string | null;

    /**
     * When the card was created.
     */
    created_at: string | null;

    /**
     * Card expiration month.
     */
    expiration_month: string | null;

    /**
     * Card expiration year.
     */
    expiration_year: string | null;

    /**
     * Last four digits of the card number. `null` for pending invitation cards.
     */
    last4: string | null;

    /**
     * The spending limit configuration.
     */
    limit: Data.Limit | null;

    /**
     * Card display name.
     */
    name: string | null;

    object: 'card';

    /**
     * Total spend in the last 30 days, in cents.
     */
    spent_last_month: number | null;

    /**
     * The card status. `denied` means the issuer declined the cardholder, so the card
     * will never be issued.
     */
    status: 'active' | 'frozen' | 'canceled' | 'invited' | 'denied' | null;

    /**
     * The card type.
     */
    type: 'virtual' | 'physical' | null;

    /**
     * Cardholder user ID, prefixed `user_`, when assigned.
     */
    user_id: string | null;

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    secrets?: Data.Secrets | null;
  }

  export namespace Data {
    /**
     * The billing address.
     */
    export interface Billing {
      /**
       * Billing city.
       */
      city: string | null;

      /**
       * Billing country code.
       */
      country_code: string | null;

      /**
       * Street address line 1.
       */
      line1: string | null;

      /**
       * Street address line 2.
       */
      line2: string | null;

      /**
       * Billing postal code.
       */
      postal_code: string | null;

      /**
       * Billing region or state.
       */
      region: string | null;
    }

    /**
     * The spending limit configuration.
     */
    export interface Limit {
      /**
       * The limit amount in dollars.
       */
      amount: number;

      /**
       * The window the limit amount applies to. `per_transaction` caps each individual
       * authorization and is what a limit set with `transaction_limit` reports.
       */
      frequency: 'daily' | 'weekly' | 'monthly' | 'one_time' | 'per_transaction';
    }

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    export interface Secrets {
      /**
       * Full card number.
       */
      card_number: string;

      /**
       * Card verification code.
       */
      cvc: string;

      /**
       * Cardholder name printed on the card.
       */
      name_on_card: string | null;

      /**
       * The card PIN. Only returned when the request is authenticated as the user the
       * card is assigned to; `null` for all other callers, including account API keys.
       */
      pin: string | null;
    }
  }
}

export interface CardFrozenWebhookEvent {
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

  data: CardFrozenWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card.frozen';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardFrozenWebhookEvent {
  export interface Data {
    /**
     * Card ID, prefixed `icrd_`.
     */
    id: string;

    /**
     * The billing address.
     */
    billing: Data.Billing | null;

    /**
     * When the card was canceled.
     */
    canceled_at: string | null;

    /**
     * When the card was created.
     */
    created_at: string | null;

    /**
     * Card expiration month.
     */
    expiration_month: string | null;

    /**
     * Card expiration year.
     */
    expiration_year: string | null;

    /**
     * Last four digits of the card number. `null` for pending invitation cards.
     */
    last4: string | null;

    /**
     * The spending limit configuration.
     */
    limit: Data.Limit | null;

    /**
     * Card display name.
     */
    name: string | null;

    object: 'card';

    /**
     * Total spend in the last 30 days, in cents.
     */
    spent_last_month: number | null;

    /**
     * The card status. `denied` means the issuer declined the cardholder, so the card
     * will never be issued.
     */
    status: 'active' | 'frozen' | 'canceled' | 'invited' | 'denied' | null;

    /**
     * The card type.
     */
    type: 'virtual' | 'physical' | null;

    /**
     * Cardholder user ID, prefixed `user_`, when assigned.
     */
    user_id: string | null;

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    secrets?: Data.Secrets | null;
  }

  export namespace Data {
    /**
     * The billing address.
     */
    export interface Billing {
      /**
       * Billing city.
       */
      city: string | null;

      /**
       * Billing country code.
       */
      country_code: string | null;

      /**
       * Street address line 1.
       */
      line1: string | null;

      /**
       * Street address line 2.
       */
      line2: string | null;

      /**
       * Billing postal code.
       */
      postal_code: string | null;

      /**
       * Billing region or state.
       */
      region: string | null;
    }

    /**
     * The spending limit configuration.
     */
    export interface Limit {
      /**
       * The limit amount in dollars.
       */
      amount: number;

      /**
       * The window the limit amount applies to. `per_transaction` caps each individual
       * authorization and is what a limit set with `transaction_limit` reports.
       */
      frequency: 'daily' | 'weekly' | 'monthly' | 'one_time' | 'per_transaction';
    }

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    export interface Secrets {
      /**
       * Full card number.
       */
      card_number: string;

      /**
       * Card verification code.
       */
      cvc: string;

      /**
       * Cardholder name printed on the card.
       */
      name_on_card: string | null;

      /**
       * The card PIN. Only returned when the request is authenticated as the user the
       * card is assigned to; `null` for all other callers, including account API keys.
       */
      pin: string | null;
    }
  }
}

export interface CardUpdatedWebhookEvent {
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

  data: CardUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardUpdatedWebhookEvent {
  export interface Data {
    /**
     * Card ID, prefixed `icrd_`.
     */
    id: string;

    /**
     * The billing address.
     */
    billing: Data.Billing | null;

    /**
     * When the card was canceled.
     */
    canceled_at: string | null;

    /**
     * When the card was created.
     */
    created_at: string | null;

    /**
     * Card expiration month.
     */
    expiration_month: string | null;

    /**
     * Card expiration year.
     */
    expiration_year: string | null;

    /**
     * Last four digits of the card number. `null` for pending invitation cards.
     */
    last4: string | null;

    /**
     * The spending limit configuration.
     */
    limit: Data.Limit | null;

    /**
     * Card display name.
     */
    name: string | null;

    object: 'card';

    /**
     * Total spend in the last 30 days, in cents.
     */
    spent_last_month: number | null;

    /**
     * The card status. `denied` means the issuer declined the cardholder, so the card
     * will never be issued.
     */
    status: 'active' | 'frozen' | 'canceled' | 'invited' | 'denied' | null;

    /**
     * The card type.
     */
    type: 'virtual' | 'physical' | null;

    /**
     * Cardholder user ID, prefixed `user_`, when assigned.
     */
    user_id: string | null;

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    secrets?: Data.Secrets | null;
  }

  export namespace Data {
    /**
     * The billing address.
     */
    export interface Billing {
      /**
       * Billing city.
       */
      city: string | null;

      /**
       * Billing country code.
       */
      country_code: string | null;

      /**
       * Street address line 1.
       */
      line1: string | null;

      /**
       * Street address line 2.
       */
      line2: string | null;

      /**
       * Billing postal code.
       */
      postal_code: string | null;

      /**
       * Billing region or state.
       */
      region: string | null;
    }

    /**
     * The spending limit configuration.
     */
    export interface Limit {
      /**
       * The limit amount in dollars.
       */
      amount: number;

      /**
       * The window the limit amount applies to. `per_transaction` caps each individual
       * authorization and is what a limit set with `transaction_limit` reports.
       */
      frequency: 'daily' | 'weekly' | 'monthly' | 'one_time' | 'per_transaction';
    }

    /**
     * Sensitive card details. Present only on `GET /cards/:id` for active cards;
     * `null` when the card is inactive or details cannot be retrieved.
     */
    export interface Secrets {
      /**
       * Full card number.
       */
      card_number: string;

      /**
       * Card verification code.
       */
      cvc: string;

      /**
       * Cardholder name printed on the card.
       */
      name_on_card: string | null;

      /**
       * The card PIN. Only returned when the request is authenticated as the user the
       * card is assigned to; `null` for all other callers, including account API keys.
       */
      pin: string | null;
    }
  }
}

export interface CardApplicationApprovedWebhookEvent {
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

  data: CardApplicationApprovedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_application.approved';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardApplicationApprovedWebhookEvent {
  export interface Data {
    /**
     * Card application ID, prefixed `ciac_`.
     */
    id: string;

    /**
     * URL where the applicant completes additional identity verification.
     */
    hosted_url: string | null;

    object: 'card_application';

    /**
     * The application status.
     */
    status:
      | 'approved'
      | 'pending'
      | 'manual_review'
      | 'denied'
      | 'locked'
      | 'canceled'
      | 'needs_verification'
      | 'needs_information';
  }
}

export interface CardApplicationCreatedWebhookEvent {
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

  data: CardApplicationCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_application.created';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardApplicationCreatedWebhookEvent {
  export interface Data {
    /**
     * Card application ID, prefixed `ciac_`.
     */
    id: string;

    /**
     * URL where the applicant completes additional identity verification.
     */
    hosted_url: string | null;

    object: 'card_application';

    /**
     * The application status.
     */
    status:
      | 'approved'
      | 'pending'
      | 'manual_review'
      | 'denied'
      | 'locked'
      | 'canceled'
      | 'needs_verification'
      | 'needs_information';
  }
}

export interface CardApplicationDeniedWebhookEvent {
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

  data: CardApplicationDeniedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_application.denied';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardApplicationDeniedWebhookEvent {
  export interface Data {
    /**
     * Card application ID, prefixed `ciac_`.
     */
    id: string;

    /**
     * URL where the applicant completes additional identity verification.
     */
    hosted_url: string | null;

    object: 'card_application';

    /**
     * The application status.
     */
    status:
      | 'approved'
      | 'pending'
      | 'manual_review'
      | 'denied'
      | 'locked'
      | 'canceled'
      | 'needs_verification'
      | 'needs_information';
  }
}

export interface CardApplicationUpdatedWebhookEvent {
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

  data: CardApplicationUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'card_application.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardApplicationUpdatedWebhookEvent {
  export interface Data {
    /**
     * Card application ID, prefixed `ciac_`.
     */
    id: string;

    /**
     * URL where the applicant completes additional identity verification.
     */
    hosted_url: string | null;

    object: 'card_application';

    /**
     * The application status.
     */
    status:
      | 'approved'
      | 'pending'
      | 'manual_review'
      | 'denied'
      | 'locked'
      | 'canceled'
      | 'needs_verification'
      | 'needs_information';
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardTransactionCompletedWebhookEvent {
  export interface Data {
    /**
     * Card transaction ID, prefixed `citx_`.
     */
    id: string;

    /**
     * The card this transaction was charged to, prefixed `icrd_`.
     */
    card_id: string;

    /**
     * The user the card is assigned to, prefixed `user_`. Null when the card has no
     * assigned cardholder.
     */
    cardholder_id: string | null;

    /**
     * Cashback earned on this transaction as a USD amount. Zero for declined or
     * ineligible transactions, and null when cashback has not been computed yet.
     */
    cashback_usd_amount: number | null;

    /**
     * When the transaction was authorized, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * ISO 4217 currency code the merchant charged in.
     */
    currency: string | null;

    /**
     * Why the transaction was declined. Null unless `status` is `declined`.
     */
    declined_reason: string | null;

    /**
     * True when the merchant is outside the card's home country.
     */
    international: boolean;

    /**
     * Amount the merchant charged in their own currency. Pair with `currency`.
     */
    local_amount: number | null;

    /**
     * Merchant category label, enriched where available and otherwise as the card
     * network reported it.
     */
    merchant_category: string | null;

    /**
     * Four-digit ISO 18245 merchant category code (MCC).
     */
    merchant_category_code: string | null;

    /**
     * URL of the enriched merchant logo. Null when no logo was matched.
     */
    merchant_icon_url: string | null;

    /**
     * Merchant name, enriched where available and otherwise as the card network
     * reported it.
     */
    merchant_name: string | null;

    /**
     * When the card network settled the transaction, as an ISO 8601 timestamp. Null
     * until it settles.
     */
    posted_at: string | null;

    /**
     * Current status of the transaction.
     */
    status: 'pending' | 'completed' | 'reversed' | 'declined';

    /**
     * The kind of card transaction. Always `spend` today.
     */
    transaction_type: 'spend';

    /**
     * Amount charged in USD. Negative when the merchant refunded the card.
     */
    usd_amount: number | null;
  }
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardTransactionCreatedWebhookEvent {
  export interface Data {
    /**
     * Card transaction ID, prefixed `citx_`.
     */
    id: string;

    /**
     * The card this transaction was charged to, prefixed `icrd_`.
     */
    card_id: string;

    /**
     * The user the card is assigned to, prefixed `user_`. Null when the card has no
     * assigned cardholder.
     */
    cardholder_id: string | null;

    /**
     * Cashback earned on this transaction as a USD amount. Zero for declined or
     * ineligible transactions, and null when cashback has not been computed yet.
     */
    cashback_usd_amount: number | null;

    /**
     * When the transaction was authorized, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * ISO 4217 currency code the merchant charged in.
     */
    currency: string | null;

    /**
     * Why the transaction was declined. Null unless `status` is `declined`.
     */
    declined_reason: string | null;

    /**
     * True when the merchant is outside the card's home country.
     */
    international: boolean;

    /**
     * Amount the merchant charged in their own currency. Pair with `currency`.
     */
    local_amount: number | null;

    /**
     * Merchant category label, enriched where available and otherwise as the card
     * network reported it.
     */
    merchant_category: string | null;

    /**
     * Four-digit ISO 18245 merchant category code (MCC).
     */
    merchant_category_code: string | null;

    /**
     * URL of the enriched merchant logo. Null when no logo was matched.
     */
    merchant_icon_url: string | null;

    /**
     * Merchant name, enriched where available and otherwise as the card network
     * reported it.
     */
    merchant_name: string | null;

    /**
     * When the card network settled the transaction, as an ISO 8601 timestamp. Null
     * until it settles.
     */
    posted_at: string | null;

    /**
     * Current status of the transaction.
     */
    status: 'pending' | 'completed' | 'reversed' | 'declined';

    /**
     * The kind of card transaction. Always `spend` today.
     */
    transaction_type: 'spend';

    /**
     * Amount charged in USD. Negative when the merchant refunded the card.
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardTransactionDeclinedWebhookEvent {
  export interface Data {
    /**
     * Card transaction ID, prefixed `citx_`.
     */
    id: string;

    /**
     * The card this transaction was charged to, prefixed `icrd_`.
     */
    card_id: string;

    /**
     * The user the card is assigned to, prefixed `user_`. Null when the card has no
     * assigned cardholder.
     */
    cardholder_id: string | null;

    /**
     * Cashback earned on this transaction as a USD amount. Zero for declined or
     * ineligible transactions, and null when cashback has not been computed yet.
     */
    cashback_usd_amount: number | null;

    /**
     * When the transaction was authorized, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * ISO 4217 currency code the merchant charged in.
     */
    currency: string | null;

    /**
     * Why the transaction was declined. Null unless `status` is `declined`.
     */
    declined_reason: string | null;

    /**
     * True when the merchant is outside the card's home country.
     */
    international: boolean;

    /**
     * Amount the merchant charged in their own currency. Pair with `currency`.
     */
    local_amount: number | null;

    /**
     * Merchant category label, enriched where available and otherwise as the card
     * network reported it.
     */
    merchant_category: string | null;

    /**
     * Four-digit ISO 18245 merchant category code (MCC).
     */
    merchant_category_code: string | null;

    /**
     * URL of the enriched merchant logo. Null when no logo was matched.
     */
    merchant_icon_url: string | null;

    /**
     * Merchant name, enriched where available and otherwise as the card network
     * reported it.
     */
    merchant_name: string | null;

    /**
     * When the card network settled the transaction, as an ISO 8601 timestamp. Null
     * until it settles.
     */
    posted_at: string | null;

    /**
     * Current status of the transaction.
     */
    status: 'pending' | 'completed' | 'reversed' | 'declined';

    /**
     * The kind of card transaction. Always `spend` today.
     */
    transaction_type: 'spend';

    /**
     * Amount charged in USD. Negative when the merchant refunded the card.
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardTransactionReversedWebhookEvent {
  export interface Data {
    /**
     * Card transaction ID, prefixed `citx_`.
     */
    id: string;

    /**
     * The card this transaction was charged to, prefixed `icrd_`.
     */
    card_id: string;

    /**
     * The user the card is assigned to, prefixed `user_`. Null when the card has no
     * assigned cardholder.
     */
    cardholder_id: string | null;

    /**
     * Cashback earned on this transaction as a USD amount. Zero for declined or
     * ineligible transactions, and null when cashback has not been computed yet.
     */
    cashback_usd_amount: number | null;

    /**
     * When the transaction was authorized, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * ISO 4217 currency code the merchant charged in.
     */
    currency: string | null;

    /**
     * Why the transaction was declined. Null unless `status` is `declined`.
     */
    declined_reason: string | null;

    /**
     * True when the merchant is outside the card's home country.
     */
    international: boolean;

    /**
     * Amount the merchant charged in their own currency. Pair with `currency`.
     */
    local_amount: number | null;

    /**
     * Merchant category label, enriched where available and otherwise as the card
     * network reported it.
     */
    merchant_category: string | null;

    /**
     * Four-digit ISO 18245 merchant category code (MCC).
     */
    merchant_category_code: string | null;

    /**
     * URL of the enriched merchant logo. Null when no logo was matched.
     */
    merchant_icon_url: string | null;

    /**
     * Merchant name, enriched where available and otherwise as the card network
     * reported it.
     */
    merchant_name: string | null;

    /**
     * When the card network settled the transaction, as an ISO 8601 timestamp. Null
     * until it settles.
     */
    posted_at: string | null;

    /**
     * Current status of the transaction.
     */
    status: 'pending' | 'completed' | 'reversed' | 'declined';

    /**
     * The kind of card transaction. Always `spend` today.
     */
    transaction_type: 'spend';

    /**
     * Amount charged in USD. Negative when the merchant refunded the card.
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace CardTransactionUpdatedWebhookEvent {
  export interface Data {
    /**
     * Card transaction ID, prefixed `citx_`.
     */
    id: string;

    /**
     * The card this transaction was charged to, prefixed `icrd_`.
     */
    card_id: string;

    /**
     * The user the card is assigned to, prefixed `user_`. Null when the card has no
     * assigned cardholder.
     */
    cardholder_id: string | null;

    /**
     * Cashback earned on this transaction as a USD amount. Zero for declined or
     * ineligible transactions, and null when cashback has not been computed yet.
     */
    cashback_usd_amount: number | null;

    /**
     * When the transaction was authorized, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * ISO 4217 currency code the merchant charged in.
     */
    currency: string | null;

    /**
     * Why the transaction was declined. Null unless `status` is `declined`.
     */
    declined_reason: string | null;

    /**
     * True when the merchant is outside the card's home country.
     */
    international: boolean;

    /**
     * Amount the merchant charged in their own currency. Pair with `currency`.
     */
    local_amount: number | null;

    /**
     * Merchant category label, enriched where available and otherwise as the card
     * network reported it.
     */
    merchant_category: string | null;

    /**
     * Four-digit ISO 18245 merchant category code (MCC).
     */
    merchant_category_code: string | null;

    /**
     * URL of the enriched merchant logo. Null when no logo was matched.
     */
    merchant_icon_url: string | null;

    /**
     * Merchant name, enriched where available and otherwise as the card network
     * reported it.
     */
    merchant_name: string | null;

    /**
     * When the card network settled the transaction, as an ISO 8601 timestamp. Null
     * until it settles.
     */
    posted_at: string | null;

    /**
     * Current status of the transaction.
     */
    status: 'pending' | 'completed' | 'reversed' | 'declined';

    /**
     * The kind of card transaction. Always `spend` today.
     */
    transaction_type: 'spend';

    /**
     * Amount charged in USD. Negative when the merchant refunded the card.
     */
    usd_amount: number | null;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface DepositSucceededWebhookEvent {
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

  data: DepositSucceededWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'deposit.succeeded';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace DepositSucceededWebhookEvent {
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
     * (payments, top-ups, incoming transfers/affiliate); null on payouts, refunds,
     * disputes and on-chain rows. The available_after/before filters window on its UTC
     * settlement date.
     */
    available_at: string | null;

    /**
     * Currency for this ledger activity.
     */
    currency: Data.Currency;

    /**
     * The ledger line category this activity was posted under.
     */
    line_type:
      | 'ad_budget_release'
      | 'ad_campaign_budget'
      | 'ad_publisher_payout'
      | 'ad_publisher_payout_received'
      | 'ad_spend_charge'
      | 'affiliate_fee'
      | 'airdrop'
      | 'airdrop_link_created'
      | 'airdrop_link_redeemed'
      | 'airdrop_link_returned'
      | 'airdrop_reversal'
      | 'application_fee'
      | 'application_fee_payout'
      | 'balance_reservation'
      | 'balance_reservation_reversal'
      | 'bank_transfer'
      | 'billing_percentage_fee'
      | 'buyer_fee'
      | 'card_interchange'
      | 'card_load_deposit'
      | 'card_load_transfer'
      | 'card_spend_authorization'
      | 'card_spend_authorization_void'
      | 'card_spend_refund'
      | 'card_unload_deposit'
      | 'card_unload_transfer'
      | 'company_referral'
      | 'connected_account_negative_balance'
      | 'cross_border_percentage_fee'
      | 'currency_conversion_incoming'
      | 'currency_conversion_outgoing'
      | 'dispute_alert_fee'
      | 'dispute_hold_adjustment'
      | 'dispute_representment_fee'
      | 'external_card_load_deposit'
      | 'fraud_prevention_fee'
      | 'fx_percentage_fee'
      | 'high_risk_merchant_fee'
      | 'installment_default'
      | 'internal_balance_transfer_incoming'
      | 'internal_balance_transfer_outgoing'
      | 'internal_withdrawal'
      | 'internal_withdrawal_complete'
      | 'internal_withdrawal_fee'
      | 'internal_withdrawal_fee_reversal'
      | 'internal_withdrawal_in_transit'
      | 'internal_withdrawal_in_transit_reversal'
      | 'internal_withdrawal_markup_fee'
      | 'internal_withdrawal_markup_fee_payout'
      | 'internal_withdrawal_markup_fee_payout_reversal'
      | 'internal_withdrawal_markup_fee_reversal'
      | 'internal_withdrawal_reversal'
      | 'legacy_crypto_payment'
      | 'legacy_payment'
      | 'legacy_payment_refund'
      | 'license_sale'
      | 'license_sale_commission'
      | 'license_sale_revenue'
      | 'marketplace_affiliate_fee'
      | 'misc_purchase'
      | 'misc_refund'
      | 'misc_reversal'
      | 'onchain_deposit'
      | 'onchain_swap_source'
      | 'onchain_swap_target'
      | 'onchain_wallet_transfer_incoming'
      | 'onchain_wallet_transfer_outgoing'
      | 'onchain_withdrawal'
      | 'orchestration_percentage_fee'
      | 'passthrough_gmv'
      | 'payment_dispute'
      | 'payment_dispute_adjustment'
      | 'payment_dispute_fee'
      | 'payment_dispute_reversal'
      | 'payment_gross'
      | 'payment_gross_reversal'
      | 'payment_processing_fixed_fee'
      | 'payment_processing_percentage_fee'
      | 'payment_referral'
      | 'payment_referral_refund'
      | 'payment_referral_reversal'
      | 'payment_refund'
      | 'payment_refund_reversal'
      | 'payment_revshare'
      | 'payment_revshare_payout'
      | 'payment_revshare_refund'
      | 'payment_revshare_reversal'
      | 'payout_fee'
      | 'platform_affiliate_payment'
      | 'platform_affiliate_payment_reversal'
      | 'platform_balance_payment'
      | 'platform_balance_payment_refund'
      | 'platform_balance_transfer_fee'
      | 'platform_balance_transfer_incoming'
      | 'platform_balance_transfer_outgoing'
      | 'platform_covered_dispute'
      | 'platform_earning'
      | 'promo_reversal'
      | 'referral_bonus'
      | 'resolution_center_refund'
      | 'revshare_percentage_fee'
      | 'sales_tax_fee'
      | 'sales_tax_remittance'
      | 'sales_tax_remittance_reversal'
      | 'software_rental_revshare'
      | 'software_rental_transaction'
      | 'stripe_domestic_processing_fee'
      | 'stripe_international_processing_fee'
      | 'swap_fee'
      | 'three_ds_fixed_fee'
      | 'topup'
      | 'topup_fee'
      | 'topup_reversal'
      | 'treasury_payin'
      | 'whop_processing_fee'
      | 'withdrawal'
      | 'withdrawal_clawback'
      | 'withdrawal_clawback_reversal'
      | 'withdrawal_fee'
      | 'withdrawal_fee_reversal'
      | 'withdrawal_markup_fee'
      | 'withdrawal_markup_fee_payout'
      | 'withdrawal_markup_fee_payout_reversal'
      | 'withdrawal_markup_fee_reversal'
      | 'withdrawal_reclassification'
      | 'withdrawal_reversal'
      | 'withdrawal_topup_adjustment';

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

    /**
     * Payment related to this ledger activity. Included when rich resource hydration
     * is enabled and the movement is tied to a payment.
     */
    payment?: Data.Payment | null;

    /**
     * Payment ID for any payment-related activity, including refunds and disputes.
     */
    payment_id?: string | null;

    /**
     * ID of the plan associated with the payment, when applicable.
     */
    plan_id?: string | null;

    /**
     * Name of the plan associated with the payment, when applicable.
     */
    plan_name?: string | null;

    /**
     * ID of the product associated with the payment, when applicable.
     */
    product_id?: string | null;

    /**
     * Name of the product associated with the payment, when applicable.
     */
    product_name?: string | null;

    /**
     * Email of the customer associated with the payment. Requires member:email:read.
     */
    user_email?: string | null;

    /**
     * ID of the customer associated with the payment.
     */
    user_id?: string | null;

    /**
     * Display name of the customer associated with the payment.
     */
    user_name?: string | null;
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
       * Payout amount as a decimal number in the destination currency (payout sources
       * only; requires payout:withdrawal:read).
       */
      amount_float?: number | null;

      /**
       * Card brand used by the payment source.
       */
      card_brand?: string | null;

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
       * Payout creation time as an ISO 8601 timestamp (payout sources only; requires
       * payout:withdrawal:read).
       */
      created_at?: string | null;

      /**
       * Estimated arrival as an ISO 8601 timestamp (payout sources only; requires
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
       * Name of the entity processing the payout (payout sources only; requires
       * payout:withdrawal:read).
       */
      payer_name?: string | null;

      /**
       * Total charged by the payment source.
       */
      payment_amount?: Source.PaymentAmount | null;

      /**
       * Payment method used by the payment source.
       */
      payment_method_type?: string | null;

      /**
       * Processor used by the payment source.
       */
      payment_processor?: string | null;

      /**
       * Payout destination display info (payout sources only).
       */
      payout_destination?: Source.PayoutDestination | null;

      /**
       * Saved payout destination nickname (payout sources only).
       */
      payout_token_nickname?: string | null;

      /**
       * Why the activity happened. On transfer sources this is the transfer reason, for
       * example pool_top_up or bounty_return. On payout sources it explains why the
       * payout was canceled, denied, or failed (requires payout:withdrawal:read); null
       * while the payout is progressing normally.
       */
      reason?: string | null;

      /**
       * Whether this payout is currently held for manual risk review (payout sources
       * only; requires payout:withdrawal:read).
       */
      risk_review_hold?: boolean | null;

      /**
       * Sender wallet address or onramp provider identifier (onchain_transaction sources
       * only).
       */
      sender_address?: string | null;

      /**
       * Lifecycle status. On payout sources this is the payout status (requires
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
       * Total charged by the payment source.
       */
      export interface PaymentAmount {
        /**
         * The amount in major units, as an exact decimal string — `"10.00"` is ten
         * dollars. A string so no float rounds it in transit.
         */
        amount: string;

        /**
         * Three-letter ISO 4217 currency code, lowercase.
         */
        currency: string;

        /**
         * How many decimal places the amount CARRIES — the precision the charge itself
         * runs at.
         */
        decimals: number;

        /**
         * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
         * not always: COP is charged in centavos but written in whole pesos, so it is `2`
         * and `0`. Format the number in your own locale using this.
         */
        display_decimals: number;
      }

      /**
       * Payout destination display info (payout sources only).
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

    /**
     * Payment related to this ledger activity. Included when rich resource hydration
     * is enabled and the movement is tied to a payment.
     */
    export interface Payment {
      /**
       * Payment ID, prefixed `pay_`.
       */
      id: string;

      /**
       * Total charged by the payment.
       */
      amount: Payment.Amount | null;

      /**
       * Card brand, when the customer paid by card.
       */
      card_brand: string | null;

      /**
       * Last four digits of the card, when the customer paid by card.
       */
      card_last4: string | null;

      /**
       * When the payment was created.
       */
      created_at: string;

      object: 'payment';

      /**
       * How the customer paid, such as `card` or `paypal`.
       */
      payment_method_type: string | null;

      /**
       * Processor that handled the payment, such as `stripe`.
       */
      payment_processor: string | null;

      /**
       * Plan associated with the payment, when applicable.
       */
      plan: Payment.Plan | null;

      /**
       * Product associated with the payment, when applicable.
       */
      product: Payment.Product | null;

      /**
       * Customer associated with the payment. Email requires member:email:read.
       */
      user: Payment.User | null;
    }

    export namespace Payment {
      /**
       * Total charged by the payment.
       */
      export interface Amount {
        /**
         * The amount in major units, as an exact decimal string — `"10.00"` is ten
         * dollars. A string so no float rounds it in transit.
         */
        amount: string;

        /**
         * Three-letter ISO 4217 currency code, lowercase.
         */
        currency: string;

        /**
         * How many decimal places the amount CARRIES — the precision the charge itself
         * runs at.
         */
        decimals: number;

        /**
         * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
         * not always: COP is charged in centavos but written in whole pesos, so it is `2`
         * and `0`. Format the number in your own locale using this.
         */
        display_decimals: number;
      }

      /**
       * Plan associated with the payment, when applicable.
       */
      export interface Plan {
        /**
         * Plan ID, prefixed `plan_`.
         */
        id: string;

        /**
         * Plan name.
         */
        name: string | null;
      }

      /**
       * Product associated with the payment, when applicable.
       */
      export interface Product {
        /**
         * Product ID, prefixed `prod_`.
         */
        id: string;

        /**
         * Product name.
         */
        name: string;
      }

      /**
       * Customer associated with the payment. Email requires member:email:read.
       */
      export interface User {
        /**
         * Customer ID, prefixed `user_`.
         */
        id: string;

        /**
         * Customer email, or null without member:email:read.
         */
        email: string | null;

        /**
         * Customer display name.
         */
        name: string;
      }
    }
  }
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace DisputeAlertCreatedWebhookEvent {
  export interface Data {
    /**
     * Dispute alert ID, prefixed `dspa_`.
     */
    id: string;

    /**
     * The account the alerted payment belongs to, prefixed `biz_`. `null` while the
     * alert is unmatched.
     */
    account_id: string | null;

    /**
     * Whether refunding the payment can still avoid a chargeback. `false` once the
     * payment has been disputed or fully refunded, or when the alert could not be
     * matched to a payment — `not_actionable_reason` says which.
     */
    actionable: boolean;

    /**
     * The alerted amount, in whole units of `currency`. This is what the issuer
     * reported, which can differ from the payment's own amount.
     */
    amount: number;

    /**
     * The card network as reported by the issuer, lowercased, such as `visa` or
     * `mastercard`. `unknown` when the report carries neither a network nor a
     * recognizable BIN.
     */
    card_brand: string | null;

    /**
     * When Whop received the alert, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * Three-letter ISO currency code of the alerted amount.
     */
    currency: string;

    /**
     * Whether Whop charged the account an alert fee for this one. Always `false` for
     * `early_fraud_warning`, which Whop is not billed for and never passes on.
     */
    fee_charged: boolean;

    /**
     * Name of the bank that issued the card and filed the report.
     */
    issuer: string | null;

    /**
     * Why refunding can no longer avoid a chargeback. `network_resolved` when a Visa
     * RDR already closed the case, `payment_unmatched` when no payment matched,
     * `payment_not_captured` when it never captured money, `payment_disputed` once the
     * payment carries a dispute, `payment_refunded` once fully refunded. `null` while
     * `actionable` is true.
     */
    not_actionable_reason:
      | 'network_resolved'
      | 'payment_unmatched'
      | 'payment_not_captured'
      | 'payment_disputed'
      | 'payment_refunded'
      | null;

    /**
     * The payment the issuer reported, prefixed `pay_`. `null` when Whop could not
     * match the report to a payment.
     */
    payment_id: string | null;

    /**
     * The product the alerted payment was for, prefixed `prod_`.
     */
    product_id: string | null;

    /**
     * When the issuer filed the report, as an ISO 8601 timestamp. Earlier than
     * `created_at`, which is when Whop received it.
     */
    reported_at: string;

    /**
     * When the reported transaction was made, as an ISO 8601 timestamp.
     */
    transaction_at: string | null;

    /**
     * What the issuer sent. `early_fraud_warning` is a fraud report on a settled
     * payment (Visa TC40 / Mastercard SAFE) — refunding still avoids the chargeback,
     * and Whop never charges a fee for one. `dispute_alert` is a pre-dispute notice
     * from the issuer's alert network, which Whop pays for and passes on as a fee.
     * `rapid_dispute_resolution` is a Visa RDR case the network already closed by
     * refunding the payment — nothing is left to act on.
     */
    type: 'early_fraud_warning' | 'dispute_alert' | 'rapid_dispute_resolution';

    /**
     * When the alert was last changed, as an ISO 8601 timestamp.
     */
    updated_at: string;
  }
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface ExportCompletedWebhookEvent {
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

  data: ExportCompletedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'export.completed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace ExportCompletedWebhookEvent {
  export interface Data {
    /**
     * Export ID, prefixed `exprt_`.
     */
    id: string;

    /**
     * When the export was requested, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * A short-lived link to download the finished file. `null` until `status` is
     * `completed`, and again once the export has expired.
     */
    download_url: string | null;

    /**
     * When the file is deleted and the export moves to `expired`, as an ISO 8601
     * timestamp. Exports are retained for 30 days.
     */
    expires_at: string;

    /**
     * Estimated completion percentage from 0 to 100.
     */
    progress_percent: number | null;

    /**
     * The resource that was exported, e.g. `receipts`, `members`, or `payouts`.
     */
    resource:
      | 'ad_campaigns'
      | 'ad_groups'
      | 'ads'
      | 'apps'
      | 'audiences'
      | 'bounties'
      | 'bounty_submissions'
      | 'card_transactions'
      | 'checkout_configurations'
      | 'disputes'
      | 'events'
      | 'financial-activity'
      | 'payout_methods'
      | 'payouts'
      | 'people'
      | 'plans'
      | 'products'
      | 'resolution_center_cases'
      | 'shipments'
      | 'social_accounts'
      | 'team_members'
      | 'transfers'
      | 'webhooks'
      | 'members'
      | 'receipts'
      | 'unclaimed_memberships'
      | 'memberships'
      | 'tracking_links'
      | 'promo_codes'
      | 'resolutions'
      | 'entries'
      | 'leads'
      | 'content_rewards_submissions'
      | 'invoices'
      | 'cancelation_reasons'
      | 'child_companies'
      | 'ledger_lines'
      | 'withdrawal_lines';

    /**
     * `pending` or `processing` while the file is generated, `completed` when the
     * download is ready, `failed` if it errored, `expired` once the file has been
     * deleted.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'expired';

    /**
     * When the export last changed, as an ISO 8601 timestamp.
     */
    updated_at: string;
  }
}

export interface ExportFailedWebhookEvent {
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

  data: ExportFailedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'export.failed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace ExportFailedWebhookEvent {
  export interface Data {
    /**
     * Export ID, prefixed `exprt_`.
     */
    id: string;

    /**
     * When the export was requested, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * A short-lived link to download the finished file. `null` until `status` is
     * `completed`, and again once the export has expired.
     */
    download_url: string | null;

    /**
     * When the file is deleted and the export moves to `expired`, as an ISO 8601
     * timestamp. Exports are retained for 30 days.
     */
    expires_at: string;

    /**
     * Estimated completion percentage from 0 to 100.
     */
    progress_percent: number | null;

    /**
     * The resource that was exported, e.g. `receipts`, `members`, or `payouts`.
     */
    resource:
      | 'ad_campaigns'
      | 'ad_groups'
      | 'ads'
      | 'apps'
      | 'audiences'
      | 'bounties'
      | 'bounty_submissions'
      | 'card_transactions'
      | 'checkout_configurations'
      | 'disputes'
      | 'events'
      | 'financial-activity'
      | 'payout_methods'
      | 'payouts'
      | 'people'
      | 'plans'
      | 'products'
      | 'resolution_center_cases'
      | 'shipments'
      | 'social_accounts'
      | 'team_members'
      | 'transfers'
      | 'webhooks'
      | 'members'
      | 'receipts'
      | 'unclaimed_memberships'
      | 'memberships'
      | 'tracking_links'
      | 'promo_codes'
      | 'resolutions'
      | 'entries'
      | 'leads'
      | 'content_rewards_submissions'
      | 'invoices'
      | 'cancelation_reasons'
      | 'child_companies'
      | 'ledger_lines'
      | 'withdrawal_lines';

    /**
     * `pending` or `processing` while the file is generated, `completed` when the
     * download is ready, `failed` if it errored, `expired` once the file has been
     * deleted.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'expired';

    /**
     * When the export last changed, as an ISO 8601 timestamp.
     */
    updated_at: string;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace IdentityProfileUpdatedWebhookEvent {
  export interface Data {
    /**
     * The identity profile id (`idpf_`). Re-fetch `GET /verifications` for its current
     * state.
     */
    id: string;
  }
}

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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
       * The granular calculated statuses reflecting payout account KYC and payout
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace MemberCreatedWebhookEvent {
  export interface Data {
    /**
     * Member ID, prefixed `mber_`.
     */
    id: string;

    /**
     * What the member can reach on the account: `customer` for paying members, `admin`
     * for team members, `no_access` once every grant has lapsed.
     */
    access_level: 'no_access' | 'admin' | 'customer';

    /**
     * The account this member belongs to, prefixed `biz_`.
     */
    account_id: string;

    /**
     * When the member record was created, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * When the member first joined the account, as an ISO 8601 timestamp.
     */
    joined_at: string;

    /**
     * When the member last opened the account's content, as an ISO 8601 timestamp.
     * `null` if they never have.
     */
    last_accessed_at: string | null;

    /**
     * The member's phone number, or `null`. Their account number when they have shared
     * one with this seller; otherwise the most recent number collected (or verified)
     * at checkout.
     */
    phone_number: string | null;

    /**
     * `joined` while the member is part of the account, `left` after they leave.
     */
    status: 'joined' | 'left';

    /**
     * The member's current token balance for this account, computed from token
     * transactions.
     */
    token_balance: number;

    /**
     * The user behind this member. `null` when the buyer is another business rather
     * than a person.
     */
    user: Data.User | null;
  }

  export namespace Data {
    /**
     * The user behind this member. `null` when the buyer is another business rather
     * than a person.
     */
    export interface User {
      /**
       * User ID, prefixed `user_`.
       */
      id: string;

      /**
       * Display name.
       */
      name: string | null;

      /**
       * Avatar wrapper; its `url` is always present, using a generated placeholder when
       * the user set no picture.
       */
      profile_picture: User.ProfilePicture;

      /**
       * Public username.
       */
      username: string;
    }

    export namespace User {
      /**
       * Avatar wrapper; its `url` is always present, using a generated placeholder when
       * the user set no picture.
       */
      export interface ProfilePicture {
        /**
         * Avatar image URL. Always present — a generated placeholder when the user set no
         * picture.
         */
        url: string;
      }
    }
  }
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface PaymentAuthorizedWebhookEvent {
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
  type: 'payment.authorized';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface PaymentCanceledWebhookEvent {
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
  type: 'payment.canceled';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface PayoutCreatedWebhookEvent {
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

  data: PayoutCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payout.created';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace PayoutCreatedWebhookEvent {
  export interface Data {
    /**
     * Payout ID, prefixed `wdrl_`.
     */
    id: string;

    /**
     * The payout amount in whole currency units, as a decimal string.
     */
    amount: string;

    /**
     * When the payout was created.
     */
    created_at: string;

    /**
     * Payout currency.
     */
    currency: string;

    /**
     * The amount delivered in the destination currency, as a decimal string. Assigned
     * when the payout is processed, so it is `null` before then and on payouts without
     * a recorded conversion.
     */
    destination_amount: string | null;

    /**
     * Currency the funds are delivered in, taken from the payout method when the
     * payout is created. On a stablecoin payout it follows the settlement payout
     * minted alongside it — the `GET /payouts` row carrying this payout's id as
     * `payout_request_id` — and is `null` only when no settlement payout exists.
     */
    destination_currency: string | null;

    /**
     * Estimated time the funds become available in the destination account.
     */
    estimated_arrival: string | null;

    /**
     * Exchange rate from the payout currency to the destination currency. Assigned
     * when the payout is processed, so it is `null` before then and on payouts without
     * a recorded rate.
     */
    exchange_rate: number | null;

    /**
     * Why the payout ended without paying, or why it reversed after settlement.
     * Present on failed, canceled, denied, and reversed payouts; `null` otherwise.
     */
    failure: Data.Failure | null;

    /**
     * The fee charged for the payout, in the payout currency, as a decimal string.
     */
    fee_amount: string;

    /**
     * Who bore the payout fee: the account itself, or its parent platform.
     */
    fee_paid_by: 'self' | 'platform';

    /**
     * Whop's markup on the provider fee, in the payout currency, as a decimal string.
     * `"0.0"` when none applies.
     */
    markup_fee: string;

    /**
     * Key-value data attached at creation and echoed on every read. At most 50 keys,
     * key names up to 40 characters, string values up to 500 characters.
     */
    metadata: { [key: string]: string };

    /**
     * The planned net for the destination, in the payout currency: amount minus
     * fee_amount minus markup_fee when fee_paid_by is `self`; equal to amount when the
     * platform covers the fees. A payout that ends denied, canceled, or failed
     * delivered nothing — most keep the planned figure and `failure` says where the
     * funds are, but a canceled stablecoin payout can report the settled outcome
     * instead: `amount` carries what stayed in the balance, fees are zero because none
     * were charged, and `net_amount` is 0 because nothing was delivered.
     */
    net_amount: string;

    /**
     * Free-form notes attached by the payout creator, or `null` when none were
     * provided. Maximum 255 characters.
     */
    notes: string | null;

    object: 'payout';

    /**
     * Name of the entity processing the payout.
     */
    payer_name: string | null;

    /**
     * The saved payout method used. Requires payout:destination:read; null without it.
     */
    payout_method: Data.PayoutMethod | null;

    /**
     * Payout request ID, prefixed `cofr_`, returned by `POST /payouts`. Match it to
     * the settled payout in `GET /payouts`. Returns `null` for payouts not created by
     * `POST /payouts`.
     */
    payout_request_id: string | null;

    /**
     * How the payout was created. `automatic` means a scheduled auto-payout; `null` on
     * payouts created before source tracking or through internal tooling.
     */
    source: 'api' | 'dashboard' | 'automatic' | null;

    /**
     * Payout delivery speed.
     */
    speed: 'standard' | 'instant';

    /**
     * Current payout status.
     */
    status:
      | 'requested'
      | 'in_review'
      | 'processing'
      | 'completed'
      | 'reversed'
      | 'canceled'
      | 'failed'
      | 'denied';

    /**
     * The finest machine phase under `status` — for example
     * `awaiting_provider_acceptance` vs `in_transit` under `processing`, or the
     * stablecoin conversion phase under `requested`. Informational vocabulary: values
     * can be added without a version bump; `status` is the versioned contract.
     */
    status_detail: string;

    /**
     * ACH trace number the recipient's bank can use to locate this payout. Assigned
     * when the payout is submitted to the bank, so it is `null` before then and on
     * payouts not sent over ACH.
     */
    trace_code: string | null;
  }

  export namespace Data {
    /**
     * Why the payout ended without paying, or why it reversed after settlement.
     * Present on failed, canceled, denied, and reversed payouts; `null` otherwise.
     */
    export interface Failure {
      /**
       * Classified failure code from the maintained error catalog.
       */
      code: string | null;

      /**
       * The effective time of the reversal that put the funds back in the balance —
       * `null` if they never left it or have not returned yet. Set only once the return
       * is confirmed in the ledger; the ledger posting itself can land moments after
       * this time.
       */
      funds_returned_at: string | null;

      /**
       * Human-readable explanation of the failure. Callers holding
       * `payout:destination:read` may receive text personalized to the destination;
       * other callers get the generic catalog message.
       */
      message: string | null;
    }

    /**
     * The saved payout method used. Requires payout:destination:read; null without it.
     */
    export interface PayoutMethod {
      /**
       * Saved payout method nickname.
       */
      nickname: string | null;

      /**
       * Supported payout method display details.
       */
      supported_payout_method: PayoutMethod.SupportedPayoutMethod | null;
    }

    export namespace PayoutMethod {
      /**
       * Supported payout method display details.
       */
      export interface SupportedPayoutMethod {
        /**
         * How the funds are delivered to the recipient.
         */
        delivery_type:
          | 'cash_pickup'
          | 'bank_deposit'
          | 'home_delivery'
          | 'mobile_wallet'
          | 'card'
          | 'check'
          | 'bill'
          | 'cryptocurrency'
          | 'unknown';

        /**
         * Supported payout method icon URL.
         */
        icon_url: string | null;

        /**
         * Supported payout method display name.
         */
        payer_name: string | null;
      }
    }
  }
}

export interface PayoutReversedWebhookEvent {
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

  data: PayoutReversedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payout.reversed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace PayoutReversedWebhookEvent {
  export interface Data {
    /**
     * Payout ID, prefixed `wdrl_`.
     */
    id: string;

    /**
     * The payout amount in whole currency units, as a decimal string.
     */
    amount: string;

    /**
     * When the payout was created.
     */
    created_at: string;

    /**
     * Payout currency.
     */
    currency: string;

    /**
     * The amount delivered in the destination currency, as a decimal string. Assigned
     * when the payout is processed, so it is `null` before then and on payouts without
     * a recorded conversion.
     */
    destination_amount: string | null;

    /**
     * Currency the funds are delivered in, taken from the payout method when the
     * payout is created. On a stablecoin payout it follows the settlement payout
     * minted alongside it — the `GET /payouts` row carrying this payout's id as
     * `payout_request_id` — and is `null` only when no settlement payout exists.
     */
    destination_currency: string | null;

    /**
     * Estimated time the funds become available in the destination account.
     */
    estimated_arrival: string | null;

    /**
     * Exchange rate from the payout currency to the destination currency. Assigned
     * when the payout is processed, so it is `null` before then and on payouts without
     * a recorded rate.
     */
    exchange_rate: number | null;

    /**
     * Why the payout ended without paying, or why it reversed after settlement.
     * Present on failed, canceled, denied, and reversed payouts; `null` otherwise.
     */
    failure: Data.Failure | null;

    /**
     * The fee charged for the payout, in the payout currency, as a decimal string.
     */
    fee_amount: string;

    /**
     * Who bore the payout fee: the account itself, or its parent platform.
     */
    fee_paid_by: 'self' | 'platform';

    /**
     * Whop's markup on the provider fee, in the payout currency, as a decimal string.
     * `"0.0"` when none applies.
     */
    markup_fee: string;

    /**
     * Key-value data attached at creation and echoed on every read. At most 50 keys,
     * key names up to 40 characters, string values up to 500 characters.
     */
    metadata: { [key: string]: string };

    /**
     * The planned net for the destination, in the payout currency: amount minus
     * fee_amount minus markup_fee when fee_paid_by is `self`; equal to amount when the
     * platform covers the fees. A payout that ends denied, canceled, or failed
     * delivered nothing — most keep the planned figure and `failure` says where the
     * funds are, but a canceled stablecoin payout can report the settled outcome
     * instead: `amount` carries what stayed in the balance, fees are zero because none
     * were charged, and `net_amount` is 0 because nothing was delivered.
     */
    net_amount: string;

    /**
     * Free-form notes attached by the payout creator, or `null` when none were
     * provided. Maximum 255 characters.
     */
    notes: string | null;

    object: 'payout';

    /**
     * Name of the entity processing the payout.
     */
    payer_name: string | null;

    /**
     * The saved payout method used. Requires payout:destination:read; null without it.
     */
    payout_method: Data.PayoutMethod | null;

    /**
     * Payout request ID, prefixed `cofr_`, returned by `POST /payouts`. Match it to
     * the settled payout in `GET /payouts`. Returns `null` for payouts not created by
     * `POST /payouts`.
     */
    payout_request_id: string | null;

    /**
     * How the payout was created. `automatic` means a scheduled auto-payout; `null` on
     * payouts created before source tracking or through internal tooling.
     */
    source: 'api' | 'dashboard' | 'automatic' | null;

    /**
     * Payout delivery speed.
     */
    speed: 'standard' | 'instant';

    /**
     * Current payout status.
     */
    status:
      | 'requested'
      | 'in_review'
      | 'processing'
      | 'completed'
      | 'reversed'
      | 'canceled'
      | 'failed'
      | 'denied';

    /**
     * The finest machine phase under `status` — for example
     * `awaiting_provider_acceptance` vs `in_transit` under `processing`, or the
     * stablecoin conversion phase under `requested`. Informational vocabulary: values
     * can be added without a version bump; `status` is the versioned contract.
     */
    status_detail: string;

    /**
     * ACH trace number the recipient's bank can use to locate this payout. Assigned
     * when the payout is submitted to the bank, so it is `null` before then and on
     * payouts not sent over ACH.
     */
    trace_code: string | null;
  }

  export namespace Data {
    /**
     * Why the payout ended without paying, or why it reversed after settlement.
     * Present on failed, canceled, denied, and reversed payouts; `null` otherwise.
     */
    export interface Failure {
      /**
       * Classified failure code from the maintained error catalog.
       */
      code: string | null;

      /**
       * The effective time of the reversal that put the funds back in the balance —
       * `null` if they never left it or have not returned yet. Set only once the return
       * is confirmed in the ledger; the ledger posting itself can land moments after
       * this time.
       */
      funds_returned_at: string | null;

      /**
       * Human-readable explanation of the failure. Callers holding
       * `payout:destination:read` may receive text personalized to the destination;
       * other callers get the generic catalog message.
       */
      message: string | null;
    }

    /**
     * The saved payout method used. Requires payout:destination:read; null without it.
     */
    export interface PayoutMethod {
      /**
       * Saved payout method nickname.
       */
      nickname: string | null;

      /**
       * Supported payout method display details.
       */
      supported_payout_method: PayoutMethod.SupportedPayoutMethod | null;
    }

    export namespace PayoutMethod {
      /**
       * Supported payout method display details.
       */
      export interface SupportedPayoutMethod {
        /**
         * How the funds are delivered to the recipient.
         */
        delivery_type:
          | 'cash_pickup'
          | 'bank_deposit'
          | 'home_delivery'
          | 'mobile_wallet'
          | 'card'
          | 'check'
          | 'bill'
          | 'cryptocurrency'
          | 'unknown';

        /**
         * Supported payout method icon URL.
         */
        icon_url: string | null;

        /**
         * Supported payout method display name.
         */
        payer_name: string | null;
      }
    }
  }
}

export interface PayoutUpdatedWebhookEvent {
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

  data: PayoutUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'payout.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace PayoutUpdatedWebhookEvent {
  export interface Data {
    /**
     * Payout ID, prefixed `wdrl_`.
     */
    id: string;

    /**
     * The payout amount in whole currency units, as a decimal string.
     */
    amount: string;

    /**
     * When the payout was created.
     */
    created_at: string;

    /**
     * Payout currency.
     */
    currency: string;

    /**
     * The amount delivered in the destination currency, as a decimal string. Assigned
     * when the payout is processed, so it is `null` before then and on payouts without
     * a recorded conversion.
     */
    destination_amount: string | null;

    /**
     * Currency the funds are delivered in, taken from the payout method when the
     * payout is created. On a stablecoin payout it follows the settlement payout
     * minted alongside it — the `GET /payouts` row carrying this payout's id as
     * `payout_request_id` — and is `null` only when no settlement payout exists.
     */
    destination_currency: string | null;

    /**
     * Estimated time the funds become available in the destination account.
     */
    estimated_arrival: string | null;

    /**
     * Exchange rate from the payout currency to the destination currency. Assigned
     * when the payout is processed, so it is `null` before then and on payouts without
     * a recorded rate.
     */
    exchange_rate: number | null;

    /**
     * Why the payout ended without paying, or why it reversed after settlement.
     * Present on failed, canceled, denied, and reversed payouts; `null` otherwise.
     */
    failure: Data.Failure | null;

    /**
     * The fee charged for the payout, in the payout currency, as a decimal string.
     */
    fee_amount: string;

    /**
     * Who bore the payout fee: the account itself, or its parent platform.
     */
    fee_paid_by: 'self' | 'platform';

    /**
     * Whop's markup on the provider fee, in the payout currency, as a decimal string.
     * `"0.0"` when none applies.
     */
    markup_fee: string;

    /**
     * Key-value data attached at creation and echoed on every read. At most 50 keys,
     * key names up to 40 characters, string values up to 500 characters.
     */
    metadata: { [key: string]: string };

    /**
     * The planned net for the destination, in the payout currency: amount minus
     * fee_amount minus markup_fee when fee_paid_by is `self`; equal to amount when the
     * platform covers the fees. A payout that ends denied, canceled, or failed
     * delivered nothing — most keep the planned figure and `failure` says where the
     * funds are, but a canceled stablecoin payout can report the settled outcome
     * instead: `amount` carries what stayed in the balance, fees are zero because none
     * were charged, and `net_amount` is 0 because nothing was delivered.
     */
    net_amount: string;

    /**
     * Free-form notes attached by the payout creator, or `null` when none were
     * provided. Maximum 255 characters.
     */
    notes: string | null;

    object: 'payout';

    /**
     * Name of the entity processing the payout.
     */
    payer_name: string | null;

    /**
     * The saved payout method used. Requires payout:destination:read; null without it.
     */
    payout_method: Data.PayoutMethod | null;

    /**
     * Payout request ID, prefixed `cofr_`, returned by `POST /payouts`. Match it to
     * the settled payout in `GET /payouts`. Returns `null` for payouts not created by
     * `POST /payouts`.
     */
    payout_request_id: string | null;

    /**
     * How the payout was created. `automatic` means a scheduled auto-payout; `null` on
     * payouts created before source tracking or through internal tooling.
     */
    source: 'api' | 'dashboard' | 'automatic' | null;

    /**
     * Payout delivery speed.
     */
    speed: 'standard' | 'instant';

    /**
     * Current payout status.
     */
    status:
      | 'requested'
      | 'in_review'
      | 'processing'
      | 'completed'
      | 'reversed'
      | 'canceled'
      | 'failed'
      | 'denied';

    /**
     * The finest machine phase under `status` — for example
     * `awaiting_provider_acceptance` vs `in_transit` under `processing`, or the
     * stablecoin conversion phase under `requested`. Informational vocabulary: values
     * can be added without a version bump; `status` is the versioned contract.
     */
    status_detail: string;

    /**
     * ACH trace number the recipient's bank can use to locate this payout. Assigned
     * when the payout is submitted to the bank, so it is `null` before then and on
     * payouts not sent over ACH.
     */
    trace_code: string | null;
  }

  export namespace Data {
    /**
     * Why the payout ended without paying, or why it reversed after settlement.
     * Present on failed, canceled, denied, and reversed payouts; `null` otherwise.
     */
    export interface Failure {
      /**
       * Classified failure code from the maintained error catalog.
       */
      code: string | null;

      /**
       * The effective time of the reversal that put the funds back in the balance —
       * `null` if they never left it or have not returned yet. Set only once the return
       * is confirmed in the ledger; the ledger posting itself can land moments after
       * this time.
       */
      funds_returned_at: string | null;

      /**
       * Human-readable explanation of the failure. Callers holding
       * `payout:destination:read` may receive text personalized to the destination;
       * other callers get the generic catalog message.
       */
      message: string | null;
    }

    /**
     * The saved payout method used. Requires payout:destination:read; null without it.
     */
    export interface PayoutMethod {
      /**
       * Saved payout method nickname.
       */
      nickname: string | null;

      /**
       * Supported payout method display details.
       */
      supported_payout_method: PayoutMethod.SupportedPayoutMethod | null;
    }

    export namespace PayoutMethod {
      /**
       * Supported payout method display details.
       */
      export interface SupportedPayoutMethod {
        /**
         * How the funds are delivered to the recipient.
         */
        delivery_type:
          | 'cash_pickup'
          | 'bank_deposit'
          | 'home_delivery'
          | 'mobile_wallet'
          | 'card'
          | 'check'
          | 'bill'
          | 'cryptocurrency'
          | 'unknown';

        /**
         * Supported payout method icon URL.
         */
        icon_url: string | null;

        /**
         * Supported payout method display name.
         */
        payer_name: string | null;
      }
    }
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
     * The granular calculated statuses reflecting payout account KYC and payout
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace PayoutMethodCreatedWebhookEvent {
  export interface Data {
    /**
     * Payout method ID.
     */
    id: string;

    /**
     * Masked identifier for the destination, such as the last four digits of a bank
     * account.
     */
    account_reference: string | null;

    /**
     * Lifecycle trust state: `checking` (verification still running), `verified` (bank
     * confirmed ownership or a payout already completed to it), `no_data`
     * (verification unavailable or bank returned no ownership data), `warning` (bank
     * could not confirm the destination's owner), `broken` (payouts failed with a
     * permanent account error), `null` (never checked).
     */
    bank_verification_state: 'checking' | 'verified' | 'no_data' | 'warning' | 'broken' | null;

    /**
     * When the payout method was added.
     */
    created_at: string;

    /**
     * Currency payouts are delivered in for this method.
     */
    destination_currency: string;

    /**
     * Estimated arrival times before an amount-specific quote is requested. Null when
     * the method is not currently eligible.
     */
    estimated_arrival: Data.EstimatedArrival | null;

    /**
     * Configured fee terms for this payout method. Null when the method is not
     * currently eligible. An amount-specific quote remains authoritative.
     */
    fee_structure: Data.FeeStructure | null;

    /**
     * Name of the bank or institution receiving payouts.
     */
    institution_name: string | null;

    /**
     * Whether this method is a copy of one saved on another of the payer's accounts.
     */
    is_clone: boolean;

    /**
     * Whether this is the default payout method for the account.
     */
    is_default: boolean;

    /**
     * When the most recent completed payout was delivered to this method, as an ISO
     * 8601 timestamp. `null` when nothing has been paid out to it yet.
     */
    last_paid_out_at: string | null;

    /**
     * Whether the payer added this method by signing in to their bank rather than
     * typing account details.
     */
    linked_via_plaid: boolean;

    /**
     * Whether the bank sign-in behind this method has expired and must be redone
     * before it counts as linked.
     */
    needs_plaid_reconnect: boolean;

    /**
     * User-defined label for the payout method.
     */
    nickname: string | null;

    object: 'payout_method';

    /**
     * Display name of the payout rail, such as `ACH Bank Deposit`.
     */
    payer_name: string | null;

    /**
     * Fee and delivery estimate for paying out the requested amount through this
     * method. Null unless an amount was provided, or when the estimate is unavailable.
     */
    quote: Data.Quote | null;

    /**
     * Lifecycle status: `created` means saved but unused, `active` means a payout
     * succeeded through it, `broken` means a payout failure disabled it; a later
     * successful payout returns it to `active`.
     */
    status: 'created' | 'active' | 'broken';

    /**
     * Machine-readable code for why the method is `broken` — the newest disabling
     * failure recorded through it, whether a payout error or a pre-payout rejection.
     * `null` unless the method is broken, or when it was disabled without a recorded
     * failure.
     */
    status_reason: string | null;

    /**
     * The supported payout method this saved method was created from.
     */
    supported_payout_method: Data.SupportedPayoutMethod | null;

    /**
     * Why this method is unavailable: `destination_retired` means the payout provider
     * stopped offering the destination. Whop may automatically remap an eligible
     * method that was not linked through Plaid to a compatible replacement; otherwise,
     * the account owner must re-add it. `null` means no unavailability reason is
     * known.
     */
    unavailable_reason: 'destination_retired' | null;
  }

  export namespace Data {
    /**
     * Estimated arrival times before an amount-specific quote is requested. Null when
     * the method is not currently eligible.
     */
    export interface EstimatedArrival {
      /**
       * Estimated instant-delivery arrival, or null when unavailable.
       */
      instant: string | null;

      /**
       * Estimated standard-delivery arrival, or null when unavailable.
       */
      standard: string | null;
    }

    /**
     * Configured fee terms for this payout method. Null when the method is not
     * currently eligible. An amount-specific quote remains authoritative.
     */
    export interface FeeStructure {
      /**
       * Currency code of fixed_amount.
       */
      currency: string;

      /**
       * Fixed fee charged, denominated in `currency`.
       */
      fixed_amount: number;

      /**
       * Percentage of the payout amount charged as a fee.
       */
      percentage: number;
    }

    /**
     * Fee and delivery estimate for paying out the requested amount through this
     * method. Null unless an amount was provided, or when the estimate is unavailable.
     */
    export interface Quote {
      /**
       * The payout amount the quote is for.
       */
      amount: number;

      /**
       * Currency of the quoted amount.
       */
      currency: string;

      /**
       * Exchange rate from the payout currency to the destination currency.
       */
      exchange_rate: number;

      /**
       * Instant-delivery estimate. Null if the method does not support instant delivery,
       * instant delivery is unavailable for the account, or the amount does not cover
       * the fee.
       */
      instant: Quote.Instant | null;

      /**
       * Maximum payout amount for this method, in the payout currency.
       */
      max_limit: number | null;

      /**
       * Minimum payout amount for this method, in the payout currency.
       */
      min_limit: number;

      /**
       * Standard-delivery estimate. Null if the method does not support standard
       * delivery, or the amount does not cover the fee.
       */
      standard: Quote.Standard | null;
    }

    export namespace Quote {
      /**
       * Instant-delivery estimate. Null if the method does not support instant delivery,
       * instant delivery is unavailable for the account, or the amount does not cover
       * the fee.
       */
      export interface Instant {
        /**
         * Total fee charged, in the payout currency.
         */
        fee: number;

        /**
         * Amount remaining after fees, in the payout currency.
         */
        total_received: number;
      }

      /**
       * Standard-delivery estimate. Null if the method does not support standard
       * delivery, or the amount does not cover the fee.
       */
      export interface Standard {
        /**
         * Total fee charged, in the payout currency.
         */
        fee: number;

        /**
         * Amount remaining after fees, in the payout currency.
         */
        total_received: number;
      }
    }

    /**
     * The supported payout method this saved method was created from.
     */
    export interface SupportedPayoutMethod {
      /**
       * ISO 3166-1 alpha-3 country the destination pays out to.
       */
      country_code: string | null;

      /**
       * How funds are delivered.
       */
      delivery_type:
        | 'cash_pickup'
        | 'bank_deposit'
        | 'home_delivery'
        | 'mobile_wallet'
        | 'card'
        | 'check'
        | 'bill'
        | 'cryptocurrency'
        | 'unknown';

      /**
       * Supported payout method icon URL.
       */
      icon_url: string | null;

      /**
       * Supported payout method display name.
       */
      name: string | null;

      supports_instant_delivery: boolean;

      /**
       * Whether the payer can link this method by signing in to their bank instead of
       * typing account details.
       */
      supports_plaid: boolean;

      supports_standard_delivery: boolean;
    }
  }
}

export interface PlanCreatedWebhookEvent {
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

  data: Shared.Plan;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'plan.created';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface PlanDeletedWebhookEvent {
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

  data: Shared.Plan;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'plan.deleted';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface PlanUpdatedWebhookEvent {
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

  data: Shared.Plan;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'plan.updated';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
         * string value. The reserved keys `custom_cta` and `custom_cta_url`, when set,
         * override the product's checkout call to action for this plan.
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
         * string value. The reserved keys `custom_cta` and `custom_cta_url`, when set,
         * override the product's checkout call to action for this plan.
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace ResolutionCenterCaseCreatedWebhookEvent {
  export interface Data {
    /**
     * Resolution center case ID, prefixed `reso_`.
     */
    id: string;

    /**
     * The account the case was filed against.
     */
    account: Data.Account | null;

    /**
     * The amount in question, in whole units of `currency`.
     */
    amount: number;

    available_actions: Array<'accept' | 'deny' | 'request_info' | 'reply' | 'appeal' | 'withdraw'>;

    /**
     * The customer who opened the case.
     */
    buyer: Data.Buyer;

    /**
     * When the case was opened, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * Three-letter ISO currency code of the amount.
     */
    currency: string | null;

    /**
     * Whether the customer has appealed a decision on this case.
     */
    customer_appealed: boolean;

    /**
     * Whether Whop is involved — either reviewing the case, or waiting on the side
     * named by `status` for something it asked for while reviewing.
     */
    escalated: boolean;

    /**
     * Who prevailed on the claim. `null` until the case closes. Read `refund` for
     * whether any money actually moved.
     */
    outcome: 'customer_won' | 'merchant_won' | 'withdrawn' | null;

    /**
     * The payment the case was opened against.
     */
    payment: Data.Payment;

    /**
     * The plan the payment was made on, prefixed `plan_`.
     */
    plan_id: string | null;

    /**
     * The product the payment was for, prefixed `prod_`.
     */
    product_id: string | null;

    /**
     * What the customer says went wrong. Shares the `/disputes` vocabulary, so a case
     * that later becomes a chargeback reports the same complaint.
     */
    reason:
      | 'fraudulent'
      | 'product_not_received'
      | 'not_as_described'
      | 'product_unacceptable'
      | 'subscription_canceled';

    /**
     * Whether money moved and off whose balance: `none`, `merchant`, or `platform`
     * (Whop refunded the customer and the merchant kept the funds). Independent of
     * `outcome` — a case the merchant won can still carry a platform refund. `null`
     * while the case is open, and on older closed cases that predate this being
     * recorded.
     */
    refund: 'none' | 'merchant' | 'platform' | null;

    /**
     * When the next response is due, as an ISO 8601 timestamp.
     */
    response_due_at: string | null;

    /**
     * Who the case is waiting on. `awaiting_merchant` and `awaiting_customer` name the
     * side that owes a response, `under_review` means Whop is deciding, and `closed`
     * means it is settled — read `outcome` for how.
     */
    status: 'awaiting_merchant' | 'awaiting_customer' | 'under_review' | 'closed';

    /**
     * When the case was last changed, as an ISO 8601 timestamp.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * The account the case was filed against.
     */
    export interface Account {
      /**
       * Account ID, prefixed `biz_`.
       */
      id: string;

      /**
       * Account display name.
       */
      title: string;
    }

    /**
     * The customer who opened the case.
     */
    export interface Buyer {
      /**
       * The customer's email address. Requires the `member:email:read` scope; `null`
       * without it.
       */
      email: string | null;

      /**
       * The customer's member row on the account, prefixed `mem_`.
       */
      member_id: string | null;

      /**
       * The customer's display name.
       */
      name: string | null;

      /**
       * The customer's user ID, prefixed `user_`.
       */
      user_id: string | null;

      /**
       * The customer's Whop username.
       */
      username: string | null;
    }

    /**
     * The payment the case was opened against.
     */
    export interface Payment {
      /**
       * Payment ID, prefixed `pay_`.
       */
      id: string;

      /**
       * Card brand, when the customer paid by card.
       */
      card_brand: string | null;

      /**
       * Last four digits of the card, when the customer paid by card.
       */
      card_last4: string | null;

      /**
       * When the payment was made, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * How the customer paid, such as `card` or `paypal`.
       */
      payment_method_type: string | null;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace ResolutionCenterCaseDecidedWebhookEvent {
  export interface Data {
    /**
     * Resolution center case ID, prefixed `reso_`.
     */
    id: string;

    /**
     * The account the case was filed against.
     */
    account: Data.Account | null;

    /**
     * The amount in question, in whole units of `currency`.
     */
    amount: number;

    available_actions: Array<'accept' | 'deny' | 'request_info' | 'reply' | 'appeal' | 'withdraw'>;

    /**
     * The customer who opened the case.
     */
    buyer: Data.Buyer;

    /**
     * When the case was opened, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * Three-letter ISO currency code of the amount.
     */
    currency: string | null;

    /**
     * Whether the customer has appealed a decision on this case.
     */
    customer_appealed: boolean;

    /**
     * Whether Whop is involved — either reviewing the case, or waiting on the side
     * named by `status` for something it asked for while reviewing.
     */
    escalated: boolean;

    /**
     * Who prevailed on the claim. `null` until the case closes. Read `refund` for
     * whether any money actually moved.
     */
    outcome: 'customer_won' | 'merchant_won' | 'withdrawn' | null;

    /**
     * The payment the case was opened against.
     */
    payment: Data.Payment;

    /**
     * The plan the payment was made on, prefixed `plan_`.
     */
    plan_id: string | null;

    /**
     * The product the payment was for, prefixed `prod_`.
     */
    product_id: string | null;

    /**
     * What the customer says went wrong. Shares the `/disputes` vocabulary, so a case
     * that later becomes a chargeback reports the same complaint.
     */
    reason:
      | 'fraudulent'
      | 'product_not_received'
      | 'not_as_described'
      | 'product_unacceptable'
      | 'subscription_canceled';

    /**
     * Whether money moved and off whose balance: `none`, `merchant`, or `platform`
     * (Whop refunded the customer and the merchant kept the funds). Independent of
     * `outcome` — a case the merchant won can still carry a platform refund. `null`
     * while the case is open, and on older closed cases that predate this being
     * recorded.
     */
    refund: 'none' | 'merchant' | 'platform' | null;

    /**
     * When the next response is due, as an ISO 8601 timestamp.
     */
    response_due_at: string | null;

    /**
     * Who the case is waiting on. `awaiting_merchant` and `awaiting_customer` name the
     * side that owes a response, `under_review` means Whop is deciding, and `closed`
     * means it is settled — read `outcome` for how.
     */
    status: 'awaiting_merchant' | 'awaiting_customer' | 'under_review' | 'closed';

    /**
     * When the case was last changed, as an ISO 8601 timestamp.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * The account the case was filed against.
     */
    export interface Account {
      /**
       * Account ID, prefixed `biz_`.
       */
      id: string;

      /**
       * Account display name.
       */
      title: string;
    }

    /**
     * The customer who opened the case.
     */
    export interface Buyer {
      /**
       * The customer's email address. Requires the `member:email:read` scope; `null`
       * without it.
       */
      email: string | null;

      /**
       * The customer's member row on the account, prefixed `mem_`.
       */
      member_id: string | null;

      /**
       * The customer's display name.
       */
      name: string | null;

      /**
       * The customer's user ID, prefixed `user_`.
       */
      user_id: string | null;

      /**
       * The customer's Whop username.
       */
      username: string | null;
    }

    /**
     * The payment the case was opened against.
     */
    export interface Payment {
      /**
       * Payment ID, prefixed `pay_`.
       */
      id: string;

      /**
       * Card brand, when the customer paid by card.
       */
      card_brand: string | null;

      /**
       * Last four digits of the card, when the customer paid by card.
       */
      card_last4: string | null;

      /**
       * When the payment was made, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * How the customer paid, such as `card` or `paypal`.
       */
      payment_method_type: string | null;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace ResolutionCenterCaseUpdatedWebhookEvent {
  export interface Data {
    /**
     * Resolution center case ID, prefixed `reso_`.
     */
    id: string;

    /**
     * The account the case was filed against.
     */
    account: Data.Account | null;

    /**
     * The amount in question, in whole units of `currency`.
     */
    amount: number;

    available_actions: Array<'accept' | 'deny' | 'request_info' | 'reply' | 'appeal' | 'withdraw'>;

    /**
     * The customer who opened the case.
     */
    buyer: Data.Buyer;

    /**
     * When the case was opened, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * Three-letter ISO currency code of the amount.
     */
    currency: string | null;

    /**
     * Whether the customer has appealed a decision on this case.
     */
    customer_appealed: boolean;

    /**
     * Whether Whop is involved — either reviewing the case, or waiting on the side
     * named by `status` for something it asked for while reviewing.
     */
    escalated: boolean;

    /**
     * Who prevailed on the claim. `null` until the case closes. Read `refund` for
     * whether any money actually moved.
     */
    outcome: 'customer_won' | 'merchant_won' | 'withdrawn' | null;

    /**
     * The payment the case was opened against.
     */
    payment: Data.Payment;

    /**
     * The plan the payment was made on, prefixed `plan_`.
     */
    plan_id: string | null;

    /**
     * The product the payment was for, prefixed `prod_`.
     */
    product_id: string | null;

    /**
     * What the customer says went wrong. Shares the `/disputes` vocabulary, so a case
     * that later becomes a chargeback reports the same complaint.
     */
    reason:
      | 'fraudulent'
      | 'product_not_received'
      | 'not_as_described'
      | 'product_unacceptable'
      | 'subscription_canceled';

    /**
     * Whether money moved and off whose balance: `none`, `merchant`, or `platform`
     * (Whop refunded the customer and the merchant kept the funds). Independent of
     * `outcome` — a case the merchant won can still carry a platform refund. `null`
     * while the case is open, and on older closed cases that predate this being
     * recorded.
     */
    refund: 'none' | 'merchant' | 'platform' | null;

    /**
     * When the next response is due, as an ISO 8601 timestamp.
     */
    response_due_at: string | null;

    /**
     * Who the case is waiting on. `awaiting_merchant` and `awaiting_customer` name the
     * side that owes a response, `under_review` means Whop is deciding, and `closed`
     * means it is settled — read `outcome` for how.
     */
    status: 'awaiting_merchant' | 'awaiting_customer' | 'under_review' | 'closed';

    /**
     * When the case was last changed, as an ISO 8601 timestamp.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * The account the case was filed against.
     */
    export interface Account {
      /**
       * Account ID, prefixed `biz_`.
       */
      id: string;

      /**
       * Account display name.
       */
      title: string;
    }

    /**
     * The customer who opened the case.
     */
    export interface Buyer {
      /**
       * The customer's email address. Requires the `member:email:read` scope; `null`
       * without it.
       */
      email: string | null;

      /**
       * The customer's member row on the account, prefixed `mem_`.
       */
      member_id: string | null;

      /**
       * The customer's display name.
       */
      name: string | null;

      /**
       * The customer's user ID, prefixed `user_`.
       */
      user_id: string | null;

      /**
       * The customer's Whop username.
       */
      username: string | null;
    }

    /**
     * The payment the case was opened against.
     */
    export interface Payment {
      /**
       * Payment ID, prefixed `pay_`.
       */
      id: string;

      /**
       * Card brand, when the customer paid by card.
       */
      card_brand: string | null;

      /**
       * Last four digits of the card, when the customer paid by card.
       */
      card_last4: string | null;

      /**
       * When the payment was made, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * How the customer paid, such as `card` or `paypal`.
       */
      payment_method_type: string | null;
    }
  }
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export interface SwapCompletedWebhookEvent {
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

  data: SwapCompletedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'swap.completed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace SwapCompletedWebhookEvent {
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
     * (payments, top-ups, incoming transfers/affiliate); null on payouts, refunds,
     * disputes and on-chain rows. The available_after/before filters window on its UTC
     * settlement date.
     */
    available_at: string | null;

    /**
     * Currency for this ledger activity.
     */
    currency: Data.Currency;

    /**
     * The ledger line category this activity was posted under.
     */
    line_type:
      | 'ad_budget_release'
      | 'ad_campaign_budget'
      | 'ad_publisher_payout'
      | 'ad_publisher_payout_received'
      | 'ad_spend_charge'
      | 'affiliate_fee'
      | 'airdrop'
      | 'airdrop_link_created'
      | 'airdrop_link_redeemed'
      | 'airdrop_link_returned'
      | 'airdrop_reversal'
      | 'application_fee'
      | 'application_fee_payout'
      | 'balance_reservation'
      | 'balance_reservation_reversal'
      | 'bank_transfer'
      | 'billing_percentage_fee'
      | 'buyer_fee'
      | 'card_interchange'
      | 'card_load_deposit'
      | 'card_load_transfer'
      | 'card_spend_authorization'
      | 'card_spend_authorization_void'
      | 'card_spend_refund'
      | 'card_unload_deposit'
      | 'card_unload_transfer'
      | 'company_referral'
      | 'connected_account_negative_balance'
      | 'cross_border_percentage_fee'
      | 'currency_conversion_incoming'
      | 'currency_conversion_outgoing'
      | 'dispute_alert_fee'
      | 'dispute_hold_adjustment'
      | 'dispute_representment_fee'
      | 'external_card_load_deposit'
      | 'fraud_prevention_fee'
      | 'fx_percentage_fee'
      | 'high_risk_merchant_fee'
      | 'installment_default'
      | 'internal_balance_transfer_incoming'
      | 'internal_balance_transfer_outgoing'
      | 'internal_withdrawal'
      | 'internal_withdrawal_complete'
      | 'internal_withdrawal_fee'
      | 'internal_withdrawal_fee_reversal'
      | 'internal_withdrawal_in_transit'
      | 'internal_withdrawal_in_transit_reversal'
      | 'internal_withdrawal_markup_fee'
      | 'internal_withdrawal_markup_fee_payout'
      | 'internal_withdrawal_markup_fee_payout_reversal'
      | 'internal_withdrawal_markup_fee_reversal'
      | 'internal_withdrawal_reversal'
      | 'legacy_crypto_payment'
      | 'legacy_payment'
      | 'legacy_payment_refund'
      | 'license_sale'
      | 'license_sale_commission'
      | 'license_sale_revenue'
      | 'marketplace_affiliate_fee'
      | 'misc_purchase'
      | 'misc_refund'
      | 'misc_reversal'
      | 'onchain_deposit'
      | 'onchain_swap_source'
      | 'onchain_swap_target'
      | 'onchain_wallet_transfer_incoming'
      | 'onchain_wallet_transfer_outgoing'
      | 'onchain_withdrawal'
      | 'orchestration_percentage_fee'
      | 'passthrough_gmv'
      | 'payment_dispute'
      | 'payment_dispute_adjustment'
      | 'payment_dispute_fee'
      | 'payment_dispute_reversal'
      | 'payment_gross'
      | 'payment_gross_reversal'
      | 'payment_processing_fixed_fee'
      | 'payment_processing_percentage_fee'
      | 'payment_referral'
      | 'payment_referral_refund'
      | 'payment_referral_reversal'
      | 'payment_refund'
      | 'payment_refund_reversal'
      | 'payment_revshare'
      | 'payment_revshare_payout'
      | 'payment_revshare_refund'
      | 'payment_revshare_reversal'
      | 'payout_fee'
      | 'platform_affiliate_payment'
      | 'platform_affiliate_payment_reversal'
      | 'platform_balance_payment'
      | 'platform_balance_payment_refund'
      | 'platform_balance_transfer_fee'
      | 'platform_balance_transfer_incoming'
      | 'platform_balance_transfer_outgoing'
      | 'platform_covered_dispute'
      | 'platform_earning'
      | 'promo_reversal'
      | 'referral_bonus'
      | 'resolution_center_refund'
      | 'revshare_percentage_fee'
      | 'sales_tax_fee'
      | 'sales_tax_remittance'
      | 'sales_tax_remittance_reversal'
      | 'software_rental_revshare'
      | 'software_rental_transaction'
      | 'stripe_domestic_processing_fee'
      | 'stripe_international_processing_fee'
      | 'swap_fee'
      | 'three_ds_fixed_fee'
      | 'topup'
      | 'topup_fee'
      | 'topup_reversal'
      | 'treasury_payin'
      | 'whop_processing_fee'
      | 'withdrawal'
      | 'withdrawal_clawback'
      | 'withdrawal_clawback_reversal'
      | 'withdrawal_fee'
      | 'withdrawal_fee_reversal'
      | 'withdrawal_markup_fee'
      | 'withdrawal_markup_fee_payout'
      | 'withdrawal_markup_fee_payout_reversal'
      | 'withdrawal_markup_fee_reversal'
      | 'withdrawal_reclassification'
      | 'withdrawal_reversal'
      | 'withdrawal_topup_adjustment';

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

    /**
     * Payment related to this ledger activity. Included when rich resource hydration
     * is enabled and the movement is tied to a payment.
     */
    payment?: Data.Payment | null;

    /**
     * Payment ID for any payment-related activity, including refunds and disputes.
     */
    payment_id?: string | null;

    /**
     * ID of the plan associated with the payment, when applicable.
     */
    plan_id?: string | null;

    /**
     * Name of the plan associated with the payment, when applicable.
     */
    plan_name?: string | null;

    /**
     * ID of the product associated with the payment, when applicable.
     */
    product_id?: string | null;

    /**
     * Name of the product associated with the payment, when applicable.
     */
    product_name?: string | null;

    /**
     * Email of the customer associated with the payment. Requires member:email:read.
     */
    user_email?: string | null;

    /**
     * ID of the customer associated with the payment.
     */
    user_id?: string | null;

    /**
     * Display name of the customer associated with the payment.
     */
    user_name?: string | null;
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
       * Payout amount as a decimal number in the destination currency (payout sources
       * only; requires payout:withdrawal:read).
       */
      amount_float?: number | null;

      /**
       * Card brand used by the payment source.
       */
      card_brand?: string | null;

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
       * Payout creation time as an ISO 8601 timestamp (payout sources only; requires
       * payout:withdrawal:read).
       */
      created_at?: string | null;

      /**
       * Estimated arrival as an ISO 8601 timestamp (payout sources only; requires
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
       * Name of the entity processing the payout (payout sources only; requires
       * payout:withdrawal:read).
       */
      payer_name?: string | null;

      /**
       * Total charged by the payment source.
       */
      payment_amount?: Source.PaymentAmount | null;

      /**
       * Payment method used by the payment source.
       */
      payment_method_type?: string | null;

      /**
       * Processor used by the payment source.
       */
      payment_processor?: string | null;

      /**
       * Payout destination display info (payout sources only).
       */
      payout_destination?: Source.PayoutDestination | null;

      /**
       * Saved payout destination nickname (payout sources only).
       */
      payout_token_nickname?: string | null;

      /**
       * Why the activity happened. On transfer sources this is the transfer reason, for
       * example pool_top_up or bounty_return. On payout sources it explains why the
       * payout was canceled, denied, or failed (requires payout:withdrawal:read); null
       * while the payout is progressing normally.
       */
      reason?: string | null;

      /**
       * Whether this payout is currently held for manual risk review (payout sources
       * only; requires payout:withdrawal:read).
       */
      risk_review_hold?: boolean | null;

      /**
       * Sender wallet address or onramp provider identifier (onchain_transaction sources
       * only).
       */
      sender_address?: string | null;

      /**
       * Lifecycle status. On payout sources this is the payout status (requires
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
       * Total charged by the payment source.
       */
      export interface PaymentAmount {
        /**
         * The amount in major units, as an exact decimal string — `"10.00"` is ten
         * dollars. A string so no float rounds it in transit.
         */
        amount: string;

        /**
         * Three-letter ISO 4217 currency code, lowercase.
         */
        currency: string;

        /**
         * How many decimal places the amount CARRIES — the precision the charge itself
         * runs at.
         */
        decimals: number;

        /**
         * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
         * not always: COP is charged in centavos but written in whole pesos, so it is `2`
         * and `0`. Format the number in your own locale using this.
         */
        display_decimals: number;
      }

      /**
       * Payout destination display info (payout sources only).
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

    /**
     * Payment related to this ledger activity. Included when rich resource hydration
     * is enabled and the movement is tied to a payment.
     */
    export interface Payment {
      /**
       * Payment ID, prefixed `pay_`.
       */
      id: string;

      /**
       * Total charged by the payment.
       */
      amount: Payment.Amount | null;

      /**
       * Card brand, when the customer paid by card.
       */
      card_brand: string | null;

      /**
       * Last four digits of the card, when the customer paid by card.
       */
      card_last4: string | null;

      /**
       * When the payment was created.
       */
      created_at: string;

      object: 'payment';

      /**
       * How the customer paid, such as `card` or `paypal`.
       */
      payment_method_type: string | null;

      /**
       * Processor that handled the payment, such as `stripe`.
       */
      payment_processor: string | null;

      /**
       * Plan associated with the payment, when applicable.
       */
      plan: Payment.Plan | null;

      /**
       * Product associated with the payment, when applicable.
       */
      product: Payment.Product | null;

      /**
       * Customer associated with the payment. Email requires member:email:read.
       */
      user: Payment.User | null;
    }

    export namespace Payment {
      /**
       * Total charged by the payment.
       */
      export interface Amount {
        /**
         * The amount in major units, as an exact decimal string — `"10.00"` is ten
         * dollars. A string so no float rounds it in transit.
         */
        amount: string;

        /**
         * Three-letter ISO 4217 currency code, lowercase.
         */
        currency: string;

        /**
         * How many decimal places the amount CARRIES — the precision the charge itself
         * runs at.
         */
        decimals: number;

        /**
         * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
         * not always: COP is charged in centavos but written in whole pesos, so it is `2`
         * and `0`. Format the number in your own locale using this.
         */
        display_decimals: number;
      }

      /**
       * Plan associated with the payment, when applicable.
       */
      export interface Plan {
        /**
         * Plan ID, prefixed `plan_`.
         */
        id: string;

        /**
         * Plan name.
         */
        name: string | null;
      }

      /**
       * Product associated with the payment, when applicable.
       */
      export interface Product {
        /**
         * Product ID, prefixed `prod_`.
         */
        id: string;

        /**
         * Product name.
         */
        name: string;
      }

      /**
       * Customer associated with the payment. Email requires member:email:read.
       */
      export interface User {
        /**
         * Customer ID, prefixed `user_`.
         */
        id: string;

        /**
         * Customer email, or null without member:email:read.
         */
        email: string | null;

        /**
         * Customer display name.
         */
        name: string;
      }
    }
  }
}

export interface TransferCompletedWebhookEvent {
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
   * A transfer of credit between two ledger accounts.
   */
  data: TransferCompletedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'transfer.completed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace TransferCompletedWebhookEvent {
  /**
   * A transfer of credit between two ledger accounts.
   */
  export interface Data {
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
    created_by_user: Data.CreatedByUser | null;

    /**
     * Transfer currency.
     */
    currency: string;

    /**
     * Account or user receiving funds.
     */
    destination: Data.Company | Data.User;

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
    origin: Data.Company | Data.User;

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

  export namespace Data {
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
}

export interface TransferCreatedWebhookEvent {
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
   * A transfer of credit between two ledger accounts.
   */
  data: TransferCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'transfer.created';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace TransferCreatedWebhookEvent {
  /**
   * A transfer of credit between two ledger accounts.
   */
  export interface Data {
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
    created_by_user: Data.CreatedByUser | null;

    /**
     * Transfer currency.
     */
    currency: string;

    /**
     * Account or user receiving funds.
     */
    destination: Data.Company | Data.User;

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
    origin: Data.Company | Data.User;

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

  export namespace Data {
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
}

export interface TransferFailedWebhookEvent {
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
   * A transfer of credit between two ledger accounts.
   */
  data: TransferFailedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'transfer.failed';

  /**
   * The account ID that this webhook event is associated with
   */
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
}

export namespace TransferFailedWebhookEvent {
  /**
   * A transfer of credit between two ledger accounts.
   */
  export interface Data {
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
    created_by_user: Data.CreatedByUser | null;

    /**
     * Transfer currency.
     */
    currency: string;

    /**
     * Account or user receiving funds.
     */
    destination: Data.Company | Data.User;

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
    origin: Data.Company | Data.User;

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

  export namespace Data {
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
  account_id?: string | null;

  /**
   * For some `.updated` events, the old values of the payload fields that changed,
   * keyed by field name. Omitted when no capture is available for the event
   */
  previous_attributes?: unknown;
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

export type UnwrapWebhookEvent =
  | AccountUpdatedWebhookEvent
  | AdCampaignPaymentFailedWebhookEvent
  | CardCanceledWebhookEvent
  | CardCreatedWebhookEvent
  | CardFrozenWebhookEvent
  | CardUpdatedWebhookEvent
  | CardApplicationApprovedWebhookEvent
  | CardApplicationCreatedWebhookEvent
  | CardApplicationDeniedWebhookEvent
  | CardApplicationUpdatedWebhookEvent
  | CardTransactionCompletedWebhookEvent
  | CardTransactionCreatedWebhookEvent
  | CardTransactionDeclinedWebhookEvent
  | CardTransactionReversedWebhookEvent
  | CardTransactionUpdatedWebhookEvent
  | ChatMessageCreatedWebhookEvent
  | ChatReactionCreatedWebhookEvent
  | CourseLessonInteractionCompletedWebhookEvent
  | DepositSucceededWebhookEvent
  | DisputeCreatedWebhookEvent
  | DisputeUpdatedWebhookEvent
  | DisputeAlertCreatedWebhookEvent
  | EntryApprovedWebhookEvent
  | EntryCreatedWebhookEvent
  | EntryDeletedWebhookEvent
  | EntryDeniedWebhookEvent
  | ExportCompletedWebhookEvent
  | ExportFailedWebhookEvent
  | IdentityProfileUpdatedWebhookEvent
  | InvoiceCreatedWebhookEvent
  | InvoiceMarkedUncollectibleWebhookEvent
  | InvoicePaidWebhookEvent
  | InvoicePastDueWebhookEvent
  | InvoiceVoidedWebhookEvent
  | LedgerAccountFundsAvailableWebhookEvent
  | MemberCreatedWebhookEvent
  | MembershipActivatedWebhookEvent
  | MembershipCancelAtPeriodEndChangedWebhookEvent
  | MembershipDeactivatedWebhookEvent
  | MembershipTrialEndingSoonWebhookEvent
  | PaymentAuthorizedWebhookEvent
  | PaymentCanceledWebhookEvent
  | PaymentCreatedWebhookEvent
  | PaymentFailedWebhookEvent
  | PaymentPendingWebhookEvent
  | PaymentSucceededWebhookEvent
  | PayoutCreatedWebhookEvent
  | PayoutReversedWebhookEvent
  | PayoutUpdatedWebhookEvent
  | PayoutAccountStatusUpdatedWebhookEvent
  | PayoutMethodCreatedWebhookEvent
  | PlanCreatedWebhookEvent
  | PlanDeletedWebhookEvent
  | PlanUpdatedWebhookEvent
  | ProductCreatedWebhookEvent
  | ProductDeletedWebhookEvent
  | ProductPublishedWebhookEvent
  | ProductUnpublishedWebhookEvent
  | ProductUpdatedWebhookEvent
  | RefundCreatedWebhookEvent
  | RefundUpdatedWebhookEvent
  | ResolutionCenterCaseCreatedWebhookEvent
  | ResolutionCenterCaseDecidedWebhookEvent
  | ResolutionCenterCaseUpdatedWebhookEvent
  | SetupIntentCanceledWebhookEvent
  | SetupIntentRequiresActionWebhookEvent
  | SetupIntentSucceededWebhookEvent
  | ShipmentCreatedWebhookEvent
  | ShipmentUpdatedWebhookEvent
  | SwapCompletedWebhookEvent
  | TransferCompletedWebhookEvent
  | TransferCreatedWebhookEvent
  | TransferFailedWebhookEvent
  | VerificationSucceededWebhookEvent;

export interface WebhookCreateParams {
  /**
   * Body param: The URL to send the webhook to.
   */
  url: string;

  /**
   * Body param: The dated API version (Api-Version-Date) to pin this webhook's
   * payloads to. Omit to leave the webhook unpinned, tracking the current payload
   * shape.
   */
  api_version_date?: string | null;

  /**
   * Body param: Whether to send events for child resources. For example, if the
   * webhook is created for an account, enabling this sends events only from its
   * connected accounts.
   */
  child_resource_events?: boolean;

  /**
   * Body param: Whether or not the webhook is enabled. Defaults to `true`.
   */
  enabled?: boolean;

  /**
   * Body param: The events to send the webhook for, in dot form (for example
   * `payment.succeeded`).
   */
  events?: Array<
    | 'account.updated'
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
    | 'swap.completed'
    | 'deposit.succeeded'
    | 'transfer.created'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'payout.created'
    | 'payout.updated'
    | 'payout.reversed'
    | 'card_transaction.created'
    | 'card_transaction.updated'
    | 'card_transaction.completed'
    | 'card_transaction.declined'
    | 'card_transaction.reversed'
    | 'card.created'
    | 'card.updated'
    | 'card.frozen'
    | 'card.canceled'
    | 'card_application.created'
    | 'card_application.updated'
    | 'card_application.approved'
    | 'card_application.denied'
    | 'course_lesson_interaction.completed'
    | 'payout_method.created'
    | 'verification.succeeded'
    | 'identity_profile.approved'
    | 'identity_profile.rejected'
    | 'identity_profile.needs_action'
    | 'identity_profile.updated'
    | 'payout_account.status_updated'
    | 'payment.authorized'
    | 'payment.canceled'
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
    | 'ad_campaign.payment_failed'
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
    | 'membership.cancel_at_period_end_changed'
    | 'membership_went_valid'
    | 'membership_went_invalid'
    | 'membership_metadata_updated'
    | 'resolution_created'
    | 'resolution_updated'
    | 'resolution_decided'
    | 'payment_affiliate_reward_created'
    | 'membership_experience_claimed'
    | 'app_membership_went_valid'
    | 'app_membership_went_invalid'
    | 'app_payment_created'
    | 'app_payment_succeeded'
    | 'app_payment_failed'
    | 'app_payment_pending'
    | 'app_membership_cancel_at_period_end_changed'
    | 'payment_created'
    | 'payment_succeeded'
    | 'payment_failed'
    | 'payment_pending'
    | 'dispute_created'
    | 'dispute_updated'
    | 'refund_created'
    | 'refund_updated'
    | 'dispute_alert_created'
    | 'membership_cancel_at_period_end_changed'
    | 'membership.went_valid'
    | 'membership.went_invalid'
    | 'membership.metadata_updated'
    | 'resolution.created'
    | 'resolution.updated'
    | 'resolution.decided'
    | 'payment.affiliate_reward_created'
    | 'membership.experience_claimed'
    | 'app_membership.went_valid'
    | 'app_membership.went_invalid'
    | 'app_payment.created'
    | 'app_payment.succeeded'
    | 'app_payment.failed'
    | 'app_payment.pending'
    | 'app_membership.cancel_at_period_end_changed'
  >;

  /**
   * Body param: The account or app to create the webhook for. Defaults to the
   * current account.
   */
  resource_id?: string | null;

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

export interface WebhookRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface WebhookUpdateParams {
  /**
   * Body param: The dated API version (Api-Version-Date) to pin this webhook's
   * payloads to. Only valid for `v1` webhooks. Omit to leave the current pin
   * unchanged, or pass `null` to unpin and track the current payload shape.
   */
  api_version_date?: string | null;

  /**
   * Body param: Whether or not to send events for child resources.
   */
  child_resource_events?: boolean;

  /**
   * Body param: Whether or not the webhook is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: The events to send the webhook for, in dot form (for example
   * `payment.succeeded`).
   */
  events?: Array<
    | 'account.updated'
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
    | 'swap.completed'
    | 'deposit.succeeded'
    | 'transfer.created'
    | 'transfer.completed'
    | 'transfer.failed'
    | 'payout.created'
    | 'payout.updated'
    | 'payout.reversed'
    | 'card_transaction.created'
    | 'card_transaction.updated'
    | 'card_transaction.completed'
    | 'card_transaction.declined'
    | 'card_transaction.reversed'
    | 'card.created'
    | 'card.updated'
    | 'card.frozen'
    | 'card.canceled'
    | 'card_application.created'
    | 'card_application.updated'
    | 'card_application.approved'
    | 'card_application.denied'
    | 'course_lesson_interaction.completed'
    | 'payout_method.created'
    | 'verification.succeeded'
    | 'identity_profile.approved'
    | 'identity_profile.rejected'
    | 'identity_profile.needs_action'
    | 'identity_profile.updated'
    | 'payout_account.status_updated'
    | 'payment.authorized'
    | 'payment.canceled'
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
    | 'ad_campaign.payment_failed'
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
    | 'membership.cancel_at_period_end_changed'
    | 'membership_went_valid'
    | 'membership_went_invalid'
    | 'membership_metadata_updated'
    | 'resolution_created'
    | 'resolution_updated'
    | 'resolution_decided'
    | 'payment_affiliate_reward_created'
    | 'membership_experience_claimed'
    | 'app_membership_went_valid'
    | 'app_membership_went_invalid'
    | 'app_payment_created'
    | 'app_payment_succeeded'
    | 'app_payment_failed'
    | 'app_payment_pending'
    | 'app_membership_cancel_at_period_end_changed'
    | 'payment_created'
    | 'payment_succeeded'
    | 'payment_failed'
    | 'payment_pending'
    | 'dispute_created'
    | 'dispute_updated'
    | 'refund_created'
    | 'refund_updated'
    | 'dispute_alert_created'
    | 'membership_cancel_at_period_end_changed'
    | 'membership.went_valid'
    | 'membership.went_invalid'
    | 'membership.metadata_updated'
    | 'resolution.created'
    | 'resolution.updated'
    | 'resolution.decided'
    | 'payment.affiliate_reward_created'
    | 'membership.experience_claimed'
    | 'app_membership.went_valid'
    | 'app_membership.went_invalid'
    | 'app_payment.created'
    | 'app_payment.succeeded'
    | 'app_payment.failed'
    | 'app_payment.pending'
    | 'app_membership.cancel_at_period_end_changed'
  >;

  /**
   * Body param: The URL to send the webhook to.
   */
  url?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface WebhookListParams extends CursorPageParams {
  /**
   * Query param: The unique identifier of the account to list webhooks for.
   */
  account_id: string;

  /**
   * Query param: Only return webhooks attached to this app. Omit to list the
   * account's own webhooks.
   */
  app_id?: string;

  /**
   * Query param: A cursor; returns webhooks before this position.
   */
  before?: string;

  /**
   * Query param: The number of webhooks to return (default 20, max 100).
   */
  first?: number;

  /**
   * Query param: Only return webhooks whose endpoint is currently failing — every
   * delivery since the current failure streak began has been rejected. Clears as
   * soon as a delivery succeeds.
   */
  has_failures?: boolean;

  /**
   * Query param: Also return webhooks attached to the account's apps, not just the
   * account's own. Cannot be combined with `app_id`.
   */
  include_app_webhooks?: boolean;

  /**
   * Query param: The number of webhooks to return from the end of the range.
   */
  last?: number;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface WebhookDeleteParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Webhooks {
  export {
    type APIVersion as APIVersion,
    type Webhook as Webhook,
    type WebhookEvent as WebhookEvent,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type AccountUpdatedWebhookEvent as AccountUpdatedWebhookEvent,
    type AdCampaignPaymentFailedWebhookEvent as AdCampaignPaymentFailedWebhookEvent,
    type CardCanceledWebhookEvent as CardCanceledWebhookEvent,
    type CardCreatedWebhookEvent as CardCreatedWebhookEvent,
    type CardFrozenWebhookEvent as CardFrozenWebhookEvent,
    type CardUpdatedWebhookEvent as CardUpdatedWebhookEvent,
    type CardApplicationApprovedWebhookEvent as CardApplicationApprovedWebhookEvent,
    type CardApplicationCreatedWebhookEvent as CardApplicationCreatedWebhookEvent,
    type CardApplicationDeniedWebhookEvent as CardApplicationDeniedWebhookEvent,
    type CardApplicationUpdatedWebhookEvent as CardApplicationUpdatedWebhookEvent,
    type CardTransactionCompletedWebhookEvent as CardTransactionCompletedWebhookEvent,
    type CardTransactionCreatedWebhookEvent as CardTransactionCreatedWebhookEvent,
    type CardTransactionDeclinedWebhookEvent as CardTransactionDeclinedWebhookEvent,
    type CardTransactionReversedWebhookEvent as CardTransactionReversedWebhookEvent,
    type CardTransactionUpdatedWebhookEvent as CardTransactionUpdatedWebhookEvent,
    type ChatMessageCreatedWebhookEvent as ChatMessageCreatedWebhookEvent,
    type ChatReactionCreatedWebhookEvent as ChatReactionCreatedWebhookEvent,
    type CourseLessonInteractionCompletedWebhookEvent as CourseLessonInteractionCompletedWebhookEvent,
    type DepositSucceededWebhookEvent as DepositSucceededWebhookEvent,
    type DisputeCreatedWebhookEvent as DisputeCreatedWebhookEvent,
    type DisputeUpdatedWebhookEvent as DisputeUpdatedWebhookEvent,
    type DisputeAlertCreatedWebhookEvent as DisputeAlertCreatedWebhookEvent,
    type EntryApprovedWebhookEvent as EntryApprovedWebhookEvent,
    type EntryCreatedWebhookEvent as EntryCreatedWebhookEvent,
    type EntryDeletedWebhookEvent as EntryDeletedWebhookEvent,
    type EntryDeniedWebhookEvent as EntryDeniedWebhookEvent,
    type ExportCompletedWebhookEvent as ExportCompletedWebhookEvent,
    type ExportFailedWebhookEvent as ExportFailedWebhookEvent,
    type IdentityProfileUpdatedWebhookEvent as IdentityProfileUpdatedWebhookEvent,
    type InvoiceCreatedWebhookEvent as InvoiceCreatedWebhookEvent,
    type InvoiceMarkedUncollectibleWebhookEvent as InvoiceMarkedUncollectibleWebhookEvent,
    type InvoicePaidWebhookEvent as InvoicePaidWebhookEvent,
    type InvoicePastDueWebhookEvent as InvoicePastDueWebhookEvent,
    type InvoiceVoidedWebhookEvent as InvoiceVoidedWebhookEvent,
    type LedgerAccountFundsAvailableWebhookEvent as LedgerAccountFundsAvailableWebhookEvent,
    type MemberCreatedWebhookEvent as MemberCreatedWebhookEvent,
    type MembershipActivatedWebhookEvent as MembershipActivatedWebhookEvent,
    type MembershipCancelAtPeriodEndChangedWebhookEvent as MembershipCancelAtPeriodEndChangedWebhookEvent,
    type MembershipDeactivatedWebhookEvent as MembershipDeactivatedWebhookEvent,
    type MembershipTrialEndingSoonWebhookEvent as MembershipTrialEndingSoonWebhookEvent,
    type PaymentAuthorizedWebhookEvent as PaymentAuthorizedWebhookEvent,
    type PaymentCanceledWebhookEvent as PaymentCanceledWebhookEvent,
    type PaymentCreatedWebhookEvent as PaymentCreatedWebhookEvent,
    type PaymentFailedWebhookEvent as PaymentFailedWebhookEvent,
    type PaymentPendingWebhookEvent as PaymentPendingWebhookEvent,
    type PaymentSucceededWebhookEvent as PaymentSucceededWebhookEvent,
    type PayoutCreatedWebhookEvent as PayoutCreatedWebhookEvent,
    type PayoutReversedWebhookEvent as PayoutReversedWebhookEvent,
    type PayoutUpdatedWebhookEvent as PayoutUpdatedWebhookEvent,
    type PayoutAccountStatusUpdatedWebhookEvent as PayoutAccountStatusUpdatedWebhookEvent,
    type PayoutMethodCreatedWebhookEvent as PayoutMethodCreatedWebhookEvent,
    type PlanCreatedWebhookEvent as PlanCreatedWebhookEvent,
    type PlanDeletedWebhookEvent as PlanDeletedWebhookEvent,
    type PlanUpdatedWebhookEvent as PlanUpdatedWebhookEvent,
    type ProductCreatedWebhookEvent as ProductCreatedWebhookEvent,
    type ProductDeletedWebhookEvent as ProductDeletedWebhookEvent,
    type ProductPublishedWebhookEvent as ProductPublishedWebhookEvent,
    type ProductUnpublishedWebhookEvent as ProductUnpublishedWebhookEvent,
    type ProductUpdatedWebhookEvent as ProductUpdatedWebhookEvent,
    type RefundCreatedWebhookEvent as RefundCreatedWebhookEvent,
    type RefundUpdatedWebhookEvent as RefundUpdatedWebhookEvent,
    type ResolutionCenterCaseCreatedWebhookEvent as ResolutionCenterCaseCreatedWebhookEvent,
    type ResolutionCenterCaseDecidedWebhookEvent as ResolutionCenterCaseDecidedWebhookEvent,
    type ResolutionCenterCaseUpdatedWebhookEvent as ResolutionCenterCaseUpdatedWebhookEvent,
    type SetupIntentCanceledWebhookEvent as SetupIntentCanceledWebhookEvent,
    type SetupIntentRequiresActionWebhookEvent as SetupIntentRequiresActionWebhookEvent,
    type SetupIntentSucceededWebhookEvent as SetupIntentSucceededWebhookEvent,
    type ShipmentCreatedWebhookEvent as ShipmentCreatedWebhookEvent,
    type ShipmentUpdatedWebhookEvent as ShipmentUpdatedWebhookEvent,
    type SwapCompletedWebhookEvent as SwapCompletedWebhookEvent,
    type TransferCompletedWebhookEvent as TransferCompletedWebhookEvent,
    type TransferCreatedWebhookEvent as TransferCreatedWebhookEvent,
    type TransferFailedWebhookEvent as TransferFailedWebhookEvent,
    type VerificationSucceededWebhookEvent as VerificationSucceededWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
    type WebhookListResponsesCursorPage as WebhookListResponsesCursorPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
  };
}
