import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-project-article',
  template: `
    <div class="article-container" *ngIf="_projectInfo">
      <img src="{{ _projectInfo.cover_image }}" class="cover-image">
      <app-project-table
      [projectInfo]="_projectInfo"></app-project-table>
      <hr>
      <article *ngFor="let content of contents">
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
        [originalList]="comments"
        [chosenList]="chosenComments"
        [pages]="pages"></app-comment>
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

  _projectInfo: any;
  comments: any;
  chosenComments: any;
  pages: any;

  @Input() 
  set projectInfo(projectInfo) {
    if (!projectInfo) return;
    this._projectInfo = projectInfo;
    this.comments = projectInfo.housewarming_comments;
    this.chosenComments = projectInfo.housewarming_comments.filter((review, index) => index >= 0 && index < 5);
    const ap = Math.ceil(projectInfo.housewarming_comments.length / 5);
    this.pages = Array(ap);
    console.log(projectInfo);
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
  }

}
