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
        card_list
        <div class="card_items">card1</div>
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
      .card_items {
        background-color: pink;
        padding: 0 10px;
        max-width: 25%;
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
