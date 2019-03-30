import { Component, OnInit } from '@angular/core';
import { GetTeamsSrv } from '../../../services/teamSrv';

@Component({
  selector: 'app-fifa-dashboard',
  templateUrl: './fifa-dashboard.component.html',
  styleUrls: ['./fifa-dashboard.component.scss']
})
export class FifaDashboardComponent implements OnInit {
  dataTeam = [];
  constructor(private teamSrv: GetTeamsSrv) { }

  ngOnInit() {
    this.teamSrv.getTeams().subscribe(res => {
      this.dataTeam = res
    })
  }

}
