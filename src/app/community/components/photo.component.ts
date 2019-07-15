import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/community.service';

@Component({
  selector: 'app-photo',
  template: `
    <app-header></app-header>
    <p>
      photo works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class PhotoComponent implements OnInit {

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
  }

}
