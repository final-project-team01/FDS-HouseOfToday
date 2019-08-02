import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-article',
  template: `
    <div class="article-container" *ngIf="photoInfo">
      <div class="article-type">
        <span>{{ photoInfo.category }}</span>
        <span>어제</span>
      </div>
      <figure>
        <img src="{{ photoInfo.image }}" class="photo">
        <figcaption>
          <div *ngIf="photoInfo.text">{{ photoInfo.text }}</div>
        </figcaption>
      </figure>
    </div>
  `,
  styles: [`
  .article-container{
    width: 700px;
    display: inline-block;
    position: relative;
    padding: 40px 40px 0 0;
    background-color: yellow;
    border-right: 1px solid #ededed;
  }
  .article-type{
    margin-bottom: 30px;
  }
  .article-type span{
    color: #bdbdbd;
  }
  .article-type > span:last-child{
    float: right;
  }
  .photo{
    width: 100%;
  }
  `]
})
export class PhotoArticleComponent implements OnInit {

  @Input() photoInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
