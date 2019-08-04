import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  template: `
  <div class="comment-section">
    <div class="each-comment" *ngFor="let comment of chosenList">
        <img src="{{ comment.author_profile_image }}"
          class="author_profile_image">
        <div class="comment">
          <span class="comment-author">{{ comment.author }}</span>
          <span class="comment-text">{{ comment.text }}</span><br>
          <span class="comment-created dot">{{ comment.created }}</span>
          <span class="heart"></span>
          <button class="like-comment dot cursor">좋아요</button>
          <button class="report cursor">신고</button>
        </div>
    </div>
  </div>
  <app-pagination
    [originalList]="originalList"
    [chosenList]="chosenList"
    [pages]="pages"
    (change)="changePage($event)">
  </app-pagination>
  `,
  styles: [`
  .each-comment{
    position: relative;
    margin: 20px 0;
  }
  .author_profile_image{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
  }
  .comment{
    margin-left: 40px;
  }
  .comment-author{
    color: #424242;
    font-weight: 700;
    font-size: 15px;
    margin-right: 10px;
  }
  .comment-created{
    font-weight: 400;
    color: #757575;
    font-size: 13px;
  }
  .like-comment{
    background: none;
    border: none;
    color: #757575;
    padding: 0;
    font-size: 13px;
    font-weight: 700;
  }
  .heart{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background-image: url('../../../../assets/image/common-action@2x.png');
    background-position: -49px -146px;
    background-size: 490px;
  }
  .report{
    border: none;
    background: transparent;
    color: #bdbdbd;
    padding: 0;
  }
  .dot::after{
    content: "";
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background-color: #bdbdbd;
    opacity: .9;
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
  }
  `]
})
export class CommentComponent implements OnInit {

  @Input() originalList: any;
  @Input() chosenList: any;
  @Input() pages: any;

  constructor() { }

  ngOnInit() {
  }

  changePage(chosenList){
    this.chosenList = chosenList;
  }

}
