import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/community.service';

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

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
  }

}
