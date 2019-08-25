import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarouselComponent} from './carousel.component';
import {AppController} from '../../../controller/app.controller';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CarouselCardComponent} from '../carousel-card/carousel-card.component';
import {of} from 'rxjs';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let appController: AppController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent, CarouselCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AppController,
          useValue: {
            getSchedule: jest.fn().mockReturnValue(of({data: {team: 'cs'}}))
          }
        }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.schedules = [];
    expect(component).toBeTruthy();
  });

  it('should call getSchedule method once', () => {
    let ngonitSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngonitSpy).toHaveBeenCalledTimes(1);
  });
  describe('getSchedule', () => {
      let getScheduleSpy;
      beforeEach(() => {
        getScheduleSpy = jest.spyOn(component, 'getSchedule');

      });
      it('should call getSchedule method once', () => {
        component.getSchedule();
        expect(getScheduleSpy).toHaveBeenCalledTimes(1);
      });
      it('should call getSchedule method once with correct response', () => {
        component.getSchedule();
        expect(component.schedules).toEqual({team: 'cs'} as any);
      });
    }
  );
});
