import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-users',
  template: `
    <app-user-nav></app-user-nav>
    <div class="container">
      <div class="row">
        <div class="col-12 profile">
          <div class="profile_data">
            <div class="profile_share">share_btn</div>
            <div class="profile_pic">profile-photo</div>
            <div class="profile_info">
              <div class="profile_name"><strong>#NAME</strong></div>
              <div class="profile_follow_state">
                <div><a href="#"></a>팔로워0</div>
                <div><a href="#"></a>팔로잉0</div>
              </div>
              <div class="short-cut">
                <div><a href="#">스크랩북</a></div>
                <div><a href="#">좋아요</a></div>
                <div><a href="#">설명</a></div>
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
              <h5 class="post_title">사진 0</h5>
              <a href="#" class="upload_photo">첫 번째 사진을 올려보세요</a>
            </section>
            <section class="post post_project">
              <h5 class="post_title">집들이 0</h5>
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
        background-color: yellow;
        width: 1136px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        margin-bottom: 40px;
      }
      .row {
        background-color: blue;
        display: flex;
      }
      .col-12 {
        background-color: blueviolet;
        width: 100%;
        display: inline-block;
        position: relative;
        padding-top: 30px;
        /* padding-right: 10px;
    padding-left: 10px; */
      }
      .profile {
        max-width: 25%;
      }
      .profile_data {
        background-color: violet;
        position: relative;
      }
      .profile_share {
        background-color: tomato;
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        display: block;
      }
      .profile_pic {
        background-color: burlywood;
        width: 130px;
        height: 130px;
      }
      .profile_name {
        font-size: 30px;
        line-height: 40px;
        margin: 10px 0;
      }
      .profile_follow_state {
        background-color: turquoise;
        display: block;
      }
      .profile_follow_state > div {
        display: inline-block;
        padding: 0 10px;
      }
      .short-cut {
        background-color: brown;
        display: flex;
        margin-top: 30px;
        box-sizing: border-box;
        font-size: 13px;
        font-weight: 700;
        text-align: center;
      }
      .addFriend_btn > button {
        border-radius: 16px;
        width: 100%;
        font-weight: 700;
        height: 32px;
        background-color: #ededed;
        margin-top: 30px;
      }
      .addFriend_btn > button > a {
        color: #757575;
      }
      .short-cut > div {
        background-color: chocolate;
        width: 33.3%;
        padding-right: 16px;
      }
      .profileContent {
        background-color: cyan;
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
      }
      .post_photo {
        background-color: coral;
      }
      .upload_photo {
        background-color: crimson;
        display: flex;
        justify-content: center;
        padding: 80px 0;
      }
      .post_project {
        background-color: cornflowerblue;
      }
      .upload_project {
        background-color: crimson;
        display: flex;
        justify-content: center;
        padding: 80px 0;
      }
    `
  ]
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
