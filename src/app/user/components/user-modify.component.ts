import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/core/services/common.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { gender, account_update_payload } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-user-modify',
  template: `
    <app-navigation></app-navigation>
    <app-user-nav></app-user-nav>    
    <div class="contents">
      <div class="user_modi_title">회원정보수정</div>
      <div class="withdraw"><a >탈퇴하기</a></div>
      <form [formGroup]="userFrom" class="edit_user_profile" (ngSubmit)="onSubmit()">
        <div class="field">
          <div class="user_modi_subtitle">이메일</div>
          <input type="text" class="email" value="{{getEmail()}}" disabled />
          <span> @ </span>
          <input type="text" class="email" value="{{getEmailFormat()}}" disabled />
          <div class="email_alert">
            이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">별명</div>
          <input formControlName="userName"
            type="text"
            class="nickname"
            placeholder="별명을 입력해주세요."
            value="{{getUserName()}}"            
          />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">홈페이지</div>
          <input type="text" class="homepage" placeholder="http://~" />
        </div>
        <div class="field">
          <div class="user_modi_subtitle">성별</div>          
          <div class="user-gender">
            <app-check-box [isChecked]="getGender()===1" [caption]="true" (click)="setGender(1)" [isDisabled]="true">남자</app-check-box>
            <app-check-box [isChecked]="getGender()===2" [caption]="true" (click)="setGender(2)" [isDisabled]="true">여자</app-check-box>
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">프로필 이미지</div>
          <div class="profile_image">
            <div class="add_photo_icon"></div>
            <img src="{{commonService.getUserDetailProfile()}}"/>
          </div>
        </div>
        <div class="field">
          <div class="user_modi_subtitle">한줄 소개</div>
          <input formControlName="userIntro" type="text" class="oneLine_intro" value="{{getUserIntro()}}"/>
        </div>
      </form>
      <button class="edit_submit" (click)="onSubmit()" BlueButton>회원 정보 수정</button>
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
        float: left;
      }
      .user-gender{
        display: flex;        
      }
      .user-gender > app-check-box {
        width:100px;
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
      .profile_image,
      .cover_image {
        background-color: lightgray;
        border: 1px solid #dcdcdc;
        width: 220px;
        height: 220px;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
      }
      .profile_image {
        width: 220px;
        height: 220px;
      }
      .profile_image > img{
        width:220px;
      }
      .cover_image {
        width: 350px;
        height: 220px;
      }
      .add_photo_icon {        
        background-image: url(assets/image/icon-etc-2.png);
        background-position-x: 0px;
        background-position-y: -991px;
        background-size: 400px;
        width: 62px;
        height: 60px;
        margin: auto;
        position:absolute;
      }
      .oneLine_intro {
        width: calc(100% - 144px);
      }
      .edit_submit {
        margin-left: 144px;
        margin-top: 25px;
        width: 290px;
        height: 50px;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
        background-color: #35c5f0;
        border-radius: 4px;
        border-style: none;
      }
      `
  ]
})
export class UserModifyComponent implements OnInit {
  birthYear = [];
  birthMonth = [];
  birthDay = [];
  gender: gender = 0;
  userFrom: FormGroup;

  get userName() {
    return this.userFrom.get('userName');
  }
  get userIntro() {
    return this.userFrom.get('userIntro');
  }
  constructor(private fb: FormBuilder, private userService: UserService, public commonService: CommonService) {
    commonService.getUserDetail();
    this.getEmailFormat();
  }

  getGender() {
    const gender = this.gender ||
      (this.commonService.getUserDetail() ?
        this.commonService.getUserDetail().gender ?
          this.commonService.getUserDetail().gender :
          0
        : 0);
    return gender;
  }

  ngOnInit() {
    this.userFrom = this.fb.group({
      userName: ['', [Validators.required]],
      userIntro: ['', [Validators.required]]
    });

    this.getGender();
  }

  getEmail() {
    return this.commonService.getUserDetail() ? this.commonService.getUserDetail().email.split('@')[0] : '';
  }
  getEmailFormat() {
    return this.commonService.getUserDetail() ? this.commonService.getUserDetail().email.split('@')[1] : '';
  }
  getUserName() {
    return this.commonService.getUserDetail() ? this.commonService.getUserDetail().username : '';
  }
  getUserIntro() {
    return this.commonService.getUserDetail() ? this.commonService.getUserDetail().message : '';
  }



  setGender(gender: gender) {
    this.gender = gender;
  }
  onSubmit() {
    const options: account_update_payload = {};
    const userInfo = this.commonService.getUserDetail();
    if (this.getGender() !== userInfo.gender)
      options['gender'] = this.getGender();
    if (!this.userName.errors && this.userName.value !== userInfo.username)
      options['username'] = this.userName.value;
    if (!this.userIntro.errors && this.userIntro.value !== userInfo.message)
      options['message'] = this.userIntro.value;

    this.userService.patchAccountsUpdate(options);
  }


}
