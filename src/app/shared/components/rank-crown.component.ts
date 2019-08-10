import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rank-crown',
  template: `
  <svg class="ranking-product-item__crown__icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path *ngIf="i === 0" fill="#C9950D" fill-rule="nonzero" d="M20.959 16.519H3.069S2.24 13.504 0 3.436c.332-.581 1.106-.581 1.438 0 .249.442 3.318 3.43 6.304 6.279 1.604-2.85 3.29-5.81 3.54-6.28.33-.58 1.105-.58 1.437 0 .193.333 1.908 3.348 3.54 6.28 2.958-2.85 6.027-5.81 6.303-6.28.332-.58 1.106-.58 1.438 0-2.212 10.069-3.041 13.084-3.041 13.084zM3.733 18.013H20.24c.414 0 .746.332.746.747v1.493a.744.744 0 0 1-.746.747H3.733a.744.744 0 0 1-.747-.747V18.76c0-.415.332-.747.747-.747z"></path></svg><svg *ngIf="i === 1" class="ranking-product-item__crown__icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="#9E9E9E" fill-rule="nonzero" d="M20.959 16.519H3.069S2.24 13.504 0 3.436c.332-.581 1.106-.581 1.438 0 .249.442 3.318 3.43 6.304 6.279 1.604-2.85 3.29-5.81 3.54-6.28.33-.58 1.105-.58 1.437 0 .193.333 1.908 3.348 3.54 6.28 2.958-2.85 6.027-5.81 6.303-6.28.332-.58 1.106-.58 1.438 0-2.212 10.069-3.041 13.084-3.041 13.084zM3.733 18.013H20.24c.414 0 .746.332.746.747v1.493a.744.744 0 0 1-.746.747H3.733a.744.744 0 0 1-.747-.747V18.76c0-.415.332-.747.747-.747z"></path></svg><svg *ngIf="i === 2" class="ranking-product-item__crown__icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="#CB875B" fill-rule="nonzero" d="M20.959 16.519H3.069S2.24 13.504 0 3.436c.332-.581 1.106-.581 1.438 0 .249.442 3.318 3.43 6.304 6.279 1.604-2.85 3.29-5.81 3.54-6.28.33-.58 1.105-.58 1.437 0 .193.333 1.908 3.348 3.54 6.28 2.958-2.85 6.027-5.81 6.303-6.28.332-.58 1.106-.58 1.438 0-2.212 10.069-3.041 13.084-3.041 13.084zM3.733 18.013H20.24c.414 0 .746.332.746.747v1.493a.744.744 0 0 1-.746.747H3.733a.744.744 0 0 1-.747-.747V18.76c0-.415.332-.747.747-.747z"></path></svg>
  `,
  styles: [`
  .ranking-product-item__crown__icon {
    position: absolute;
    top: -5px;
    left: 12px;
    margin-left: 0;
    display: block;
    width: 16px;
    height: 16px;
  }
  `]
})
export class RankCrownComponent implements OnInit {
  @Input() i: number;

  constructor() { }

  ngOnInit() {
  }

}
