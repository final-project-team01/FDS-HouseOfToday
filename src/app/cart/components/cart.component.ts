import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { cart_list } from 'src/app/core/models/cart.interface';

@Component({
  selector: 'app-cart',
  template: `
  <app-header></app-header> 
    <div class="cart">
      <div class="cart-empty" *ngIf="isEmpty; else elseBlock">
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
                <app-item-cards *ngFor="let brand of items['brands']" [brand]="brand" [itemList]="items[brand]"></app-item-cards>
              </div>
            </div>
            <div class="cart-sidebar-wrap">
              <div class="cart-sidebar-content">
                <dl class="cart-sidebar-summary">
                  <div class="summary-row">
                    <dt>총 상품금액</dt>
                    <dd>원</dd>
                  </div>
                  <div class="summary-row">
                    <dt>총 배송비</dt>
                    <dd>원</dd></div>
                  <div class="summary-row">
                    <dt>총 할인금액</dt>
                    <dd>원</dd></div>
                  <div class="summary-row summary-row-total">
                    <dt>결제금액</dt>
                    <dd>원</dd></div>
                </dl>
                <div class="cart-sidebar-order">
                  <button Button class="btn-order">{{orderCount}} 개 상품 구매하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-template>
      <pre>{{items | json}}</pre>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: [`./cart.scss`]
})
export class CartComponent implements OnInit {
  isEmpty = false;
  orderCount = 1;
  items = {};

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.getCartList().subscribe(
      list => this.itemFilter(list)
    );
  }

  ngOnInit() {
  }

  goStore() {
    this.router.navigate(['store']);
  }
  itemFilter(itemList: cart_list[]) {
    this.items["brands"] = itemList.map(item => item.brand_name);
    this.items["brands"].forEach(
      brand => {
        this.items[brand] = itemList.filter(item => item.brand_name === brand);
        this.items[brand][0]["isChecked"] = false;

      }
    );
  }
}
