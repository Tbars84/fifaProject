import { Component, OnInit, Input } from '@angular/core';
import { GetPlayerSrv } from '../../../services/playersSrv';
import { playerMembersIn } from '../../../models/interfaces';


@Component({
  selector: 'app-pl-form',
  templateUrl: './pl-form.component.html',
  styleUrls: ['./pl-form.component.scss']
})
export class PlFormComponent implements OnInit {
  @Input() infoTeam: string[];
  plData: Object;
  plList= [];
  constructor(private _plSrv: GetPlayerSrv) { }
  ngOnInit() {
     this._plSrv.getPlayers(this.infoTeam[3]).subscribe(pl =>{
      this.plList.push(pl)
    })
    console.log(this.plList)

  }
  savePlayer(e) {
    e.preventDefault();
    let formTarget = e.target;
    let name = formTarget.querySelector('#namePl').value
    let lastName = formTarget.querySelector('#lastNamePl').value
    let age = formTarget.querySelector('#plAge').value
    let rol = formTarget.querySelector('#rolPl').value
    let nationality = formTarget.querySelector('#nationalityPl').value
    this.plData = {
      'age' : parseInt(age),
      'name': name,
      'lastName': lastName,
      'nationality': nationality,
      'rol': rol,
      'teamId': this.infoTeam[3],
      'titular': true,
    }
    this._plSrv.addTeam(this.plData).then((response)=>{
      if(response == 'success'){
        formTarget.reset()
      }
    })
  }
}
