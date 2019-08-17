import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class HttpService {
  private readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  post(endPoint: string, body?: any): Observable<any> {
    const url = this.BASE_URL + endPoint;
    return this.http.post(url, body);
  }
}

