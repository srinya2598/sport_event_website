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
  constructor() {
    this.branches = CommonUtils.getBranches();
  }

  ngOnInit() {
    this.branch = new FormControl(null,[Validators.required]);
    this.formGroup = new FormGroup({
      'branch': this.branch,
    });
  }

  vote() {

  }

}
