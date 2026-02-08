// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CompanyTokenTransactions extends APIResource {
  /**
   * Create a token transaction (add/subtract/transfer) for a member
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
   * Retrieves a token transaction by ID
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
   * Lists token transactions for a company
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
 * The type of token transaction
 */
export type BotTokenTransactionTypes = 'add' | 'subtract' | 'transfer';

/**
 * A token transaction within a company
 */
export interface CompanyTokenTransaction {
  /**
   * The unique identifier for the company token transaction.
   */
  id: string;

  /**
   * The transaction amount (always positive)
   */
  amount: number;

  /**
   * The company
   */
  company: CompanyTokenTransaction.Company;

  /**
   * The datetime the company token transaction was created.
   */
  created_at: string;

  /**
   * Optional description
   */
  description: string | null;

  /**
   * Optional idempotency key to prevent duplicate transactions
   */
  idempotency_key: string | null;

  /**
   * For transfers, the ID of the linked transaction
   */
  linked_transaction_id: string | null;

  /**
   * The member
   */
  member: CompanyTokenTransaction.Member;

  /**
   * The type of transaction
   */
  transaction_type: BotTokenTransactionTypes;

  /**
   * The user whose balance changed
   */
  user: CompanyTokenTransaction.User;
}

export namespace CompanyTokenTransaction {
  /**
   * The company
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
   * The member
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The user whose balance changed
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * A token transaction within a company
 */
export interface CompanyTokenTransactionListResponse {
  /**
   * The unique identifier for the company token transaction.
   */
  id: string;

  /**
   * The transaction amount (always positive)
   */
  amount: number;

  /**
   * The company
   */
  company: CompanyTokenTransactionListResponse.Company;

  /**
   * The datetime the company token transaction was created.
   */
  created_at: string;

  /**
   * Optional description
   */
  description: string | null;

  /**
   * Optional idempotency key to prevent duplicate transactions
   */
  idempotency_key: string | null;

  /**
   * For transfers, the ID of the linked transaction
   */
  linked_transaction_id: string | null;

  /**
   * The member
   */
  member: CompanyTokenTransactionListResponse.Member;

  /**
   * The type of transaction
   */
  transaction_type: BotTokenTransactionTypes;

  /**
   * The user whose balance changed
   */
  user: CompanyTokenTransactionListResponse.User;
}

export namespace CompanyTokenTransactionListResponse {
  /**
   * The company
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
   * The member
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The user whose balance changed
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
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
     * The positive amount of tokens
     */
    amount: number;

    /**
     * The company ID
     */
    company_id: string;

    /**
     * Required for transfers - the user to receive tokens
     */
    destination_user_id: string;

    transaction_type: 'transfer';

    /**
     * The user ID whose balance will change
     */
    user_id: string;

    /**
     * Optional description for the transaction
     */
    description?: string | null;

    /**
     * Optional key to prevent duplicate transactions
     */
    idempotency_key?: string | null;
  }

  export interface CreateCompanyTokenTransactionInputTransactionTypeAdd {
    /**
     * The positive amount of tokens
     */
    amount: number;

    /**
     * The company ID
     */
    company_id: string;

    transaction_type: 'add';

    /**
     * The user ID whose balance will change
     */
    user_id: string;

    /**
     * Optional description for the transaction
     */
    description?: string | null;

    /**
     * Optional key to prevent duplicate transactions
     */
    idempotency_key?: string | null;
  }

  export interface CreateCompanyTokenTransactionInputTransactionTypeSubtract {
    /**
     * The positive amount of tokens
     */
    amount: number;

    /**
     * The company ID
     */
    company_id: string;

    transaction_type: 'subtract';

    /**
     * The user ID whose balance will change
     */
    user_id: string;

    /**
     * Optional description for the transaction
     */
    description?: string | null;

    /**
     * Optional key to prevent duplicate transactions
     */
    idempotency_key?: string | null;
  }
}

export interface CompanyTokenTransactionListParams extends CursorPageParams {
  /**
   * The ID of the company
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
  transaction_type?: BotTokenTransactionTypes | null;

  /**
   * Filter by user ID
   */
  user_id?: string | null;
}

export declare namespace CompanyTokenTransactions {
  export {
    type BotTokenTransactionTypes as BotTokenTransactionTypes,
    type CompanyTokenTransaction as CompanyTokenTransaction,
    type CompanyTokenTransactionListResponse as CompanyTokenTransactionListResponse,
    type CompanyTokenTransactionListResponsesCursorPage as CompanyTokenTransactionListResponsesCursorPage,
    type CompanyTokenTransactionCreateParams as CompanyTokenTransactionCreateParams,
    type CompanyTokenTransactionListParams as CompanyTokenTransactionListParams,
  };
}
