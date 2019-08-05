import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-store-navigation',
  template: `
  <div class="navigation-secondary">
    <nav>
      <a routerLink="/store" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }" BlueFont>스토어 홈</a>
      <a routerLink="/store/category" routerLinkActive="active" BlueFont>카테고리</a>
      <a routerLink="/store/rank" routerLinkActive="active" BlueFont>랭킹</a>
    </nav>
  </div>
  `,
  styleUrls: [`./secondaryNav.scss`]
})
export class StoreNavigationComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
}
