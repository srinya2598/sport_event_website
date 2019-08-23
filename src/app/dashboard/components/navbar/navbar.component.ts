import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    $(document).ready(() => {
      $(function () {
        const navbar = $('.navbar');

        $(window).scroll(function () {
          if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
          } else {
            navbar.addClass('navbar-scroll');
          }
        });
      });
    });
  }

  ngOnInit() {
  }

  scrollToSection(id: string) {
    if (!id) {
      return;
    }
    document.getElementById(id).scrollIntoView();


  }

}
