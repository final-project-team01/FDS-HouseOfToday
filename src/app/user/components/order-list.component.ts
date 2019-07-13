import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-order-list',
  template: `    
    <p>
      order-list works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class OrderListComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
