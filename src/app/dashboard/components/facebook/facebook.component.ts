import {Component, OnInit} from '@angular/core';
import {IPost} from '../../../shared/model/post';
import {AppController} from '../../../controller/app.controller';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  posts: IPost[] = [];
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private appController: AppController) {

  }

  ngOnInit() {
    this.getFaceBookPost();
  }

  getFaceBookPost() {
    this.appController.getFacebookPost().subscribe((res) => {
      this.posts = res['data'];
      console.log(this.posts);
    });
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 300,
        },
        color: {
          value: '#e34612'
        },
        shape: {
          type: 'circle',
        },
      }
    };
  }
}
