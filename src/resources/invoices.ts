// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Invoices extends APIResource {
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse | null> {
    return this._client.post('/invoices', { body, ...options });
  }

  list(query: InvoiceListParams, options?: RequestOptions): APIPromise<InvoiceListResponse> {
    return this._client.get('/invoices', { query, ...options });
  }
}

export interface InvoiceCreateResponse {
  checkout_job_id: string | null;

  invoice: InvoiceCreateResponse.Invoice | null;
}

export namespace InvoiceCreateResponse {
  export interface Invoice {
    id: string;

    created_at: number;

    current_plan: Invoice.CurrentPlan;

    due_date: number | null;

    email_address: string | null;

    fetch_invoice_token: string;

    member: Invoice.Member | null;

    number: string;

    status: 'open' | 'paid' | 'past_due' | 'void';
  }

  export namespace Invoice {
    export interface CurrentPlan {
      id: string;

      base_currency:
        | 'usd'
        | 'sgd'
        | 'inr'
        | 'aud'
        | 'brl'
        | 'cad'
        | 'dkk'
        | 'eur'
        | 'nok'
        | 'gbp'
        | 'sek'
        | 'chf'
        | 'hkd'
        | 'huf'
        | 'jpy'
        | 'mxn'
        | 'myr'
        | 'pln'
        | 'czk'
        | 'nzd'
        | 'aed'
        | 'eth'
        | 'ape'
        | 'cop'
        | 'ron'
        | 'thb'
        | 'bgn'
        | 'idr'
        | 'dop'
        | 'php'
        | 'try'
        | 'krw'
        | 'twd'
        | 'vnd'
        | 'pkr'
        | 'clp'
        | 'uyu'
        | 'ars'
        | 'zar'
        | 'dzd'
        | 'tnd'
        | 'mad'
        | 'kes'
        | 'kwd'
        | 'jod'
        | 'all'
        | 'xcd'
        | 'amd'
        | 'bsd'
        | 'bhd'
        | 'bob'
        | 'bam'
        | 'khr'
        | 'crc'
        | 'xof'
        | 'egp'
        | 'etb'
        | 'gmd'
        | 'ghs'
        | 'gtq'
        | 'gyd'
        | 'ils'
        | 'jmd'
        | 'mop'
        | 'mga'
        | 'mur'
        | 'mdl'
        | 'mnt'
        | 'nad'
        | 'ngn'
        | 'mkd'
        | 'omr'
        | 'pyg'
        | 'pen'
        | 'qar'
        | 'rwf'
        | 'sar'
        | 'rsd'
        | 'lkr'
        | 'tzs'
        | 'ttd'
        | 'uzs'
        | 'rub'
        | 'btc';

      formatted_price: string;
    }

    export interface Member {
      id: string;

      email: string | null;

      name: string | null;

      username: string | null;
    }
  }
}

export interface InvoiceListResponse {
  data: Array<InvoiceListResponse.Data | null> | null;

  page_info: InvoiceListResponse.PageInfo;
}

export namespace InvoiceListResponse {
  export interface Data {
    id: string;

    created_at: number;

    current_plan: Data.CurrentPlan;

    due_date: number | null;

    email_address: string | null;

    fetch_invoice_token: string;

    member: Data.Member | null;

    number: string;

    status: 'open' | 'paid' | 'past_due' | 'void';
  }

  export namespace Data {
    export interface CurrentPlan {
      id: string;

      base_currency:
        | 'usd'
        | 'sgd'
        | 'inr'
        | 'aud'
        | 'brl'
        | 'cad'
        | 'dkk'
        | 'eur'
        | 'nok'
        | 'gbp'
        | 'sek'
        | 'chf'
        | 'hkd'
        | 'huf'
        | 'jpy'
        | 'mxn'
        | 'myr'
        | 'pln'
        | 'czk'
        | 'nzd'
        | 'aed'
        | 'eth'
        | 'ape'
        | 'cop'
        | 'ron'
        | 'thb'
        | 'bgn'
        | 'idr'
        | 'dop'
        | 'php'
        | 'try'
        | 'krw'
        | 'twd'
        | 'vnd'
        | 'pkr'
        | 'clp'
        | 'uyu'
        | 'ars'
        | 'zar'
        | 'dzd'
        | 'tnd'
        | 'mad'
        | 'kes'
        | 'kwd'
        | 'jod'
        | 'all'
        | 'xcd'
        | 'amd'
        | 'bsd'
        | 'bhd'
        | 'bob'
        | 'bam'
        | 'khr'
        | 'crc'
        | 'xof'
        | 'egp'
        | 'etb'
        | 'gmd'
        | 'ghs'
        | 'gtq'
        | 'gyd'
        | 'ils'
        | 'jmd'
        | 'mop'
        | 'mga'
        | 'mur'
        | 'mdl'
        | 'mnt'
        | 'nad'
        | 'ngn'
        | 'mkd'
        | 'omr'
        | 'pyg'
        | 'pen'
        | 'qar'
        | 'rwf'
        | 'sar'
        | 'rsd'
        | 'lkr'
        | 'tzs'
        | 'ttd'
        | 'uzs'
        | 'rub'
        | 'btc';

