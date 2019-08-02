import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { rankingPage, today_deal } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-rank',
  template: `
    <app-header></app-header>
    <app-rank-container [menuWidth]="menuWidth" [rankingList]="rankingList" [productItems]="productItems" [setNumber]="setNumber" [activeClass]="activeClass" [homeDeco]="homeDeco" [dailySupply]="dailySupply" [fabric]="fabric" [kitchenWare]="kitchenWare" [homeAppliance]="homeAppliance" [companionAnimals]="companionAnimals" [furniture]="furniture" (showMoreBtn)="showMore()" [showTen]="showTen" [activeRank]="activeRank"></app-rank-container>
    <app-footer></app-footer>
  `,
  styles: [`

  `]
})
export class RankComponent implements OnInit {
  menuWidth: string = '20%';

  rankingList: rankingPage;
  productItems: today_deal;
  setNumber: number = 10;
  activeClass: boolean;
  homeDeco: today_deal;
  dailySupply: today_deal;
  fabric: today_deal;
  kitchenWare: today_deal;
  homeAppliance: today_deal;
  companionAnimals: today_deal;
  furniture: today_deal;
  showTen: boolean = true;
  activeRank: boolean = true;

  constructor(private storeService: StoreService
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    this.storeService.getRankingList()
      .subscribe(data => {
        this.rankingList = data as rankingPage;
        this.productItems = this.rankingList.best100;
        this.homeDeco = this.rankingList.light_homedeco;
        this.dailySupply = this.rankingList.daily_supplies;
        this.fabric = this.rankingList.fabric;
        this.kitchenWare = this.rankingList.kitchenware;
        this.homeAppliance = this.rankingList.home_appliances;
        this.companionAnimals = this.rankingList.companion_animal;
        this.furniture = this.rankingList.furniture;
      });
  }

  showMore() {
    this.setNumber = 100;
    this.activeClass = true;
    this.showTen = false;
  }
}
