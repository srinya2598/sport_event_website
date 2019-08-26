import {Component, Inject, OnInit} from '@angular/core';
import {IMedal} from '../../../shared/model/medal';
import {AppController} from '../../../controller/app.controller';

let ELEMENT_DATA: IMedal[] = [
  {branch: 'CSE', bronze: '0', silver: '0', gold: '0', total: '0'},
  {branch: 'IT', bronze: '0', silver: '0', gold: '0', total: '0'},
  {branch: 'ECE', bronze: '0', silver: '0', gold: '0', total: '0'},
  {branch: 'CE+EI', bronze: '0', silver: '0', gold: '0', total: '0'},
  {branch: 'EN', bronze: '0', silver: '0', gold: '0', total: '0'},
  {branch: 'MBA+MCA', bronze: '0', silver: '0', gold: '0', total: '0'},
  {branch: 'ME', bronze: '0', silver: '0', gold: '0', total: '0'},

];

@Component({
  selector: 'app-medaltally',
  templateUrl: './medaltally.component.html',
  styleUrls: ['./medaltally.component.scss']
})
export class MedaltallyComponent implements OnInit {

  displayedColumns: string[] = ['branch', 'bronze', 'silver', 'gold', 'total'];

  dataSource = ELEMENT_DATA;

  constructor(
    private appController: AppController
  ) {

  }

  ngOnInit() {
    this.getMedals();

  }

  getMedals() {
    this.appController.getmedalTally().subscribe(res => {
      console.log(res['data']);
      if (res) {
        this.dataSource = res.data;

      }
    });
  }
}
