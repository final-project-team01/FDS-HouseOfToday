import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-article',
  template: `
    <div class="article-container">
    article
    </div>
  `,
  styles: [`
  .article-container{
    width: 806px;
    display: inline-block;
    padding: 40px 40px 0 0;
    border-right: 1px solid #ededed;
    background-color: yellow;
  }
  `]
})
export class ProjectArticleComponent implements OnInit {

  @Input() projectInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
