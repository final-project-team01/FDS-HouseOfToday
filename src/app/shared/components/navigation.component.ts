import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
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
        <a routerLink="/cart" class="cart-btn">
          <span class="cart-btn-icon" CartHover></span>          
        </a>
        <div class="user-logged" *ngIf="commonService.isLogin(); else elseBlock">
          <div class="action-logged">        
            <aui-avatar-with-button></aui-avatar-with-button>
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

  constructor(private commonService: CommonService
    , private storageService: StorageService

  ) {
  }

  ngOnInit() {

  }
  logout(e: Event) {
    e.preventDefault();
    this.storageService.removeLocal("user");
    this.storageService.removeSession("user");
    this.commonService.setToken("");
  }
  changMenu(nav: number) {
    this.commonService.setNav(nav);
  }


}
