import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { store_list, rankingPage, today_deal } from 'src/app/core/models/store.interface';

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
  `]
})
export class RankComponent implements OnInit {
  menuWidth: string = '20%';

  rankingList: rankingPage;
  productItems: today_deal;

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
      });
  }

}
