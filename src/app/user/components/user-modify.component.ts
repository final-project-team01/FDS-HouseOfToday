import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-modify',
  template: `
    <app-navigation></app-navigation>
    <app-user-nav></app-user-nav>
    <p>
      user-modify works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class UserModifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
