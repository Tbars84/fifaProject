import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetPlayerSrv } from '../../../services/playersSrv';

@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {
  idUrl:string;
  dataStarters = [];
  dataBench = [];
  constructor( private route: ActivatedRoute , private plSrv: GetPlayerSrv){ }

  ngOnInit() {
    this.idUrl = this.route.snapshot.paramMap.get("id");
    this.plSrv.getPlayers(this.idUrl).subscribe(pl =>{
      this.filterPlys(pl)
    })
  }
  async filterPlys(pl){
    await pl.forEach(element => {
      if(element !== undefined){
        if( element.titular ){
          this.dataStarters.push(element);
        }else{
          this.dataBench.push(element);
        }
      }
    });
  }

}
