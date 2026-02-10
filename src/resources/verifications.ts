// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
  | 'review';

/**
 * An identity verification session used to confirm a user's identity for payout
 * account eligibility.
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

export declare namespace Verifications {
  export {
    type VerificationErrorCode as VerificationErrorCode,
    type VerificationStatus as VerificationStatus,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
  };
}
