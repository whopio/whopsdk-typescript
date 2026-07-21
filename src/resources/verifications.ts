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
   *
   * @example
   * ```ts
   * const verifications = await client.verifications.list({
   *   account_id: 'account_id',
   * });
   * ```
   */
  list(query: VerificationListParams, options?: RequestOptions): APIPromise<VerificationListResponse> {
    return this._client.get('/verifications', { query, ...options });
  }

  /**
   * Returns verifications for an account, including their status and any required
   * actions.
   *
   * @example
   * ```ts
   * const verification = await client.verifications.retrieve(
   *   'verification_id',
   * );
   * ```
   */
  retrieve(verificationID: string, options?: RequestOptions): APIPromise<VerificationRetrieveResponse> {
    return this._client.get(path`/verifications/${verificationID}`, options);
  }

  /**
   * Starts a hosted verification session for an account or user, or returns the
   * active session when one already exists. Any fields you include in the request
   * body are used to prefill the session. Send `documents` (with `document_type`) to
   * instead verify the person from identity documents included in this request — no
   * hosted session involved. If the account already has an `approved` verification
   * the request is rejected; unlink it first to start a new one.
   *
   * @example
   * ```ts
   * const verification = await client.verifications.create({
   *   account_id: 'account_id',
   * });
   * ```
   */
  create(params: VerificationCreateParams, options?: RequestOptions): APIPromise<VerificationCreateResponse> {
    const { account_id, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/verifications', {
      query: { account_id },
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates editable profile details or submits answers for items returned in
   * `requested_information`. Once a verification is `approved` its profile details
   * are locked and can no longer be edited.
   *
   * @example
   * ```ts
   * const verification = await client.verifications.update(
   *   'verification_id',
   * );
   * ```
   */
  update(
    verificationID: string,
    body: VerificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VerificationUpdateResponse> {
    return this._client.patch(path`/verifications/${verificationID}`, { body, ...options });
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
  | 'action_required';

export interface VerificationCreateResponse {
  /**
   * Verification profile ID, prefixed `idpf_`.
   */
  id?: string;

  /**
   * Address on the verification profile. `null` when no address is set.
   */
  address?: VerificationCreateResponse.Address | null;

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

  first_name?: string | null;

  kind?: 'individual' | 'business';

  last_name?: string | null;

  /**
   * Fields or documents Whop still needs before review can continue. Submit answers
   * with the Update Verification endpoint.
   */
  requested_information?: Array<VerificationCreateResponse.RequestedInformation>;

  /**
   * Documents for a document-upload verification and their progress. Present only on
   * verifications created by sending `documents`. `pending_upload` documents were
   * not accepted yet — send the full set again with another Create Verification
   * call.
   */
  required_documents?: Array<VerificationCreateResponse.RequiredDocument>;

  /**
   * Hosted verification session URL for the user to complete identity checks.
   * Expires 7 days after creation.
   */
  session_url?: string | null;

  /**
   * Current verification state. `not_started` before any session has been created;
   * `pending` while a session is in progress and needs the user's input;
   * `processing` while the provider reviews submitted documents — nothing to do but
   * wait; `action_required` when items in `requested_information` need answers
   * before review can continue; `approved` once verification succeeds; `rejected` if
   * it fails. Call the Create Verification endpoint again to start a new session.
   */
  status?: 'not_started' | 'pending' | 'processing' | 'approved' | 'rejected' | 'action_required';

  /**
   * When the verification profile was last updated, as an ISO 8601 timestamp.
   */
  updated_at?: string;
}

export namespace VerificationCreateResponse {
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
     * Requested information item ID, prefixed `inrqi_`. Include this ID when
     * submitting an answer.
     */
    id?: string;

    /**
     * Additional instructions for this requested item, or `null`.
     */
    description?: string | null;

    /**
     * Reason a previously submitted value was rejected. `null` if no submitted value
     * has been rejected.
     */
    error_message?: string | null;

    /**
     * Stable field key, such as `ssn` or `business_description`.
     */
    field?: string;

    /**
     * Human-readable label for the field, such as `Social Security Number`.
     */
    label?: string;

    /**
     * Allowed values for a `select` field (e.g. account_type, business_structure) —
     * the submitted value must be one of these; empty for other types.
     */
    options?: Array<string>;

    /**
     * Document upload slots for this item. Present when `type` is `files`; upload one
     * file for each required slot and include the slot's `category` when submitting
     * the answer.
     */
    requested_files?: Array<RequestedInformation.RequestedFile>;

    /**
     * Input type expected for this item: `text`, `date`, `phone`, `address`, `files`,
     * or `select`.
     */
    type?: string | null;
  }

  export namespace RequestedInformation {
    export interface RequestedFile {
      /**
       * File category to include with the uploaded file so Whop can route the document
       * correctly. `null` for a generic upload.
       */
      category?: string | null;

      /**
       * Whether this slot can be left empty.
       */
      is_optional?: boolean;

      /**
       * Specific document type requested, such as `Bank Statement`. `null` for standard
       * identity and business document uploads.
       */
      kind?: string | null;

      /**
       * Label for this upload slot, such as `Front of ID Document`.
       */
      label?: string;

      /**
       * Whether this slot accepts more than one file.
       */
      multiple?: boolean;
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

  first_name?: string | null;

  kind?: 'individual' | 'business';

  last_name?: string | null;

  /**
   * Fields or documents Whop still needs before review can continue. Submit answers
   * with the Update Verification endpoint.
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
   * Current verification state. `not_started` before any session has been created;
   * `pending` while a session is in progress and needs the user's input;
   * `processing` while the provider reviews submitted documents — nothing to do but
   * wait; `action_required` when items in `requested_information` need answers
   * before review can continue; `approved` once verification succeeds; `rejected` if
   * it fails. Call the Create Verification endpoint again to start a new session.
   */
  status?: 'not_started' | 'pending' | 'processing' | 'approved' | 'rejected' | 'action_required';

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
     * Requested information item ID, prefixed `inrqi_`. Include this ID when
     * submitting an answer.
     */
    id?: string;

    /**
     * Additional instructions for this requested item, or `null`.
     */
    description?: string | null;

    /**
     * Reason a previously submitted value was rejected. `null` if no submitted value
     * has been rejected.
     */
    error_message?: string | null;

    /**
     * Stable field key, such as `ssn` or `business_description`.
     */
    field?: string;

    /**
     * Human-readable label for the field, such as `Social Security Number`.
     */
    label?: string;

    /**
     * Allowed values for a `select` field (e.g. account_type, business_structure) —
     * the submitted value must be one of these; empty for other types.
     */
    options?: Array<string>;

    /**
     * Document upload slots for this item. Present when `type` is `files`; upload one
     * file for each required slot and include the slot's `category` when submitting
     * the answer.
     */
    requested_files?: Array<RequestedInformation.RequestedFile>;

    /**
     * Input type expected for this item: `text`, `date`, `phone`, `address`, `files`,
     * or `select`.
     */
    type?: string | null;
  }

  export namespace RequestedInformation {
    export interface RequestedFile {
      /**
       * File category to include with the uploaded file so Whop can route the document
       * correctly. `null` for a generic upload.
       */
      category?: string | null;

      /**
       * Whether this slot can be left empty.
       */
      is_optional?: boolean;

      /**
       * Specific document type requested, such as `Bank Statement`. `null` for standard
       * identity and business document uploads.
       */
      kind?: string | null;

      /**
       * Label for this upload slot, such as `Front of ID Document`.
       */
      label?: string;

      /**
       * Whether this slot accepts more than one file.
       */
      multiple?: boolean;
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

export interface VerificationUpdateResponse {
  /**
   * Verification profile ID, prefixed `idpf_`.
   */
  id?: string;

  /**
   * Address on the verification profile. `null` when no address is set.
   */
  address?: VerificationUpdateResponse.Address | null;

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

  first_name?: string | null;

  kind?: 'individual' | 'business';

  last_name?: string | null;

  /**
   * Fields or documents Whop still needs before review can continue. Submit answers
   * with the Update Verification endpoint.
   */
  requested_information?: Array<VerificationUpdateResponse.RequestedInformation>;

  /**
   * Documents for a document-upload verification and their progress. Present only on
   * verifications created by sending `documents`. `pending_upload` documents were
   * not accepted yet — send the full set again with another Create Verification
   * call.
   */
  required_documents?: Array<VerificationUpdateResponse.RequiredDocument>;

  /**
   * Hosted verification session URL for the user to complete identity checks.
   * Expires 7 days after creation.
   */
  session_url?: string | null;

  /**
   * Current verification state. `not_started` before any session has been created;
   * `pending` while a session is in progress and needs the user's input;
   * `processing` while the provider reviews submitted documents — nothing to do but
   * wait; `action_required` when items in `requested_information` need answers
   * before review can continue; `approved` once verification succeeds; `rejected` if
   * it fails. Call the Create Verification endpoint again to start a new session.
   */
  status?: 'not_started' | 'pending' | 'processing' | 'approved' | 'rejected' | 'action_required';

  /**
   * When the verification profile was last updated, as an ISO 8601 timestamp.
   */
  updated_at?: string;
}

export namespace VerificationUpdateResponse {
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
     * Requested information item ID, prefixed `inrqi_`. Include this ID when
     * submitting an answer.
     */
    id?: string;

    /**
     * Additional instructions for this requested item, or `null`.
     */
    description?: string | null;

    /**
     * Reason a previously submitted value was rejected. `null` if no submitted value
     * has been rejected.
     */
    error_message?: string | null;

    /**
     * Stable field key, such as `ssn` or `business_description`.
     */
    field?: string;

    /**
     * Human-readable label for the field, such as `Social Security Number`.
     */
    label?: string;

    /**
     * Allowed values for a `select` field (e.g. account_type, business_structure) —
     * the submitted value must be one of these; empty for other types.
     */
    options?: Array<string>;

    /**
     * Document upload slots for this item. Present when `type` is `files`; upload one
     * file for each required slot and include the slot's `category` when submitting
     * the answer.
     */
    requested_files?: Array<RequestedInformation.RequestedFile>;

    /**
     * Input type expected for this item: `text`, `date`, `phone`, `address`, `files`,
     * or `select`.
     */
    type?: string | null;
  }

  export namespace RequestedInformation {
    export interface RequestedFile {
      /**
       * File category to include with the uploaded file so Whop can route the document
       * correctly. `null` for a generic upload.
       */
      category?: string | null;

      /**
       * Whether this slot can be left empty.
       */
      is_optional?: boolean;

      /**
       * Specific document type requested, such as `Bank Statement`. `null` for standard
       * identity and business document uploads.
       */
      kind?: string | null;

      /**
       * Label for this upload slot, such as `Front of ID Document`.
       */
      label?: string;

      /**
       * Whether this slot accepts more than one file.
       */
      multiple?: boolean;
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

    first_name?: string | null;

    kind?: 'individual' | 'business';

    last_name?: string | null;

    /**
     * Fields or documents Whop still needs before review can continue. Submit answers
     * with the Update Verification endpoint.
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
     * Current verification state. `not_started` before any session has been created;
     * `pending` while a session is in progress and needs the user's input;
     * `processing` while the provider reviews submitted documents — nothing to do but
     * wait; `action_required` when items in `requested_information` need answers
     * before review can continue; `approved` once verification succeeds; `rejected` if
     * it fails. Call the Create Verification endpoint again to start a new session.
     */
    status?: 'not_started' | 'pending' | 'processing' | 'approved' | 'rejected' | 'action_required';

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
       * Requested information item ID, prefixed `inrqi_`. Include this ID when
       * submitting an answer.
       */
      id?: string;

      /**
       * Additional instructions for this requested item, or `null`.
       */
      description?: string | null;

      /**
       * Reason a previously submitted value was rejected. `null` if no submitted value
       * has been rejected.
       */
      error_message?: string | null;

      /**
       * Stable field key, such as `ssn` or `business_description`.
       */
      field?: string;

      /**
       * Human-readable label for the field, such as `Social Security Number`.
       */
      label?: string;

      /**
       * Allowed values for a `select` field (e.g. account_type, business_structure) —
       * the submitted value must be one of these; empty for other types.
       */
      options?: Array<string>;

      /**
       * Document upload slots for this item. Present when `type` is `files`; upload one
       * file for each required slot and include the slot's `category` when submitting
       * the answer.
       */
      requested_files?: Array<RequestedInformation.RequestedFile>;

      /**
       * Input type expected for this item: `text`, `date`, `phone`, `address`, `files`,
       * or `select`.
       */
      type?: string | null;
    }

    export namespace RequestedInformation {
      export interface RequestedFile {
        /**
         * File category to include with the uploaded file so Whop can route the document
         * correctly. `null` for a generic upload.
         */
        category?: string | null;

        /**
         * Whether this slot can be left empty.
         */
        is_optional?: boolean;

        /**
         * Specific document type requested, such as `Bank Statement`. `null` for standard
         * identity and business document uploads.
         */
        kind?: string | null;

        /**
         * Label for this upload slot, such as `Front of ID Document`.
         */
        label?: string;

        /**
         * Whether this slot accepts more than one file.
         */
        multiple?: boolean;
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

export interface VerificationListParams {
  /**
   * Account or user ID whose verifications you want to list. Use a `biz_` account
   * ID, or the caller's `user_` ID for personal verifications.
   */
  account_id: string;

  /**
   * Sort direction for returned verifications.
   */
  direction?: 'asc' | 'desc';

  /**
   * Field used to sort returned verifications.
   */
  order?: 'updated_at' | 'created_at';
}

export type VerificationCreateParams =
  | VerificationCreateParams.CreateIndividualVerification
  | VerificationCreateParams.CreateBusinessVerification;

export declare namespace VerificationCreateParams {
  export interface CreateIndividualVerification {
    /**
     * Query param: Account or user ID whose identity you want to verify. Use a `biz_`
     * account ID for account verifications, or the caller's `user_` ID for personal
     * verification.
     */
    account_id: string;

    /**
     * Body param
     */
    address?: CreateIndividualVerification.Address;

    /**
     * Body param: Legal business name for a sole proprietor or single-member LLC.
     */
    business_name?: string;

    /**
     * Body param: Entity type for sole proprietors, such as `single_member_llc`.
     * Supported values vary by country of incorporation — see
     * [Business structures](/developer/verification/business-structures).
     */
    business_structure?: string;

    /**
     * Body param: The business ID number of the company, as appropriate for the
     * company's country. Examples are an Employer Identification Number (EIN) in the
     * US, a Business Number in Canada, or a Company Number in the UK.
     */
    business_tax_identification_number?: string;

    /**
     * Body param: Business website URL. Whop store pages are not accepted.
     */
    business_website?: string;

    /**
     * Body param: Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
     */
    country?: string;

    /**
     * Body param: Formatted as `YYYY-MM-DD`.
     */
    date_of_birth?: string;

    /**
     * Body param: Identity document being sent, when verifying with `documents`.
     * Decides exactly which file slots to send: `ID_CARD` → `id_card_front` +
     * `id_card_back` + `selfie`; `DRIVERS` → `drivers_front` + `drivers_back` +
     * `selfie`; `RESIDENCE_PERMIT` → `residence_permit_front` +
     * `residence_permit_back` + `selfie`; `PASSPORT` → `passport_front` + `selfie`.
     * See [Identity documents](/developer/verification/identity-documents).
     */
    document_type?: 'ID_CARD' | 'DRIVERS' | 'RESIDENCE_PERMIT' | 'PASSPORT';

    /**
     * Body param: Identity document files, each value the file's raw bytes
     * base64-encoded (JPEG, PNG, or PDF, up to 5MB per file before encoding). Sending
     * this object verifies the person from the files in this request instead of a
     * hosted session — individual verifications only, and the request must also carry
     * `document_type`, `first_name`, `last_name`, `date_of_birth`, `country`, `phone`,
     * `tax_identification_number`, and an `address` with `line1`, `city`, `state`, and
     * `postal_code`. Send every slot for your `document_type` — a missing or rejected
     * file fails the whole request and nothing is submitted; review starts
     * automatically once every document is accepted. See
     * [Identity documents](/developer/verification/identity-documents) for a full
     * walkthrough.
     */
    documents?: CreateIndividualVerification.Documents;

    /**
     * Body param
     */
    first_name?: string;

    /**
     * Body param: Verification type. Defaults to `individual`.
     */
    kind?: 'individual';

    /**
     * Body param
     */
    last_name?: string;

    /**
     * Body param
     */
    phone?: string;

    /**
     * Body param: The government-issued ID number of the person being verified — the
     * individual for a KYC verification, or the business representative for a KYB
     * verification — as appropriate for their country. Examples are a Social Security
     * Number (SSN) in the US, or a Social Insurance Number in Canada.
     */
    tax_identification_number?: string;

    /**
     * Header param: A unique key that makes this request safe to retry. See
     * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
     */
    'Idempotency-Key'?: string;
  }

  export namespace CreateIndividualVerification {
    export interface Address {
      city?: string;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
       */
      country?: string;

      /**
       * First line of the street address.
       */
      line1?: string;

      /**
       * Second line of the street address.
       */
      line2?: string;

      /**
       * Postal or ZIP code.
       */
      postal_code?: string;

      /**
       * State, province, or region code, for example `CA`.
       */
      state?: string;
    }

    /**
     * Identity document files, each value the file's raw bytes base64-encoded (JPEG,
     * PNG, or PDF, up to 5MB per file before encoding). Sending this object verifies
     * the person from the files in this request instead of a hosted session —
     * individual verifications only, and the request must also carry `document_type`,
     * `first_name`, `last_name`, `date_of_birth`, `country`, `phone`,
     * `tax_identification_number`, and an `address` with `line1`, `city`, `state`, and
     * `postal_code`. Send every slot for your `document_type` — a missing or rejected
     * file fails the whole request and nothing is submitted; review starts
     * automatically once every document is accepted. See
     * [Identity documents](/developer/verification/identity-documents) for a full
     * walkthrough.
     */
    export interface Documents {
      /**
       * Back of the driver's license, base64-encoded. Required when `document_type` is
       * `DRIVERS`.
       */
      drivers_back?: string;

      /**
       * Front of the driver's license, base64-encoded. Required when `document_type` is
       * `DRIVERS`.
       */
      drivers_front?: string;

      /**
       * Back of the ID card, base64-encoded. Required when `document_type` is `ID_CARD`.
       */
      id_card_back?: string;

      /**
       * Front of the ID card, base64-encoded. Required when `document_type` is
       * `ID_CARD`.
       */
      id_card_front?: string;

      /**
       * Photo page of the passport, base64-encoded. Required when `document_type` is
       * `PASSPORT`.
       */
      passport_front?: string;

      /**
       * Back of the residence permit, base64-encoded. Required when `document_type` is
       * `RESIDENCE_PERMIT`.
       */
      residence_permit_back?: string;

      /**
       * Front of the residence permit, base64-encoded. Required when `document_type` is
       * `RESIDENCE_PERMIT`.
       */
      residence_permit_front?: string;

      /**
       * Photo of the person's face, base64-encoded. Always required, with every document
       * type. Must be JPEG or PNG.
       */
      selfie?: string;
    }
  }

  export interface CreateBusinessVerification {
    /**
     * Query param: Account or user ID whose identity you want to verify. Use a `biz_`
     * account ID for account verifications, or the caller's `user_` ID for personal
     * verification.
     */
    account_id: string;

    /**
     * Body param
     */
    address?: CreateBusinessVerification.Address;

    /**
     * Body param: Legal business name.
     */
    business_name?: string;

    /**
     * Body param: Legal entity structure of the business, such as
     * `private_corporation` or `sole_proprietorship`. Supported values vary by country
     * of incorporation — see
     * [Business structures](/developer/verification/business-structures).
     */
    business_structure?: string;

    /**
     * Body param: The business ID number of the company, as appropriate for the
     * company's country. Examples are an Employer Identification Number (EIN) in the
     * US, a Business Number in Canada, or a Company Number in the UK.
     */
    business_tax_identification_number?: string;

    /**
     * Body param: Business website URL. Whop store pages are not accepted.
     */
    business_website?: string;

    /**
     * Body param: Country of incorporation as a two-letter ISO 3166-1 country code.
     */
    country?: string;

    /**
     * Body param: Must be `business` to start a KYB verification.
     */
    kind?: 'business';

    /**
     * Body param: State or region where the business is incorporated.
     */
    place_of_incorporation?: string;

    /**
     * Body param: The government-issued ID number of the person being verified — the
     * individual for a KYC verification, or the business representative for a KYB
     * verification — as appropriate for their country. Examples are a Social Security
     * Number (SSN) in the US, or a Social Insurance Number in Canada.
     */
    tax_identification_number?: string;

    /**
     * Header param: A unique key that makes this request safe to retry. See
     * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
     */
    'Idempotency-Key'?: string;
  }

  export namespace CreateBusinessVerification {
    export interface Address {
      city?: string;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
       */
      country?: string;

      /**
       * First line of the street address.
       */
      line1?: string;

      /**
       * Second line of the street address.
       */
      line2?: string;

      /**
       * Postal or ZIP code.
       */
      postal_code?: string;

      /**
       * State, province, or region code, for example `CA`.
       */
      state?: string;
    }
  }
}

export type VerificationUpdateParams =
  | VerificationUpdateParams.UpdateIndividualVerification
  | VerificationUpdateParams.UpdateBusinessVerification;

export declare namespace VerificationUpdateParams {
  export interface UpdateIndividualVerification {
    /**
     * The business ID number of the company, as appropriate for the company's country.
     * Examples are an Employer Identification Number (EIN) in the US, a Business
     * Number in Canada, or a Company Number in the UK.
     */
    business_tax_identification_number?: string;

    /**
     * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
     */
    country?: string;

    /**
     * Formatted as `YYYY-MM-DD`.
     */
    date_of_birth?: string;

    first_name?: string;

    last_name?: string;

    /**
     * Personal address for the individual.
     */
    personal_address?: UpdateIndividualVerification.PersonalAddress;

    /**
     * Answers to items returned in `requested_information`. Each entry must include
     * the requested item `id` and exactly one answer payload matching the item's
     * `type`: `value` for `text`, `date`, or `phone`; `address` for `address`; `files`
     * for `files`.
     */
    requested_information?: Array<UpdateIndividualVerification.RequestedInformation>;

    /**
     * The government-issued ID number of the person being verified — the individual
     * for a KYC verification, or the business representative for a KYB verification —
     * as appropriate for their country. Examples are a Social Security Number (SSN) in
     * the US, or a Social Insurance Number in Canada.
     */
    tax_identification_number?: string;
  }

  export namespace UpdateIndividualVerification {
    /**
     * Personal address for the individual.
     */
    export interface PersonalAddress {
      city?: string;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
       */
      country?: string;

      /**
       * First line of the street address.
       */
      line1?: string;

      /**
       * Second line of the street address.
       */
      line2?: string;

      /**
       * Postal or ZIP code.
       */
      postal_code?: string;

      /**
       * State, province, or region code, for example `CA`.
       */
      state?: string;
    }

    export interface RequestedInformation {
      /**
       * Requested information item ID, prefixed `inrqi_`.
       */
      id: string;

      /**
       * Address payload for `address` items.
       */
      address?: RequestedInformation.Address;

      /**
       * Uploaded file payloads for `files` items. Each file should include a
       * `direct_upload_id` from the upload flow, plus the requested file `category` and
       * `kind` when provided.
       */
      files?: Array<RequestedInformation.File>;

      /**
       * Answer value for `text`, `date`, or `phone` items.
       */
      value?: string;

      /**
       * Whether `value` is raw input or a vault token.
       */
      value_type?: 'raw' | 'vault_token';
    }

    export namespace RequestedInformation {
      /**
       * Address payload for `address` items.
       */
      export interface Address {
        city?: string;

        /**
         * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
         */
        country?: string;

        /**
         * First line of the street address.
         */
        line1?: string;

        /**
         * Second line of the street address.
         */
        line2?: string;

        /**
         * Postal or ZIP code.
         */
        postal_code?: string;

        /**
         * State, province, or region code, for example `CA`.
         */
        state?: string;
      }

      export interface File {
        /**
         * Existing attachment ID, when reusing an already attached document.
         */
        attachment_id?: string;

        /**
         * Requested file category copied from `requested_files.category`.
         */
        category?: string;

        /**
         * Direct upload ID for the uploaded document.
         */
        direct_upload_id?: string;

        /**
         * Requested document kind copied from `requested_files.kind`.
         */
        kind?: string;
      }
    }
  }

  export interface UpdateBusinessVerification {
    /**
     * Business address.
     */
    business_address?: UpdateBusinessVerification.BusinessAddress;

    /**
     * Legal business name.
     */
    business_name?: string;

    /**
     * Legal entity structure of the business, such as `private_corporation` or
     * `sole_proprietorship`. Supported values vary by country of incorporation — see
     * [Business structures](/developer/verification/business-structures).
     */
    business_structure?: string;

    /**
     * The business ID number of the company, as appropriate for the company's country.
     * Examples are an Employer Identification Number (EIN) in the US, a Business
     * Number in Canada, or a Company Number in the UK.
     */
    business_tax_identification_number?: string;

    /**
     * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
     */
    country?: string;

    /**
     * Answers to items returned in `requested_information`. Each entry must include
     * the requested item `id` and exactly one answer payload matching the item's
     * `type`: `value` for `text`, `date`, or `phone`; `address` for `address`; `files`
     * for `files`.
     */
    requested_information?: Array<UpdateBusinessVerification.RequestedInformation>;

    /**
     * The government-issued ID number of the person being verified — the individual
     * for a KYC verification, or the business representative for a KYB verification —
     * as appropriate for their country. Examples are a Social Security Number (SSN) in
     * the US, or a Social Insurance Number in Canada.
     */
    tax_identification_number?: string;
  }

  export namespace UpdateBusinessVerification {
    /**
     * Business address.
     */
    export interface BusinessAddress {
      city?: string;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
       */
      country?: string;

      /**
       * First line of the street address.
       */
      line1?: string;

      /**
       * Second line of the street address.
       */
      line2?: string;

      /**
       * Postal or ZIP code.
       */
      postal_code?: string;

      /**
       * State, province, or region code, for example `CA`.
       */
      state?: string;
    }

    export interface RequestedInformation {
      /**
       * Requested information item ID, prefixed `inrqi_`.
       */
      id: string;

      /**
       * Address payload for `address` items.
       */
      address?: RequestedInformation.Address;

      /**
       * Uploaded file payloads for `files` items. Each file should include a
       * `direct_upload_id` from the upload flow, plus the requested file `category` and
       * `kind` when provided.
       */
      files?: Array<RequestedInformation.File>;

      /**
       * Answer value for `text`, `date`, or `phone` items.
       */
      value?: string;

      /**
       * Whether `value` is raw input or a vault token.
       */
      value_type?: 'raw' | 'vault_token';
    }

    export namespace RequestedInformation {
      /**
       * Address payload for `address` items.
       */
      export interface Address {
        city?: string;

        /**
         * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
         */
        country?: string;

        /**
         * First line of the street address.
         */
        line1?: string;

        /**
         * Second line of the street address.
         */
        line2?: string;

        /**
         * Postal or ZIP code.
         */
        postal_code?: string;

        /**
         * State, province, or region code, for example `CA`.
         */
        state?: string;
      }

      export interface File {
        /**
         * Existing attachment ID, when reusing an already attached document.
         */
        attachment_id?: string;

        /**
         * Requested file category copied from `requested_files.category`.
         */
        category?: string;

        /**
         * Direct upload ID for the uploaded document.
         */
        direct_upload_id?: string;

        /**
         * Requested document kind copied from `requested_files.kind`.
         */
        kind?: string;
      }
    }
  }
}

export declare namespace Verifications {
  export {
    type VerificationErrorCode as VerificationErrorCode,
    type VerificationStatus as VerificationStatus,
    type VerificationCreateResponse as VerificationCreateResponse,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
    type VerificationUpdateResponse as VerificationUpdateResponse,
    type VerificationListResponse as VerificationListResponse,
    type VerificationListParams as VerificationListParams,
    type VerificationCreateParams as VerificationCreateParams,
    type VerificationUpdateParams as VerificationUpdateParams,
  };
}
