import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { housewarming } from 'src/app/core/models/community.interface';
import { CommonService } from 'src/app/core/services/common.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  template: `
  <app-header></app-header>
  <div class="container">
    <div class="items">
      <div class="item-count">전체 {{housewarmingItem['total_post_count']}}</div>

      <app-project-list
      *ngFor="let item of housewarmingItem['housewarming_posts']"
      [item]="item"  
      ></app-project-list>
    </div>
  </div>
  `,
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private communityService: CommunityService
    , private commonService: CommonService
    , private titleService: Title) { }
  housewarmingItem: housewarming = { total_post_count: 0, housewarming_posts: [] };
  ngOnInit() {
    this.titleService.setTitle("1등 인테리어 집꾸미기 서비스, 오늘의 집");

    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.communityService.getHousewarming().subscribe(
      res => {
        this.housewarmingItem = res;
      }
    )
  }

}
