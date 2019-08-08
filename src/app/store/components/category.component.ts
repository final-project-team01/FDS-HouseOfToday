import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { store_list, categoryfilter, today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-category',
  template: `
    <app-header></app-header>
    <div class="viewport">
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
            <app-sort-filter (highPricefilterEvent)="highPricefilter()" (lowPricefilterEvent)="lowPricefilter()" (highReviewfilterEvent)="highReviewfilter()"></app-sort-filter>
            <div class="product-list">
              <app-product-list [productItems]="productItems" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
  .viewport{
    width: calc(100vw - 18px);
  }
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
  }

  lowPricefilter() {
    this.productItems = this.productItems.sort(function(a, b) {
      return a.price - b.price;
    })
  }

  highReviewfilter() {
    this.productItems = this.productItems.sort(function(a, b) {
      return b.review_count - a.review_count;
    })
  }
}
