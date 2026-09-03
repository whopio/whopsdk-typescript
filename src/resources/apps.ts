// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An App is software you build on Whop. It can be a hosted web app served at `<route>.whop.site` or an API integration installed as an experience, and it belongs to the account that owns its credentials, settings, builds, and runtime logs.
 *
 * Use the Apps API to manage app configuration, deploy an app's working copy and follow the run on the app's `deployment` field, and, for hosted apps, read server runtime logs for console output, uncaught exceptions, and failed requests. Logs are retained for 7 days and can be filtered by build, level, time window, and message text.
 *
 * Apps are also reusable blueprints. List official blueprints with `app_type=website&verified=true&order=template_usage`, or community blueprints with `app_type=website&verified=false&recommended=true&order=template_usage`. Pass the returned App `id` as `blueprint_id` when creating an Account.
 */
export class Apps extends APIResource {
  /**
   * Registers a new app on the Whop developer platform. Apps provide custom
   * experiences that can be added to products.
   *
   * @example
   * ```ts
   * const app = await client.apps.create({
   *   name: 'Shine Time Booking',
   * });
   * ```
   */
  create(params: AppCreateParams, options?: RequestOptions): APIPromise<Shared.App> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/apps', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves an app by ID, claimed route, or proxy domain id. Credential fields
   * (api_key, default_api_key, secrets) render `null` unless the caller has the
   * corresponding developer permission on the owning account.
   *
   * @example
   * ```ts
   * const app = await client.apps.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: AppRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.App> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/apps/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates the settings, metadata, or status of an app. Fields that are omitted
   * keep their current value.
   *
   * @example
   * ```ts
   * const app = await client.apps.update('id');
   * ```
   */
  update(id: string, params: AppUpdateParams, options?: RequestOptions): APIPromise<Shared.App> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/apps/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists apps on the Whop platform: the app store's live apps, or — with
   * `account_id` and developer access to that account — every app the account owns.
   * Requires authentication except for Whop's public app and website discovery
   * lists. Public website discovery includes built official blueprints (verified
   * apps with a product) and built, live community blueprints that Whop recommends.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const appListResponse of client.apps.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AppListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AppListResponsesCursorPage, AppListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/apps', CursorPage<AppListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type AppListResponsesCursorPage = CursorPage<AppListResponse>;

/**
 * The type of end-user an app is built for
 */
export type AppType = 'b2b_app' | 'b2c_app' | 'company_app' | 'component' | 'website';

export interface AppListResponse {
  /**
   * App ID, prefixed `app_`.
   */
  id: string;

  /**
   * The account that owns the app.
   */
  account: AppListResponse.Account;

  /**
   * The type of end-user the app is built for.
   */
  app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component' | 'website';

  /**
   * Banner image from the app's product listing, or `null` when none is uploaded.
   */
  banner_image: AppListResponse.BannerImage | null;

  /**
   * The production base URL where the app is hosted. `null` if no base URL is
   * configured, if the caller lacks the `developer:basic:read` permission on the
   * app's account, or on list responses, which never expose it.
   */
  base_url: string | null;

  /**
   * Number of businesses created from this app as a template.
   */
  businesses_created_count: number;

  businesses_created_logo_urls: Array<string>;

  /**
   * The user who owns the publishing account.
   */
  creator: AppListResponse.Creator;

  /**
   * URL path for the account dashboard view, or `null` when not configured.
   */
  dashboard_path: string | null;

  /**
   * Short description shown in listings and search results, or `null` if none has
   * been set.
   */
  description: string | null;

  /**
   * URL path for the discover view, or `null` when not configured.
   */
  discover_path: string | null;

  /**
   * Subdomain identifier for the app's proxied URL, forming
   * https://{domain_id}.apps.whop.com.
   */
  domain_id: string;

  /**
   * URL path for the member-facing hub view, or `null` when not configured.
   */
  experience_path: string | null;

  /**
   * Full URL where the app's hosted web build is served, or `null` if no route is
   * claimed.
   */
  hosted_url: string | null;

  /**
   * The app's icon. Falls back to the default app icon when none is uploaded.
   */
  icon: AppListResponse.Icon;

  /**
   * Display name shown on the app store and in experience navigation.
   */
  name: string;

  /**
   * URL path to the app's OpenAPI spec file, or `null` when not configured.
   */
  openapi_path: string | null;

  /**
   * Full origin URL of the app's proxied domain, for example
   * https://ab1c2d3e4f.apps.whop.com.
   */
  origin: string | null;

  previous_hosted_urls: Array<string>;

  /**
   * Claimed subdomain route where hosted web builds are served (`myapp` for
   * myapp.whop.site), or `null` if no route is claimed.
   */
  route: string | null;

  /**
   * URL path to the app's skills directory, or `null` when not configured.
   */
  skills_path: string | null;

  /**
   * Visibility on the Whop app store: `live` is publicly discoverable, `unlisted` is
   * accessible only via direct link, `hidden` is not visible anywhere.
   */
  status: 'live' | 'unlisted' | 'hidden';

  /**
   * Whether the app has been verified by Whop and is eligible for the featured apps
   * section.
   */
  verified: boolean;
}

export namespace AppListResponse {
  /**
   * The account that owns the app.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account logo image URL.
     */
    logo_url: string | null;

    /**
     * Account public route identifier.
     */
    route: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Banner image from the app's product listing, or `null` when none is uploaded.
   */
  export interface BannerImage {
    /**
     * Banner image URL, taken from the app's product listing.
     */
    url: string;
  }

  /**
   * The user who owns the publishing account.
   */
  export interface Creator {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Public username.
     */
    username: string;
  }

  /**
   * The app's icon. Falls back to the default app icon when none is uploaded.
   */
  export interface Icon {
    /**
     * Icon image URL. Always present — the default app icon when none is uploaded.
     */
    url: string;
  }
}

export interface AppCreateParams {
  /**
   * Body param: The display name for the app, shown to users on the app store and
   * product pages.
   */
  name: string;

  /**
   * Body param: The account to create the app for (`biz_` tag). Defaults to the
   * account behind the presented credential.
   */
  account_id?: string;

  /**
   * Body param: The type of app to create. Defaults to `b2c_app`.
   */
  app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component' | 'website';

  /**
   * Body param: The base production URL where the app is hosted, such as
   * `https://myapp.example.com`.
   */
  base_url?: string | null;

