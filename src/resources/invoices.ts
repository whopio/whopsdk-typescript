// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  create(options?: RequestOptions): APIPromise<InvoiceCreateResponse | null> {
    return this._client.post('/invoices', options);
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<InvoiceRetrieveResponse> {
    return this._client.get(path`/invoices/${id}`, options);
  }

  list(options?: RequestOptions): APIPromise<InvoiceListResponse> {
    return this._client.get('/invoices', options);
  }

  void(id: string, options?: RequestOptions): APIPromise<InvoiceVoidResponse | null> {
    return this._client.post(path`/invoices/${id}/void`, options);
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

export interface InvoiceRetrieveResponse {
  id: string;

  created_at: number;

  current_plan: InvoiceRetrieveResponse.CurrentPlan;

  due_date: number | null;

  email_address: string | null;

  fetch_invoice_token: string;

  member: InvoiceRetrieveResponse.Member | null;

  number: string;

  status: 'open' | 'paid' | 'past_due' | 'void';
}

export namespace InvoiceRetrieveResponse {
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

export type InvoiceVoidResponse = boolean | null;

export declare namespace Invoices {
  export {
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
  };
}
