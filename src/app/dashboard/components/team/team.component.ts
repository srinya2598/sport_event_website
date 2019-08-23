import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() name: string;
  @Input() profilePic: string;
  @Input() role: string;
  constructor() { }

  ngOnInit() {
  }

}
