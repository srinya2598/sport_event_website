import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUser} from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  // get method and post method unit test
  get(endPoint: string, data?: any): Observable<any> {
    const url = this.BASE_URL + endPoint;
    const options = {
      params: data,
      header: this.getHeaders()
    };
    return this.http.get(url, options);

  }

  post(endPoint: string, body?: IUser): Observable<any> {
    const url = this.BASE_URL + endPoint;
    return this.http.post(url, body);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
}