      formatted_price: string;
    }

    export interface Member {
      id: string;

      email: string | null;

      name: string | null;

      username: string | null;
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface InvoiceCreateParams {
  collection_method: 'send_invoice' | 'charge_automatically';

  due_date: number;

  plan: InvoiceCreateParams.Plan;

  access_pass?: InvoiceCreateParams.AccessPass | null;

  access_pass_id?: string | null;

  charge_buyer_fee?: boolean | null;

  client_mutation_id?: string | null;

  customer_name?: string | null;

  email_address?: string | null;

  member_id?: string | null;

  payment_token_id?: string | null;
}

export namespace InvoiceCreateParams {
  export interface Plan {
    ach_payments?: boolean | null;

    base_currency?:
      | 'usd'
      | 'sgd'
      | 'inr'
      | 'aud'
      | 'brl'
      | 'cad'
      | 'dkk'
      | 'eur'
      | 'nok'
      | 'gbp'
      | 'sek'
      | 'chf'
      | 'hkd'
      | 'huf'
      | 'jpy'
      | 'mxn'
      | 'myr'
      | 'pln'
      | 'czk'
      | 'nzd'
      | 'aed'
      | 'eth'
      | 'ape'
      | 'cop'
      | 'ron'
      | 'thb'
      | 'bgn'
      | 'idr'
      | 'dop'
      | 'php'
      | 'try'
      | 'krw'
      | 'twd'
      | 'vnd'
      | 'pkr'
      | 'clp'
      | 'uyu'
      | 'ars'
      | 'zar'
      | 'dzd'
      | 'tnd'
      | 'mad'
      | 'kes'
      | 'kwd'
      | 'jod'
      | 'all'
      | 'xcd'
      | 'amd'
      | 'bsd'
      | 'bhd'
      | 'bob'
      | 'bam'
      | 'khr'
      | 'crc'
      | 'xof'
      | 'egp'
      | 'etb'
      | 'gmd'
      | 'ghs'
      | 'gtq'
      | 'gyd'
      | 'ils'
      | 'jmd'
      | 'mop'
      | 'mga'
      | 'mur'
      | 'mdl'
      | 'mnt'
      | 'nad'
      | 'ngn'
      | 'mkd'
      | 'omr'
      | 'pyg'
      | 'pen'
      | 'qar'
      | 'rwf'
      | 'sar'
      | 'rsd'
      | 'lkr'
      | 'tzs'
      | 'ttd'
      | 'uzs'
      | 'rub'
      | 'btc'
      | null;

    billing_period?: number | null;

    card_payments?: boolean | null;

    coinbase_commerce_accepted?: boolean | null;

    custom_fields?: Array<Plan.CustomField> | null;

    description?: string | null;

    expiration_days?: number | null;

    initial_price?: number | null;

    internal_notes?: string | null;

    offer_cancel_discount?: boolean | null;

    paypal_accepted?: boolean | null;

    plan_type?: 'renewal' | 'one_time' | null;

    platform_balance_accepted?: boolean | null;

    redirect_url?: string | null;

    release_method?: 'buy_now' | 'waitlist' | 'raffle' | null;

    release_method_settings?: Plan.ReleaseMethodSettings | null;

    renewal_price?: number | null;

    requirements?: Plan.Requirements | null;

    split_pay_required_payments?: number | null;

    splitit_accepted?: boolean | null;

    stock?: number | null;

    trial_period_days?: number | null;

    unlimited_stock?: boolean | null;

    visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link' | null;
  }

  export namespace Plan {
    export interface CustomField {
      field_type: 'text';

      name: string;

      id?: string | null;

      order?: number | null;

      placeholder?: string | null;

      required?: boolean | null;
    }

    export interface ReleaseMethodSettings {
      expires_at?: number | null;

      max_entries?: number | null;

      nft_weighted_entries?: boolean | null;

      starts_at?: number | null;
    }

    export interface Requirements {
      custom_password?: string;

      email_required?: true;

      ownership_of_access_passes?: Array<string>;
    }
  }

  export interface AccessPass {
    title: string;

    product_tax_code_id?: string | null;
  }
}

export interface InvoiceListParams {
  company_id: string;

  after?: string | null;

  before?: string | null;

  direction?: 'asc' | 'desc' | null;

  filters?: InvoiceListParams.Filters | null;

  first?: number | null;

  last?: number | null;

  order?: 'id' | 'created_at' | 'due_date' | null;
}

export namespace InvoiceListParams {
  export interface Filters {
    access_pass_ids?: Array<string> | null;

    collection_methods?: Array<'send_invoice' | 'charge_automatically'> | null;

    statuses?: Array<'open' | 'paid' | 'past_due' | 'void'> | null;
  }
}

export declare namespace Invoices {
  export {
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
