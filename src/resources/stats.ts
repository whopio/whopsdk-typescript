// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Stats
 */
export class Stats extends APIResource {
  /**
   * Describe available stats schema. Without resource returns root nodes and
   * metrics. With resource returns node columns, associations, and available
   * metrics.
   *
   * Required permissions:
   *
   * - `stats:read`
   */
  describe(
    query: StatDescribeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatDescribeResponse> {
    return this._client.get('/stats/describe', { query, ...options });
  }

  /**
   * Query an aggregated metric. Returns data grouped by period with optional
   * breakdowns.
   *
   * Required permissions:
   *
   * - `stats:read`
   */
  queryMetric(query: StatQueryMetricParams, options?: RequestOptions): APIPromise<StatQueryMetricResponse> {
    return this._client.get('/stats/metric', { query, ...options });
  }

  /**
   * Query raw data from a resource. Returns paginated rows with all columns.
   *
   * Required permissions:
   *
   * - `stats:read`
   */
  queryRaw(query: StatQueryRawParams, options?: RequestOptions): APIPromise<StatQueryRawResponse> {
    return this._client.get('/stats/raw', { query, ...options });
  }

  /**
   * Run custom SQL against a scoped resource. Use SCOPED_DATA as the table name.
   *
   * Required permissions:
   *
   * - `stats:read`
   */
  runSql(query: StatRunSqlParams, options?: RequestOptions): APIPromise<StatRunSqlResponse> {
    return this._client.get('/stats/sql', { query, ...options });
  }
}

/**
 * Root schema description showing available nodes, views, and metrics.
 */
export type StatDescribeResponse =
  | StatDescribeResponse.DescribeRoot
  | null
  | StatDescribeResponse.DescribeNode
  | null
  | StatDescribeResponse.DescribeMetric
  | null
  | StatDescribeResponse.DescribeView
  | null;

export namespace StatDescribeResponse {
  /**
   * Root schema description showing available nodes, views, and metrics.
   */
  export interface DescribeRoot {
    /**
     * Debug information.
     */
    debug: DescribeRoot.Debug | null;

    /**
     * Available metrics.
     */
    metrics: Array<DescribeRoot.Metric>;

    /**
     * Available root nodes.
     */
    nodes: Array<string>;

    /**
     * The typename of this object
     */
    typename: 'DescribeRoot';

    /**
     * Available API resource views.
     */
    views: Array<string>;
  }

  export namespace DescribeRoot {
    /**
     * Debug information.
     */
    export interface Debug {
      /**
       * Unique request identifier for debugging.
       */
      request_id: string | null;
    }

    /**
     * A metric available for querying.
     */
    export interface Metric {
      /**
       * The metric name.
       */
      name: string;

      /**
       * The node path this metric operates on.
       */
      node_path: string;

      /**
       * Query engines that support this metric.
       */
      supported_engines: Array<string>;
    }
  }

  /**
   * Description of a node (model) including its columns and associations.
   */
  export interface DescribeNode {
    /**
     * Available associations or child paths.
     */
    associations: Array<DescribeNode.Association>;

    /**
     * Available columns.
     */
    columns: Array<string>;

    /**
     * Debug information.
     */
    debug: DescribeNode.Debug | null;

    /**
     * The query engine being used.
     */
    engine: string;

    /**
     * Available metrics for this node.
     */
    metrics: Array<DescribeNode.Metric>;

    /**
     * The node path being described.
     */
    node: string;

    /**
     * Sample data rows.
     */
    sample: Array<{ [key: string]: unknown }> | null;

    /**
     * Columns that can be used for sorting.
     */
    sortable_columns: Array<string>;

    /**
     * The typename of this object
     */
    typename: 'DescribeNode';
  }

  export namespace DescribeNode {
    /**
     * An association or child path available for navigation.
     */
    export interface Association {
      /**
       * The event name (for event type).
       */
      event_name: string | null;

      /**
       * The associated model class name (for model associations).
       */
      model: string | null;

      /**
       * The association name.
       */
      name: string;

      /**
       * The full path (for event associations).
       */
      path: string | null;

      /**
       * The type (belongs_to, has_many, has_one, event, namespace).
       */
      type: string;
    }

    /**
     * Debug information.
     */
    export interface Debug {
      /**
       * Unique request identifier for debugging.
       */
      request_id: string | null;
    }

    /**
     * A metric available for querying.
     */
    export interface Metric {
      /**
       * The metric name.
       */
      name: string;

      /**
       * The node path this metric operates on.
       */
      node_path: string;

      /**
       * Query engines that support this metric.
       */
      supported_engines: Array<string>;
    }
  }

  /**
   * Description of a metric including its configuration and SQL.
   */
  export interface DescribeMetric {
    /**
     * Columns that can be used for breakdowns.
     */
    breakdownable_columns: Array<string>;

