import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-select',
  template: `
  <div class="selectbox" (clickOutside)="hide()">
    <input type="text" placeholder="{{ placeholder ? placeholder : options[0].type }}" 
      readonly (focus)="show()" class="cursor" #optionInput>
      <span class="product-option-icon icon-pointer"></span>
      <ul class="option-item-list" *ngIf="visible">
        <li *ngFor="let option of options; let i = index" class="option-item cursor"
        (click)="addOption(option, optionInput)">
        {{ getOptionName(option) }}
        </li>
      </ul>
  </div>
  `,
  styleUrls: ['./option-select.scss']
})
export class OptionSelectComponent implements OnInit {

  @Input() options: any;
  @Input() placeholder: string;
  @Input() withType: boolean;
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
    if(this.withType) input.value = this.getOptionName(option);
    else input.value = `${option['name']}`;
    this.add.emit(option);
    this.hide();
  }

  getOptionName(option){
    const i = option.name.lastIndexOf('(');
    const name = option.name.slice(0, i);
    return this.withType ? `${option.type}: ${name}` : option.name;
  }

}
