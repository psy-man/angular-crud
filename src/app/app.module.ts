import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './core/pages/bootstrap/app.component';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './pages/homepage/homepage.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    HomepageModule,

    CoreModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
