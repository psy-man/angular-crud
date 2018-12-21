import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../store/client/models/client.model';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;
  clientsLoading$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }
}
