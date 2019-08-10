import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { KeyAttribute } from '@alyle/ui';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { CommonService } from 'src/app/core/services/common.service';
import { kakao_info, token_social } from 'src/app/core/models/auth.interface';
import { UserService } from 'src/app/core/services/user.service';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  template: `
    <div class="wrapper">
      <div class="sign-in-container">
        <h1 class="sign-in-header">
          <a routerLink="/" class="sign-in-header-link">
            <span alt="오늘의 집" aria-label class="login-logo"></span>
          </a>
        </h1>
        <app-social (kakaoLogin)="kakaoLogin($event)"></app-social>
        <div>
        <form class="login-form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <input type="text" placeholder="이메일" class="email form-control"
          formControlName="email" autofocus="autofocus">
          <input type="password" placeholder="비밀번호" 
          class="password form-control" (keyup)="isOnCapslock($event);"
          formControlName="password">
          <div class="capslockMessage"
          [style.opacity]="capsOpacity">
            Caps Lock 이 켜져있네요!
          </div>
          <button type="submit" class="submit" BlueButton>로그인</button>
        </form>
        </div>
        <div class="login-menu">
          <a routerLink="/" class="login-submenu">비밀번호 재설정</a>
          <a routerLink="/signup" class="login-submenu">회원가입</a>
        </div>
      </div>
      <div class="invalid-message" [style.opacity]="messageOpacity">
        <span>아이디와 비밀번호를 입력해주세요.</span>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
    .wrapper{
      width: 100%;
      height: 100vh;
    }
    .sign-in-container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-width: 300px;
    }
    .sign-in-header{
      display: block;
      margin: 0 0 30px;
    }
    .sign-in-header-link{
      display: block;
      text-align: center;
    }
    .login-logo{
      width: 146px;
      height: 50px;
      background-position: left 0px top 0px;
      background-image: url("assets/image/page-login.png");
      background-size: 320px auto;
      background-repeat: no-repeat;
      display: inline-block;
    }
    
    .form-control:hover, .form-control:active {
      background-color: #fafafa;
      border-color: #bdbdbd;
    }
    .form-control {
      transition: .2s border-color, .2s box-shadow, .2s background-color;
      display: block;
      box-sizing: border-box;
      height: 40px;
      width: 100%;
      padding: 0 15px;
      line-height: 40px;
      border-radius: 4px;
      border: solid 1px #dbdbdb;
      background-color: white;
      color: #424242;
      font-size: 12px;
    }
    .form-control:focus{
      outline: none;
      box-shadow: 0 0 0 3px rgba(130,224,250,0.5);
    }
    .email, .password{
      display: block;
      width: 100%;
      height: 50px;
      margin: 0;
      font-size: 15px;
      line-height: 50px;
      color: #424242;
    }
    .email{
      border-bottom: none;
      border-radius: 4px 4px 0 0;
    }
    .password{
      border-radius: 0 0 4px 4px;
      position: relative
    }
    .capslockMessage{
      position: absolute;
      top: 47%;
      left: 100%;
      margin-left: 15px;
      transform: translate(0, -50%);
      color: white;
      background-color: #F77;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.7rem;
      line-height: 13px;
      font-weight: bold;
      z-index: 2;
      transition: opacity ease .3s;
      width: 90px;
    }
    .capslockMessage:before{
      content: '';
      display: block;
      position: absolute;
      border-top: solid 5px transparent;
      border-bottom: solid 5px transparent;
      border-right: solid 11px #F77;
      left: 1px;
      top: 50%;
      transform: translate(-100%, -50%);
    }
    .submit{
      transition: .2s ease;
      display: block;
      width: 100%;
      height: 50px;
      margin: 20px 0;
      padding: 13px 15px;
      font-size: 17px;
      line-height: 1.41;
    }
    .login-menu{
      margin: 20px 0;
      text-align: center;
      color: #424242;
      font-size: 1rem;
      line-height: 1.4;
    }
    .login-submenu{
      display: inline-block;
      padding: 3px 5px;
      margin: -3px 10px;
    }
    .login-submenu:hover, .login-submenu:focus, .login-submenu:active {
      text-decoration: underline;
    }
    .invalid-message{
      background-color: rgba(255,0,0,0.5);
      width: 300px;
      height: 50px;
      text-align: center;
      border-radius: 8px;
      border: 1px solid #f56464;
      position: fixed;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      transition: opacity ease .3s;
    }
    .invalid-message span{
      line-height: 50px;
      color: white;
    }
    ::placeholder {
      color: black;
    }
    `
  ]
})
export class SigninComponent implements OnInit {
  capsOpacity = 0;
  messageOpacity = 0;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder
    , private authService: AuthService
    , private router: Router
    , private storageService: StorageService
    , private commonService: CommonService
    , private userService: UserService
    , private titleService: Title
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.titleService.setTitle("1등 인테리어 집꾸미기 서비스, 오늘의 집");
  }
  isOnCapslock(e: KeyAttribute) {
    this.capsOpacity = e.getModifierState("CapsLock") ? 1 : 0;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.messageOpacity = 1;
      setTimeout(() => { this.messageOpacity = 0; }, 2000);
    }
    else {
      const email = this.loginForm.get("email").value;
      const password = this.loginForm.get("password").value;

      this.authService.getToken(email, password).subscribe(res => {
        if (res["token"]) this.loginSuccess(res["token"]);
        else console.log("onSubmit fail");
      },
        (error: HttpErrorResponse) => { console.log(error) });
    }
  }

  loginSuccess(token: string) {
    this.commonService.setToken(token);
    this.storageService.setLocal("user", token);
    this.storageService.setSession("user", token);
    this.userService.getUser().subscribe((res) => {
      this.commonService.setUserDetail(res[0]);
      this.router.navigate(['/']);
    });

  }
  loginFail() {

  }
  kakaoLogin(userInfo: kakao_info | undefined) {
    if (userInfo) {
      const socialInfo: token_social = {
        type: "카카오",
        unique_user_id: userInfo.id,
        username: userInfo.properties.nickname,
        email: userInfo.kakao_account.email,
        social_profile: userInfo.properties.profile_image
      }
      this.authService.getToken4social(socialInfo).subscribe(
        res => {
          if (res["token"]) this.loginSuccess(res["token"]);
          else console.log("onSubmit fail");
        },
        (error: HttpErrorResponse) => { console.log(error) });
    }
  }

}
