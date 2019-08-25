import {FacebookComponent} from './facebook.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppController} from '../../../controller/app.controller';
import {FacebookCardComponent} from '../facebook-card/facebook-card.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

describe('FacebookComponent', () => {
  let component: FacebookComponent;
  let fixture: ComponentFixture<FacebookComponent>;
  let appController: AppController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookComponent, FacebookCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: AppController,
          useValue: {
            getFacebookPost: jest.fn().mockReturnValue(of({data: {summary: 'summary'}})),

          }
        }
      ],


    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookComponent);
    component = fixture.componentInstance;

  });
  it('should create', () => {
    component.posts = [];
    expect(component).toBeTruthy();
  });
  it('should call getFaceBookPost method once', () => {
    let ngonitSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngonitSpy).toHaveBeenCalledTimes(1);
  });
  describe('getFacebookPost', () => {
      let getFacebookPostSpy;
      beforeEach(() => {
        getFacebookPostSpy = jest.spyOn(component, 'getFaceBookPost');

      });
      it('should call getFacebookPost method once', () => {
        component.getFaceBookPost();
        expect(getFacebookPostSpy).toHaveBeenCalledTimes(1);
      });
      it('should call getFacebookPost method once with correct response', () => {
        component.getFaceBookPost();
        expect(component.posts).toEqual({summary: 'summary'} as any);
      });
    }
  );
});
