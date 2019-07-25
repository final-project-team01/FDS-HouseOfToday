import { Component, OnInit, Input } from '@angular/core';
import { qna } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-qna',
  template: `
    <div class="product-qna-container" *ngIf="originalList">
      <h3>문의 <span class="qna-amount">{{ originalList.length }}</span></h3>
      <button class="write-qna">문의하기</button>
      <article class="user-qna" *ngFor="let qna of chosenList; let i = index">
        <div class="qna-type">
          <span class="bar">구매</span>
          <span class="bar">{{ qna.type }}</span>
          <span *ngIf="qna.completed; else noAnswer" class="a-complete">답변완료</span>
          <ng-template #noAnswer><span>미답변</span></ng-template>
        </div>
        <div class="create-info">
          <span class="bar">사용자</span>
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
      <app-pagination 
        [originalList]="originalList"
        [chosenList]="chosenList"
        [pages]="pages"
        (change)="changePage($event)"
      ></app-pagination>
    </div>
  `,
  styles: [`
  .product-qna-container{
    width: 690px;
    padding: 30px 30px 0 30px;
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
  .qna-type{
    font-size: 12px;
    color: #424242;
  }
  .user-qna{
    padding: 15px 0;
    margin: 30px 0;
    border-bottom: 1px solid lightgrey;
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
  .a-complete{
    font-size: 12px;
    color: #35c0f5;
  }
  .company{
    font-weight: bold;
    margin-right: 3px;
  }
  small, .create-info{
    font-size: 12px;
    color: #bdbdbd;
  }
  .bar::after{
    content: '|';
    margin: 0 6px;
  }
  `]
})
export class ProductQnaComponent implements OnInit {
  
  @Input() originalList: qna[];
  @Input() chosenList: qna[];
  @Input() pages: any;

  constructor() { }

  ngOnInit() {
  }

  changePage(chosenList){
    this.chosenList = chosenList;
  }

}
