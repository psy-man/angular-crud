import { Injectable } from '@angular/core';
import { BaseService } from '@core/base/base.service';
import { map } from 'rxjs/operators';
import { Client, ClientApiModel } from '@core/store/client/models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService {
  getClientList() {
    return this.http.get<ClientApiModel[]>('/clients').pipe(
      map(clients => clients.map(client => new Client(client)))
    );
  }

  getClient(id: number) {
    return this.http.get(`/clients/${id}`);
  }
}
