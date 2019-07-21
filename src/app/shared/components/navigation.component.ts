import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="main-nav" NavFixed>
      <nav class="navigation-primary">              
        <a routerLink="/" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }" class="primary-logo">
          <span  class="logo" aria-label="오늘의집"></span>
        </a>
        <div class="navigation-menu">
          <a routerLink="/community" routerLinkActive="active" (mouseover)="changMenu(0)">커뮤니티</a>
          <a routerLink="/store" routerLinkActive="active" (mouseover)="changMenu(1)">스토어</a>
        </div>        
        <div class="user-logged" *ngIf="stateService.isLogin(); else elseBlock">
          <div class="action-logged">        
            <aui-avatar-with-button></aui-avatar-with-button>
          <!--<div class="navigation-primary__user__list">
            <ul class="navigation-user-menu">
              <li><a routerLink="/">마이홈</a></li>
              <li><a routerLink="/">나의 쇼핑</a></li>
              <li><a routerLink="/"(click)="logout($event)">로그아웃</a></li>               
            </ul>
            </div>-->
          </div>
        </div>
        <ng-template class="user-unlogged" #elseBlock>
          <div class="action-unlogged">
            <a routerLink="/signin" routerLinkActive="active" class="auth-menu signin">로그인</a>
            <a routerLink="/signup" routerLinkActive="active" class="auth-menu">회원가입</a>
          </div>
        </ng-template>
      </nav>
      </div>
  `,
  styles: [`
    .main-nav{
      /*position: fixed;*/
      top: 0;
      z-index: 100;
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
    .user-logged{
      display:inline-block;
    }
    .action-logged{
      display:inline-block;
      width:155px;
    }
    .action-unlogged{
      display:inline-block;
      
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
    .navigation-primary__user__list{
      position: absolute;
      z-index: 9999999;
      top: 100%;
      right: 80px;
      width: 140px;
      padding: 12.5px 10px;
      border-radius: 4px;
      background-color: white;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.3);
      opacity: 1;
      transform: none;
      transition: opacity 0.1s, transform 0.1s;
    }
    .navigation-primary__user__list a{
      display: block;
      padding: 7.5px 10px;
      font-size: 15px;
      border-radius: 2px;
      color: #424242;
    }
  `]
})
export class NavigationComponent implements OnInit {

  constructor(private stateService: StateService
    , private router: Router
    , private storageService: StorageService
  ) {
  }

  ngOnInit() {

  }
  logout(e: Event) {
    e.preventDefault();
    this.storageService.removeLocal("user");
    this.storageService.removeSession("user");
    this.stateService.setToken("");
  }
  changMenu(nav: number) {
    this.stateService.setNav(nav);
  }
}
