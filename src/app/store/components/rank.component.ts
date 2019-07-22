import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-rank',
  template: `
    <app-header></app-header>
    <section class="ranking-feed">
      <div class="ranking-feed-group">
        <div class="ranking-feed-card">
          <div class="container">
            <div class="ranking-feed-card__title-wrap">
              <p class="ranking-feed-card__title">카테고리별 BEST 100</p>
              <div class="ranking-feed-card__product-wrap">
                <app-product-list [productItems]="productItems" [menuWidth]="menuWidth"></app-product-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  `,
  styles: []
})
export class RankComponent implements OnInit {
  menuWidth: string = '20%';

  productItems = [
    { id: 1, productdetail: '1+1+1+1 시그니쳐퍼퓸디퓨저 200ml', businessname: '데일리콤마', price: '16,900', discount: '52', stars: '4.2', reviews: '84' },
    { id: 2, productdetail: '1+1+1+1 시그니쳐퍼퓸디퓨저 200ml', businessname: '데일리콤마', price: '16,900', discount: '52', stars: '4.2', reviews: '84' },
    { id: 3, productdetail: '1+1+1+1 시그니쳐퍼퓸디퓨저 200ml', businessname: '데일리콤마', price: '16,900', discount: '52', stars: '4.2', reviews: '84' },
    { id: 4, productdetail: '1+1+1+1 시그니쳐퍼퓸디퓨저 200ml', businessname: '데일리콤마', price: '16,900', discount: '52', stars: '4.2', reviews: '84' },
    { id: 4, productdetail: '1+1+1+1 시그니쳐퍼퓸디퓨저 200ml', businessname: '데일리콤마', price: '16,900', discount: '52', stars: '4.2', reviews: '84' },
    { id: 4, productdetail: '1+1+1+1 시그니쳐퍼퓸디퓨저 200ml', businessname: '데일리콤마', price: '16,900', discount: '52', stars: '4.2', reviews: '84' },
  ]

  constructor(private storeService: StoreService
    , private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.setIsStore(true);
  }

}
