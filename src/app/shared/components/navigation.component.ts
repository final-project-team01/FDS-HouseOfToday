import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="main-nav">
      <nav class="navigation-primary">              
        <a routerLink="/" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }" class="primary-logo">
          <span  class="logo" aria-label="오늘의집"></span>
        </a>
        <div class="navigation-menu">
          <a routerLink="/community" routerLinkActive="active">커뮤니티</a>
          <a routerLink="/store" routerLinkActive="active">스토어</a>
        </div>
        <a routerLink="/signin" routerLinkActive="active">로그인</a>
        <a routerLink="/signup" routerLinkActive="active"><app-basic-uses-avatar ></app-basic-uses-avatar></a>
        
      </nav>
      
    </div>
  `,
  styles: [`
    .main-nav{
      left: 0;
      right: 0;
      transition: top .1s;
      background-color: white;
      border-bottom: 1px solid #ededed;    
    }
    .navigation-primary {
      box-sizing: border-box;
      width: 1256px;
      left: 50%;
      transform: translateX(-50%);
      padding: 25px 60px;
      line-height: 15px;
      position: relative;
      align-items: flex-end;
      height: 80px;
    }
    .primary-logo {
      position: static;
      margin-right: 50px;
      transform: none;
    }
    .primary-logo > .logo {
      background-repeat: no-repeat;
      background-size: 400px;
      display: inline-block;
      width: 74px;
      height: 30px;
      background-position: top -316px left -100px;
      background-image: url("assets/image/icon-etc.png");
    }
    .navigation-primary .navigation-menu {
      width:800px;
      display: inline-block;
      white-space: nowrap;
      flex: 1 0 auto;
    }
    .navigation-primary > a, .navigation-primary > .navigation-menu  > a{
      position: relative;
      margin: 0 25px -23px -15px;
      font-size: 18px;
      font-weight: bold;
      padding: 25px 15px;
      color: #424242;
      cursor: pointer;
    }
    
    .navigation-primary > a.active, .navigation-primary > .navigation-menu  > a.active{
      color: #35C5F0;
    }
  `]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
