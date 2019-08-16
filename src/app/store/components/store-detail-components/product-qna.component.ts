import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { qna, product_info, product_option } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-qna',
  template: `
    <div class="product-qna-container" *ngIf="originalList">
      <button class="write-qna cursor" (click)="showReviewModal()">문의하기</button>
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
        (change)="changePage($event)">
      </app-pagination>
    </div>
    <app-qna-modal
      [showModal]="showModal"
      [productOption]="productOption"
      (closeModal)="close()">
    </app-qna-modal>
  `,
  styleUrls: ['./product-qna.scss']
})
export class ProductQnaComponent implements OnInit {
  
  @Input()
  set productInfo(productInfo: product_info){
    if(!productInfo) return;
    this.originalList = productInfo['pdqna'];
    this.productOption = productInfo['product_option'];
  }
  showModal: boolean;
  productOption: product_option[];
  originalList: qna[];
  top: number;

  index = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  changePage(i: number){
    this.index = i;
  }

  showReviewModal(){
    this.showModal = true;
    this.top = window.scrollY;
    window.scrollTo({ top: this.top, left: 0 });
    this.renderer.addClass(document.body, 'no-scroll');
    this.renderer.setStyle(document.body, 'position', 'fixed');
    this.renderer.setStyle(document.body, 'top', `-${this.top}px`);
  }

  close(){
    this.showModal = false;
    this.renderer.setStyle(document.body, 'position', '');
    this.renderer.setStyle(document.body, 'top', '');
    this.renderer.removeClass(document.body, 'no-scroll');
    window.scrollTo({ top: this.top, left: 0 });
  }

}
