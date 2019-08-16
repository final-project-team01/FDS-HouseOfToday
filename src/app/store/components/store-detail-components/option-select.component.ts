import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product_option } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-option-select',
  template: `
  <div class="selectbox" (clickOutside)="hide()">
    <input type="text" placeholder="{{ productOption[0].type }}" readonly (focus)="show()" class="cursor" #optionInput>
      <span class="product-option-icon icon-pointer"></span>
      <ul class="option-item-list" *ngIf="visible">
        <li *ngFor="let option of productOption; let i = index" class="option-item cursor"
        (click)="addOption(option, optionInput)">
        {{ option.name }}
        </li>
      </ul>
  </div>
  `,
  styleUrls: ['./option-select.scss']
})
export class OptionSelectComponent implements OnInit {

  @Input() productOption: product_option[];
  @Output() add = new EventEmitter;

  visible = false;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  addOption(option: object, input: HTMLInputElement) {
    input.value = `${option['name']}`;
    this.add.emit(option);
    this.hide();
  }

}
