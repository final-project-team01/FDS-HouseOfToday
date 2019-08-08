import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-users',
  template: `
    <app-navigation></app-navigation>
    <div class="viewport">
    <app-user-nav></app-user-nav>
    <div class="container">
      <div class="row">
        <div class="col-12 profile">
          <div class="profile_data">
            <div class="profile_share"></div>
            <div class="profile_pic">
              <app-basic-uses-avatar [size]="130" [pic]="commonService.getUserDetailProfile()"></app-basic-uses-avatar>
            </div>
            <div class="profile_info">
              <div class="profile_name">
                <strong>{{
                  this.commonService.getUserDetail()
                    ? this.commonService.getUserDetail()['username']
                    : ''
                }}</strong>
              </div>
              <div class="profile_follow_state">
                <div><a href="#"></a>팔로워0</div>
                <div><a href="#"></a>팔로잉0</div>
              </div>
              <div class="short-cut">
                <div class="short-cut-item">
                  <a href="#"
                    ><div class="short-cut-icon scrap"></div>
                    스크랩북</a
                  >
                </div>
                <div class="short-cut-item">
                  <a href="#"
                    ><div class="short-cut-icon like"></div>
                    좋아요</a
                  >
                </div>
                <div class="short-cut-item">
                  <a href="#"
                    ><div class="short-cut-icon description"></div>
                    설명</a
                  >
                </div>
              </div>
              <div class="addFriend_btn">
                <button><a href="#">친구초대 +5000P</a></button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 profileContent">
          <div class="contents">
            <section class="post post_photo">
              <h5 class="post_title">사진 <strong>0</strong></h5>
              <a href="#" class="upload_photo">
                <span class="more_icon"></span>
                첫 번째 사진을 올려보세요</a
              >
            </section>
            <section class="post post_project">
              <h5 class="post_title">집들이 <strong>0</strong></h5>
              <a href="#" class="upload_project">
                <span class="more_icon"></span>
                첫 번째 집들이를 올려보세요</a
              >
            </section>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
    </div>
  `,
  styles: [
    /* 페이지 움찔하는거 고침 */
    `.viewport{
      width: calc(100vw - 18px);
    }
      /* user profile */
      body {
        font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕';
        letter-spacing: -0.4px;
        background-color: antiquewhite;
      }
      .container {
        width: 1136px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        margin-bottom: 40px;
      }
      .row {
        display: flex;
      }
      .col-12 {
        width: 100%;
        display: inline-block;
        position: relative;
        padding-top: 30px;
      }
      .profile {
        max-width: 25%;
      }
      .profile_data {
        position: relative;
        padding-top: 10px;
      }
      .profile_share {
        position: absolute;
        margin: 0 10px;
        right: 0;
        display: block;
        background-image: url(assets/image/common-action@2x.png);
        background-position-x: -360px;
        background-position-y: -280px;
        width: 24px;
        height: 24px;
        background-size: 400px auto;
      }
      .profile_pic {
        background-color: burlywood;
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }
      .profile_name {
        font-size: 30px;
        line-height: 40px;
        margin: 10px 0;
      }
      .profile_follow_state {
        display: block;
        margin-left: -10px;
        margin-right: -10px;
        color: #bdbdbd;
      }
      .profile_follow_state > div {
        display: inline-block;
        padding: 0 10px;
        color: #bdbdbd;
        font-size: 13px;
      }
      .short-cut {
        display: flex;
        margin-top: 30px;
        box-sizing: border-box;
        font-size: 13px;
        font-weight: 700;
        text-align: center;
      }

      .short-cut-item {
        width: 33.3%;
        padding-right: 16px;
      }
      .short-cut-icon {
        background-size: auto 400px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6px;
      }
      .scrap {
        background-image: url(assets/image/common-action@2x.png);
        background-position-x: -757px;
        background-position-y: -712px;
        height: 24px;
        width: 24px;
      }
      .like {
        background-image: url(assets/image/common-action@2x.png);
        background-position-x: 178px;
        background-position-y: 88px;
        height: 24px;
        width: 27px;
      }
      .description {
        background-image: url(assets/image/icons8-settings-50.png);
        background-repeat: no-repeat;
        background-size: 27px;
        height: 27px;
        width: 27px;
      }
      .addFriend_btn > button {
        border-radius: 16px;
        width: 100%;
        font-weight: 700;
        height: 32px;
        background-color: #ededed;
        margin-top: 30px;
        border: none;
        font-size: 13px;
        line-height: 16px;
        color: #757575;
      }
      .profileContent {
        display: inline-block;
        margin-left: 8.4%;
        max-width: 75%;
      }
      .contents {
        margin: 0 10px;
      }
      .post {
        margin-bottom: 60px;
        position: relative;
      }
      .post_title {
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 18px;
      }
      .post_title > strong {
        color: #35c5f0;
      }
      .upload_photo,
      .upload_project {
        display: flex;
        justify-content: center;
        padding: 80px 0;
        border-style: dashed;
        border: 1px dashed #dbdbdb;
        box-sizing: border-box;
        color: #757575;
        font-weight: 700;
        font-size: 13px;
        align-items: center;
      }
      .more_icon {
        background-image: url(assets/image/common-etc.png);
        background-position-x: -160px;
        background-position-y: 400px;
        width: 12px;
        height: 12px;
        margin-right: 5px;
      }
    `
  ]
})
export class UsersComponent implements OnInit {
  pic: string;
  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit() {

  }
}
