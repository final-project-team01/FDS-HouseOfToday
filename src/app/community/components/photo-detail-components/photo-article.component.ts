import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-photo-article',
  template: `
    <div class="article-container" *ngIf="photoInfo">
      <div class="article-type">
        <span>{{ photoInfo.category }}</span>
        <span>{{ photoInfo.created }}</span>
      </div>
      <figure>
        <div class="photo-container"
          (mouseover)="showBtn = 'block'"
          (mouseleave)="showBtn = 'none'">
          <img src="{{ photoInfo.image }}" class="photo" alt="실내 이미지">
          <a routerLink="/store/{{ photoInfo.product_id }}" class="product-plus"
            [style.top]="photoInfo.axis_top + '%'"
            [style.left]="photoInfo.axis_left + '%'"
            [style.display]="showBtn">해당 상품 보러가기</a>
        </div>
        <aside class="products">
          <a routerLink="/store/{{ photoInfo.product_id }}">
            <img src="{{ photoInfo.product_image }}" class="product-img" alt="실내에 사용된 제품 이미지"
            (mouseover)="showBtn = 'block'"
            (mouseleave)="showBtn = 'none'">
          </a>
        </aside>
        <figcaption>
          <div *ngIf="photoInfo.text">{{ photoInfo.text }}</div>
        </figcaption>
      </figure>
      <div class="article-footer">
        <span class="footer-item dot">조회 {{ photoInfo.hit_count }}</span>
        <span class="footer-item dot">댓글 {{ photoInfo.comment_count }}</span>
        <button class="report cursor">신고</button>
      </div>
      <hr>
      <h2>댓글 <span>{{ photoInfo.comment_count }}</span></h2>
      <div class="comment-input">
        <div class="profile-img">
          <img
            src="{{ this.commonService.getUserDetail() 
            ? this.commonService.getUserDetail()['type']==='django' ? this.commonService.getUserDetail()['profile'] : this.commonService.getUserDetail()['social_profile']
            : 'assets/image/36.png' }}"
            class="user-profile">
        </div>
        <form>
          <input type="text" placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)">
        </form>
      </div>
      <div class="comment-section">
        <div class="each-comment" *ngFor="let comment of chosenList">
            <img src="{{ comment.author_profile_image }}"
              class="author_profile_image">
            <div class="comment">
              <span class="comment-author">{{ comment.author }}</span>
              <span class="comment-text">{{ comment.text }}</span><br>
              <span class="comment-created dot">{{ comment.created }}</span>
              <span class="heart"></span>
              <button class="like-comment dot cursor">좋아요</button>
              <button class="report cursor">신고</button>
            </div>
        </div>
      </div>
      <app-pagination
        [originalList]="originalList"
        [chosenList]="chosenList"
        [pages]="pages"
        (change)="changePage($event)">
      </app-pagination>
    </div>
  `,
  styles: [`
  .article-container{
    width: 806px;
    display: inline-block;
    padding: 40px 40px 0 0;
    border-right: 1px solid #ededed;
  }
  .article-type{
    margin-bottom: 30px;
  }
  .article-type span{
    color: #bdbdbd;
  }
  .article-type > span:last-child{
    float: right;
  }
  figure{
    margin-bottom: 50px;
  }
  .photo{
    width:100%;
  }
  .photo-container{
    position: relative;
  }
  figcaption{
    font-size: 15px;
    line-height: 22px;
    margin-top: 30px;
  }
  .products{
    margin-top: 20px;
  }
  .product-img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .product-plus{
    display: inline-block;
    position: absolute;
    width: 25px;
    height: 25px;
    background-image: url('../../../../assets/image/icon-etc-2.png');
    padding-top: 25px;
    background-position: -120px -61px;
    background-size: 400px;
    overflow: hidden;
  }
  .footer-item{
    font-size: 13px;
    color: #757575;
  }
  .dot::after{
    content: "";
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background-color: #bdbdbd;
    opacity: .9;
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
  }
  .report{
    border: none;
    background: transparent;
    color: #bdbdbd;
    padding: 0;
  }
  hr{
    margin: 50px 0;
  }
  h2{
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin: 10px 0 20px;
  }
  h2 > span{
    color: #35c5f0;
  }
  .comment-input{
    position: relative;
  }
  .profile-img{
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
  }
  .user-profile{
    height: 100%;
    margin-left: -16px;
  }
  input{
    width: 95%;
    height: 40px;
    border: 1px solid #ededed;
    border-radius: 5px;
    padding: 0 15px;
    position: absolute;
    top: -4px;
    right: 0;
  }
  .each-comment{
    position: relative;
    margin: 20px 0;
  }
  .author_profile_image{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
  }
  .comment{
    margin-left: 40px;
  }
  .comment-author{
    color: #424242;
    font-weight: 700;
    font-size: 15px;
    margin-right: 10px;
  }
  .comment-created{
    font-weight: 400;
    color: #757575;
    font-size: 13px;
  }
  .like-comment{
    background: none;
    border: none;
    color: #757575;
    padding: 0;
    font-size: 13px;
    font-weight: 700;
  }
  .heart{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background-image: url('../../../../assets/image/common-action@2x.png');
    background-position: -49px -146px;
    background-size: 490px;
  }
  `]
})
export class PhotoArticleComponent implements OnInit {

  @Input() photoInfo: any; 
  @Input() originalList: any;
  @Input() chosenList: any;
  @Input() pages: any;

  showBtn = 'none';

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  changePage(chosenList){
    this.chosenList = chosenList;
  }

}
