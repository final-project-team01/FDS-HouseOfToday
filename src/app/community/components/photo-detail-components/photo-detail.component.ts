import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/core/services/community.service';
import { photo_info, photo_comments } from 'src/app/core/models/community.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-detail',
  template: `
    <app-header></app-header>
    <div class="viewport">
    <div class="wrapper">
      <app-photo-article 
        [photoInfo]="photoInfo"
        [originalList]="comments"></app-photo-article>
      <app-photo-user
        [photoInfo]="photoInfo"></app-photo-user>
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
    position: relative;
  }
  `]
})
export class PhotoDetailComponent implements OnInit {

  constructor(private commonService: CommonService
    , private route: ActivatedRoute
    , private communityService: CommunityService
    , private titleService: Title) { }

  id: number;
  photoInfo: photo_info;
  comments: photo_comments[];

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
    this.communityService.getPhotoInfo(this.id)
      .subscribe(data => {
        this.photoInfo = data;
        this.comments = this.photoInfo.photo_comments;
        this.titleService.setTitle(`${this.photoInfo["author"]}님의 인테리어 사진|오늘의 집 유저들의 집 꾸미기`);
      });
  }

}
