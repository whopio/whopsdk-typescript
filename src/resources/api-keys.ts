// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An API Key is a programmatic credential owned by an account or app. Each key carries its own permissions policy — explicit permission statements or an inherited system role — and can be restricted with an expiration date and an IP allowlist.
 *
 * Use the API Keys API to list a company or app's keys, create a key (the full secret is returned once, on creation), inspect a key's effective grants, update its name or restrictions, rotate its secret, and revoke it. These endpoints require a user session — they cannot be called with an API key.
 */
export class APIKeys extends APIResource {
  /**
   * Lists the API keys of a company or app, newest first. Responses never include
   * the full secret — only its obfuscated form.
   */
  list(query: APIKeyListParams, options?: RequestOptions): PagePromise<APIKeysCursorPage, APIKey> {
    return this._client.getAPIList('/api_keys', CursorPage<APIKey>, { query, ...options });
  }

  /**
   * Creates an API key for a company or app. The response is the only place the full
   * `secret_key` is returned — store it immediately. Requires a user session; API
   * keys cannot manage API keys.
   */
  create(params: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/api_keys', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves an API key with its effective permission grants. The full secret is
   * never returned — rotate the key if it was lost.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.get(path`/api_keys/${id}`, options);
  }

  /**
   * Updates an API key's name, permissions, expiration, or IP allowlist. Fields that
   * are omitted keep their current value; default keys cannot be modified.
   */
  update(id: string, body: APIKeyUpdateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.patch(path`/api_keys/${id}`, { body, ...options });
  }

