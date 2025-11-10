// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
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
  data: DisputeCreatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'dispute.created';
}

export namespace DisputeCreatedWebhookEvent {
  /**
   * An object representing a dispute against a company.
   */
  export interface Data {
    /**
     * The internal ID of the dispute.
     */
    id: string;

    /**
     * An IP access log for the user from Whop.
     */
    access_activity_log: string | null;

    /**
     * The amount of the dispute (formatted).
     */
    amount: number;

    /**
     * The billing address of the user from their payment details.
     */
    billing_address: string | null;

    /**
     * The cancellation policy for this dispute
     */
    cancellation_policy_attachment: Data.CancellationPolicyAttachment | null;

    /**
     * A cancellation policy disclosure from the company.
     */
    cancellation_policy_disclosure: string | null;

    /**
     * The company the dispute is against.
     */
    company: Data.Company | null;

    /**
     * When it was made.
     */
    created_at: string | null;

    /**
     * The currency of the dispute.
     */
    currency: Shared.Currency;

    /**
     * The customer communication for this dispute
     */
    customer_communication_attachment: Data.CustomerCommunicationAttachment | null;

    /**
     * The email of the customer from their payment details. This is submitted in the
     * evidence packet to the payment processor. You can change it before submitting
     * the dispute.
     */
    customer_email_address: string | null;

    /**
     * The name of the customer from their payment details. This is submitted in the
     * evidence packet to the payment processor. You can change it before submitting
     * the dispute.
     */
    customer_name: string | null;

    /**
     * Whether or not the dispute data can be edited.
     */
    editable: boolean | null;

    /**
     * The last date the dispute is allow to be submitted by.
     */
    needs_response_by: string | null;

    /**
     * Additional notes the company chooses to submit regarding the dispute.
     */
    notes: string | null;

    /**
     * The payment that got disputed
     */
    payment: Data.Payment | null;

    /**
     * The plan that got disputed
     */
    plan: Data.Plan | null;

    /**
     * The product that got disputed
     */
    product: Data.Product | null;

    /**
     * The description of the product from the company.
     */
    product_description: string | null;

    /**
     * The reason for the dispute
     */
    reason: string | null;

    /**
     * The refund policy for this dispute
     */
    refund_policy_attachment: Data.RefundPolicyAttachment | null;

    /**
     * A refund policy disclosure from the company.
     */
    refund_policy_disclosure: string | null;

    /**
     * A description on why the refund is being refused by the company.
     */
    refund_refusal_explanation: string | null;

    /**
     * When the product was delivered by the company.
     */
    service_date: string | null;

    /**
     * The status of the dispute (mimics stripe's dispute status).
     */
    status:
      | 'warning_needs_response'
      | 'warning_under_review'
      | 'warning_closed'
      | 'needs_response'
      | 'under_review'
      | 'won'
      | 'lost'
      | 'closed'
      | 'other';

    /**
     * An attachment that did not fit into the other categories
     */
    uncategorized_attachment: Data.UncategorizedAttachment | null;

    /**
     * Whether or not the dispute is a Visa Rapid Dispute Resolution.
     */
    visa_rdr: boolean;
  }

  export namespace Data {
    /**
     * The cancellation policy for this dispute
     */
    export interface CancellationPolicyAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }

    /**
     * The company the dispute is against.
     */
    export interface Company {
      /**
       * The ID of the company
       */
      id: string;

      /**
       * The written name of the company.
       */
      title: string;
    }

    /**
     * The customer communication for this dispute
     */
    export interface CustomerCommunicationAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }

    /**
     * The payment that got disputed
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

    /**
     * The plan that got disputed
     */
    export interface Plan {
      /**
       * The internal ID of the plan.
       */
      id: string;
    }

    /**
     * The product that got disputed
     */
    export interface Product {
      /**
       * The internal ID of the public product.
       */
      id: string;

      /**
       * The title of the product. Use for Whop 4.0.
       */
      title: string;
    }

    /**
     * The refund policy for this dispute
     */
    export interface RefundPolicyAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }

    /**
     * An attachment that did not fit into the other categories
     */
    export interface UncategorizedAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }
  }
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
  data: DisputeUpdatedWebhookEvent.Data;

  /**
   * The timestamp in ISO 8601 format that the webhook was sent at on the server
   */
  timestamp: string;

  /**
   * The webhook event type
   */
  type: 'dispute.updated';
}

export namespace DisputeUpdatedWebhookEvent {
  /**
   * An object representing a dispute against a company.
   */
  export interface Data {
    /**
     * The internal ID of the dispute.
     */
    id: string;

    /**
     * An IP access log for the user from Whop.
     */
    access_activity_log: string | null;

    /**
     * The amount of the dispute (formatted).
     */
    amount: number;

