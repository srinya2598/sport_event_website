import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MedaltallyComponent } from '../medaltally/medaltally.component';
import { CommonUtils } from '../../../shared/utils/common.utils';

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

    let dialogConfig = {
      width: '40%',
      height: '60%'
    };
    if (CommonUtils.isOnMobile()) {
      dialogConfig.width = '95%';
    }
    this.dialogRef = this.dialog.open(MedaltallyComponent, dialogConfig);

  }
}
