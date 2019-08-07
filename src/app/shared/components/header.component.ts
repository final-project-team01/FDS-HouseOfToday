import { Component } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-header',
  template: `
    <app-pop-up *ngIf="commonService.isPopup"></app-pop-up>
    <header>
      <app-navigation></app-navigation>
      <div class="sub-nav" SubNavFixed>
        <app-community-navigation *ngIf="commonService.getNav()===0"></app-community-navigation>
        <app-store-navigation *ngIf="commonService.getNav()===1"></app-store-navigation>
      </div>
    </header>    
  `,
  styles: [`
    .sub-nav{
      z-index: 502;
      left: 0;
      right: 0;
      transition: top 0.1s;
      background-color: white;
      border-bottom: 1px solid #ededed;
      position: relative;
      width: calc(100vw - 18px);
    }
  `
  ]
})
export class HeaderComponent {
  isPopup = true;
  constructor(public commonService: CommonService) { }


}
