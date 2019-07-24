import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-user-nav',
  template: `
    <nav class="page-navigation">
      <a
        routerLink="/users/{{commonService.Id}}"
        routerLinkActive="active"        
        class="page_nav_item"
        >프로필</a
      >
      <a
        routerLink="/orderList/{{commonService.Id}}"
        routerLinkActive="active"
        class="page_nav_item"
        >주문</a
      >
      <a
        routerLink="/users/{{commonService.Id}}/edit"
        routerLinkActive="active"
        
        class="page_nav_item"
        >설정</a
      >
    </nav>
  `,
  styles: [
    `
      .page-navigation {
        height: 60px;
        text-align: center;
        border-bottom: 1px solid #ededed;
      }
      .page_nav_item {
        display: inline-block;
        line-height: 60px;
        margin: 0 15px;
        font-size: 18px;
        font-weight: 700;
      }
      .page_nav_item.active {
        color: #35c5f0;
      }
    `
  ]
})
export class UserNavComponent implements OnInit {
  constructor(private commonService: CommonService) { }

  ngOnInit() { }
}
