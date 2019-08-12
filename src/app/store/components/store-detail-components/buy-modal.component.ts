import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buy-modal',
  template: `
  <div class="buy-modal-container" 
    [class.show]="showModal">
    <div class="buy-modal"
      [class.showModal]="showModal">
      <p>주문이 완료되었습니다.</p>
      <button aria-label="close" class="close cursor" (click)="close()">
        확인
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./buy-modal.scss']
})
export class BuyModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closeModal.emit('buy');
  }

}
