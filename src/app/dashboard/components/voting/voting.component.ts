import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonUtils} from '../../../shared/utils/common.utils';
import {MaterialModule} from '../../../../materal.module';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  formGroup: FormGroup;
  branch: FormControl;
  branches: string[];
  CommonUtil = CommonUtils;
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  constructor() {
    this.branches = CommonUtils.getBranches();
  }

  ngOnInit() {
    this.branch = new FormControl(null);
    this.formGroup = new FormGroup({
      'branch': this.branch,
    });
  }

  vote() {

  }

}
