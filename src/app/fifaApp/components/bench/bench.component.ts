import { Component, OnInit, Input } from '@angular/core';
import { playerMembersIn } from 'src/app/models/interfaces';

@Component({
  selector: 'app-bench',
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.scss']
})
export class BenchComponent implements OnInit {
  @Input() lineUpBn: playerMembersIn[];
  constructor() { }
  ngOnInit() {}

}
