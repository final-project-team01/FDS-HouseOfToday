import { Component, OnInit, Input } from '@angular/core';
import { detail_image } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-detail',
  template: `
  <div class="product-detail-container">
    <div class="product-img">
      <img *ngFor="let pic of productDetailImages" 
        src="{{ pic.image }}">
    </div>
  <div>
  `,
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent implements OnInit {
  
  @Input() productDetailImages: detail_image[];

  constructor() { }

  ngOnInit() {
  }

}
