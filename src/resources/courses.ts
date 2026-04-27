// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CourseLessonsAPI from './course-lessons';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Courses
 */
export class Courses extends APIResource {
  /**
   * Create a new course within an experience, with optional chapters, lessons, and a
   * certificate.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const course = await client.courses.create({
   *   experience_id: 'exp_xxxxxxxxxxxxxx',
   *   title: 'title',
   * });
   * ```
   */
  create(body: CourseCreateParams, options?: RequestOptions): APIPromise<Course> {
    return this._client.post('/courses', { body, ...options });
  }

  /**
   * Retrieves the details of an existing course.
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * const course = await client.courses.retrieve(
   *   'cors_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Course> {
    return this._client.get(path`/courses/${id}`, options);
  }

  /**
   * Update a course's title, description, visibility, thumbnail, or chapter
   * ordering.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const course = await client.courses.update(
   *   'cors_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: CourseUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Course> {
    return this._client.patch(path`/courses/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of courses, filtered by either an experience or a
   * company.
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const courseListResponse of client.courses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CourseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CourseListResponsesCursorPage, CourseListResponse> {
    return this._client.getAPIList('/courses', CursorPage<CourseListResponse>, { query, ...options });
  }

  /**
   * Permanently delete a course and all of its chapters, lessons, and student
   * progress.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const course = await client.courses.delete(
   *   'cors_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CourseDeleteResponse> {
    return this._client.delete(path`/courses/${id}`, options);
  }
}

export type CourseListResponsesCursorPage = CursorPage<CourseListResponse>;

/**
 * A structured learning module containing chapters and lessons, belonging to an
 * experience.
 */
export interface Course {
  /**
   * The unique identifier for the course.
   */
  id: string;

  /**
   * Whether students receive a PDF certificate after completing all lessons in this
   * course. Null if the setting has not been configured.
   */
  certificate_after_completion_enabled: boolean | null;

  /**
   * An ordered list of all chapters in this course, sorted by their display
   * position.
   */
  chapters: Array<Course.Chapter>;

  /**
   * The URL of the course cover image shown on preview cards. Null if no cover image
   * has been uploaded.
   */
  cover_image: string | null;

  /**
   * The datetime the course was created.
   */
  created_at: string;

  /**
   * A brief summary of the course content and objectives. Null if no description has
   * been set.
   */
  description: string | null;

  /**
   * The spoken language of the video content, used to generate accurate closed
   * captions. One of: en, es, it, pt, de, fr, pl, ru, nl, ca, tr, sv, uk, no, fi,
   * sk, el, cs, hr, da, ro, bg.
   */
  language: Languages;

  /**
   * The sort position of this course within its parent experience, as a decimal for
   * flexible ordering.
   */
  order: string;

  /**
   * Whether students must complete each lesson sequentially before advancing to the
   * next one.
   */
  require_completing_lessons_in_order: boolean;

  /**
   * A short marketing tagline displayed beneath the course title. Null if no tagline
   * has been set.
   */
  tagline: string | null;

  /**
   * The thumbnail image displayed on course cards and previews. Null if no thumbnail
   * has been uploaded.
   */
  thumbnail: Course.Thumbnail | null;

  /**
   * The display name of the course shown to students. Null if no title has been set.
   */
  title: string | null;

  /**
   * The datetime the course was last updated.
   */
  updated_at: string;

  /**
   * The visibility setting that controls whether this course appears to students.
   * One of: visible, hidden.
   */
  visibility: CourseVisibilities;
}

export namespace Course {
  /**
   * A grouping of related lessons within a course, used to organize content into
   * sections.
   */
  export interface Chapter {
    /**
     * The unique identifier for the chapter.
     */
    id: string;

    /**
     * An ordered list of lessons in this chapter, sorted by display position. Hidden
     * lessons are excluded for non-admin users.
     */
    lessons: Array<Chapter.Lesson>;

    /**
     * The sort position of this chapter within its parent course, starting from zero.
     */
    order: number;

    /**
     * The display name of the chapter shown to students. Maximum 150 characters.
     */
    title: string;
  }

  export namespace Chapter {
    /**
     * An individual learning unit within a chapter, which can contain text, video,
     * PDF, or assessment content.
     */
    export interface Lesson {
      /**
       * The unique identifier for the lesson.
       */
      id: string;

      /**
       * The content format of this lesson. One of: text, video, pdf, multi, quiz,
       * knowledge_check.
       */
      lesson_type: CourseLessonsAPI.LessonTypes;

