// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DisputesAPI from './disputes';
import * as PaymentsAPI from './payments';
import * as RefundsAPI from './refunds';
import * as SetupIntentsAPI from './setup-intents';
import * as Shared from './shared';
import * as WithdrawalsAPI from './withdrawals';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): UnwrapWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookKey : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as UnwrapWebhookEvent;
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
   * A membership represents a purchase between a User and a Company for a specific
   * Product.
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
   * A membership represents a purchase between a User and a Company for a specific
   * Product.
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
   * An object representing an entry in a waitlist.
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
   * An object representing an entry in a waitlist.
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
   * An object representing an entry in a waitlist.
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
   * An object representing an entry in a waitlist.
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
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
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
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
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
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
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
   * A withdrawal request.
   */
  data: WithdrawalCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'withdrawal.created';
}

export namespace WithdrawalCreatedWebhookEvent {
  /**
   * A withdrawal request.
   */
  export interface Data {
    /**
     * Internal ID of the withdrawal request.
     */
    id: string;

    /**
     * How much money was attempted to be withdrawn, in a float type.
     */
    amount: number;

    /**
     * When the withdrawal request was created.
     */
    created_at: string;

    /**
     * The currency of the withdrawal request.
     */
    currency: Shared.Currency;

    /**
     * The different error codes a payout can be in.
     */
    error_code:
      | 'account_closed'
      | 'account_does_not_exist'
      | 'account_information_invalid'
      | 'account_number_invalid_region'
      | 'account_frozen'
      | 'account_lookup_failed'
      | 'account_not_found'
      | 'amount_out_of_bounds'
      | 'attributes_not_validated'
      | 'b2b_payments_prohibited'
      | 'bank_statement_required'
      | 'compliance_review'
      | 'currency_not_supported'
      | 'deposit_canceled'
      | 'deposit_failed'
      | 'deposit_rejected'
      | 'destination_unavailable'
      | 'exceeded_account_limit'
      | 'expired_quote'
      | 'generic_payout_error'
      | 'technical_problem'
      | 'identification_number_invalid'
      | 'invalid_account_number'
      | 'invalid_bank_code'
      | 'invalid_beneficiary'
      | 'invalid_branch_number'
      | 'invalid_branch_code'
      | 'invalid_phone_number'
      | 'invalid_routing_number'
      | 'invalid_swift_code'
      | 'invalid_company_details'
      | 'manual_cancelation'
      | 'misc_error'
      | 'missing_city_and_country'
      | 'missing_phone_number'
      | 'missing_remittance_info'
      | 'payee_name_invalid'
      | 'receiving_account_locked'
      | 'rejected_by_compliance'
      | 'rtp_not_supported'
      | 'non_transaction_account'
      | 'source_token_insufficient_funds'
      | 'ssn_invalid'
      | 'wallet_screenshot_required'
      | 'unsupported_region'
      | null;

    /**
     * The error message for the withdrawal, if any.
     */
    error_message: string | null;

    /**
     * The estimated availability date for the withdrawal, if any.
     */
    estimated_availability: string | null;

    /**
     * The fee amount that was charged for the withdrawal. This is in the same currency
     * as the withdrawal amount.
     */
    fee_amount: number;

    /**
     * The different fee types for a withdrawal.
     */
    fee_type: WithdrawalsAPI.WithdrawalFeeTypes | null;

    /**
     * The ledger account associated with the withdrawal.
     */
    ledger_account: Data.LedgerAccount;

    /**
     * The markup fee that was charged for the withdrawal. This is in the same currency
     * as the withdrawal amount. This only applies to platform accounts using Whop
     * Rails.
     */
    markup_fee: number;

    /**
     * The payout token used for the withdrawal, if applicable.
     */
    payout_token: Data.PayoutToken | null;

    /**
     * The speed of the withdrawal.
     */
    speed: WithdrawalsAPI.WithdrawalSpeeds;

    /**
     * Status of the withdrawal.
     */
    status: WithdrawalsAPI.WithdrawalStatus;

    /**
     * The trace code for the payout, if applicable. Provided on ACH transactions when
     * available.
     */
    trace_code: string | null;

