// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CompanyTokenTransactions extends APIResource {
  /**
   * Create a token transaction to add, subtract, or transfer tokens for a member
   * within a company.
   *
   * Required permissions:
   *
   * - `company_token_transaction:create`
   * - `member:basic:read`
   * - `company:basic:read`
   *
   * @example
   * ```ts
   * const companyTokenTransaction =
   *   await client.companyTokenTransactions.create({
   *     amount: 6.9,
   *     company_id: 'biz_xxxxxxxxxxxxxx',
   *     destination_user_id: 'destination_user_id',
   *     transaction_type: 'transfer',
   *     user_id: 'user_xxxxxxxxxxxxx',
   *   });
   * ```
   */
  create(
    body: CompanyTokenTransactionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CompanyTokenTransaction> {
    return this._client.post('/company_token_transactions', { body, ...options });
  }

  /**
   * Retrieves the details of an existing company token transaction.
   *
   * Required permissions:
   *
   * - `company_token_transaction:read`
   * - `member:basic:read`
   * - `company:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CompanyTokenTransaction> {
    return this._client.get(path`/company_token_transactions/${id}`, options);
  }

  /**
   * Returns a paginated list of token transactions for a user or company, depending
   * on the authenticated actor, with optional filtering by user and transaction
   * type.
   *
   * Required permissions:
   *
   * - `company_token_transaction:read`
   * - `member:basic:read`
   * - `company:basic:read`
   */
  list(
    query: CompanyTokenTransactionListParams,
    options?: RequestOptions,
  ): PagePromise<CompanyTokenTransactionListResponsesCursorPage, CompanyTokenTransactionListResponse> {
    return this._client.getAPIList(
      '/company_token_transactions',
      CursorPage<CompanyTokenTransactionListResponse>,
      { query, ...options },
    );
  }
}

export type CompanyTokenTransactionListResponsesCursorPage = CursorPage<CompanyTokenTransactionListResponse>;

/**
 * A token transaction records a credit or debit to a member's token balance within
 * a company, including transfers between members.
 */
export interface CompanyTokenTransaction {
  /**
   * The unique identifier for the company token transaction.
   */
  id: string;

  /**
   * The token amount for this transaction. Always a positive value regardless of
   * transaction type.
   */
  amount: number;

  /**
   * The company whose token balance this transaction affects.
   */
  company: CompanyTokenTransaction.Company;

  /**
   * The datetime the company token transaction was created.
   */
  created_at: string;

  /**
   * Free-text description explaining the reason for this token transaction. Null if
   * no description was provided.
   */
  description: string | null;

  /**
   * A unique key used to prevent duplicate transactions when retrying API requests.
   * Null if no idempotency key was provided.
   */
  idempotency_key: string | null;

  /**
   * The ID of the corresponding transaction on the other side of a transfer. Null if
   * this is not a transfer transaction.
   */
  linked_transaction_id: string | null;

  /**
   * The member whose token balance was affected by this transaction.
   */
  member: CompanyTokenTransaction.Member;

  /**
   * The direction of this token transaction (add, subtract, or transfer).
   */
  transaction_type: TransactionType;

  /**
   * The user whose token balance was affected by this transaction.
   */
  user: CompanyTokenTransaction.User;
}

export namespace CompanyTokenTransaction {
  /**
   * The company whose token balance this transaction affects.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The member whose token balance was affected by this transaction.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The user whose token balance was affected by this transaction.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

/**
 * The type of token transaction
 */
export type TransactionType = 'add' | 'subtract' | 'transfer';

/**
 * A token transaction records a credit or debit to a member's token balance within
 * a company, including transfers between members.
 */
export interface CompanyTokenTransactionListResponse {
  /**
   * The unique identifier for the company token transaction.
   */
  id: string;

  /**
   * The token amount for this transaction. Always a positive value regardless of
   * transaction type.
   */
  amount: number;

  /**
   * The company whose token balance this transaction affects.
   */
  company: CompanyTokenTransactionListResponse.Company;

  /**
   * The datetime the company token transaction was created.
   */
  created_at: string;

  /**
   * Free-text description explaining the reason for this token transaction. Null if
   * no description was provided.
   */
  description: string | null;

  /**
   * A unique key used to prevent duplicate transactions when retrying API requests.
   * Null if no idempotency key was provided.
   */
  idempotency_key: string | null;

