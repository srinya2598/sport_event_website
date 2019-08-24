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

  post(endPoint: string, body: IUser): Observable<any> {
    const url = this.BASE_URL + endPoint;
    return this.http.post(url, body);
  }

  // getFacebookPosts() {
  // const baseUrl = 'https://graph.facebook.com';
  // const endPoint = 'posts';
  // const access_token = `EAAixdMggCxEBAEoZClLPZCIkYhLowj5erhNpXw
  // 7i95tLs3SPsySAtoD4Peb0xHQIBatANWF0rbqC4aFOXuR53wTIRpTL8IWGARWHEV
  // roxXgE2Jnb1ZC2fSR2VovzZAj9BaYeSshZA6KAFcz3cZBpSrRJ93KrjphZCL0EOzERKPKBAZDZD`;
  // const userId = '1654768084662362';
  // const fields = 'full_picture,message';
  // const url = `${baseUrl}/${userId}/${endPoint}?fields=${fields}&access_token=${access_token}`;
  // return this.http.get(url);
  // }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
}


