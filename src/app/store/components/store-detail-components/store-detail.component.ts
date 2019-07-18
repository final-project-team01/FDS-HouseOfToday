import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
      <div class="pic-container">
        <app-product-pic></app-product-pic>
      </div>
      <div class="info-container">
        <app-product-info></app-product-info>
        <app-product-option></app-product-option>
      </div>
      <div class="nav-container">
        <app-product-nav></app-product-nav>
        <app-product-detail></app-product-detail>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
  .wrapper{
    margin: 120px auto 0 auto;
    box-sizing: border-box;
    width: 1136px;
    height: auto;
    min-height: 1px;
  }
  .pic-container{
    display: inline-block;
  }
  .info-container{
    width: 450px;
    float: right;
  }
  .nav-container{
    clear: both;
    padding-top: 80px;
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