    /**
     * Debug information.
     */
    debug: DescribeMetric.Debug | null;

    /**
     * The query engine being used.
     */
    engine: string;

    /**
     * Columns that can be used for filtering.
     */
    filterable_columns: Array<string>;

    /**
     * The metric name.
     */
    metric: string;

    /**
     * The node path this metric operates on.
     */
    node: string;

    /**
     * The generated SQL query.
     */
    sql: string | null;

    /**
     * Query engines that support this metric.
     */
    supported_engines: Array<string>;

    /**
     * The timestamp column used for time filtering.
     */
    timestamp_column: string;

    /**
     * The typename of this object
     */
    typename: 'DescribeMetric';
  }

  export namespace DescribeMetric {
    /**
     * Debug information.
     */
    export interface Debug {
      /**
       * Unique request identifier for debugging.
       */
      request_id: string | null;
    }
  }

  /**
   * Description of an API resource view including its columns and associations.
   */
  export interface DescribeView {
    /**
     * Available associations.
     */
    associations: Array<DescribeView.Association>;

    /**
     * Available columns.
     */
    columns: Array<string>;

    /**
     * Debug information.
     */
    debug: DescribeView.Debug | null;

    /**
     * The query engine being used.
     */
    engine: string;

    /**
     * Available metrics.
     */
    metrics: Array<DescribeView.Metric>;

    /**
     * The underlying model class.
     */
    model: string;

    /**
     * The API resource name.
     */
    resource: string;

    /**
     * Sample data rows.
     */
    sample: Array<{ [key: string]: unknown }> | null;

    /**
     * Columns that can be used for sorting.
     */
    sortable_columns: Array<string>;

    /**
     * The typename of this object
     */
    typename: 'DescribeView';

    /**
     * The view name being described.
     */
    view: string;
  }

  export namespace DescribeView {
    /**
     * An association or child path available for navigation.
     */
    export interface Association {
      /**
       * The event name (for event type).
       */
      event_name: string | null;

      /**
       * The associated model class name (for model associations).
       */
      model: string | null;

      /**
       * The association name.
       */
      name: string;

      /**
       * The full path (for event associations).
       */
      path: string | null;

      /**
       * The type (belongs_to, has_many, has_one, event, namespace).
       */
      type: string;
    }

    /**
     * Debug information.
     */
    export interface Debug {
      /**
       * Unique request identifier for debugging.
       */
      request_id: string | null;
    }

    /**
     * A metric available for querying.
     */
    export interface Metric {
      /**
       * The metric name.
       */
      name: string;

      /**
       * The node path this metric operates on.
       */
      node_path: string;

      /**
       * Query engines that support this metric.
       */
      supported_engines: Array<string>;
    }
  }
}

/**
 * Result from a stats query (raw, metric, or SQL).
 */
export interface StatQueryMetricResponse {
  /**
   * Column names in the order they appear in each data row.
   */
  columns: Array<string> | null;

  /**
   * Array of data rows, where each row is an array of values matching the columns
   * order.
   */
  data: Array<{ [key: string]: unknown }> | null;

  /**
   * Debug information including engine and SQL.
   */
  debug: StatQueryMetricResponse.Debug | null;

  /**
   * The node path that was queried.
   */
  node: string | null;

  /**
   * Pagination information.
   */
  pagination: StatQueryMetricResponse.Pagination | null;

  /**
   * The typename of this object
   */
  typename: 'Result';
}

export namespace StatQueryMetricResponse {
  /**
   * Debug information including engine and SQL.
   */
  export interface Debug {
    /**
     * The query engine used.
     */
    engine: string | null;

    /**
     * Unique request identifier for debugging.
     */
    request_id: string | null;

    /**
     * The generated SQL query (with IDs sanitized).
     */
    sql: string | null;
  }

  /**
   * Pagination information.
   */
  export interface Pagination {
    /**
     * Cursor for the next page of results.
     */
    next_cursor: string | null;
  }
}

/**
 * Result from a stats query (raw, metric, or SQL).
 */
export interface StatQueryRawResponse {
  /**
   * Column names in the order they appear in each data row.
   */
  columns: Array<string> | null;

  /**
   * Array of data rows, where each row is an array of values matching the columns
   * order.
   */
  data: Array<{ [key: string]: unknown }> | null;

  /**
   * Debug information including engine and SQL.
   */
  debug: StatQueryRawResponse.Debug | null;

  /**
   * The node path that was queried.
   */
  node: string | null;

  /**
   * Pagination information.
   */
  pagination: StatQueryRawResponse.Pagination | null;
}

export namespace StatQueryRawResponse {
  /**
   * Debug information including engine and SQL.
   */
  export interface Debug {
    /**
     * The query engine used.
     */
    engine: string | null;

    /**
     * Unique request identifier for debugging.
     */
    request_id: string | null;

    /**
     * The generated SQL query (with IDs sanitized).
     */
    sql: string | null;
  }

