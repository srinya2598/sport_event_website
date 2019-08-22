import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-medaltally',
  templateUrl: './medaltally.component.html',
  styleUrls: ['./medaltally.component.scss']
})
export class MedaltallyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MedaltallyComponent>,
              @Inject(MAT_DIALOG_DATA) public data
              ) { }

  ngOnInit() {
  }
}
