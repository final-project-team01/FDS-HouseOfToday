import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-rank',
  template: `
    <app-header></app-header>
    <p>
      rank works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class RankComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
