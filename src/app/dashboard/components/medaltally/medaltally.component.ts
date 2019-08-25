import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IMedal} from '../../../shared/model/medal';
import {AppController} from '../../../controller/app.controller';

let ELEMENT_DATA: IMedal[] = [
  {branch: 'ME', bronze: '0', silver: '0', gold: '0'},
  {branch: 'CSE', bronze: '0', silver: '0', gold: '0'},
  {branch: 'CE', bronze: '0', silver: '0', gold: '0'},
  {branch: 'IT', bronze: '0', silver: '0', gold: '0'},
  {branch: 'EI', bronze: '0', silver: '0', gold: '0'},
  {branch: 'EN', bronze: '0', silver: '0', gold: '0'},
  {branch: 'EC', bronze: '0', silver: '0', gold: '0'},
  {branch: 'MBA', bronze: '0', silver: '0', gold: '0'},
  {branch: 'MCA', bronze: '0', silver: '0', gold: '0'},
];

@Component({
  selector: 'app-medaltally',
  templateUrl: './medaltally.component.html',
  styleUrls: ['./medaltally.component.scss']
})
export class MedaltallyComponent implements OnInit {

  displayedColumns: string[] = ['branch', 'bronze', 'silver', 'gold'];

  dataSource = ELEMENT_DATA;

  constructor(public dialogRef: MatDialogRef<MedaltallyComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
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
        ELEMENT_DATA = res.data;

      }
    });
  }
}
