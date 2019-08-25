import {Component, OnInit} from '@angular/core';
import {ISchedule} from '../../../shared/model/schedule';
import {AppController} from '../../../controller/app.controller';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  schedules: ISchedule[] = [];

  constructor(private appController: AppController) {

  }

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule() {
    this.appController.getSchedule().subscribe((res: { data: ISchedule[] }) => {
      console.log(res['data']);
      this.schedules = res.data;

    });
  }

}
