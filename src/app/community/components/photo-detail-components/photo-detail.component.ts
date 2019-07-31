import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
    </div>
  `,
  styles: [`
  .wrapper{
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    width: 1136px;
    height: 1000px;
    min-height: 1px;
    position: relative;
    background-color: skyblue;
  }
  `]
})
export class PhotoDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
