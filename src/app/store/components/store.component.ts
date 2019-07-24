import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { store_list, store_home } from 'src/app/core/models/store.interface';

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
    <div class="featured-banner">
      <ly-carousel class="store-carousel"
        [withClass]="classes.carousel">
        <ly-carousel-item
          *ngFor="let item of items"
          [withClass]="classes.carouselItem"
          [srcImg]="item.img"
        >
          <h1>{{ item.title }}</h1>
        </ly-carousel-item>
      </ly-carousel>
    </div>
    <div class="store-index">
      <section class="container store-index-section store-index-today-deal-list">
        <header class="store-index-today-deal-list__header">  
          <h1 class="store-index-today-deal-list__title" (click)="getdeals()">오늘의 딜</h1>
          <a class="store-index-today-deal-list__detail-link" href="#">최대 85% 타임특가</a>
        </header>
        <div class="today-deal-timer-container">
          <p class="today-deal-timer">{{hours}}{{minutes}}{{seconds}}</p>
          <div class="store-index-today-deal-list__content">
            <app-product-list [productItems]="todaysDeals" [menuWidth]="menuWidth"></app-product-list>
          </div>
        </div>
      </section>
      <section class="container store-index-section">
        <h1>인기 키워드</h1>
        <div class="row keyword-list">
          <div *ngFor="let keyword of keywords" class="col-6 col-md-3 keyword-wrap">
            <a href="#">
              <div class="keyword">
                <span style="position:relative">{{keyword.words}}</span>
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
              <ly-field class="freeShipping" appearance="filled">
                <ly-label>무료배송</ly-label>
                <ly-select placeholder="Placeholder">
                  <ly-option class="freeShippingDetail" value="1">무료배송</ly-option>
                </ly-select>
              </ly-field>
              <ly-field class="filteredList">
                <ly-label>인기순</ly-label>
                <ly-select  class="filteredListDetail" placeholder="Placeholder">
                  <ly-option value="1">Item 1</ly-option>
                  <ly-option value="2">Item 2</ly-option>
                  <ly-option value="3">Item 3</ly-option>
                </ly-select>
              </ly-field>
            </div>
          </div>
        </div>
        <div class="store-index-today-deal-list__content">
          <app-product-list [productItems]="productItems" [menuWidth]="menuWidth"></app-product-list>
        </div>
      </section>
    </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
  .featured-banner {
    position: relative;
    height: 375px;
    overflow: hidden;
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
    transition: opacity .1s;
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

  .production-item-stats--review>.avg {
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

  .keyword-list {
    margin: -5px 0;
  }

  .keyword-wrap {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .col-md-3 {
    padding-right: 10px;
    padding-left: 10px;
  }

  a {
    text-decoration: none;
  }

  .keyword {
    background-color: green;
    background-size: cover!important;
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
  }

  .keyword:hover {
    text-decoration: underline;
  }

  .filter-bar__control-list {
    position: relative;
    width: 1136px;
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
  `]
})
export class StoreComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  items = [
    {
      title: 'Mountains',
      img: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2F' +
        'Mountains-Blue.jpg?alt=media&token=d04f0279-79c6-4752-8b5a-cccd73720243'
    },
    {
      title: 'Four Lakes, Queshuachaca',
      img: 'https://firebasestorage.googleapis.com/v0/b/head-expeditions.appspot.com/o/img%2F' +
        'files%2F61028703-1476458588-5a289afc-59e8-4a8d-1dea-369e-570b-cfb2.jpg?alt=media&token=ceaf31b5-2b87-438b-b0d1-e4cc4f8603a2'
    },
    {
      title: 'Mountains',
      img: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2F' +
        'mads-schmidt-rasmussen-567063-unsplash.jpg?alt=media&token=5acdfbb2-7eff-4879-b7d0-a441826d88ae'
    }
  ];

  menuWidth: string = '25%'
  productItems: store_list;
  todaysDeals;

  todayDate
  tomorrowDate
  timeLeft
  days
  hours
  minutes
  seconds

  keywords = [
    { words: '#장마철 #건조기 #제습기' },
    { words: '#한샘브랜드위크 #7%쿠폰' },
    { words: '#취향에 맞는 화장대' },
    { words: '#데스크테리어 #필기도구' },
  ]

  constructor(private storeService: StoreService, private theme: LyTheme2, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.storeService.getProductList()
      .subscribe(data => this.productItems = data as store_list);
    
    this.storeService.getTodaysDeal()
      .subscribe(data => { 
        this.todaysDeals = data as store_home;
        this.todaysDeals = this.todaysDeals.todaydeal;
      });
  }

  dealTimer() {
    setInterval(() => {
      this.todayDate = new Date();
      this.tomorrowDate = new Date(this.todayDate.getTime() + (24 * 60 * 60 * 1000));

      this.timeLeft = this.tomorrowDate - this.todayDate;

      console.log(this.todayDate);
      console.log(this.tomorrowDate);
      console.log(this.timeLeft);

      this.days = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)));
      this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
    }, 1000)
  }
}
