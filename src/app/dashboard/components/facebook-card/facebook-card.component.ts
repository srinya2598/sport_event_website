import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../shared/model/post';

@Component({
  selector: 'app-facebook-card',
  templateUrl: './facebook-card.component.html',
  styleUrls: ['./facebook-card.component.scss']
})
export class FacebookCardComponent implements OnInit {
@Input() post: IPost;
image_url: string;
message: string;
  constructor() { }

  ngOnInit() {
    this.image_url = this.post.full_picture;
    this.message = this.post.message;
  }

}
