// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Whopsdk } from '../client';

export abstract class APIResource {
  protected _client: Whopsdk;

  constructor(client: Whopsdk) {
    this._client = client;
  }
}
