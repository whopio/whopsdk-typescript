// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DisputesAPI from './disputes';
import * as PaymentsAPI from './payments';
import * as RefundsAPI from './refunds';
import * as Shared from './shared';
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
  data: SetupIntentRequiresActionWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'setup_intent.requires_action';
}

export namespace SetupIntentRequiresActionWebhookEvent {
  /**
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
   */
  export interface Data {
    /**
     * The setup intent ID
     */
    id: string;

    /**
     * The checkout configuration associated with the setup intent
     */
    checkout_configuration: Data.CheckoutConfiguration | null;

    /**
     * The company of the setup intent
     */
    company: Data.Company | null;

    /**
     * The datetime the payment was created
     */
    created_at: string;

    /**
     * The error message, if any.
     */
    error_message: string | null;

    /**
     * The member connected to the setup intent
     */
    member: Data.Member | null;

    /**
     * The metadata associated with the setup intent
     */
    metadata: { [key: string]: unknown } | null;

    /**
     * The payment token created during the setup, if available.
     */
    payment_token: Data.PaymentToken | null;

    /**
     * The status of the setup intent
     */
    status: 'processing' | 'succeeded' | 'canceled' | 'requires_action';
  }

  export namespace Data {
    /**
     * The checkout configuration associated with the setup intent
     */
    export interface CheckoutConfiguration {
      /**
       * The ID of the checkout configuration
       */
      id: string;
    }

    /**
     * The company of the setup intent
     */
    export interface Company {
      /**
       * The ID (tag) of the company.
       */
      id: string;
    }

    /**
     * The member connected to the setup intent
     */
    export interface Member {
      /**
       * The ID of the member
       */
      id: string;

      /**
       * The user for this member, if any.
       */
      user: Member.User | null;
    }

    export namespace Member {
      /**
       * The user for this member, if any.
       */
      export interface User {
        /**
         * The internal ID of the user account.
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

    /**
     * The payment token created during the setup, if available.
     */
    export interface PaymentToken {
      /**
       * The ID of the payment token
       */
      id: string;

      /**
       * The card data associated with the payment token, if its a debit or credit card
       * token.
       */
      card: PaymentToken.Card | null;

      /**
       * The date and time the payment token was created
       */
      created_at: string;

      /**
       * The payment method type of the payment token
       */
      payment_method_type: PaymentsAPI.PaymentMethodTypes;
    }

    export namespace PaymentToken {
      /**
       * The card data associated with the payment token, if its a debit or credit card
       * token.
       */
      export interface Card {
        /**
         * Possible card brands that a payment token can have
         */
        brand: PaymentsAPI.CardBrands | null;

        /**
         * Card expiration month, like 03 for March.
         */
        exp_month: number | null;

        /**
         * Card expiration year, like 27 for 2027.
         */
        exp_year: number | null;

        /**
         * Last four digits of the card.
         */
        last4: string | null;
      }
    }
  }
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
  data: SetupIntentSucceededWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'setup_intent.succeeded';
}

export namespace SetupIntentSucceededWebhookEvent {
  /**
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
   */
  export interface Data {
    /**
     * The setup intent ID
     */
    id: string;

    /**
     * The checkout configuration associated with the setup intent
     */
    checkout_configuration: Data.CheckoutConfiguration | null;

    /**
     * The company of the setup intent
     */
    company: Data.Company | null;

    /**
     * The datetime the payment was created
     */
    created_at: string;

    /**
     * The error message, if any.
     */
    error_message: string | null;

    /**
     * The member connected to the setup intent
     */
    member: Data.Member | null;

    /**
     * The metadata associated with the setup intent
     */
    metadata: { [key: string]: unknown } | null;

    /**
     * The payment token created during the setup, if available.
     */
    payment_token: Data.PaymentToken | null;

    /**
     * The status of the setup intent
     */
    status: 'processing' | 'succeeded' | 'canceled' | 'requires_action';
  }

  export namespace Data {
    /**
     * The checkout configuration associated with the setup intent
     */
    export interface CheckoutConfiguration {
      /**
       * The ID of the checkout configuration
       */
      id: string;
    }

    /**
     * The company of the setup intent
     */
    export interface Company {
      /**
       * The ID (tag) of the company.
       */
      id: string;
    }

