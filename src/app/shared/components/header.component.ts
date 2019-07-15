import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

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

  constructor(private userService: UserService) { }
  @Input() where: string;

  ngOnInit() {
  }

}
