import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <app-navigation></app-navigation>
      <div class="sub-nav" SubNavFixed>
        <app-community-navigation *ngIf="stateService.getNav()===0"></app-community-navigation>
        <app-store-navigation *ngIf="stateService.getNav()===1"></app-store-navigation>
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
    , private stateService: StateService
  ) {
    if (!this.stateService.Token) {
      const user = this.storageService.getLocal("user");
      this.stateService.setToken(user);
      this.getUserDetail()
    }
  }

  ngOnInit() {
  }
  getUserDetail() {
    this.userService.getUserDetail().subscribe(req => {
      this.stateService.setUserDetail(req[0]);

    });
  }

}
