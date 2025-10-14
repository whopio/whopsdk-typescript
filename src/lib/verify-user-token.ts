import { importJWK, jwtVerify } from 'jose';
import type { Whop } from '../client';

const USER_TOKEN_HEADER_NAME = 'x-whop-user-token';
const USER_TOKEN_VERIFICATION_KEY =
  '{"kty":"EC","x":"rz8a8vxvexHC0TLT91g7llOdDOsNuYiGEfic4Qhni-E","y":"zH0QblKYToexd5PEIMGXPVJS9AB5smKrW4S_TbiXrOs","crv":"P-256"}';

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

  /// The public key used to verify the user token. You don't need to provide this by default.
  publicKey?: string;

  /// If true, the function will instead return null if the user token is invalid.
  /// Otherwise, it will throw an error. Defaults to `false`, meaning on validation failure, an error will be thrown.
  dontThrow?: DontThrow;

  /// The header name to use to get the user token. Defaults to `x-whop-user-token`.
  headerName?: string | null | undefined;
}

export function makeUserTokenVerifierFromSdk(client: Whop) {
  const baseOptions: VerifyUserTokenOptions<false> = {
    appId: client.appID,
  };
  return async function verifyUserToken<DT extends boolean = false>(
    tokenOrHeadersOrRequest: string | Headers | Request | null | undefined,
    options?: Partial<VerifyUserTokenOptions<DT>>,
  ) {
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

    const jwkString = options.publicKey ?? USER_TOKEN_VERIFICATION_KEY;
    const key = await importJWK(JSON.parse(jwkString), 'ES256').catch(() => {
      throw new Error('Invalid public key provided to verifyUserToken');
    });
    const token = await jwtVerify(tokenString, key, {
      issuer: 'urn:whopcom:exp-proxy',
    }).catch((_e: any) => {
      throw new Error('Invalid user token provided to verifyUserToken');
    });
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
