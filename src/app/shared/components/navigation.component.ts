import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-navigation',
  template: `
    <app-pop-up *ngIf="commonService.isPopup"></app-pop-up>
    <div class="main-nav" NavFixed>
      <nav class="navigation-primary">              
        <a routerLink="/" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }" class="primary-logo">
          <span  class="logo" aria-label="오늘의집"></span>
        </a>
        <div class="navigation-menu">
          <a routerLink="/community" routerLinkActive="active" (mouseover)="changMenu(0)" BlueFont>커뮤니티</a>
          <a routerLink="/store" routerLinkActive="active" (mouseover)="changMenu(1)" BlueFont>스토어</a>
        </div>
        <a routerLink="/cart" class="cart-btn" CartHover>
          <span class="cart-btn-icon" ></span>    
          <span class="ticker" *ngIf="cartService.getCartItemsCount() > 0">{{cartService.getCartItemsCount()}}</span>      
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

  constructor(public commonService: CommonService
    , public cartService: CartService
  ) { }

  ngOnInit() {
    if (this.commonService.isLogin()) {
      this.cartService.getCartList();
    }
  }

  changMenu(nav: number) {
    this.commonService.setNav(nav);
  }
}
