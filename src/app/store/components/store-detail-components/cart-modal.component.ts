import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-cart-modal',
  template: `
    <div class="cart-modal-container" 
      [class.show]="showModal">
      <div class="cart-modal"
        [class.showModal]="showModal">
        <p class="cart-modal-message">장바구니에 상품을 담았습니다.</p>
        <button class="go-to-cart btn cursor" (click)="goToCart()">장바구니 보러가기 <span class="icon-pointer"></span></button>
        <button class="ok btn cursor" (click)="close()">확인</button>
        <button aria-label="close" class="close icon-pointer cursor" (click)="close()"></button>
      </div>
    </div>
  `,
  styleUrls: ['./cart-modal.scss']
})
export class CartModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter();

  constructor(private router: Router
    , private commonService: CommonService) { }

  ngOnInit() {
  }

  close() {
    this.closeModal.emit();
  }

  goToCart() {
    const user = this.commonService.getUserDetail();

    this.router.navigate(['/cart']);
  }

}
