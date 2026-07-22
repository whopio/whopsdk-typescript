// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { AppBuildsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An App Build is a versioned artifact uploaded for an app — a hosted web archive, or an iOS/Android bundle. Builds start as drafts, go through review, and one approved build per platform is served to users as the production build.
 *
 * Use the App Builds API to upload a build for an app, list an app's builds with platform and status filters, retrieve a build, and promote a draft or approved build to production.
 */
export class AppBuilds extends APIResource {
  /**
   * Returns a paginated list of build artifacts for an app, newest first, with
   * optional platform, status, and creation-date filters.
   */
  list(
    query: AppBuildListParams,
    options?: RequestOptions,
  ): PagePromise<AppBuildsCursorPage, Shared.AppBuild> {
    return this._client.getAPIList('/app_builds', CursorPage<Shared.AppBuild>, { query, ...options });
  }

  /**
   * Uploads a new build artifact for an app. Upload the file first (POST /files or a
   * direct upload), then reference it here; iOS and Android take a .zip bundle, web
   * takes a JavaScript file or a .zip archive of the hosted site.
   */
  create(params: AppBuildCreateParams, options?: RequestOptions): APIPromise<Shared.AppBuild> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/app_builds', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the details of an existing app build.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.AppBuild> {
    return this._client.get(path`/app_builds/${id}`, options);
  }

  /**
   * Promotes a draft or approved app build to production so it becomes the active
   * version served to users. Draft builds enter review first.
   */
  promote(
    id: string,
    params: AppBuildPromoteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AppBuild> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/app_builds/${id}/promote`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface AppBuildListParams extends CursorPageParams {
  /**
   * The app to list builds for, prefixed `app_`.
   */
  app_id: string;

  /**
   * A cursor; returns builds before this position.
   */
  before?: string;

  /**
   * Only return builds created after this ISO 8601 timestamp.
   */
  created_after?: number | string;

  /**
   * Only return builds created before this ISO 8601 timestamp.
   */
  created_before?: number | string;

  /**
   * The number of builds to return (default 20, max 100).
   */
  first?: number;

  /**
   * The number of builds to return from the end of the range.
   */
  last?: number;

  /**
   * Filter builds by target platform.
   */
  platform?: 'ios' | 'android' | 'web';

  /**
   * Filter builds by review status.
   */
  status?: 'draft' | 'pending' | 'approved' | 'rejected';
}

export interface AppBuildCreateParams {
  /**
   * Body param: The uploaded build file: `{ id }` for an existing file or
   * `{ direct_upload_id }` for a completed direct upload.
   */
  attachment: AppBuildCreateParams.Attachment;

  /**
   * Body param: A client-generated checksum of the build file, used to verify file
   * integrity when unpacked.
   */
  checksum: string;

  /**
   * Body param: The target platform for the build.
   */
  platform: 'ios' | 'android' | 'web';

  /**
   * Body param: The AI prompt that generated this build, if applicable.
   */
  ai_prompt_id?: string;

  /**
   * Body param: The app to create the build for, prefixed `app_`. Defaults to the
   * app behind the presented credential.
   */
  app_id?: string;

  /**
   * Body param: An optional compressed archive (.zip or .gz) of the source code that
   * produced this build, stored alongside the build so it can be downloaded later.
   * Referenced like `attachment`, and must be a different file.
   */
  source_attachment?: AppBuildCreateParams.SourceAttachment;

  /**
   * Body param: The view types this build supports. Only list the ones its code
   * implements.
   */
  supported_app_view_types?: Array<
    'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'
  >;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AppBuildCreateParams {
  /**
   * The uploaded build file: `{ id }` for an existing file or `{ direct_upload_id }`
   * for a completed direct upload.
   */
  export interface Attachment {
    /**
     * The tag of an already-uploaded file.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }

  /**
   * An optional compressed archive (.zip or .gz) of the source code that produced
   * this build, stored alongside the build so it can be downloaded later. Referenced
   * like `attachment`, and must be a different file.
   */
  export interface SourceAttachment {
    /**
     * The tag of an already-uploaded file.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }
}

export interface AppBuildPromoteParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace AppBuilds {
  export {
    type AppBuildListParams as AppBuildListParams,
    type AppBuildCreateParams as AppBuildCreateParams,
    type AppBuildPromoteParams as AppBuildPromoteParams,
  };
}

export { type AppBuildsCursorPage };
