// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FinancialActivity extends APIResource {
  /**
   * Lists financial activity rows for an account or user ledger. Rows are derived
   * from ledger lines and include typed resource and source objects that clients can
   * use for presentation and navigation.
   */
  list(
    query: FinancialActivityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialActivityListResponse> {
    return this._client.get('/financial-activity', { query, ...options });
  }
}

export interface FinancialActivityListResponse {
  data: Array<FinancialActivityListResponse.Data>;

  page_info: FinancialActivityListResponse.PageInfo;
}

export namespace FinancialActivityListResponse {
  export interface Data {
    id: string;

    /**
     * Signed amount in the currency's smallest precision units.
     */
    amount: string;

    currency: Data.Currency;

    line_type: string;

    object: 'ledger_activity';

    posted_at: string;

    resource:
      | Data.UnionMember0
      | Data.UnionMember1
      | Data.UnionMember2
      | Data.UnionMember3
      | Data.UnionMember4
      | null;

    source: Data.Source | null;
  }

  export namespace Data {
    export interface Currency {
      code: string;

      /**
       * Precision factor for the currency, for example 100000000 for USD.
       */
      precision: string;
    }

    export interface UnionMember0 {
      id: string;

      logo_url: string | null;

      object: 'account';

      route: string | null;

      title: string | null;
    }

    export interface UnionMember1 {
      id: string;

      name: string | null;

      object: 'user';

      profile_picture_url: string | null;

      username: string | null;
    }

    export interface UnionMember2 {
      id: string;

      object: 'ledger_account';

      owner: UnionMember2.UnionMember0 | UnionMember2.UnionMember1 | null;
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        id: string;

        logo_url: string | null;

        object: 'account';

        route: string | null;

        title: string | null;
      }

      export interface UnionMember1 {
        id: string;

        name: string | null;

        object: 'user';

        profile_picture_url: string | null;

        username: string | null;
      }
    }

    export interface UnionMember3 {
      id: string;

      bank: UnionMember3.Bank | null;

      card: UnionMember3.Card | null;

      email_identifier: string | null;

      gateway_type: string | null;

      object: 'payment_method';

      payment_method_type: string | null;
    }

    export namespace UnionMember3 {
      export interface Bank {
        account_name: string | null;

        account_type: string | null;

        bank_name: string | null;

        last4: string | null;
      }

      export interface Card {
        brand: string | null;

        exp_month: number | null;

        exp_year: number | null;

        last4: string | null;
      }
    }

    export interface UnionMember4 {
      id: string;

      account_reference: string | null;

      destination_currency_code: string | null;

      institution_name: string | null;

      nickname: string | null;

      object: 'payout_method';

      provider: string | null;
    }

    export interface Source {
      id: string;

      object: string;

      [k: string]: unknown;
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface FinancialActivityListParams {
  /**
   * The business account ID. Provide exactly one of account_id or user_id.
   */
  account_id?: string;

  /**
   * Optional currency code filter, for example usd.
   */
  currency?: string;

  /**
   * Cursor returned by the previous page.
   */
  cursor?: string;

  /**
   * Maximum number of rows to return.
   */
  limit?: number;

  /**
   * Optional ledger line categories to include.
   */
  line_types?: Array<string>;

  /**
   * Only include rows posted after this ISO 8601 timestamp.
   */
  posted_after?: string;

  /**
   * Only include rows posted before this ISO 8601 timestamp.
   */
  posted_before?: string;

  /**
   * The user ID. Provide exactly one of account_id or user_id.
   */
  user_id?: string;
}

export declare namespace FinancialActivity {
  export {
    type FinancialActivityListResponse as FinancialActivityListResponse,
    type FinancialActivityListParams as FinancialActivityListParams,
  };
}
