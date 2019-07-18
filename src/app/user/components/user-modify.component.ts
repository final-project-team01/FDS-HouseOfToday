import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-modify',
  template: `
    <app-navigation></app-navigation>
    <app-user-nav></app-user-nav>
    <div class="contents">
      <div class="user_modi_title">회원정보수정</div>
      <div class="withdraw">탈퇴하기</div>
      <form class="edit_user_profile">
        <div class="field">
          <div class="user_modi_subtitle">이메일</div>
          <input type="text" class="email" value="{{ email }}" />
          <span>@</span>
          <input type="text" class="email" value="{{ email.format }}" />
          <div class="email_alert">
            이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">별명</div>
          <input
            type="text"
            class="nickname"
            value="{{ name }}"
            placeholder="별명을 입력해주세요."
          />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">홈페이지</div>
          <input />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">셩별</div>
          <input type="radio" value="gender" name="male" />남자
          <input type="radio" value="gender" name="Female" />여자
        </div>
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
      }
      .withdraw {
        color: #bdbdbd;
        display: inline-block;
        font-size: 13px;
        line-height: 32px;
        text-decoration: underline;
        float: right;
      }
      .field {
        background-color: yellow;
        margin-top: 30px;
      }
      .user_modi_subtitle {
        display: inline-block;
      }
      .email_alert {
        margin-top: 12px;
      }
    `
  ]
})
export class UserModifyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
