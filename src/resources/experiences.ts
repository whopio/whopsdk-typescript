// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Experiences extends APIResource {
  /**
   * Required permissions:
   *
   * - `experience:create`
   *
   * @example
   * ```ts
   * const experience = await client.experiences.create({
   *   app_id: 'app_xxxxxxxxxxxxxx',
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: ExperienceCreateParams, options?: RequestOptions): APIPromise<Shared.Experience> {
    return this._client.post('/experiences', { body, ...options });
  }

  /**
   * Retrieves an experience by ID
   *
   * @example
   * ```ts
   * const experience = await client.experiences.retrieve(
   *   'exp_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Experience> {
    return this._client.get(path`/experiences/${id}`, options);
  }

  /**
   * Required permissions:
   *
   * - `experience:update`
   *
   * @example
   * ```ts
   * const experience = await client.experiences.update(
   *   'exp_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: ExperienceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Experience> {
    return this._client.patch(path`/experiences/${id}`, { body, ...options });
  }

  /**
   * Lists experiences for a company
   *
   * Required permissions:
   *
   * - `experience:hidden_experience:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const experienceListResponse of client.experiences.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExperienceListParams,
    options?: RequestOptions,
  ): PagePromise<ExperienceListResponsesCursorPage, ExperienceListResponse> {
    return this._client.getAPIList('/experiences', CursorPage<ExperienceListResponse>, { query, ...options });
  }

  /**
   * Required permissions:
   *
   * - `experience:delete`
   *
   * @example
   * ```ts
   * const experience = await client.experiences.delete(
   *   'exp_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ExperienceDeleteResponse> {
    return this._client.delete(path`/experiences/${id}`, options);
  }

  /**
   * Adds an experience to an product, making it accessible to the product's
   * customers.
   *
   * Required permissions:
   *
   * - `experience:attach`
   *
   * @example
   * ```ts
   * const experience = await client.experiences.attach(
   *   'exp_xxxxxxxxxxxxxx',
   *   { product_id: 'prod_xxxxxxxxxxxxx' },
   * );
   * ```
   */
  attach(id: string, body: ExperienceAttachParams, options?: RequestOptions): APIPromise<Shared.Experience> {
    return this._client.post(path`/experiences/${id}/attach`, { body, ...options });
  }

  /**
   * Removes an experience from an product, making it inaccessible to the product's
   * customers.
   *
   * Required permissions:
   *
   * - `experience:detach`
   *
   * @example
   * ```ts
   * const experience = await client.experiences.detach(
   *   'exp_xxxxxxxxxxxxxx',
   *   { product_id: 'prod_xxxxxxxxxxxxx' },
   * );
   * ```
   */
  detach(id: string, body: ExperienceDetachParams, options?: RequestOptions): APIPromise<Shared.Experience> {
    return this._client.post(path`/experiences/${id}/detach`, { body, ...options });
  }
}

export type ExperienceListResponsesCursorPage = CursorPage<ExperienceListResponse>;

/**
 * An object representing an experience belonging to a company.
 */
export interface ExperienceListResponse {
  /**
   * The unique ID representing this experience
   */
  id: string;

  /**
   * The experience interface for this experience.
   */
  app: ExperienceListResponse.App;

  /**
   * The company that owns this experience.
   */
  company: ExperienceListResponse.Company;

  /**
   * The timestamp of when this experience was created.
   */
  created_at: number;

  /**
   * The written name of the description.
   */
  name: string;

  /**
   * The order of the experience in the section
   */
  order: string | null;
}

export namespace ExperienceListResponse {
  /**
   * The experience interface for this experience.
   */
  export interface App {
    /**
     * The ID of the app
     */
    id: string;

    /**
     * The name of the app
     */
    name: string;
  }

  /**
   * The company that owns this experience.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The title of the company.
     */
    title: string;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type ExperienceDeleteResponse = boolean;

export interface ExperienceCreateParams {
  /**
   * The ID of the app to create the experience for
   */
  app_id: string;

  /**
   * The ID of the company to create the experience for
   */
  company_id: string;

  /**
   * The name of the experience
   */
  name?: string | null;

  /**
   * The ID of the section to create the experience in
   */
  section_id?: string | null;
}

export interface ExperienceUpdateParams {
  /**
   * The different access levels for experiences (PUBLIC IS NEVER USED ANYMORE).
   */
  access_level?: 'public' | 'private' | null;

  /**
   * The logo for the experience
   */
  logo?: ExperienceUpdateParams.Logo | null;

  /**
   * The name of the experience.
   */
  name?: string | null;

  /**
   * The order of the experience in the section.
   */
  order?: string | null;

  /**
   * The ID of the section to update.
   */
  section_id?: string | null;
}

export namespace ExperienceUpdateParams {
  /**
   * The logo for the experience
   */
  export interface Logo {
    /**
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
  }
}

export interface ExperienceListParams extends CursorPageParams {
  /**
   * The ID of the company to filter experiences by
   */
  company_id: string;

  /**
   * The ID of the app to filter experiences by
   */
  app_id?: string | null;

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

  /**
   * The ID of the product to filter experiences by
   */
  product_id?: string | null;
}

export interface ExperienceAttachParams {
  /**
   * The ID of the Access Pass to add the Experience to.
   */
  product_id: string;
}

export interface ExperienceDetachParams {
  /**
   * The ID of the Access Pass to add the Experience to.
   */
  product_id: string;
}

export declare namespace Experiences {
  export {
    type ExperienceListResponse as ExperienceListResponse,
    type ExperienceDeleteResponse as ExperienceDeleteResponse,
    type ExperienceListResponsesCursorPage as ExperienceListResponsesCursorPage,
    type ExperienceCreateParams as ExperienceCreateParams,
    type ExperienceUpdateParams as ExperienceUpdateParams,
    type ExperienceListParams as ExperienceListParams,
    type ExperienceAttachParams as ExperienceAttachParams,
    type ExperienceDetachParams as ExperienceDetachParams,
  };
}
