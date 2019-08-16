import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product_option } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-qna-modal',
  template: `
  <div class="qna-modal-bg" (click)="modalClose($event)"
    [class.show]="showModal">
    <div class="qna-modal">
    <h1>상품 Q&amp;A 작성하기</h1>
    <h2>문의유형</h2>
      <app-option-select
        [options]="qnaOptions"
        [placeholder]="qnaPlaceholder"
        (add)="addQnaOption($event)">
      </app-option-select>
    <h2>상품옵션</h2>
      <app-option-select
        [options]="productOption"
        [withType]="true"
        [placeholder]="optionPlaceholder"
        (add)="addProductOption($event)">
      </app-option-select>
    <h2>내용</h2>
      <textarea></textarea>
      <p>문의하신 내용의 답변은 'MY쇼핑 > 상품Q&amp;A' 또는 '상품 판매페이지'에서 확인가능합니다.</p>
    <div class="action">
      <button class="submit" BlueButton>등록</button>
      <button class="close" WhiteButton>취소</button>
    </div>
    </div>
  </div>
  `,
  styleUrls: ['./qna-modal.scss']
})
export class QnaModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() productOption: product_option[];
  @Output() closeModal = new EventEmitter;
  
  qnaOptions = [
    { name: "상품" },
    { name: "배송" },
    { name: "반품" },
    { name: "교환" },
    { name: "환불" },
    { name: "기타" }
  ];
  visible = false;
  qnaPlaceholder = '선택해주세요.';
  optionPlaceholder = '상품옵션을 선택해주세요.';


  constructor() { }

  ngOnInit() {
  }

  modalClose(e) {
    if (e.target.classList.contains('qna-modal-bg')
      || e.target.classList.contains('close')) {
      this.close();
    }
    else return;
  }

  addQnaOption(option) {
    console.log(option);
  }

  addProductOption(option) {
    console.log(option);
    
  }

  close(){
    this.closeModal.emit();
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

}
