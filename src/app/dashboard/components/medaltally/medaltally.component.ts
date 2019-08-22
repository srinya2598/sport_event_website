import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


const ELEMENT_DATA = [
  {branch: 'ME', bronze: 1, silver: 2, gold: 3},
  {branch: 'CSE', bronze: 1, silver: 2, gold: 3},
  {branch: 'CE', bronze: 1, silver: 2, gold: 3},
  {branch: 'IT', bronze: 1, silver: 2, gold: 3},
  {branch: 'EI', bronze: 1, silver: 2, gold: 3},
  {branch: 'EN', bronze: 1, silver: 2, gold: 3},
  {branch: 'EC', bronze: 1, silver: 2, gold: 3},
  {branch: 'MBA', bronze: 1, silver: 2, gold: 3},
  {branch: 'MCA', bronze: 1, silver: 2, gold: 3},
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
              @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  ngOnInit() {


  }

}