  /**
   * Permanently revokes an API key; requests using its secret stop authenticating
   * immediately. Default and agent-backend keys cannot be deleted.
   */
  delete(id: string, options?: RequestOptions): APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(path`/api_keys/${id}`, options);
  }

  /**
   * Rotates the API key's secret, invalidating the previous secret immediately. The
   * response is the only place the new `secret_key` is returned.
   */
  rotate(
    id: string,
    params: APIKeyRotateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKey> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/api_keys/${id}/rotate`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the catalog of permission actions that can be granted to users, apps, and
   * API keys — the source for the dashboard's permission pickers. Small and returned
   * in full on one page.
   */
  listPermissions(options?: RequestOptions): APIPromise<APIKeyListPermissionsResponse> {
    return this._client.get('/api_keys/permissions', options);
  }
}

export type APIKeysCursorPage = CursorPage<APIKey>;

export interface APIKey {
  /**
   * API key ID, prefixed `apik_`.
   */
  id: string;

  /**
   * When the API key was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * When the API key stops working, as an ISO 8601 timestamp. `null` means it never
   * expires.
   */
  expires_at: string | null;

  ip_allowlist: Array<string> | null;

  /**
   * Whether this is the resource's default API key. Default keys cannot be updated
   * or deleted, only rotated.
   */
  is_default_for_resource: boolean;

  /**
   * Human-readable name identifying the API key, or `null` when none was set.
   */
  name: string | null;

  /**
   * Masked version of the secret key, so the key can be recognized without revealing
   * the full secret.
   */
  obfuscated_secret_key: string;

  /**
   * System role the key inherits its permissions from, or `null` when it uses an
   * explicit permissions policy. Only account API keys can use a system role.
   */
  system_role: 'owner' | 'admin' | 'moderator' | 'sales_manager' | 'advertiser' | null;

  /**
   * When the API key was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  grants?: Array<APIKey.Grant>;

  /**
   * The full secret used to authenticate requests. Returned only once, on create and
   * rotate responses — store it immediately.
   */
  secret_key?: string;
}

export namespace APIKey {
  /**
   * The key's effective permissions, grouped by resource. Present on retrieve,
   * create, update, and rotate responses; omitted on list.
   */
  export interface Grant {
    actions: Array<Grant.Action>;

    /**
     * ID of the resource the actions apply to.
     */
    resource_id: string;

    /**
     * The type of resource the actions apply to, such as `account`, `product`, or
     * `app`.
     */
    resource_type: string;
  }

  export namespace Grant {
    /**
     * The actions the grant covers on the resource, each marked granted or not.
     */
    export interface Action {
      /**
       * The permission action's identifier, for example `company:basic:read`.
       */
      action: string;

      /**
       * Whether the key holds the action on the grant's resource.
       */
      granted: boolean;
    }
  }
}

export interface Permission {
  /**
   * The permission action's identifier, for example `company:basic:read`.
   */
  action: string;

  /**
   * Whether an API key can be granted the permission.
   */
  allowed_on_api_key: boolean;

  /**
   * Whether an app can request and be granted the permission.
   */
  allowed_on_app: boolean;

  /**
   * Whether the permission can be granted to user tokens.
   */
  allowed_on_user: boolean;

  /**
   * The category the action is grouped under, or `null` when uncategorized.
   */
  category: string | null;

  /**
   * What granting the action allows.
   */
  description: string;

  granted_to_system_roles: Array<'owner' | 'admin' | 'moderator' | 'sales_manager' | 'advertiser'>;

  /**
   * Human-readable name of the action.
   */
  name: string;
}

export interface APIKeyDeleteResponse {
  /**
   * The ID of the revoked key.
   */
  id: string;

  /**
   * Always `true`: the key was revoked.
   */
  deleted: boolean;
}

export interface APIKeyListPermissionsResponse {
  data: Array<Permission>;

  page_info: APIKeyListPermissionsResponse.PageInfo;
}

export namespace APIKeyListPermissionsResponse {
  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface APIKeyListParams extends CursorPageParams {
  /**
   * The company (`biz_`) or app (`app_`) tag to list API keys for.
   */
  resource_id: string;

  /**
   * The type of resource that owns the API keys.
   */
  resource_type: 'account' | 'app';

  /**
   * A cursor; returns API keys before this position.
   */
  before?: string;

  /**
   * Only return API keys created after this ISO 8601 timestamp.
   */
  created_after?: number | string;

  /**
   * Only return API keys created before this ISO 8601 timestamp.
   */
  created_before?: number | string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of API keys to return (default 20, max 100).
   */
  first?: number;

  /**
   * The number of API keys to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort API keys by.
   */
  order?: 'created_at';
}

export interface APIKeyCreateParams {
  /**
   * Body param: A human-readable name for the API key, such as 'Production API Key'.
   */
  name: string;

  /**
   * Body param: The permissions policy for the API key: explicit permission
   * statements, or a system role to inherit from. Statements without a `resources`
   * array default to the owning company (company keys) or every key-addressable
   * resource (app keys).
   */
  permissions: APIKeyCreateParams.Permissions;

  /**
   * Body param: The company (`biz_`) or app (`app_`) tag to create the API key for.
   */
  resource_id: string;

  /**
   * Body param: The type of resource that will own this API key.
   */
  resource_type: 'account' | 'app';

  /**
   * Body param: When the API key should stop working, as an ISO 8601 timestamp. Omit
   * (or pass `null` on update) for a key that never expires.
   */
  expires_at?: string | null;

  /**
   * Body param: IPv4/IPv6 CIDR ranges allowed to use this key, for example
   * `["203.0.113.0/24"]`. Empty or `null` allows any IP.
   */
  ip_allowlist?: Array<string> | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace APIKeyCreateParams {
  /**
   * The permissions policy for the API key: explicit permission statements, or a
   * system role to inherit from. Statements without a `resources` array default to
   * the owning company (company keys) or every key-addressable resource (app keys).
   */
  export interface Permissions {
    /**
     * Explicit permission statements. Required unless `system_role` is set.
     */
    statements?: Array<Permissions.Statement>;

    /**
     * A system role to inherit permissions from. Only company API keys can use a
     * system role.
     */
    system_role?: 'owner' | 'admin' | 'moderator' | 'sales_manager' | 'advertiser' | null;
  }

  export namespace Permissions {
    export interface Statement {
      /**
       * Permission actions covered by this statement, for example `company:basic:read`.
       */
      actions: Array<string>;

      /**
       * Whether the actions are granted (`true`) or denied (`false`).
       */
      grant: boolean;

      /**
       * Resource identifiers the statement applies to, for example `biz_xxx` or
       * `biz_xxx|pass_*`. Defaults to the key's owning resource when omitted.
       */
      resources?: Array<string>;
    }
  }
}

export interface APIKeyUpdateParams {
  /**
   * When the API key should stop working, as an ISO 8601 timestamp. Omit (or pass
   * `null` on update) for a key that never expires.
   */
  expires_at?: string | null;

  /**
   * IPv4/IPv6 CIDR ranges allowed to use this key, for example `["203.0.113.0/24"]`.
   * Empty or `null` allows any IP.
   */
  ip_allowlist?: Array<string> | null;

  /**
   * A new human-readable name for the API key.
   */
  name?: string | null;

  /**
   * The permissions policy for the API key: explicit permission statements, or a
   * system role to inherit from. Statements without a `resources` array default to
   * the owning company (company keys) or every key-addressable resource (app keys).
   */
  permissions?: APIKeyUpdateParams.Permissions;
}

export namespace APIKeyUpdateParams {
  /**
   * The permissions policy for the API key: explicit permission statements, or a
   * system role to inherit from. Statements without a `resources` array default to
   * the owning company (company keys) or every key-addressable resource (app keys).
   */
  export interface Permissions {
    /**
     * Explicit permission statements. Required unless `system_role` is set.
     */
    statements?: Array<Permissions.Statement>;

    /**
     * A system role to inherit permissions from. Only company API keys can use a
     * system role.
     */
    system_role?: 'owner' | 'admin' | 'moderator' | 'sales_manager' | 'advertiser' | null;
  }

  export namespace Permissions {
    export interface Statement {
      /**
       * Permission actions covered by this statement, for example `company:basic:read`.
       */
      actions: Array<string>;

      /**
       * Whether the actions are granted (`true`) or denied (`false`).
       */
      grant: boolean;

      /**
       * Resource identifiers the statement applies to, for example `biz_xxx` or
       * `biz_xxx|pass_*`. Defaults to the key's owning resource when omitted.
       */
      resources?: Array<string>;
    }
  }
}

export interface APIKeyRotateParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type Permission as Permission,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyListPermissionsResponse as APIKeyListPermissionsResponse,
    type APIKeysCursorPage as APIKeysCursorPage,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyRotateParams as APIKeyRotateParams,
  };
}
