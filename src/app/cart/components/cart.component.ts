import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-cart',
  template: `
  <app-header></app-header> 
    <div class="cart">
      <div class="cart-empty" *ngIf="getCartState(); else elseBlock">
        <div class="cart-empty-content">
          <img src="assets/image/cart-empty-placeholder.png">
          <a Button (click)="goStore()">상품 담으러 가기</a>
        </div> 
      </div>
      <ng-template #elseBlock>      
        <div class="cart-not-empty">
          <div class="container">
            <div class="commerce-cart">
              <div class="cart-header">
                <span class="cart-header-left">
                  <app-check-box [caption]="true" [isChecked]="cartService.isTotalChecked">모두 선택</app-check-box>
                </span>
                <span class="cart-header-right">
                  <button class="cart-header-delete">선택삭제</button>
                </span>
              </div>
              <div class="cart-content">
                <app-item-cards *ngFor="let brand of cartService.getItemGroup()"
                [itemList]="cartService.cartItem | cartItemFilter: brand" [brand]="brand"
                (checkEvent)="checkEvent($event)"
                ></app-item-cards>
              </div>
            </div>
            <div class="cart-sidebar-wrap">
              <div class="cart-sidebar-content">
                <dl class="cart-sidebar-summary">
                  <div class="summary-row">
                    <dt>총 상품금액</dt>
                    <dd>{{cartService.getTotalPrice()}} 원</dd>
                  </div>
                  <div class="summary-row">
                    <dt>총 배송비</dt>
                    <dd>{{cartService.getDeliverFee()}} 원</dd></div>                  
                  <div class="summary-row summary-row-total">
                    <dt>결제금액</dt>
                    <dd>{{cartService.getTotalPrice()+cartService.getDeliverFee()}} 원</dd></div>
                </dl>
                <div class="cart-sidebar-order">
                  <button Button class="btn-order">{{cartService.getTotalCount()}} 개 상품 구매하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-template>      
    </div>
    <pre>{{cartService.cartItem | json}}</pre>
    <app-footer></app-footer>
  `,
  styleUrls: [`./cart.scss`]
})
export class CartComponent implements OnInit {
  isEmpty = false;

  constructor(private router: Router, private cartService: CartService
    , private commonService: CommonService
  ) {
  }

  ngOnInit() {
  }

  getCartState() {
    return this.commonService.isLogin() && this.cartService.iSEmpty;
  }

  goStore() {
    this.router.navigate(['store']);
  }
}
