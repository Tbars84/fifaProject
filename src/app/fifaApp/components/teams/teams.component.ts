import { Component, OnInit, Input } from '@angular/core';
import { teamIn } from 'src/app/models/interfaces';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  @Input() teams: teamIn[] ;
  constructor() { }

  ngOnInit() {
  }

}
