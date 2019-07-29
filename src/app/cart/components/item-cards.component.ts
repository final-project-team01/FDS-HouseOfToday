import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-cards',
  template: `
    <article class="item-cards">
      <h1 class="card-header">{{brand}} 배송</h1>
      <div class="item">
        <ul *ngFor="let item of itemList">
          <li>
            <article class="item-card">
              <app-check-box class="checkbox" [isChecked]="item['isChecked']"></app-check-box>
              <a class="product">
                <div class="item-image">
                  <img>
                </div>
                <div class="item-content">
                  <h1 class="content-header">{{item['product']}}</h1>
                  <p class="item-caption"> {{item['deliver_fee']}} | {{item['deliver']}}</p>
                </div>
              </a>
              <button class="product-delete">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet">
                  <path fill-rule="nonzero" d="M6 4.6L10.3.3l1.4 1.4L7.4 6l4.3 4.3-1.4 1.4L6 7.4l-4.3 4.3-1.4-1.4L4.6 6 .3 1.7 1.7.3 6 4.6z">
                  </path>
                </svg>
              </button>
              <div class="product-option">
                <h2 class="option-name">{{item['product_option']}}</h2>
              </div>
            </article>
            <div class="carted-product-footer">
              <span class="product-subtotal">
              39,900
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
  @Input() itemList = [];
  @Input() brand: string;
  constructor() { }

  ngOnInit() {
  }

}
