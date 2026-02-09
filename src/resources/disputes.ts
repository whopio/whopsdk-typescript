// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Disputes extends APIResource {
  /**
   * Retrieves a Dispute by ID
   *
   * Required permissions:
   *
   * - `payment:dispute:read`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `company:basic:read`
   * - `payment:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Dispute> {
    return this._client.get(path`/disputes/${id}`, options);
  }

  /**
   * Lists disputes the current actor has access to
   *
   * Required permissions:
   *
   * - `payment:dispute:read`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `company:basic:read`
   * - `payment:basic:read`
   */
  list(
    query: DisputeListParams,
    options?: RequestOptions,
  ): PagePromise<DisputeListResponsesCursorPage, DisputeListResponse> {
    return this._client.getAPIList('/disputes', CursorPage<DisputeListResponse>, { query, ...options });
  }

  /**
   * Submit a payment dispute to the payment processor for review. Once submitted, no
   * further edits can be made.
   *
   * Required permissions:
   *
   * - `payment:dispute`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `company:basic:read`
   * - `payment:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   */
  submitEvidence(id: string, options?: RequestOptions): APIPromise<Dispute> {
    return this._client.post(path`/disputes/${id}/submit_evidence`, options);
  }

  /**
   * Update a dispute with evidence data to attempt to win the dispute.
   *
   * Required permissions:
   *
   * - `payment:dispute`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `company:basic:read`
   * - `payment:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   */
  updateEvidence(
    id: string,
    body: DisputeUpdateEvidenceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Dispute> {
    return this._client.post(path`/disputes/${id}/update_evidence`, { body, ...options });
  }
}

export type DisputeListResponsesCursorPage = CursorPage<DisputeListResponse>;

/**
 * A dispute is a chargeback or payment challenge filed against a company,
 * including evidence and response status.
 */
export interface Dispute {
  /**
   * The unique identifier for the dispute.
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
  cancellation_policy_attachment: Dispute.CancellationPolicyAttachment | null;

  /**
   * A cancellation policy disclosure from the company.
   */
  cancellation_policy_disclosure: string | null;

  /**
   * The company the dispute is against.
   */
  company: Dispute.Company | null;

  /**
   * The datetime the dispute was created.
   */
  created_at: string | null;

  /**
   * The currency of the dispute.
   */
  currency: Shared.Currency;

  /**
   * The customer communication for this dispute
   */
  customer_communication_attachment: Dispute.CustomerCommunicationAttachment | null;

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
  payment: Dispute.Payment | null;

  /**
   * The plan that got disputed
   */
  plan: Dispute.Plan | null;

  /**
   * The product that got disputed
   */
  product: Dispute.Product | null;

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
  refund_policy_attachment: Dispute.RefundPolicyAttachment | null;

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
  status: DisputeStatuses;

  /**
   * An attachment that did not fit into the other categories
   */
  uncategorized_attachment: Dispute.UncategorizedAttachment | null;

  /**
   * Whether or not the dispute is a Visa Rapid Dispute Resolution.
   */
  visa_rdr: boolean;
}

export namespace Dispute {
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
     * The unique identifier for the company.
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

  /**
   * The plan that got disputed
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product that got disputed
   */
  export interface Product {
    /**
     * The unique identifier for the product.
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

/**
 * The possible statuses of a dispute
 */
export type DisputeStatuses =
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
 * A dispute is a chargeback or payment challenge filed against a company,
 * including evidence and response status.
 */
export interface DisputeListResponse {
  /**
   * The unique identifier for the dispute.
   */
  id: string;

  /**
   * The amount of the dispute (formatted).
   */
  amount: number;

  /**
   * The company the dispute is against.
   */
  company: DisputeListResponse.Company | null;

  /**
   * The datetime the dispute was created.
   */
  created_at: string | null;

  /**
   * The currency of the dispute.
   */
  currency: Shared.Currency;

  /**
   * Whether or not the dispute data can be edited.
   */
  editable: boolean | null;

  /**
   * The last date the dispute is allow to be submitted by.
   */
  needs_response_by: string | null;

  /**
   * The payment that got disputed
   */
  payment: DisputeListResponse.Payment | null;

  /**
   * The plan that got disputed
   */
  plan: DisputeListResponse.Plan | null;

  /**
   * The product that got disputed
   */
  product: DisputeListResponse.Product | null;

  /**
   * The reason for the dispute
   */
  reason: string | null;

  /**
   * The status of the dispute (mimics stripe's dispute status).
   */
  status: DisputeStatuses;

  /**
   * Whether or not the dispute is a Visa Rapid Dispute Resolution.
   */
  visa_rdr: boolean;
}

export namespace DisputeListResponse {
  /**
   * The company the dispute is against.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The payment that got disputed
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }

  /**
   * The plan that got disputed
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product that got disputed
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }
}

export interface DisputeListParams extends CursorPageParams {
  /**
   * The ID of the company to list disputes for
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export interface DisputeUpdateEvidenceParams {
  /**
   * An IP access log for the user from Whop.
   */
  access_activity_log?: string | null;

  /**
   * The billing address of the user from their payment details.
   */
  billing_address?: string | null;

  /**
   * A file containing the cancellation policy from the company.
   */
  cancellation_policy_attachment?: DisputeUpdateEvidenceParams.CancellationPolicyAttachment | null;

  /**
   * A cancellation policy disclosure from the company.
   */
  cancellation_policy_disclosure?: string | null;

  /**
   * A file containing the customer communication from the company (An image).
   */
  customer_communication_attachment?: DisputeUpdateEvidenceParams.CustomerCommunicationAttachment | null;

  /**
   * The email of the customer from their payment details.
   */
  customer_email_address?: string | null;

  /**
   * The name of the customer from their payment details.
   */
  customer_name?: string | null;

  /**
   * Additional notes the company chooses to submit regarding the dispute.
   */
  notes?: string | null;

  /**
   * The description of the product from the company.
   */
  product_description?: string | null;

  /**
   * A file containing the refund policy from the company.
   */
  refund_policy_attachment?: DisputeUpdateEvidenceParams.RefundPolicyAttachment | null;

  /**
   * A refund policy disclosure from the company.
   */
  refund_policy_disclosure?: string | null;

  /**
   * A description on why the refund is being refused by the company.
   */
  refund_refusal_explanation?: string | null;

  /**
   * When the product was delivered by the company.
   */
  service_date?: string | null;

  /**
   * A file that does not fit in the other categories.
   */
  uncategorized_attachment?: DisputeUpdateEvidenceParams.UncategorizedAttachment | null;
}

export namespace DisputeUpdateEvidenceParams {
  /**
   * A file containing the cancellation policy from the company.
   */
  export interface CancellationPolicyAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A file containing the customer communication from the company (An image).
   */
  export interface CustomerCommunicationAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A file containing the refund policy from the company.
   */
  export interface RefundPolicyAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A file that does not fit in the other categories.
   */
  export interface UncategorizedAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export declare namespace Disputes {
  export {
    type Dispute as Dispute,
    type DisputeStatuses as DisputeStatuses,
    type DisputeListResponse as DisputeListResponse,
    type DisputeListResponsesCursorPage as DisputeListResponsesCursorPage,
    type DisputeListParams as DisputeListParams,
    type DisputeUpdateEvidenceParams as DisputeUpdateEvidenceParams,
  };
}
