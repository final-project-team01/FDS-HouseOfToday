import { Component, OnInit, Input } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';


@Component({
  selector: 'app-product-review',
  template: `
    <div class="product-review-container">
      <h3>리뷰 <span class="review-amount" *ngIf="originalList">{{ originalList.length }}</span></h3>
      <a href="" class="write-review">리뷰쓰기</a>
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
        <li class="review-filter-menu">베스트순</li>
        <li class="review-filter-menu">최신순</li>
        <li class="review-filter-menu"><span class="pic-icon"></span>사진리뷰</li>
      </ul>
      <ul class="filter-btns">
        <li>
          <button class="review-filter-btn">별점
          <span class="filter-icon"></span>
          </button>
        </li>
        <li>
          <button class="review-filter-btn">옵션
          <span class="filter-icon"></span>
          </button>
        </li>
      </ul>
      </div>
      <article class="user-review" *ngFor="let review of chosenList">
        <span>사용자</span>
        <div class="review-star-score">
          <span class="star" *ngFor="let star of range(review['star_score'])">
          </span>
        </div>
        <span>{{ review.created }}</span>
        <div class="review-image" *ngIf="review.image !== null">
          <img src="../../../../assets/image/meat.jpg">
        </div>
        <p class="review-comment">{{ review.comment }}</p>
        <button class="helpful">도움이 돼요</button>
      </article>
      <app-pagination 
        [originalList]="originalList"
        [chosenList]="chosenList"
        [pages]="pages"
        (change)="changePage($event)"
      ></app-pagination>
    </div>
  `,
  styles: [`
  .product-review-container{
    width: 690px;
    padding: 60px 30px 0 30px;
    position: relative;
  }
  h3{
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }
  h3 > span{
    margin-left: 6px;
    font-size: 18px;
    font-weight: 700;
    color: #35c5f0;
  }
  .write-review{
    position: absolute;
    color: #35c5f0;
    top: 60px;
    right: 30px;
    border: none;
    font-weight: 700;
  }
  .star-rate-container{
    text-align: center;
    margin: 10px 0 30px 0;
  }
  .star-avg{
    padding: 0 10px;
    background-color: #35C5F0;
    color: white;
    font-weight: bold;
    font-size: 20px;
    vertical-align: middle;
    border-radius: 5px;
    margin-right: 10px;
  }
  .star-bg{
    width:300px;
    background-color: lightgrey;
    display: inline-block;
  }
  .star-rate{
    width: 1px;
    background-color: #35C5F0;
  }
  .star-rate > img{
    width: 300px;
    vertical-align: middle;
  }
  .filter-container{
    margin: 15px 0;
    padding: 15px 15px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    position: relative;
  }
  .pic-icon{
    width: 23px;
    height: 18px;
    background-position: -180px -663px;
    vertical-align: middle;
  }
  .review-filter-menu{
    display: inline-block;
    cursor: pointer;
    margin-right: 12px;
    font-size: 13px;
    font-weight: 700;
    line-height: 13px;
    color: #757575;
  }
  .filter-btns{
    position: absolute;
    top: 11px;
    right: 15px;
  }
  .filter-btns > li{
    display: inline-block;
    margin-left: 5px;
  }
  .review-filter-btn{
    font-size: 15px;
    line-height: 19px;
    font-weight: bold;
    padding: 7px 8px 6px;
    border-style: none;
    border-radius: 4px;
    background-color: #f4f4f4;
    border-color: #f5f5f5;
    color: #757575;
    cursor: pointer;
  }
  .filter-icon{
    display: inline-block;
    background-image: url('../../../../assets/image/icon-pointer.png');
    width: 12px;
    height: 12px;
    background-position: -386px 3px;
  }
  .user-review{
    padding: 30px 0;
    border-bottom: 1px solid lightgrey;
  }
  .star-score{
    display: inline-block;
  }
  .star, .pic-icon{
    display: inline-block;
    background-image: url('../../../../assets/image/icon-etc.png');
  }
  .star{
    width: 16px;
    height: 16px;
    background-position: 106px 0;
  }
  .review-image > img{
    width: 110px;
    height: 110px;
  }
  .review-comment{
    margin: 20px 0;
    font-size: 15px;
    line-height: 21px;
    color: #424242;
  }
  .helpful{
    width: 114px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #35c5f0;
    font-size: 15px;
    color: #35c5f0;
    font-weight: 700;
    margin-right: 10px;
    background-color: #fff;
  }
  `]
})
export class ProductReviewComponent implements OnInit {

  @Input() originalList: review[];
  @Input() chosenList: review[];
  @Input() pages: any;
  @Input() starAvg: number;

  constructor() { }

  ngOnInit() {
    
  }

  range(i: number){
    return Array(i);
  }

  changePage(chosenList: review[]){
    this.chosenList = chosenList;
  }

}
