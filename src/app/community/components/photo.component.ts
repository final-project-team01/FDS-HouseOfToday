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
          <article class="card_item">
            <div class="card_item_top_bar">
              <div class="user_icon_image">
                <app-basic-uses-avatar></app-basic-uses-avatar>
              </div>
              <address class="card_item_user_info">
                <div class="user_name">Name</div>
                <span> . </span>
                <button class="user_follow">팔로우</button>
                <p>추가 설명 공간</p>
              </address>
            </div>
            <div class="card_item_content">
              <div class="content_description">설명</div>
              <div class="content_image">photo</div>
              <div>action</div>
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
        background-color: lightgray;
        width: 1136px;
        margin: 0 auto;
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
        background-color: gray;
      }
      .contents {
        margin-right: -10px;
        margin-left: -10px;
        margin-top: 30px;
      }

      .card_item {
        background-color: pink;
        padding: 0 10px;
        max-width: 25%;
      }
      .card_item_top_bar {
        background-color: green;
        font-size: 15px;
      }

      .user_icon_image {
        background-color: black;
        float: left;
        position: absolute;
      }
      .card_item_user_info {
        padding-left: 48px;
        margin-bottom: 16px;
      }
      .user_name {
        background-color: yellow;
        display: inline-block;
      }
      .user_follow {
        background: none;
        background-color: blue;
        color: #35c5f0;
        font-weight: 700;
      }
      .card_item_content {
        background-color: red;
        position: relative;
      }
      .content_description {
        padding-top: 269px;
      }
      .content_image {
        background-color: hotpink;
        position: absolute;
        height: 269px;
        width: 269px;
        top: 0;
      }
      address > p {
        background-color: brown;
      }
      .reply_user_icon_image {
        background-color: yellowgreen;
        display: block;
      }
    `
  ]
})
export class PhotoComponent implements OnInit {
  constructor(
    private communityService: CommunityService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
  }
}
