import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChosenOption } from 'src/app/core/models/chosen-option.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { product_option } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-option',
  template: `
    <div class="product-option-container">
      <div class="selectbox" (clickOutside)="hide()">
      <input type="text" placeholder="옵션" readonly (focus)="show()" #input>
        <span class="product-option-icon icon"></span>
        <ul class="option-item-list" *ngIf="visible">
          <li *ngFor="let option of productOption; let i = index" class="option-item"
          (click)="add(option, input)">
          {{ option.name }}
          </li>
        </ul>
      </div>
      <div class="selected-items-container scroll" *ngIf="scroll; else noscroll">
        <div class="selected-items" *ngFor="let option of chosenOptions">
          <p class="selected-item-name">{{ option.name }}</p>
          <div class="ea-container">
            <input type="number" [value]="option.amount" class="selected-item-ea"
              #input (keyup.enter)="setAmount(option, input)">
            <button class="selected-item-btn increase"
              (click)="increaseAmount(option)"></button>
            <button class="selected-item-btn decrease"
              (click)="decreaseAmount(option)"></button>
          </div>
          <span class="selected-item-price">
          {{ commonService.addComma(option.price * option.amount) + '원' }}</span>
          <button class="selected-item-cancel icon" (click)="remove(option.id)"></button>
        </div>
      </div>
      <ng-template #noscroll>
      <div class="selected-items" *ngFor="let option of chosenOptions">
        <p class="selected-item-name">{{ option.name }}</p>
        <div class="ea-container">
          <input type="number" [value]="option.amount" class="selected-item-ea"
            #input (keyup.enter)="setAmount(option, input)">
          <button class="selected-item-btn increase"
            (click)="increaseAmount(option)"></button>
          <button class="selected-item-btn decrease"
            (click)="decreaseAmount(option)"></button>
        </div>
        <span class="selected-item-price">
          {{ commonService.addComma(option.price * option.amount) + '원' }}</span>
        <button class="selected-item-cancel icon" (click)="remove(option.id)"></button>
      </div>
      </ng-template>
      <div class="price">
        <span>주문금액</span>
        <mark class="order-price">{{ totalPrice }}<span>원</span></mark>
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
      font-size: 13px;
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
      max-height: 200px;
      overflow-y: scroll;
      border: solid 1px #dbdbdb;
    }
    .option-item{
      padding: 0 15px;
      cursor: pointer;
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
    .selected-items-container{
      overflow-y: scroll;
      height: 150px;
      border: 1px solid #F1F1F1;
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

  @Input() totalPrice: number;
  @Input() productOption: product_option[];
  @Input() chosenOptions: ChosenOption[];
  @Input() scroll: boolean;
  @Output() addOption = new EventEmitter();
  @Output() deleteOption = new EventEmitter();
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
  @Output() set = new EventEmitter<object>();

  constructor(private commonService: CommonService) { }

  ngOnInit() {

  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  add(option: object, input: HTMLInputElement) {
    input.value = `${option['name']}`;
    this.addOption.emit(option);
    this.hide();
  }

  remove(id: number) {
    this.deleteOption.emit(id);
  }

  increaseAmount(option) {
    this.increase.emit(option);
  }

  decreaseAmount(option) {
    this.decrease.emit(option);
  }

  setAmount(option, input) {
    this.set.emit({ option, input });
  }

}
