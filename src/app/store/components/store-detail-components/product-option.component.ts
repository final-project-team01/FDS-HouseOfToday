import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChosenOption } from 'src/app/core/models/chosen-option.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { product_option } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-option',
  template: `
    <div class="product-option-container" *ngIf="productOption">
      <div class="selectbox" (clickOutside)="hide()">
      <input type="text" placeholder="{{ productOption[0].type }}" readonly (focus)="show()" class="cursor" #optionInput>
        <span class="product-option-icon icon-pointer"></span>
        <ul class="option-item-list" *ngIf="visible">
          <li *ngFor="let option of productOption; let i = index" class="option-item cursor"
          (click)="add(option, optionInput)">
          {{ option.name }}
          </li>
        </ul>
      </div>
      <div class="selected-items-container" *ngIf="scroll; else noscroll">
        <div class="selected-items" *ngFor="let option of chosenOptions">
          <p class="selected-item-name">{{ getName(option.name) }}</p>
          <div class="ea-container">
            <input type="number" [value]="option.quantity" class="selected-item-ea"
              #input (keyup.enter)="setAmount(option, input)">
            <button class="increase cursor icon-etc"
              (click)="increaseAmount(option)"></button>
            <button class="decrease cursor icon-etc"
              (click)="decreaseAmount(option)"></button>
          </div>
          <span class="selected-item-price">
          {{ commonService.addComma(option.price * option.quantity) + '원' }}</span>
          <button class="selected-item-cancel icon-pointer cursor" (click)="remove(option.id)"></button>
        </div>
      </div>
      <ng-template #noscroll>
      <div class="selected-items" *ngFor="let option of chosenOptions">
        <p class="selected-item-name">{{ getName(option.name) }}</p>
        <div class="ea-container">
          <input type="number" [value]="option.quantity" class="selected-item-ea"
            #input (keyup.enter)="setAmount(option, input)">
          <button class="increase cursor icon-etc"
            (click)="increaseAmount(option)"></button>
          <button class="decrease cursor icon-etc"
            (click)="decreaseAmount(option)"></button>
        </div>
        <span class="selected-item-price">
          {{ commonService.addComma(option.price * option.quantity) + '원' }}</span>
        <button class="selected-item-cancel icon-pointer cursor" (click)="remove(option.id)"></button>
      </div>
      </ng-template>
      <div class="price">
        <span>주문금액</span>
        <mark class="order-price">{{ totalPrice }}<span>원</span></mark>
      </div>
      <div class="btn-container">
      <button type="submit" class="cart cursor" (click)="cart(optionInput)">장바구니담기</button>
      <button class="cursor" (click)="buy()" BlueButton>구매하기</button>
      </div>
    </div>
  `,
  styleUrls: ['./product-option.scss']
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
  @Output() intoCart = new EventEmitter();
  @Output() buyDirect = new EventEmitter();

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

  increaseAmount(option: ChosenOption) {
    this.increase.emit(option);
  }

  decreaseAmount(option: ChosenOption) {
    this.decrease.emit(option);
  }

  getName(name: string) {
    const i = name.lastIndexOf('(');
    return name.slice(0, i);
  }

  setAmount(option: ChosenOption, input: HTMLInputElement) {
    this.set.emit({ option, input });
  }

  cart(input: HTMLInputElement) {
    input.value = '';
    this.intoCart.emit();
  }

  buy() {
    this.buyDirect.emit();
  }
}
