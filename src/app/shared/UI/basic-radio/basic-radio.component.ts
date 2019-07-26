import { Component } from '@angular/core';

@Component({
  selector: 'aui-basic-radio',
  template: `
    <ly-radio-group>
      <ly-radio value="1" checked
        ><div class="radio_btn">A</div>
        남자</ly-radio
      >
      <ly-radio value="2"
        ><div class="radio_btn">B</div>
        여자</ly-radio
      >
    </ly-radio-group>
  `,
  styles: [
    `
      .radio_btn {
        display: inline-block;
      }
    `
  ]
})
export class BasicRadioComponent {}
