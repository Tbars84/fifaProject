import { Component, OnInit } from '@angular/core';
import { GetTeamsSrv } from '../../../services/teamSrv';
import { GetPlayerSrv } from '../../../services/playersSrv';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  numberTeams:number;
  numberPlrs:number;
  youngestPlr:any;
  oldestPlr:any;
  oldestCh:any;
  avNum:number;

  constructor(private teamSrv: GetTeamsSrv , private plrSrv: GetPlayerSrv) { }

  ngOnInit() {
    this.teamSrv.getTeams().subscribe(res => {
      this.numberTeams = res.length;
    })
    this.plrSrv.getAllPlayers().subscribe(res =>{
      let ages = [];
      let sumAges = 0;
      res.map((pl)=> {ages.push(pl.age); sumAges +=pl.age })
      if(ages.length> 0){
        this.avNum =  sumAges/ages.length;
        this.youngestPlr = Math.min.apply(null, ages)
        this.oldestPlr = Math.max.apply(null, ages)
      }
      this.numberPlrs = res.length;
    })

    this.plrSrv.getCouches().subscribe(res =>{
      let ages = [];
      res.map((ch) => {
        if(ch !== undefined){
          ages.push(ch.age)
        }
      })
      if(ages.length> 0){
        this.oldestCh = Math.max.apply(null, ages)
      }

    })
  }
}