      /**
       * The sort position of this lesson within its parent chapter, starting from zero.
       */
      order: number;

      /**
       * The thumbnail image displayed on lesson cards and previews. Null if no thumbnail
       * has been uploaded.
       */
      thumbnail: Lesson.Thumbnail | null;

      /**
       * The display name of the lesson shown to students. Maximum 120 characters.
       */
      title: string;

      /**
       * The Mux video asset for video-type lessons, used for streaming playback. Null if
       * this lesson has no hosted video.
       */
      video_asset: Lesson.VideoAsset | null;
    }

    export namespace Lesson {
      /**
       * The thumbnail image displayed on lesson cards and previews. Null if no thumbnail
       * has been uploaded.
       */
      export interface Thumbnail {
        /**
         * A pre-optimized URL for rendering this attachment on the client. This should be
         * used for displaying attachments in apps.
         */
        url: string | null;
      }

      /**
       * The Mux video asset for video-type lessons, used for streaming playback. Null if
       * this lesson has no hosted video.
       */
      export interface VideoAsset {
        /**
         * The duration of the video in seconds
         */
        duration_seconds: number | null;

        /**
         * The signed playback ID of the Mux asset
         */
        signed_playback_id: string | null;

        /**
         * The signed thumbnail playback token of the Mux asset
         */
        signed_thumbnail_playback_token: string | null;
      }
    }
  }

  /**
   * The thumbnail image displayed on course cards and previews. Null if no thumbnail
   * has been uploaded.
   */
  export interface Thumbnail {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    optimized_url: string | null;

    /**
     * The original source URL of the attachment, such as a direct link to S3. This
     * should never be displayed on the client and should always be passed through an
     * Imgproxy transformer.
     */
    source_url: string | null;
  }
}

/**
 * The available visibilities for a course. Determines how / whether a course is
 * visible to users.
 */
export type CourseVisibilities = 'visible' | 'hidden';

/**
 * The available languages for a course
 */
export type Languages =
  | 'en'
  | 'es'
  | 'it'
  | 'pt'
  | 'de'
  | 'fr'
  | 'pl'
  | 'ru'
  | 'nl'
  | 'ca'
  | 'tr'
  | 'sv'
  | 'uk'
  | 'no'
  | 'fi'
  | 'sk'
  | 'el'
  | 'cs'
  | 'hr'
  | 'da'
  | 'ro'
  | 'bg';

/**
 * A structured learning module containing chapters and lessons, belonging to an
 * experience.
 */
export interface CourseListResponse {
  /**
   * The unique identifier for the course.
   */
  id: string;

  /**
   * Whether students receive a PDF certificate after completing all lessons in this
   * course. Null if the setting has not been configured.
   */
  certificate_after_completion_enabled: boolean | null;

  /**
   * The URL of the course cover image shown on preview cards. Null if no cover image
   * has been uploaded.
   */
  cover_image: string | null;

  /**
   * The datetime the course was created.
   */
  created_at: string;

  /**
   * A brief summary of the course content and objectives. Null if no description has
   * been set.
   */
  description: string | null;

  /**
   * The spoken language of the video content, used to generate accurate closed
   * captions. One of: en, es, it, pt, de, fr, pl, ru, nl, ca, tr, sv, uk, no, fi,
   * sk, el, cs, hr, da, ro, bg.
   */
  language: Languages;

  /**
   * The sort position of this course within its parent experience, as a decimal for
   * flexible ordering.
   */
  order: string;

  /**
   * Whether students must complete each lesson sequentially before advancing to the
   * next one.
   */
  require_completing_lessons_in_order: boolean;

  /**
   * A short marketing tagline displayed beneath the course title. Null if no tagline
   * has been set.
   */
  tagline: string | null;

  /**
   * The thumbnail image displayed on course cards and previews. Null if no thumbnail
   * has been uploaded.
   */
  thumbnail: CourseListResponse.Thumbnail | null;

  /**
   * The display name of the course shown to students. Null if no title has been set.
   */
  title: string | null;

  /**
   * The datetime the course was last updated.
   */
  updated_at: string;

  /**
   * The visibility setting that controls whether this course appears to students.
   * One of: visible, hidden.
   */
  visibility: CourseVisibilities;
}

export namespace CourseListResponse {
  /**
   * The thumbnail image displayed on course cards and previews. Null if no thumbnail
   * has been uploaded.
   */
  export interface Thumbnail {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    optimized_url: string | null;

