import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  template: `
    <nav>
      <a routerLink="/users/123" routerLinkActive="active">프로필</a>
      <a routerLink="/orderList/123" routerLinkActive="active">주문</a>
    </nav>
  `,
  styles: []
})
export class UserNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
