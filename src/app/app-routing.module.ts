import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WcTeamsComponent } from './fifaApp/containers/wc-teams/wc-teams.component';
import { LineUpComponent } from './fifaApp/containers/line-up/line-up.component';
import { ReportsComponent } from './fifaApp/containers/reports/reports.component';

const routes: Routes = [
  { path: '', component: WcTeamsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'lineUp/:id', component: LineUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
