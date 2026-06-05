// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Verifications
 */
export class Verifications extends APIResource {
  /**
   * Retrieves a single verification by ID including its current status,
   * `session_url`, and any outstanding RFIs.
   */
  retrieve(verificationID: string, options?: RequestOptions): APIPromise<VerificationRetrieveResponse> {
    return this._client.get(path`/verifications/${verificationID}`, options);
  }

  /**
   * List all verifications for an account. Verifications can either be for a user or
   * business.
   */
  list(
    query: VerificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VerificationListResponse> {
    return this._client.get('/verifications', { query, ...options });
  }

  /**
   * Creates a verification session for an account. If a verification is already in
   * progress, existing session is returned. You can restart a verification by
   * setting the `restart` attribute.
   */
  create(body: VerificationCreateParams, options?: RequestOptions): APIPromise<VerificationCreateResponse> {
    return this._client.post('/verifications', { body, ...options });
  }

  /**
   * Updates an existing verification. Use profile fields to update verification
   * details, or provide `rfis` to answer outstanding requests for information.
   * Profile fields become immutable after the verification is approved.
   */
  update(
    verificationID: string,
    body: VerificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VerificationUpdateResponse> {
    return this._client.patch(path`/verifications/${verificationID}`, { body, ...options });
  }

  /**
   * Deletes a verification and unlinks it from every account it's attached to.
   */
  delete(verificationID: string, options?: RequestOptions): APIPromise<VerificationDeleteResponse> {
    return this._client.delete(path`/verifications/${verificationID}`, options);
  }
}

export interface VerificationCreateResponse {
  /**
   * The verification ID, e.g. idpf\_\*
   */
  id: string;

  created_at: string;

  kind: 'individual' | 'business';

  session_url: string | null;

  status: 'not_started' | 'pending' | 'approved' | 'rejected' | 'action_required';

  updated_at: string;

  address?: unknown | null;

  business_name?: string | null;

  business_structure?: string | null;

  country?: string | null;

  date_of_birth?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  rfis?: Array<VerificationCreateResponse.Rfi>;
}

export namespace VerificationCreateResponse {
  export interface Rfi {
    id?: string;

    created_at?: string;

    description?: string;

    error_message?: string | null;

    status?: 'outstanding' | 'invalid';

    type?: string | null;
  }
}

export interface VerificationRetrieveResponse {
  /**
   * The verification ID, e.g. idpf\_\*
   */
  id: string;

  created_at: string;

  kind: 'individual' | 'business';

  rfis: Array<VerificationRetrieveResponse.Rfi>;

  status: 'not_started' | 'pending' | 'approved' | 'rejected' | 'action_required';

  updated_at: string;

  address?: unknown | null;

  business_name?: string | null;

  business_structure?: string | null;

  country?: string | null;

  date_of_birth?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  session_url?: string | null;
}

export namespace VerificationRetrieveResponse {
  export interface Rfi {
    id?: string;

    created_at?: string;

    description?: string;

    error_message?: string | null;

    status?: 'outstanding' | 'invalid';

    type?: string | null;
  }
}

export interface VerificationUpdateResponse {
  /**
   * The verification ID, e.g. idpf\_\*
   */
  id: string;

  created_at: string;

  kind: 'individual' | 'business';

  rfis: Array<VerificationUpdateResponse.Rfi>;

  status: 'not_started' | 'pending' | 'approved' | 'rejected' | 'action_required';

  updated_at: string;

  address?: unknown | null;

  business_name?: string | null;

  business_structure?: string | null;

  country?: string | null;

  date_of_birth?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  session_url?: string | null;
}

export namespace VerificationUpdateResponse {
  export interface Rfi {
    id?: string;

    created_at?: string;

    description?: string;

    error_message?: string | null;

    status?: 'outstanding' | 'invalid';

    type?: string | null;
  }
}

export interface VerificationListResponse {
  data: Array<VerificationListResponse.Data>;

  pagination: VerificationListResponse.Pagination;
}

export namespace VerificationListResponse {
  export interface Data {
    /**
     * The verification ID, e.g. idpf\_\*
     */
    id: string;

    created_at: string;

    kind: 'individual' | 'business';

    rfis: Array<Data.Rfi>;

    status: 'not_started' | 'pending' | 'approved' | 'rejected' | 'action_required';

    updated_at: string;

    address?: unknown | null;

    business_name?: string | null;

    business_structure?: string | null;

    country?: string | null;

    date_of_birth?: string | null;

    first_name?: string | null;

    last_name?: string | null;

    session_url?: string | null;
  }

  export namespace Data {
    export interface Rfi {
      id?: string;

      created_at?: string;

      description?: string;

      error_message?: string | null;

      status?: 'outstanding' | 'invalid';

      type?: string | null;
    }
  }

  export interface Pagination {
    /**
     * Current page number
     */
    current_page: number;

    /**
     * Next page number
     */
    next_page: number | null;

    /**
     * Previous page number
     */
    prev_page: number | null;

    /**
     * Total number of records
     */
    total_count: number;

    /**
     * Total number of pages
     */
    total_pages: number;
  }
}

export interface VerificationDeleteResponse {
  /**
   * The verification ID, e.g. idpf\_\*
   */
  id: string;

  created_at: string;

  kind: 'individual' | 'business';

  rfis: Array<VerificationDeleteResponse.Rfi>;

  status: 'not_started' | 'pending' | 'approved' | 'rejected' | 'action_required';

  updated_at: string;

  address?: unknown | null;

  business_name?: string | null;

  business_structure?: string | null;

  country?: string | null;

  date_of_birth?: string | null;

  first_name?: string | null;

  last_name?: string | null;

  session_url?: string | null;
}

export namespace VerificationDeleteResponse {
  export interface Rfi {
    id?: string;

    created_at?: string;

    description?: string;

    error_message?: string | null;

    status?: 'outstanding' | 'invalid';

    type?: string | null;
  }
}

export interface VerificationListParams {
  /**
   * Filter verifications to a specific account.
   */
  account_id?: string;

  /**
   * The page number to retrieve.
   */
  page?: number;

  /**
   * The number of resources to return per page.
   */
  per?: number;

  /**
   * Filter by profile type.
   */
  profile_type?: 'individual' | 'business';

  /**
   * Filter by derived verification status.
   */
  status?: 'not_started' | 'pending' | 'approved' | 'rejected';
}

export interface VerificationCreateParams {
  /**
   * The account ID to verify.
   */
  account_id: string;

  /**
   * Pre-fill address (line1, city, state, postal_code).
   */
  address?: { [key: string]: unknown };

  /**
   * Pre-fill the country.
   */
  country?: string;

  /**
   * Pre-fill the date of birth.
   */
  date_of_birth?: string;

  /**
   * Pre-fill the first name.
   */
  first_name?: string;

  /**
   * The verification type. Defaults to individual.
   */
  kind?: 'individual' | 'business';

  /**
   * Pre-fill the last name.
   */
  last_name?: string;

  /**
   * Pre-fill the phone number.
   */
  phone?: string;

  /**
   * Whether to restart an in-flight verification.
   */
  restart?: boolean;
}

export interface VerificationUpdateParams {
  /**
   * The business address.
   */
  business_address?: { [key: string]: unknown };

  /**
   * The business name.
   */
  business_name?: string;

  /**
   * The business structure.
   */
  business_structure?: string;

  /**
   * The country code.
   */
  country?: string;

  /**
   * The date of birth.
   */
  date_of_birth?: string;

  /**
   * The first name on the verification.
   */
  first_name?: string;

  /**
   * The last name on the verification.
   */
  last_name?: string;

  /**
   * The personal address.
   */
  personal_address?: { [key: string]: unknown };

  /**
   * RFI responses. Each entry must include id and a value, address, or files
   * payload.
   */
  rfis?: Array<VerificationUpdateParams.Rfi>;
}

export namespace VerificationUpdateParams {
  export interface Rfi {
    /**
     * The RFI tag (paa\_\*).
     */
    id: string;

    /**
     * Address payload for address RFIs.
     */
    address?: { [key: string]: unknown };

    /**
     * File upload payload for document RFIs.
     */
    files?: Array<unknown>;

    /**
     * The value for text/date/phone RFIs.
     */
    value?: string;

    /**
     * Defaults to raw.
     */
    value_type?: 'raw' | 'vault_token';
  }
}

export declare namespace Verifications {
  export {
    type VerificationCreateResponse as VerificationCreateResponse,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
    type VerificationUpdateResponse as VerificationUpdateResponse,
    type VerificationListResponse as VerificationListResponse,
    type VerificationDeleteResponse as VerificationDeleteResponse,
    type VerificationListParams as VerificationListParams,
    type VerificationCreateParams as VerificationCreateParams,
    type VerificationUpdateParams as VerificationUpdateParams,
  };
}
