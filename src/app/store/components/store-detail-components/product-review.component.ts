import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';


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
        <li class="review-filter-menu cursor"><span class="icon-etc"></span>사진리뷰</li>
      </ul>
      <ul class="filter-btns">
        <li 
        (mouseover)="showFilter = 'block'"
        (mouseleave)="showFilter = 'none'">
          <button class="review-filter-btn cursor" [class.active]="chosenScore !== 0">별점
          <span class="icon-pointer arrow"></span>
          </button>
          <div>
          <ul class="review-star-filter"
          [style.display]="showFilter">
            <li class="cursor" *ngFor="let score of scoreArray; let i = index" 
              (click)="reviewFilter(score)">
              <span class="star icon-etc" *ngFor="let score of range(score)">
              </span>
              <span class="greystar icon-etc" *ngFor="let score of range(i)">
              </span>
              <span [class.blueText]="chosenScore === score"> ({{ getScore(score) }}개)</span>
            </li>
          </ul>
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
      <div class="user-review-container">
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
        <button class="helpful cursor">도움이 돼요</button>
      </article>
      </div>
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
  @Input() 
  set originalList(originalList: review[]){
    this._originalList = originalList;
    this.filteredList = originalList
  };
  
  _originalList: review[];
  filteredList: review[];
  showFilter = 'none';
  chosenScore = 0;
  scoreArray = [5, 4, 3, 2, 1];
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
}