  /**
   * Pagination information.
   */
  export interface Pagination {
    /**
     * Cursor for the next page of results.
     */
    next_cursor: string | null;
  }
}

/**
 * Result from a stats query (raw, metric, or SQL).
 */
export interface StatRunSqlResponse {
  /**
   * Column names in the order they appear in each data row.
   */
  columns: Array<string> | null;

  /**
   * Array of data rows, where each row is an array of values matching the columns
   * order.
   */
  data: Array<{ [key: string]: unknown }> | null;

  /**
   * Debug information including engine and SQL.
   */
  debug: StatRunSqlResponse.Debug | null;

  /**
   * The node path that was queried.
   */
  node: string | null;

  /**
   * Pagination information.
   */
  pagination: StatRunSqlResponse.Pagination | null;

  /**
   * The typename of this object
   */
  typename: 'Result';
}

export namespace StatRunSqlResponse {
  /**
   * Debug information including engine and SQL.
   */
  export interface Debug {
    /**
     * The query engine used.
     */
    engine: string | null;

    /**
     * Unique request identifier for debugging.
     */
    request_id: string | null;

    /**
     * The generated SQL query (with IDs sanitized).
     */
    sql: string | null;
  }

  /**
   * Pagination information.
   */
  export interface Pagination {
    /**
     * Cursor for the next page of results.
     */
    next_cursor: string | null;
  }
}

export interface StatDescribeParams {
  /**
   * Scope query to a specific company.
   */
  company_id?: string | null;

  /**
   * Resource path using : as separator (e.g., 'receipts', 'payments:membership',
   * 'receipts:gross_revenue').
   */
  resource?: string | null;

  /**
   * Scope query to a specific user.
   */
  user_id?: string | null;
}

export interface StatQueryMetricParams {
  /**
   * Metric resource using : as separator (e.g., 'receipts:gross_revenue',
   * 'members:new_users').
   */
  resource: string;

  /**
   * Columns to break down the metric by.
   */
  breakdowns?: Array<string> | null;

  /**
   * Scope query to a specific company.
   */
  company_id?: string | null;

  /**
   * Key-value pairs to filter the data.
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Start of time range (unix timestamp).
   */
  from?: string | null;

  /**
   * Time granularity (daily, weekly, monthly).
   */
  granularity?: string | null;

  /**
   * IANA timezone for period bucketing (e.g. 'America/New_York'). Defaults to UTC.
   * Only applies to ClickHouse metrics.
   */
  time_zone?: string | null;

  /**
   * End of time range (unix timestamp).
   */
  to?: string | null;

  /**
   * Scope query to a specific user.
   */
  user_id?: string | null;
}

export interface StatQueryRawParams {
  /**
   * Resource path using : as separator (e.g., 'members', 'payments:membership').
   */
  resource: string;

  /**
   * Scope query to a specific company.
   */
  company_id?: string | null;

  /**
   * Pagination cursor for next page.
   */
  cursor?: string | null;

  /**
   * Start of time range (unix timestamp).
   */
  from?: string | null;

  /**
   * Number of records to return (max 10000).
   */
  limit?: number | null;

  /**
   * Column to sort by.
   */
  sort?: string | null;

  /**
   * The direction of the sort.
   */
  sort_direction?: Shared.Direction | null;

  /**
   * End of time range (unix timestamp).
   */
  to?: string | null;

  /**
   * Scope query to a specific user.
   */
  user_id?: string | null;
}

export interface StatRunSqlParams {
  /**
   * Resource path using : as separator (e.g., 'receipts', 'payments:membership').
   */
  resource: string;

  /**
   * SQL query. Use SCOPED_DATA as the table name.
   */
  sql: string;

  /**
   * Scope query to a specific company.
   */
  company_id?: string | null;

  /**
   * Pagination cursor for next page.
   */
  cursor?: string | null;

  /**
   * Start of time range (unix timestamp).
   */
  from?: string | null;

  /**
   * Number of records to return (max 10000).
   */
  limit?: number | null;

  /**
   * Column to sort by.
   */
  sort?: string | null;

  /**
   * The direction of the sort.
   */
  sort_direction?: Shared.Direction | null;

  /**
   * End of time range (unix timestamp).
   */
  to?: string | null;

  /**
   * Scope query to a specific user.
   */
  user_id?: string | null;
}

export declare namespace Stats {
  export {
    type StatDescribeResponse as StatDescribeResponse,
    type StatQueryMetricResponse as StatQueryMetricResponse,
    type StatQueryRawResponse as StatQueryRawResponse,
    type StatRunSqlResponse as StatRunSqlResponse,
    type StatDescribeParams as StatDescribeParams,
    type StatQueryMetricParams as StatQueryMetricParams,
    type StatQueryRawParams as StatQueryRawParams,
    type StatRunSqlParams as StatRunSqlParams,
  };
}
