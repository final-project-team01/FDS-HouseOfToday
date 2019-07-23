import { Component } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-header',
  template: `
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
    }
  `
  ]
})
export class HeaderComponent {
  constructor(private commonService:CommonService) { }


}
