import { Component, OnInit } from '@angular/core';
import { GetTeamsSrv } from '../../../services/teamSrv';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  countriesFinder:any;
  saveConutry: Object;
  selectedTeam: string[];

  constructor(private _teamSrv: GetTeamsSrv) { }

  ngOnInit() {
    this.countriesFinder = this._teamSrv.getCountries().subscribe(data => {
      this.countriesFinder = data;
    })
  }
  onCountryChange(e){
    e.target.setAttribute("disabled", "disabled");
    this.countriesFinder.map((country)=> {
      if (country.name === e.target.value) {
        this.saveConutry = {
          "name": country.name,
          "flagUrl": `https://www.countryflags.io/${country.alpha2Code}/flat/64.png`,
          "shortName": country.alpha3Code
        }
        this._teamSrv.addTeam(this.saveConutry)
        this.selectedTeam = [country.name ,  country.alpha3Code ,  `https://www.countryflags.io/${country.alpha2Code}/flat/64.png`]
      }
    })
  }
}
