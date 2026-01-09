import type { Fetch } from '../internal/builtin-types';
import type { RequestOptions } from '../internal/request-options';
import { getDefaultFetch } from '../internal/shims';
import { sleep } from '../internal/utils/sleep';
import { toFile, type ToFileInput, type Uploadable } from '../core/uploads';
import type { Whop } from '../client';
import type { FileCreateResponse, FileRetrieveResponse } from '../resources/files';

export interface UploadFileOptions {
  /**
   * Override the filename used when creating the file.
   * If omitted, we'll use the name inferred by `toFile()`.
   */
  filename?: string | null | undefined;

  /**
   * How often to poll `files.retrieve()` for status updates.
   *
   * @default 1000
   * @unit milliseconds
   */
  pollIntervalMs?: number | null | undefined;

  /**
   * Maximum time to wait for the file to reach `ready` after uploading.
   *
   * @default 120000
   * @unit milliseconds
   */
  pollTimeoutMs?: number | null | undefined;

  /**
   * Request options used for the `files.create()` and `files.retrieve()` API calls.
   */
  requestOptions?: RequestOptions | null | undefined;
}

function normalizeUploadHeaders(
  headers: FileCreateResponse['upload_headers'],
): Record<string, string> | undefined {
  if (!headers) return undefined;
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    if (value === null || value === undefined) continue;
    out[key] = String(value);
  }
  return out;
}

/**
 * Upload a file using the `files.create()` and `files.retrieve()` APIs.
 *
 * Flow:
 * - create a file record (returns presigned upload URL + headers)
 * - upload bytes to the presigned URL
 * - poll retrieve until `ready` (or `failed` / timeout)
 */
export async function uploadFile(
  client: Whop,
  file: Uploadable | ToFileInput | PromiseLike<Uploadable | ToFileInput>,
  options?: UploadFileOptions,
): Promise<FileRetrieveResponse> {
  const pollIntervalMs = options?.pollIntervalMs ?? 1000;
  const pollTimeoutMs = options?.pollTimeoutMs ?? 120_000;
  const requestOptions = options?.requestOptions ?? undefined;

  const normalized = await toFile(file as any, options?.filename ?? undefined);
  const filename = (options?.filename ?? normalized.name)?.trim();
  if (!filename) {
    throw new Error('uploadFile: could not determine a filename; pass { filename } or provide a named File.');
  }

  const created = await client.files.create({ filename }, requestOptions);

  if (created.upload_status === 'failed') {
    throw new Error(`uploadFile: file creation failed (id: ${created.id}).`);
  }

  // Some backends may immediately mark the record ready (e.g. for remote/import flows).
  if (created.upload_status !== 'ready') {
    if (!created.upload_url) {
      throw new Error('uploadFile: missing upload_url from files.create response.');
    }

    const fetchImpl: Fetch = ((client as any).fetch as Fetch | undefined) ?? getDefaultFetch();

    const uploadResponse = await fetchImpl(created.upload_url, {
      method: 'PUT',
      headers: normalizeUploadHeaders(created.upload_headers) ?? {},
      body: normalized,
    });

    if (!uploadResponse.ok) {
      throw new Error(
        `uploadFile: upload failed (status ${uploadResponse.status} ${uploadResponse.statusText}).`,
      );
    }
  }

  const deadline = Date.now() + pollTimeoutMs;
  while (true) {
    const current = await client.files.retrieve(created.id, requestOptions);

    if (current.upload_status === 'ready') return current;
    if (current.upload_status === 'failed') {
      throw new Error(`uploadFile: processing failed (id: ${current.id}).`);
    }

    if (Date.now() >= deadline) {
      throw new Error(`uploadFile: timed out waiting for file to become ready (id: ${current.id}).`);
    }

    await sleep(pollIntervalMs);
  }
}
