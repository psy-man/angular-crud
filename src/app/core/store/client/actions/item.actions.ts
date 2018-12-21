import { Action } from '@ngrx/store';
import { Client } from '@core/store/client/models/client.model';


export enum ClientItemActionTypes {
  LoadClient = '[Client] Load Client',
  LoadClientSuccess = '[Client] Load Client Success',
  LoadClientFailure = '[Client] Load Client Failure',

  SelectClient = '[Client] Select Client',
}

////////////

export class LoadClient implements Action {
  readonly type = ClientItemActionTypes.LoadClient;

  constructor(public payload: number) {
  }
}

export class LoadClientSuccess implements Action {
  readonly type = ClientItemActionTypes.LoadClientSuccess;

  constructor(public payload: Client) {
  }
}

export class LoadClientFailure implements Action {
  readonly type = ClientItemActionTypes.LoadClientFailure;

  constructor(public payload: any) {
  }
}

export class SelectClient implements Action {
  readonly type = ClientItemActionTypes.SelectClient;

  constructor(public payload: string) {
  }
}

////////////

export type ItemActions =
  | LoadClient
  | LoadClientSuccess
  | LoadClientFailure
  | SelectClient;
