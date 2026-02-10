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
   * Retrieves the details of an existing dispute.
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
   * Returns a paginated list of disputes for a company, with optional filtering by
   * creation date. A dispute represents a chargeback or inquiry filed by a customer
   * against a payment.
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
   * A log of IP-based access activity for the customer on Whop, submitted as
   * evidence in the dispute.
   */
  access_activity_log: string | null;

  /**
   * The disputed amount in the specified currency, formatted as a decimal.
   */
  amount: number;

  /**
   * The customer's billing address from their payment details, submitted as evidence
   * in the dispute.
   */
  billing_address: string | null;

  /**
   * The cancellation policy document uploaded as dispute evidence. Null if no
   * cancellation policy has been provided.
   */
  cancellation_policy_attachment: Dispute.CancellationPolicyAttachment | null;

  /**
   * A text disclosure describing the company's cancellation policy, submitted as
   * dispute evidence.
   */
  cancellation_policy_disclosure: string | null;

  /**
   * The company that the dispute was filed against.
   */
  company: Dispute.Company | null;

  /**
   * The datetime the dispute was created.
   */
  created_at: string | null;

  /**
   * The three-letter ISO currency code for the disputed amount.
   */
  currency: Shared.Currency;

  /**
   * Evidence of customer communication or product usage, uploaded as a dispute
   * attachment. Null if not provided.
   */
  customer_communication_attachment: Dispute.CustomerCommunicationAttachment | null;

  /**
   * The customer's email address from their payment details, included in the
   * evidence packet sent to the payment processor. Editable before submission.
   */
  customer_email_address: string | null;

  /**
   * The customer's full name from their payment details, included in the evidence
   * packet sent to the payment processor. Editable before submission.
   */
  customer_name: string | null;

  /**
   * Whether the dispute evidence can still be edited and submitted. Returns true
   * only when the dispute status requires a response.
   */
  editable: boolean | null;

  /**
   * The deadline by which dispute evidence must be submitted. Null if no response
   * deadline is set.
   */
  needs_response_by: string | null;

  /**
   * Additional freeform notes submitted by the company as part of the dispute
   * evidence.
   */
  notes: string | null;

  /**
   * The original payment that was disputed.
   */
  payment: Dispute.Payment | null;

  /**
   * The plan associated with the disputed payment. Null if the dispute is not linked
   * to a specific plan.
   */
  plan: Dispute.Plan | null;

  /**
   * The product associated with the disputed payment. Null if the dispute is not
   * linked to a specific product.
   */
  product: Dispute.Product | null;

  /**
   * A description of the product or service provided, submitted as dispute evidence.
   */
  product_description: string | null;

  /**
   * A human-readable reason for the dispute.
   */
  reason: string | null;

  /**
   * The refund policy document uploaded as dispute evidence. Null if no refund
   * policy has been provided.
   */
  refund_policy_attachment: Dispute.RefundPolicyAttachment | null;

  /**
   * A text disclosure describing the company's refund policy, submitted as dispute
   * evidence.
   */
  refund_policy_disclosure: string | null;

  /**
   * An explanation from the company for why a refund was refused, submitted as
   * dispute evidence.
   */
  refund_refusal_explanation: string | null;

  /**
   * The date when the product or service was delivered to the customer, submitted as
   * dispute evidence.
   */
  service_date: string | null;

  /**
   * The current status of the dispute lifecycle, such as needs_response,
   * under_review, won, or lost.
   */
  status: DisputeStatuses;

  /**
   * An additional attachment that does not fit into the standard evidence
   * categories. Null if not provided.
   */
  uncategorized_attachment: Dispute.UncategorizedAttachment | null;

  /**
   * Whether the dispute was automatically resolved through Visa Rapid Dispute
   * Resolution (RDR).
   */
  visa_rdr: boolean;
}

export namespace Dispute {
  /**
   * The cancellation policy document uploaded as dispute evidence. Null if no
   * cancellation policy has been provided.
   */
  export interface CancellationPolicyAttachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The company that the dispute was filed against.
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
   * Evidence of customer communication or product usage, uploaded as a dispute
   * attachment. Null if not provided.
   */
  export interface CustomerCommunicationAttachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The original payment that was disputed.
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

