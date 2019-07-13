import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-uses-avatar',
  template: `
    <ly-avatar [size]="36">
      <img alt="deul" src="assets/image/160.png">
    </ly-avatar>
  `,
  styles: []
})
export class BasicUsesAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
