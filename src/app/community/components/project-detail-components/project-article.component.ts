import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-article',
  template: `
    <div class="article-container" *ngIf="_projectInfo">
      <img src="{{ _projectInfo.cover_image }}" class="cover-image">
      <app-project-table
      [projectInfo]="projectInfo"></app-project-table>
      <hr>
      <article *ngFor="let content of contents">
      <figure>
      <img src="{{ content.image }}" class="content-image">
      <figcaption>
      {{ content.text }}
      </figcaption>
      </figure>
      </article>
    </div>
  `,
  styles: [`
  .article-container{
    width: 800px;
    display: inline-block;
    padding-top: 40px;
    background-color: yellow;
  }
  .cover-image{
    width: 800px;
    border-radius: 5px;
  }
  hr{
    margin: 60px 50px;
  }
  article{
    width: 700px;
    margin: 0 auto;
  }
  .content-image{
    width: 100%;
  }
  `]
})
export class ProjectArticleComponent implements OnInit {

  _projectInfo: any;
  article: any;

  @Input() 
  set projectInfo(projectInfo) {
    this._projectInfo = projectInfo;
  }
  get contents(){
    const contents = this._projectInfo.housewarming_detail_content.sort(function(a, b) {
      return a.id - b.id;
    });
    return contents;
  }

  constructor() { }

  ngOnInit() {
  }

}
