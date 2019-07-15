import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store',
  template: `
    <app-header></app-header>
    <p>
      store works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class StoreComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
