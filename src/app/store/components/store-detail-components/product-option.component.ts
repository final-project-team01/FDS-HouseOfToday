import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-option',
  template: `
    <div class="product-option-container">
      <div class="selectbox" (clickOutside)="hide()">
      <input type="text" placeholder="향선택1" readonly (focus)="show()" #selectBox>
        <span class="product-option-icon icon"></span>
        <ul class="option-item-list" *ngIf="visible">
          <li *ngFor="let option of product_options1; let i = index" class="option-item">
          {{ option.option_name }} ({{ option.option_price }}원)
          </li>
        </ul>
      </div>
      <div class="selected-items">
        <p class="selected-item-name">로즈부케 X2</p>
        <div class="ea-container">
          <input type="number" value="1" class="selected-item-ea">
          <button class="selected-item-btn increase"></button>
          <button class="selected-item-btn decrease"></button>
        </div>
        <span class="selected-item-price">16,900원</span>
        <button class="selected-item-cancel icon"></button>
      </div>
      <div class="price">
        <span>주문금액</span>
        <mark class="order-price">{{ actualPrice }}<span>원</span></mark>
      </div>
      <div class="btn-container">
      <button type="submit" class="basket">장바구니담기</button>
      <button class="purchase">구매하기</button>
      </div>
    </div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
    .product-option-container{
      display: inline-block;
      width: 100%;
    }
    .selectbox{
      width: 100%;
      border-radius: 4px;
      border: solid 1px #dbdbdb;
      background-color: white;
      position: relative;
      font-size: 12px;
      margin-bottom: 10px;
      line-height: 40px;
    }
    .selectbox input{
      width: 100%;
      height: 40px;
      color: #424242;
      border-radius: 4px;
      padding: 0 15px;
      border: none;
      cursor: pointer;
    }
    .option-item-list{
      position: absolute;
      top: 39px;
      left: 0;
      background-color: white;
      z-index: 10;
      width: 100%;
      border: solid 1px #dbdbdb;
    }
    .option-item{
      padding: 0 15px;
    }
    .option-item:hover{
      background-color: rgb(30, 144, 255);
      color: white;
    }
    .product-option-icon{
      width: 16px;
      height: 8px;
      background-position: top -39px left 0;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    .icon{
      display: inline-block;
      background-image: url('../../../../assets/image/icon-pointer.png');
    }
    .selected-items{
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      position: relative;
      background: #f7f7f7;
      border-top: solid 1px #ededed;
      border-bottom: solid 1px #ededed;
      position: relative;
    }
    .selected-item-name{
      font-size: 13px;
    }
    .ea-container{
      display: inline-block;
      position: relative;
      padding-left: 22px;
      margin-top: 15px;
    }
    .selected-item-ea{
      font-size: 13px;
      border: none;
      background-color: transparent;
      text-align: center;
      width: 60px;
    }
    .selected-item-btn{
      width: 22px;
      height: 22px;
      background-image: url('../../../../assets/image/icon-etc.png');
      border: none;
      vertical-align: middle;
      cursor: pointer;
    }
    .increase{
      background-position: top -264px left -149px;
    }
    .decrease{
      position: absolute;
      top: 2px;
      left: 0;
      background-position: top -264px left -97px;
    }
    .selected-item-price{
      float: right;
      margin-top: 15px;
      font-size: 13px;
    }
    .selected-item-cancel{
      width: 12px;
      height: 12px;
      border: none;
      background-position: top -39px left -270px;
      background-color: transparent;
      position: absolute;
      right: 15px;
      top: 15px;
      cursor: pointer;
    }
    .price{
      margin: 40px 0 20px 0;
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
    .btn-container{
      display: flex;
    }
    .basket, .purchase{
      flex-grow: 1;
      height: 60px;
      line-height: 60px;
      border-radius: 4px;
      font-size: 17px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
    .basket{
      margin-right: 9px;
      background-color: white;
      border: 1px solid #35C5F0;
      color: #35C5F0;
    }
    .purchase{
      background-color: #35C5F0;
      border-color: #35C5F0;
      color: white;
    }
    .purchase:hover{
      transition: .2s ease;
      background-color: #1bb8e6
    }
  `]
})
export class ProductOptionComponent implements OnInit {
  
  visible = false;

  product_options1 = [];
  product_options2 = [];
  extra_options = [];
  actualPrice = 0;
  showSecondOption = false;

  constructor() { }

  ngOnInit() {
    this.product_options1 = [
      { id: 1, option_name: '블랙체리 X2', option_price: 16900 },
      { id: 2, option_name: '로즈부케 X2', option_price: 16900 },
      { id: 3, option_name: '데일리런드리 X2', option_price: 16900 }
    ];
    this.product_options2 = [
      { id: 1, option_name: '블랙체리 X2', option_price: 16900 },
      { id: 2, option_name: '로즈부케 X2', option_price: 16900 },
      { id: 3, option_name: '데일리런드리 X2', option_price: 16900 }
    ];
    this.extra_options = [
      { id: 1, option_name: '섬유리드 9P', option_price: 1500 },
      { id: 2, option_name: '데일리콤마쇼핑백', option_price: 1000 }
    ]
  }

  show(){
    this.visible = true;
  }
  hide(){
    this.visible = false;
  }

}
