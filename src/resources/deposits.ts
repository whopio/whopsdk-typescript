// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Deposits extends APIResource {
  /**
   * Resolves a deposit destination and returns the on-chain addresses that can fund
   * it.
   */
  create(body: DepositCreateParams, options?: RequestOptions): APIPromise<DepositCreateResponse> {
    return this._client.post('/deposits', { body, ...options });
  }
}

export interface DepositCreateResponse {
  amount: string;

  deposit_address: DepositCreateResponse.DepositAddress;

  destination: DepositCreateResponse.Destination;

  hosted_url: string | null;

  metadata: { [key: string]: unknown };

  object: 'deposit';
}

export namespace DepositCreateResponse {
  export interface DepositAddress {
    evm: string;

    solana: string;
  }

  export interface Destination {
    address: string;

    currency: string;

    network: string;

    account_id?: string | null;
  }
}

export interface DepositCreateParams {
  /**
   * Amount to deposit.
   */
  amount: number;

  /**
   * Destination account ID or wallet address. Object form is supported for
   * compatibility.
   */
  destination: string | DepositCreateParams.UnionMember1;

  /**
   * Arbitrary metadata echoed in the response.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Optional destination network override.
   */
  network?: string | null;
}

export namespace DepositCreateParams {
  export interface UnionMember1 {
    account_id?: string;

    address?: string;

    network?: string;
  }
}

export declare namespace Deposits {
  export {
    type DepositCreateResponse as DepositCreateResponse,
    type DepositCreateParams as DepositCreateParams,
  };
}
