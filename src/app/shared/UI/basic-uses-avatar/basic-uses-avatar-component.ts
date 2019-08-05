import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-uses-avatar',
  template: `
    <ly-avatar [size]="size"
    [ngStyle]="style">
      <img alt="" src="{{pic}}">
    </ly-avatar>
  `,
  styles: []
})
export class BasicUsesAvatarComponent implements OnInit {

  @Input() size = 36;
  @Input() pic = "assets/image/36.png";
  @Input() isBorder = true;
  private style = {}
  constructor() { }

  ngOnInit() {
    this.style = this.isBorder ? { 'border': '5px solid #EDEDED' } : '';
  }

}
