import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-uses-avatar',
  template: `
    <ly-avatar [size]="size" style="border:5px solid #EDEDED">
      <img alt="" src="{{pic}}">
    </ly-avatar>
  `,
  styles: []
})
export class BasicUsesAvatarComponent implements OnInit {

  @Input() size = 36;
  @Input() pic = "assets/image/36.png";
  constructor() { }

  ngOnInit() {
  }

}
