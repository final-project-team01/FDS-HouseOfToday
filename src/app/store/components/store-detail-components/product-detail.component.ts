import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
  <div class="wrapper">
    <section class="product-detail-container">
      <img src="../../../../assets/image/daily_comma.jpg">
    </section>
  <div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
  .wrapper{
    background-color: yellow;
    padding: 60px 30px 30px 30px;
  }
  .product-detail-container{
    display: inline-block;
    width: 690px;
    color: yellow;
  }
  .product-detail-container > img{
    display: inline-block;
    width: 690px;
  }
  `]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
