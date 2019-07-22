import { Component } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { StateService } from 'src/app/core/services/state.service';


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
            alt="Larm Rmah"
            src="https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2Flarm-rmah-47685-unsplash.jpeg?alt=media&token=1db05ae5-9c03-437b-9e8c-764dfb257061">
        </ly-avatar>
      </button>
    </ly-grid>
    
    <ng-template #menu let-M>
      <ly-menu [ref]="M">
        <ul class="navigation-user-menu">
          <li><a routerLink="/">마이홈</a></li>
          <li><a routerLink="/">나의 쇼핑</a></li>
          <li><a routerLink="/"(click)="logout($event)">로그아웃</a></li>
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
    cursor:pointer;
  }
  .navigation-user-menu a{
    display: block;
    padding: 7.5px 10px;
    font-size: 15px;
    border-radius: 2px;
    color: #424242;
  }
  `]
})
export class AvatarWithButtonComponent {
  constructor(private storageService: StorageService, private stateService: StateService) { }
  logout(e: Event) {
    e.preventDefault();
    this.storageService.removeLocal("user");
    this.storageService.removeSession("user");
    this.stateService.setToken("");

  }
}