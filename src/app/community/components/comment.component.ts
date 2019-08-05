import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-comment',
  template: `
  <h2>댓글 <span *ngIf="originalList">{{ originalList.length }}</span></h2>
  <div class="comment-input">
    <div class="profile-img">
      <img
        src="{{ this.commonService.getUserDetail() 
        ? this.commonService.getUserDetail()['type']==='django' ? this.commonService.getUserDetail()['profile'] : this.commonService.getUserDetail()['social_profile']
        : 'assets/image/36.png' }}"
        class="user-profile">
    </div>
    <form>
      <input type="text" placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)">
    </form>
  </div>
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
  h2{
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin: 10px 0 20px;
  }
  h2 > span{
    color: #35c5f0;
  }
  .comment-input{
    position: relative;
  }
  .profile-img{
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
  }
  .user-profile{
    height: 100%;
    margin-left: -16px;
  }
  input{
    width: 95%;
    height: 40px;
    border: 1px solid #ededed;
    border-radius: 5px;
    padding: 0 15px;
    position: absolute;
    top: -4px;
    right: 0;
  }
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

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  changePage(chosenList){
    this.chosenList = chosenList;
  }

}
