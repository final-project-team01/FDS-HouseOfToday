import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <app-header></app-header>
  <div class="container">
    <div class="items">
      <div class="item-count">전체</div>
      <app-project-list></app-project-list>
      <app-project-list></app-project-list>
      <app-project-list></app-project-list>
      <app-project-list></app-project-list>
    </div>
  </div>
  `,
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
