import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppController} from '../../../controller/app.controller';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {MedaltallyComponent} from './medaltally.component';
import {MaterialModule} from '../../../../materal.module';

describe('MedaltallyComponent', () => {
  let component: MedaltallyComponent;
  let fixture: ComponentFixture<MedaltallyComponent>;
  let appController: AppController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MedaltallyComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: AppController,
          useValue: {
            getmedalTally: jest.fn().mockReturnValue(of({data: {branch: 'cse'}})),

          }
        }
      ],


    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MedaltallyComponent);
    component = fixture.componentInstance;

  });
  it('should create', () => {
    component.dataSource = [];
    expect(component).toBeTruthy();
  });
  it('should call  getMedals method once', () => {
    jest.spyOn(component, 'ngOnInit');
    let medalSpy = jest.spyOn(component, 'getMedals');
    component.ngOnInit();
    expect(medalSpy).toHaveBeenCalledTimes(1);
  });
  describe(' getMedals', () => {
      let getMedalSpy;
      beforeEach(() => {
        getMedalSpy = jest.spyOn(component, 'getMedals');

      });
      it('should call  getMedals method once', () => {
        component.getMedals();
        expect(getMedalSpy).toHaveBeenCalledTimes(1);
      });
      it('should call  getMedals method once with correct response', () => {
        component.getMedals();
        expect(component.dataSource).toEqual({branch: 'cse'} as any);
      });
    }
  );
});
