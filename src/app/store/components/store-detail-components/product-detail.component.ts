import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
  <div class="wrapper">
    <section class="product-detail-container">
      <img src="../../../../assets/image/daily_comma.jpg">
    </section>
    <section class="product-option">
      <h2>옵션 선택</h2>
      <app-product-option></app-product-option>
    </section>
  <div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
  .wrapper{
    background-color: yellow;
    display: flex;
    align-items: flex-start;
    padding: 60px 30px 30px 30px;
  }
  .product-detail-container{
    display: inline-block;
    width: 750px;
    color: yellow;
  }
  .product-detail-container > img{
    display: inline-block;
    width: 690px;
  }
  .product-option{
    display: inline-block;
    width: 31%;
  }
  .product-option > h2{
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  `]
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
