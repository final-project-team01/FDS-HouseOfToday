import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-nav',
  template: `
  <div class="product-nav-container">
    <div class="nav-list">
      <ul class="navigation">
        <li class="tab" 
        *ngFor="let nav of navMenu; let i=index"
        (click)="setActive(i)" [class.active]="nav.active">{{ nav.title }}</li>
        <li class="tab last"></li>
      </ul>
    </div>
  </div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
  .product-nav-container{
    clear: both;
    padding-top: 80px;
  }
  .nav-list{
    width: 1136px;
  }
  .tab{
    display: inline-block;
    line-height: 50px;
    width: 150px;
    height: 50px;
    font-weight: bold;
    text-align: center;
    padding: 0 10px;
    vertical-align: middle;
    font-size: 15px;
    border-top: solid 1px #ededed;
    border-bottom: solid 1px #ededed;
    border-left: solid 1px #ededed;
    background-color: #f7f7f7;
    color: #585858;
    cursor: pointer;
  }
  .tab.active{
    border-color: #bdbdbd;
    border-bottom: none;
    border-right: solid 1px #bdbdbd;
    border-left: solid 1px #bdbdbd;
    background-color: white;
  }
  .tab.last{
    width: 386px;
    border-right: solid 1px #ededed;
    cursor: default;
  }
  `]
})
export class ProductNavComponent implements OnInit {

  navMenu = [ 
    { title: '상품정보', active: true },
    { title: '추천', active: false },
    { title: '리뷰', active: false },
    { title: '문의', active: false },
    { title: '배송/교환/환불', active: false }
   ];

  constructor() { }

  ngOnInit() {
  }
  
  setActive(i: number){
    this.navMenu.map((nav, index) => nav.active = index === i ? true : false);
  }

}
