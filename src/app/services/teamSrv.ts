
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { teamIn } from '../models/interfaces'

@Injectable()
export class GetTeamsSrv {
    teamColl: AngularFirestoreCollection;
    teams: Observable<teamIn[]>;
    singleTeam: any;
    countriesColl:any;
    constructor(
        private _afs: AngularFirestore,
        private _http: HttpClient
        ) {
        this.teamColl = this._afs.collection(`teams`)
    }
    getCountries(){
        let countries;
        return this._http.get('https://restcountries.eu/rest/v2/all')
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
    addTeam(teamObj): Promise<string>{
        return new Promise((resp , err)=>{
            this.teamColl.add(teamObj).then((res)=>{
                resp(res.id)
            })
        })
    }
}