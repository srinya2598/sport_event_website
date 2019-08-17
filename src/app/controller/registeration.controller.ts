import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {IUser} from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterationController {
  constructor(
    private httpService: HttpService
  ) {

  }

  register(userData) {
    if (!userData) {
      return;
    }
    this.httpService.post('/register', userData);
  }
}
