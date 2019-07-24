import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-community',
  template: `
    <app-header></app-header>
    <p>
      community works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class CommunityComponent implements OnInit {

  constructor(private communityService: CommunityService
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
  }

}
