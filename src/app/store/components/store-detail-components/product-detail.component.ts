import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product-detail-container">
      <img src="../../../../assets/image/daily_comma.jpg">
    </div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
  .product-detail-container{
    width: 750px;
    padding: 30px;
  }
  .product-detail-container > img{
    width: 690px;
  }
  `]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
