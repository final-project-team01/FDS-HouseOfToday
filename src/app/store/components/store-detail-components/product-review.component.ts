import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-review',
  template: `
    <div class="product-review-container">
      <h3>리뷰 <span class="review-amount" *ngIf="reviews">{{ reviews.length }}</span></h3>
      <a href="" class="write-review">리뷰쓰기</a>
      <div class="filter-container">
      <ul>
        <li class="review-filter-menu">베스트순</li>
        <li class="review-filter-menu">최신순</li>
        <li class="review-filter-menu">사진리뷰</li>
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
      <article class="user-review" *ngFor="let review of chosenReviews">
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
      <ul class="pagination">
        <li><button class="pagination-btn left"></button></li>
        <li *ngFor="let page of pages; let i = index">
          <button class="pagination-page"
            (click)="changePage(i)">{{ i + 1 }}</button>
        </li>
        <li><button class="pagination-btn right"></button></li>
      </ul>
    </div>
  `,
  styles: [`
  .product-review-container{
    width: 690px;
    background-color: pink;
    padding: 60px 30px 30px 30px;
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
  .filter-container{
    background-color: skyblue;
    margin: 15px 0;
    padding: 15px 15px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    position: relative;
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
    padding: 7px 8px 6px;
    border-style: none;
    border-radius: 4px;
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: #757575;
    cursor: pointer;
  }
  .filter-icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-position: -387px 3px;
  }
  .user-review{
    padding: 30px 0;
    border-bottom: 1px solid lightgrey;
  }
  .star-score{
    display: inline-block;
  }
  .star{
    display: inline-block;
    background-image: url('../../../../assets/image/icon-etc.png');
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
  .pagination{
    text-align: center;
    margin: 40px 0;
  }
  .pagination > li{
    display: inline-block;
  }
  .pagination-page, .pagination-btn{
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    margin: 5px;
  }
  .pagination-btn, .filter-icon{
    background-image: url('../../../../assets/image/icon-pointer.png');
  }
  .left{
    background-position: -75px -118px;
  }
  .right{
    background-position: -130px -118px;
  }
  `]
})
export class ProductReviewComponent implements OnInit {

  reviews: any;
  chosenReviews: any;
  pages: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://52.78.112.247/products/product/1/')
      .subscribe((detail) => {
        this.reviews = detail['review'];
        this.chosenReviews = this.reviews.filter((review, index) => index >= 0 && index < 3);
        const i = Math.ceil(this.reviews.length / 3);
        this.pages = Array(i);
      });
  }

  range(i: number){
    return Array(i);
  }

  changePage(i: number){
    const start = i * 3;
    const end = start + 3;
    this.chosenReviews 
      = this.reviews.filter((review, index) => index >= start && index < end);
  }

}
