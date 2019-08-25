import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppController} from '../../../controller/app.controller';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {VotingComponent} from './voting.component';
import {FormControl, FormGroup} from '@angular/forms';

describe('VotingComponent', () => {
  let component: VotingComponent;
  let fixture: ComponentFixture<VotingComponent>;
  let appController: AppController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: AppController,
          useValue: {
            getVotes: jest.fn().mockReturnValue(of({data: {summary: 'summary'}})),
          }
        },

        {
          provide: AppController,
          useValue: {
            submitVote: jest.fn()
          }
        }
      ],


    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;

  });
  it('should create', () => {
    component.pieChartLabels = [];
    component.pieChartData = [];
    component.pieChartType = 'pie';
    expect(component).toBeTruthy();
  });
  it('should call getVotes method once', () => {
    let ngonitSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngonitSpy).toHaveBeenCalledTimes(1);
  });
  describe('getVotes', () => {
      let getVotesSpy;
      beforeEach(() => {
        getVotesSpy = jest.spyOn(component, 'getVotes');

      });
      it('should call getVotes method once', () => {
        component.getVotes();
        expect(getVotesSpy).toHaveBeenCalledTimes(1);
      });
      it('should call getVotes method once with correct response', () => {
        component.getVotes();
        expect(component.pieChartLabels).toEqual('summary' as any);
        expect(component.pieChartData).toEqual('summary' as any);
      });
    }
  );
  describe('vote', () => {
    beforeEach(() => {
      component.formGroup = new FormGroup({
        branch: new FormControl()
      });
      const voteSpy = jest.spyOn(component, 'vote');
    });
    it('should call sumbitVote function of app controller once', () => {
      component.vote();
      expect(appController.submitVote).toHaveBeenCalledTimes(1);
    });

    it('should call vote function with correct arguments', () => {
      component.formGroup.patchValue({
        branch: 'branch'
      });
      component.vote();
      expect(appController.submitVote).toHaveBeenCalledWith({
        branch: 'branch',
      });

    });
    it('should reset the form', () => {
      const resetSpy = jest.spyOn(component.formGroup, 'reset');
      component.vote();
      expect(resetSpy).toHaveBeenCalledTimes(1);
    });
    it('should  mark the form as pristine', () => {
      const pristineSpy = jest.spyOn(component.formGroup, 'markAsPristine');
      component.vote();
      expect(pristineSpy).toHaveBeenCalledTimes(1);
    });
    });
});
