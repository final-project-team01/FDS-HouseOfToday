import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-user',
  template: `
    <div class="user-container" *ngIf="projectInfo">
      <h1>온라인집들이</h1>
      <h2>{{ projectInfo.title }}</h2>
      <small>{{ projectInfo.created }}</small>
      <div class="like-and-scrap">
        <button class="cursor">
          <span class="heart"></span>
          <span class="count">좋아요 {{ projectInfo.like_count }}</span>
        </button>
        <button class="cursor">
          <span class="scrap"></span>
          <span class="count">스크랩 {{ projectInfo.scrap_count }}</span>
        </button>
      </div>
      <hr>
      <div class="author">
        <img src="{{ projectInfo.author_profile }}"
          class="author_profile_image">
          <div class="about-author">
            <span class="author-name">{{ projectInfo.author }}</span><br>
          </div>
        <button class="follow cursor">팔로우</button>
      </div>
      <button class="see-more cursor">이 집의 모든 제품 보기</button>
      <button class="report cursor">신고</button>
    </div>
  `,
  styles: [`
  .user-container{
    width: 336px;
    display: inline-block;
    height: calc(100vh - 81px);
    position: sticky;
    top: 81px;
    padding: 40px 0 0 40px;
  }
  h1{
    font-size: 15px;
    color: #424242;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2{
    font-weight: bold;
    color: #424242;
    font-size: 18px;
    line-height: 26px;
  }
  small{
    color: #bdbdbd;
    font-size: 12px;
    margin-bottom: 15px;
  }
  .like-and-scrap{
    display: flex;
    margin: 10px 0;
  }
  .like-and-scrap > button{
    height: 40px;
    background-color: #ffffff;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    color: #bdbdbd;
    flex: 1;
  }
  .like-and-scrap > button:first-child{
    margin-right: 10px;
  }
  .like-and-scrap span:first-child{
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    background-image: url('../../../../assets/image/icon-action.png');
    background-size: 400px;
    float: left;
    margin-left: 10px;
  }
  .heart{
    background-position: -266px -118px;
  }
  .scrap{
    background-position: -343px -119px;
  }
  .count{
    float: left;
  }
  hr{
    border: 1px solid #ededed;
    margin: 20px 0;
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
  .see-more{
    background-color: #35c5f0;
    width: 100%;
    margin-top: 16px;
    height: 50px;
    border-style: none;
    border-radius: 4px;
    padding: 15px 0;
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    line-height: 20px;
  }
  .report{
    position: absolute;
    border: none;
    background: transparent;
    color: #bdbdbd;
    padding: 0;
    top: 40px;
    right: 0;
  }
  `]
})
export class ProjectUserComponent implements OnInit {

  @Input() projectInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
