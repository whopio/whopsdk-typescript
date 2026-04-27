// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Verifications
 */
export class Verifications extends APIResource {
  /**
   * Retrieves the details of an existing verification.
   *
   * Required permissions:
   *
   * - `payout:account:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VerificationRetrieveResponse> {
    return this._client.get(path`/verifications/${id}`, options);
  }

  /**
   * Returns a list of identity verifications for a payout account, ordered by most
   * recent first.
   *
   * Required permissions:
   *
   * - `payout:account:read`
   */
  list(
    query: VerificationListParams,
    options?: RequestOptions,
  ): PagePromise<VerificationListResponsesCursorPage, VerificationListResponse> {
    return this._client.getAPIList('/verifications', CursorPage<VerificationListResponse>, {
      query,
      ...options,
    });
  }
}

export type VerificationListResponsesCursorPage = CursorPage<VerificationListResponse>;

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
  | 'action_required';

/**
 * An identity verification session used to confirm a person or entity's identity
 * for payout account eligibility.
 */
export interface VerificationRetrieveResponse {
  /**
   * The unique identifier for the verification.
   */
  id: string;

  /**
   * An error code for a verification attempt.
   */
  last_error_code: VerificationErrorCode | null;

  /**
   * A human-readable explanation of the most recent verification error. Null if no
   * error has occurred.
   */
  last_error_reason: string | null;

  /**
   * The current status of this verification session.
   */
  status: VerificationStatus;
}

/**
 * An identity verification session used to confirm a person or entity's identity
 * for payout account eligibility.
 */
export interface VerificationListResponse {
  /**
   * The unique identifier for the verification.
   */
  id: string;

  /**
   * An error code for a verification attempt.
   */
  last_error_code: VerificationErrorCode | null;

  /**
   * A human-readable explanation of the most recent verification error. Null if no
   * error has occurred.
   */
  last_error_reason: string | null;

  /**
   * The current status of this verification session.
   */
  status: VerificationStatus;
}

export interface VerificationListParams extends CursorPageParams {
  /**
   * The unique identifier of the payout account to list verifications for.
   */
  payout_account_id: string;

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

export declare namespace Verifications {
  export {
    type VerificationErrorCode as VerificationErrorCode,
    type VerificationStatus as VerificationStatus,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
    type VerificationListResponse as VerificationListResponse,
    type VerificationListResponsesCursorPage as VerificationListResponsesCursorPage,
    type VerificationListParams as VerificationListParams,
  };
}
