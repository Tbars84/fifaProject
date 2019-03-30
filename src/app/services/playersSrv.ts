import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { playerMembersIn } from '../models/interfaces'


@Injectable()
export class GetPlayerSrv {
    plColl: AngularFirestoreCollection;
    pls: Observable<playerMembersIn[]>;

    constructor(private _afs: AngularFirestore){
        this.plColl = this._afs.collection(`players`)
    }
    getPlayers(idTeam) {
        return this.pls = this.plColl.snapshotChanges()
            .pipe(map(actions =>{
                return actions.map(a =>{
                    const data = a.payload.doc.data() as playerMembersIn;
                    data.id = a.payload.doc.id
                    if(data.teamId === idTeam){
                        return data
                    }
                })
            }))
    }

}