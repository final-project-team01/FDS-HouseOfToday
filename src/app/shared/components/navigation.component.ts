import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserService } from 'src/app/core/services/user.service';

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
  styleUrls: [`./navigation.scss`]

})
export class NavigationComponent implements OnInit {

  constructor(private stateService: StateService
    , private router: Router
    , private storageService: StorageService
    , private userService: UserService
  ) {
  }

  ngOnInit() {
    if (this.stateService.isLogin()) {
      this.getUserDetail();
    }
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
  getUserDetail() {
    this.userService.getUserDetail().subscribe(req => {
      this.stateService.setUserDetail(req[0]);

    });
  }

}