  /**
   * Body param: The icon image for the app in PNG, JPEG, or GIF format, referencing
   * an uploaded file: `{ id }` for an existing attachment or `{ direct_upload_id }`
   * for a new direct upload.
   */
  icon?: AppCreateParams.Icon;

  /**
   * Body param: The whitelisted OAuth callback URLs that users are redirected to
   * after authorizing the app.
   */
  redirect_uris?: Array<string>;

  /**
   * Body param: The subdomain route where the app's hosted web builds are served,
   * such as `myapp` for myapp.whop.site.
   */
  route?: string | null;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AppCreateParams {
  /**
   * The icon image for the app in PNG, JPEG, or GIF format, referencing an uploaded
   * file: `{ id }` for an existing attachment or `{ direct_upload_id }` for a new
   * direct upload.
   */
  export interface Icon {
    /**
     * The tag of an already-uploaded attachment.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }
}

export interface AppRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface AppUpdateParams {
  /**
   * Body param: The detailed description shown on the app store's in-depth app view
   * page.
   */
  app_store_description?: string;

  /**
   * Body param: The type of end-user the app is built for. Cannot be changed on an
   * app whose type is already `website`.
   */
  app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component' | 'website';

  /**
   * Body param: The base production URL where the app is hosted. Set to `null` to
   * take the app proxy offline.
   */
  base_url?: string | null;

  /**
   * Body param: The URL path for the account dashboard view.
   */
  dashboard_path?: string | null;

  /**
   * Body param: A short description of the app shown in listings and search results.
   */
  description?: string;

  /**
   * Body param: The URL path for the discover view.
   */
  discover_path?: string | null;

  /**
   * Body param: The URL path for the member-facing hub view, such as
   * `/experiences/[experienceId]`.
   */
  experience_path?: string | null;

  /**
   * Body param: The icon image for the app in PNG, JPEG, or GIF format, referencing
   * an uploaded file: `{ id }` for an existing attachment or `{ direct_upload_id }`
   * for a new direct upload.
   */
  icon?: AppUpdateParams.Icon;

  /**
   * Body param: The display name for the app, shown to users on the app store and
   * product pages.
   */
  name?: string;

  /**
   * Body param: How the app authenticates at the OAuth token endpoint.
   */
  oauth_client_type?: 'public' | 'confidential';

  /**
   * Body param: The URL path to the app's OpenAPI spec file (requires the ai_chat
   * capability).
   */
  openapi_path?: string | null;

  /**
   * Body param: The app build (`abld_` tag) to serve as the Android production
   * build, or `null` to unassign it. Same rules as `production_web_build_id`.
   */
  production_android_build_id?: string | null;

  /**
   * Body param: The app build (`abld_` tag) to serve as the iOS production build, or
   * `null` to unassign it. Same rules as `production_web_build_id`.
   */
  production_ios_build_id?: string | null;

  /**
   * Body param: The app build (`abld_` tag) to serve as the web production build, or
   * `null` to unassign it. The build must belong to this app, target web, and be in
   * the draft or approved status; a draft build is queued for approval and takes
   * over once approved. Requires the `developer:manage_builds` scope.
   */
  production_web_build_id?: string | null;

  /**
   * Body param: The whitelisted OAuth callback URLs users are redirected to after
   * authorizing the app.
   */
  redirect_uris?: Array<string>;

  /**
   * Body param: The OAuth scopes the app requests from users when they install it.
   */
  required_scopes?: Array<string>;

  /**
   * Body param: The subdomain route where the app's hosted web builds are served.
   */
  route?: string;

  /**
   * Body param: Secrets to add or overwrite on the app, as an object of string
   * values. Keys not included are left untouched; pass null or an empty string as
   * the value to delete a secret. Encrypted at rest and injected into the app's
   * hosted server runtime.
   */
  secrets?: unknown;

  /**
   * Body param: The URL path to the app's skills directory (requires the ai_chat
   * capability).
   */
  skills_path?: string | null;

  /**
   * Body param: Controls whether the app is published on Whop discovery or
   * accessible only through its direct link. Publishing requires a name, icon, and
   * description.
   */
  status?: 'live' | 'unlisted' | 'hidden';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export namespace AppUpdateParams {
  /**
   * The icon image for the app in PNG, JPEG, or GIF format, referencing an uploaded
   * file: `{ id }` for an existing attachment or `{ direct_upload_id }` for a new
   * direct upload.
   */
  export interface Icon {
    /**
     * The tag of an already-uploaded attachment.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }
}

export interface AppListParams extends CursorPageParams {
  /**
   * Query param: Only return apps created by this account (`biz_` tag). With
   * developer access to the account this includes its unlisted and hidden apps.
   */
  account_id?: string;

  /**
   * Query param: Filter apps by the type of end-user they are built for. Apps of
   * type `website` are left out unless you ask for them by name.
   */
  app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component' | 'website';

  /**
   * Query param: A cursor; returns apps before this position.
   */
  before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of apps to return (default 20, max 100).
   */
  first?: number;

  /**
   * Query param: The number of apps to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort apps by. Defaults to discoverable_at, showing the
   * most recently published apps first. `template_usage` ranks Whop-verified apps
   * first, then by how many businesses created apps from each app as a template.
   */
  order?:
    | 'created_at'
    | 'discoverable_at'
    | 'template_usage'
    | 'total_installs_last_30_days'
    | 'total_installs_last_7_days';

  /**
   * Query param: A search string matched against app names.
   */
  query?: string;

  /**
   * Query param: Only return apps Whop recommends (or, with `false`, only those it
   * does not), independently of verification status.
   */
  recommended?: boolean;

  /**
   * Query param: Only return apps whose Whop verification status matches this value.
   * Omit this filter to include every verification status the caller can see.
   */
  verified?: boolean;

  /**
   * Query param: Legacy compatibility filter. Use `verified` for field equality.
   * `true` returns verified apps; clients pinned before `2026-08-25-2` retain the
   * earlier public website discovery behavior.
   */
  verified_apps_only?: boolean;

  /**
   * Query param: Only return apps supporting this view type, such as `dashboard` or
   * `hub`.
   */
  view_type?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Apps {
  export {
    type AppType as AppType,
    type AppListResponse as AppListResponse,
    type AppListResponsesCursorPage as AppListResponsesCursorPage,
    type AppCreateParams as AppCreateParams,
    type AppRetrieveParams as AppRetrieveParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
  };
}
