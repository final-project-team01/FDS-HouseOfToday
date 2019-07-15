import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-pic',
  template: `
  <div class="product-pic-container">
    <div class="pic-list">
      <button class="pic-item" *ngFor="let pic of productDetailImages; let i=index"
      [style.backgroundImage]="'url('+ pic.pd_detail_image +')'"
      (click)="activeId = pic.id"
      [class.active]="pic.id === activeId"></button>
    </div>
    <div class="main-picture-container">
      <img *ngFor="let pic of productDetailImages; let i=index" 
      src="{{ pic.pd_detail_image }}" class="main-picture"
      [class.active]="pic.id === activeId">
    </div>
  </div>
  `,
  styles: [`
  .product-pic-container{
    width: 550px;
    display: inline-block;
    position: relative;
    margin-left: 65px;
  }
  .pic-list{
    margin-right: 10px;
    position: absolute;
    top: 0;
    left: -65px;
  }
  .pic-item{
    display: block;
    width: 55px;
    height: 55px;
    margin-bottom: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .pic-item:focus{
    outline: none;
  }
  .pic-item.active{
    border: 1px solid #35C5F0;
  }
  .main-picture-container{
    display: inline-block;
  }
  .main-picture{
    display: none;
    border-radius: 10px;
    width: 100%;
    height: 500px;
  }
  .main-picture.active{
    display: block;
  }
  `]
})
export class ProductPicComponent implements OnInit {

  productDetailImages = [];
  activeId = 1;
  ngOnInit(){
    this.productDetailImages = [
      { id: 1, pd_detail_image: '../../../../assets/image/1.jpg' },
      { id: 2, pd_detail_image: '../../../../assets/image/2.jpg' },
      { id: 3, pd_detail_image: '../../../../assets/image/3.jpg' },
      { id: 4, pd_detail_image: '../../../../assets/image/4.jpg' },
    ]
}

}
