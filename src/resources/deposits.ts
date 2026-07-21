// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Deposits describe ways to add funds to an account balance, including hosted deposit pages, bank deposit instructions, and supported crypto wallet addresses.
 *
 * Use the Deposits API to create deposit instructions for an account.
 */
export class Deposits extends APIResource {
  /**
   * Resolves a deposit destination and returns the on-chain addresses that can fund
   * it. No authentication is required; any business can be resolved by its account
   * ID. A caller authenticated as a user can additionally resolve their own user
   * account.
   */
  create(params: DepositCreateParams, options?: RequestOptions): APIPromise<DepositCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/deposits', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface DepositCreateResponse {
  /**
   * Account ID of the destination owner. Null for raw wallet address destinations.
   */
  account_id: string | null;

  /**
   * URL of the hosted deposit page. Only present for business destinations.
   */
  hosted_url: string | null;

  /**
   * Metadata from the request.
   */
  metadata: { [key: string]: unknown };

  /**
   * Available deposit methods for destination.
   */
  methods: DepositCreateResponse.Methods;

  object: 'deposit';

  /**
   * Requested deposit amount.
   */
  amount?: string;
}

export namespace DepositCreateResponse {
  /**
   * Available deposit methods for destination.
   */
  export interface Methods {
    /**
     * Bank deposit details. Only present when bank deposits are active for the
     * destination account.
     */
    bank: Methods.Bank | null;

    /**
     * Crypto networks available for this deposit, each with its on-chain deposit
     * address and the tokens accepted on that network.
     */
    crypto: Array<Methods.Crypto>;
  }

  export namespace Methods {
    /**
     * Bank deposit details. Only present when bank deposits are active for the
     * destination account.
     */
    export interface Bank {
      /**
       * Bank transfer currencies available for this deposit.
       */
      currencies: Array<Bank.Currency>;
    }

    export namespace Bank {
      export interface Currency {
        /**
         * Bank account number for deposits in this currency.
         */
        account_number: string | null;

        /**
         * Currency supported by these bank instructions.
         */
        currency: string;

        /**
         * Receiving bank address.
         */
        deposit_bank_address: string | null;

        /**
         * Receiving bank name.
         */
        deposit_bank_name: string | null;

        /**
         * Beneficiary name to use for transfer.
         */
        deposit_beneficiary_name: string | null;

        /**
         * Reference to include with bank transfer.
         */
        deposit_reference: string | null;

        /**
         * Active deposit rails for this currency, such as `ach`, `wire`, or `sepa`.
         */
        rails: Array<string>;

        /**
         * Bank routing number for deposits in this currency.
         */
        routing_number: string | null;

        /**
         * SWIFT/BIC code for international wires, when available.
         */
        swift_bic: string | null;
      }
    }

    export interface Crypto {
      /**
       * Address to send funds to on this network. Null when the provider has not issued
       * one yet.
       */
      deposit_address: string | null;

      /**
       * Network icon URL.
       */
      icon_url: string | null;

      /**
       * Network display name, such as `Ethereum` or `Solana`.
       */
      name: string;

      /**
       * Tokens accepted for deposit on this network.
       */
      supported_currencies: Array<Crypto.SupportedCurrency>;
    }

    export namespace Crypto {
      export interface SupportedCurrency {
        /**
         * Token icon URL. Null when no icon is available.
         */
        icon_url: string | null;

        /**
         * Token symbol, such as `USDC`.
         */
        name: string;
      }
    }
  }
}

export interface DepositCreateParams {
  /**
   * Body param: Destination account ID or wallet address. Object form is supported
   * for compatibility.
   */
  destination: string | DepositCreateParams.UnionMember1;

  /**
   * Body param: Amount to prefill on hosted deposit page.
   */
  amount?: number;

  /**
   * Body param: Metadata to include with the deposit response.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Destination network override.
   */
  network?: string | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace DepositCreateParams {
  export interface UnionMember1 {
    /**
     * Destination account ID.
     */
    account_id?: string;

    /**
     * Destination wallet address.
     */
    address?: string;

    /**
     * Destination wallet network.
     */
    network?: string;
  }
}

export declare namespace Deposits {
  export {
    type DepositCreateResponse as DepositCreateResponse,
    type DepositCreateParams as DepositCreateParams,
  };
}