  /**
   * The ID of the corresponding transaction on the other side of a transfer. Null if
   * this is not a transfer transaction.
   */
  linked_transaction_id: string | null;

  /**
   * The member whose token balance was affected by this transaction.
   */
  member: CompanyTokenTransactionListResponse.Member;

  /**
   * The direction of this token transaction (add, subtract, or transfer).
   */
  transaction_type: TransactionType;

  /**
   * The user whose token balance was affected by this transaction.
   */
  user: CompanyTokenTransactionListResponse.User;
}

export namespace CompanyTokenTransactionListResponse {
  /**
   * The company whose token balance this transaction affects.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The member whose token balance was affected by this transaction.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The user whose token balance was affected by this transaction.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

export type CompanyTokenTransactionCreateParams =
  | CompanyTokenTransactionCreateParams.CreateCompanyTokenTransactionInputTransactionTypeTransfer
  | CompanyTokenTransactionCreateParams.CreateCompanyTokenTransactionInputTransactionTypeAdd
  | CompanyTokenTransactionCreateParams.CreateCompanyTokenTransactionInputTransactionTypeSubtract;

export declare namespace CompanyTokenTransactionCreateParams {
  export interface CreateCompanyTokenTransactionInputTransactionTypeTransfer {
    /**
     * The positive number of tokens to transact. For example, 100.0 for 100 tokens.
     */
    amount: number;

    /**
     * The unique identifier of the company to create the transaction in, starting with
     * 'biz\_'.
     */
    company_id: string;

    /**
     * The unique identifier of the user receiving the tokens. Required when the
     * transaction type is 'transfer'.
     */
    destination_user_id: string;

    transaction_type: 'transfer';

    /**
     * The unique identifier of the user whose token balance will be affected, starting
     * with 'user\_'.
     */
    user_id: string;

    /**
     * A human-readable description of why the transaction was created.
     */
    description?: string | null;

    /**
     * A unique key to prevent duplicate transactions. Use a UUID or similar unique
     * string.
     */
    idempotency_key?: string | null;
  }

  export interface CreateCompanyTokenTransactionInputTransactionTypeAdd {
    /**
     * The positive number of tokens to transact. For example, 100.0 for 100 tokens.
     */
    amount: number;

    /**
     * The unique identifier of the company to create the transaction in, starting with
     * 'biz\_'.
     */
    company_id: string;

    transaction_type: 'add';

    /**
     * The unique identifier of the user whose token balance will be affected, starting
     * with 'user\_'.
     */
    user_id: string;

    /**
     * A human-readable description of why the transaction was created.
     */
    description?: string | null;

    /**
     * A unique key to prevent duplicate transactions. Use a UUID or similar unique
     * string.
     */
    idempotency_key?: string | null;
  }

  export interface CreateCompanyTokenTransactionInputTransactionTypeSubtract {
    /**
     * The positive number of tokens to transact. For example, 100.0 for 100 tokens.
     */
    amount: number;

    /**
     * The unique identifier of the company to create the transaction in, starting with
     * 'biz\_'.
     */
    company_id: string;

    transaction_type: 'subtract';

    /**
     * The unique identifier of the user whose token balance will be affected, starting
     * with 'user\_'.
     */
    user_id: string;

    /**
     * A human-readable description of why the transaction was created.
     */
    description?: string | null;

    /**
     * A unique key to prevent duplicate transactions. Use a UUID or similar unique
     * string.
     */
    idempotency_key?: string | null;
  }
}

export interface CompanyTokenTransactionListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list token transactions for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The type of token transaction
   */
  transaction_type?: TransactionType | null;

  /**
   * Filter transactions to only those involving this specific user.
   */
  user_id?: string | null;
}

export declare namespace CompanyTokenTransactions {
  export {
    type CompanyTokenTransaction as CompanyTokenTransaction,
    type TransactionType as TransactionType,
    type CompanyTokenTransactionListResponse as CompanyTokenTransactionListResponse,
    type CompanyTokenTransactionListResponsesCursorPage as CompanyTokenTransactionListResponsesCursorPage,
    type CompanyTokenTransactionCreateParams as CompanyTokenTransactionCreateParams,
    type CompanyTokenTransactionListParams as CompanyTokenTransactionListParams,
  };
}
