import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChosenOption } from 'src/app/core/models/chosen-option.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { product_option } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-option',
  template: `
    <div class="product-option-container" *ngIf="productOption">
      <app-option-select
        [options]="productOption"
        (add)="add($event)">
      </app-option-select>
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
      <button type="submit" class="cart" WhiteButton (click)="cart(optionInput)">장바구니담기</button>
      <button (click)="buy(optionInput)" BlueButton>구매하기</button>
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

  add(option: product_option) {
    this.addOption.emit(option);
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

  setAmount(option, input) {
    this.set.emit({ option, input });
  }

  cart() {
    this.intoCart.emit();
  }

  buy() {
    this.buyDirect.emit();
  }
}
