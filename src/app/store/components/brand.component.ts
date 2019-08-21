import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/core/services/common.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-brand',
  template: `
    <app-header></app-header>
      <div class="brand-wrap container">
        <div class="brand row">
          <div class="brand__side-bar col-12 col-md-3">
            <article class="brand-profile">
              <div class="brand-profile__content">
                <h1 class="brand-profile__name">{{name}}</h1>
                <p class="brand-profile__overview">
                  <span class="brand-profile__stars">
                    <app-star-rate [starAvg]="star_average" [width]="20"></app-star-rate>
                  </span>
                  <span class="brand-profile__count">{{star_average}}({{brandItems.length}})</span>
                </p>
              </div>
            </article>
          </div>
          <div class="brand__content col-12 col-md-9">
            <section class="brand__section">
              <div class="category-content">
                <header class="brand__section__header">
                  <h1 class="brand__section__title">모든 상품</h1>
                </header>
                <div class="filter-bar__control-list">
                <app-filter-drop-button class="filter-drop-button">가격</app-filter-drop-button>
                <app-filter-drop-button class="filter-drop-button">배송</app-filter-drop-button>
                <app-filter-drop-button class="filter-drop-button">판매여부</app-filter-drop-button>
                </div>
                <div class="category-feed-filter-bar__secondary">
                  <p class="category-feed-filter-bar__secondary__summary">전체 {{commonService.addComma(brandItems.length)}}</p>
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
                <div class="product-list">
                  <app-product-list [productItems]="brandItems" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    <app-footer></app-footer>
  `,
  styles: [`
  .brand-wrap {
    margin-top: 50px;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
    width: 1136px;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-right: -10px;
    margin-left: -10px;
  }

  .col-md-3 {
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .brand-profile {
    display: block;
    margin-bottom: 50px;
    align-items: flex-start;
  }

  .brand-profile__content {
    margin: 6px 0 0;
    flex: 1 1 auto;
  }

  .brand-profile__content {
    margin: 6px 0 0;
    flex: 1 1 auto;
  }

  .brand-profile__name {
    margin: -5px 0;
    font-size: 30px;
    line-height: 40px;
    color: #424242;
    font-weight: 700;
    overflow-wrap: break-word;
  }

  .brand-profile__overview {
    margin: 20px 0;
    font-size: 15px;
    line-height: 20px;
    color: #757575;
  }

  .brand__section {
    margin-bottom: 50px;
  }

  .col-md-9 {
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .brand__section__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 0 20px;
  }

  .brand__section__title {
    flex: 0 1 auto;
    margin: -1px 0;
    color: #424242;
    font-size: 17px;
    line-height: 21px;
    font-weight: 700;
  }

  .brand__production-section {
    position: relative;
  }

  .category-content {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
  }

  .commerce-category-header {
    margin-bottom: 10px;
  }

  .commerce-category-wrap {
    display: flex;
    align-items: center;
  }

  .commerce-category-nav {
    flex: 1 0 0px;
    min-width: 0;
  }

  nav {
    display: block;
  }

  ul {
    display: block;
    margin-block-start: 1em;
  }

  .sticky-container {
    position: sticky;
    z-index: 100;
    transition: top .1s;
    margin-bottom: 5px;
    width: 100%;
  }

  .sticky-content-wrap {
    position: relative;
    background-color: #fff;
  }

  .commerce-category-innernav-list {
    margin-right: 10px;
    color: #000;
    font-size: 15px;
    display: inline-block;
    margin-right: 2px;
    color: #424242;
    font-size: 11px;
    line-height: 1.2;
  }

  .category-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px; 
  }

  .category-filter-summary {
    flex: 0 0 auto;
    font-size: 13px;
    color: #757575;
  }

  .filteredList {
    margin-bottom: 10px;
    width: 60px;
    font-size: 10px;
  }

  .product-list {
    width: 840px;
  }

  .categorylist {
    cursor: pointer;
  }

  .detail {
    font-size: 10px;
  }

  .categorylist.active {
    color: skyblue;
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
  
  .category-feed-filter-bar__secondary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    margin-bottom: 10px;
  }
  
  .category-feed-filter-bar__secondary__summary {
    flex: 0 0 auto;
    font-size: 13px;
    color: #757575;
  }
  
  .filter-drop-button {
    margin-right: 5px;
  }
  
  .filter-list-item {
    font-size: 12px;
    padding-left: 20px;
    height: 60px;
    display: flex;
    align-items: center;
  }
  
  .filter-wrapper {
    right: -85px;
    top: 30px;
    position: absolute;
    z-index: 100; 
  }
  
  .filter-list-item.active {
    color: #35C5F0;
    font-weight: bold;
  }

  .brand-profile__stars {
    margin-right: 10px;
  }
  `]
})
export class BrandComponent implements OnInit {
  name: string;
  brandItems: today_deal[] = [];
  star_score: number = 0;
  star_average: number;
  menuWidth: string = '33%';
  setNumber: number;
  filterShow: boolean;
  activeFont: number;
  filterListItem: string = '인기순';

  constructor(private route: ActivatedRoute
    , private storeService: StoreService
    , private userService: UserService
    , public commonService: CommonService
    , private cartService: CartService
    , private titleService: Title
    , private router: Router) { }

  ngOnInit() {
    window.scroll({ top: 0 });
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.route.paramMap
      .subscribe(params => { this.name = params.get('name') },
        (error: HttpErrorResponse) => { console.log(error) });
    this.storeService.getBrandItems(this.name)
      .subscribe((data) => {
        this.brandItems = data as today_deal[];
        this.brandItems.map((brandItem) => {
          this.star_score += +brandItem.star_avg;
          this.star_average = +(this.star_score / this.brandItems.length).toFixed(2);
          this.setNumber = this.brandItems.length;
        })
      })
  }
  highPricefilter() {
    this.brandItems = this.brandItems.sort(function (a, b) {
      return b.price - a.price;
    });
    this.filterShow = false;
    this.activeFont = 1;
    this.filterListItem = '가격높은 순';
  }

  lowPricefilter() {
    this.brandItems = this.brandItems.sort(function (a, b) {
      return a.price - b.price;
    })
    this.filterShow = false;
    this.activeFont = 2;
    this.filterListItem = '가격낮은 순';
  }

  highReviewfilter() {
    this.brandItems = this.brandItems.sort(function (a, b) {
      return b.review_count - a.review_count;
    })
    this.filterShow = false;
    this.activeFont = 3;
    this.filterListItem = '리뷰많은 순'
  }

  showFilter() {
    this.filterShow = true;
  }

  hideFilter() {
    this.filterShow = false;
  }
}
