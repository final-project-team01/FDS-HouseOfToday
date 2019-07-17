import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';

@Component({
  selector: 'app-knowhow',
  template: `
    <app-header></app-header>
    <p>
      knowhow works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class KnowhowComponent implements OnInit {

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
  }

}
