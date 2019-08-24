import {Component, OnInit} from '@angular/core';
import {IPost} from '../../../shared/model/post';
import {AppController} from '../../../controller/app.controller';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  posts: IPost[];

  constructor(private appController: AppController) {
    this.posts = [];
  }

  ngOnInit() {
    this.getFaceBookPost();
  }

  getFaceBookPost() {
    this.appController.getFacebookPost().subscribe((res) => {
      this.posts = res['data'];
      console.log(this.posts);
    });
  }
}
