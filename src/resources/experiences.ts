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

  /**
   * Duplicates an existing experience. The name will be copied, unless provided. The
   * new experience will be attached to the same products as the original experience.
   * If duplicating a Forum or Chat experience, the new experience will have the same
   * settings as the original experience, e.g. who can post, who can comment, etc. No
   * content, e.g. posts, messages, lessons from within the original experience will
   * be copied.
   *
   * Required permissions:
   *
   * - `experience:create`
   *
   * @example
   * ```ts
   * const experience = await client.experiences.duplicate(
   *   'exp_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  duplicate(
    id: string,
    body: ExperienceDuplicateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Experience> {
    return this._client.post(path`/experiences/${id}/duplicate`, { body, ...options });
  }
}

export type ExperienceListResponsesCursorPage = CursorPage<ExperienceListResponse>;

/**
 * An experience is a feature or content module within a product, such as a chat,
 * course, or app.
 */
export interface ExperienceListResponse {
  /**
   * The unique identifier for the experience.
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
   * The datetime the experience was created.
   */
  created_at: string;

  /**
   * The logo for the experience.
   */
  image: ExperienceListResponse.Image | null;

  /**
   * Whether the experience is visible to the public
   */
  is_public: boolean;

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
     * The unique identifier for the app.
     */
    id: string;

    /**
     * The icon for the app. This icon is shown on discovery, on the product page, on
     * checkout, and as a default icon for the experiences.
     */
    icon: App.Icon | null;

    /**
     * The name of the app
     */
    name: string;
  }

  export namespace App {
    /**
     * The icon for the app. This icon is shown on discovery, on the product page, on
     * checkout, and as a default icon for the experiences.
     */
    export interface Icon {
      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
       */
      url: string | null;
    }
  }

  /**
   * The company that owns this experience.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
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

  /**
   * The logo for the experience.
   */
  export interface Image {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
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
   * Whether the experience is publicly accessible
   */
  is_public?: boolean | null;

  /**
   * The logo for the experience
   */
  logo?: ExperienceCreateParams.Logo | null;

  /**
   * The name of the experience
   */
  name?: string | null;

  /**
   * The ID of the section to create the experience in
   */
  section_id?: string | null;
}

export namespace ExperienceCreateParams {
  /**
   * The logo for the experience
   */
  export interface Logo {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface ExperienceUpdateParams {
  /**
   * The different access levels for experiences (PUBLIC IS NEVER USED ANYMORE).
   */
  access_level?: 'public' | 'private' | null;

  /**
   * Whether the experience is publicly accessible.
   */
  is_public?: boolean | null;

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
     * The ID of an existing file object.
     */
    id: string;
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
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

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

export interface ExperienceDuplicateParams {
  /**
   * The name of the new experience
   */
  name?: string | null;
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
    type ExperienceDuplicateParams as ExperienceDuplicateParams,
  };
}
