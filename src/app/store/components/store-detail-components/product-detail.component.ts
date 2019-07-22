import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
  <div class="product-detail-container">
    <div class="product-img">
      <img src="../../../../assets/image/daily_comma.jpg">
    </div>
  <div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
  .product-detail-container{
    padding: 60px 30px 30px 30px;
  }
  .product-img > img{
    width: 690px;
  }
  .product-review{
    width: 690px;
  }
  `]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
