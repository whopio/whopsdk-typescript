// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CourseLessonsAPI from './course-lessons';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseLessons extends APIResource {
  /**
   * Create a new lesson within a course chapter. Lessons can contain video, text, or
   * assessment content.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const lesson = await client.courseLessons.create({
   *   chapter_id: 'chap_xxxxxxxxxxxxx',
   *   lesson_type: 'text',
   * });
   * ```
   */
  create(body: CourseLessonCreateParams, options?: RequestOptions): APIPromise<Lesson> {
    return this._client.post('/course_lessons', { body, ...options });
  }

  /**
   * Retrieves the details of an existing course lesson.
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * const lesson = await client.courseLessons.retrieve(
   *   'lesn_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Lesson> {
    return this._client.get(path`/course_lessons/${id}`, options);
  }

  /**
   * Update a lesson's content, type, visibility, assessment questions, or media
   * attachments.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const lesson = await client.courseLessons.update(
   *   'lesn_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: CourseLessonUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Lesson> {
    return this._client.patch(path`/course_lessons/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of lessons within a course or chapter, ordered by
   * position.
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const courseLessonListResponse of client.courseLessons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CourseLessonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CourseLessonListResponsesCursorPage, CourseLessonListResponse> {
    return this._client.getAPIList('/course_lessons', CursorPage<CourseLessonListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently delete a lesson and remove it from its chapter.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const courseLesson = await client.courseLessons.delete(
   *   'lesn_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CourseLessonDeleteResponse> {
    return this._client.delete(path`/course_lessons/${id}`, options);
  }

  /**
   * Mark a lesson as completed for the current user after they finish the content.
   *
   * @example
   * ```ts
   * const response = await client.courseLessons.markAsCompleted(
   *   'lesson_id',
   * );
   * ```
   */
  markAsCompleted(
    lessonID: string,
    options?: RequestOptions,
  ): APIPromise<CourseLessonMarkAsCompletedResponse> {
    return this._client.post(path`/course_lessons/${lessonID}/mark_as_completed`, options);
  }

  /**
   * Record that the current user has started viewing a lesson, creating progress
   * tracking records.
   *
   * @example
   * ```ts
   * const response = await client.courseLessons.start(
   *   'lesson_id',
   * );
   * ```
   */
  start(lessonID: string, options?: RequestOptions): APIPromise<CourseLessonStartResponse> {
    return this._client.post(path`/course_lessons/${lessonID}/start`, options);
  }

  /**
   * Submit answers for a quiz or knowledge check lesson and receive a graded result.
   *
   * @example
   * ```ts
   * const response =
   *   await client.courseLessons.submitAssessment('lesson_id', {
   *     answers: [{ question_id: 'question_id' }],
   *   });
   * ```
   */
  submitAssessment(
    lessonID: string,
    body: CourseLessonSubmitAssessmentParams,
    options?: RequestOptions,
  ): APIPromise<CourseLessonSubmitAssessmentResponse> {
    return this._client.post(path`/course_lessons/${lessonID}/submit_assessment`, { body, ...options });
  }
}

export type CourseLessonListResponsesCursorPage = CursorPage<CourseLessonListResponse>;

/**
 * The available types for an assessment question
 */
export type AssessmentQuestionTypes = 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select';

/**
 * The type of embed for a lesson
 */
export type EmbedType = 'youtube' | 'loom';

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
   * The list of questions for quiz or knowledge check lessons. Empty for
   * non-assessment lesson types.
   */
  assessment_questions: Array<Lesson.AssessmentQuestion>;

  /**
   * All supplementary files attached to this lesson returned as a flat array rather
   * than a paginated connection.
   */
  attachments: Array<Lesson.Attachment>;

  /**
   * The text body of the lesson in plain text format. Null if the lesson has no text
   * content.
   */
  content: string | null;

  /**
   * The datetime the lesson was created.
   */
  created_at: string;

  /**
   * The number of days after a student starts the course before this lesson becomes
   * accessible. Null if the lesson is available immediately.
   */
  days_from_course_start_until_unlock: number | null;

  /**
   * The external video identifier for embedded video lessons, such as a YouTube
   * video ID or Loom share ID. Null if the lesson has no embed.
   */
  embed_id: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type: EmbedType | null;

  /**
   * The content format of this lesson. One of: text, video, pdf, multi, quiz,
   * knowledge_check.
   */
  lesson_type: LessonTypes;

  /**
   * The primary PDF document for PDF-type lessons. Null if this lesson is not a PDF
   * lesson or no PDF has been uploaded.
   */
  main_pdf: Lesson.MainPdf | null;

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

  /**
   * The visibility setting that controls whether this lesson appears to students.
   * One of: visible, hidden.
   */
  visibility: LessonVisibilities;
}

