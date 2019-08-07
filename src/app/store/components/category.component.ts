import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { store_list, categoryfilter, today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-category',
  template: `
    <app-header></app-header>
    <div class="category-container">
      <div class="category-wrap container">
        <div class="category row">
          <div class="category-sidebar">
            <section class="commerce-category">
              <ul *ngFor="let categoryList of categoryLists" class="commerce-category-list">
                <li class="commerce-category-list_item">
                  <a class="categorylist" [class.active]="listActive === categoryList.id"(click)="changeCategory(categoryList.id)" OpacityDot7Font>{{ categoryList.name }}</a>
                </li>
              </ul>
            </section>
          </div>
          <div class="category-content">
            <div class="commerce-category-header">
              <div class="commerce-category-wrap">
                <nav clss="commerce-category-nav">
                  <ul class="commerce-category-innernav">
                    <li class="commerce-category-innernav-list"><a class="link" routerLink="/store">오늘의집 스토어</a><span>  >  </span></li>
                    <li class="commerce-category-innernav-list"><a class="link">{{categoryName}}</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="filter-bar__control-list">
            <app-filter-drop-button class="filter-drop-button">가격</app-filter-drop-button>
            <app-filter-drop-button class="filter-drop-button">배송</app-filter-drop-button>
            </div>
            <div class="category-feed-filter-bar__secondary">
              <p class="category-feed-filter-bar__secondary__summary">전체 {{commonService.addComma(productItems.length)}}</p>
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
              <app-product-list [productItems]="productItems" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    div {
      display:block;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    .category-container {
      position: relative;
      width: 100%;
      min-height: 1px;
      box-sizing: border-box;
      flex: 0 0 75%;
    }

    .category-wrap {
      margin: 40px;
    }

    .container {
      margin-right: auto;
      margin-left: auto;
      width: 1136px;
      max-width: 100%;
      box-sizing: border-box;
      min-height: 1px;
    }

    .commerce-category-list {
      margin: 15px 0 10px;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin-right: -10px;
      margin-left: -10px;
    }

    .category-sidebar {
      display: block;
      padding-right: 10px;
      padding-left: 10px;
      width: 200px;
    }

    .commerce-category {
      max-width: 160px; 
    }

    .commerce-category-list_item {
      font-size: 17px;
      font-weight: bold;
      color: #000;
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
      width: 900px;
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
    margin-bottom: 20px;
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
    padding: 5px 0px 5px 20px;
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
  `]
})
export class CategoryComponent implements OnInit {
  menuWidth: string = '33%';

  categoryLists: object;
  categoryFilter: any;
  productItems: today_deal[];
  categoryName: string = '가구';
  setNumber: number;
  listActive: number = 2;
  filterListItem: string = '인기순';
  filterShow: boolean;
  activeFont: number;

  constructor(private storeService: StoreService
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.storeService.getProductList()
      .subscribe(data => {
        this.productItems = data as today_deal[];
        this.setNumber = this.productItems.length;
      });
    this.storeService.getCategoryList()
      .subscribe(data => this.categoryLists = data);
  }

  changeCategory(id: number) {
    this.storeService.getCategoryDetailList(id)
      .subscribe(data => {
        this.categoryFilter = data as categoryfilter[];
        this.productItems = this.categoryFilter.products;
        this.categoryName = this.categoryLists[id - 1].name;
      });
    this.listActive = id;
  }

  highPricefilter() {
    this.productItems = this.productItems.sort(function(a, b) {
      return b.price - a.price;
    });
    this.filterShow = false;
    this.activeFont = 1;
  }

  lowPricefilter() {
    this.productItems = this.productItems.sort(function(a, b) {
      return a.price - b.price;
    })
    this.filterShow = false;
    this.activeFont = 2;
  }

  highReviewfilter() {
    this.productItems = this.productItems.sort(function(a, b) {
      return b.review_count - a.review_count;
    })
    this.filterShow = false;
    this.activeFont = 3;
  }

  showFilter() {
    this.filterShow = true;
  }

  hideFilter() {
    this.filterShow = false;
  }

}
