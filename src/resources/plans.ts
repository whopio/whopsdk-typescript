// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Plans extends APIResource {}

/**
 * The different font families available for checkout pages.
 */
export type CheckoutFont = 'system' | 'roboto' | 'open_sans';

/**
 * The different border-radius styles available for checkout pages.
 */
export type CheckoutShape = 'rounded' | 'pill' | 'rectangular';

export declare namespace Plans {
  export { type CheckoutFont as CheckoutFont, type CheckoutShape as CheckoutShape };
}
