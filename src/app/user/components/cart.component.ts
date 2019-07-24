import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <app-navigation></app-navigation>
    <div class="cart">
      <div class="cart-empty" *ngIf="isEmpty; else elseBlock">
        <div class="cart-empty-content">
          <img src="assets/image/cart-empty-placeholder.png">
          <a Button>상품 담으러 가기</a>
        </div> 
      </div>
      <ng-template class="cart-not-empty" #elseBlock>        
        
      </ng-template>
      
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: [`./cart.scss`]
})
export class CartComponent implements OnInit {
  isEmpty = true;
  constructor() { }

  ngOnInit() {
  }

}
