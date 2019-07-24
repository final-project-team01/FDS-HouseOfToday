import { Component } from '@angular/core';

@Component({
  selector: 'aui-basic-radio',
  template: `
    <ly-radio-group>
      <ly-radio value="1">Label 1</ly-radio>
      <ly-radio value="2" checked>Label 2</ly-radio>
    </ly-radio-group>
  `
})
export class BasicRadioComponent {}
