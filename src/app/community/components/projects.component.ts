import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { housewarming } from 'src/app/core/models/community.interface';
import { CommonService } from 'src/app/core/services/common.service';

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
    , private commonService: CommonService) { }
  housewarmingItem: housewarming = { total_post_count: 0, housewarming_posts: [] };
  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.communityService.getHousewarming().subscribe(
      res => {
        this.housewarmingItem = res;
      }
    )
  }

}
