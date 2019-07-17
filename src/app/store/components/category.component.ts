import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

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
                  <a href="#">{{ categoryList.categoryName }}</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    ul {
      margin: 0;
      padding: 0;
    }

    .category-container {
      position: relative;
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
    }

    .commerce-category {
      max-width: 160px; 
    }

    .commerce-category-list_item {
      font-size: 17px;
      font-weight: bold;
      font-style: bold;
      color: #000;
    }
  `]
})
export class CategoryComponent implements OnInit {
  categoryLists = [
    { categoryName: '가구'},
    { categoryName: '여름 인테리어'},
    { categoryName: '패브릭'},
    { categoryName: '홈데코/조명'},
    { categoryName: '가전'},
    { categoryName: '수납/생활'},
    { categoryName: '주방'},
    { categoryName: 'DIY셀프시공'},
    { categoryName: '시공/서비스'},
    { categoryName: '반려동물'},
  ]

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
