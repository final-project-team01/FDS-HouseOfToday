import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-community-navigation',
  template: `
  <div class="navigation-secondary" (mouseout)="resetNav($event)">
    <nav>
      <a routerLink="/community" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">홈</a>
      <a routerLink="/community/photo" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">사진</a>
      <a routerLink="/community/#" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">집들이</a>
      <a routerLink="/community/#" routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">질문과 답변</a>
    </nav>
  </div>
  `,
  styleUrls: [`./secondaryNav.scss`]
})
export class CommunityNavigationComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }
  resetNav(event) {
    if (event.clientY > 130)
      this.stateService.resetNav();
  }

}
