import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as actions from './../actions';

import { Client } from '@core/store/client/models/client.model';
import { ClientService } from '@core/store/client/services/client.service';


@Injectable()
export class ClientListEffects {

  @Effect()
  loadList$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ClientListActionTypes.LoadClients),
    switchMap(() => this.clientService.getClientList().pipe(
      map((clients: Client[]) => new actions.LoadClientsSuccess(clients))
      )
    )
  );

  constructor(private actions$: Actions, private clientService: ClientService) {
  }
}
