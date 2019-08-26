import {RegisterComponent} from './register.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppController} from '../../../controller/app.controller';
import {MaterialModule} from '../../../../materal.module';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

describe('Component: RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registrationController: AppController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule],
      declarations: [RegisterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AppController,
          useValue: {
            register: jest.fn()
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    registrationController = TestBed.get(AppController);

  });
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
  describe('addSports', () => {
    it('should add a sport in the selectedSports Array', () => {
      const addSportsSpy = jest.spyOn(component, 'addSports');
      component.selectedSports = [];
      component.addSports('sport');
      expect(component.selectedSports.length).toEqual(1);
    });
    it('should return if the sports is null', () => {
      const addSportsSpy = jest.spyOn(component, 'addSports');
      component.selectedSports = [];
      component.addSports(null);
      expect(component.selectedSports.length).toEqual(0);
    });
  });

  describe('removeSports', () => {
    it('should remove a sport', () => {
      component.selectedSports = ['sport'];
      const RemoveSportsSpy = jest.spyOn(component, 'removeSports');
      component.removeSports('sport');
      expect(component.selectedSports.length).toEqual(0);
    });
    it('should return if the sports is null', () => {
      component.selectedSports = ['sport'];
      const RemoveSportsSpy = jest.spyOn(component, 'removeSports');
      component.removeSports(null);
      expect(component.selectedSports.length).toEqual(1);
    });

  });
  describe('register', () => {
    beforeEach(() => {
      component.formGroup = new FormGroup({
        name: new FormControl()
      });
      const registerSpy = jest.spyOn(component, 'register');
    });
    it('should call regsiter function of registeration controller once', () => {
      component.register();
      expect(registrationController.register).toHaveBeenCalledTimes(1);
    });

    it('should call register function with correct arguments', () => {
      // component.formGroup.controls['name'].setValue('dummyName');
      component.formGroup.patchValue({
        name: 'someDummyName'
      });
      const sport = ['sport'];
      component.selectedSports = sport;
      component.register();
      expect(registrationController.register).toHaveBeenCalledWith({
        name: 'someDummyName',
        sport: sport
      });

    });
    it('should reset the form', () => {
      const resetSpy = jest.spyOn(component.formGroup, 'reset');
      component.register();
      expect(resetSpy).toHaveBeenCalledTimes(1);
    });
    it('should  mark the form as pristine', () => {
      const pristineSpy = jest.spyOn(component.formGroup, 'markAsPristine');
      component.register();
      expect(pristineSpy).toHaveBeenCalledTimes(1);
    });
    it('should set the selectedSports array empty', () => {
      component.selectedSports = ['someDummySport'];
      component.register();
      expect(component.selectedSports.length).toEqual(0);
    });
  });
});

