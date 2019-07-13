import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">오늘의 집</a>
      <a routerLink="/community" routerLinkActive="active">커뮤니티</a>
      <a routerLink="/store" routerLinkActive="active">스토어</a>
      <a routerLink="/signin" routerLinkActive="active">로그인</a>
      <a routerLink="/signup" routerLinkActive="active">회원가입</a>
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
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
