// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Payment methods
 */
export class PaymentMethods extends APIResource {
  /**
   * Retrieves the details of an existing payment method. Addresses a member's wallet
   * when member_id or company_id is given, otherwise your own.
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
   * Returns a paginated list of payment methods for a member or company, or for the
   * authenticated user when neither is given, with optional filtering by creation
   * date. A payment method is a stored representation of how a customer intends to
   * pay, such as a card, bank account, or digital wallet.
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
  | PaymentMethodRetrieveResponse.SepaDebitPaymentMethod
  | PaymentMethodRetrieveResponse.PlatformBalancePaymentMethod;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: BasePaymentMethod.Icons;

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

  export namespace BasePaymentMethod {
    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }
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
     * Whether this card has the payer identity document required by its payment
     * provider.
     */
    has_payer_document: boolean;

    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: CardPaymentMethod.Icons;

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
       * Whether the card is past its expiration month. An expired card cannot take a new
       * charge.
       */
      expired: boolean;

      /**
       * A stable identifier for the underlying card. Two payment methods with the same
       * fingerprint are the same card. Null if not available.
       */
      fingerprint: string | null;

      /**
       * The funding types of a card
       */
      funding_type: 'credit' | 'debit' | 'prepaid' | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;

      /**
       * Whether this card was verified with 3D Secure, either when it was saved or on a
       * payment that used it.
       */
      three_ds_verified: boolean;
    }

    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: UsBankAccountPaymentMethod.Icons;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: CashappPaymentMethod.Icons;

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

    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: IdealPaymentMethod.Icons;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: SepaDebitPaymentMethod.Icons;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

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

  /**
   * A Whop balance the buyer can pay with — their own, or an account's they hold
   * permission to spend. Charged by naming its ledger id on a `saved` confirmation
   * token — it is a live wallet, not a stored credential, so it cannot be vaulted or
   * charged off-session.
   */
  export interface PlatformBalancePaymentMethod {
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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: PlatformBalancePaymentMethod.Icons;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * What is available to spend, and whether the account may spend it.
     */
    platform_balance: PlatformBalancePaymentMethod.PlatformBalance;

    /**
     * The typename of this object
     */
    typename: 'PlatformBalancePaymentMethod';
  }

  export namespace PlatformBalancePaymentMethod {
    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

    /**
     * What is available to spend, and whether the account may spend it.
     */
    export interface PlatformBalance {
      /**
       * The account whose wallet this is. Null for the buyer's own personal wallet. A
       * buyer sees an account's balance here when they hold permission to spend it, so a
       * list can hold several — their own and one per account they are on.
       */
      account: PlatformBalance.Account | null;

      /**
       * Available amount per currency. Read from the balance cache, so it is indicative
       * — the charge revalidates against settled funds and may still refuse.
       */
      balances: Array<PlatformBalance.Balance>;

      /**
       * Whether this balance can pay right now, which here means only whether it holds
       * funds — an account blocked from spending is not listed at all. A zero balance is
       * still returned so a client can show it as an option the buyer could top up.
       */
      spendable: boolean;
    }

    export namespace PlatformBalance {
      /**
       * The account whose wallet this is. Null for the buyer's own personal wallet. A
       * buyer sees an account's balance here when they hold permission to spend it, so a
       * list can hold several — their own and one per account they are on.
       */
      export interface Account {
        /**
         * The unique identifier for the company.
         */
        id: string;

        /**
         * The company's logo.
         */
        logo: Account.Logo | null;

        /**
         * The display name of the company shown to customers.
         */
        title: string;
      }

      export namespace Account {
        /**
         * The company's logo.
         */
        export interface Logo {
          /**
           * A pre-optimized URL for rendering this attachment on the client. This should be
           * used for displaying attachments in apps.
           */
          url: string | null;
        }
      }

      /**
       * An amount of money. Never a bare number, because a bare number cannot answer the
       * two questions a client has to answer to render it: what currency is this, and
       * how many digits do I write? The second is stated twice rather than derived,
       * because the digits the amount CARRIES and the digits to SHOW differ in COP —
       * charged in centavos, written in whole pesos. Formatting is deliberately left to
       * the caller: the number belongs in the buyer's locale, and this API does not know
       * it.
       */
      export interface Balance {
        /**
         * The amount in major units, as an exact decimal string — `"10.00"` is ten
         * dollars. A string so no float rounds it in transit.
         */
        amount: string;

        /**
         * Three-letter ISO 4217 currency code, lowercase.
         */
        currency: Shared.Currency;

        /**
         * How many decimal places the amount CARRIES — the precision the charge itself
         * runs at.
         */
        decimals: number;

        /**
         * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
         * not always: COP is charged in centavos but written in whole pesos, so it is `2`
         * and `0`. Format the number in your own locale using this.
         */
        display_decimals: number;
      }
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
  | PaymentMethodListResponse.SepaDebitPaymentMethod
  | PaymentMethodListResponse.PlatformBalancePaymentMethod;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: BasePaymentMethod.Icons;

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

  export namespace BasePaymentMethod {
    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }
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
     * Whether this card has the payer identity document required by its payment
     * provider.
     */
    has_payer_document: boolean;

    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: CardPaymentMethod.Icons;

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
       * Whether the card is past its expiration month. An expired card cannot take a new
       * charge.
       */
      expired: boolean;

      /**
       * A stable identifier for the underlying card. Two payment methods with the same
       * fingerprint are the same card. Null if not available.
       */
      fingerprint: string | null;

      /**
       * The funding types of a card
       */
      funding_type: 'credit' | 'debit' | 'prepaid' | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;

      /**
       * Whether this card was verified with 3D Secure, either when it was saved or on a
       * payment that used it.
       */
      three_ds_verified: boolean;
    }

    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: UsBankAccountPaymentMethod.Icons;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: CashappPaymentMethod.Icons;

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

    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: IdealPaymentMethod.Icons;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: SepaDebitPaymentMethod.Icons;

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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

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

  /**
   * A Whop balance the buyer can pay with — their own, or an account's they hold
   * permission to spend. Charged by naming its ledger id on a `saved` confirmation
   * token — it is a live wallet, not a stored credential, so it cannot be vaulted or
   * charged off-session.
   */
  export interface PlatformBalancePaymentMethod {
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
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    icons: PlatformBalancePaymentMethod.Icons;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * What is available to spend, and whether the account may spend it.
     */
    platform_balance: PlatformBalancePaymentMethod.PlatformBalance;

    /**
     * The typename of this object
     */
    typename: 'PlatformBalancePaymentMethod';
  }

  export namespace PlatformBalancePaymentMethod {
    /**
     * Every rendition of the icon to display this payment method with. A saved card
     * carries its brand's icon (Visa, Mastercard, ...) rather than the generic card
     * art.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }

    /**
     * What is available to spend, and whether the account may spend it.
     */
    export interface PlatformBalance {
      /**
       * The account whose wallet this is. Null for the buyer's own personal wallet. A
       * buyer sees an account's balance here when they hold permission to spend it, so a
       * list can hold several — their own and one per account they are on.
       */
      account: PlatformBalance.Account | null;

      /**
       * Available amount per currency. Read from the balance cache, so it is indicative
       * — the charge revalidates against settled funds and may still refuse.
       */
      balances: Array<PlatformBalance.Balance>;

      /**
       * Whether this balance can pay right now, which here means only whether it holds
       * funds — an account blocked from spending is not listed at all. A zero balance is
       * still returned so a client can show it as an option the buyer could top up.
       */
      spendable: boolean;
    }

    export namespace PlatformBalance {
      /**
       * The account whose wallet this is. Null for the buyer's own personal wallet. A
       * buyer sees an account's balance here when they hold permission to spend it, so a
       * list can hold several — their own and one per account they are on.
       */
      export interface Account {
        /**
         * The unique identifier for the company.
         */
        id: string;

        /**
         * The company's logo.
         */
        logo: Account.Logo | null;

        /**
         * The display name of the company shown to customers.
         */
        title: string;
      }

      export namespace Account {
        /**
         * The company's logo.
         */
        export interface Logo {
          /**
           * A pre-optimized URL for rendering this attachment on the client. This should be
           * used for displaying attachments in apps.
           */
          url: string | null;
        }
      }

      /**
       * An amount of money. Never a bare number, because a bare number cannot answer the
       * two questions a client has to answer to render it: what currency is this, and
       * how many digits do I write? The second is stated twice rather than derived,
       * because the digits the amount CARRIES and the digits to SHOW differ in COP —
       * charged in centavos, written in whole pesos. Formatting is deliberately left to
       * the caller: the number belongs in the buyer's locale, and this API does not know
       * it.
       */
      export interface Balance {
        /**
         * The amount in major units, as an exact decimal string — `"10.00"` is ten
         * dollars. A string so no float rounds it in transit.
         */
        amount: string;

        /**
         * Three-letter ISO 4217 currency code, lowercase.
         */
        currency: Shared.Currency;

        /**
         * How many decimal places the amount CARRIES — the precision the charge itself
         * runs at.
         */
        decimals: number;

        /**
         * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
         * not always: COP is charged in centavos but written in whole pesos, so it is `2`
         * and `0`. Format the number in your own locale using this.
         */
        display_decimals: number;
      }
    }
  }
}

