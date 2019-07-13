import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-header',
  template: `
    <app-navigation></app-navigation>
    <app-community-navigation></app-community-navigation>
    <app-store-navigation></app-store-navigation>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
