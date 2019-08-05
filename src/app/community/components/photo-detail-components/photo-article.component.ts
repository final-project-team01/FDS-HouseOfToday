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
        <span class="footer-item dot">댓글 {{ originalList.length }}</span>
        <button class="report cursor">신고</button>
      </div>
      <hr>
    </div>
    <app-comment 
      [originalList]="originalList"
      [chosenList]="chosenList"
      [pages]="pages"></app-comment>
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
    border: 1px solid #ededed;
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

}