export interface PaymentMethodRetrieveParams {
  /**
   * The unique identifier of the company. Provide either this or member_id, not
   * both. Omit both to address your own saved payment methods.
   */
  company_id?: string;

  /**
   * The unique identifier of the member. Provide either this or company_id, not
   * both. Omit both to address your own saved payment methods.
   */
  member_id?: string;
}

export interface PaymentMethodListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string;

  /**
   * Filter by whether the stored credential has permanently stopped charging, such
   * as a vault entry its provider closed.
   */
  broken?: boolean;

  /**
   * Only return cards on these networks, such as the networks the seller accepts.
   * Payment methods that are not cards are unaffected.
   */
  card_brands?: Array<PaymentsAPI.CardBrands>;

  /**
   * Only return cards funded this way. A card whose funding could not be determined
   * is excluded, and payment methods that are not cards are unaffected.
   */
  card_funding_types?: Array<'credit' | 'debit' | 'prepaid'>;

  /**
   * The unique identifier of the company. Provide either this or member_id, not
   * both. Omit both to address your own saved payment methods.
   */
  company_id?: string;

  /**
   * Only return payment methods created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return payment methods created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction for ordering results, either ascending or descending.
   */
  direction?: Shared.Direction;

  /**
   * Filter by expiry. Only a card can expire, so `false` keeps every payment method
   * that is not past its expiration month and `true` returns expired cards alone.
   */
  expired?: boolean;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number;

  /**
   * Only return methods that can be charged this way after the buyer leaves. A
   * checkout that renews should pass `off_session`, which drops the buyer's platform
   * balance — a balance settles against the ledger at the time of purchase and
   * cannot be charged later.
   */
  future_usage?: 'off_session' | 'on_session';

  /**
   * Filter cards by whether they carry the payer identity document their payment
   * provider requires. Payment methods that are not cards are unaffected.
   */
  has_payer_document?: boolean;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number;

  /**
   * The unique identifier of the member to list payment methods for. Omit this and
   * company_id to list your own saved payment methods.
   */
  member_id?: string;

  /**
   * Only return payment methods of these types. Pass the eligible `type` values from
   * the payment method types catalogue so the list holds nothing the purchase cannot
   * take. An empty list returns no payment methods.
   */
  payment_method_types?: Array<PaymentsAPI.PaymentMethodTypes>;
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
