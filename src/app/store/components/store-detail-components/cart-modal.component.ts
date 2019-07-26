import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  template: `
    <div class="cart-modal-container" 
      [class.show]="showModal">
      <div class="cart-modal"
        [class.showModal]="showModal">
        <p class="cart-modal-message">장바구니에 상품을 담았습니다.</p>
        <button class="go-to-cart btn" (click)="goToCart()">장바구니 보러가기 <span class="pointer icon"></span></button>
        <button class="ok btn" (click)="close()">확인</button>
        <button aria-label="close" class="close icon btn" (click)="close()"></button>
      </div>
    </div>
  `,
  styles: [`
  .cart-modal-container{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s .45s, opacity .15s linear;
  }
  .show{
    opacity: 1;
    visibility: visible;
    transition: visibility 0s 0s, opacity .15s linear;
  }
  .cart-modal{
    width: calc(100% - 40px);
    max-width: 425px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    padding: 40px;
    margin: unset;
    box-sizing: border-box;
    background: white;
    border-radius: 4px;
    position: absolute;
    text-align: center;
    transition: transform .15s linear;
  }
  .showModal{
    transform: translate(-50%, -50%);
    transition: transform .15s linear;
  }
  .cart-modal-message{
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 30px;
  }
  .go-to-cart, .ok{
    box-sizing: border-box;
    padding: 22px;
    margin: 7px 0;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
  }
  .go-to-cart{
    background-color: #35C5F0;
    border-color: #35C5F0;
    color: white;
  }
  .ok{
    background-color: white;
    border-color: #35C5F0;
    color: #35C5F0;
  }
  .pointer{
    width: 6px;
    height: 13px;
    background-position: -304px 0px;
  }
  .close{
    background: none;
    border: none;
    width: 12px;
    height: 12px;
    background-position: -186px -39px;
    position: absolute;
    top: 22px;
    right: 22px;
  }
  .icon{
    background-image: url('../../../../assets/image/icon-pointer.png');
    display: inline-block;
    vertical-align: middle;
  }
  .btn{
    cursor: pointer;
  }
  `]
})
export class CartModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  close(){
    this.closeModal.emit();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
