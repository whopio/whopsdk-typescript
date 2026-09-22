// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Setup Intent saves a buyer's payment method for later without taking money now. Create one from a confirmation token the payment elements collected in setup mode, or from a payment method already on file to re-verify it. It runs the same collection flow a payment does, so the buyer may still owe a step: 3D Secure on a card, a hosted enrollment, or linking a bank account.
 *
 * The create response is the setup intent as created, not its outcome. Hand its `client_secret` to the elements' `handleNextAction`, or poll [Retrieve status](/api-reference/beta/setup-intents/retrieve-setup-status) for how far the setup has gone and what is outstanding. Once it reaches `succeeded`, `payment_method_id` names the saved method and Create Payment charges it.
 */
export class SetupIntents extends APIResource {
  /**
   * Returns one setup intent. Related records are ids — once `status` is
   * `succeeded`, `payment_method_id` is the saved method to charge or retrieve. The
   * buyer's own token may retrieve a setup intent that belongs to it.
   */
  retrieve(
    id: string,
    params: SetupIntentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SetupIntent> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/setup_intents/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists setup intents newest first. An account API key lists its own account; a
   * user token lists every account it can read, or one account with `account_id`.
   * `client_secret` is always null on list rows — retrieve the setup intent for it.
   */
  list(
    params: SetupIntentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SetupIntentsCursorPage, SetupIntent> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/setup_intents', CursorPage<SetupIntent>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type SetupIntentsCursorPage = CursorPage<SetupIntent>;

export interface SetupIntent {
  /**
   * Setup intent ID, prefixed `sint_`.
   */
  id: string;

  /**
   * The account the payment method is saved for, prefixed `biz_`.
   */
  account_id: string | null;

  /**
   * The checkout configuration this setup was created through, prefixed `ch_`. Null
   * for a setup created through this API rather than a hosted checkout.
   */
  checkout_configuration_id: string | null;

  /**
   * The credential a buyer's surface presents to poll this setup and set its return
   * URL — hand it to the elements' `handleNextAction`. Only on setups created
   * through this API, and always null in list responses — retrieve the setup intent
   * for it.
   */
  client_secret: string | null;

  /**
   * When the setup intent was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Why the setup ended where it did, or `null` when nothing has failed. Present on
   * `canceled` — a buyer who abandoned carries no code, one refused by the provider
   * does. Dropped once the setup succeeds.
   */
  last_setup_error: SetupIntent.LastSetupError | null;

  /**
   * The buyer's member record on the account, prefixed `mber_`. Null without the
   * member:basic:read permission, unless the caller is the buyer.
   */
  member_id: string | null;

  /**
   * Your own key-value data attached when the setup intent was created.
   */
  metadata: unknown | null;

  /**
   * The method behind this setup shaped for display: a buyer-facing name, the
   * standard icon set, and the card's brand, last four, issuer identification
   * number, and expiry when it was a card. Null until a method was collected.
   */
  payment_instrument: SetupIntent.PaymentInstrument | null;

  /**
   * The saved payment method, prefixed `payt_`, ready to charge with Create Payment.
   * Null until the setup has `succeeded`.
   */
  payment_method_id: string | null;

  /**
   * The different types of payment methods that can be used.
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

  /**
   * Where the buyer lands after completing an off-site step, or `null` to leave them
   * where they are.
   */
  return_url: string | null;

  /**
   * How far the setup has got. **A 201 or 200 means we answered, not that the method
   * was saved — always branch on this.** `requires_action` — the buyer has a step
   * outstanding; hand `client_secret` to the elements or poll Retrieve setup status.
   * `processing` — the processor is deciding. `succeeded` — the method is saved, and
   * only this one means saved. `canceled` — abandoned or refused; see
   * `last_setup_error`.
   */
  status: 'processing' | 'succeeded' | 'canceled' | 'requires_action';

  /**
   * True when the buyer completed 3D Secure while saving this payment method.
   */
  three_ds_verified: boolean;

  /**
   * When the setup intent was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * The user saving the payment method. Null when the buyer is a company rather than
   * a user.
   */
  user: SetupIntent.User | null;
}

export namespace SetupIntent {
  /**
   * Why the setup ended where it did, or `null` when nothing has failed. Present on
   * `canceled` — a buyer who abandoned carries no code, one refused by the provider
   * does. Dropped once the setup succeeds.
   */
  export interface LastSetupError {
    /**
     * A machine-readable classification of the failure, e.g. `enrollment_declined`.
     * Absent when the buyer simply abandoned the setup.
     */
    code: string | null;

    /**
     * A human-readable explanation of the failure.
     */
    message: string | null;
  }

  /**
   * The method behind this setup shaped for display: a buyer-facing name, the
   * standard icon set, and the card's brand, last four, issuer identification
   * number, and expiry when it was a card. Null until a method was collected.
   */
  export interface PaymentInstrument {
    /**
     * Card payments only: the card's network, last four, and issuer identification
     * number.
     */
    card: PaymentInstrument.Card | null;

    /**
     * Buyer-facing instrument name — "Visa •••• 4242" when the card surfaced, else the
     * method's own name ("Klarna").
     */
    display_name: string;

    /**
     * The standard icon set: square and card shapes, each in light and dark colorways.
     */
    icons: PaymentInstrument.Icons;

    /**
     * Installment methods only: how many payments the charge splits into. Data, not
     * copy — compose and translate the label client-side.
     */
    installment_count: number | null;

    /**
     * The payment method type identifier, e.g. `card`, `klarna`, `apple_pay`.
     */
    payment_method_type: string;
  }

  export namespace PaymentInstrument {
    /**
     * Card payments only: the card's network, last four, and issuer identification
     * number.
     */
    export interface Card {
      /**
       * The network identifier (`visa`, `amex`, …), matching `card.networks` entries and
       * saved card payment methods. Null when the vault did not record the network.
       */
      brand: string | null;

      /**
       * The card's expiry month, 1 to 12. Null when the vault did not record it.
       */
      exp_month: number | null;

      /**
       * The card's four-digit expiry year. Null when the vault did not record it.
       */
      exp_year: number | null;

      /**
       * The issuer identification number, also called the BIN: the card's leading six or
       * eight digits, which identify the issuing bank. Null when the processor did not
       * report it.
       */
      issuer_identification_number: string | null;

      /**
       * The card's last four digits, when captured.
       */
      last4: string | null;
    }

    /**
     * The standard icon set: square and card shapes, each in light and dark colorways.
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
   * The user saving the payment method. Null when the buyer is a company rather than
   * a user.
   */
  export interface User {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    profile_picture: User.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace User {
    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    export interface ProfilePicture {
      /**
       * Avatar image URL. Always present — a generated placeholder when the user set no
       * picture.
       */
      url: string;
    }
  }
}

/**
 * The status of the setup intent.
 */
export type SetupIntentStatus = 'processing' | 'succeeded' | 'canceled' | 'requires_action';

export interface SetupIntentRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface SetupIntentListParams extends CursorPageParams {
  /**
   * Query param: Only setup intents for this account, prefixed `biz_`.
   */
  account_id?: string;

  /**
   * Query param: Return results before this cursor. Use `page_info.start_cursor`
   * from the previous response to fetch the previous page.
   */
  before?: string;

  /**
   * Query param: Only setup intents created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only setup intents created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Number of results to return from the start of the range.
   */
  first?: number;

  /**
   * Query param: Number of results to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort by.
   */
  order?: 'created_at';

  /**
   * Query param: Only setup intents in this state.
   */
  status?: 'processing' | 'succeeded' | 'canceled' | 'requires_action';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace SetupIntents {
  export {
    type SetupIntent as SetupIntent,
    type SetupIntentStatus as SetupIntentStatus,
    type SetupIntentsCursorPage as SetupIntentsCursorPage,
    type SetupIntentRetrieveParams as SetupIntentRetrieveParams,
    type SetupIntentListParams as SetupIntentListParams,
  };
}
