import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-community-navigation',
  template: `
  <div class="navigation-secondary">
    <nav>
      <a routerLink="/community" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }" BlueFont>홈</a>
      <a routerLink="/photo" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }" BlueFont>사진</a>
      <a routerLink="/project" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }" BlueFont>집들이</a>
      <!--<a routerLink="/community/#" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">질문과 답변</a>-->
    </nav>
  </div>
  `,
  styleUrls: [`./secondaryNav.scss`]
})
export class CommunityNavigationComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

}
