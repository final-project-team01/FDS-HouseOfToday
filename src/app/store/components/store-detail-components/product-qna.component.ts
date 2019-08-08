import { Component, OnInit, Input } from '@angular/core';
import { qna } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-qna',
  template: `
    <div class="product-qna-container" *ngIf="originalList">
      <button class="write-qna cursor">문의하기</button>
      <div class="user-qna-container" *ngIf="originalList.length !== 0; else noQna">
      <article class="user-qna" *ngFor="let qna of originalList | pageFilter: index; let i = index">
        <div class="qna-type">
          <span class="bar">구매</span>
          <span class="bar">{{ qna.type }}</span>
          <span *ngIf="qna.completed; else noAnswer" class="a-complete">답변완료</span>
          <ng-template #noAnswer><span>미답변</span></ng-template>
        </div>
        <div>
          <small class="bar">사용자</small>
          <small>{{ qna.created }}</small>
        </div>
        <div class="user-question qna">
        <p>
          {{ qna.comment }}
        </p>
        </div>
        <div class="company-answer qna" *ngIf="qna.a_comment">
        <p>
          <span *ngIf="qna.a_author" class="company">{{ qna.a_author }}</span>
          <small>{{ qna.a_created }}</small><br>
          {{ qna.a_comment }}
        </p>
        </div>
      </article>
      </div>
      <ng-template #noQna>
        <div class="no-qna"><p>문의가 없습니다.</p></div>
      </ng-template>
      <app-pagination 
        [originalList]="originalList"
        (change)="changePage($event)"
      ></app-pagination>
    </div>
  `,
  styleUrls: ['./product-qna.scss']
})
export class ProductQnaComponent implements OnInit {
  
  @Input() originalList: qna[];

  index = 0;

  constructor() { }

  ngOnInit() {
  }

  changePage(i: number){
    this.index = i;
  }

}
