import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-photo',
  template: `
    <app-header></app-header>
    <div class="container">
      <div class="filter_control">
        <ul class="filter_control_list_item">
          <li class="filter_control_items">정렬</li>
          <li class="filter_control_items">주거형태</li>
          <li class="filter_control_items">공간</li>
          <li class="filter_control_items">평수</li>
          <li class="filter_control_items">스타일</li>
          <li class="filter_control_items">컬러</li>
          <li class="filter_control_items">셀프/전문</li>
          <li class="filter_control_items">제품정보</li>
        </ul>
      </div>

      <div class="card_list">
        <div class="contents">
          <article *ngFor="let item of cardItems" class="card_item">
            <div class="card_item_top_bar">
              <div class="user_icon_image">
                <app-basic-uses-avatar></app-basic-uses-avatar>
              </div>
              <address class="card_item_user_info">
                <div class="user_name">user_name</div>
                <span> . </span>
                <button class="user_follow">팔로우</button>
                <p>추가 설명 공간</p>
              </address>
            </div>
            <div class="card_item_content">
              <div class="content_image">
                <a class="image" href="#"></a>
              </div>
              <aside class="card_item_action">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </aside>
              <div class="content_description">카드 아이템 설명 공간</div>
            </div>
            <div class="reply_user_icon_image">
              <app-basic-uses-avatar></app-basic-uses-avatar>
            </div>
          </article>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .container {
        width: 1136px;
        margin: 0 auto;
        font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕',
          'Malgun Gothic', sans-serif;
        box-sizing: border-box;
      }
      button {
        border-style: none;
        cursor: pointer;
      }

      .filter_control_items {
        background-color: #f5f5f5;
        color: #757575;
        font-weight: 700;
        display: inline-block;
        margin: 0 2px;
        padding: 7px 8px 6px;
        font-size: 15px;
        line-height: 19px;
        border-radius: 4px;
        cursor: pointer;
      }
      .card_list {
      }
      .contents {
        margin-right: -10px;
        margin-left: -10px;
        margin-top: 30px;
      }
      article {
        margin-bottom: 40px;
      }
      .card_item {
        padding: 0 10px;
        width: 25%;
        display: inline-block;
      }
      .card_item_top_bar {
        font-size: 15px;
      }

      .user_icon_image {
        float: left;
        position: absolute;
      }
      .card_item_user_info {
        padding-left: 48px;
        margin-bottom: 16px;
      }
      .user_name {
        display: inline-block;
        color: #424242;
        font-weight: 500;
      }
      .user_follow {
        background: none;
        color: #35c5f0;
        font-weight: 700;
        line-height: 19px;
        padding: 0;
      }
      .card_item_content {
        position: relative;
      }
      .content_description {
        margin-top: 12px;
      }
      .image {
        background-color: hotpink;
        width: 100%;
        height: 269px;
        border-radius: 6px;

        display: inline-block;
        top: 0;
      }
      .card_item_action {
        display: flex;
        justify-content: space-around;
        padding: 13px 0 16px;
      }
      address > p {
        font-size: 12px;
        line-height: 16px;
        color: #757575;
        margin-top: 2px;
      }
      .reply_user_icon_image {
        background-color: yellowgreen;
        display: block;
      }
    `
  ]
})
export class PhotoComponent implements OnInit {
  cardItems = [];

  constructor(
    private communityService: CommunityService,
    private commonService: CommonService
  ) {
    for (let I = 0; I < 16; I++) {
      const item = { item: I };
      this.cardItems =
        this.cardItems.length > 0 ? [...this.cardItems, item] : [item];
    }
  }

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
  }
}
