import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-navigation></app-navigation>
    <app-community-navigation></app-community-navigation>
    <app-store-navigation></app-store-navigation>
    <p>
      store-detail works!
    </p>
  `,
  styles: []
})
export class StoreDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("detail");
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
  }

}
