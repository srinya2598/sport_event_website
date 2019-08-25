import {Component, Input, OnInit} from '@angular/core';
import {ISchedule} from '../../../shared/model/schedule';
import {CommonUtils} from '../../../shared/utils/common.utils';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input() schedule: ISchedule;
  sportName: string;
  branch1: string;
  branch2: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  venue: string;
  CommonUtils = CommonUtils;

  constructor() {
  }

  ngOnInit() {
    this.branch1 = this.schedule.branch1;
    this.branch2 = this.schedule.branch2;
    this.sportName = this.schedule.sportName;
    this.date = this.schedule.date;
    this.timeStart = this.schedule.timeStart;
    this.timeEnd = this.schedule.timeEnd;
    this.venue = this.schedule.venue;
  }

}
