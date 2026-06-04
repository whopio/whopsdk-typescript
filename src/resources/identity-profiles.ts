// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VerificationsAPI from './verifications';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Identity profiles
 */
export class IdentityProfiles extends APIResource {
  /**
   * Returns a paginated list of identity profiles. When company_id is provided,
   * lists IPs currently linked to that company's ledger. When omitted, lists IPs
   * linked to any ledger the actor can read (including child companies under a
   * parent).
   *
   * Required permissions:
   *
   * - `identity:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const identityProfileListResponse of client.identityProfiles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: IdentityProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IdentityProfileListResponsesCursorPage, IdentityProfileListResponse> {
    return this._client.getAPIList('/identity_profiles', CursorPage<IdentityProfileListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves the details of an existing identity profile.
   *
   * Required permissions:
   *
   * - `identity:read`
   *
   * @example
   * ```ts
   * const identityProfile =
   *   await client.identityProfiles.retrieve(
   *     'idpf_xxxxxxxxxxxxx',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IdentityProfile> {
    return this._client.get(path`/identity_profiles/${id}`, options);
  }

  /**
   * Kicks off an identity verification flow for a LedgerAccount, decoupled from any
   * specific product.
   *
   * @example
   * ```ts
   * const identityProfile =
   *   await client.identityProfiles.create({
   *     kind: 'individual',
   *     ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
   *   });
   * ```
   */
  create(
    body: IdentityProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<IdentityProfileCreateResponse> {
    return this._client.post('/identity_profiles', { body, ...options });
  }

  /**
   * Attaches an existing IdentityProfile to a LedgerAccount (identity reuse).
   *
   * @example
   * ```ts
   * const identityProfile =
   *   await client.identityProfiles.attach(
   *     'identity_profile_id',
   *     { ledger_account_id: 'ldgr_xxxxxxxxxxxxx' },
   *   );
   * ```
   */
  attach(
    identityProfileID: string,
    body: IdentityProfileAttachParams,
    options?: RequestOptions,
  ): APIPromise<IdentityProfile> {
    return this._client.post(path`/identity_profiles/${identityProfileID}/attach`, { body, ...options });
  }

  /**
   * Unlinks an IdentityProfile from a LedgerAccount (flips the matching link to
   * is_current=false).
   *
   * @example
   * ```ts
   * const identityProfile =
   *   await client.identityProfiles.unlink(
   *     'idpf_xxxxxxxxxxxxx',
   *     { ledger_account_id: 'ldgr_xxxxxxxxxxxxx' },
   *   );
   * ```
   */
  unlink(
    id: string,
    params: IdentityProfileUnlinkParams,
    options?: RequestOptions,
  ): APIPromise<IdentityProfile> {
    const { ledger_account_id } = params;
    return this._client.delete(path`/identity_profiles/${id}`, { query: { ledger_account_id }, ...options });
  }

  /**
   * Returns a list of verifications attached to an identity profile, ordered by most
   * recent first.
   *
   * Required permissions:
   *
   * - `identity:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const identityProfileListVerificationsResponse of client.identityProfiles.listVerifications(
   *   'idpf_xxxxxxxxxxxxx',
   * )) {
   *   // ...
   * }
   * ```
   */
  listVerifications(
    id: string,
    query: IdentityProfileListVerificationsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    IdentityProfileListVerificationsResponsesCursorPage,
    IdentityProfileListVerificationsResponse
  > {
    return this._client.getAPIList(
      path`/identity_profiles/${id}/verifications`,
      CursorPage<IdentityProfileListVerificationsResponse>,
      { query, ...options },
    );
  }
}

export type IdentityProfileListResponsesCursorPage = CursorPage<IdentityProfileListResponse>;

export type IdentityProfileListVerificationsResponsesCursorPage =
  CursorPage<IdentityProfileListVerificationsResponse>;

/**
 * A consolidated identity or business profile synced from verification provider
 * data.
 */
export interface IdentityProfile {
  /**
   * The tag of the identity profile (idpf_xxx).
   */
  id: string;

  /**
   * Registered business address reported by the identity provider. Present on
   * `business` profiles.
   */
  business_address: IdentityProfile.BusinessAddress | null;

  /**
   * Business entity name. Present on `business` profiles.
   */
  business_name: string | null;

  /**
   * Reported legal structure of a business profile (e.g. `corp`, `llc`).
   * Provider-specific values; present on `business` profiles.
   */
  business_structure: string | null;

  /**
   * ISO 3166-1 alpha-3 country code (e.g. `USA`, `GBR`). For individuals this is the
   * country of citizenship or residence reported by the identity provider; for
   * businesses this is the country of incorporation.
   */
  country: string | null;

  /**
   * When the identity profile was first created.
   */
  created_at: string;

  /**
   * ISO date (`YYYY-MM-DD`) reported by the identity provider. Present on
   * `individual` profiles.
   */
  date_of_birth: string | null;

  /**
   * Email address reported by the identity provider. Typically present on
   * `individual` profiles.
   */
  email: string | null;

  /**
   * Individual's first name.
   */
  first_name: string | null;

  /**
   * Individual's last name.
   */
  last_name: string | null;

  /**
   * The companies this identity profile is currently linked to. Only populated for
   * direct Whop user sessions; always empty when authenticated via API key, app, or
   * OAuth scope (a single identity can be linked to companies the calling platform
   * is not entitled to see).
   */
  linked_companies: Array<IdentityProfile.LinkedCompany>;

  /**
   * Residential address reported by the identity provider. Present on `individual`
   * profiles.
   */
  personal_address: IdentityProfile.PersonalAddress | null;

  /**
   * Phone number reported by the identity provider. Typically present on
   * `individual` profiles.
   */
  phone: string | null;

  /**
   * Whether this is an 'individual' or 'business' profile.
   */
  profile_type: string;

  /**
   * Derived verification status across all linked verifications.
   */
  status: IdentityProfileStatus;

  /**
   * When the identity profile was last synced from a verification.
   */
  updated_at: string;

  /**
   * All verification attempts attached to this identity profile, ordered most-recent
   * first.
   */
  verifications: Array<IdentityProfile.Verification>;
}

export namespace IdentityProfile {
  /**
   * Registered business address reported by the identity provider. Present on
   * `business` profiles.
   */
  export interface BusinessAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * A company is a seller on Whop. Companies own products, manage members, and
   * receive payouts.
   */
  export interface LinkedCompany {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * Residential address reported by the identity provider. Present on `individual`
   * profiles.
   */
  export interface PersonalAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * An identity verification session used to confirm a person or entity's identity
   * for payout account eligibility.
   */
  export interface Verification {
    /**
     * The numeric id of the verification record.
     */
    id: string;

    /**
     * When the verification record was created.
     */
    created_at: string;

    /**
     * An error code for a verification attempt.
     */
    last_error_code: VerificationsAPI.VerificationErrorCode | null;

    /**
     * A human-readable explanation of the most recent verification error. Null if no
     * error has occurred.
     */
    last_error_reason: string | null;

    /**
     * A URL the user can visit to complete the verification process. Null if the
     * session does not require user interaction.
     */
    session_url: string | null;

    /**
     * The current status of this verification session.
     */
    status: VerificationsAPI.VerificationStatus;
  }
}

/**
 * The kind of identity profile (individual vs business).
 */
export type IdentityProfileKind = 'individual' | 'business';

/**
 * Derived verification status for an identity profile.
 */
export type IdentityProfileStatus = 'not_started' | 'pending' | 'approved' | 'rejected';

/**
 * An identity verification session used to confirm a person or entity's identity
 * for payout account eligibility.
 */
export interface IdentityProfileCreateResponse {
  /**
   * The numeric id of the verification record.
   */
  id: string;

  /**
   * When the verification record was created.
   */
  created_at: string;

  /**
   * An error code for a verification attempt.
   */
  last_error_code: VerificationsAPI.VerificationErrorCode | null;

  /**
   * A human-readable explanation of the most recent verification error. Null if no
   * error has occurred.
   */
  last_error_reason: string | null;

  /**
   * A URL the user can visit to complete the verification process. Null if the
   * session does not require user interaction.
   */
  session_url: string | null;

  /**
   * The current status of this verification session.
   */
  status: VerificationsAPI.VerificationStatus;
}

/**
 * A consolidated identity or business profile synced from verification provider
 * data.
 */
export interface IdentityProfileListResponse {
  /**
   * The tag of the identity profile (idpf_xxx).
   */
  id: string;

  /**
   * Registered business address reported by the identity provider. Present on
   * `business` profiles.
   */
  business_address: IdentityProfileListResponse.BusinessAddress | null;

  /**
   * Business entity name. Present on `business` profiles.
   */
  business_name: string | null;

  /**
   * Reported legal structure of a business profile (e.g. `corp`, `llc`).
   * Provider-specific values; present on `business` profiles.
   */
  business_structure: string | null;

  /**
   * ISO 3166-1 alpha-3 country code (e.g. `USA`, `GBR`). For individuals this is the
   * country of citizenship or residence reported by the identity provider; for
   * businesses this is the country of incorporation.
   */
  country: string | null;

  /**
   * When the identity profile was first created.
   */
  created_at: string;

  /**
   * ISO date (`YYYY-MM-DD`) reported by the identity provider. Present on
   * `individual` profiles.
   */
  date_of_birth: string | null;

  /**
   * Email address reported by the identity provider. Typically present on
   * `individual` profiles.
   */
  email: string | null;

  /**
   * Individual's first name.
   */
  first_name: string | null;

  /**
   * Individual's last name.
   */
  last_name: string | null;

  /**
   * The companies this identity profile is currently linked to. Only populated for
   * direct Whop user sessions; always empty when authenticated via API key, app, or
   * OAuth scope (a single identity can be linked to companies the calling platform
   * is not entitled to see).
   */
  linked_companies: Array<IdentityProfileListResponse.LinkedCompany>;

  /**
   * Residential address reported by the identity provider. Present on `individual`
   * profiles.
   */
  personal_address: IdentityProfileListResponse.PersonalAddress | null;

  /**
   * Phone number reported by the identity provider. Typically present on
   * `individual` profiles.
   */
  phone: string | null;

  /**
   * Whether this is an 'individual' or 'business' profile.
   */
  profile_type: string;

  /**
   * Derived verification status across all linked verifications.
   */
  status: IdentityProfileStatus;

  /**
   * When the identity profile was last synced from a verification.
   */
  updated_at: string;

  /**
   * All verification attempts attached to this identity profile, ordered most-recent
   * first.
   */
  verifications: Array<IdentityProfileListResponse.Verification>;
}

export namespace IdentityProfileListResponse {
  /**
   * Registered business address reported by the identity provider. Present on
   * `business` profiles.
   */
  export interface BusinessAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * A company is a seller on Whop. Companies own products, manage members, and
   * receive payouts.
   */
  export interface LinkedCompany {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * Residential address reported by the identity provider. Present on `individual`
   * profiles.
   */
  export interface PersonalAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * An identity verification session used to confirm a person or entity's identity
   * for payout account eligibility.
   */
  export interface Verification {
    /**
     * The numeric id of the verification record.
     */
    id: string;

    /**
     * When the verification record was created.
     */
    created_at: string;

    /**
     * An error code for a verification attempt.
     */
    last_error_code: VerificationsAPI.VerificationErrorCode | null;

    /**
     * A human-readable explanation of the most recent verification error. Null if no
     * error has occurred.
     */
    last_error_reason: string | null;

    /**
     * A URL the user can visit to complete the verification process. Null if the
     * session does not require user interaction.
     */
    session_url: string | null;

    /**
     * The current status of this verification session.
     */
    status: VerificationsAPI.VerificationStatus;
  }
}

/**
 * An identity verification session used to confirm a person or entity's identity
 * for payout account eligibility.
 */
export interface IdentityProfileListVerificationsResponse {
  /**
   * The numeric id of the verification record.
   */
  id: string;

  /**
   * When the verification record was created.
   */
  created_at: string;

  /**
   * An error code for a verification attempt.
   */
  last_error_code: VerificationsAPI.VerificationErrorCode | null;

  /**
   * A human-readable explanation of the most recent verification error. Null if no
   * error has occurred.
   */
  last_error_reason: string | null;

  /**
   * A URL the user can visit to complete the verification process. Null if the
   * session does not require user interaction.
   */
  session_url: string | null;

  /**
   * The current status of this verification session.
   */
  status: VerificationsAPI.VerificationStatus;
}

export interface IdentityProfileListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of the company to filter to. When omitted, returns IPs
   * across all ledgers the actor can read.
   */
  company_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The kind of identity profile (individual vs business).
   */
  profile_type?: IdentityProfileKind | null;

  /**
   * Derived verification status for an identity profile.
   */
  status?: IdentityProfileStatus | null;
}

export interface IdentityProfileCreateParams {
  /**
   * Which slot to verify: 'individual' (KYC) or 'business' (KYB).
   */
  kind: IdentityProfileKind;

  /**
   * The ID of the LedgerAccount to verify (typically a company's primary ledger).
   */
  ledger_account_id: string;

  /**
   * Optional pre-fill claim — city.
   */
  address_city?: string | null;

  /**
   * Optional pre-fill claim — street address line 1.
   */
  address_line1?: string | null;

  /**
   * Optional pre-fill claim — postal code.
   */
  address_postal_code?: string | null;

  /**
   * Optional pre-fill claim — state/region.
   */
  address_state?: string | null;

  /**
   * Optional pre-fill claim (ISO2 or ISO3 country code).
   */
  country?: string | null;

  /**
   * Optional pre-fill claim (ISO date, e.g. 1990-05-15).
   */
  date_of_birth?: string | null;

  /**
   * Optional pre-fill claim.
   */
  first_name?: string | null;

  /**
   * Optional pre-fill claim.
   */
  last_name?: string | null;

  /**
   * Optional pre-fill claim.
   */
  phone?: string | null;

  /**
   * Force a fresh verification session, abandoning any session already in flight for
   * this slot. Defaults to false, which resumes the in-flight session if one exists
   * (avoiding duplicate Sumsub sessions).
   */
  restart?: boolean | null;
}

export interface IdentityProfileAttachParams {
  /**
   * The ID of the LedgerAccount to attach the identity profile to.
   */
  ledger_account_id: string;
}

export interface IdentityProfileUnlinkParams {
  /**
   * The ID of the LedgerAccount to unlink the identity profile from.
   */
  ledger_account_id: string;
}

export interface IdentityProfileListVerificationsParams extends CursorPageParams {
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

export declare namespace IdentityProfiles {
  export {
    type IdentityProfile as IdentityProfile,
    type IdentityProfileKind as IdentityProfileKind,
    type IdentityProfileStatus as IdentityProfileStatus,
    type IdentityProfileCreateResponse as IdentityProfileCreateResponse,
    type IdentityProfileListResponse as IdentityProfileListResponse,
    type IdentityProfileListVerificationsResponse as IdentityProfileListVerificationsResponse,
    type IdentityProfileListResponsesCursorPage as IdentityProfileListResponsesCursorPage,
    type IdentityProfileListVerificationsResponsesCursorPage as IdentityProfileListVerificationsResponsesCursorPage,
    type IdentityProfileListParams as IdentityProfileListParams,
    type IdentityProfileCreateParams as IdentityProfileCreateParams,
    type IdentityProfileAttachParams as IdentityProfileAttachParams,
    type IdentityProfileUnlinkParams as IdentityProfileUnlinkParams,
    type IdentityProfileListVerificationsParams as IdentityProfileListVerificationsParams,
  };
}
