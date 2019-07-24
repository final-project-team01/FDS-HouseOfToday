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
  styles: [`
  *{
    box-sizing: border-box;
  }
  .product-detail-container{
    padding: 60px 30px 30px 30px;
  }
  .product-img > img{
    width: 690px;
    vertical-align: middle;
  }
  .product-review{
    width: 690px;
  }
  `]
})
export class ProductDetailComponent implements OnInit {
  
  @Input() productDetailImages: detail_image[];

  constructor() { }

  ngOnInit() {
  }

}
