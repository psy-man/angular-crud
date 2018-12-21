import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';


const COMPONENTS = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
];


@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})

export class MaterialModule {
}
