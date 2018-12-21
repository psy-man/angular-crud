import { Action } from '@ngrx/store';
import { Client } from '@core/store/client/models/client.model';


export enum ClientListActionTypes {
  LoadClients = '[Clients] Load',
  LoadClientsSuccess = '[Clients] Load Success',
  LoadClientsFailure = '[Clients] Load Failure',
}

////////////

export class LoadClients implements Action {
  readonly type = ClientListActionTypes.LoadClients;
}

export class LoadClientsSuccess implements Action {
  readonly type = ClientListActionTypes.LoadClientsSuccess;

  constructor(public payload: Client[]) {
  }
}

export class LoadClientsFailure implements Action {
  readonly type = ClientListActionTypes.LoadClientsFailure;

  constructor(public payload: any) {
  }
}

////////////

export type ListActions =
  | LoadClients
  | LoadClientsSuccess
  | LoadClientsFailure;