    /**
     * The type of withdrawal.
     */
    withdrawal_type: WithdrawalsAPI.WithdrawalTypes;
  }

  export namespace Data {
    /**
     * The ledger account associated with the withdrawal.
     */
    export interface LedgerAccount {
      /**
       * The ID of the LedgerAccount.
       */
      id: string;

      /**
       * The ID of the company associated with this ledger account.
       */
      company_id: string | null;
    }

    /**
     * The payout token used for the withdrawal, if applicable.
     */
    export interface PayoutToken {
      /**
       * The ID of the payout token
       */
      id: string;

      /**
       * The date and time the payout token was created
       */
      created_at: string;

      /**
       * The currency code of the payout destination. This is the currency that payouts
       * will be made in for this token.
       */
      destination_currency_code: string;

      /**
       * An optional nickname for the payout token to help the user identify it. This is
       * not used by the provider and is only for the user's reference.
       */
      nickname: string | null;

      /**
       * The name of the payer associated with the payout token.
       */
      payer_name: string | null;
    }
  }
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
   * A withdrawal request.
   */
  data: WithdrawalUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'withdrawal.updated';
}

export namespace WithdrawalUpdatedWebhookEvent {
  /**
   * A withdrawal request.
   */
  export interface Data {
    /**
     * Internal ID of the withdrawal request.
     */
    id: string;

    /**
     * How much money was attempted to be withdrawn, in a float type.
     */
    amount: number;

    /**
     * When the withdrawal request was created.
     */
    created_at: string;

    /**
     * The currency of the withdrawal request.
     */
    currency: Shared.Currency;

    /**
     * The different error codes a payout can be in.
     */
    error_code:
      | 'account_closed'
      | 'account_does_not_exist'
      | 'account_information_invalid'
      | 'account_number_invalid_region'
      | 'account_frozen'
      | 'account_lookup_failed'
      | 'account_not_found'
      | 'amount_out_of_bounds'
      | 'attributes_not_validated'
      | 'b2b_payments_prohibited'
      | 'bank_statement_required'
      | 'compliance_review'
      | 'currency_not_supported'
      | 'deposit_canceled'
      | 'deposit_failed'
      | 'deposit_rejected'
      | 'destination_unavailable'
      | 'exceeded_account_limit'
      | 'expired_quote'
      | 'generic_payout_error'
      | 'technical_problem'
      | 'identification_number_invalid'
      | 'invalid_account_number'
      | 'invalid_bank_code'
      | 'invalid_beneficiary'
      | 'invalid_branch_number'
      | 'invalid_branch_code'
      | 'invalid_phone_number'
      | 'invalid_routing_number'
      | 'invalid_swift_code'
      | 'invalid_company_details'
      | 'manual_cancelation'
      | 'misc_error'
      | 'missing_city_and_country'
      | 'missing_phone_number'
      | 'missing_remittance_info'
      | 'payee_name_invalid'
      | 'receiving_account_locked'
      | 'rejected_by_compliance'
      | 'rtp_not_supported'
      | 'non_transaction_account'
      | 'source_token_insufficient_funds'
      | 'ssn_invalid'
      | 'wallet_screenshot_required'
      | 'unsupported_region'
      | null;

    /**
     * The error message for the withdrawal, if any.
     */
    error_message: string | null;

    /**
     * The estimated availability date for the withdrawal, if any.
     */
    estimated_availability: string | null;

    /**
     * The fee amount that was charged for the withdrawal. This is in the same currency
     * as the withdrawal amount.
     */
    fee_amount: number;

    /**
     * The different fee types for a withdrawal.
     */
    fee_type: WithdrawalsAPI.WithdrawalFeeTypes | null;

    /**
     * The ledger account associated with the withdrawal.
     */
    ledger_account: Data.LedgerAccount;

    /**
     * The markup fee that was charged for the withdrawal. This is in the same currency
     * as the withdrawal amount. This only applies to platform accounts using Whop
     * Rails.
     */
    markup_fee: number;

    /**
     * The payout token used for the withdrawal, if applicable.
     */
    payout_token: Data.PayoutToken | null;

    /**
     * The speed of the withdrawal.
     */
    speed: WithdrawalsAPI.WithdrawalSpeeds;

