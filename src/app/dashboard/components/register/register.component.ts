import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonUtils } from '../../../shared/utils/common.utils';
import { ValidatorsUtils } from '../../../shared/utils/validators';
import { RegisterationController } from '../../../controller/registeration.controller';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  name: FormControl;
  contact_number: FormControl;
  student_number: FormControl;
  email: FormControl;
  branch: FormControl;
  year: FormControl;
  gender: FormControl;
  sport: FormControl;
  residence: FormControl;
  branches: string[];
  years: string[];
  genders: string[];
  sports: string[];
  residences: string[];

  CommonUtil = CommonUtils;

  constructor(private registrationController: RegisterationController
  ) {
    this.branches = CommonUtils.getBranches();
    this.years = CommonUtils.getYear();
    this.genders = CommonUtils.getGender();
    this.sports = CommonUtils.getSports();
    this.residences = CommonUtils.getResidence();
  }

  ngOnInit() {
    this.name = new FormControl(null, [Validators.required]);
    this.contact_number = new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10,10}')]);
    this.student_number = new FormControl(null,
      [Validators.required, ValidatorsUtils.validateStudentNumber.bind(this)]);
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.branch = new FormControl(null, [Validators.required]);
    this.year = new FormControl(null, [Validators.required]);
    this.gender = new FormControl(null, [Validators.required]);
    this.sport = new FormControl(null, [Validators.required]);
    this.residence = new FormControl(null, [Validators.required]);
    this.formGroup = new FormGroup({
      'name': this.name,
      'contact_number': this.contact_number,
      'student_number': this.student_number,
      'email': this.email,
      'branch': this.branch,
      'year': this.year,
      'gender': this.gender,
      'sport': this.sport,
      'residence': this.residence
    });


  }

  register() {
    this.registrationController.register(this.formGroup.value);
  }

}
