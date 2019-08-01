import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  template: `
    <article>
      <div class="project-item">
        <a>
          <div class="project-cover">
            <div class="project-cover-image">
              <img src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-projects-cover_images-156446942153873608.jpg/480/288?quality=80">
            </div>
            <h1 class="project-cover-title">제목</h1>
          </div>
        </a>
        <div>
          <div class="project-item-writer">
            작성자
          </div>
          <div class="project-item-stats">
            <span>스크랩</span>
            <span>조회수</span>
          </div>
        </div>
      </div>
    </article>
  `,
  styleUrls: ['./project-list.scss']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
