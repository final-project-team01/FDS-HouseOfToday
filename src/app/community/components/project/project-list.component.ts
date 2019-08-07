import { Component, OnInit, Input } from '@angular/core';
import { housewarming_posts } from 'src/app/core/models/community.interface';

@Component({
  selector: 'app-project-list',
  template: `
    <article>
      <div class="project-item">
        <a routerLink="/project/{{item['id']}}" ImageZoom>
          <div class="project-cover">
            <div class="project-cover-image">
              <img class="image-zoom" src="{{item['cover_image']}}">
            </div>
            <h1 class="project-cover-title">{{item['title']}}</h1>
          </div>
        </a>
        <div>
          <div class="project-item-writer">
            <app-basic-uses-avatar
            [size]="16"
            [pic]="item['author_profile_image']"
            [isBorder]="false">
            </app-basic-uses-avatar>
            <span class="item-writer-name">작성자</span>
          </div>
          <div class="project-item-stats">
            <span>스크랩 {{item['scrap_count']}}</span>
            <span class="dot"></span>
            <span>조회수 {{item['hit_count']}}</span>
          </div>
        </div>
      </div>
    </article>
  `,
  styleUrls: ['./project-list.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() item: housewarming_posts;
  constructor() { }

  ngOnInit() {

  }


}
