import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { CommonService } from 'src/app/core/services/common.service'

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
export class HeaderComponent implements OnInit {

  private location: number;

  @Input() thisNav: number;
  constructor(private userService: UserService
    , private storageService: StorageService
    , private commonService: CommonService
  ) {
    if (!this.commonService.Token) {
      const user = this.storageService.getLocal("user");
      this.commonService.setToken(user);
    }
  }

  ngOnInit() {
  }


}
