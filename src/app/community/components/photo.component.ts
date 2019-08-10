import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';
import { communityPhoto } from 'src/app/core/models/community.interface';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  template: `
    <app-header></app-header>
    <div class="wrapp">
      <div class="container">
        <div class="filter_control">
          <ul class="filter_control_list_item">
            <app-filter-drop-button class="filter">정렬</app-filter-drop-button>
            <app-filter-drop-button class="filter"
              >주거형태</app-filter-drop-button
            >
            <app-filter-drop-button class="filter">공간</app-filter-drop-button>
            <app-filter-drop-button class="filter">평수</app-filter-drop-button>
            <app-filter-drop-button class="filter">스타일</app-filter-drop-button>
            <app-filter-drop-button class="filter">컬러</app-filter-drop-button>
            <app-filter-drop-button class="filter"
              >셀프/전문</app-filter-drop-button
            >
            <app-filter-drop-button class="filter"
              >제품정보</app-filter-drop-button
            >
          </ul>
        </div>
  
        <div class="card_list">
          <div class="contents">
            <article *ngFor="let item of cardItems" class="card_item" ImageZoom (click)="movePhoto(item['id'])">
              <div class="card_item_top_bar">
                <div class="user_icon_image">
                  <app-basic-uses-avatar
                    [pic]="[item.author_profile_image]"
                  ></app-basic-uses-avatar>
                </div>
                <address class="card_item_user_info">
                  <div class="user_name">{{ item.author }}</div>
                  <span> . </span>
                  <button class="user_follow">팔로우</button>
                  <p>{{ item.author_profile_comment }}</p>
                </address>
              </div>
              <div class="card_item_content">
                <div class="content_image">
                  <a class="image"><img class="image image-zoom" src="{{ item.image }}"
                  /></a>
                </div>
                <aside class="card_item_action">
                  <div class="card_action">
                    <a class="like_btn"></a>
                    <span class="action_info">{{ item.like_count }}</span>
                  </div>
  
                  <div class="card_action">
                    <a class="scrap_btn"></a>
                    <span class="action_info">{{ item.scrap_count }}</span>
                  </div>
  
                  <div class="card_action">
                    <a class="reply_comment_btn"></a>
                    <span class="action_info">{{ item.comment_count }}</span>
                  </div>
                </aside>
                <div class="content_description">{{ item.text }}</div>
  
                <div class="reply_user_icon_image">
                  <article>
                    <address class="card_item_user_reply_info">
                      <app-basic-uses-avatar
                        [size]="24"
                        [isBorder]="false"
                        [pic]="[item.comments[0].author_profile_image]"
                      ></app-basic-uses-avatar>
  
                      <div class="reply_user_name">
                        {{ item.comments[0].author }}
                      </div>
                    </address>
                    <p class="user_comment">{{ item.comments[0].text }}</p>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>

  `,
  styles: [
    `
      .wrapp{
        width: calc(100vw - 16px);
      }
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
      .y-root-i1 i2 i4 {
        border-style: none;
      }
      .filter_control {
        padding: 15px 0 5px;
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
      .filter {
        margin-left: 5px;
      }
      .contents {
        margin-right: -10px;
        margin-left: -10px;
        margin-top: 30px;
      }
      article {
        margin-bottom: 40px;
        float: left;
      }
      .card_item {
        padding: 0 10px;
        width: 25%;
        display: inline-block;
        height: 530px;
      }
      .card_item_top_bar {
        font-size: 15px;
        min-height: 40px;
      }
      .user_icon_image {
        float: left;
        position: absolute;
      }
      .card_item_user_info {
        padding-left: 48px;
        margin-bottom: 16px;
        height:40px;
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
        margin-bottom: 30px;
      }
      .content_description {
        margin-top: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        max-height: 76px;
      }
      .image {
        background-color: lightgray;
        width: 100%;
        height: 269px;
        border-radius: 6px;
        overflow:hidden;
        display: inline-block;
        top: 0;
      }
      .card_item_action {
        display: flex;
        justify-content: space-around;
        padding: 13px 0 16px;
      }
      .card_action {
        display: flex;
        align-items: center;
      }
      .action_info {
        margin-left: 6px;
        font-size: 12px;
      }
      address > p {
        font-size: 12px;
        line-height: 16px;
        color: #757575;
        margin-top: 2px;
        overflow: hidden;
        /* text-overflow: ellipsis; */
        white-space: nowrap;
      }
      .reply_user_icon_image {
        display: block;
      }
      .like_btn {
        background-image: url(assets/image/common-action@2x.png);
        background-size: 400px;
        width: 28px;
        height: 26px;
      }
      .scrap_btn {
        background-image: url(assets/image/common-action@2x.png);
        background-size: 400px;
        background-position-x: -80px;
        width: 28px;
        height: 26px;
      }
      .reply_comment_btn {
        background-image: url(assets/image/common-action@2x.png);
        background-size: 400px;
        background-position-x: 82px;
        background-position-y: 83px;
        width: 28px;
        height: 26px;
      }
      .card_item_user_reply_info {
        margin-top: 12px;
        font-size: 15px;
        line-height: 22px;
        display: flex;
      }
      .card_item_user_reply_info > p {
        display: inline-block;
      }
      .user_comment {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        max-height: 30px;
      }
      .reply_user_name {
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        margin-left: 6px;
      }
    `
  ]
})
export class PhotoComponent implements OnInit {
  cardItems: communityPhoto[] = [];

  constructor(
    private communityService: CommunityService,
    private commonService: CommonService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("1등 인테리어 집꾸미기 서비스, 오늘의 집");
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.communityService.getPhotoImage().subscribe((data) => {
      this.cardItems = data;
    },
      (error: HttpErrorResponse) => { console.log(error) });
  }
  movePhoto(id: number) {
    this.router.navigate([`photo/${id}`]);
  }
}
