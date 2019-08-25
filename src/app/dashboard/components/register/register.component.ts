import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonUtils} from '../../../shared/utils/common.utils';
import {ValidatorsUtils} from '../../../shared/utils/validators';
import {AppController} from '../../../controller/app.controller';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  fullName: FormControl;
  mobileNumber: FormControl;
  studentNumber: FormControl;
  email: FormControl;
  branch: FormControl;
  year: FormControl;
  gender: FormControl;
  sport: FormControl;
  hosteler: FormControl;
  branches: string[];
  years: string[];
  genders: string[];
  sports: string[];
  hostelers: string[];
  selectedSports: string[] = [];
  recaptcha: FormControl;

  CommonUtil = CommonUtils;


  constructor(private registrationController: AppController,
  ) {
    this.branches = CommonUtils.getBranches();
    this.years = CommonUtils.getYear();
    this.genders = CommonUtils.getGender();
    this.sports = CommonUtils.getSports();
    this.hostelers = CommonUtils.getHosteler();

    $(document).ready(() => {

      const slides = $('.slideShow>li');
      const totalSlides = slides.length;
      let slideCount = 0;
      slideShow();

      function slideShow() {
        slides.eq(slideCount).fadeIn(500).delay(1000).fadeOut(500, () => {
          slideCount < totalSlides - 1 ? slideCount++ : slideCount = 0;
          slideShow();
        });
      }

      console.log(slides);

    });

  }

  ngOnInit() {
    this.fullName = new FormControl(null, [Validators.required]);
    this.mobileNumber = new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10,10}')]);
    this.studentNumber = new FormControl(null,
      [Validators.required, ValidatorsUtils.validateStudentNumber.bind(this)]);
    this.email = new FormControl(null, [Validators.required, ValidatorsUtils.validateEmail.bind(this)]);
    this.branch = new FormControl(null, [Validators.required]);
    this.year = new FormControl(null, [Validators.required]);
    this.gender = new FormControl(null, [Validators.required]);
    this.sport = new FormControl(null, [Validators.required]);
    this.hosteler = new FormControl(null, [Validators.required]);
    this.recaptcha = new FormControl(null, [Validators.required]);
    this.formGroup = new FormGroup({
      'fullName': this.fullName,
      'mobileNumber': this.mobileNumber,
      'studentNumber': this.studentNumber,
      'email': this.email,
      'branch': this.branch,
      'year': this.year,
      'gender': this.gender,
      'sport': this.sport,
      'hosteler': this.hosteler,
      'recaptcha': this.recaptcha
    });


  }

  register() {
    if (!this.formGroup.invalid) {
      console.log(this.formGroup.value);

      delete this.formGroup.value['sport'];

      console.log(this.formGroup.value);

      const value = {
        ...this.formGroup.value,
        sport: this.selectedSports
      };
      this.registrationController.register(value);
      this.selectedSports = [];
      this.formGroup.reset();
      this.formGroup.markAsPristine();
    }
  }

  removeSports(sport: string) {
    if (!sport) {
      return;
    }
    const index = this.selectedSports.indexOf(sport);
    if (index >= 0) {
      this.selectedSports.splice(index, 1);
    }
  }

  addSports(sport: string) {
    if (!sport) {
      return;
    }
    if (this.selectedSports.indexOf(sport) >= 0) {
      return;
    }
    console.log(sport);
    this.selectedSports.push(sport);
  }

  handleReset() {
    console.log('Reset');
  }

  handleExpire() {
    console.log('Expire');
  }

  handleLoad() {
    console.log('Load');
  }

  handleSuccess(event) {
    console.log('Success', event);
  }
}
