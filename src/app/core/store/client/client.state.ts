import { GlobalState } from '@core/store';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromList from './reducers/list.reducer';


export interface ClientState {
  list: fromList.ClientListState;
}

export interface State extends GlobalState {
  clients: ClientState;
}

export const CLIENT_REDUCERS: ActionReducerMap<ClientState, any> = {
  list: fromList.clientListReducer,
};


////// selectors

export const getProjectsState = createFeatureSelector<State, ClientState>('clients');


export const getClientListState = createSelector(
  getProjectsState,
  state => state.list
);

export const getClientsIsLoading = createSelector(
  getClientListState,
  fromList.getIsLoading
);

export const {
  selectEntities: getClientEntities,
  selectAll: getAllClients
} = fromList.adapter.getSelectors(getClientListState);
