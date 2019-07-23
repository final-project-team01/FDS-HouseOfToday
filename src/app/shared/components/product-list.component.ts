import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-product-list',
  template: `
  <div class="row">
    <div *ngFor="let productItem of productItems" class="col-12 col-md-4 col-lg-3" [style.max-width]="menuWidth">
      <article class="store-index-today-deal-item">
        <a class="store-index-today-deal-item__overlay" routerLink="/store/{{productItem.id}}"></a>
        <div class="store-index-today-deal-item__image">
          <div class="production-item-image">
            <img class="image" src="{{productItem.thumnail_images[0].image}}" alt>
          </div>
        </div>
        <div class="store-index-today-deal-item__content">
          <h1 class="store-index-today-deal-item__header">
            <span class="store-index-today-deal-item__header__brand">{{productItem.brand_name}}</span>
            <span class="store-index-today-deal-item__header__name">{{productItem.name}}</span>
          </h1>
          <span class="production-item-price">
            <span class="production-item-price__rate">{{productItem.discount}}<span 
            class="percentage">%</span>
            </span>
            <span class="production-item-price__price">{{commonService.addComma(productItem.price)}}</span>
          </span>
          <div class="store-index-today-deal-item__stats-pc">
            <p class="production-item-stats production-item-stats--review">
              <strong class="avg">{{productItem.stars}}</strong>
              리뷰{{productItem.reviews}}
            </p>
          </div>
          <span class="production-item-badge-list">
          무료배송
          </span>
        </div>
      </article>
    </div>
  </div>
  `,
  styles: [`
  .store-index-today-deal-list__title {
    display: inline-block;
    color: #000;
    font-weight: 700;
  }
  .store-index-today-deal-list__detail-link {
    display: inline-block;
    margin-left: 7px;
    color: #f77;
    font-weight: 700;
    font-size: 15px;
    transition: opacity .1s;
  }

  .store-index-section {
    margin-top: 40px;
  }

  .store-index-today-deal-list__header {
      margin-bottom: 20px;
  }

  header {
    box-sizing: border-box;
    position: relative;
    display: block;
  }

  .col-lg-3 {
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
    flex: 0 0 25%;
    padding-right: 5px;
    padding-left: 5px;
    display: inline-block;
  }
  .store-index-today-deal-item__image {
    width: auto;
    margin: 0 -10px;
  }

  .store-index-today-deal-item__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .store-index-today-deal-item__content {
    margin: 0;
  }

  .store-index-today-deal-item__header {
    margin-top: 9px;
  }

  .store-index-today-deal-item__header__brand {
    display: block;
    font-size: 11px;
    line-height: 13px;
    color: #757575;
  }

  .store-index-today-deal-item__header__name {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    max-height: 34px;
  }

  .store-index-today-deal-item {
    position: relative;
    display: block;
    padding: 0 10px 30px;
  }

  .store-index-today-deal-item .production-item-price {
    margin: 2px 0 0;
  }

  .production-item-price {
    display: block;
    font-size: 17px;
    line-height: 23px;
    font-weight: 700;
  }

  .store-index-today-deal-item .production-item-price__rate {
    color: #f77;
  }

  .production-item-price__price {
    color: #000;
  }

  .store-index-today-deal-item__stats-pc {
    display: block;
  }

  .store-index-today-deal-item .production-item-stats {
    margin-top: 3px;
  }

  .production-item-stats--review {
    font-weight: 700;
  }

  .production-item-stats {
    font-size: 12px;
    color: #757575;
    line-height: 16px;
  }

  .production-item-stats--review>.avg {
    margin-right: 2px;
    color: #424242;
    font-weight: 700;
  }

  .production-item-image>.image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
    transition: transform .2s;
  }

  .production-item-stats {
    font-size: 12px;
    color: #757575;
    line-height: 16px;
  }

  h1 {
    font-weight: inherit;
  }

  .production-item-badge-list {
    border-radius: 3px;
    border-box: solid 1px;
    background-color: #d6d6d6;
    font-size: 11px;
  }

  .store-index-section {
    margin-top: 40px;
  }

  .store-index-section>h1 {
    color: #000;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 14px;
    position: relative;
  }

  .production-item-image {
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-right: -10px;
    margin-left: -10px;
  }  
  `]
})
export class ProductListComponent implements OnInit {
  @Input() productItems;
  @Input() menuWidth: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

}
