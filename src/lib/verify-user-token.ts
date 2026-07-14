import { createRemoteJWKSet, importJWK, jwtVerify } from 'jose';
import type { Whop } from '../client';

const USER_TOKEN_HEADER_NAME = 'x-whop-user-token';
const DEFAULT_JWKS_URL = 'https://api.whop.com/.well-known/jwks.json';

// Module-level cache: one RemoteJWKSet per URL. jose's remote set handles
// HTTP caching (respecting the endpoint's Cache-Control), a cooldown to
// prevent tight-loop refetches on unknown kids, and thread-safe in-flight
// deduplication. Reusing the same instance across calls is what makes the
// verify path effectively free after the first lookup.
const jwksCache = new Map<string, ReturnType<typeof createRemoteJWKSet>>();

function getRemoteJwks(url: string): ReturnType<typeof createRemoteJWKSet> {
  let existing = jwksCache.get(url);
  if (existing) return existing;
  existing = createRemoteJWKSet(new URL(url), {
    cacheMaxAge: 12 * 60 * 60 * 1000,
    cooldownDuration: 30_000,
  });
  jwksCache.set(url, existing);
  return existing;
}

export interface GetUserTokenOptions {
  headerName?: string | null | undefined;
}

type GetUserTokenInput = string | Headers | Request | null | undefined;

export function getUserToken(token: string, options?: GetUserTokenOptions): string;
export function getUserToken(
  tokenOrHeadersOrRequest: GetUserTokenInput,
  options?: GetUserTokenOptions,
): string | null;
export function getUserToken(
  tokenOrHeadersOrRequest: GetUserTokenInput,
  options?: GetUserTokenOptions,
): string | null {
  const headerName = options?.headerName ?? USER_TOKEN_HEADER_NAME;
  if (typeof tokenOrHeadersOrRequest === 'string') return tokenOrHeadersOrRequest;

  if (tokenOrHeadersOrRequest instanceof Headers) return tokenOrHeadersOrRequest.get(headerName);

  if (tokenOrHeadersOrRequest instanceof Request) return tokenOrHeadersOrRequest.headers.get(headerName);

  return null;
}

export interface UserTokenPayload {
  /// The user id of the user who is making the request.
  userId: string;

  /// The app id of the app that is making the request.
  /// This will always be the same as the app id passed in the options.
  appId: string;
}

export interface VerifyUserTokenOptions<DontThrow extends boolean = false> {
  /// This is the app id of your app. You can find it in the app settings dashboard.
  appId: string;

  /// Static JWK (JSON string) used to verify the user token. When set, the
  /// SDK skips the remote JWKS fetch entirely — useful for self-hosted or
  /// test setups where you know the signing key. Prefer leaving this unset
  /// and using `jwksUrl` instead so key rotation is handled automatically.
  publicKey?: string;

  /// URL of a JWKS endpoint to verify the user token against. Defaults to
  /// Whop's canonical JWKS. Override this when pointing at a local Whop
  /// backend (for example during local development).
  jwksUrl?: string;

  /// If true, the function will instead return null if the user token is invalid.
  /// Otherwise, it will throw an error. Defaults to `false`, meaning on validation failure, an error will be thrown.
  dontThrow?: DontThrow;

  /// The header name to use to get the user token. Defaults to `x-whop-user-token`.
  headerName?: string | null | undefined;
}

export function makeUserTokenVerifierFromSdk(client: Whop) {
  return async function verifyUserToken<DT extends boolean = false>(
    tokenOrHeadersOrRequest: string | Headers | Request | null | undefined,
    options?: Partial<VerifyUserTokenOptions<DT>>,
  ) {
    if (!client.appID) {
      throw Error('You must set appID in the Whop client constructor if you want to verify user tokens.');
    }
    const baseOptions: VerifyUserTokenOptions<false> = { appId: client.appID };
    if (client.userTokenPublicKey) baseOptions.publicKey = client.userTokenPublicKey;
    if (client.userTokenJwksUrl) baseOptions.jwksUrl = client.userTokenJwksUrl;
    return await internalVerifyUserToken<DT>(tokenOrHeadersOrRequest, {
      ...baseOptions,
      ...options,
    } as VerifyUserTokenOptions<DT>);
  };
}

export function verifyUserToken<DontThrow extends boolean = false>(
  tokenOrHeadersOrRequest: string | Headers | Request | null | undefined,
  overrideOptions?: Partial<VerifyUserTokenOptions<DontThrow>>,
) {
  return internalVerifyUserToken<DontThrow>(tokenOrHeadersOrRequest, {
    ...overrideOptions,
  } as VerifyUserTokenOptions<DontThrow>);
}

async function internalVerifyUserToken<DontThrow extends boolean = false>(
  tokenOrHeadersOrRequest: string | Headers | Request | null | undefined,
  options: Partial<VerifyUserTokenOptions<DontThrow>>,
): Promise<Promise<DontThrow extends true ? UserTokenPayload | null : UserTokenPayload>> {
  try {
    const tokenString = getUserToken(tokenOrHeadersOrRequest, {
      headerName: options?.headerName,
    });

    if (!tokenString) {
      throw new Error(
        'Whop user token not found. If you are the app developer, ensure you are developing in the whop.com iframe and have the dev proxy enabled.',
      );
    }

    const verifyOptions = { issuer: 'urn:whopcom:exp-proxy', algorithms: ['ES256'] };

    let token;
    if (options.publicKey) {
      const key = await importJWK(JSON.parse(options.publicKey), 'ES256').catch(() => {
        throw new Error('Invalid public key provided to verifyUserToken');
      });
      token = await jwtVerify(tokenString, key, verifyOptions).catch(() => {
        throw new Error('Invalid user token provided to verifyUserToken');
      });
    } else {
      const jwks = getRemoteJwks(options.jwksUrl ?? DEFAULT_JWKS_URL);
      token = await jwtVerify(tokenString, jwks, verifyOptions).catch(() => {
        throw new Error('Invalid user token provided to verifyUserToken');
      });
    }

    if (!(token.payload.sub && token.payload.aud) || Array.isArray(token.payload.aud)) {
      throw new Error('Invalid user token provided to verifyUserToken');
    }
    if (options.appId && token.payload.aud !== options.appId)
      throw new Error('Invalid app id provided to verifyUserToken');
    return {
      appId: token.payload.aud,
      userId: token.payload.sub,
    };
  } catch (e) {
    if (options.dontThrow) {
      return null as DontThrow extends true ? UserTokenPayload | null : never;
    }

    throw e;
  }
}
