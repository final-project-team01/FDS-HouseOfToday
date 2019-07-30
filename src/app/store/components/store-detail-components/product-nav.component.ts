import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-nav',
  template: `
  <div class="product-nav-container">
    <div class="nav-list">
      <ul>
        <li class="tab cursor" 
        *ngFor="let nav of navMenu; let i=index"
        (click)="setActive(i)" [class.active]="nav.active">
        <h2>{{ nav.title }}
          <span *ngIf="i === 2">({{ (reviewAmount) }})</span>
          <span *ngIf="i === 3">({{ qnaAmount }})</span>
        </h2>
        </li>
        <li class="tab last"></li>
      </ul>
    </div>
  </div>
  `,
  styleUrls: ['./product-nav.scss']
})
export class ProductNavComponent implements OnInit {

  @Input() reviewAmount: number;
  @Input() qnaAmount: number;
  @Output() move = new EventEmitter();

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
    this.move.emit(i);
  }

}
