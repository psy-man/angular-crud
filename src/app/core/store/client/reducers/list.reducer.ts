import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Client } from '@core/store/client/models/client.model';
import { ClientActionTypes, ClientListActionTypes } from '@core/store/client/actions';


export interface ClientListState extends EntityState<Client> {
  isLoading: boolean;
  selectedClientId: string | null;
}


export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>({
  selectId: (client: Client) => client.id,
});


export const initialState: ClientListState = adapter.getInitialState({
  isLoading: true,
  selectedClientId: null,
});


export function clientListReducer(state = initialState, action: ClientActionTypes): ClientListState {
  switch (action.type) {

    case ClientListActionTypes.LoadClients: {
      return {
        isLoading: true,
        ...state
      };
    }

    case ClientListActionTypes.LoadClientsSuccess: {
      return adapter.addMany(action.payload, {
        isLoading: false,
        ...state
      });
    }

    default:
      return state;
  }
}


export const getIsLoading = (state: ClientListState) => state.isLoading;
export const getSelectedId = (state: ClientListState) => state.selectedClientId;
