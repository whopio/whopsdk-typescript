// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Experiences
 */
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
   * Retrieves the details of an existing experience.
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
   * Returns a paginated list of experiences belonging to a company, with optional
   * filtering by product and app.
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
   * Attach an experience to a product, making it accessible to the product's
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
   * Detach an experience from a product, removing customer access to it through that
   * product.
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
 * course, or custom app.
 */
export interface ExperienceListResponse {
  /**
   * The unique identifier for the experience.
   */
  id: string;

  /**
   * The app that powers this experience, defining its interface and behavior.
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
   * The custom logo image for this experience. Null if no custom logo has been
   * uploaded.
   */
  image: ExperienceListResponse.Image | null;

  /**
   * Whether this experience is publicly visible to all users, including those
   * without a membership.
   */
  is_public: boolean;

  /**
   * The display name of this experience shown to users in the product navigation.
   * Maximum 255 characters.
   */
  name: string;

  /**
   * The sort position of this experience within its section. Lower values appear
   * first. Null if no position has been set.
   */
  order: string | null;
}

export namespace ExperienceListResponse {
  /**
   * The app that powers this experience, defining its interface and behavior.
   */
  export interface App {
    /**
     * The unique identifier for the app.
     */
    id: string;

    /**
     * The icon image for this app, displayed on the app store, product pages,
     * checkout, and as the default icon for experiences using this app.
     */
    icon: App.Icon | null;

    /**
     * The display name of this app shown on the app store and in experience
     * navigation. Maximum 30 characters.
     */
    name: string;
  }

  export namespace App {
    /**
     * The icon image for this app, displayed on the app store, product pages,
     * checkout, and as the default icon for experiences using this app.
     */
    export interface Icon {
      /**
       * A pre-optimized URL for rendering this attachment on the client. This should be
       * used for displaying attachments in apps.
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
     * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
     */
    route: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The custom logo image for this experience. Null if no custom logo has been
   * uploaded.
   */
  export interface Image {
    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
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
   * The unique identifier of the app that powers this experience.
   */
  app_id: string;

  /**
   * The unique identifier of the company to create this experience for.
   */
  company_id: string;

  /**
   * Whether the experience is publicly accessible without a membership.
   */
  is_public?: boolean | null;

  /**
   * A logo image displayed alongside the experience name.
   */
  logo?: ExperienceCreateParams.Logo | null;

  /**
   * The display name of the experience. Defaults to the app's name if not provided.
   */
  name?: string | null;

  /**
   * The unique identifier of the section to place the experience in.
   */
  section_id?: string | null;
}

export namespace ExperienceCreateParams {
  /**
   * A logo image displayed alongside the experience name.
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
   * Whether the experience is publicly accessible without a membership.
   */
  is_public?: boolean | null;

  /**
   * A logo image displayed alongside the experience name.
   */
  logo?: ExperienceUpdateParams.Logo | null;

  /**
   * The display name of the experience.
   */
  name?: string | null;

  /**
   * The position of the experience within its section for display ordering.
   */
  order?: string | null;

  /**
   * The unique identifier of the section to move the experience into.
   */
  section_id?: string | null;
}

export namespace ExperienceUpdateParams {
  /**
   * A logo image displayed alongside the experience name.
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
   * The unique identifier of the company to list experiences for.
   */
  company_id: string;

  /**
   * Filter to only experiences powered by this app identifier.
   */
  app_id?: string | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return experiences created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return experiences created before this timestamp.
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
   * Filter to only experiences attached to this product identifier.
   */
  product_id?: string | null;
}

export interface ExperienceAttachParams {
  /**
   * The unique identifier of the product to attach the experience to.
   */
  product_id: string;
}

export interface ExperienceDetachParams {
  /**
   * The unique identifier of the product to detach the experience from.
   */
  product_id: string;
}

export interface ExperienceDuplicateParams {
  /**
   * The display name for the duplicated experience. Defaults to the original
   * experience's name.
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
