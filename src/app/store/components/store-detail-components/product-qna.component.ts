import { Component, OnInit, Input } from '@angular/core';
import { qna } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-qna',
  template: `
    <div class="product-qna-container" *ngIf="productQnas">
      <h3>문의 <span class="qna-amount">{{ productQnas.length }}</span></h3>
      <button class="write-qna">리뷰쓰기</button>
      <article class="user-qna" *ngFor="let qna of productQnas">
        <div>
          <span>구매</span> | 
          <span>{{ qna.type }}</span> | 
          <span *ngIf="qna.completed; else noAnswer">답변완료</span>
          <ng-template #noAnswer><span>미답변</span></ng-template>
        </div>
        <div>
          <span>사용자</span> | 
          <small>{{ qna.created }}</small>
        </div>
        <div class="user-question">
        <p>
          {{ qna.comment }}
        </p>
        </div>
        <div class="company-answer">
        <p>
          <span *ngIf="qna.a_author" class="company">{{ qna.a_author }}</span>
          <small>{{ qna.a_created }}</small><br>
          {{ qna.a_comment }}
        </p>
        </div>
      </article>
    </div>
  `,
  styles: [`
  .product-qna-container{
    width: 690px;
    padding: 30px 30px 30px 30px;
    background-color: skyblue;
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
  .write-qna{
    width: 100px;
    height: 40px;
    position: absolute;
    right: 30px;
    top: 23px;
    font-weight: bold;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    color: #424242;
    border-radius: 4px;
    cursor: pointer;
  }
  .user-qna{
    padding: 15px 0;
    margin: 30px 0;
    border-bottom: 1px solid lightgrey;
    background-color: pink;
  }
  .user-question, .company-answer{
    margin-top: 10px;
    position: relative;
  }
  .user-question > p, .company-answer > p{
    padding-left: 22px;
  }
  .user-question::before, .company-answer::before{
    font-weight: bold;
    color: #35C5F0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .user-question::before{
    content: 'Q';
  }
  .company-answer::before{
    content: 'A';
  }
  .company{
    font-weight: bold;
    margin-right: 3px;
  }
  .small{
    font-size: 12px;
    color: #bdbdbd;
  }
  `]
})
export class ProductQnaComponent implements OnInit {
  
  @Input() productQnas: qna[];

  constructor() { }

  ngOnInit() {
  }

}
