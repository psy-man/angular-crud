import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/store/client/models/client.model';

import * as fromClient from '../../core/store/client';
import { select, Store } from '@ngrx/store';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]> = this.store.pipe(select(fromClient.getAllClients));
  clientsLoading$ = this.store.pipe(select(fromClient.getClientsIsLoading));

  constructor(private readonly store: Store<fromClient.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromClient.LoadClients());
  }
}
