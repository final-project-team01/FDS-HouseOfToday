import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  template: `
    <nav class="page-navigation">
      <a routerLink="/users/123" routerLinkActive="active" class="page_nav_item"
        >프로필</a
      >
      <a
        routerLink="/orderList/123"
        routerLinkActive="active"
        class="page_nav_item"
        >주문</a
      >
    </nav>
  `,
  styles: [
    `
      .page-navigation {
        height: 60px;
        text-align: center;
      }
      .page_nav_item {
        display: inline-block;
        line-height: 60px;
        margin: 0 15px;
        font-size: 18px;
      }
    `
  ]
})
export class UserNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
