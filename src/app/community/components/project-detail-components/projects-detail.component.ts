import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/core/services/community.service';
import { housewarming_info } from 'src/app/core/models/community.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-detail',
  template: `
  <app-header></app-header>
  <div class="viewport">
    <div class="wrapper">
      <app-project-article
      [projectInfo]="projectInfo"></app-project-article>
      <app-project-user
      [projectInfo]="projectInfo"></app-project-user>
    </div>
  </div>
  `,
  styles: [`
  .viewport{
    width: calc(100vw - 18px);
  }
  .wrapper{
    display:flex;
    margin: 0 auto;
    box-sizing: border-box;
    width: 1136px;
    min-height: 1px;
  }
  `]
})
export class ProjectsDetailComponent implements OnInit {

  constructor(private commonService: CommonService
    , private route: ActivatedRoute
    , private communityService: CommunityService
    , private titleService: Title) { }

  id: number;
  projectInfo: housewarming_info;

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
    this.communityService.getProjectInfo(this.id)
      .subscribe(data => {
        this.projectInfo = data;

        this.titleService.setTitle(`${this.projectInfo["title"]}|오늘의 집 인테리어 고수들의 집 꾸미기`);
      });
  }

}
