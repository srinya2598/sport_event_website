import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AppController {
  private successMessage = 'You have been Successfully Registered!';
  private errorMessage = 'Something went wrong. Please, try again!';

  constructor(
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {

  }

//register method unit test
  register(userData) {
    if (!userData) {
      console.log('user data no available');
      return;
    }
    this.httpService.post('/register', userData).subscribe((res) => {
        console.log('success', res);
        this.snackBar.open(this.successMessage
        );
      },
      (error) => {
        console.log('fail', error);
        this.snackBar.open(this.errorMessage, null, {
          duration: 5000
        });
      });
    console.log(userData);
  }
  getFacebookPost(){
    return this.httpService.getFacebookPosts();
  }


}
