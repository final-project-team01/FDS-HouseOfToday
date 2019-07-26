import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { rankingPage, today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-rank-best',
  template: `
    <div *ngIf="showTen">
      <div class="ranking-feed-card__title-wrap">
        <p class="ranking-feed-card__title">카테고리별 BEST 100</p>
        <div class="ranking-feed-card__product-wrap">
          <app-product-list [productItems]="productItems" [menuWidth]="menuWidth" [setNumber]="setNumber" [activeRank]="activeRank"></app-product-list>
          <button class="ranking-feed-card__more-btn" type="button" (click)="showMoreBtn.emit()" [class.deactive]="activeClass"> 더보기 > </button>
        </div>
      </div>
    </div>
    <div *ngIf="!showTen">
    <div class="ranking-feed-card__title-wrap">
      <p class="ranking-feed-card__title">카테고리별 BEST 100</p>
      <div class="ranking-feed-card__product-wrap">
        <app-product-list [productItems]="productItems" [menuWidth]="menuWidth" [setNumber]="setNumber" [activeRank]="activeRank"></app-product-list>
      </div>
    </div>
  </div>
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
export class RankBestComponent implements OnInit {
  @Input() menuWidth: string;
  @Input() rankingList: rankingPage;
  @Input() productItems: today_deal;
  @Input() setNumber: number;
  @Input() activeClass: boolean;
  @Input() showTen: boolean;
  @Input() activeRank: boolean;
  @Output() showMoreBtn = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