    /**
     * Status of the withdrawal.
     */
    status: WithdrawalsAPI.WithdrawalStatus;

    /**
     * The trace code for the payout, if applicable. Provided on ACH transactions when
     * available.
     */
    trace_code: string | null;

    /**
     * The type of withdrawal.
     */
    withdrawal_type: WithdrawalsAPI.WithdrawalTypes;
  }

  export namespace Data {
    /**
     * The ledger account associated with the withdrawal.
     */
    export interface LedgerAccount {
      /**
       * The ID of the LedgerAccount.
       */
      id: string;

      /**
       * The ID of the company associated with this ledger account.
       */
      company_id: string | null;
    }

    /**
     * The payout token used for the withdrawal, if applicable.
     */
    export interface PayoutToken {
      /**
       * The ID of the payout token
       */
      id: string;

      /**
       * The date and time the payout token was created
       */
      created_at: string;

      /**
       * The currency code of the payout destination. This is the currency that payouts
       * will be made in for this token.
       */
      destination_currency_code: string;

      /**
       * An optional nickname for the payout token to help the user identify it. This is
       * not used by the provider and is only for the user's reference.
       */
      nickname: string | null;

      /**
       * The name of the payer associated with the payout token.
       */
      payer_name: string | null;
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
}

export namespace PayoutMethodCreatedWebhookEvent {
  /**
   * An object representing an user's setup payout destination.
   */
  export interface Data {
    /**
     * The ID of the payout token
     */
    id: string;

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
     * An optional nickname for the payout token to help the user identify it. This is
     * not used by the provider and is only for the user's reference.
     */
    nickname: string | null;
  }

  export namespace Data {
    /**
     * The payout destination associated with the payout token
     */
    export interface Destination {
      /**
       * The category of the payout destination
       */
      category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown';

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
   * An object representing a receipt for a membership.
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
   * An object representing a receipt for a membership.
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
   * An object representing a receipt for a membership.
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
   * An object representing a receipt for a membership.
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
   * An object representing a dispute against a company.
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
   * An object representing a dispute against a company.
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
   * An object representing a refund made on a payment.
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
}

export namespace RefundCreatedWebhookEvent {
  /**
   * An object representing a refund made on a payment.
   */
  export interface Data {
    /**
     * The ID of the refund.
     */
    id: string;

    /**
     * The amount of the refund.
     */
    amount: number;

    /**
     * The time the refund was created.
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
       * The payment ID
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
       * The datetime the payment was created
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
         * The ID of the member
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
         * The internal ID of the membership.
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
         * The internal ID of the user.
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
   * An object representing a refund made on a payment.
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
}

export namespace RefundUpdatedWebhookEvent {
  /**
   * An object representing a refund made on a payment.
   */
  export interface Data {
    /**
     * The ID of the refund.
     */
    id: string;

    /**
     * The amount of the refund.
     */
    amount: number;

    /**
     * The time the refund was created.
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
       * The payment ID
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
       * The datetime the payment was created
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
         * The ID of the member
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
         * The internal ID of the membership.
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
         * The internal ID of the user.
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
  | PaymentCreatedWebhookEvent
  | PaymentSucceededWebhookEvent
  | PaymentFailedWebhookEvent
  | PaymentPendingWebhookEvent
  | DisputeCreatedWebhookEvent
  | DisputeUpdatedWebhookEvent
  | RefundCreatedWebhookEvent
  | RefundUpdatedWebhookEvent;

export declare namespace Webhooks {
  export {
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
    type PaymentCreatedWebhookEvent as PaymentCreatedWebhookEvent,
    type PaymentSucceededWebhookEvent as PaymentSucceededWebhookEvent,
    type PaymentFailedWebhookEvent as PaymentFailedWebhookEvent,
    type PaymentPendingWebhookEvent as PaymentPendingWebhookEvent,
    type DisputeCreatedWebhookEvent as DisputeCreatedWebhookEvent,
    type DisputeUpdatedWebhookEvent as DisputeUpdatedWebhookEvent,
    type RefundCreatedWebhookEvent as RefundCreatedWebhookEvent,
    type RefundUpdatedWebhookEvent as RefundUpdatedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
