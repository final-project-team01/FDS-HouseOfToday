import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-option',
  template: `
    <div class="product-option-container">
      <div class="option">
        <select class="option-list">
          <option value="0" disabled="" selected="">향선택1</option>
          <option *ngFor="let option of product_options"
          value="{{ option.option_name }}">{{ option.option_name }} ({{ option.option_price }}원)</option>
        </select>
        <span class="icon"></span>
      </div>
      <div class="option">
        <select class="option-list">
          <option value="0" disabled="" selected="">향선택2</option>
          <option *ngFor="let option of product_options"
          value="{{ option.option_name }}">{{ option.option_name }} ({{ option.option_price }}원)</option>
        </select>
        <span class="icon"></span>
      </div>
      <hr>
      <div class="option">
        <select class="option-list">
          <option value="0" disabled="" selected="">추가옵션을 선택해주세요</option>
          <option *ngFor="let option of product_options"
          value="{{ option.option_name }}">{{ option.option_name }} ({{ option.option_price }}원)</option>
        </select>
        <span class="icon"></span>
      </div>
      <div class="price">
        <span>주문금액</span>
        <mark class="order-price">{{ actualPrice }}<span>원</span></mark>
      </div>
    </div>
  `,
  styles: [`
    .product-option-container{
      background-color: skyblue;
      margin-top: 65px;
      background-color: white;
    }
    .option{
      position: relative;
      margin-bottom: 10px;
    }
    .option-list{
      width: 100%;
      font-size: 13px;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      border: solid 1px #dbdbdb;
      background-color: white;
      color: #424242;
      font-size: 12px;
    }
    .icon{
      display: inline-block;
      width: 16px;
      height: 8px;
      background-image: url('../../../../assets/image/icon-pointer.png');
      background-position: top -39px left 0;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    hr{
      border: none;
      border-bottom: solid 1px #ededed;
      margin: 15px 0;
    }
    .price{
      margin-top: 40px;
      position: relative;
    }
    .order-price{
      display: inline-block;
      font-weight: bold;
      background-color: transparent;
      font-size: 32px;
      font-family: Tahoma, sans-serif;
      position: absolute;
      top: -15px;
      right: 0;
    }
    .order-price span{
      font-weight: normal;
      font-size: 28px;
    }
  `]
})
export class ProductOptionComponent implements OnInit {
  product_options = [];
  actualPrice = 0;
  constructor() { }

  ngOnInit() {
    this.product_options = [
      { id: 1, option_name: '블랙체리 X2', option_price: 16900 },
      { id: 2, option_name: '로즈부케 X2', option_price: 16900 },
      { id: 3, option_name: '데일리런드리 X2', option_price: 16900 }
    ]
  }

}
