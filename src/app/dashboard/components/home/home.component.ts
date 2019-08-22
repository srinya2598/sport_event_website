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
  dialogRef: MatDialogRef<MedaltallyComponent>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  scrollToSection(id: string) {
    if (!id) {
      return;
    }
    document.getElementById(id).scrollIntoView();


  }

  medalTally() {
    let dialogData = {
      width: '40%',
      height: '50%'
    };
    this.dialogRef = this.dialog.open(MedaltallyComponent, dialogData);

  }
}
