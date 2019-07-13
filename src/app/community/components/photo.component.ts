import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  template: `
  <app-navigation></app-navigation>
  <app-community-navigation></app-community-navigation>
  <app-store-navigation></app-store-navigation>
    <p>
      photo works!
    </p>
  `,
  styles: []
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
