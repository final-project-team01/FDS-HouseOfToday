import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/core/services/community.service';

@Component({
  selector: 'app-projects-detail',
  template: `
  <app-header></app-header>
  <div class="wrapper">
    <app-project-article
    [projectInfo]="projectInfo"></app-project-article>
    <app-project-user
    [projectInfo]="projectInfo"></app-project-user>
  </div>
  `,
  styles: [`
  .wrapper{
    display:flex;
    margin: 0 auto;
    box-sizing: border-box;
    width: 1136px;
    min-height: 1px;
    position: relative;
    background-color: skyblue;
  }
  `]
})
export class ProjectsDetailComponent implements OnInit {

  constructor(private commonService: CommonService
            , private route: ActivatedRoute
            , private communityService: CommunityService) { }

  id: number;
  projectInfo: any;
        
  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
    this.communityService.getProjectInfo(this.id)
      .subscribe(data => {
        this.projectInfo = data;
        console.log(this.projectInfo);
        
      });
  }

}
