import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-nav',
  template: `
  <div class="product-nav-container" #nav (window:load)="getNavOffset(nav)"
    (window:scroll)="test()" [class.sticky]="sticky">
    <div class="nav-list">
      <ul class="navigation">
        <li class="tab" 
        *ngFor="let nav of navMenu; let i=index"
        (click)="setActive(i)" [class.active]="nav.active">
        <h2>{{ nav.title }}</h2>
        </li>
        <li class="tab last"></li>
      </ul>
    </div>
    <div class="product-option">
      <h2>옵션 선택</h2>
      <app-product-option></app-product-option>
    </div>
  </div>
  `,
  styles: [`
  *{
    box-sizing: border-box;
  }
  .product-nav-container{
    padding-top: 80px;
    bottom: auto;
  }
  .nav-list{
    width: 1136px;
  }
  .tab{
    display: inline-block;
    width: 150px;
    height: 50px;
    text-align: center;
    padding: 0 10px;
    vertical-align: middle;
    border-top: solid 1px #ededed;
    border-bottom: solid 1px #ededed;
    border-left: solid 1px #ededed;
    background-color: #f7f7f7;
    cursor: pointer;
  }
  .tab > h2{
    line-height: 50px;
    font-weight: bold;
    font-size: 15px;
    color: #585858;
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
  .product-option{
    float: right;
    margin: 50px 30px 0 0;
    width: 31%;
    background-color: #f7f7f7;
  }
  .product-option > h2{
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .sticky{
    position: fixed;
    top: 0;
  }
  `]
})
export class ProductNavComponent implements OnInit {
  
  navOffset: number;
  sticky = false;

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

  getNavOffset(nav){
    this.navOffset = nav.offsetTop;
    console.log(this.navOffset);
  }
  
  setActive(i: number){
    this.navMenu.map((nav, index) => nav.active = index === i ? true : false);
  }

  test(){
    if(this.navOffset < window.pageYOffset) this.sticky = true;
    else this.sticky = false;
  }

}
