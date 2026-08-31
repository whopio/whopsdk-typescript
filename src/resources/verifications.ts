// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Verification represents a legal identity for a person or business. Accounts and users complete verification when Whop needs to confirm who they are before enabling payouts or compliance-sensitive workflows.
 *
 * Use the Verifications API to start or resume a hosted verification session, check review status, and submit requested details or documents. If `requested_information` contains items, submit answers with [Update Verification](/api-reference/beta/verifications/update-verification).
 */
export class Verifications extends APIResource {
  /**
   * Returns verifications for an account, including their status and any required
   * actions.
   */
  retrieve(
    id: string,
    params: VerificationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VerificationRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/verifications/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns verifications for an account, including their status and any required
   * actions.
   */
  list(params: VerificationListParams, options?: RequestOptions): APIPromise<VerificationListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params;
    return this._client.get('/verifications', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * An error code for a verification attempt.
 */
export type VerificationErrorCode =
  | 'abandoned'
  | 'consent_declined'
  | 'country_not_supported'
  | 'device_not_supported'
  | 'document_expired'
  | 'document_type_not_supported'
  | 'document_unverified_other'
  | 'email_unverified_other'
  | 'email_verification_declined'
  | 'id_number_insufficient_document_data'
  | 'id_number_mismatch'
  | 'id_number_unverified_other'
  | 'phone_unverified_other'
  | 'phone_verification_declined'
  | 'selfie_document_missing_photo'
  | 'selfie_face_mismatch'
  | 'selfie_manipulated'
  | 'selfie_unverified_other'
  | 'under_supported_age';

/**
 * A status for a verification.
 */
export type VerificationStatus =
  | 'requires_input'
  | 'processing'
  | 'verified'
  | 'canceled'
  | 'created'
  | 'started'
  | 'submitted'
  | 'approved'
  | 'declined'
  | 'resubmission_requested'
  | 'expired'
  | 'abandoned'
  | 'review'
  | 'action_required'
  | 'manual_review';

export interface VerificationRetrieveResponse {
  /**
   * Verification profile ID, prefixed `idpf_`.
   */
  id?: string;

  /**
   * Address on the verification profile. `null` when no address is set.
   */
  address?: VerificationRetrieveResponse.Address | null;

  /**
   * Legal business name.
   */
  business_name?: string | null;

  /**
   * Legal entity structure of the business, such as `private_corporation` or
   * `sole_proprietorship`. Supported values vary by country of incorporation — see
   * [Business structures](/developer/verification/business-structures).
   */
  business_structure?: string | null;

  /**
   * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
   */
  country?: string | null;

  /**
   * When the verification profile was created, as an ISO 8601 timestamp.
   */
  created_at?: string;

  /**
   * Formatted as `YYYY-MM-DD`.
   */
  date_of_birth?: string | null;

  /**
   * Email address on the verification profile.
   */
  email?: string | null;

  first_name?: string | null;

  kind?: 'individual' | 'business';

  last_name?: string | null;

  /**
   * Phone number on the verification profile.
   */
  phone?: string | null;

  /**
   * What Whop still needs before review can continue — one requirement per entry.
   * Answer with Update Verification; nothing from the response is echoed back. Keys
   * that don't apply are omitted.
   */
  requested_information?: Array<VerificationRetrieveResponse.RequestedInformation>;

  /**
   * Documents for a document-upload verification and their progress. Present only on
   * verifications created by sending `documents`. `pending_upload` documents were
   * not accepted yet — send the full set again with another Create Verification
   * call.
   */
  required_documents?: Array<VerificationRetrieveResponse.RequiredDocument>;

  /**
   * Hosted verification session URL for the user to complete identity checks.
   * Expires 7 days after creation.
   */
  session_url?: string | null;

  /**
   * Current verification state. `not_started` before any session exists; `pending`
   * while a session needs the user's input; `processing` while the provider's
   * automated checks run on a fresh submission; `action_required` when
   * `requested_information` needs answers; `manual_review` while information already
   * sent is under review — an audit answer, or a document the payout provider holds
   * — nothing to submit, usually done within 3 business days; `approved` on success;
   * `rejected` on failure. Call Create Verification again to start a new session.
   */
  status?:
    | 'not_started'
    | 'pending'
    | 'processing'
    | 'manual_review'
    | 'approved'
    | 'rejected'
    | 'action_required';

  /**
   * When the verification profile was last updated, as an ISO 8601 timestamp.
   */
  updated_at?: string;
}

export namespace VerificationRetrieveResponse {
  /**
   * Address on the verification profile. `null` when no address is set.
   */
  export interface Address {
    city?: string | null;

    /**
     * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
     */
    country?: string | null;

    /**
     * First line of the street address.
     */
    line1?: string;

    /**
     * Second line of the street address.
     */
    line2?: string | null;

    /**
     * Postal or ZIP code.
     */
    postal_code?: string | null;

    /**
     * State, province, or region code, for example `CA`.
     */
    state?: string | null;
  }

  export interface RequestedInformation {
    /**
     * Requested information item ID, prefixed `inrqi_`.
     */
    id: string;

    /**
     * Instruction to show the user. Carries the reviewer's note verbatim when there is
     * one.
     */
    label: string;

    /**
     * What is needed: a document name such as `bank_statement`, or a field key such as
     * `ssn` or `identity_document`. Handle unrecognized values by `type`.
     */
    requirement: string;

    /**
     * What to send as the answer, so you never have to infer it: `files` (a document,
     * as a list of its pages), `id_document` (send `documents` with the slot keys for
     * the ID you are uploading), `text`, `date`, `phone` or `select` (send `value`),
     * or `address` (send `address`).
     */
    type: string;

    /**
     * Present after a rejected submission.
     */
    errors?: Array<RequestedInformation.Error>;

    /**
     * `true` when the item can be skipped.
     */
    optional?: boolean;

    /**
     * The values `value` may take on a `select` item. On an `id_document` item these
     * are the ID types accepted, and the chosen one decides which `documents` slots to
     * send. Absent when the item has no choice to make.
     */
    options?: Array<string>;
  }

  export namespace RequestedInformation {
    export interface Error {
      /**
       * Stable error code.
       */
      code?: string;

      /**
       * Why it was rejected.
       */
      reason?: string;
    }
  }

  export interface RequiredDocument {
    /**
     * Document slot key, such as `id_card_front`, `id_card_back`, or `selfie`.
     */
    document?: string;

    /**
     * Why the previous submission was rejected, when the provider requested new
     * documents or declined the verification.
     */
    rejection_reason?: string | null;

    /**
     * `pending_upload` until the document has been relayed for review; `submitted`
     * afterwards.
     */
    status?: 'pending_upload' | 'submitted';
  }
}

export interface VerificationListResponse {
  data?: Array<VerificationListResponse.Data>;
}

export namespace VerificationListResponse {
  export interface Data {
    /**
     * Verification profile ID, prefixed `idpf_`.
     */
    id?: string;

    /**
     * Address on the verification profile. `null` when no address is set.
     */
    address?: Data.Address | null;

    /**
     * Legal business name.
     */
    business_name?: string | null;

    /**
     * Legal entity structure of the business, such as `private_corporation` or
     * `sole_proprietorship`. Supported values vary by country of incorporation — see
     * [Business structures](/developer/verification/business-structures).
     */
    business_structure?: string | null;

    /**
     * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
     */
    country?: string | null;

    /**
     * When the verification profile was created, as an ISO 8601 timestamp.
     */
    created_at?: string;

    /**
     * Formatted as `YYYY-MM-DD`.
     */
    date_of_birth?: string | null;

    /**
     * Email address on the verification profile.
     */
    email?: string | null;

    first_name?: string | null;

    kind?: 'individual' | 'business';

    last_name?: string | null;

    /**
     * Phone number on the verification profile.
     */
    phone?: string | null;

    /**
     * What Whop still needs before review can continue — one requirement per entry.
     * Answer with Update Verification; nothing from the response is echoed back. Keys
     * that don't apply are omitted.
     */
    requested_information?: Array<Data.RequestedInformation>;

    /**
     * Documents for a document-upload verification and their progress. Present only on
     * verifications created by sending `documents`. `pending_upload` documents were
     * not accepted yet — send the full set again with another Create Verification
     * call.
     */
    required_documents?: Array<Data.RequiredDocument>;

    /**
     * Hosted verification session URL for the user to complete identity checks.
     * Expires 7 days after creation.
     */
    session_url?: string | null;

    /**
     * Current verification state. `not_started` before any session exists; `pending`
     * while a session needs the user's input; `processing` while the provider's
     * automated checks run on a fresh submission; `action_required` when
     * `requested_information` needs answers; `manual_review` while information already
     * sent is under review — an audit answer, or a document the payout provider holds
     * — nothing to submit, usually done within 3 business days; `approved` on success;
     * `rejected` on failure. Call Create Verification again to start a new session.
     */
    status?:
      | 'not_started'
      | 'pending'
      | 'processing'
      | 'manual_review'
      | 'approved'
      | 'rejected'
      | 'action_required';

    /**
     * When the verification profile was last updated, as an ISO 8601 timestamp.
     */
    updated_at?: string;
  }

  export namespace Data {
    /**
     * Address on the verification profile. `null` when no address is set.
     */
    export interface Address {
      city?: string | null;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
       */
      country?: string | null;

      /**
       * First line of the street address.
       */
      line1?: string;

      /**
       * Second line of the street address.
       */
      line2?: string | null;

      /**
       * Postal or ZIP code.
       */
      postal_code?: string | null;

      /**
       * State, province, or region code, for example `CA`.
       */
      state?: string | null;
    }

    export interface RequestedInformation {
      /**
       * Requested information item ID, prefixed `inrqi_`.
       */
      id: string;

      /**
       * Instruction to show the user. Carries the reviewer's note verbatim when there is
       * one.
       */
      label: string;

      /**
       * What is needed: a document name such as `bank_statement`, or a field key such as
       * `ssn` or `identity_document`. Handle unrecognized values by `type`.
       */
      requirement: string;

      /**
       * What to send as the answer, so you never have to infer it: `files` (a document,
       * as a list of its pages), `id_document` (send `documents` with the slot keys for
       * the ID you are uploading), `text`, `date`, `phone` or `select` (send `value`),
       * or `address` (send `address`).
       */
      type: string;

      /**
       * Present after a rejected submission.
       */
      errors?: Array<RequestedInformation.Error>;

      /**
       * `true` when the item can be skipped.
       */
      optional?: boolean;

      /**
       * The values `value` may take on a `select` item. On an `id_document` item these
       * are the ID types accepted, and the chosen one decides which `documents` slots to
       * send. Absent when the item has no choice to make.
       */
      options?: Array<string>;
    }

    export namespace RequestedInformation {
      export interface Error {
        /**
         * Stable error code.
         */
        code?: string;

        /**
         * Why it was rejected.
         */
        reason?: string;
      }
    }

    export interface RequiredDocument {
      /**
       * Document slot key, such as `id_card_front`, `id_card_back`, or `selfie`.
       */
      document?: string;

      /**
       * Why the previous submission was rejected, when the provider requested new
       * documents or declined the verification.
       */
      rejection_reason?: string | null;

      /**
       * `pending_upload` until the document has been relayed for review; `submitted`
       * afterwards.
       */
      status?: 'pending_upload' | 'submitted';
    }
  }
}

export interface VerificationRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface VerificationListParams {
  /**
   * Query param: Account or user ID whose verifications you want to list. Use a
   * `biz_` account ID, or the caller's `user_` ID for personal verifications.
   */
  account_id: string;

  /**
   * Query param: Sort direction for returned verifications.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field used to sort returned verifications.
   */
  order?: 'updated_at' | 'created_at';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Verifications {
  export {
    type VerificationErrorCode as VerificationErrorCode,
    type VerificationStatus as VerificationStatus,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
    type VerificationListResponse as VerificationListResponse,
    type VerificationRetrieveParams as VerificationRetrieveParams,
    type VerificationListParams as VerificationListParams,
  };
}
