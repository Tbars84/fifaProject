import { Component, OnInit, Input } from '@angular/core';
import { playerMembersIn } from 'src/app/models/interfaces';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.scss']
})
export class StartersComponent implements OnInit {
  @Input() lineUpSt: playerMembersIn[];
  constructor() { }
  ngOnInit() {}

}
