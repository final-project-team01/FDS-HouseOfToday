import { Component, OnInit } from '@angular/core';
import { ServiceCore } from 'src/app/core/serviceCore';

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
        <div class="user-logged" *ngIf="isLogin; else elseBlock">
          <a routerLink="/signup" routerLinkActive="active"><app-basic-uses-avatar ></app-basic-uses-avatar></a>
        </div>
        <ng-template class="user-unlogged" #elseBlock>
          <a routerLink="/signin" routerLinkActive="active" class="auth-menu signin">로그인</a>
          <a routerLink="/signup" routerLinkActive="active" class="auth-menu">회원가입</a>
        </ng-template>
        
      </nav>
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
    .navigation-primary > .navigation-menu  > a{
      position: relative;
      padding: 25px 15px;
      font-size: 18px;
      font-weight: bold;
      padding: 25px 15px;
      color: #424242;
      cursor: pointer;
    }
    
    .navigation-primary > a.active, .navigation-primary > .navigation-menu  > a.active{
      color: #35C5F0;
    }
    .user-unlogged{
      font-size: 0;
      margin-left: 1.5px;
      margin-bottom: 3px;
      position: relative;
      display:inline-block;
    }
    .signin:after{
      content: '';
      display: inline-block;
      width: 0;
      height: 15px;
      padding-left: 10px;
      margin-right: 10px;
      vertical-align: -2px;
      border-right: 1px solid #757575;
    }
    .user-unlogged > a.auth-menu{
      color: rgb(117, 117, 117);
      cursor: pointer;
      display: inline-block;
      font-size: 15px;
      font-weight: 700;
      line-height: 15px;
      text-decoration-color: rgb(117, 117, 117);
      text-decoration-style: solid;
      touch-action: manipulation;
    }
  `]
})
export class NavigationComponent implements OnInit {

  isLogin = ServiceCore.isLogin();
  constructor() { }

  ngOnInit() {
    console.log(this.isLogin);
  }

}
