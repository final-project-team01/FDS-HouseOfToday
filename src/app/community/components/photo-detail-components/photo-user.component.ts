import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-user',
  template: `
  <div class="user-container" *ngIf="photoInfo">
    <div class="like-and-scrap">
      <button class="cursor">
        <span class="heart"></span>
        {{ photoInfo.like_count }}
      </button>
      <button class="cursor">
        <span class="scrap"></span>
        {{ photoInfo.scrap_count }}
      </button>
    </div>
    <div class="author">
      <app-basic-uses-avatar
        [size]="50"
        [pic]="photoInfo.author_profile_image"
        [isBorder]="false"
        class="author_profile_image">
      </app-basic-uses-avatar>
        <div class="about-author">
          <span class="author-name">{{ photoInfo.author }}</span><br>
          <small *ngIf="photoInfo.author_profile_comment">
          {{ photoInfo.author_profile_comment }}</small>
        </div>
      <button class="follow cursor">팔로우</button>
    </div>
  </div>
  `,
  styles: [`
  .user-container{
    width: 330px;
    display: inline-block;
    height: calc(100vh - 81px);
    position: sticky;
    top: 81px;
    padding: 40px 0 0 40px;
  }
  .like-and-scrap{
    display: flex;
    margin-bottom: 30px;
  }
  .like-and-scrap > button{
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: #f5f5f5;
    height: 50px;
    color: #424242;
    font-weight: 400;
    flex: 1;
  }
  .like-and-scrap > button:first-child{
    margin-right: 10px;
  }
  .like-and-scrap span{
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 8px;
    background-image: url('../../../../assets/image/common-action.png');
  }
  .heart{
    background-position: -240px -280px;
  }
  .scrap{
    background-position: -280px -280px;
  }
  .author{
    display: flex;
    align-items: center;
  }
  .author_profile_image{
    width: 50px;
    height: 50px;
    margin-right: 5px;
    border-radius: 50%;
  }
  .about-author{
    display: inline-block;
    width: 180px;
    padding: 0 5px;
  }
  .about-author small{
    display: inline-block;
    color: #757575;
    font-size: 11px;
    line-height: 15px;
    max-height: 30px;
    overflow: hidden;
  }
  .author-name{
    font-weight: 700;
    font-size: 15px;
  }
  .follow{
    height: 30px;
    font-size: 11px;
    font-weight: 700;
    border: none;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 10px;
    color: #424242;
    margin-left: auto;
  }
  `]
})
export class PhotoUserComponent implements OnInit {

  @Input() photoInfo: any; 

  constructor() { }

  ngOnInit() {
  }

}
