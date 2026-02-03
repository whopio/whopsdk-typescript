// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Creates a file and returns a presigned URL for upload
   */
  create(body: FileCreateParams, options?: RequestOptions): APIPromise<FileCreateResponse> {
    return this._client.post('/files', { body, ...options });
  }

  /**
   * Retrieves a file by its ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get(path`/files/${id}`, options);
  }
}

/**
 * The upload status of a file
 */
export type UploadStatus = 'pending' | 'processing' | 'ready' | 'failed';

/**
 * A file that has been uploaded or is pending upload
 */
export interface FileCreateResponse {
  /**
   * The ID of the file
   */
  id: string;

  /**
   * The MIME type of the file (e.g., image/jpeg, video/mp4)
   */
  content_type: string | null;

  /**
   * The name of the file
   */
  filename: string | null;

  /**
   * The size of the file in bytes
   */
  size: string | null;

  /**
   * Headers to include in the upload request (only on create)
   */
  upload_headers: { [key: string]: unknown } | null;

  /**
   * The upload status of the file
   */
  upload_status: UploadStatus;

  /**
   * The presigned URL to upload the file to (only on create)
   */
  upload_url: string | null;

  /**
   * The URL to access the file
   */
  url: string | null;
}

/**
 * A file that has been uploaded or is pending upload
 */
export interface FileRetrieveResponse {
  /**
   * The ID of the file
   */
  id: string;

  /**
   * The MIME type of the file (e.g., image/jpeg, video/mp4)
   */
  content_type: string | null;

  /**
   * The name of the file
   */
  filename: string | null;

  /**
   * The size of the file in bytes
   */
  size: string | null;

  /**
   * The upload status of the file
   */
  upload_status: UploadStatus;

  /**
   * The URL to access the file
   */
  url: string | null;
}

export interface FileCreateParams {
  /**
   * The filename of the file
   */
  filename: string;
}

export declare namespace Files {
  export {
    type UploadStatus as UploadStatus,
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileCreateParams as FileCreateParams,
  };
}