export namespace Lesson {
  /**
   * An assessment question in a course quiz or knowledge check
   */
  export interface AssessmentQuestion {
    /**
     * The unique identifier for the assessment question.
     */
    id: string;

    /**
     * The correct answer for the question. Used for short answer questions. Only
     * visible to admins (users with courses:update permission)
     */
    correct_answer: string | null;

    /**
     * The datetime the assessment question was created.
     */
    created_at: string;

    /**
     * Optional image attachment for the question
     */
    image: AssessmentQuestion.Image | null;

    /**
     * The answer options for multiple choice/select questions
     */
    options: Array<AssessmentQuestion.Option>;

    /**
     * The order of the question within its lesson
     */
    order: number;

    /**
     * The text of the question
     */
    question_text: string;

    /**
     * The type of the question
     */
    question_type: CourseLessonsAPI.AssessmentQuestionTypes;
  }

  export namespace AssessmentQuestion {
    /**
     * Optional image attachment for the question
     */
    export interface Image {
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
      url: string | null;
    }

    /**
     * An answer option for a multiple choice or multiple select assessment question
     */
    export interface Option {
      /**
       * The unique identifier for the assessment question option.
       */
      id: string;

      /**
       * Whether this option is a correct answer. Only visible to admins (users with
       * courses:update permission)
       */
      is_correct: boolean | null;

      /**
       * The text of the answer option
       */
      option_text: string;

      /**
       * The order of this option within the question
       */
      order: number;
    }
  }

  /**
   * Represents an image attachment
   */
  export interface Attachment {
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
    url: string | null;
  }

  /**
   * The primary PDF document for PDF-type lessons. Null if this lesson is not a PDF
   * lesson or no PDF has been uploaded.
   */
  export interface MainPdf {
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
    url: string | null;
  }

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
     * The unique identifier for the mux asset.
     */
    id: string;

    /**
     * The Mux-provided ID of the asset
     */
    asset_id: string | null;

    /**
     * Whether this asset contains only audio
     */
    audio_only: boolean;

    /**
     * The datetime the mux asset was created.
     */
    created_at: string;

    /**
     * The duration of the video in seconds
     */
    duration_seconds: number | null;

    /**
     * The time at which the video finished uploading
     */
    finished_uploading_at: string | null;

    /**
     * The public playback ID of the Mux asset
     */
    playback_id: string | null;

    /**
     * The signed playback ID of the Mux asset
     */
    signed_playback_id: string | null;

    /**
     * The signed storyboard playback token of the Mux asset
     */
    signed_storyboard_playback_token: string | null;

    /**
     * The signed thumbnail playback token of the Mux asset
     */
    signed_thumbnail_playback_token: string | null;

    /**
     * The signed video playback token of the Mux asset
     */
    signed_video_playback_token: string | null;

    /**
     * The status of the Mux asset
     */
    status: 'uploading' | 'created' | 'ready';

    /**
     * The datetime the mux asset was last updated.
     */
    updated_at: string;
  }
}

/**
 * The available types for a lesson
 */
export type LessonTypes = 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check';

/**
 * The available visibilities for a lesson. Determines how / whether a lesson is
 * visible to users.
 */
export type LessonVisibilities = 'visible' | 'hidden';

/**
 * An individual learning unit within a chapter, which can contain text, video,
 * PDF, or assessment content.
 */
export interface CourseLessonListResponse {
  /**
   * The unique identifier for the lesson.
   */
  id: string;

  /**
   * The text body of the lesson in plain text format. Null if the lesson has no text
   * content.
   */
  content: string | null;

  /**
   * The datetime the lesson was created.
   */
  created_at: string;

  /**
   * The number of days after a student starts the course before this lesson becomes
   * accessible. Null if the lesson is available immediately.
   */
  days_from_course_start_until_unlock: number | null;

  /**
   * The external video identifier for embedded video lessons, such as a YouTube
   * video ID or Loom share ID. Null if the lesson has no embed.
   */
  embed_id: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type: EmbedType | null;

  /**
   * The content format of this lesson. One of: text, video, pdf, multi, quiz,
   * knowledge_check.
   */
  lesson_type: LessonTypes;

  /**
   * The sort position of this lesson within its parent chapter, starting from zero.
   */
  order: number;

