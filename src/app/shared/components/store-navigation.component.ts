import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-navigation',
  template: `
    <nav>
      <a routerLink="/store" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">스토어 홈</a>
      <a routerLink="/store/category" routerLinkActive="active">카테고리</a>
      <a routerLink="/store/rank" routerLinkActive="active">랭킹</a>
    </nav>
  `,
  styles: [`
    nav > a{
      margin-right:10px;
    }
    a.active{
      font-weight:bold;
    }
  `]
})
export class StoreNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
