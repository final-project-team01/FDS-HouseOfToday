import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
