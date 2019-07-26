import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-modify',
  template: `
    <app-navigation></app-navigation>
    <app-user-nav></app-user-nav>
    <div class="contents">
      <div class="user_modi_title">회원정보수정</div>
      <div class="withdraw"><a href="#">탈퇴하기</a></div>
      <form class="edit_user_profile">
        <div class="field">
          <div class="user_modi_subtitle">이메일</div>
          <input type="text" class="email" value="email" />
          <span> @ </span>
          <input type="text" class="email" value="email.format" />
          <div class="email_alert">
            이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">별명</div>
          <input
            type="text"
            class="nickname"
            placeholder="별명을 입력해주세요."
          />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">홈페이지</div>
          <input type="text" class="homepage" placeholder="http://~" />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">셩별</div>
          <aui-basic-radio></aui-basic-radio>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">생년월일</div>

          <div class="birth_info_border">
            <select class="birth_info">
              <option>YYYY</option>
              <option class="no1" *ngFor="let year of birthYear">{{
                year.year
              }}</option>
            </select>
          </div>

          <div class="birth_info_border">
            <select class="birth_info">
              <option>MM</option>
              <option *ngFor="let month of birthMonth">{{
                month.month
              }}</option>
            </select>
          </div>

          <div class="birth_info_border">
            <select class="birth_info">
              <option>DD</option>
              <option *ngFor="let day of birthDay">{{ day.day }}</option>
            </select>
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">프로필 이미지</div>
          <div class="profile_image">
            image
            <div class="add_photo_icon">icon</div>
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">커버 이미지</div>
          <input />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">한줄 소개</div>
          <input />
        </div>
        <button>회원 정보 수정</button>
      </form>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .contents {
        max-width: 1030px;
        margin: 30px auto;
        padding: 40px 50px;
        box-sizing: border-box;
        box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2);
      }
      .user_modi_title {
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
        padding-bottom: 30px;
        display: inline-block;
        color: #424242;
      }
      .withdraw {
        color: #bdbdbd;
        display: inline-block;
        font-size: 13px;
        line-height: 32px;
        text-decoration: underline;
        float: right;
      }
      form {
        font-size: 15px;
      }
      .field {
        margin-top: 20px;
      }
      .user_modi_subtitle {
        display: inline-block;
        width: 144px;
        line-height: 40px;
        color: #424242;
      }
      .field > input,
      .birth_info {
        height: 40px;
        padding: 0 15px;
        box-sizing: border-box;
      }
      .birth_info_border {
        display: inline-block;
        border: 1px solid #dcdcdc;
        margin-right: 5px;
      }
      .email {
        width: 136px;
      }
      .email_alert {
        margin-top: 12px;
        padding-left: 156px;
        font-size: 13px;
        color: #dcdcdc;
      }
      .nickname,
      .homepage {
        width: 290px;
      }
      .gender_input {
        display: inline-block;
      }
      .profile_image {
        background-color: red;
        display: inline-block;
        width: 220px;
        height: 220px;
      }
    `
  ]
})
export class UserModifyComponent implements OnInit {
  birthYear = [];
  birthMonth = [];
  birthDay = [];

  constructor() {
    for (let Y = 1919; Y < 2020; Y++) {
      const year = { year: Y };
      this.birthYear =
        this.birthYear.length > 0 ? [year, ...this.birthYear] : [year];
    }
    for (let M = 1; M < 13; M++) {
      const month = { month: M };
      this.birthMonth =
        this.birthMonth.length > 0 ? [...this.birthMonth, month] : [month];
    }
    for (let D = 1; D < 31; D++) {
      const day = { day: D };
      this.birthDay =
        this.birthDay.length > 0 ? [...this.birthDay, day] : [day];
    }
  }

  ngOnInit() {}
}
