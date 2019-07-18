import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { StateService } from 'src/app/core/services/state.service';

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

  constructor(private storeService: StoreService
    , private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.setIsStore(true);
  }

}