    /**
     * The billing address of the user from their payment details.
     */
    billing_address: string | null;

    /**
     * The cancellation policy for this dispute
     */
    cancellation_policy_attachment: Data.CancellationPolicyAttachment | null;

    /**
     * A cancellation policy disclosure from the company.
     */
    cancellation_policy_disclosure: string | null;

    /**
     * The company the dispute is against.
     */
    company: Data.Company | null;

    /**
     * When it was made.
     */
    created_at: string | null;

    /**
     * The currency of the dispute.
     */
    currency: Shared.Currency;

    /**
     * The customer communication for this dispute
     */
    customer_communication_attachment: Data.CustomerCommunicationAttachment | null;

    /**
     * The email of the customer from their payment details. This is submitted in the
     * evidence packet to the payment processor. You can change it before submitting
     * the dispute.
     */
    customer_email_address: string | null;

    /**
     * The name of the customer from their payment details. This is submitted in the
     * evidence packet to the payment processor. You can change it before submitting
     * the dispute.
     */
    customer_name: string | null;

    /**
     * Whether or not the dispute data can be edited.
     */
    editable: boolean | null;

    /**
     * The last date the dispute is allow to be submitted by.
     */
    needs_response_by: string | null;

    /**
     * Additional notes the company chooses to submit regarding the dispute.
     */
    notes: string | null;

    /**
     * The payment that got disputed
     */
    payment: Data.Payment | null;

    /**
     * The plan that got disputed
     */
    plan: Data.Plan | null;

    /**
     * The product that got disputed
     */
    product: Data.Product | null;

    /**
     * The description of the product from the company.
     */
    product_description: string | null;

    /**
     * The reason for the dispute
     */
    reason: string | null;

    /**
     * The refund policy for this dispute
     */
    refund_policy_attachment: Data.RefundPolicyAttachment | null;

    /**
     * A refund policy disclosure from the company.
     */
    refund_policy_disclosure: string | null;

    /**
     * A description on why the refund is being refused by the company.
     */
    refund_refusal_explanation: string | null;

    /**
     * When the product was delivered by the company.
     */
    service_date: string | null;

    /**
     * The status of the dispute (mimics stripe's dispute status).
     */
    status:
      | 'warning_needs_response'
      | 'warning_under_review'
      | 'warning_closed'
      | 'needs_response'
      | 'under_review'
      | 'won'
      | 'lost'
      | 'closed'
      | 'other';

    /**
     * An attachment that did not fit into the other categories
     */
    uncategorized_attachment: Data.UncategorizedAttachment | null;

    /**
     * Whether or not the dispute is a Visa Rapid Dispute Resolution.
     */
    visa_rdr: boolean;
  }

  export namespace Data {
    /**
     * The cancellation policy for this dispute
     */
    export interface CancellationPolicyAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }

    /**
     * The company the dispute is against.
     */
    export interface Company {
      /**
       * The ID of the company
       */
      id: string;

      /**
       * The written name of the company.
       */
      title: string;
    }

    /**
     * The customer communication for this dispute
     */
    export interface CustomerCommunicationAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }

    /**
     * The payment that got disputed
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

    /**
     * The plan that got disputed
     */
    export interface Plan {
      /**
       * The internal ID of the plan.
       */
      id: string;
    }

    /**
     * The product that got disputed
     */
    export interface Product {
      /**
       * The internal ID of the public product.
       */
      id: string;

      /**
       * The title of the product. Use for Whop 4.0.
       */
      title: string;
    }

    /**
     * The refund policy for this dispute
     */
    export interface RefundPolicyAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }

    /**
     * An attachment that did not fit into the other categories
     */
    export interface UncategorizedAttachment {
      /**
       * The ID of the attachment
       */
      id: string;

      /**
       * The attachment's content type (e.g., image/jpg, video/mp4)
       */
      content_type: string | null;

      /**
       * The name of the file
       */
      filename: string | null;

      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
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
  | CourseLessonInteractionCompletedWebhookEvent
  | PaymentSucceededWebhookEvent
  | PaymentFailedWebhookEvent
  | PaymentPendingWebhookEvent
  | DisputeCreatedWebhookEvent
  | DisputeUpdatedWebhookEvent;

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
    type CourseLessonInteractionCompletedWebhookEvent as CourseLessonInteractionCompletedWebhookEvent,
    type PaymentSucceededWebhookEvent as PaymentSucceededWebhookEvent,
    type PaymentFailedWebhookEvent as PaymentFailedWebhookEvent,
    type PaymentPendingWebhookEvent as PaymentPendingWebhookEvent,
    type DisputeCreatedWebhookEvent as DisputeCreatedWebhookEvent,
    type DisputeUpdatedWebhookEvent as DisputeUpdatedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
