// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Retrieves the details of an existing payment method.
   *
   * Required permissions:
   *
   * - `member:payment_methods:read`
   */
  retrieve(
    id: string,
    query: PaymentMethodRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentMethodRetrieveResponse> {
    return this._client.get(path`/payment_methods/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of payment methods for a member or company, with
   * optional filtering by creation date. A payment method is a stored representation
   * of how a customer intends to pay, such as a card, bank account, or digital
   * wallet.
   *
   * Required permissions:
   *
   * - `member:payment_methods:read`
   */
  list(
    query: PaymentMethodListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentMethodListResponsesCursorPage, PaymentMethodListResponse> {
    return this._client.getAPIList('/payment_methods', CursorPage<PaymentMethodListResponse>, {
      query,
      ...options,
    });
  }
}

export type PaymentMethodListResponsesCursorPage = CursorPage<PaymentMethodListResponse>;

/**
 * A saved payment method with no type-specific details available.
 */
export type PaymentMethodRetrieveResponse =
  | PaymentMethodRetrieveResponse.BasePaymentMethod
  | PaymentMethodRetrieveResponse.CardPaymentMethod
  | PaymentMethodRetrieveResponse.UsBankAccountPaymentMethod
  | PaymentMethodRetrieveResponse.CashappPaymentMethod
  | PaymentMethodRetrieveResponse.IdealPaymentMethod
  | PaymentMethodRetrieveResponse.SepaDebitPaymentMethod;

export namespace PaymentMethodRetrieveResponse {
  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }
}

/**
 * A saved payment method with no type-specific details available.
 */
export type PaymentMethodListResponse =
  | PaymentMethodListResponse.BasePaymentMethod
  | PaymentMethodListResponse.CardPaymentMethod
  | PaymentMethodListResponse.UsBankAccountPaymentMethod
  | PaymentMethodListResponse.CashappPaymentMethod
  | PaymentMethodListResponse.IdealPaymentMethod
  | PaymentMethodListResponse.SepaDebitPaymentMethod;

export namespace PaymentMethodListResponse {
  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }
}

export interface PaymentMethodRetrieveParams {
  /**
   * The unique identifier of the company. Provide either this or member_id, not
   * both.
   */
  company_id?: string | null;

  /**
   * The unique identifier of the member. Provide either this or company_id, not
   * both.
   */
  member_id?: string | null;
}

export interface PaymentMethodListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of the company. Provide either this or member_id, not
   * both.
   */
  company_id?: string | null;

  /**
   * Only return payment methods created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return payment methods created before this timestamp.
   */
  created_before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The unique identifier of the member to list payment methods for.
   */
  member_id?: string | null;
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodListResponsesCursorPage as PaymentMethodListResponsesCursorPage,
    type PaymentMethodRetrieveParams as PaymentMethodRetrieveParams,
    type PaymentMethodListParams as PaymentMethodListParams,
  };
}
