// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BountiesAPI from './bounties';
import {
  Bounties,
  BountyListParams,
  WorkforceBounty,
  WorkforceBountyListItem,
  WorkforceBountyListItemsCursorPage,
} from './bounties';

export class Workforce extends APIResource {
  bounties: BountiesAPI.Bounties = new BountiesAPI.Bounties(this._client);
}

Workforce.Bounties = Bounties;

export declare namespace Workforce {
  export {
    Bounties as Bounties,
    type WorkforceBounty as WorkforceBounty,
    type WorkforceBountyListItem as WorkforceBountyListItem,
    type WorkforceBountyListItemsCursorPage as WorkforceBountyListItemsCursorPage,
    type BountyListParams as BountyListParams,
  };
}
