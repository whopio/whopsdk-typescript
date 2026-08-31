// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A File is an uploaded document or media object, identified by a `file_` ID. Creating a file returns a presigned destination; upload the bytes there and the file becomes `ready`.
 *
 * Use the Files API to create a file, upload its content directly to storage (in one PUT, or in parts for large files), and retrieve it while polling for readiness. A ready file's ID can be attached wherever Whop accepts files.
 */
export class Files extends APIResource {
  /**
   * Creates a file and returns a presigned destination to upload its bytes to. PUT
   * the bytes to `upload_url` (single-part), or to each of `multipart_upload_urls`
   * and then call Complete File Multipart Upload. Once the bytes land the file
   * becomes `ready`, and its ID can be attached wherever a file is accepted —
   * account legal documents, dispute evidence documents. For a step-by-step
   * walkthrough of single-part and multipart uploads, see the
   * [direct file uploads guide](/developer/guides/direct-file-uploads).
   *
   * @example
   * ```ts
   * const file = await client.files.create({
   *   filename: 'terms.pdf',
   * });
   * ```
   */
  create(params: FileCreateParams, options?: RequestOptions): APIPromise<FileCreateResponse> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/files', {
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
   * Retrieves a file you uploaded — poll it after uploading the bytes to see
   * `upload_status` become `ready`. Only the creator can retrieve a file this way; a
   * file attached to another resource is read through that resource.
   *
   * @example
   * ```ts
   * const file = await client.files.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: FileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/files/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Controls whether an uploaded file is publicly accessible or requires
 * authentication to access.
 */
export type FileVisibility = 'public' | 'private';

/**
 * The upload status of a file
 */
export type UploadStatus = 'pending' | 'processing' | 'ready' | 'failed';

export interface FileCreateResponse {
  /**
   * The file's ID, prefixed `file_`.
   */
  id: string;

  /**
   * The file's MIME type, e.g. `application/pdf`.
   */
  content_type: string | null;

  /**
   * When the file was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * The original filename, including its extension.
   */
  filename: string | null;

  /**
   * The type of this object, always `file`.
   */
  object: string;

  /**
   * The file size in bytes. `null` until the upload has finished.
   */
  size: number | null;

  /**
   * Where the file is in its upload lifecycle.
   */
  upload_status: 'pending' | 'processing' | 'ready' | 'failed';

  /**
   * A URL to download the file: a permanent CDN URL for public files, a signed
   * expiring URL for private ones. `null` until the upload has finished.
   */
  url: string | null;

  /**
   * `public` files are served via an unsigned CDN URL; `private` files via a signed,
   * expiring URL.
   */
  visibility: 'public' | 'private';

  /**
   * The byte size each part (except the last) must be. Present only on create, and
   * only for multipart uploads.
   */
  multipart_chunk_size?: number | null;

  /**
   * The ID of the multipart upload, passed back to `complete`. Present only on
   * create, and only for multipart uploads.
   */
  multipart_upload_id?: string | null;

  multipart_upload_urls?: Array<FileCreateResponse.MultipartUploadURL> | null;

  /**
   * Headers to send with the upload PUT. Present only on create.
   */
  upload_headers?: unknown;

  /**
   * Presigned URL to PUT the file's bytes to. Present only on create, and only for
   * single-part uploads.
   */
  upload_url?: string | null;
}

export namespace FileCreateResponse {
  /**
   * The presigned URL for each part. Present only on create, and only for multipart
   * uploads.
   */
  export interface MultipartUploadURL {
    /**
     * The 1-based index of this part within the multipart upload.
     */
    part_number: number;

    /**
     * The presigned URL to PUT this part's bytes to.
     */
    url: string;
  }
}

export interface FileRetrieveResponse {
  /**
   * The file's ID, prefixed `file_`.
   */
  id: string;

  /**
   * The file's MIME type, e.g. `application/pdf`.
   */
  content_type: string | null;

  /**
   * When the file was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * The original filename, including its extension.
   */
  filename: string | null;

  /**
   * The type of this object, always `file`.
   */
  object: string;

  /**
   * The file size in bytes. `null` until the upload has finished.
   */
  size: number | null;

  /**
   * Where the file is in its upload lifecycle.
   */
  upload_status: 'pending' | 'processing' | 'ready' | 'failed';

  /**
   * A URL to download the file: a permanent CDN URL for public files, a signed
   * expiring URL for private ones. `null` until the upload has finished.
   */
  url: string | null;

  /**
   * `public` files are served via an unsigned CDN URL; `private` files via a signed,
   * expiring URL.
   */
  visibility: 'public' | 'private';

  /**
   * The byte size each part (except the last) must be. Present only on create, and
   * only for multipart uploads.
   */
  multipart_chunk_size?: number | null;

  /**
   * The ID of the multipart upload, passed back to `complete`. Present only on
   * create, and only for multipart uploads.
   */
  multipart_upload_id?: string | null;

  multipart_upload_urls?: Array<FileRetrieveResponse.MultipartUploadURL> | null;

  /**
   * Headers to send with the upload PUT. Present only on create.
   */
  upload_headers?: unknown;

  /**
   * Presigned URL to PUT the file's bytes to. Present only on create, and only for
   * single-part uploads.
   */
  upload_url?: string | null;
}

export namespace FileRetrieveResponse {
  /**
   * The presigned URL for each part. Present only on create, and only for multipart
   * uploads.
   */
  export interface MultipartUploadURL {
    /**
     * The 1-based index of this part within the multipart upload.
     */
    part_number: number;

    /**
     * The presigned URL to PUT this part's bytes to.
     */
    url: string;
  }
}

export interface FileCreateParams {
  /**
   * Body param: The name of the file including its extension, e.g. `terms.pdf`.
   */
  filename: string;

  /**
   * Body param: The file's size in bytes. Required when `multipart` is `true`.
   * Multipart uploads support at most 10,000 parts of 5MB each (about 50 GB).
   */
  byte_size?: number;

  /**
   * Body param: Upload the file in 5MB parts. Required for files larger than 5GB;
   * useful above ~100MB. The file must be larger than 5MB.
   */
  multipart?: boolean;

  /**
   * Body param: `public` files are served via an unsigned CDN URL — use for assets
   * anyone may see. `private` files are served via a signed, expiring URL — use for
   * sensitive documents. Defaults to `private`.
   */
  visibility?: 'public' | 'private';

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

export interface FileRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Files {
  export {
    type FileVisibility as FileVisibility,
    type UploadStatus as UploadStatus,
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
  };
}
