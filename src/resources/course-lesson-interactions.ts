// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseLessonInteractions extends APIResource {
  retrieve(
    pathID: string,
    query: CourseLessonInteractionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CourseLessonInteractionRetrieveResponse> {
    return this._client.get(path`/course_lesson_interactions/${pathID}`, { query, ...options });
  }

  list(
    query: CourseLessonInteractionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CourseLessonInteractionListResponse> {
    return this._client.get('/course_lesson_interactions', { query, ...options });
  }
}

export interface CourseLessonInteractionRetrieveResponse {
  id: string;

  completed: boolean;

  created_at: number;

  lesson: CourseLessonInteractionRetrieveResponse.Lesson;

  user: CourseLessonInteractionRetrieveResponse.User;
}

export namespace CourseLessonInteractionRetrieveResponse {
  export interface Lesson {
    id: string;

    title: string;
  }

  export interface User {
    id: string;

    name: string | null;

    username: string;
  }
}

export interface CourseLessonInteractionListResponse {
  data: Array<CourseLessonInteractionListResponse.Data | null> | null;

  page_info: CourseLessonInteractionListResponse.PageInfo;
}

export namespace CourseLessonInteractionListResponse {
  export interface Data {
    id: string;

    completed: boolean;

    created_at: number;

    lesson: Data.Lesson;

    user: Data.User;
  }

  export namespace Data {
    export interface Lesson {
      id: string;

      title: string;
    }

    export interface User {
      id: string;

      name: string | null;

      username: string;
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface CourseLessonInteractionRetrieveParams {
  query_id: string;
}

export interface CourseLessonInteractionListParams {
  after?: string | null;

  before?: string | null;

  completed?: boolean | null;

  course_id?: string | null;

  first?: number | null;

  last?: number | null;

  lesson_id?: string | null;

  user_id?: string | null;
}

export declare namespace CourseLessonInteractions {
  export {
    type CourseLessonInteractionRetrieveResponse as CourseLessonInteractionRetrieveResponse,
    type CourseLessonInteractionListResponse as CourseLessonInteractionListResponse,
    type CourseLessonInteractionRetrieveParams as CourseLessonInteractionRetrieveParams,
    type CourseLessonInteractionListParams as CourseLessonInteractionListParams,
  };
}
