import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-photo-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
      <app-photo-article></app-photo-article>
      <app-photo-user></app-photo-user>
    </div>
  `,
  styles: [`
  .wrapper{
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    width: 1136px;
    height: 2000px;
    padding: 40px 0;
    min-height: 1px;
    position: relative;
    background-color: skyblue;
  }
  `]
})
export class PhotoDetailComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
  }

}
