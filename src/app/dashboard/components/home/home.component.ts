import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MedaltallyComponent} from '../medaltally/medaltally.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options = {
    duration: 3
  };
  dialofRef: MatDialogRef<MedaltallyComponent>;

  constructor(private dialog: MatDialog) {
  }


  ngOnInit() {
  }

  medaltally() {
    let dialogData = {
      width: '40%',
      height: '50%'

    };

    this.dialofRef = this.dialog.open(MedaltallyComponent, dialogData);
  }
}
