import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-order-list',
  template: `
    <app-navigation></app-navigation>
    <app-user-nav></app-user-nav>
    <div class="shopping_order_list">
      <div class="my_mileage">
        <div class="mileage_item">
          <div class="coupon_icon"></div>
          <div class="mileage_info">coupon</div>
          <div class="mileage_count">0</div>
        </div>

        <div class="mileage_item">
          <div class="point_icon"></div>
          <div class="mileage_info">point</div>
          <div class="mileage_count">0</div>
        </div>

        <div class="mileage_item">
          <div class="rating_icon"></div>
          <div class="mileage_info">rating</div>
          <div class="mileage_count">0</div>
        </div>
      </div>

      <div class="slot">
        <div>
          <div class="slot_item">나의 추천코드</div>
          <div class="slot_item">LEUUJ6BU</div>
        </div>
        <div class="slot_item slot_coupon">
          <div class="slot_item_description">
            나는 5000P, 친구는 5000원 쿠폰
          </div>
          <a>추천하기</a>
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
      <div class="order_list_set">
        <div class="order_filter">
          <select class="delivery_before">
            <option value="1">1개월전</option>
            <option value="3">3개월전</option>
            <option value="6">6개월전</option>
            <option value="12">1년전</option>
            <option value="24">2년전</option>
            <option value="36">3년전</option>
            <option value="-1">전체선택</option>
          </select>
          <select class="delivery_status">
            <option value="-1">전체선택</option>
            <option value="0">입금대기</option>
            <option value="1">결제완료</option>
            <option value="2">배송준비</option>
            <option value="3">배송중</option>
            <option value="4">배송완료</option>
            <option value="5">구매확정</option>
            <option value="6">리뷰작성</option>
            <option value="7">취소</option>
            <option value="8">교환</option>
            <option value="9">환불</option>
          </select>
        </div>
        <div>주문내역이 없습니다.</div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      /* order-list */
      body {
        line-height: 1;
        font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕',
          'Malgun Gothic', sans-serif;
        letter-spacing: -0.4px;
        background-color: antiquewhite;
      }

      .my_mileage,
      .slot,
      .order_state,
      .order_list_set,
      .delivery_before,
      .delivery_status {
        border: 1px solid #dcdcdc;
        box-sizing: border-box;
      }
      .shopping_order_list {
        width: 1136px;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
      }
      .my_mileage,
      .slot {
        height: 80px;
        padding: 15px 0;
        margin: 30px auto 0;
        display: grid;
      }
      .my_mileage {
        grid-template-columns: 1fr 1fr 1fr;
      }
      .coupon_icon,
      .point_icon,
      .rating_icon {
        background-size: 400px;
        display: inline-block;
        position: relative;
        width: 54px;
        height: 34px;
      }
      .coupon_icon {
        background-image: url(assets/image/icon-point@2x.png);
        background-position: top 0 left 0;
      }
      .point_icon {
        background-image: url(assets/image/icon-point@2x.png);
        background-position-x: 326px;
        background-position-y: 0px;
      }
      .rating_icon {
        background-image: url(assets/image/icon-point@2x.png);
        background-position-x: 300px;
        background-position-y: 108px;
      }
      .my_mileage > .mileage_item {
        padding: 8px 0;
      }
      .mileage_info {
        margin-left: 15px;
        display: inline-block;
        font-size: 16px;
        line-height: 34px;
        vertical-align: top;
      }
      .mileage_count {
        margin-left: 10px;
        display: inline-block;
        font-size: 16px;
        line-height: 34px;
        vertical-align: top;
      }

      .mileage_item:nth-child(2) {
        border-right: 1px solid #dcdcdc;
        border-left: 1px solid #dcdcdc;
      }

      .slot_item {
        display: inline-block;
        line-height: 50px;
      }
      .slot {
        text-align: center;
        margin-top: 30px;
        grid-template-columns: 1fr 2fr;
        font-size: 16px;
      }
      .slot_item:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
        margin-right: 5px;
      }
      .slot_coupon {
        border-left: 1px solid #dcdcdc;
      }
      .slot_item_description {
        margin-right: 30px;
        display: inline-block;
      }
      .slot_coupon > a {
        width: 140px;
        height: 40px;
        line-height: 40px;
        background-color: #35c5f0;
        color: #ffffff;
        display: inline-block;
        border-radius: 4px;
        font-weight: bold;
      }
      .order_state {
        margin-top: 30px;
        padding: 0 110px;
        display: flex;
      }
      .step {
        text-align: center;
        display: inline-block;
        margin: 39px 0 33px;
      }
      .title {
        font-size: 18px;
        line-height: 21px;
        width: 70px;
        color: #424242;
        margin: 0 0 33px;
      }
      .count {
        font-size: 24px;
        line-height: 24px;
        color: #35c5f0;
      }
      .arrow {
        display: block;
        float: left;
        margin: 62.5px 43.5px;
        width: 15px;
        height: 25px;
      }
      .order_list_set {
        margin: 30px auto 0;
        margin-bottom: 30px;
        padding: 30px 50px 40px;
      }
      .order_filter {
        overflow: hidden;
        padding-bottom: 30px;
      }
      .delivery_before,
      .delivery_status {
        width: 170px;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        margin-right: 15px;
        padding: 0 15px;
        border-radius: 0;
        float: left;
        display: block;
        font-size: 15px;
      }
    `
  ]
})
export class OrderListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
