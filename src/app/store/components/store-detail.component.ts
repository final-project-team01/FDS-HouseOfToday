import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/store.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <p>
      store-detail works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class StoreDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private storeService: StoreService, private userService: UserService) { }

  ngOnInit() {
    console.log("detail");
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
  }

}
