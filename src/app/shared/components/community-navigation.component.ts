import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-navigation',
  template: `
    <nav>
      <a routerLink="/community" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">홈</a>
      <a routerLink="/community/photo" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">사진</a>
      <a routerLink="/community/#" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">집들이</a>
      <a routerLink="/community/#" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">질문과 답변</a>
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
export class CommunityNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
