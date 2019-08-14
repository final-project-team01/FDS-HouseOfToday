import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/core/services/common.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { gender, account_update_payload } from 'src/app/core/models/user.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-modify',
  template: `
    <app-navigation></app-navigation>
    <div class="viewport">
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
          <div>
            <input type="file" accept="image/*" (change)="onFileChange(fileInput)" #fileInput>
            <div class="profile_image">
              <img src="{{getImageSrc()}}"/>
            </div>
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
    </div>
  `,
  styles: [
    `
      .viewport{
        width: calc(100vw - 18px);
      }
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
        overflow:hidden;
        position:relative;
      }
      .profile_image > img{
        width:220px;
      }
      .profile_image > input{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
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
      .profile_image::after{
        content:"";
        content: "";
        width: 220px;
        height: 220px;
        position: absolute;
        background-color: rgba(0,0,0,0.3);
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
  image = null;
  file: File = null;

  get userName() {
    return this.userFrom.get('userName');
  }
  get userIntro() {
    return this.userFrom.get('userIntro');
  }
  constructor(private fb: FormBuilder, private userService: UserService, public commonService: CommonService
    , private titleService: Title) {
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
    this.titleService.setTitle("1등 인테리어 집꾸미기 서비스, 오늘의 집");
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

  onFileChange(fileInput: HTMLInputElement) {
    console.log(fileInput);
    const files = fileInput.files;
    if (files && files.length > 0) {
      // For Preview
      const file = files[0];
      const reader = new FileReader();

      /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
        따라서 파일 경로를 img 태그에 바인딩할 수 없다.
        FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
        base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.file = file;
        this.image = reader.result;
      };
    }
  }

  setGender(gender: gender) {
    this.gender = gender;
  }

  getImageSrc() {
    return this.image || this.commonService.getUserDetailProfile();
  }
  onSubmit() {
    const options: account_update_payload = {};
    const userInfo = this.commonService.getUserDetail();
    const profile = this.image;
    const formData = new FormData();

    if (this.image) {
      formData.append('profile', this.file, this.file.name);
    }
    //      options['profile'] = this.file;
    if (this.getGender() !== userInfo.gender)
      formData.append('gender', this.getGender().toString());
    //      options['gender'] = this.getGender();
    if (!this.userName.errors && this.userName.value !== userInfo.username)
      formData.append('username', this.userName.value);
    //      options['username'] = this.userName.value;
    if (!this.userIntro.errors && this.userIntro.value !== userInfo.message)
      formData.append('message', this.userIntro.value);
    //      options['message'] = this.userIntro.value;



    this.userService.uploadFormData(formData);

  }


}
