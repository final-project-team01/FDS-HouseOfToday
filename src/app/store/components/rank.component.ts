import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { rankingPage, today_deal } from 'src/app/core/models/store.interface';

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
                <app-product-list [productItems]="productItems" [menuWidth]="menuWidth" [setNumber]="setNumber"></app-product-list>
                <button class="ranking-feed-card__more-btn" type="button" (click)="showMore()" [class.deactive]="activeClass"> 더보기 > </button>
              </div>
            </div>
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
    </section>
    <app-footer></app-footer>
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
export class RankComponent implements OnInit {
  menuWidth: string = '20%';

  rankingList: rankingPage;
  productItems: today_deal;
  setNumber: number = 10;
  activeClass: boolean;
  homeDeco: today_deal;
  dailySupply: today_deal;
  fabric: today_deal;
  kitchenWare: today_deal;
  homeAppliance: today_deal;
  companionAnimals: today_deal;
  furniture: today_deal;  

  constructor(private storeService: StoreService
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.storeService.getRankingList()
      .subscribe(data => {
        this.rankingList = data as rankingPage;
        this.productItems = this.rankingList.best100;
        this.homeDeco = this.rankingList.light_homedeco;
        this.dailySupply = this.rankingList.daily_supplies;
        this.fabric = this.rankingList.fabric;
        this.kitchenWare = this.rankingList.kitchenware;
        this.homeAppliance = this.rankingList.home_appliances;
        this.companionAnimals = this.rankingList.companion_animal;
        this.furniture = this.rankingList.furniture;
      });
  }

  showMore() {
    this.setNumber = 100;
    this.activeClass = true;
  }
}
