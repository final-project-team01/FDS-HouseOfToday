import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import {
  store_list,
  store_home,
  today_deal
} from 'src/app/core/models/store.interface';
import { ThrowStmt } from '@angular/compiler';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

const styles = {
  carousel: {
    maxWidth: '1167px',
    height: '375px',
    margin: 'auto'
  },
  carouselItem: {
    textAlign: 'center'
  }
};

@Component({
  selector: 'app-store',
  template: `
    <app-header></app-header>
    <div class="viewport">
    <div class="featured-banner">
      <ly-carousel class="store-carousel" [withClass]="classes.carousel">
        <ly-carousel-item
          *ngFor="let item of items"
          [withClass]="classes.carouselItem"
          [srcImg]="item.img"
          class="carousel-background"
          [style.background-color]="item.background"
        >
        <div class="carousel-container">
          <div class="carousel-container-set">
            <h1 class="carousel-title">{{ item.title }}</h1>
            <span class="carousel-description">{{ item.description}}</span>
          </div>
        </div>
        </ly-carousel-item>
      </ly-carousel>
    </div>
    <div class="store-index">
      <section
        class="container store-index-section store-index-today-deal-list"
      >
        <header class="store-index-today-deal-list__header">
          <h1 class="store-index-today-deal-list__title">오늘의 딜</h1>
          <a class="store-index-today-deal-list__detail-link" href="#"
            >최대 85% 타임특가</a
          >
        </header>
        <div class="today-deal-timer-container">
          <div class="store-index-today-deal-list__content">
            <app-product-list
              [productItems]="todaysDeals"
              [menuWidth]="menuWidth"
              [setNumber]="setNumber"
              [hours]="hours"
              [minutes]="minutes"
              [seconds]="seconds"
              [activeTimer]="activeTimer"
            ></app-product-list>
          </div>
        </div>
      </section>
      <section class="container store-index-section">
        <h1>인기 키워드</h1>
        <div class="row keyword-list">
          <div
            *ngFor="let keyword of keywords"
            class="col-6 col-md-3 keyword-wrap"
          >
            <a>
              <div
                class="keyword"
                [ngStyle]="{ 'background-image': 'url(' + keyword.url + ')' }"
              >
                <span style="position:relative">{{ keyword.words }}</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="container store-index-section store-index-product-list">
        <h1>인기 상품</h1>
        <div class="filter store-index-product-list__filter">
          <div class="filter-bar">
            <div class="filter-bar__control-list">
              <ul class="filter-bar__control-list__left">
                <li class="filter-bar__control-list__item">
                  <div class="drop-down panel-drop-down filter-bar-control">
                    <app-filter-drop-button>배송</app-filter-drop-button>
                  </div>
                </li>
              </ul>
              <ul class="filter-bar__control-list__right">
                <li class="filter-bar__control-list__item" (mouseover)="showFilter()" (mouseleave)="hideFilter()">
                  <div class="drop-down panel-drop-down filter-bar-control">
                    <button class="filter-bar-order-button" type="button">{{filterListItem}} <svg class="caret" width="8" height="8" viewBox="0 0 8 8" preserveAspectRatio="xMidYMid meet"><path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path></svg></button>
                    <div class="filter-wrapper">
                      <app-filter-option [width]="200" class="filter-list-list"
                      *ngIf="filterShow">
                        <ul>
                          <li class="filter-list-item" (click)="highPricefilter()" [class.active]="activeFont === 1" HoverBlueBackground>가격높은 순</li>
                          <li class="filter-list-item" (click)="lowPricefilter()" [class.active]="activeFont === 2" HoverBlueBackground>가격낮은 순</li>
                          <li class="filter-list-item" (click)="highReviewfilter()" [class.active]="activeFont === 3" HoverBlueBackground>리뷰많은 순</li>
                        </ul>
                      </app-filter-option>
                    </div>
                  </div>
                </li>
              </ul> 
            </div>
          </div>
        </div>
        <div class="store-index-today-deal-list__content">
          <app-product-list
            [productItems]="productItems"
            [menuWidth]="menuWidth"
            [setNumber]="setNumberFamous"
          ></app-product-list>
        </div>
      </section>
    </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
    </div>
  `,
  styles: [
    ` .viewport{
        width: calc(100vw - 18px);
      }
      .featured-banner {
        position: relative;
        height: 375px;
        overflow: hidden;
      }
      .y-root-i3 {
        display: inline;
      }
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
        transition: opacity 0.1s;
      }

      .store-index-section {
        margin-top: 40px;
      }

      .container {
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
        width: 1136px;
        max-width: 100%;
        min-height: 1px;
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
        padding-right: 10px;
        padding-left: 10px;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin-right: -10px;
        margin-left: -10px;
      }

      .col-lg-3 {
        position: relative;
        width: 100%;
        min-height: 1px;
        box-sizing: border-box;
        flex: 0 0 25%;
        max-width: 25%;
        padding-right: 5px;
        padding-left: 5px;
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

      .production-item-stats--review > .avg {
        margin-right: 2px;
        color: #424242;
        font-weight: 700;
      }

      .production-item-image {
        padding-bottom: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
      }

      .production-item-image > .image {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        transition: transform 0.2s;
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

      .store-index-section > h1 {
        color: #000;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 14px;
        position: relative;
      }

      .keyword-list {
        margin: -5px 0;
      }

      .keyword-wrap {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-left: 10px;
      }

      .col-md-3 {
        padding-right: 10px;
        padding-left: 10px;
      }

      a {
        text-decoration: none;
      }

      .keyword {
        background-size: cover !important;
        background-position: 50%;
        border-radius: 4px;
        font-weight: 700;
        font-size: 17px;
        color: #fff;
        height: 120px;
        line-height: 120px;
        text-align: center;
        overflow: hidden;
        position: relative;
        width: 250px;
        background-repeat: no-repeat;
      }

      .keyword:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
      }

      .keyword:hover {
        text-decoration: underline;
      }

      .filter-bar__control-list {
        justify-content: space-between;
        min-width: 0;
        margin: 0 -2px;
        padding: 5px 0;
        align-items: center;
        display: flex;
        margin-bottom: 20px;
      }

      .freeShipping {
        width: 70px;
        font-size: 10px;
        flex: 0 0 auto;
        min-width: 0;
        margin: 0;
        padding: 0;
        list-style: none;
        white-space: nowrap;
      }

      .freeShippingDetail {
        width: 70px;
        font-size: 10px;
      }

      .filteredList {
        width: 70px;
        font-size: 10px;
        float: right;
        margin-top: -5px;
      }

      .detail {
        font-size: 10px;
      }

      .carousel-background {
        background-size: 1136px;
        position: relative;
      }

      .carousel-container {
        height: 350px;
        width: 1136px;
        position: relative;
        margin: 0 auto;
      }

      .carousel-container-set {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .carousel-title {
        font-weight: bold;
        font-size: 32px;
      }

      .carousel-description {
        position: absolute;
        left: 0;
      }

      .filter-bar-order-button {
        user-select: none;
        display: inline-block;
        padding: 7px 4px 6px;
        box-sizing: border-box;
        border: none;
        background: none;
        color: #424242;
        font-size: 13px;
        font-family: inherit;
        font-weight: 400;
        line-height: 19px;
        text-decoration: none;
        text-align: center;
        transition: opacity .1s;
        cursor: pointer;
    }

    .filter-bar__control-list__left, .filter-bar__control-list__right {
      flex: 0 0 auto;
      min-width: 0;
      margin: 0;
      padding: 0;
      list-style: none;
      white-space: nowrap;
    }

    .drop-down {
      position: relative;
      display: inline-block;
    }

    .filter-list-list {
      z-index: 1000;
    }

    .filter-list-item {
      font-size: 12px;
      padding: 5px 0px 5px 20px;
      height: 60px;
      display: flex;
      align-items: center;
    }

    .filter-wrapper {
      right: -85px;
      top: 20px;
      position: absolute;
      z-index: 100; 
      padding-top: 20px;
      cursor: pointer;
    }

    .filter-list-item.active {
      color: #35C5F0;
      font-weight: bold;
    }
    `
  ]
})
export class StoreComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  items = [
    {
      title: '오덴세 브랜드 위크',
      description: '단2주 7/29 ~ 8/11',
      img: '../../../assets/image/c1.png',
      background: '#E1E2DC'
    },
    {
      title: '가구에도 유행이 있다. 7월의 신상품',
      description: '우디크 최초 특별한 가격',
      img: '../../../assets/image/c2.png',
      background: '#DED0C6'
    },
    {
      title: '주방용품 브랜드 릴레이 세일',
      description: '쿡웨어브랜드5 기간한정 최저가',
      img: '../../../assets/image/c3.png',
      background: '#E4EEF7'
    }
  ];

  menuWidth: string = '25%';
  productItems: today_deal[];
  fulltodaysDeals: any;
  todaysDeals: store_home[];
  setNumber: number;
  setNumberFamous: number;

  today: Date;
  tomorrow: Date;
  gap: number;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  activeTimer: boolean = false;
  filterListItem: string = '인기순';
  filterShow: boolean;
  activeFont: number;

  keywords = [
    {
      words: '#장마철 #건조기 #제습기',
      url:
        'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-store-theme_category_covers-156402360657456416.jpg/850/none'
    },
    {
      words: '#한샘브랜드위크 #7%쿠폰',
      url:
        'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-store-theme_category_covers-156402366536096412.png/850/none'
    },
    {
      words: '#취향에 맞는 화장대',
      url:
        'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-store-theme_category_covers-156396935738716959.jpg/850/none'
    },
    {
      words: '#데스크테리어 #필기도구',
      url:
        'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-store-theme_category_covers-156396931903882649.png/850/none'
    }
  ];

  constructor(
    private storeService: StoreService,
    private theme: LyTheme2,
    private commonService: CommonService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("집 꾸미기 정보부터 구매까지 | 오늘의 집 스토어");
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.storeService.getProductList().subscribe((data) => {
      this.productItems = data as today_deal[];
      this.setNumberFamous = this.productItems.length;
    },
      (error: HttpErrorResponse) => { console.log(error) });

    this.storeService.getTodaysDeal().subscribe((data) => {
      this.fulltodaysDeals = data as store_home[];
      this.todaysDeals = this.fulltodaysDeals.todaydeal;
      this.setNumber = this.todaysDeals.length;
    },
      (error: HttpErrorResponse) => { console.log(error) });
    this.dealTimer();
  }

  highPricefilter() {
    this.productItems = this.productItems.sort(function (a, b) {
      return b.price - a.price;
    });
    this.filterListItem = '가격높은 순';
    this.filterShow = false;
    this.activeFont = 1;
  }

  lowPricefilter() {
    this.productItems = this.productItems.sort(function (a, b) {
      return a.price - b.price;
    });
    this.filterListItem = '가격낮은 순';
    this.filterShow = false;
    this.activeFont = 2;
  }

  highReviewfilter() {
    this.productItems = this.productItems.sort(function (a, b) {
      return b.review_count - a.review_count;
    });
    this.filterListItem = '리뷰많은 순';
    this.filterShow = false;
    this.activeFont = 3;
  }

  showFilter() {
    this.filterShow = true;
  }

  hideFilter() {
    this.filterShow = false;
  }

  dealTimer() {
    setInterval(() => {
      this.today = new Date();
      this.tomorrow = new Date();

      this.tomorrow.setDate(this.today.getDate() + 1);
      this.tomorrow.setHours(0, 0, 0, 0);

      this.gap = this.tomorrow.getTime() - this.today.getTime();

      this.hours = Math.floor(
        (this.gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((this.gap % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.gap % (1000 * 60)) / 1000);
    }, 1000);
    this.activeTimer = true;
  }
}
