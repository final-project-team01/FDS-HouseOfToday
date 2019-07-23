import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { StateService } from 'src/app/core/services/state.service';
import { user_detail } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'aui-avatar-with-button',
  template:
    `
      <ly-grid container justify="evenly">
      <button
        ly-button
        appearance="icon"
        [lyMenuTriggerFor]="menu"
      >
        <ly-avatar
          [size]="32">
          <img
            alt="{{this.stateService.getUserDetail() ? this.stateService.getUserDetail()['username'] : ''}}"
            src="{{this.stateService.getUserDetail() ? this.stateService.getUserDetail()['profile'] : '' }}">
        </ly-avatar>
      </button>
    </ly-grid>
    
    <ng-template #menu let-M>
      <ly-menu [ref]="M">
        <ul class="navigation-user-menu">
          <li (click)="myHome()">마이홈</li>
          <li (click)="myShop()">나의 쇼핑</li>
          <li (click)="logout($event)">로그아웃</li>
        </ul> 
      </ly-menu>
    </ng-template>    
  `,
  styles: [`
  .navigation-user-menu{
    position: absolute;
    z-index: 9999999;
    top: 100%;
    width: 140px;
    padding: 12.5px 10px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.3);
    opacity: 1;
    transform: none;
    transition: opacity 0.1s, transform 0.1s;
  }
  .navigation-user-menu li{
    display: block;
    padding: 7.5px 10px;
    font-size: 15px;
    border-radius: 2px;
    color: #424242;
    cursor:pointer;
  }
  `]
})
export class AvatarWithButtonComponent implements OnInit {
  constructor(private storageService: StorageService
    , private stateService: StateService
    , private router: Router
  ) { }

  ngOnInit() {
  }
  logout(e: Event) {
    e.preventDefault();
    this.storageService.removeLocal("user");
    this.storageService.removeSession("user");
    this.stateService.setToken("");
  }
  myHome() {
    this.router.navigate([`users/${this.stateService.getUserDetail()["id"]}`]);
  }
  myShop() {

  }

}