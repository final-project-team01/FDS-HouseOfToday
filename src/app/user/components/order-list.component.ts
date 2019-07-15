import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-order-list',
  template: `
    <div class="shopping_order_list">
      <div class="my_mileage">
        <div class="mileage_item">coupon</div>
        <div class="mileage_item">point</div>
        <div class="mileage_item">rating</div>
      </div>
      <div class="slot">
        <div>
          <div class="slot_item">나의 추천코드</div>
          <div class="slot_item">LEUUJ6BU</div>
        </div>
        <div class="slot_item">
          나는 5000P, 친구는 5000원 쿠폰<button>추천하기</button>
        </div>
      </div>
      <div class="order_state">
        <div class="step">
          <div class="title">입금대기</div>
          <div class="count">0</div>
        </div>
        <div class="arrow"></div>
        <div class="step">
          <div class="title">결제완료</div>
          <div class="count">0</div>
        </div>
        <div class="arrow"></div>
        <div class="step">
          <div class="title">배송준비</div>
          <div class="count">0</div>
        </div>
        <div class="arrow"></div>
        <div class="step">
          <div class="title">배송중</div>
          <div class="count">0</div>
        </div>
        <div class="arrow"></div>
        <div class="step">
          <div class="title">배송완료</div>
          <div class="count">0</div>
        </div>
        <div class="arrow"></div>
        <div class="step">
          <div class="title">리뷰작성</div>
          <div class="count">0</div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class OrderListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
