import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-signup',
  template: `
    <p>
      signup works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
