import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { review, product_info } from 'src/app/core/models/store.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-review',
  template: `
    <div class="product-review-container">
      <a class="write-review cursor" (click)="showReviewModal()">리뷰쓰기</a>
      <div class="star-rate-container">
        <span class="star-avg">{{ starAvg }}</span>
        <app-star-rate [starAvg]="starAvg" [width]="50"></app-star-rate>
      </div>
      <div class="filter-container">
      <ul>
        <li class="review-filter-menu cursor">베스트순</li>
        <li class="review-filter-menu cursor">최신순</li>
        <li class="review-filter-menu cursor">
          <svg class="icon" width="18" height="18" viewBox="0 0 18 18" 
            preserveAspectRatio="xMidYMid meet"><path fill="currentColor" 
            d="M15.821 3a.67.67 0 0 1 .679.672v10.656a.67.67 0 0 1-.679.672H2.18a.67.67 0 0 1-.679-.672V3.672c0-.375.3-.672.679-.672H15.82zm-.679 1.344H2.858v8.14L7.01 7.781c.094-.125.284-.125.394 0l2.321 2.657c.048.046.063.109.048.156l-.3 1.375c-.016.11.11.172.173.094l2.369-2.579a.202.202 0 0 1 .284 0l2.842 3.094V4.344zm-2.526 3.61a1.1 1.1 0 0 1-1.105-1.095 1.1 1.1 0 0 1 1.105-1.093 1.1 1.1 0 0 1 1.105 1.093 1.1 1.1 0 0 1-1.105 1.094z"></path>
          </svg>
          사진리뷰</li>
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
                  <span class="star icon-etc" *ngFor="let score of commonService.range(score)">
                  </span>
                  <span class="greystar icon-etc" *ngFor="let score of commonService.range(i)">
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
        <span class="star icon-etc" *ngFor="let score of commonService.range(chosenScore)">
        </span>
        <span class="greystar icon-etc" *ngFor="let score of commonService.range(5 - chosenScore)">
        </span>
        <span class="blueText"> ({{ getScore(chosenScore) }}개)</span>
        <span class="icon-pointer close cursor" (click)="cancelFilter()"></span>
      </div>
      <div class="user-review-container" *ngIf="filteredList?.length !== 0; else noReview">
        <article class="user-review" *ngFor="let review of filteredList | pageFilter: index">
          <button class="edit-review cursor"
            *ngIf="review.user === getUserId();"
            (click)="editReview(review)">수정</button>  
          <span class="user">사용자</span>
          <div class="review-star-score">
            <span class="star icon-etc" *ngFor="let star of commonService.range(review['star_score'])"></span>
          </div>
          <span class="review-date">{{ review.created }}</span>
          <div class="review-image" *ngIf="review.image !== null">
            <div class="crop-image">
              <img src="{{ review.image }}">
            </div>
          </div>
          <p class="review-comment">{{ review.comment }}</p>
          <button class="helpful clicked" BlueButton
            *ngIf="review.helpful.indexOf(getUserId()) !== -1;
            else helpfulClicked"
            (click)="helpful(review)">
            <svg width="16" height="16" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet">
              <path fill="#FFF" d="M2.28 4.99l4.15 6.03 7.36-9.35 1.54 1.2-9 11.46L.67 6.1z" fill-rule="evenodd">
              </path>
            </svg>
          도움됨</button>
          <ng-template #helpfulClicked>
            <button class="helpful" (click)="helpful(review)" WhiteButton>
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
        (change)="changePage($event)"
        [activeId]="index">
      </app-pagination>
    </div>
    <app-review-modal
    [showModal]="showModal"
    [productInfo]="_productInfo"
    [userReview]="userReview"
    [editMode]="editMode"
    (closeModal)="close()"
    (sendNewReview)="getNewReview($event)"></app-review-modal>
  `,
  styleUrls: ['./product-review.scss']
})
export class ProductReviewComponent implements OnInit {

  @Input() starAvg: number;
  @Input() productId: number;
  @Input() 
  set productInfo(productInfo: product_info){
    if(!productInfo) return;
    this._productInfo = productInfo;
    this._originalList = productInfo['review'].sort(function (a, b) {
      return b.star_score - a.star_score;
    });
    this.filteredList = productInfo['review'].sort(function (a, b) {
      return b.star_score - a.star_score;
    });
  };
  @Output() sendNewReview = new EventEmitter;
  
  userInfo: any;
  _productInfo: product_info;
  _originalList: review[];
  filteredList: review[];
  showFilter = 'none';
  chosenScore = 0;
  scoreArray = [ 5, 4, 3, 2, 1 ];
  index = 0;
  showModal: boolean;
  top: number;
  userReview: review;
  editMode = false;

  constructor(private commonService: CommonService
            , private storeService: StoreService
            , private renderer: Renderer2
            , private router: Router) { }

  ngOnInit() {
    
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
    this.index = 0;
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

  showReviewModal() {
    if(!this.commonService.Token) {
      alert('로그인이 필요한 서비스입니다.');
      this.router.navigate(['/signin']);
      return false;
    }
    
    this.editMode = this.editMode ? true : false;
    this.showModal = true;
    this.top = window.scrollY;
    window.scrollTo({ top: this.top, left: 0 });
    this.renderer.addClass(document.body, 'no-scroll');
    this.renderer.setStyle(document.body, 'position', 'fixed');
    this.renderer.setStyle(document.body, 'top', `-${this.top}px`);
  }

  close() {
    this.editMode = false;
    this.showModal = false;
    this.renderer.setStyle(document.body, 'position', '');
    this.renderer.setStyle(document.body, 'top', '');
    this.renderer.removeClass(document.body, 'no-scroll');
    window.scrollTo({ top: this.top, left: 0 });
  }

  getNewReview(review: review[]) {
    this._originalList = review.sort(function (a, b) {
      return b.star_score - a.star_score;
    });
    this.cancelFilter();
    this.sendNewReview.emit(review);
  }

  editReview(review: review) {
    this.editMode = true;
    this.showReviewModal();
    this.userReview = review;
  }

  getUserId() {
    if (!this.commonService.Token) return 0;
    else return this.commonService.getUserDetail()['id'];
  }
}
