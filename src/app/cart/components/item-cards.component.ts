import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cart_list } from 'src/app/core/models/cart.interface';
import { CartService } from 'src/app/core/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cards',
  template: `
    <article class="item-cards">
      <h1 class="card-header">{{brand}} 배송</h1>
      <div class="item">
        <ul *ngFor="let item of itemList">
          <li>
            <article class="item-card">
              <app-check-box class="checkbox" [isChecked]="item['isChecked'] " (click)="cartService.toggleChecked(item['id'])"></app-check-box>
              <a class="product" (click)="goDetail(item['product_id'])" ImageZoom>
                <div class="item-image">
                  <img class="image-zoom" src="{{item['thumnail_image']}}">
                </div>
                <div class="item-content">
                  <h1 class="content-header">{{item['product']}}</h1>
                  <p class="item-caption"> {{item['deliver_fee']}} | {{item['deliver']}}</p>
                </div>
              </a>
              <button class="product-delete" (click)="removeItem(item['id'])">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet">
                  <path fill-rule="nonzero" d="M6 4.6L10.3.3l1.4 1.4L7.4 6l4.3 4.3-1.4 1.4L6 7.4l-4.3 4.3-1.4-1.4L4.6 6 .3 1.7 1.7.3 6 4.6z">
                  </path>
                </svg>
              </button>
              <div class="product-option">
                <h2 class="option-name">{{item['product_option']}}</h2>
                <div class="product-option-item">
                  <form [formGroup]="quantityForm" (ngSubmit)="onSubmin()">
                    <div class="option-quantity">
                      <input class="form-controls option-quantity-count"
                      type="string"
                      formControlName="quantity"
                      value="{{item['quantity']}}"
                      (blur)="setQuantity(item['id'],quantityCount.value)"
                      (keyup)="keyup($event.key,item['id'],quantityCount.value)"
                      #quantityCount>
                      <p class="error" *ngIf="isValidationVisible(item['quantity'], quantity.errors)">1이상의 정수를 입력하세요.</p>
                    </div>
                  </form>
                  <div class="option-price">{{isValidationVisible(item['quantity'], quantity.errors) ? '-' : commonService.addComma(item['total_price'])}}</div>
                </div>
              </div>
            </article>
            <div class="carted-product-footer">
              <span class="product-subtotal">
              {{item['price']}}
              </span>
            </div>
          </li>
        </ul>
        <footer>
          배송비 무료
        </footer>
      </div>
    </article>
  `,
  styleUrls: ['./item-cards.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() itemList: cart_list[];
  @Input() brand: string;
  quantityForm: FormGroup;
  constructor(private cartService: CartService
    , private fb: FormBuilder
    , private commonService: CommonService
    , private router: Router) { }

  ngOnInit() {
    this.quantityForm = this.fb.group(
      {
        quantity: ['', [Validators.required, Validators.pattern("^[1-9]{1}$|^[1-9]{1}[0-9]{1,}$")]]
      }
    );
  }
  get quantity() {
    return this.quantityForm.get('quantity');
  }
  onSubmin() {

  }
  goDetail(product_id: number) {
    this.router.navigate([`/store/${product_id}`]);
  }
  removeItem(id: number) {
    this.cartService.removeItems(id);
  }

  setQuantity(id: number, quantity: string) {
    this.cartService.setItemQuantity(id, +quantity);
    if (+quantity > 0) {
      this.cartService.changeQuantity(id, +quantity);
    }
  }
  keyup(key: string, id: number, quantity: string) {
    if (key.toUpperCase() === 'ENTER')
      this.setQuantity(id, quantity);
  }
  isValidationVisible(quantity: number, errors) {
    return (!(quantity > 0) && errors) ? true : false
  }
}
