import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-signin',
  template: `
    <p>
      signin works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
