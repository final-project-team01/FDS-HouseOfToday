import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';
import { CommonService } from 'src/app/core/services/common.service';


@Component({
  selector: 'app-product-review',
  template: `
    <div class="product-review-container">
      <a class="write-review cursor">리뷰쓰기</a>
      <div class="star-rate-container">
        <span class="star-avg">{{ starAvg }}</span>
        <div class="star-bg">
          <div class="star-rate" [style.width.px]="starAvg * 60">
            <img src="../../../../assets/image/star-rate.png">
          </div>
        </div>
      </div>
      <div class="filter-container">
      <ul>
        <li class="review-filter-menu cursor">베스트순</li>
        <li class="review-filter-menu cursor">최신순</li>
        <li class="review-filter-menu cursor"><span class="pic-icon"></span>사진리뷰</li>
      </ul>
      <ul class="filter-btns">
        <li>
          <button class="review-filter-btn cursor">별점
          <span class="pointer-icon"></span>
          </button>
          <ul class="review-star-filter">
            <li class="cursor" (click)="reviewFilter(5)">
              <div class="stars" *ngFor="let star of chosenList; let i = index" >
                <span class="star pic-icon" *ngIf=" i < 5">
                </span>
              </div>
              <span>({{ getScore(5) }}개)</span>
            </li>
            <li class="cursor" (click)="reviewFilter(4)">
              <div class="stars" *ngFor="let star of chosenList; let i = index" >
                <span class="star pic-icon" *ngIf=" i < 4">
                </span>
              </div>
              <span>({{ getScore(4) }}개)</span>
            </li>
            <li class="cursor" (click)="reviewFilter(3)">
              <div class="stars" *ngFor="let star of chosenList; let i = index" >
                <span class="star pic-icon" *ngIf=" i < 3">
                </span>
              </div>
              <span>({{ getScore(3) }}개)</span>
            </li>
            <li class="cursor" (click)="reviewFilter(2)">
              <div class="stars" *ngFor="let star of chosenList; let i = index" >
                <span class="star pic-icon" *ngIf=" i < 2">
                </span>
              </div>
              <span>({{ getScore(2) }}개)</span>
            </li>
            <li class="cursor" (click)="reviewFilter(1)">
              <div class="stars" *ngFor="let star of chosenList; let i = index" >
                <span class="star pic-icon" *ngIf=" i < 1">
                </span>
              </div>
              <span>({{ getScore(1) }}개)</span>
            </li>
          </ul>
        </li>
        <li>
          <button class="review-filter-btn cursor">옵션
          <span class="pointer-icon"></span>
          </button>
        </li>
      </ul>
      </div>
      <article class="user-review" *ngFor="let review of originalList | pageFilter: index">
        <span class="user">사용자</span>
        <div class="review-star-score">
          <span class="star pic-icon" *ngFor="let star of range(review['star_score'])">
          </span>
        </div>
        <span class="review-date">{{ review.created }}</span>
        <div class="review-image" *ngIf="review.image !== null">
          <img src="../../../../assets/image/meat.jpg">
        </div>
        <p class="review-comment">{{ review.comment }}</p>
        <button class="helpful cursor">도움이 돼요</button>
      </article>
      <app-pagination 
        [originalList]="originalList"
        [pages]="pages"
        (change)="changePage($event)">
      </app-pagination>
    </div>
  `,
  styleUrls: ['./product-review.scss']
})
export class ProductReviewComponent implements OnInit {

  @Input() originalList: review[];
  @Input() chosenList: review[];
  @Input() pages: any;
  @Input() starAvg: number;

  index = 0;

  constructor() { }

  ngOnInit() {
    
  }

  range(i: number){
    return Array(i);
  }

  changePage(i: number){
    this.index = i;
  }

  getScore(n: number){
    return this.originalList ? this.originalList.filter(review => review.star_score === n).length : 0;
  }
}
