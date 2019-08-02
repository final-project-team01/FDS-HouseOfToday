import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { cart_list, cart_price } from 'src/app/core/models/cart.interface';
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
                  <app-check-box [caption]="true">모두 선택</app-check-box>
                </span>
                <span class="cart-header-right">
                  <button class="cart-header-delete">선택삭제</button>
                </span>
              </div>
              <div class="cart-content">
                <app-item-cards *ngFor="let brand of cartService.cartItemGroup['brands']"
                [itemList]="cartService.cartItemGroup[brand]" [brand]="brand"
                (checkEvent)="checkEvent($event)"
                ></app-item-cards>
              </div>
            </div>
            <div class="cart-sidebar-wrap">
              <div class="cart-sidebar-content">
                <dl class="cart-sidebar-summary">
                  <div class="summary-row">
                    <dt>총 상품금액</dt>
                    <dd>{{cartService.cartPrice['total']}} 원</dd>
                  </div>
                  <div class="summary-row">
                    <dt>총 배송비</dt>
                    <dd>{{cartService.cartPrice['deliver_fee']}} 원</dd></div>                  
                  <div class="summary-row summary-row-total">
                    <dt>결제금액</dt>
                    <dd>{{cartService.cartPrice['total']}} 원</dd></div>
                </dl>
                <div class="cart-sidebar-order">
                  <button Button class="btn-order">{{cartService.cartPrice['orderCount']}} 개 상품 구매하기</button>
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
    if (this.commonService.isLogin()) {
      this.cartService.getCartList().subscribe(
        list => {
          list.forEach(item => { item.isChecked = true });
          this.cartService.setCartItems(list);
        },
        (error: HttpErrorResponse) => this.cartService.isEmpty = true
      );
    }
  }

  ngOnInit() {
  }

  getCartState() {
    return this.commonService.isLogin() && this.cartService.isEmpty;
  }

  goStore() {
    this.router.navigate(['store']);
  }
  /*
  itemFilter() {
    let itemList = this.cartService.cartItem;
    console.log(itemList);
    this.isEmpty = itemList.length ? false : true;
    if (this.isEmpty) return;

    itemList.forEach(item => { item.isChecked = true });

    this.cartPrice.deliver_fee = 0;
    this.cartPrice.total = itemList.map(item => item.total_price).reduce((prev, next) => prev + next);

    this.orderCount = itemList.length;

    this.items["brands"] = itemList.map(item => item.brand_name);
    this.items["brands"].forEach(
      brand => {
        this.items[brand] = itemList.filter(item => item.brand_name === brand);
      }
    );
  }
  */
}
