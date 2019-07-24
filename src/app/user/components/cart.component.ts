import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <app-navigation></app-navigation>
    <p>
      cart works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
