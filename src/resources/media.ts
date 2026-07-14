// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Media Asset is an AI-generated image or video created from a prompt and billed from an account balance. When generation finishes, the asset includes a file that can be attached anywhere Whop accepts files.
 *
 * Use the Media API to start a generation job and retrieve the asset while it processes or after it is ready.
 */
export class Media extends APIResource {
  /**
   * Starts an AI media generation job billed from the account's balance. Generation
   * is asynchronous — poll `GET /media/{id}` until the asset is `ready`, then use
   * `file.id` anywhere attachments are accepted.
   */
  generate(body: MediaGenerateParams, options?: RequestOptions): APIPromise<MediaAsset> {
    return this._client.post('/media/generate', { body, ...options });
  }

  /**
   * Retrieves a media asset by ID. Poll this while the asset is `processing`.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MediaAsset> {
    return this._client.get(path`/media/${id}`, options);
  }
}

export interface MediaAsset {
  /**
   * Media asset ID, prefixed `media_`.
   */
  id: string;

  /**
   * USD amount charged to the account's balance for this generation. `null` if the
   * generation wasn't billed.
   */
  amount_charged: number | null;

  /**
   * ISO 8601 timestamp when the asset reached a terminal state. `null` while
   * `processing`.
   */
  completed_at: string | null;

  /**
   * ISO 8601 timestamp when the generation was requested.
   */
  created_at: string;

  /**
   * Currency of `amount_charged`. Always `usd`.
   */
  currency: string;

  /**
   * Why generation failed. `null` unless status is `failed`.
   */
  error_message: string | null;

  /**
   * The produced file, usable anywhere attachments are accepted. `null` until the
   * asset is `ready`.
   */
  file: MediaAsset.File | null;

  /**
   * The inputs the asset was generated from.
   */
  generation: MediaAsset.Generation;

  /**
   * The kind of media this asset holds.
   */
  media_type: 'video' | 'image';

  /**
   * How the asset was created. Always `generated`.
   */
  source: 'generated';

  /**
   * Lifecycle state: `processing` while generation runs, `ready` when the file is
   * available, `failed` when generation failed and the charge was refunded.
   */
  status: 'processing' | 'ready' | 'failed';
}

export namespace MediaAsset {
  /**
   * The produced file, usable anywhere attachments are accepted. `null` until the
   * asset is `ready`.
   */
  export interface File {
    /**
     * File ID, prefixed `file_`.
     */
    id: string;

    /**
     * CDN URL for downloading the file.
     */
    url: string;
  }

  /**
   * The inputs the asset was generated from.
   */
  export interface Generation {
    /**
     * Requested video length in seconds. `null` for images.
     */
    duration_seconds: number | null;

    /**
     * What the asset was generated from.
     */
    prompt: string;

    reference_media: Array<string>;

    /**
     * Requested video resolution. `null` for images. `1080p` is not supported by
     * Seedance 2.0 Fast or Mini; `4k` is only supported by Seedance 2.0.
     */
    resolution: '480p' | '720p' | '1080p' | '4k' | null;
  }
}

export interface MediaGenerateParams {
  /**
   * What to generate. Up to 2,000 characters.
   */
  prompt: string;

  /**
   * The kind of media to generate.
   */
  type: 'video' | 'image';

  /**
   * Account ID, prefixed `biz_`. Defaults to the account the API key belongs to.
   */
  account_id?: string;

  /**
   * Video length in seconds. Video only; defaults to 5.
   */
  duration_seconds?: 5 | 10 | 15;

  /**
   * Optional reference image file IDs (`file_` prefixed), up to 4. For video, a
   * single reference seeds the opening frame; multiple references guide subject and
   * style instead.
   */
  reference_media?: Array<string>;

  /**
   * Video resolution. Video only; defaults to `1080p`. `1080p` is not supported by
   * Seedance 2.0 Fast or Mini; `4k` is only supported by Seedance 2.0.
   */
  resolution?: '480p' | '720p' | '1080p' | '4k';
}

export declare namespace Media {
  export { type MediaAsset as MediaAsset, type MediaGenerateParams as MediaGenerateParams };
}
