import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-modal',
  template: `
  <div class="review-modal-container" 
    [class.show]="showModal">
    <div class="review-modal"
      [class.showModal]="showModal">
      <p>리뷰모달창</p>
      <button aria-label="close" class="close cursor" BlueButton (click)="close()">
        닫기
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./review-modal.scss']
})
export class ReviewModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closeModal.emit();
  }
}
