// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseLessonInteractions extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<CourseLessonInteractionRetrieveResponse> {
    return this._client.get(path`/course_lesson_interactions/${id}`, options);
  }

  list(
    query: CourseLessonInteractionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CourseLessonInteractionListResponse> {
    return this._client.get('/course_lesson_interactions', { query, ...options });
  }
}

/**
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteractionRetrieveResponse {
  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  id: string;

  /**
   * Represents `true` or `false` values.
   */
  completed: boolean;

  /**
   * A valid timestamp in seconds, transported as an integer
   */
  created_at: number;

  /**
   * A lesson from the courses app
   */
  lesson: CourseLessonInteractionRetrieveResponse.Lesson;

  /**
   * An object representing a (sanitized) user of the site.
   */
  user: CourseLessonInteractionRetrieveResponse.User;
}

export namespace CourseLessonInteractionRetrieveResponse {
  /**
   * A lesson from the courses app
   */
  export interface Lesson {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    title: string;
  }

  /**
   * An object representing a (sanitized) user of the site.
   */
  export interface User {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    name: string | null;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    username: string;
  }
}

/**
 * The connection type for LessonInteraction.
 */
export interface CourseLessonInteractionListResponse {
  data: Array<CourseLessonInteractionListResponse.Data | null> | null;

  /**
   * Information about pagination in a connection.
   */
  page_info: CourseLessonInteractionListResponse.PageInfo;
}

export namespace CourseLessonInteractionListResponse {
  /**
   * A lesson interaction tracking user progress in courses
   */
  export interface Data {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * Represents `true` or `false` values.
     */
    completed: boolean;

    /**
     * A valid timestamp in seconds, transported as an integer
     */
    created_at: number;

    /**
     * A lesson from the courses app
     */
    lesson: Data.Lesson;

    /**
     * An object representing a (sanitized) user of the site.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * A lesson from the courses app
     */
    export interface Lesson {
      /**
       * Represents a unique identifier that is Base64 obfuscated. It is often used to
       * refetch an object or as key for a cache. The ID type appears in a JSON response
       * as a String; however, it is not intended to be human-readable. When expected as
       * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
       * input value will be accepted as an ID.
       */
      id: string;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      title: string;
    }

    /**
     * An object representing a (sanitized) user of the site.
     */
    export interface User {
      /**
       * Represents a unique identifier that is Base64 obfuscated. It is often used to
       * refetch an object or as key for a cache. The ID type appears in a JSON response
       * as a String; however, it is not intended to be human-readable. When expected as
       * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
       * input value will be accepted as an ID.
       */
      id: string;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      name: string | null;

      /**
       * Represents textual data as UTF-8 character sequences. This type is most often
       * used by GraphQL to represent free-form human-readable text.
       */
      username: string;
    }
  }

  /**
   * Information about pagination in a connection.
   */
  export interface PageInfo {
    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    end_cursor: string | null;

    /**
     * Represents `true` or `false` values.
     */
    has_next_page: boolean;

    /**
     * Represents `true` or `false` values.
     */
    has_previous_page: boolean;

    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    start_cursor: string | null;
  }
}

export interface CourseLessonInteractionListParams {
  /**
   * Represents textual data as UTF-8 character sequences. This type is most often
   * used by GraphQL to represent free-form human-readable text.
   */
  after?: string | null;

  /**
   * Represents textual data as UTF-8 character sequences. This type is most often
   * used by GraphQL to represent free-form human-readable text.
   */
  before?: string | null;

  /**
   * Represents `true` or `false` values.
   */
  completed?: boolean | null;

  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  course_id?: string | null;

  /**
   * Represents non-fractional signed whole numeric values. Int can represent values
   * between -(2^31) and 2^31 - 1.
   */
  first?: number | null;

  /**
   * Represents non-fractional signed whole numeric values. Int can represent values
   * between -(2^31) and 2^31 - 1.
   */
  last?: number | null;

  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  lesson_id?: string | null;

  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  user_id?: string | null;
}

export declare namespace CourseLessonInteractions {
  export {
    type CourseLessonInteractionRetrieveResponse as CourseLessonInteractionRetrieveResponse,
    type CourseLessonInteractionListResponse as CourseLessonInteractionListResponse,
    type CourseLessonInteractionListParams as CourseLessonInteractionListParams,
  };
}
