import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { user_order } from 'src/app/core/models/user.interface';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  template: `
    <app-navigation></app-navigation>
    <div class="viewport">
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
            <a BlueButton>추천하기</a>
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
            <div class="count">{{ OrderCount }}</div>
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

          <div class="ordered_item" *ngFor="let list of orderList">
            <div class="order_tag_contain">
              <div>
                <div class="order_tag list-id">{{ list.id }}</div>
                <span> | </span>
                <div class="order_tag list-created">{{ list.created }}</div>
              </div>
              <div class="view-detail">상세보기</div>
            </div>
            <a class="product" *ngFor="let item of list['order_list']">
              <div
                class="item-image"
                (click)="goDetail(item['product_id'])"
                ImageZoom
              >
                <img class="image-zoom" src="{{ item.thumnail_image }}" />
              </div>
              <div class="item-content" (click)="goDetail(item['product_id'])">
                <h1 class="content-header">
                  {{ item.brand_name }}
                </h1>
                <p class="content-header-product">
                  {{ item.product }}
                </p>
              </div>

              <div class="item-order-info">
                <div class="item-product">{{ item.product }}</div>
                <div class="item-price">
                  {{ commonService.addComma(item.total_price) }}<span>원</span>
                  <div class="order-count">
                    {{ item.quantity }}<span>개</span>
                  </div>
                </div>
                <a class="order-confirm">구매확정</a>
              </div>
              <div class="order-control-btn">
                <button class="tracking-item control-btn" WhiteButton>
                  배송추척
                </button>
                <button class="comment-item control-btn">리뷰작성</button>
              </div>
            </a>
            <div class="hr"></div>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .viewport {
        width: calc(100vw - 18px);
      }
      /* order-list */
      body {
        line-height: 1;
        font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕',
          'Malgun Gothic', sans-serif;
        letter-spacing: -0.4px;
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
        background-image: url(assets/image/icon-pointer.png);
        background-size: 400px;
        background-position-x: -159px;
        background-position-y: -70px;
        background-repeat: no-repeat;
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
        background-image: url(assets/image/select_arrow.png);
        background-repeat: no-repeat;
        background-position: calc(100% - 15px);
        background-size: 18px;
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
      .order_tag_contain {
        text-align: left;
        display: flex;
        justify-content: space-between;
      }
      .order_tag {
        display: inline-block;
        padding-top: 20px;
      }
      .list-id {
        margin-right: 15px;
      }
      .list-created {
        margin-left: 15px;
      }
      .view-detail {
        display: inline-block;
        margin-top: 15px;
      }
      .product {
        margin: 40px 0 20px 0;
        display: flex;
      }
      .item-image {
        flex: 0 0 auto;
        position: relative;
        display: block;
        width: 70px;
        height: 70px;
        border-radius: 6px;
        background-color: #ededed;
        overflow: hidden;
      }
      .item-image > img {
        display: block;
        position: absolute;
        width: 100%;
        transition: transform 0.2s;
      }

      .item-content {
        display: inline-block;
        padding-left: 12px;
        width: 45%;
      }
      .content-header {
        min-width: 0;
        font-size: 15px;
        font-weight: 500;
        color: #000;
        line-height: 21px;
        overflow-wrap: break-word;
        transition: opacity 0.1s;
        text-align: left;
        margin-bottom: 5px;
      }
      .content-header-product {
        text-align: left;
        font-weight: 700;
      }
      .item-caption {
        margin-top: 8px;
        font-weight: 400;
        font-size: 11px;
        line-height: 15px;
        color: #757575;
        overflow-wrap: break-word;
      }
      .item-order-info {
        text-align: left;
        width: 30%;
        padding-left: 12px;
      }
      .item-product,
      .item-price,
      .order-count {
        margin-bottom: 5px;
      }
      .item-product {
        color: #b7b7b7;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .item-price {
        color: #727272;
      }
      .order-count {
        display: inline-block;
        margin-left: 25px;
        color: #b7b7b7;
      }
      .order-confirm {
        color: #35c5f0;
        font-weight: bold;
        font-size: 0.85rem;
      }
      .order-control-btn {
        width: 20%;
      }
      .control-btn {
        display: block;
        float: right;
        padding: 10px 50px;
        margin-bottom: 10px;
      }
      .tracking-item {
        border: 2px solid #35c5f0;
        border-radius: 5px;
        color: #35c5f0;
      }
      .comment-item {
        border-radius: 5px;
        background-color: #35c5f0;
        color: white;
      }
      .hr {
        border-bottom: 1px solid #dcdcdc;
      }
    `
  ]
})
export class OrderListComponent implements OnInit {
  item = {};
  order_list = {};
  constructor(
    private userService: UserService,
    private titleService: Title,
    private commonService: CommonService,
    private router: Router
  ) {}
  orderList: user_order[] = [];
  ngOnInit() {
    this.titleService.setTitle('1등 인테리어 집꾸미기 서비스, 오늘의 집');
    this.userService.getProductOrder().subscribe(
      (orderList) => {
        this.orderList = orderList;
        console.log(this.orderList);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  goDetail(product_id: number) {
    this.router.navigate([`/store/${product_id}`]);
  }
  get OrderCount() {
    return this.orderList ? this.orderList.length : 0;
  }
}
