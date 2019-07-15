import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  template: `
  <div class="container">
    <small class="brand-name">{{ productInfo.brand_name }}</small>
    <h1 class="product-name">{{ productInfo.name }}</h1>
    <mark class="product-price">{{ productInfo.price }}<span>원</span></mark>
    <span class="lowest"></span>
    <p><span>{{ +productInfo.price }}</span></p>
  </div>
  `,
  styles: [`
  .container{
    float: right;
    width: 500px;
    height: 600px;
    background-color: lightgrey;
  }
  .product-name{
    color: black;
    font-weight: normal;
    font-size: 25px;
    line-height: 40px;
  }
  .brand-name{
    font-size: 13px;
    color: #757575;
  }
  .star-grade{
    margin-left: -2px;
    margin-right: 6px;
  }
  .star{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('../../../../assets/image/icon-etc.png');
    background-position: 110px 0;
  }
  .half{
    background-position: 74px 0;
  }
  .product-price{
    display: inline-block;
    font-weight: bold;
    background-color: transparent;
    font-size: 32px;
    margin-right: -8px;
    font-family: Tahoma, sans-serif;
    margin-top: 20px;
  }
  .product-price span{
    font-weight: normal;
    font-size: 28px;
  }
  .lowest{
    display: inline-block;
    width: 37px;
    height: 20px;
    margin-left: 15px;
    background-image: url('../../../../assets/image/common-etc.png');
    background-position: -240px -240px;
  }
  `]
})
export class ProductInfoComponent implements OnInit {

  productInfo = {};
  constructor() { }

  ngOnInit() {
    this.productInfo = { id: 1, name: '1+1+1+1 시그니처퍼퓸디퓨저 200ml', price: '16,900', brand_name: '데일리콤마' }
  }

}
