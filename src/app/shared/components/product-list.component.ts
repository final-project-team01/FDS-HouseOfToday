import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-product-list',
  template: `
  <div class="row">
    <div *ngFor="let productItem of productItems; let i=index" class="col-12 col-md-4 col-lg-3" [style.max-width]="menuWidth" (mouseover)="zoomImg(i)" (mouseleave)="zoomOut(i)">
      <div *ngIf="i < setNumber">
      <p class="today-deal-timer" [class.active]="activeTimer">{{hours < 10 ? "0" + hours : hours}}:{{minutes < 10 ? "0" + minutes : minutes}}:{{seconds < 10 ? "0" + seconds : seconds}}남음</p>
      <div *ngIf="activeRank" class="itemRanking"><svg class="ranking-product-item__crown__icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path *ngIf="i === 0" fill="#C9950D" fill-rule="nonzero" d="M20.959 16.519H3.069S2.24 13.504 0 3.436c.332-.581 1.106-.581 1.438 0 .249.442 3.318 3.43 6.304 6.279 1.604-2.85 3.29-5.81 3.54-6.28.33-.58 1.105-.58 1.437 0 .193.333 1.908 3.348 3.54 6.28 2.958-2.85 6.027-5.81 6.303-6.28.332-.58 1.106-.58 1.438 0-2.212 10.069-3.041 13.084-3.041 13.084zM3.733 18.013H20.24c.414 0 .746.332.746.747v1.493a.744.744 0 0 1-.746.747H3.733a.744.744 0 0 1-.747-.747V18.76c0-.415.332-.747.747-.747z"></path></svg><svg *ngIf="i === 1" class="ranking-product-item__crown__icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="#9E9E9E" fill-rule="nonzero" d="M20.959 16.519H3.069S2.24 13.504 0 3.436c.332-.581 1.106-.581 1.438 0 .249.442 3.318 3.43 6.304 6.279 1.604-2.85 3.29-5.81 3.54-6.28.33-.58 1.105-.58 1.437 0 .193.333 1.908 3.348 3.54 6.28 2.958-2.85 6.027-5.81 6.303-6.28.332-.58 1.106-.58 1.438 0-2.212 10.069-3.041 13.084-3.041 13.084zM3.733 18.013H20.24c.414 0 .746.332.746.747v1.493a.744.744 0 0 1-.746.747H3.733a.744.744 0 0 1-.747-.747V18.76c0-.415.332-.747.747-.747z"></path></svg><svg *ngIf="i === 2" class="ranking-product-item__crown__icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="#CB875B" fill-rule="nonzero" d="M20.959 16.519H3.069S2.24 13.504 0 3.436c.332-.581 1.106-.581 1.438 0 .249.442 3.318 3.43 6.304 6.279 1.604-2.85 3.29-5.81 3.54-6.28.33-.58 1.105-.58 1.437 0 .193.333 1.908 3.348 3.54 6.28 2.958-2.85 6.027-5.81 6.303-6.28.332-.58 1.106-.58 1.438 0-2.212 10.069-3.041 13.084-3.041 13.084zM3.733 18.013H20.24c.414 0 .746.332.746.747v1.493a.744.744 0 0 1-.746.747H3.733a.744.744 0 0 1-.747-.747V18.76c0-.415.332-.747.747-.747z"></path></svg>{{i + 1}}</div>
      <article class="store-index-today-deal-item">
        <a class="store-index-today-deal-item__overlay" routerLink="/store/{{productItem.id}}" ></a>
        <div class="store-index-today-deal-item__image">
          <div class="production-item-image">
            <img class="image" [ngStyle]="hovered === i ? style : ''" src="{{productItem.thumnail_images[0].image}}" alt>
          </div>
        </div>
        <div class="store-index-today-deal-item__content">
          <h1 class="store-index-today-deal-item__header">
            <span class="store-index-today-deal-item__header__brand">{{productItem.brand_name}}</span>
            <span class="store-index-today-deal-item__header__name">{{productItem.name}}</span>
          </h1>
          <span class="production-item-price">
            <span class="production-item-price__rate">{{productItem.discount}}<span 
            class="percentage" *ngIf="productItem.discount_rate">{{productItem.discount_rate}}%</span>
            </span>
            <span class="production-item-price__price">{{commonService.addComma(productItem.price)}}</span>
          </span>
          <div class="store-index-today-deal-item__stats-pc">
            <p class="production-item-stats production-item-stats--review">
              <strong class="avg">{{productItem.star_avg}}</strong>
              리뷰{{productItem.review_count}}
            </p>
          </div>
          <span class="production-item-badge-list">
          무료배송
          </span>
        </div>
      </article>
      </div>
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
    line-height: 1;
    background-color: #FAFAFA;
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

  .production-item-price__rate {
    margin-right: 10px;
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
    transform: scale(1) translate(-50%,-50%);
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
    overflow: hidden;
  }

  .production-item-image:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 1px;
    top: 0;
    background: rgba(0,0,0,.5);
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-right: -10px;
    margin-left: -10px;
  }

  .today-deal-timer {
    cursor: pointer;
    background-color: #f77;
    line-height: 15px;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    padding: 3px 6px 4px;
    position: absolute;
    z-index: 3;
    top: 12px;
    left: 12px;
    display: none;
  }

  .today-deal-timer.active {
    display: inline-block;
  }

  .itemRanking {
    width: 40px;
    padding: 10px 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 0 0 12px 0;
    background-color: #fff;
    text-align: center;
    position: absolute;
    left: -1px;
    top: -1px;
    z-index: 1;
  }

  .ranking-product-item__crown__icon {
    position: absolute;
    top: -5px;
    left: 12px;
    margin-left: 0;
    display: block;
    width: 16px;
    height: 16px;
  }
  `]
})
export class ProductListComponent implements OnInit {
  @Input() productItems;
  @Input() menuWidth: string;
  @Input() setNumber: number;
  @Input() hours: number;
  @Input() minutes: number;
  @Input() seconds: number;
  @Input() activeTimer: number;
  @Input() activeSort: boolean;
  @Input() activeRank: boolean;

  showAll: boolean = true;

  style: object;
  hovered: number;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  zoomImg(index: number) {
    this.hovered = index;
    this.style = {
      'transform': 'scale(1.1) translate(-45%, -45%)'
    }
  }

  zoomOut(index: number) {
    this.hovered = index;
    this.style = {
      'transform': 'scale(1) translate(-50%, -50%)'
    }
  }
}