  /**
   * The thumbnail image displayed on lesson cards and previews. Null if no thumbnail
   * has been uploaded.
   */
  thumbnail: CourseLessonListResponse.Thumbnail | null;

  /**
   * The display name of the lesson shown to students. Maximum 120 characters.
   */
  title: string;

  /**
   * The visibility setting that controls whether this lesson appears to students.
   * One of: visible, hidden.
   */
  visibility: LessonVisibilities;
}

export namespace CourseLessonListResponse {
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
}

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonDeleteResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonMarkAsCompletedResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonStartResponse = boolean;

/**
 * The result of a user's assessment attempt
 */
export interface CourseLessonSubmitAssessmentResponse {
  /**
   * The unique identifier for the assessment result.
   */
  id: string;

  /**
   * The datetime the assessment result was created.
   */
  created_at: string;

  /**
   * The lesson this assessment result is for
   */
  lesson: CourseLessonSubmitAssessmentResponse.Lesson;

  /**
   * The number of correct answers
   */
  result_correct: number;

  /**
   * The grade achieved on the assessment
   */
  result_grade: number;

  /**
   * Array of graded questions with details
   */
  result_graded_questions: { [key: string]: unknown };

  /**
   * Whether the user achieved a passing grade
   */
  result_passing_grade: boolean;

  /**
   * The total number of questions in the assessment
   */
  result_question_count: number;

  /**
   * The percentage score achieved on the assessment
   */
  score_percent: number;

  /**
   * The datetime the assessment result was last updated.
   */
  updated_at: string;

  /**
   * The user who took the assessment
   */
  user: CourseLessonSubmitAssessmentResponse.User;
}

export namespace CourseLessonSubmitAssessmentResponse {
  /**
   * The lesson this assessment result is for
   */
  export interface Lesson {
    /**
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The display name of the lesson shown to students. Maximum 120 characters.
     */
    title: string;
  }

  /**
   * The user who took the assessment
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

export interface CourseLessonCreateParams {
  /**
   * The unique identifier of the chapter to create the lesson in (e.g.,
   * "chap_XXXXX").
   */
  chapter_id: string;

  /**
   * The content type of the lesson, such as video, text, quiz, or knowledge check.
   */
  lesson_type: LessonTypes;

  /**
   * The rich text or HTML content body of the lesson.
   */
  content?: string | null;

  /**
   * The number of days after a student starts the course before this lesson becomes
   * accessible.
   */
  days_from_course_start_until_unlock?: number | null;

  /**
   * The external video identifier for embedded content (e.g., a YouTube video ID or
   * Loom share ID).
   */
  embed_id?: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type?: EmbedType | null;

  /**
   * The thumbnail image for the lesson in PNG, JPEG, or GIF format.
   */
  thumbnail?: CourseLessonCreateParams.Thumbnail | null;

  /**
   * The display title of the lesson (e.g., "Getting Started with APIs").
   */
  title?: string | null;
}

export namespace CourseLessonCreateParams {
  /**
   * The thumbnail image for the lesson in PNG, JPEG, or GIF format.
   */
  export interface Thumbnail {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CourseLessonUpdateParams {
  /**
   * The passing criteria for quiz or knowledge check lessons, such as minimum grade
   * or correct answers.
   */
  assessment_completion_requirement?: CourseLessonUpdateParams.AssessmentCompletionRequirement | null;

  /**
   * The full list of assessment questions for quiz or knowledge check lessons.
   * Replaces all existing questions.
   */
  assessment_questions?: Array<CourseLessonUpdateParams.AssessmentQuestion> | null;

  /**
   * File attachments for the lesson such as PDFs or documents. Replaces all existing
   * attachments.
   */
  attachments?: Array<CourseLessonUpdateParams.Attachment> | null;

  /**
   * The rich text or HTML content body of the lesson.
   */
  content?: string | null;

  /**
   * The number of days after a student starts the course before this lesson becomes
   * accessible.
   */
  days_from_course_start_until_unlock?: number | null;

  /**
   * The external video identifier for embedded content (e.g., a YouTube video ID or
   * Loom share ID).
   */
  embed_id?: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type?: EmbedType | null;

  /**
   * The available types for a lesson
   */
  lesson_type?: LessonTypes | null;

  /**
   * The primary PDF document attached to this lesson for student reference.
   */
  main_pdf?: CourseLessonUpdateParams.MainPdf | null;

  /**
   * The maximum number of attempts a student is allowed for assessment lessons.
   */
  max_attempts?: number | null;

  /**
   * The identifier of a Mux video asset to attach to this lesson (e.g.,
   * "mux_XXXXX").
   */
  mux_asset_id?: string | null;

