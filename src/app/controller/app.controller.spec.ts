import {getTestBed, TestBed} from '@angular/core/testing';
import {AppController} from './app.controller';
import {HttpService} from '../services/http.service';
import {MatSnackBar} from '@angular/material';
import {Observable, of} from 'rxjs';

describe('AppController', () => {
  let injector: TestBed;
  let controller: AppController;
  let httpService: HttpService;
  let bar: MatSnackBar;
  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: HttpService,
            useValue: {
              post: jest.fn().mockReturnValue(of(null)),
              get: jest.fn()
            }
          },
          {
            provide: MatSnackBar,
            useValue: {
              open: jest.fn()
            }
          }
        ]
      });
      injector = getTestBed();
      controller = injector.get(AppController);
      httpService = TestBed.get(HttpService);
      bar = TestBed.get(MatSnackBar);
    }
  );
  describe('register', () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(controller, 'register');
    });
    it('should call post of httpService once and with correct data', () => {
      const data = {
        name: 'name'
      };
      controller.register(data);
      expect(httpService.post).toHaveBeenCalledTimes(1);
      expect(httpService.post).toHaveBeenCalledWith('/register', data);
    });
  });
  it(' getMedalTally: should call get method once', () => {
    controller.getmedalTally();
    expect(httpService.get).toHaveBeenCalledTimes(1);
  });
  it(' getFacebookPost:should call get method once', () => {
    controller.getFacebookPost();
    expect(httpService.get).toHaveBeenCalledTimes(1);
  });
  it(' getSchedule:should call get method once', () => {
    controller.getSchedule();
    expect(httpService.get).toHaveBeenCalledTimes(1);
  });
});
