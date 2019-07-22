import { Component, OnInit, Input } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-product-pic',
  template: `
  <div class="product-pic-container">
    <div class="pic-list">
      <button class="pic-item" *ngFor="let pic of productImages; let i=index"
      [style.backgroundImage]="'url('+ pic.image +')'"
      (click)="activeId = pic.id"
      [class.active]="pic.id === activeId"></button>
    </div>
    <div class="main-picture-container">
      <img *ngFor="let pic of productImages; let i=index" 
      src="{{ pic.image }}" class="main-picture"
      [class.active]="pic.id === activeId">
    </div>
  </div>
  `,
  styles: [`
  .product-pic-container{
    width: 570px;
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
    width: 570px;
    height: 570px;
  }
  .main-picture.active{
    display: block;
  }
  `]
})
export class ProductPicComponent implements OnInit {
  
  @Input() productImages;
  @Input() activeId: number;

  ngOnInit(){
    
  }

}
