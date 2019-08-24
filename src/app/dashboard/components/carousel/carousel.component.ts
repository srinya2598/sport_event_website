import {Component, OnInit} from '@angular/core';
import {ISchedule} from '../../../shared/model/schedule';
import {Router} from '@angular/router';
import {AppController} from '../../../controller/app.controller';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  schedules: ISchedule[];

  constructor(private appController: AppController) {
    this.schedules = [];
  }

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule() {
    this.appController.getSchedule().subscribe(res => {
      console.log(res['data']);
      this.schedules = res.data;

    });
  }

}
