import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChallengeDashboardModule } from './fifaApp/fifaApp.module';

import { AppComponent } from './app.component';
import { ReportsComponent } from './fifaApp/containers/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
  ChallengeDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
