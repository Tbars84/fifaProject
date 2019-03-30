
import { Injectable } from '@angular/core'
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { teamIn } from '../models/interfaces'

@Injectable()
export class GetTeamsSrv {
    teamColl: AngularFirestoreCollection;
    teams: Observable<teamIn[]>;

    constructor(private _afs: AngularFirestore) {
        this.teamColl = this._afs.collection(`teams`)
    }

    getTeams() {
        return this.teams = this.teamColl.snapshotChanges()
            .pipe(map(actions =>{
                return actions.map(a =>{
                    const data = a.payload.doc.data() as teamIn;
                    data.id = a.payload.doc.id
                    return data
                })
            }))
    }
    addTeam(teamObj){
        this.teamColl.add(teamObj)
    }
}