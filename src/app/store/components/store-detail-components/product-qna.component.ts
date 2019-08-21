import { Component, OnInit, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { qna, product_info, product_option } from 'src/app/core/models/store.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-qna',
  template: `
    <div class="product-qna-container" *ngIf="originalList">
      <button class="write-qna cursor" (click)="showQnaModal()">문의하기</button>
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
        <button class="delete-qna cursor" 
          *ngIf="qna.user === getUserId();"
          (click)="deleteQna(qna.id)">삭제</button>
      </article>
      </div>
      <ng-template #noQna>
        <div class="no-qna"><p>문의가 없습니다.</p></div>
      </ng-template>
      <app-pagination 
        [originalList]="originalList"
        (change)="changePage($event)"
        [activeId]="index">
      </app-pagination>
    </div>
    <app-qna-modal
      [showModal]="showModal"
      [productOption]="productOption"
      [productId]="productId"
      (closeModal)="close()"
      (sendNewQna)="getNewQna($event)">
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
    this.productId = productInfo['id'];    
  }
  @Output() sendNewQna = new EventEmitter;

  showModal: boolean;
  productOption: product_option[];
  productId: number;
  originalList: qna[];
  top: number;
  userId: number;

  index = 0;

  constructor(private renderer: Renderer2
            , private commonService: CommonService
            , private storeService: StoreService
            , private router: Router) { }

  ngOnInit() {
    
  }

  changePage(i: number){
    this.index = i;
  }

  showQnaModal(){
    if(!this.commonService.Token) {
      alert('로그인이 필요한 서비스입니다.');
      this.router.navigate(['/signin']);
      return false;
    }
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

  getNewQna(qna: qna[]) {
    this.originalList = qna;
    this.sendNewQna.emit(qna);
  }

  deleteQna(id: number) {
    const deleteCheck = confirm('해당 문의를 삭제하시겠습니까?');
    if (deleteCheck) {
      this.storeService.deleteQna(id)
        .subscribe(res => {
          this.storeService.getProductInfo(this.productId)
            .subscribe(res => {
              alert('문의가 삭제되었습니다.');
              const newQna = res['pdqna'];
              this.getNewQna(newQna);
            });
        });
      this.changePage(0);
    } else return;
  }

  getUserId() {
    if (!this.commonService.Token) return 0;
    else return this.commonService.getUserDetail()['id'];
  }

}
