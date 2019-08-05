import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/core/services/community.service';

@Component({
  selector: 'app-photo-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
      <app-photo-article 
        [photoInfo]="photoInfo"
        [originalList]="comments"
        [chosenList]="chosenComments"
        [pages]="commentPages"></app-photo-article>
      <app-photo-user
        [photoInfo]="photoInfo"></app-photo-user>
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
  }
  `]
})
export class PhotoDetailComponent implements OnInit {

  constructor(private commonService: CommonService
            , private route: ActivatedRoute
            , private communityService: CommunityService) { }

  id: number;
  photoInfo: any;
  comments = [];
  chosenComments = [];
  commentPages = [];

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
    this.communityService.getPhotoInfo(this.id)
      .subscribe(data => {
        this.photoInfo = data;
        this.comments = this.photoInfo.photo_comments;
        this.chosenComments = this.comments.filter((comment, index) => index >= 0 && index < 5);
        const cp = Math.ceil(this.comments.length / 5);
        this.commentPages = Array(cp);        
      });
  }

}
