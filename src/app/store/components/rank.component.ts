import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank',
  template: `
  <app-navigation></app-navigation>
  <app-community-navigation></app-community-navigation>
  <app-store-navigation></app-store-navigation>
    <p>
      rank works!
    </p>
  `,
  styles: []
})
export class RankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
