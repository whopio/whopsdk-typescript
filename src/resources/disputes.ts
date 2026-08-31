// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Dispute is a chargeback a customer files against a payment through their bank, or an inquiry that may become one. It carries the disputed payment, a deadline to respond, your evidence, and the outcome once the processor rules.
 *
 * Use the Disputes API to list disputes, edit the evidence packet while a dispute is still contestable, and submit it for review.
 */
export class Disputes extends APIResource {
  /**
   * Retrieves a single dispute.
   */
  retrieve(
    id: string,
    params: DisputeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Dispute> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/disputes/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the disputes across the accounts you can read.
   */
  list(
    params: DisputeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DisputesCursorPage, Dispute> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/disputes', CursorPage<Dispute>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
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

export type DisputesCursorPage = CursorPage<Dispute>;

export interface Dispute {
  /**
   * Dispute ID, prefixed `dspt_`.
   */
  id: string;

  /**
   * The account the dispute was filed against, prefixed `biz_`.
   */
  account_id: string | null;

  /**
   * The disputed amount, in whole units of `currency`.
   */
  amount: number;

  /**
   * The customer who filed the dispute.
   */
  buyer: Dispute.Buyer | null;

  /**
   * When the dispute was opened, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code of the disputed amount.
   */
  currency: string;

  /**
   * The evidence packet sent to the processor to contest the dispute.
   */
  evidence: Dispute.Evidence;

  /**
   * The deadline to submit evidence, as an ISO 8601 timestamp. Whop reserves the
   * last 24 hours before the processor's own cutoff to forward the submission.
   */
  evidence_due_at: string | null;

  /**
   * Whether `evidence` can still be changed and submitted.
   */
  evidence_editable: boolean;

  /**
   * Why evidence can no longer be edited. `null` while `evidence_editable` is true.
   */
  evidence_locked_reason: 'submitted' | 'response_window_closed' | 'not_contestable' | null;

  /**
   * When the evidence was submitted to the processor, as an ISO 8601 timestamp.
   */
  evidence_submitted_at: string | null;

  /**
   * The AI-generated representment document filed with the processor on the seller's
   * behalf, once ready. Null until generation completes, and for disputes not using
   * Whop Dispute Fighter.
   */
  generated_response_attachment: Dispute.GeneratedResponseAttachment | null;

  /**
   * Whether this is a pre-dispute inquiry rather than a formal chargeback. Inquiries
   * follow the same lifecycle but move no funds unless one escalates.
   */
  inquiry: boolean;

  issuer_comments: Array<Dispute.IssuerComment>;

  /**
   * The payment being disputed.
   */
  payment: Dispute.Payment | null;

  /**
   * The plan the disputed payment was made on, prefixed `plan_`.
   */
  plan_id: string | null;

  /**
   * The product the disputed payment was for, prefixed `prod_`.
   */
  product_id: string | null;

  /**
   * Whether Visa Rapid Dispute Resolution settled this automatically. These refund
   * the customer without an evidence round.
   */
  rapid_dispute_resolution: boolean;

  /**
   * Why the customer says they are disputing, normalized across card networks.
   * `other` covers a code Whop has not categorized yet — read `reason_code` for the
   * raw value.
   */
  reason:
    | 'fraudulent'
    | 'unrecognized'
    | 'declined_authorization'
    | 'product_not_received'
    | 'product_unacceptable'
    | 'subscription_canceled'
    | 'credit_not_processed'
    | 'duplicate'
    | 'processing_error'
    | 'documentation_request'
    | 'bank_cannot_process'
    | 'other';

  /**
   * The raw card-network or processor reason code, such as `10.4`.
   */
  reason_code: string | null;

  /**
   * Where the dispute stands. `needs_response` is awaiting evidence, `under_review`
   * is with the processor, `won` returned the funds to the seller, `lost` returned
   * them to the customer, and `closed` ended without a ruling. A dispute past its
   * `evidence_due_at` reports `under_review` — the window to respond has closed.
   */
  status: 'needs_response' | 'under_review' | 'won' | 'lost' | 'closed';

  /**
   * When the dispute was last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export namespace Dispute {
  /**
   * The customer who filed the dispute.
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
     * The customer's user ID, prefixed `user_`. `null` for a guest checkout.
     */
    user_id: string | null;

    /**
     * The customer's Whop username.
     */
    username: string | null;
  }

  /**
   * The evidence packet sent to the processor to contest the dispute.
   */
  export interface Evidence {
    /**
     * Log of the customer's access to the product, such as sign-in or download
     * activity.
     */
    access_activity_log: string | null;

    /**
     * The billing address the customer provided at checkout.
     */
    billing_address: string | null;

    /**
     * The cancellation policy document. Falls back to Whop's platform policy when the
     * seller has not uploaded their own.
     */
    cancellation_policy_attachment: Evidence.CancellationPolicyAttachment | null;

    /**
     * How the cancellation policy was shown to the customer before purchase.
     */
    cancellation_policy_disclosure: string | null;

    /**
     * Correspondence with the customer, or proof they used the product.
     */
    customer_communication_attachment: Evidence.CustomerCommunicationAttachment | null;

    /**
     * The email address the customer used at checkout.
     */
    customer_email_address: string | null;

    /**
     * The customer's name as given at checkout.
     */
    customer_name: string | null;

    documents: Array<Evidence.Document>;

    /**
     * Any additional context for the processor reviewing the dispute.
     */
    notes: string | null;

    /**
     * What the customer purchased, in the seller's own words.
     */
    product_description: string | null;

    /**
     * The refund policy document. Falls back to Whop's platform policy when the seller
     * has not uploaded their own.
     */
    refund_policy_attachment: Evidence.RefundPolicyAttachment | null;

    /**
     * How the refund policy was shown to the customer before purchase.
     */
    refund_policy_disclosure: string | null;

    /**
     * Why a refund was refused, when one was requested and denied.
     */
    refund_refusal_explanation: string | null;

    /**
     * When the product or service was delivered.
     */
    service_date: string | null;

    /**
     * Supporting evidence that does not fit the other categories.
     */
    uncategorized_attachment: Evidence.UncategorizedAttachment | null;
  }

  export namespace Evidence {
    /**
     * The cancellation policy document. Falls back to Whop's platform policy when the
     * seller has not uploaded their own.
     */
    export interface CancellationPolicyAttachment {
      /**
       * The attachment's ID. `null` for a Whop-hosted policy, which is not an uploaded
       * file.
       */
      id: string | null;

      /**
       * The uploaded file's MIME type.
       */
      content_type: string | null;

      /**
       * The uploaded file's name.
       */
      filename: string | null;

      /**
       * Whether this is Whop's own hosted policy, standing in because the seller
       * uploaded none. Sending it back on a PATCH changes nothing.
       */
      platform: boolean;

      /**
       * A URL to download the attachment.
       */
      url: string | null;
    }

    /**
     * Correspondence with the customer, or proof they used the product.
     */
    export interface CustomerCommunicationAttachment {
      /**
       * The attachment's ID. `null` for a Whop-hosted policy, which is not an uploaded
       * file.
       */
      id: string | null;

      /**
       * The uploaded file's MIME type.
       */
      content_type: string | null;

      /**
       * The uploaded file's name.
       */
      filename: string | null;

      /**
       * Whether this is Whop's own hosted policy, standing in because the seller
       * uploaded none. Sending it back on a PATCH changes nothing.
       */
      platform: boolean;

      /**
       * A URL to download the attachment.
       */
      url: string | null;
    }

    /**
     * Additional evidence documents uploaded through
     * `POST /disputes/{id}/upload_evidence`, beyond the four fixed slots. Each rides
     * into the submitted packet under its `document_type`.
     */
    export interface Document {
      /**
       * The file's ID, prefixed `file_`.
       */
      id: string;

      /**
       * The uploaded file's MIME type. Uploads are restricted to the types the processor
       * accepts.
       */
      content_type: 'application/pdf' | 'application/json' | 'image/jpeg' | 'image/png' | 'image/webp' | null;

      /**
       * When the file was created, as an ISO 8601 timestamp.
       */
      created_at: string;

      /**
       * What kind of evidence the document is.
       */
      document_type:
        | 'return_policy'
        | 'shipping_policy'
        | 'physical_fulfillment'
        | 'customer_order_history'
        | 'product_image'
        | 'prior_transactions'
        | 'customer_session'
        | 'digital_fulfillment'
        | 'subscription';

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

      multipart_upload_urls?: Array<Document.MultipartUploadURL> | null;

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

    export namespace Document {
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
     * The refund policy document. Falls back to Whop's platform policy when the seller
     * has not uploaded their own.
     */
    export interface RefundPolicyAttachment {
      /**
       * The attachment's ID. `null` for a Whop-hosted policy, which is not an uploaded
       * file.
       */
      id: string | null;

      /**
       * The uploaded file's MIME type.
       */
      content_type: string | null;

      /**
       * The uploaded file's name.
       */
      filename: string | null;

      /**
       * Whether this is Whop's own hosted policy, standing in because the seller
       * uploaded none. Sending it back on a PATCH changes nothing.
       */
      platform: boolean;

      /**
       * A URL to download the attachment.
       */
      url: string | null;
    }

    /**
     * Supporting evidence that does not fit the other categories.
     */
    export interface UncategorizedAttachment {
      /**
       * The attachment's ID. `null` for a Whop-hosted policy, which is not an uploaded
       * file.
       */
      id: string | null;

      /**
       * The uploaded file's MIME type.
       */
      content_type: string | null;

      /**
       * The uploaded file's name.
       */
      filename: string | null;

      /**
       * Whether this is Whop's own hosted policy, standing in because the seller
       * uploaded none. Sending it back on a PATCH changes nothing.
       */
      platform: boolean;

      /**
       * A URL to download the attachment.
       */
      url: string | null;
    }
  }

  /**
   * The AI-generated representment document filed with the processor on the seller's
   * behalf, once ready. Null until generation completes, and for disputes not using
   * Whop Dispute Fighter.
   */
  export interface GeneratedResponseAttachment {
    /**
     * The attachment's ID. `null` for a Whop-hosted policy, which is not an uploaded
     * file.
     */
    id: string | null;

    /**
     * The uploaded file's MIME type.
     */
    content_type: string | null;

    /**
     * The uploaded file's name.
     */
    filename: string | null;

    /**
     * Whether this is Whop's own hosted policy, standing in because the seller
     * uploaded none. Sending it back on a PATCH changes nothing.
     */
    platform: boolean;

    /**
     * A URL to download the attachment.
     */
    url: string | null;
  }

  /**
   * What the card issuer said when filing the dispute. Only populated when the
   * issuer provides them, and listed in the order they were received.
   */
  export interface IssuerComment {
    /**
     * When the comment was received, as an ISO 8601 timestamp.
     */
    received_at: string | null;

    /**
     * What the issuer wrote, as received.
     */
    text: string;
  }

  /**
   * The payment being disputed.
   */
  export interface Payment {
    /**
     * Payment ID, prefixed `pay_`.
     */
    id: string;

    /**
     * What the customer was charged, in whole units of the payment's currency.
     */
    amount: number | null;

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
     * Three-letter ISO currency code of the payment. Can differ from the dispute's
     * currency when the processor settles in another currency.
     */
    currency: string | null;

    /**
     * The instrument this payment was made with, shaped for display: the method type,
     * a buyer-facing name, the standard icon set, and the card facts when it was a
     * card. Null when the payment names no method.
     */
    payment_instrument: Payment.PaymentInstrument | null;

    /**
     * How the customer paid, such as `card` or `paypal`.
     */
    payment_method_type: string | null;

    /**
     * The processor that handled the payment, such as `stripe`.
     */
    payment_processor: string | null;
  }

  export namespace Payment {
    /**
     * The instrument this payment was made with, shaped for display: the method type,
     * a buyer-facing name, the standard icon set, and the card facts when it was a
     * card. Null when the payment names no method.
     */
    export interface PaymentInstrument {
      /**
       * Card payments only: the card's network and last four.
       */
      card: PaymentInstrument.Card | null;

      /**
       * Buyer-facing instrument name — "Visa •••• 4242" when the card surfaced, else the
       * method's own name ("Klarna").
       */
      display_name: string;

      /**
       * The standard icon set: square and card shapes, each in light and dark colorways.
       */
      icons: PaymentInstrument.Icons;

      /**
       * Installment methods only: how many payments the charge splits into. Data, not
       * copy — compose and translate the label client-side.
       */
      installment_count: number | null;

      /**
       * The payment method type identifier, e.g. `card`, `klarna`, `apple_pay`.
       */
      payment_method_type: string;
    }

    export namespace PaymentInstrument {
      /**
       * Card payments only: the card's network and last four.
       */
      export interface Card {
        /**
         * The network identifier (`visa`, `amex`, …), matching `card.networks` entries and
         * saved card payment methods.
         */
        brand: string;

        /**
         * The card's last four digits, when captured.
         */
        last4: string | null;
      }

      /**
       * The standard icon set: square and card shapes, each in light and dark colorways.
       */
      export interface Icons {
        /**
         * The credit-card-proportioned tile (48x30).
         */
        card: Icons.Card;

        /**
         * The square tile (32x32).
         */
        square: Icons.Square;
      }

      export namespace Icons {
        /**
         * The credit-card-proportioned tile (48x30).
         */
        export interface Card {
          /**
           * The colorway for dark surfaces.
           */
          dark: Card.Dark;

          /**
           * The colorway for light surfaces.
           */
          light: Card.Light;
        }

        export namespace Card {
          /**
           * The colorway for dark surfaces.
           */
          export interface Dark {
            /**
             * Raster fallback at the shape's native size.
             */
            png_1x: string;

            /**
             * Raster fallback at double density.
             */
            png_2x: string;

            /**
             * Raster fallback at quadruple density.
             */
            png_4x: string;

            /**
             * The vector file. Prefer this everywhere SVG renders.
             */
            svg: string;
          }

          /**
           * The colorway for light surfaces.
           */
          export interface Light {
            /**
             * Raster fallback at the shape's native size.
             */
            png_1x: string;

            /**
             * Raster fallback at double density.
             */
            png_2x: string;

            /**
             * Raster fallback at quadruple density.
             */
            png_4x: string;

            /**
             * The vector file. Prefer this everywhere SVG renders.
             */
            svg: string;
          }
        }

        /**
         * The square tile (32x32).
         */
        export interface Square {
          /**
           * The colorway for dark surfaces.
           */
          dark: Square.Dark;

          /**
           * The colorway for light surfaces.
           */
          light: Square.Light;
        }

        export namespace Square {
          /**
           * The colorway for dark surfaces.
           */
          export interface Dark {
            /**
             * Raster fallback at the shape's native size.
             */
            png_1x: string;

            /**
             * Raster fallback at double density.
             */
            png_2x: string;

            /**
             * Raster fallback at quadruple density.
             */
            png_4x: string;

            /**
             * The vector file. Prefer this everywhere SVG renders.
             */
            svg: string;
          }

          /**
           * The colorway for light surfaces.
           */
          export interface Light {
            /**
             * Raster fallback at the shape's native size.
             */
            png_1x: string;

            /**
             * Raster fallback at double density.
             */
            png_2x: string;

            /**
             * Raster fallback at quadruple density.
             */
            png_4x: string;

            /**
             * The vector file. Prefer this everywhere SVG renders.
             */
            svg: string;
          }
        }
      }
    }
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

export interface DisputeRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface DisputeListParams extends CursorPageParams {
  /**
   * Query param: Only disputes filed against this account (`biz_` tag). Omit it to
   * cover every account you can read.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns disputes before this position.
   */
  before?: string;

  /**
   * Query param: Only disputes opened after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only disputes opened before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Only disputes in this three-letter ISO currency.
   */
  currency?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of disputes to return (default 20, max 100).
   */
  first?: number;

  /**
   * Query param: The number of disputes to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort disputes by.
   */
  order?: 'created_at' | 'amount' | 'evidence_due_at';

  /**
   * Query param: Only disputes in these statuses. Repeat the parameter to pass
   * several — one paginated list covers all of them. Covers both chargebacks and
   * inquiries at each stage. A `needs_response` dispute whose evidence deadline has
   * passed reports and filters as `under_review` instead.
   */
  status?: Array<'needs_response' | 'under_review' | 'won' | 'lost' | 'closed'>;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
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
    type DisputesCursorPage as DisputesCursorPage,
    type DisputeRetrieveParams as DisputeRetrieveParams,
    type DisputeListParams as DisputeListParams,
    type DisputeUpdateEvidenceParams as DisputeUpdateEvidenceParams,
  };
}
