import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/core/services/common.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-brand',
  template: `
    <app-header></app-header>
      <div class="brand-wrap container">
        <div class="brand row">
          <div class="brand__side-bar col-12 col-md-3">
            <article class="brand-profile">
              <div class="brand-profile__content">
                <h1 class="brand-profile__name">{{name}}</h1>
                <p class="brand-profile__overview">
                  <span class="brand-profile__stars"></span>
                  <span class="brand-profile__count"></span>
                </p>
              </div>
            </article>
          </div>
          <div class="brand__content col-12 col-md-9">
            <section class="brand__section">
              <header class="brand__section__header">
                <h1 class="brand__section__title">모든 상품</h1>
              </header>
              <section class="brand__production-section">
                <div class="filter">
                  <div class="filter-bar category-filter-bar">
                    <div class="filter-bar__control-list">
                      
                    </div>
                    <div></div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
      <pre>{{ star_score | json }}</pre>
      <app-footer></app-footer>
  `,
  styles: [`
  .brand-wrap {
    margin-top: 50px;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
    width: 1136px;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-right: -10px;
    margin-left: -10px;
  }

  .col-md-3 {
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .brand-profile {
    display: block;
    margin-bottom: 50px;
    align-items: flex-start;
  }

  .brand-profile__content {
    margin: 6px 0 0;
    flex: 1 1 auto;
  }

  .brand-profile__content {
    margin: 6px 0 0;
    flex: 1 1 auto;
  }

  .brand-profile__name {
    margin: -5px 0;
    font-size: 30px;
    line-height: 40px;
    color: #424242;
    font-weight: 700;
    overflow-wrap: break-word;
  }
  `]
})
export class BrandComponent implements OnInit {
  name: string;
  brandItems: today_deal[];
  star_average;

  constructor(private route: ActivatedRoute
    , private storeService: StoreService
    , private userService: UserService
    , private commonService: CommonService
    , private cartService: CartService
    , private titleService: Title
    , private router: Router) { }

  ngOnInit() {
    window.scroll({ top: 0 });
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.route.paramMap
      .subscribe(params => { this.name = params.get('name') },
        (error: HttpErrorResponse) => { console.log(error) });
    this.storeService.getBrandItems(this.name)
      .subscribe((data) => {
        this.brandItems = data as today_deal[];
        this.star_average = this.brandItems['star_avg']
      })
  }

}
