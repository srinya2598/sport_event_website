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
      console.log('user data no available');
      return;
    }
    this.httpService.post('/register', userData).subscribe();
    console.log(userData);
  }
}
