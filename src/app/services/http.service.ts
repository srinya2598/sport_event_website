import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  //get method and post method unit test
  post(endPoint: string, body: IUser): Observable<any> {
    const url = this.BASE_URL + endPoint;
    return this.http.post(url, body);
  }
}


