import { Component, OnInit } from '@angular/core';
import { GetTeamsSrv } from '../../../services/teamSrv';

@Component({
  selector: 'app-wc-teams',
  templateUrl: './wc-teams.component.html',
  styleUrls: ['./wc-teams.component.scss']
})
export class WcTeamsComponent implements OnInit {
  dataTeam = [];
  constructor(private teamSrv: GetTeamsSrv) { }

  ngOnInit() {
    this.teamSrv.getTeams().subscribe(res => {
      this.dataTeam = res
    })
  }
}
