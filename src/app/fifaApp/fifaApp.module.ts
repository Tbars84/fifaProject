import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
// FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
// SERVICES
import { GetTeamsSrv } from '../services/teamSrv';
import { GetPlayerSrv } from '../services/playersSrv';
// COMPONENTS
import { FifaDashboardComponent } from './containers/fifa-dashboard/fifa-dashboard.component';
import { LineUpComponent } from './containers/line-up/line-up.component';
import { WcTeamsComponent } from './containers/wc-teams/wc-teams.component';
import { TeamsComponent } from './components/teams/teams.component';
import { StartersComponent } from './components/starters/starters.component';
import { BenchComponent } from './components/bench/bench.component';
import { ReportsComponent } from './containers/reports/reports.component';

@NgModule({
    declarations : [
        FifaDashboardComponent,
        TeamsComponent,
        LineUpComponent,
        StartersComponent,
        BenchComponent,
        WcTeamsComponent,
        ReportsComponent
    ],
    imports : [
    CommonModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    exports : [
        FifaDashboardComponent
    ],
    providers: [
        AngularFirestore,
        GetTeamsSrv,
        GetPlayerSrv
    ]
})

export class ChallengeDashboardModule{}
