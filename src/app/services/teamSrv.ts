
import { Injectable } from '@angular/core'
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { teamIn , playerMembersIn } from '../models/interfaces'


// const players = [
//     {
//         'name': 'Nahuel',
//         'lastName': 'Guzmán',
//         'teamId': 'sUhuNxx8XaCqKAhzVisa',
//         'rol': 'goalKeeper',
//         'nationality': 'AR',
//         'age': '32',
//         'titular': true,
//         'pictUrl': 'https://es.wikipedia.org/wiki/David_Ospina#/media/File:David_Ospina,_2015-05-31_(cropped).JPG',
//     },
//     {
//         'name': 'Franco',
//         'lastName': 'Armani',
//         'teamId': 'sUhuNxx8XaCqKAhzVisa',
//         'rol': 'goalKeeper',
//         'nationality': 'AR',
//         'age': '32',
//         'titular': false,
//         'pictUrl': 'https://es.wikipedia.org/wiki/David_Ospina#/media/File:David_Ospina,_2015-05-31_(cropped).JPG',
//     },
//     {
//         'name': 'Lionel Andrés',
//         'lastName': 'Messi Cuccitini',
//         'teamId': 'sUhuNxx8XaCqKAhzVisa',
//         'rol': 'Center Forward',
//         'nationality': 'AR',
//         'age': '31',
//         'titular': false,
//         'pictUrl': 'https://es.wikipedia.org/wiki/David_Ospina#/media/File:David_Ospina,_2015-05-31_(cropped).JPG',
//     },
// ]

@Injectable()
export class GetTeamsSrv {
    teamColl: AngularFirestoreCollection;
    teams: Observable<teamIn[]>;
    playerColl: AngularFirestoreCollection;
    players: Observable<playerMembersIn[]>;

    constructor(
        private _afs: AngularFirestore
    ) {
        this.teamColl = this._afs.collection(`teams`)
        this.playerColl = this._afs.collection(`players`)
        // console.log(players);
        // for (let player of players) {
        //     this.addPlayer(player)
        // }
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
    addPlayer(player){
        this.playerColl.add(player)
    }

    getPlayers() {
        // return this.teams
    }
}