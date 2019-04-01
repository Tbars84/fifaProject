import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WcTeamsComponent } from './fifaApp/containers/wc-teams/wc-teams.component';
import { LineUpComponent } from './fifaApp/containers/line-up/line-up.component';
import { ReportsComponent } from './fifaApp/containers/reports/reports.component';
import { AddDataComponent } from './fifaApp/containers/add-data/add-data.component';

const routes: Routes = [
  { path: '', component: WcTeamsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'addTeams', component: AddDataComponent },
  { path: 'lineUp/:id', component: LineUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
