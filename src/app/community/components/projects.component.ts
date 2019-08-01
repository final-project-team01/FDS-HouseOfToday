import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <app-header></app-header>
  <div class="container">
    <div class="items">
      <app-project-list></app-project-list>
      <app-project-list></app-project-list>
      <app-project-list></app-project-list>
      <app-project-list></app-project-list>
    </div>
  </div>
  `,
  styles: [`
    .container{
      width: calc(100vw - 18px);
    }
    .items{
      width:1136px;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin-right: -10px;
      margin-left: -10px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    app-project-list{
      width:33.333%;
    }
  `]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
