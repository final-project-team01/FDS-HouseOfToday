import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-option',
  template: `
    <div class="product-option-container">
    <form [formGroup]="optionForm">
      <div class="option">
        <select class="option-list" (change)="firstSelect()">
          <option value="0" disabled="" selected="">향선택1</option>
          <option *ngFor="let option of product_options1" FormGroupName="firstOption"
          value="{{ option.option_name }}">{{ option.option_name }} ({{ option.option_price }}원)</option>
        </select>
        <span class="icon"></span>
      </div>
      <div class="option" *ngIf="product_options2">
        <select class="option-list" *ngIf="!showSecondOption; else secondOption"
          FormGroupName="secondOption">
          <option value="0" disabled="" selected="">향선택2</option>
        </select>
        <ng-template #secondOption>
          <select class="option-list" (change)="secondSelect()">
            <option value="0" disabled="" selected="">향선택2</option>
            <option #secondOption *ngFor="let option of product_options2" FormGroupName="secondOption"
            value="{{ option.option_name }}">{{ option.option_name }} ({{ option.option_price }}원)</option>
          </select>
        </ng-template>
        <span class="icon"></span>
      </div>
      <hr>
      <div class="option" *ngIf="extra_options">
        <select class="option-list">
          <option value="0" disabled="" selected="">추가상품을 선택해주세요</option>
          <option *ngFor="let option of extra_options" 
          value="{{ option.option_name }}">{{ option.option_name }} ({{ option.option_price }}원)</option>
        </select>
        <span class="icon"></span>
      </div>
      <div class="price">
        <span>주문금액</span>
        <mark class="order-price">{{ actualPrice }}<span>원</span></mark>
      </div>
      </form>
      <button type="submit" class="basket">장바구니담기</button>
      <button class="purchase">구매하기</button>
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
    .basket, .purchase{
      width: 225px;
      height: 60px;
      line-height: 60px;
      border-radius: 4px;
      font-size: 17px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
    .basket{
      margin-right: 10px;
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
  
  optionForm: FormGroup;

  product_options1 = [];
  product_options2 = [];
  extra_options = [];
  actualPrice = 0;
  showSecondOption = false;

  constructor() { }

  ngOnInit() {
    this.optionForm = new FormGroup({
      firstOption: new FormControl(''),
      secondOption: new FormControl('')
    });
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

  firstSelect(){
    this.showSecondOption = true; 
  }
  
  secondSelect(){
    console.dir();
  }
}