  /**
   * The thumbnail image for the lesson in PNG, JPEG, or GIF format.
   */
  thumbnail?: CourseLessonUpdateParams.Thumbnail | null;

  /**
   * The display title of the lesson (e.g., "Getting Started with APIs").
   */
  title?: string | null;

  /**
   * The available visibilities for a lesson. Determines how / whether a lesson is
   * visible to users.
   */
  visibility?: LessonVisibilities | null;
}

export namespace CourseLessonUpdateParams {
  /**
   * The passing criteria for quiz or knowledge check lessons, such as minimum grade
   * or correct answers.
   */
  export interface AssessmentCompletionRequirement {
    /**
     * The minimum grade percentage required to pass (0-100). Cannot be set together
     * with minimum_questions_correct.
     */
    minimum_grade_percent?: number | null;

    /**
     * The minimum number of questions that must be answered correctly. Cannot be set
     * together with minimum_grade_percent.
     */
    minimum_questions_correct?: number | null;
  }

  /**
   * Input for creating or updating an assessment question
   */
  export interface AssessmentQuestion {
    /**
     * The correct answer for the question. Used for short answer questions
     */
    correct_answer: string;

    /**
     * The text of the question
     */
    question_text: string;

    /**
     * The type of the question
     */
    question_type: CourseLessonsAPI.AssessmentQuestionTypes;

    /**
     * The ID of an existing question. If provided, the question will be updated. If
     * not provided, a new question will be created.
     */
    id?: string | null;

    /**
     * Optional image attachment for the question
     */
    image?: AssessmentQuestion.Image | null;

    /**
     * The answer options for multiple choice/select questions
     */
    options?: Array<AssessmentQuestion.Option> | null;
  }

  export namespace AssessmentQuestion {
    /**
     * Optional image attachment for the question
     */
    export interface Image {
      /**
       * The ID of an existing file object.
       */
      id: string;
    }

    /**
     * Input for creating or updating an assessment question option
     */
    export interface Option {
      /**
       * Whether this option is a correct answer
       */
      is_correct: boolean;

      /**
       * The text of the answer option
       */
      option_text: string;

      /**
       * The ID of an existing option. If provided, the option will be updated. If not
       * provided, a new option will be created.
       */
      id?: string | null;
    }
  }

  /**
   * Input for an attachment
   */
  export interface Attachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The primary PDF document attached to this lesson for student reference.
   */
  export interface MainPdf {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The thumbnail image for the lesson in PNG, JPEG, or GIF format.
   */
  export interface Thumbnail {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CourseLessonListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of a chapter to return only its lessons.
   */
  chapter_id?: string | null;

  /**
   * The unique identifier of the course to return all lessons across all chapters.
   */
  course_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export interface CourseLessonSubmitAssessmentParams {
  /**
   * The list of answers to submit for each assessment question.
   */
  answers: Array<CourseLessonSubmitAssessmentParams.Answer>;
}

export namespace CourseLessonSubmitAssessmentParams {
  /**
   * Input for a single question's answer in an assessment submission
   */
  export interface Answer {
    /**
     * The ID of the question being answered
     */
    question_id: string;

    /**
     * The text answer provided by the user (for short answer questions)
     */
    answer_text?: string | null;

    /**
     * The IDs of the selected options (for multiple choice/select questions)
     */
    selected_option_ids?: Array<string> | null;
  }
}

export declare namespace CourseLessons {
  export {
    type AssessmentQuestionTypes as AssessmentQuestionTypes,
    type EmbedType as EmbedType,
    type Lesson as Lesson,
    type LessonTypes as LessonTypes,
    type LessonVisibilities as LessonVisibilities,
    type CourseLessonListResponse as CourseLessonListResponse,
    type CourseLessonDeleteResponse as CourseLessonDeleteResponse,
    type CourseLessonMarkAsCompletedResponse as CourseLessonMarkAsCompletedResponse,
    type CourseLessonStartResponse as CourseLessonStartResponse,
    type CourseLessonSubmitAssessmentResponse as CourseLessonSubmitAssessmentResponse,
    type CourseLessonListResponsesCursorPage as CourseLessonListResponsesCursorPage,
    type CourseLessonCreateParams as CourseLessonCreateParams,
    type CourseLessonUpdateParams as CourseLessonUpdateParams,
    type CourseLessonListParams as CourseLessonListParams,
    type CourseLessonSubmitAssessmentParams as CourseLessonSubmitAssessmentParams,
  };
}
