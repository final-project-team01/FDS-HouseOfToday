import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <app-navigation></app-navigation>
      <app-community-navigation></app-community-navigation>
      <app-store-navigation></app-store-navigation>
    </header>
  `,
  styles: [
    `
      header{
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService
    , private storageService: StorageService
    , private stateService: StateService
  ) { }

  ngOnInit() {
    if (!this.stateService.Token) {
      this.stateService.setToken(this.storageService.getLocal("user"));
    }
  }
}
