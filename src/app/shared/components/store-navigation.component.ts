import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-store-navigation',
  template: `
  <div class="navigation-secondary">
    <nav>
      <a routerLink="/store" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">스토어 홈</a>
      <a routerLink="/store/category" routerLinkActive="active">카테고리</a>
      <a routerLink="/store/rank" routerLinkActive="active">랭킹</a>
    </nav>
  </div>
  `,
  styleUrls: [`./secondaryNav.scss`]
})
export class StoreNavigationComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }
}
