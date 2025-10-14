// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Whop } from '../client';

export abstract class APIResource {
  protected _client: Whop;

  constructor(client: Whop) {
    this._client = client;
  }
}
