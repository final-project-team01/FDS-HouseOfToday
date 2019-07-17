import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  template: `
    <app-navigation></app-navigation>
    <app-user-nav></app-user-nav>
    <div class="container">
      <div class="row">
        <div class="col-12 profile">
          <div class="profile_data">
            <div class="profile_share"></div>
            <div class="profile_pic"></div>
            <div class="profile_info">
              <div class="profile_name"><strong>#NAME</strong></div>
              <div class="profile_follow_state">
                <div><a href="#"></a>팔로워0</div>
                <div><a href="#"></a>팔로잉0</div>
              </div>
              <div class="short-cut">
                <div class="short-cut-item">
                  <a href="#"
                    ><div class="short-cut-icon"></div>
                    스크랩북</a
                  >
                </div>
                <div class="short-cut-item"><a href="#">좋아요</a></div>
                <div class="short-cut-item"><a href="#">설명</a></div>
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
              <a href="#" class="upload_photo">첫 번째 사진을 올려보세요</a>
            </section>
            <section class="post post_project">
              <h5 class="post_title">집들이 <strong>0</strong></h5>
              <a href="#" class="upload_project">첫 번째 집들이를 올려보세요</a>
            </section>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
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
      }
      .profile_share {
        position: absolute;
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
        background-color: yellow;
        width: 33.3%;
        padding-right: 16px;
      }
      .short-cut-icon {
        background-image: url(assets/image/common-action@2x.png);
        background-color: red;
        background-position-x: -757px;
        background-position-y: -712px;
        height: 24px;
        width: 24px;
        background-size: auto 400px;
        position: relative;
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
      .post_photo {
      }
      .upload_photo {
        display: flex;
        justify-content: center;
        padding: 80px 0;
        border-style: dashed;
        border: 1px dashed #dbdbdb;
      }
      .post_project {
      }
      .upload_project {
        display: flex;
        justify-content: center;
        padding: 80px 0;
        border-style: dashed;
        border: 1px dashed #dbdbdb;
      }
    `
  ]
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() { }
}
