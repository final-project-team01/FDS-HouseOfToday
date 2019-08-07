import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { housewarming_info, housewarming_comments } from 'src/app/core/models/community.interface';

@Component({
  selector: 'app-project-article',
  template: `
    <div class="article-container" *ngIf="_projectInfo">
      <img src="{{ _projectInfo.cover_image }}" class="cover-image">
      <app-project-table
      [projectInfo]="_projectInfo"></app-project-table>
      <hr>
      <article *ngFor="let content of contents">
      <h2 *ngIf="content.title !== ''">{{ content.title }}</h2>
      <figure>
      <img src="{{ content.image }}" class="content-image">
      <figcaption *ngIf="content.text !== '-'">
        {{ content.text }}
      </figcaption>
      </figure>
      </article>
      <div class="article-footer">
        <span>좋아요<span class="count">
        {{ commonService.addComma(_projectInfo.like_count) }}
        </span></span>
        <span>스크랩<span class="count">
        {{ commonService.addComma(_projectInfo.scrap_count) }}
        </span></span>
        <span>댓글<span class="count">
        {{ commonService.addComma(_projectInfo.comment_count) }}
        </span></span>
        <span>조회<span class="count">
        {{ commonService.addComma(_projectInfo.hit_count) }}
        </span></span>
      </div>
      <app-comment 
        [originalList]="comments"></app-comment>
    </div>
  `,
  styles: [`
  .article-container{
    width: 800px;
    display: inline-block;
    padding: 40px 50px;
  }
  .cover-image{
    width: 800px;
    margin-left: -50px;
    border-radius: 5px;
  }
  hr{
    margin: 30px 0;
    border: 1px solid #ededed;
  }
  article{
    margin: 0 auto 60px auto;
  }
  h2{
    padding: 5px 5px 5px 10px;
    border: none;
    color: #424242;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    border-left: 3px solid #dcdcdc;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .content-image{
    width: 100%;
  }
  figcaption{
    margin: 30px 0 60px 0;
  }
  .article-footer{
    font-size: 12px;
    margin-bottom: 60px;
  }
  .article-footer > span{
    color: #bdbdbd;
  }
  .count{
    color: #757575;
    margin: 0 8px 0 3px;
  }
  .article-comment{
  }
  `]
})
export class ProjectArticleComponent implements OnInit {

  _projectInfo: housewarming_info;
  comments: housewarming_comments[];

  @Input() 
  set projectInfo(projectInfo: housewarming_info) {
    if (!projectInfo) return;
    this._projectInfo = projectInfo;
    this.comments = projectInfo.housewarming_comments;
  }
  get contents(){
    const contents 
      = this._projectInfo ? this._projectInfo.housewarming_detail_content.sort(function(a, b) {
      return a.id - b.id;
    }) : false;
    return contents;
  }

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    console.log(this._projectInfo);
    
  }

}
