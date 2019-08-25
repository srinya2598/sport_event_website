import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonUtils} from '../../../shared/utils/common.utils';
import {MaterialModule} from '../../../../materal.module';
import {AppController} from '../../../controller/app.controller';

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
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  constructor(private appController: AppController) {
    this.branches = CommonUtils.getBranches();
  }

  ngOnInit() {
    this.branch = new FormControl(null, [Validators.required]);
    this.formGroup = new FormGroup({
      'branch': this.branch,
    });

    this.getVotes();
  }

  getVotes() {
    this.appController.getVotes().subscribe(res => {
        if (res) {
          Object.keys(res).forEach(key => {
            this.pieChartLabels.push(key);
            this.pieChartData.push(+res[key]);
          });
        }
      }
    );
  }

  vote() {
    this.appController.submitVote(this.formGroup);
    this.formGroup.reset();
    this.formGroup.markAsPristine();

  }

}
