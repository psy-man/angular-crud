import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,

    MaterialModule,
    CoreModule.forRoot()
  ]
})
export class ClientsModule {
}
