import { Component, OnInit, Input } from '@angular/core';
import { qna } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-product-qna',
  template: `
    <div class="product-qna-container">
      <h3>문의 <span class="qna-amount">{{ productQnas.length }}</span></h3>
      <button class="write-qna">리뷰쓰기</button>
      <article class="user-qna">
      </article>
    </div>
  `,
  styles: [`
  .product-qna-container{
    width: 690px;
    padding: 30px 30px 30px 30px;
    background-color: skyblue;
    position: relative;
  }
  h3{
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }
  h3 > span{
    margin-left: 6px;
    font-size: 18px;
    font-weight: 700;
    color: #35c5f0;
  }
  .write-qna{
    width: 100px;
    height: 40px;
    position: absolute;
    right: 30px;
    top: 23px;
    font-weight: bold;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    color: #424242;
    border-radius: 4px;
    cursor: pointer;
  }
  .user-qna{
    padding: 30px 0;
    margin: 30px 0;
    border-bottom: 1px solid lightgrey;
    background-color: pink;
  }
  `]
})
export class ProductQnaComponent implements OnInit {
  
  @Input() productQnas: qna;

  constructor() { }

  ngOnInit() {
  }

}
