import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { product_info } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-info',
  template: `
  <div class="product-info-container" *ngIf="productInfo">
    <a href="#"><small class="text-grey">{{ productInfo.brand_name }}</small></a>
    <h1 class="product-name">{{ productInfo.name }}</h1>
    <div class="star-grade">
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star"></span>
      <span class="star half"></span>
        {{ productInfo.review.length }}개 리뷰
    </div>
    <div class="product-price">
      <del class="original-price">{{ getOriginalPrice() }}원</del>
      <mark class="discount-rate">{{ productInfo.discount_rate }}<span>%</span></mark>
      <mark class="price">{{ commonService.addComma(productInfo.price) }}<span>원</span></mark>
      <span class="sprite lowest"></span>
    </div>
    <p class="text-grey"><mark class="point">{{ productInfo.price / 100 }}P</mark> 적립해드립니다.</p>
    <hr>
    <p class="normal-delivery">일반택배</p>
    <span class="sprite delivery"></span>
    <hr>
    <a href="#" class="goToShop"><span class="sprite shop"></span>{{ productInfo.brand_name }} 상품보기</a>
    </div>
  `,
  styles: [`
  .product-info-container{

    width: 100%;
  }
  .product-name{
    color: black;
    font-weight: normal;
    font-size: 25px;
    line-height: 40px;
  }
  .text-grey{
    font-size: 13px;
    color: #757575;
  }
  .star-grade{
    margin: 5px 6px 0 -2px;
    color: #35C5F0;
    font-weight: bold;
    font-size: 13px;
  }
  .star{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('../../../../assets/image/icon-etc.png');
    background-position: 110px 0;
    vertical-align: middle;
  }
  .half{
    background-position: 74px 0;
  }
  .discount-rate{
    font-size: 44px;
    background-color: transparent;
    word-spacing: -6px;
    color: #35C5F0;
    font-weight: bold;
  }
  .discount-rate > span{
    font-size: 20px;
    margin-left: 4px;
  }
  .product-price{
    position: relative;
    margin: 20px 0;
  }
  .original-price{
    position: absolute;
    left: 83px;
    top: 4px;
    font-size: 15px;
    color: #757575;
  }
  .price{
    display: inline-block;
    font-weight: bold;
    background-color: transparent;
    font-size: 32px;
    margin-left: 10px;
    margin-right: -8px;
    font-family: Tahoma, sans-serif;
    margin-top: 20px;
  }
  .price span{
    font-weight: normal;
    font-size: 28px;
  }
  .sprite{
    display: inline-block;
    background-image: url('../../../../assets/image/common-etc.png');
  }
  .lowest{
    width: 37px;
    height: 20px;
    margin-left: 15px;
    background-position: -240px -240px;
  }
  .point{
    display: inline-block;
    font-weight: bold;
    background-color: transparent;
    color: #35C5F0;
    margin-top: 10px;
  }
  hr{
    border: none;
    border-bottom: solid 1px #ededed;
    margin: 15px 0;
  }
  .normal-delivery{
    font-size: 15px;
    line-height: 28px;
  }
  .delivery{
    width: 57px;
    height: 22px;
    background-position: left -80px top -280px;
    margin-right: 4px;
    margin-top: 5px;
  }
  .shop{
    width: 24px;
    height: 24px;
    background-position: left -160px top -200px;
    vertical-align: middle;
  }
  .goToShop{
    float: right;
    font-weight: bold;
    color: #35C5F0;
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 65px;
  }
  `]
})
export class ProductInfoComponent implements OnInit {

  @Input() productInfo: product_info;

  constructor(private commonService: CommonService) { }

  ngOnInit() {

  }

  getOriginalPrice(){
    const originalPrice = this.productInfo.price / (100 - +this.productInfo.discount_rate) * 100;
    return Math.floor(originalPrice / 10) * 10;
  }

}
