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
 * A file that has been uploaded or is pending upload.
 */
export interface FileCreateResponse {
  /**
   * The unique identifier for the file.
   */
  id: string;

  /**
   * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
   */
  content_type: string | null;

  /**
   * The original filename of the uploaded file, including its file extension.
   */
  filename: string | null;

  /**
   * The file size in bytes. Null if the file has not finished uploading.
   */
  size: string | null;

  /**
   * Headers to include in the upload request. Only present in the response from the
   * create mutation.
   */
  upload_headers: { [key: string]: unknown } | null;

  /**
   * The current upload status of the file (e.g., pending, ready).
   */
  upload_status: UploadStatus;

  /**
   * The presigned URL to upload the file contents to. Only present in the response
   * from the create mutation.
   */
  upload_url: string | null;

  /**
   * The CDN URL for accessing the file. Null if the file has not finished uploading.
   */
  url: string | null;
}

/**
 * A file that has been uploaded or is pending upload.
 */
export interface FileRetrieveResponse {
  /**
   * The unique identifier for the file.
   */
  id: string;

  /**
   * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
   */
  content_type: string | null;

  /**
   * The original filename of the uploaded file, including its file extension.
   */
  filename: string | null;

  /**
   * The file size in bytes. Null if the file has not finished uploading.
   */
  size: string | null;

  /**
   * The current upload status of the file (e.g., pending, ready).
   */
  upload_status: UploadStatus;

  /**
   * The CDN URL for accessing the file. Null if the file has not finished uploading.
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
