import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-community',
  template: `
    <app-header [isStore]="stateService.getIsStore()"></app-header>
    <p>
      community works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class CommunityComponent implements OnInit {

  constructor(private communityService: CommunityService
    , private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.setIsStore(false);
  }

}
