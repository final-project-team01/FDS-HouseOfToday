import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { StoreService } from 'src/app/core/services/store.service';


@Component({
  selector: 'app-product-review',
  template: `
    <div class="product-review-container">
      <a class="write-review cursor">리뷰쓰기</a>
      <div class="star-rate-container">
        <span class="star-avg">{{ starAvg }}</span>
        <app-star-rate [starAvg]="starAvg" [width]="300"></app-star-rate>
      </div>
      <div class="filter-container">
      <ul>
        <li class="review-filter-menu cursor">베스트순</li>
        <li class="review-filter-menu cursor">최신순</li>
        <li class="review-filter-menu cursor"><span class="icon-etc"></span>사진리뷰</li>
      </ul>
      <ul class="filter-btns">
        <li 
        (mouseover)="showFilter = 'block'"
        (mouseleave)="showFilter = 'none'">
          <button class="review-filter-btn cursor" 
            [class.active]="chosenScore !== 0" FilterButton>별점
          <span class="icon-pointer arrow"></span>
          </button>
          <div *ngIf="showFilter === 'block'">
            <app-filter-option [width]="170">
              <ul class="review-star-filter">
                <li class="cursor" *ngFor="let score of scoreArray; let i = index" 
                  (click)="reviewFilter(score)">
                  <span class="star icon-etc" *ngFor="let score of range(score)">
                  </span>
                  <span class="greystar icon-etc" *ngFor="let score of range(i)">
                  </span>
                  <span [class.blueText]="chosenScore === score"> ({{ getScore(score) }}개)</span>
                </li>
              </ul>
            </app-filter-option>
          </div>
        </li>
        <li>
          <button class="review-filter-btn cursor">옵션
          <span class="icon-pointer arrow"></span>
          </button>
        </li>
      </ul>
      </div>
      <div class="chosenScore" *ngIf="chosenScore !== 0">
        <span class="star icon-etc" *ngFor="let score of range(chosenScore)">
        </span>
        <span class="greystar icon-etc" *ngFor="let score of range(5 - chosenScore)">
        </span>
        <span class="blueText"> ({{ getScore(chosenScore) }}개)</span>
        <span class="icon-pointer close cursor" (click)="cancelFilter()"></span>
      </div>
      <div class="user-review-container" *ngIf="filteredList?.length !== 0; else noReview">
        <article class="user-review" *ngFor="let review of filteredList | pageFilter: index">
          <span class="user">사용자</span>
          <div class="review-star-score">
            <span class="star icon-etc" *ngFor="let star of range(review['star_score'])"></span>
          </div>
          <span class="review-date">{{ review.created }}</span>
          <div class="review-image" *ngIf="review.image !== null">
            <img src="{{ review.image }}">
          </div>
          <p class="review-comment">{{ review.comment }}</p>
          <button class="helpful clicked cursor" BlueButton
            *ngIf="review.helpful.indexOf(this.commonService.getUserDetail()['id']) !== -1;
            else helpfulClicked"
            (click)="helpful(review)">
            <svg width="16" height="16" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet">
              <path fill="#FFF" d="M2.28 4.99l4.15 6.03 7.36-9.35 1.54 1.2-9 11.46L.67 6.1z" fill-rule="evenodd">
              </path>
            </svg>
          도움됨</button>
          <ng-template #helpfulClicked>
            <button class="helpful cursor" (click)="helpful(review)">
            도움이 돼요</button>
          </ng-template>
          <span *ngIf="review.helpful_count > 0">{{ review.helpful_count }}명에게 도움이 되었습니다.</span>
        </article>
      </div>
      <ng-template #noReview>
        <div class="no-review"><p>리뷰가 없습니다.</p></div>
      </ng-template>
      <app-pagination 
        [originalList]="filteredList"
        (change)="changePage($event)">
      </app-pagination>
    </div>
  `,
  styleUrls: ['./product-review.scss']
})
export class ProductReviewComponent implements OnInit {

  @Input() starAvg: number;
  @Input() productId: number;
  @Input() 
  set originalList(originalList: review[]){
    this._originalList = originalList;
    this.filteredList = originalList
  };
  
  userInfo: any;
  _originalList: review[];
  filteredList: review[];
  showFilter = 'none';
  chosenScore = 0;
  scoreArray = [ 5, 4, 3, 2, 1 ];
  index = 0;

  constructor(private commonService: CommonService
            , private storeService: StoreService) { }

  ngOnInit() {
    
  }

  range(i: number){
    return Array(i);
  }

  changePage(i: number){
    this.index = i;
  }

  getScore(n: number){
    return this._originalList ? this._originalList.filter(review => review.star_score === n).length : 0;
  }

  reviewFilter(n: number){
    this.filteredList = this._originalList.filter(review => {
      if(review.star_score === n) return review;
    });
    this.showFilter = 'none';
    this.chosenScore = n;
  }

  cancelFilter(){
    this.chosenScore = 0;
    this.filteredList = this._originalList;
  }

  helpful(review: review){
    const id = review.id;
    this.storeService.checkHelpful(id)
      .subscribe(res => {
        console.log(res);
      },
        err => {
          console.log(err.message);
      });
    this.storeService.getProductInfo(this.productId)
      .subscribe(res => {
        let newReview = res['review'].find(review => review.id === id);
        this.filteredList = this.filteredList.map(review => {
          return review = review.id === id ? newReview : review;
        });
        this._originalList = res['review'].sort(function (a, b) {
          return b.star_score - a.star_score;
        });
      });
  }
}
