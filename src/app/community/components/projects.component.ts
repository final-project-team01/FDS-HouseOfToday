import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <app-header></app-header>
  <div class="items">
    <app-project-list></app-project-list>
    <app-project-list></app-project-list>
    <app-project-list></app-project-list>
  </div>
  `,
  styles: [`
    .items{
      width:1136px;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin-right: -10px;
      margin-left: -10px;
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
