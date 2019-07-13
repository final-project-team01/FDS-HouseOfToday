import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store.service';

@Component({
  selector: 'app-category',
  template: `
    <app-header></app-header>
    <p>
      category works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class CategoryComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
