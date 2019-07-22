import { Component, OnInit, Input } from '@angular/core';
import { qna } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-qna',
  template: `
    <p>
      product-qna works!
    </p>
  `,
  styles: []
})
export class ProductQnaComponent implements OnInit {
  
  @Input() productQnas: qna;

  constructor() { }

  ngOnInit() {
  }

}
