import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-photo',
  template: `
    <app-header [thisNav]="commonService.getNav()"></app-header>  
    <p>
      photo works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class PhotoComponent implements OnInit {

  constructor(private communityService: CommunityService
    , private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
  }

}
