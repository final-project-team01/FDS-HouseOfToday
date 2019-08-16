import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qna-modal',
  template: `
  <div class="qna-modal-bg" (click)="modalClose($event)"
    [class.show]="showModal">
    <div class="qna-modal">
      <div class="selectbox" (clickOutside)="hide()">
        <input type="text" placeholder="선택해주세요." readonly (focus)="show()" class="cursor" #optionInput>
          <span class="option-icon icon-pointer"></span>
          <ul class="option-item-list" *ngIf="visible">
            <li *ngFor="let option of qnaOptions; let i = index" class="option-item cursor"
            (click)="add(option, optionInput)">
            {{ option }}
            </li>
          </ul>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./qna-modal.scss']
})
export class QnaModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter;
  
  qnaOptions = ['상품', '배송', '반품', '교환', '환불', '기타'];
  visible = false;

  constructor() { }

  ngOnInit() {
  }

  modalClose(e) {
    if (e.target.classList.contains('qna-modal-bg')
      || e.target.classList.contains('close')) {
      const check = confirm('작성 중인 내용이 사라집니다.');
      if (check) {
        this.close();
      }
      else return;
    }
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
