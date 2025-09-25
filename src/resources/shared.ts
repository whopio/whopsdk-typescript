// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as AccessPassesAPI from './access-passes';
import * as InvoicesAPI from './invoices';

/**
 * An object representing a (sanitized) access pass.
 */
export interface AccessPass {
  /**
   * The internal ID of the public access pass.
   */
  id: string;

  /**
   * The type of business the company is.
   */
  business_type: AccessPassesAPI.BusinessTypes | null;

  /**
   * When the access pass was created.
   */
  created_at: number;

  /**
   * The specific industry the company operates in.
   */
  industry_type: AccessPassesAPI.IndustryTypes | null;

  /**
   * The number of active users for this access pass.
   */
  member_count: number;

  /**
   * The user that owns the access pass (company owner).
   */
  owner_user: AccessPass.OwnerUser;

  /**
   * The number of reviews that have been published for the access pass.
   */
  published_reviews_count: number;

  /**
   * The route of the access pass.
   */
  route: string;

  /**
   * The title of the access pass. Use for Whop 4.0.
   */
  title: string;

  /**
   * When the access pass was updated.
   */
  updated_at: number;

  /**
   * Whether this product is Whop verified.
   */
  verified: boolean;
}

export namespace AccessPass {
  /**
   * The user that owns the access pass (company owner).
   */
  export interface OwnerUser {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * An object representing a (sanitized) access pass.
 */
export interface AccessPassListItem {
  /**
   * The internal ID of the public access pass.
   */
  id: string;

  /**
   * The type of business the company is.
   */
  business_type: AccessPassesAPI.BusinessTypes | null;

  /**
   * When the access pass was created.
   */
  created_at: number;

  /**
   * The specific industry the company operates in.
   */
  industry_type: AccessPassesAPI.IndustryTypes | null;

  /**
   * The number of active users for this access pass.
   */
  member_count: number;

  /**
   * The number of reviews that have been published for the access pass.
   */
  published_reviews_count: number;

  /**
   * The route of the access pass.
   */
  route: string;

  /**
   * The title of the access pass. Use for Whop 4.0.
   */
  title: string;

  /**
   * When the access pass was updated.
   */
  updated_at: number;

  /**
   * Whether this product is Whop verified.
   */
  verified: boolean;
}

/**
 * An object representing a (sanitized) company.
 */
export interface Company {
  /**
   * The ID (tag) of the company.
   */
  id: string;

  /**
   * The type of business the company is.
   */
  business_type: AccessPassesAPI.BusinessTypes | null;

  /**
   * When the company was created (signed up)
   */
  created_at: number;

  /**
   * The specific industry the company operates in.
   */
  industry_type: AccessPassesAPI.IndustryTypes | null;

  /**
   * The number of members in the company.
   */
  member_count: number;

  /**
   * The user who owns this company
   */
  owner_user: Company.OwnerUser;

  /**
   * The number of reviews that have been published for the company.
   */
  published_reviews_count: number;

  /**
   * The slug/route of the company on the Whop site.
   */
  route: string;

  /**
   * The social media accounts of the company
   */
  social_links: Array<Company.SocialLink>;

  /**
   * The title of the company.
   */
  title: string;

  /**
   * The time the company was last updated.
   */
  updated_at: number;

  /**
   * If the company is Whop Verified
   */
  verified: boolean;
}

export namespace Company {
  /**
   * The user who owns this company
   */
  export interface OwnerUser {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }

  /**
   * A social link attached to a resource on the site.
   */
  export interface SocialLink {
    /**
     * The ID
     */
    id: string;

    /**
     * The URL
     */
    url: string;

    /**
     * The website
     */
    website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | null;
  }
}

/**
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteraction {
  /**
   * The ID of the lesson interaction
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * When the interaction was created
   */
  created_at: number;

  /**
   * The lesson this interaction is for
   */
  lesson: CourseLessonInteraction.Lesson;

  /**
   * The user who interacted with the lesson
   */
  user: CourseLessonInteraction.User;
}

export namespace CourseLessonInteraction {
  /**
   * The lesson this interaction is for
   */
  export interface Lesson {
    /**
     * The ID of the lesson
     */
    id: string;

    /**
     * The title of the lesson
     */
    title: string;
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteractionListItem {
  /**
   * The ID of the lesson interaction
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * When the interaction was created
   */
  created_at: number;

  /**
   * The lesson this interaction is for
   */
  lesson: CourseLessonInteractionListItem.Lesson;

  /**
   * The user who interacted with the lesson
   */
  user: CourseLessonInteractionListItem.User;
}

export namespace CourseLessonInteractionListItem {
  /**
   * The lesson this interaction is for
   */
  export interface Lesson {
    /**
     * The ID of the lesson
     */
    id: string;

    /**
     * The title of the lesson
     */
    title: string;
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * A statement that defines an amount due by a customer.
 */
export interface Invoice {
  /**
   * The ID of the invoice.
   */
  id: string;

  /**
   * The date the invoice was created.
   */
  created_at: number;

  /**
   * The plan that the invoice was created for.
   */
  current_plan: Invoice.CurrentPlan;

  /**
   * The date the invoice is due.
   */
  due_date: number | null;

  /**
   * The email address that the invoice was created for.
   */
  email_address: string | null;

  /**
   * The token to fetch the invoice.
   */
  fetch_invoice_token: string;

  /**
   * The number of the invoice.
   */
  number: string;

  /**
   * The status of the invoice.
   */
  status: InvoicesAPI.InvoiceStatus | null;

  /**
   * The user that the invoice was created for.
   */
  user: Invoice.User | null;
}

export namespace Invoice {
  /**
   * The plan that the invoice was created for.
   */
  export interface CurrentPlan {
    /**
     * The internal ID of the plan.
     */
    id: string;

    /**
     * The respective currency identifier for the plan.
     */
    currency: InvoicesAPI.Currency | null;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * The user that the invoice was created for.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * A statement that defines an amount due by a customer.
 */
export interface InvoiceListItem {
  /**
   * The ID of the invoice.
   */
  id: string;

  /**
   * The date the invoice was created.
   */
  created_at: number;

  /**
   * The plan that the invoice was created for.
   */
  current_plan: InvoiceListItem.CurrentPlan;

  /**
   * The date the invoice is due.
   */
  due_date: number | null;

  /**
   * The email address that the invoice was created for.
   */
  email_address: string | null;

  /**
   * The token to fetch the invoice.
   */
  fetch_invoice_token: string;

  /**
   * The number of the invoice.
   */
  number: string;

  /**
   * The status of the invoice.
   */
  status: InvoicesAPI.InvoiceStatus | null;

  /**
   * The user that the invoice was created for.
   */
  user: InvoiceListItem.User | null;
}

export namespace InvoiceListItem {
  /**
   * The plan that the invoice was created for.
   */
  export interface CurrentPlan {
    /**
     * The internal ID of the plan.
     */
    id: string;

    /**
     * The respective currency identifier for the plan.
     */
    currency: InvoicesAPI.Currency | null;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * The user that the invoice was created for.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  /**
   * When paginating forwards, the cursor to continue.
   */
  end_cursor: string | null;

  /**
   * When paginating forwards, are there more items?
   */
  has_next_page: boolean;

  /**
   * When paginating backwards, are there more items?
   */
  has_previous_page: boolean;

  /**
   * When paginating backwards, the cursor to continue.
   */
  start_cursor: string | null;
}
