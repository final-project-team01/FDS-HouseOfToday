import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-nav',
  template: `
  <div class="product-nav">
    <div class="nav-list">
      product-nav works!
    </div>
  </div>
  `,
  styles: [`
  .product-nav{
    clear: both;
    padding-top: 80px;
  }
  .nav-list{
    background-color: green;
    width: 1136px;
    height: 80px;
  }
  `]
})
export class ProductNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