    /**
     * The member connected to the setup intent
     */
    export interface Member {
      /**
       * The ID of the member
       */
      id: string;

      /**
       * The user for this member, if any.
       */
      user: Member.User | null;
    }

    export namespace Member {
      /**
       * The user for this member, if any.
       */
      export interface User {
        /**
         * The internal ID of the user account.
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

    /**
     * The payment token created during the setup, if available.
     */
    export interface PaymentToken {
      /**
       * The ID of the payment token
       */
      id: string;

      /**
       * The card data associated with the payment token, if its a debit or credit card
       * token.
       */
      card: PaymentToken.Card | null;

      /**
       * The date and time the payment token was created
       */
      created_at: string;

      /**
       * The payment method type of the payment token
       */
      payment_method_type: PaymentsAPI.PaymentMethodTypes;
    }

    export namespace PaymentToken {
      /**
       * The card data associated with the payment token, if its a debit or credit card
       * token.
       */
      export interface Card {
        /**
         * Possible card brands that a payment token can have
         */
        brand: PaymentsAPI.CardBrands | null;

        /**
         * Card expiration month, like 03 for March.
         */
        exp_month: number | null;

        /**
         * Card expiration year, like 27 for 2027.
         */
        exp_year: number | null;

        /**
         * Last four digits of the card.
         */
        last4: string | null;
      }
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
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
   */
  data: SetupIntentCanceledWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'setup_intent.canceled';
}

export namespace SetupIntentCanceledWebhookEvent {
  /**
   * An object representing a setup intent, which is a flow for allowing a customer
   * to add a payment method to their account without making a purchase.
   */
  export interface Data {
    /**
     * The setup intent ID
     */
    id: string;

    /**
     * The checkout configuration associated with the setup intent
     */
    checkout_configuration: Data.CheckoutConfiguration | null;

    /**
     * The company of the setup intent
     */
    company: Data.Company | null;

    /**
     * The datetime the payment was created
     */
    created_at: string;

    /**
     * The error message, if any.
     */
    error_message: string | null;

    /**
     * The member connected to the setup intent
     */
    member: Data.Member | null;

    /**
     * The metadata associated with the setup intent
     */
    metadata: { [key: string]: unknown } | null;

    /**
     * The payment token created during the setup, if available.
     */
    payment_token: Data.PaymentToken | null;

    /**
     * The status of the setup intent
     */
    status: 'processing' | 'succeeded' | 'canceled' | 'requires_action';
  }

  export namespace Data {
    /**
     * The checkout configuration associated with the setup intent
     */
    export interface CheckoutConfiguration {
      /**
       * The ID of the checkout configuration
       */
      id: string;
    }

    /**
     * The company of the setup intent
     */
    export interface Company {
      /**
       * The ID (tag) of the company.
       */
      id: string;
    }

    /**
     * The member connected to the setup intent
     */
    export interface Member {
      /**
       * The ID of the member
       */
      id: string;

      /**
       * The user for this member, if any.
       */
      user: Member.User | null;
    }

    export namespace Member {
      /**
       * The user for this member, if any.
       */
      export interface User {
        /**
         * The internal ID of the user account.
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

    /**
     * The payment token created during the setup, if available.
     */
    export interface PaymentToken {
      /**
       * The ID of the payment token
       */
      id: string;

      /**
       * The card data associated with the payment token, if its a debit or credit card
       * token.
       */
      card: PaymentToken.Card | null;

      /**
       * The date and time the payment token was created
       */
      created_at: string;

      /**
       * The payment method type of the payment token
       */
      payment_method_type: PaymentsAPI.PaymentMethodTypes;
    }

    export namespace PaymentToken {
      /**
       * The card data associated with the payment token, if its a debit or credit card
       * token.
       */
      export interface Card {
        /**
         * Possible card brands that a payment token can have
         */
        brand: PaymentsAPI.CardBrands | null;

        /**
         * Card expiration month, like 03 for March.
         */
        exp_month: number | null;

        /**
         * Card expiration year, like 27 for 2027.
         */
        exp_year: number | null;

        /**
         * Last four digits of the card.
         */
        last4: string | null;
      }
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
  | CourseLessonInteractionCompletedWebhookEvent
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
    type CourseLessonInteractionCompletedWebhookEvent as CourseLessonInteractionCompletedWebhookEvent,
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
