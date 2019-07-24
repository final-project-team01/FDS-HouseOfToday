import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { rankingPage, today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-rank-container',
  template: `
    <section class="ranking-feed">
      <div class="ranking-feed-group">
        <div class="ranking-feed-card">
          <div class="container">
            <app-rank-best [showTen]="showTen" [productItems]="productItems" (showMoreBtn)="showMoreBtn.emit()" [setNumber]="setNumber" [menuWidth]="menuWidth"></app-rank-best>
            <div *ngIf="showTen">
              <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">조명&홈데코 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="homeDeco" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
                <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">생활용품 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="dailySupply" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
              </div>
              <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">패브릭 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="fabric" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
              </div>
              <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">주방용품 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="kitchenWare" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
                <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">가전제품 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="homeAppliance" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
              </div>
              <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">반려동물 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="companionAnimals" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
              </div>
              <div class="ranking-feed-card__title-wrap">
                <p class="ranking-feed-card__title">가구 BEST</p>
                <div class="ranking-feed-card__product-wrap">
                  <app-product-list [productItems]="furniture" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                  <button class="ranking-feed-card__more-btn" type="button"> 더보기 > </button>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
  section {
    display: block;
  }

  .ranking-feed {
    margin-top: 40px;
  }
  
  .ranking-feed-card__title-wrap {
    position: relative;
    margin-top: 0;
  }

  .ranking-feed-card {
    border-bottom: none;
    margin: 0 auto;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    width: 1136px;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }

  .ranking-feed-card__title-wrap {
    margin-top: 0;
    position: relative;
  }

  .ranking-feed-card__title {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: bold;
    color: #000;
    display: inline-block;
  }

  .ranking-feed-card__product-wrap {
    flex-wrap: wrap;
    white-space: normal;
    margin: 0 -10px;
    display: flex;
  }

  .ranking-feed-card__more-btn {
    margin: 16px 0 80px;
    padding: 0;
    border: none;
    width: 100%;
    height: 45px;
    border-radius: 4px;
    background-color: #ededed;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    color: #757575;
    cursor: pointer;
  }

  .ranking-feed-card__more-btn.deactive {
    display: none;
  }
  `]
})
export class RankContainerComponent implements OnInit {
  @Input() menuWidth: string;
  @Input() rankingList: rankingPage;
  @Input() productItems: today_deal;
  @Input() setNumber: number;
  @Input() activeClass: boolean;
  @Input() homeDeco: today_deal;
  @Input() dailySupply: today_deal;
  @Input() fabric: today_deal;
  @Input() kitchenWare: today_deal;
  @Input() homeAppliance: today_deal;
  @Input() companionAnimals: today_deal;
  @Input() furniture: today_deal;
  @Input() showTen: boolean;
  @Output() showMoreBtn = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

}
