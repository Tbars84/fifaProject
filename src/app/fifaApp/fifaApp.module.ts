import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
// FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
// SERVICES
import { GetTeamsSrv } from '../services/teamSrv';
// COMPONENTS
import { FifaDashboardComponent } from './containers/fifa-dashboard/fifa-dashboard.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
    declarations : [
        FifaDashboardComponent,
        TeamsComponent
    ],
    imports : [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)

    ],
    exports : [
        FifaDashboardComponent
    ],
    providers: [AngularFirestore , GetTeamsSrv]
})

export class ChallengeDashboardModule{}
