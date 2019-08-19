import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product_option, qna } from 'src/app/core/models/store.interface';
import { StoreService } from 'src/app/core/services/store.service';

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
        (add)="qnaProduct = $event">
      </app-option-select>
    <h2>내용</h2>
      <textarea #textarea></textarea>
      <p>문의하신 내용의 답변은 'MY쇼핑 > 상품Q&amp;A' 또는 '상품 판매페이지'에서 확인가능합니다.</p>
    <div class="action">
      <button class="submit" BlueButton (click)="submit(textarea)">등록</button>
      <button class="close" WhiteButton>취소</button>
    </div>
    </div>
  </div>
  <div class="message" [style.opacity]="messageOpacity"
    [style.backgroundColor]="bgColor"
    [style.borderColor]="bdColor">
    <span>{{ message }}</span>
  </div>
  `,
  styleUrls: ['./qna-modal.scss']
})
export class QnaModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() productOption: product_option[];
  @Input() 
  set productId(productId: number) {
    this.product = productId;
  }
  @Output() closeModal = new EventEmitter;
  @Output() sendNewQna = new EventEmitter;
  
  qnaOptions = [
    { name: "상품" },
    { name: "배송" },
    { name: "반품" },
    { name: "교환" },
    { name: "환불" },
    { name: "기타" }
  ];
  visible = false;
  product: number;
  qnaPlaceholder = '선택해주세요.';
  optionPlaceholder = '상품옵션을 선택해주세요.';
  message: string;
  qnaProduct = '';
  messageOpacity = 0;
  bgColor = '';
  bdColor = '';
  payload = {
    product: 0,
    type: '',
    comment: ''
  }
  productQna: qna[];


  constructor(private storeService: StoreService) { }

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
    this.payload.type = option.name;
  }

  submit(textarea: HTMLTextAreaElement) {
    const comment = textarea.value;
    if (this.payload.type === '') {
      this.message = '문의유형을 선택해주세요.';
      this.showMessage();
    }
    else if (this.qnaProduct === '') {
      this.message = '상품옵션을 선택해주세요.';
      this.showMessage();
    }
    else if (comment.trim() === '') {
      this.message = '문의내용을 입력해주세요.';
      this.showMessage();
    }
    else {
      this.payload.comment = comment;
      this.payload.product = this.product;
      this.storeService.createQna(this.payload)
        .subscribe(res => {
          this.storeService.getProductInfo(this.product)
            .subscribe(res => {
              this.productQna = res['pdqna'];
              this.sendNewQna.emit(this.productQna);
            });
          this.bgColor = 'rgba(17, 146, 1, 0.6)';
          this.bdColor = 'rgb(34, 146, 0)';
          this.message = '문의가 등록되었습니다.';
          this.showMessage();
          this.close();
        },
        err => {
          console.log(err);
        });
    }
    this.bgColor = '';
    this.bdColor = '';
    this.payload.type = '';
    this.payload.comment = '';
  }

  showMessage() {
    this.messageOpacity = 1;
    setTimeout(() => { this.messageOpacity = 0; }, 1000);
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
