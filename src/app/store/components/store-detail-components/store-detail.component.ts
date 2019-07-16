import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/store.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
      <app-product-pic></app-product-pic>
      <app-product-info></app-product-info>
      <app-product-nav></app-product-nav>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
  .wrapper{
    margin: 30px auto 0 auto;
    box-sizing: border-box;
    width: 1136px;
    height: auto;
    min-height: 1px;
  }
  `]
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
