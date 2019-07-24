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
                  <a class="categorylist" (click)="changeCategory(categoryList.id)">{{ categoryList.name }}</a>
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
            <div class="sticky-container">
              <div class="sticky-content-wrap">
                <div class="category-filter">
                  <p class="category-filter-summary">전체</p>
                  <div class="category-filter-summary-right">
                    <div class="categry-filter-summary-right-item">
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
              </div>
            </div>
            <div class="product-list">
              <app-product-list [productItems]="productItems" [menuWidth]="menuWidth"></app-product-list>
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
      width: 50px;
      font-size: 10px;
    }

    .product-list {
      width: 900px;
    }

    .categorylist {
      cursor: pointer;
    }
  `]
})
export class CategoryComponent implements OnInit {
  menuWidth: string = '33%';

  categoryLists: object;
  categoryFilter: categoryfilter;
  productItems: today_deal;
  categoryName: string = '가구';

  constructor(private storeService: StoreService
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.storeService.getProductList()
      .subscribe(data => this.productItems = data as today_deal);
    this.storeService.getCategoryList()
      .subscribe(data => this.categoryLists = data);
  }

  changeCategory(id: number) {
    this.storeService.getCategoryDetailList(id)
      .subscribe(data => {
        this.categoryFilter = data as categoryfilter;
        this.productItems = this.categoryFilter.products;
        this.categoryName = this.categoryLists[id - 1].name;
      });
  }
}