    /**
     * The original source URL of the attachment, such as a direct link to S3. This
     * should never be displayed on the client and should always be passed through an
     * Imgproxy transformer.
     */
    source_url: string | null;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type CourseDeleteResponse = boolean;

export interface CourseCreateParams {
  /**
   * The unique identifier of the experience to create the course in (e.g.,
   * "exp_XXXXX").
   */
  experience_id: string;

  /**
   * The display title of the course (e.g., "Introduction to Web Development").
   */
  title: string;

  /**
   * Whether the course awards students a PDF certificate after completing all
   * lessons.
   */
  certificate_after_completion_enabled?: boolean | null;

  /**
   * The decimal order position of the course within its experience. Use fractional
   * values (e.g., "1.5") to place between existing courses.
   */
  order?: string | null;

  /**
   * Whether students must complete each lesson sequentially before advancing to the
   * next one.
   */
  require_completing_lessons_in_order?: boolean | null;

  /**
   * A short tagline displayed beneath the course title (e.g., "Master the
   * fundamentals of design").
   */
  tagline?: string | null;

  /**
   * The thumbnail image for the course in PNG, JPEG, or GIF format.
   */
  thumbnail?: CourseCreateParams.Thumbnail | null;

  /**
   * The available visibilities for a course. Determines how / whether a course is
   * visible to users.
   */
  visibility?: CourseVisibilities | null;
}

export namespace CourseCreateParams {
  /**
   * The thumbnail image for the course in PNG, JPEG, or GIF format.
   */
  export interface Thumbnail {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CourseUpdateParams {
  /**
   * Whether the course awards students a PDF certificate after completing all
   * lessons.
   */
  certificate_after_completion_enabled?: boolean | null;

  /**
   * A list of chapters with nested lessons to reorder or rename in bulk.
   */
  chapters?: Array<CourseUpdateParams.Chapter> | null;

  /**
   * A short description of the course displayed to students on the course page.
   */
  description?: string | null;

  /**
   * The available languages for a course
   */
  language?: Languages | null;

  /**
   * The decimal order position of the course within its experience. Use fractional
   * values (e.g., "1.5") to place between existing courses.
   */
  order?: string | null;

  /**
   * Whether students must complete each lesson sequentially before advancing to the
   * next one.
   */
  require_completing_lessons_in_order?: boolean | null;

  /**
   * A short tagline displayed beneath the course title (e.g., "Master the
   * fundamentals of design").
   */
  tagline?: string | null;

  /**
   * The thumbnail image for the course in PNG, JPEG, or GIF format.
   */
  thumbnail?: CourseUpdateParams.Thumbnail | null;

  /**
   * The display title of the course (e.g., "Introduction to Web Development").
   */
  title?: string | null;

  /**
   * The available visibilities for a course. Determines how / whether a course is
   * visible to users.
   */
  visibility?: CourseVisibilities | null;
}

export namespace CourseUpdateParams {
  /**
   * Input for updating a chapter while updating a course
   */
  export interface Chapter {
    /**
     * The ID of the chapter to update
     */
    id: string;

    /**
     * The order of the chapter within its course
     */
    order: number;

    /**
     * The title of the chapter
     */
    title: string;

    /**
     * The lessons to update within this chapter
     */
    lessons?: Array<Chapter.Lesson> | null;
  }

  export namespace Chapter {
    /**
     * Input for updating a lesson while updating a course
     */
    export interface Lesson {
      /**
       * The ID of the lesson to update
       */
      id: string;

      /**
       * The ID of the chapter this lesson belongs to (for moving between chapters)
       */
      chapter_id: string;

      /**
       * The order of the lesson within its chapter
       */
      order: number;

      /**
       * The title of the lesson
       */
      title: string;
    }
  }

  /**
   * The thumbnail image for the course in PNG, JPEG, or GIF format.
   */
  export interface Thumbnail {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CourseListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of the company to list courses for.
   */
  company_id?: string | null;

  /**
   * The unique identifier of the experience to list courses for.
   */
  experience_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace Courses {
  export {
    type Course as Course,
    type CourseVisibilities as CourseVisibilities,
    type Languages as Languages,
    type CourseListResponse as CourseListResponse,
    type CourseDeleteResponse as CourseDeleteResponse,
    type CourseListResponsesCursorPage as CourseListResponsesCursorPage,
    type CourseCreateParams as CourseCreateParams,
    type CourseUpdateParams as CourseUpdateParams,
    type CourseListParams as CourseListParams,
  };
}