  /**
   * The plan associated with the disputed payment. Null if the dispute is not linked
   * to a specific plan.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product associated with the disputed payment. Null if the dispute is not
   * linked to a specific product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The refund policy document uploaded as dispute evidence. Null if no refund
   * policy has been provided.
   */
  export interface RefundPolicyAttachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * An additional attachment that does not fit into the standard evidence
   * categories. Null if not provided.
   */
  export interface UncategorizedAttachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
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
   * The disputed amount in the specified currency, formatted as a decimal.
   */
  amount: number;

  /**
   * The company that the dispute was filed against.
   */
  company: DisputeListResponse.Company | null;

  /**
   * The datetime the dispute was created.
   */
  created_at: string | null;

  /**
   * The three-letter ISO currency code for the disputed amount.
   */
  currency: Shared.Currency;

  /**
   * Whether the dispute evidence can still be edited and submitted. Returns true
   * only when the dispute status requires a response.
   */
  editable: boolean | null;

  /**
   * The deadline by which dispute evidence must be submitted. Null if no response
   * deadline is set.
   */
  needs_response_by: string | null;

  /**
   * The original payment that was disputed.
   */
  payment: DisputeListResponse.Payment | null;

  /**
   * The plan associated with the disputed payment. Null if the dispute is not linked
   * to a specific plan.
   */
  plan: DisputeListResponse.Plan | null;

  /**
   * The product associated with the disputed payment. Null if the dispute is not
   * linked to a specific product.
   */
  product: DisputeListResponse.Product | null;

  /**
   * A human-readable reason for the dispute.
   */
  reason: string | null;

  /**
   * The current status of the dispute lifecycle, such as needs_response,
   * under_review, won, or lost.
   */
  status: DisputeStatuses;

  /**
   * Whether the dispute was automatically resolved through Visa Rapid Dispute
   * Resolution (RDR).
   */
  visa_rdr: boolean;
}

export namespace DisputeListResponse {
  /**
   * The company that the dispute was filed against.
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
   * The original payment that was disputed.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }

  /**
   * The plan associated with the disputed payment. Null if the dispute is not linked
   * to a specific plan.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product associated with the disputed payment. Null if the dispute is not
   * linked to a specific product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

export interface DisputeListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list disputes for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return disputes created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return disputes created before this timestamp.
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
   * An IP access activity log showing the customer used the service.
   */
  access_activity_log?: string | null;

  /**
   * The billing address associated with the customer's payment method.
   */
  billing_address?: string | null;

  /**
   * A file upload containing the company's cancellation policy document.
   */
  cancellation_policy_attachment?: DisputeUpdateEvidenceParams.CancellationPolicyAttachment | null;

  /**
   * The company's cancellation policy text to submit as evidence.
   */
  cancellation_policy_disclosure?: string | null;

  /**
   * A file upload containing evidence of customer communication. Must be a JPEG,
   * PNG, GIF, or PDF.
   */
  customer_communication_attachment?: DisputeUpdateEvidenceParams.CustomerCommunicationAttachment | null;

  /**
   * The email address of the customer associated with the disputed payment.
   */
  customer_email_address?: string | null;

  /**
   * The full name of the customer associated with the disputed payment.
   */
  customer_name?: string | null;

  /**
   * Additional notes or context to submit as part of the dispute evidence.
   */
  notes?: string | null;

  /**
   * A description of the product or service that was provided to the customer.
   */
  product_description?: string | null;

  /**
   * A file upload containing the company's refund policy document.
   */
  refund_policy_attachment?: DisputeUpdateEvidenceParams.RefundPolicyAttachment | null;

  /**
   * The company's refund policy text to submit as evidence.
   */
  refund_policy_disclosure?: string | null;

  /**
   * An explanation of why the refund request was refused.
   */
  refund_refusal_explanation?: string | null;

  /**
   * The date when the product or service was delivered to the customer.
   */
  service_date?: string | null;

  /**
   * A file upload for evidence that does not fit into the other categories.
   */
  uncategorized_attachment?: DisputeUpdateEvidenceParams.UncategorizedAttachment | null;
}

export namespace DisputeUpdateEvidenceParams {
  /**
   * A file upload containing the company's cancellation policy document.
   */
  export interface CancellationPolicyAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A file upload containing evidence of customer communication. Must be a JPEG,
   * PNG, GIF, or PDF.
   */
  export interface CustomerCommunicationAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A file upload containing the company's refund policy document.
   */
  export interface RefundPolicyAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A file upload for evidence that does not fit into the other categories.
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
