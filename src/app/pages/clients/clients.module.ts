import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '../../shared/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CLIENT_EFFECTS } from '@core/store/client/effects';
import { CLIENT_REDUCERS } from '@core/store/client/client.state';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,

    MaterialModule,
    CoreModule.forRoot(),

    StoreModule.forFeature('clients', CLIENT_REDUCERS),
    EffectsModule.forFeature(CLIENT_EFFECTS),
  ]
})
export class ClientsModule {
}
