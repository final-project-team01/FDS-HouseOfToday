import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

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
  styles: [
    `
      /* order-list */
      body {
        font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕';
        letter-spacing: -0.4px;
        background-color: antiquewhite;
      }
      .shopping_order_list {
        background-color: chartreuse;
        width: 1136px;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
      }
      .my_mileage {
        background-color: fuchsia;
        height: 80px;
        display: grid;
        padding: 15px 0;
        box-sizing: border-box;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .mileage_item {
        display: inline-block;
        line-height: 50px;
        border: 1px solid black;
      }
      .slot {
        background-color: darkviolet;
        width: 1136px;
        text-align: center;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
        display: grid;
        grid-template-columns: 1fr 2fr;
      }
      .slot_item {
        border: 1px solid black;
        line-height: 80px;
        display: inline-block;
      }
      .order_state {
        background-color: gold;
        margin-top: 30px;
        width: 1136px;
        padding: 0 110px;
        box-sizing: border-box;
        margin-right: auto;
        margin-left: auto;
        display: flex;
      }
      .step {
        text-align: center;
        display: inline-block;
        justify-content: space-around;
      }
    `
  ]
})
export class OrderListComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() { }
}
