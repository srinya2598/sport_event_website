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

  register(userData) {
    if (!userData) {
      console.log('user data no available');
      return;
    }
    this.httpService.post('/register', userData).subscribe((res) => {
        console.log('success', res);
        this.snackBar.open(this.successMessage, null, {
            duration: 5000
          }
        );
      },
      (e) => {
        console.log('fail', e);
        console.log(e.error.error);
        this.snackBar.open(e.error.errors[0].msg, null, {
          duration: 5000
        });
      });
    console.log(userData);
  }

  getFacebookPost() {
    return this.httpService.get('/news');
  }

  getmedalTally() {
    return this.httpService.get('/medal');
  }

  getSchedule() {
    return this.httpService.get('/schedules');
  }

  getVotes() {
    return this.httpService.get('/poll');
  }

  submitVote(branch) {
    if (!branch) {
      return;
    }
    this.httpService.post('/poll', branch).subscribe(res => {
        this.snackBar.open('Your vote has been registered', null, {
          duration: 5000
        });
      },
      (error) => {
        console.log(error);
      });
  }


}
