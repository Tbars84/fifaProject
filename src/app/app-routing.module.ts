import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WcTeamsComponent } from './fifaApp/containers/wc-teams/wc-teams.component';
import { LineUpComponent } from './fifaApp/containers/line-up/line-up.component';

const routes: Routes = [
  { path: '', component: WcTeamsComponent },
  { path: 'lineUp/:id', component: LineUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
