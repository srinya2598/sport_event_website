import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {AppController} from '../controller/app.controller';
import {MatSnackBar} from '@angular/material';

describe('HttpService', () => {
  let injector: TestBed;
  let httpService: HttpService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            post: jest.fn().mockReturnValue(of(null)),
            get: jest.fn()
          }
        }
      ]
    });
    injector = getTestBed();
    httpService = injector.get(HttpService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should call post method once', () => {
    let endPoint = 'endPoint';
    httpService.post(endPoint);
    expect(httpClient.post).toHaveBeenCalledTimes(1);
  });
  it('should call get method once', () => {
    let endPoint = 'endPoint';
    httpService.get(endPoint);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });
});

